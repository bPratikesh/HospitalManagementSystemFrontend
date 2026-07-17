import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import appointmentService from "@/services/appointmentService";
import { getUser } from "@/utils/storage";
import { showSuccess, showError } from "@/lib/toast";

function AppointmentForm({ doctorId }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // Disable previous dates
  const today = new Date().toISOString().split("T")[0];

  // Generate slots from 6 AM to 11:30 PM
  const generateTimeSlots = () => {
    const slots = [];

    for (let hour = 6; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 23 && minute > 30) break;

        const value = `${String(hour).padStart(2, "0")}:${String(
          minute,
        ).padStart(2, "0")}`;

        const display = new Date(`2000-01-01T${value}`).toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        slots.push({
          value,
          display,
        });
      }
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const onSubmit = async (data) => {
    try {
      const loggedInUser = getUser();

      const appointmentData = {
        symptoms: data.symptoms,
        time: `${data.date}T${data.time}:00`,
      };

      await appointmentService.createAppointment(
        loggedInUser.patientId,
        doctorId,
        appointmentData,
      );

      showSuccess("Appointment booked successfully.");

      reset();

      navigate("/patient/appointments");
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message || "Failed to book appointment.";

      showError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Symptoms */}

      <div>
        <label className="mb-2 block font-medium">Symptoms</label>

        <Textarea
          rows={4}
          placeholder="Describe your symptoms..."
          {...register("symptoms", {
            required: "Symptoms are required",
          })}
        />

        {errors.symptoms && (
          <p className="mt-1 text-sm text-red-500">{errors.symptoms.message}</p>
        )}
      </div>

      {/* Appointment Date */}

      <div>
        <label className="mb-2 block font-medium">Appointment Date</label>

        <Input
          type="date"
          min={today}
          {...register("date", {
            required: "Appointment date is required",
          })}
        />

        {errors.date && (
          <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      {/* Appointment Time */}

      <div>
        <label className="mb-2 block font-medium">Appointment Time</label>

        <select
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
          {...register("time", {
            required: "Appointment time is required",
          })}
        >
          <option value="">Select Time</option>

          {timeSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.display}
            </option>
          ))}
        </select>

        {errors.time && (
          <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Booking..." : "Book Appointment"}
      </Button>
    </form>
  );
}

export default AppointmentForm;

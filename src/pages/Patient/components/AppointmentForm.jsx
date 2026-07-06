import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import appointmentService from "@/services/appointmentService";
import { getUser } from "@/utils/storage";

function AppointmentForm({ doctorId }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const loggedInUser = getUser();

      const appointmentData = {
        symptoms: data.symptoms,
        time: `${data.date}T${data.time}:00`,
      };

      console.log("Appointment Request:", appointmentData);

      await appointmentService.createAppointment(
        loggedInUser.patientId,
        doctorId,
        appointmentData,
      );

      alert("Appointment booked successfully!");

      reset();

      navigate("/patient/appointments");
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message || "Failed to book appointment.";

      alert(message);
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

      {/* Date */}
      <div>
        <label className="mb-2 block font-medium">Appointment Date</label>

        <Input
          type="date"
          {...register("date", {
            required: "Appointment date is required",
          })}
        />

        {errors.date && (
          <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      {/* Time */}
      <div>
        <label className="mb-2 block font-medium">Appointment Time</label>

        <Input
          type="time"
          {...register("time", {
            required: "Appointment time is required",
          })}
        />

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

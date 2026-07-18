import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import AppointmentSlotCard from "./AppointmentSlotCard";

import appointmentService from "@/services/appointmentService";
import { getUser } from "@/utils/storage";
import { showSuccess, showError } from "@/lib/toast";

function AppointmentForm({ doctorId }) {
  const navigate = useNavigate();

  const [appointmentDate, setAppointmentDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!appointmentDate) {
      setSlots([]);
      setSelectedSlot("");
      return;
    }

    fetchSlots();
  }, [appointmentDate]);

  const fetchSlots = async () => {
    try {
      setLoadingSlots(true);

      const data = await appointmentService.getSlotAvailability(
        doctorId,
        appointmentDate,
      );

      setSlots(data);
      setSelectedSlot("");
    } catch (error) {
      console.error(error);
      showError("Failed to load appointment slots.");
    } finally {
      setLoadingSlots(false);
    }
  };

  const onSubmit = async (data) => {
    if (!appointmentDate) {
      showError("Please select appointment date.");
      return;
    }

    if (!selectedSlot) {
      showError("Please select an appointment slot.");
      return;
    }

    try {
      const loggedInUser = getUser();

      const appointmentData = {
        symptoms: data.symptoms,
        appointmentDate,
        appointmentSlot: selectedSlot,
      };

      await appointmentService.createAppointment(
        loggedInUser.patientId,
        doctorId,
        appointmentData,
      );

      showSuccess("Appointment booked successfully.");

      reset();

      setAppointmentDate("");
      setSlots([]);
      setSelectedSlot("");

      navigate("/patient/appointments");
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message || "Failed to book appointment.";

      showError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
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
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />
      </div>

      {/* Slots */}

      {appointmentDate && (
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold">
              Available Appointment Slots
            </h3>

            <p className="text-sm text-slate-500">
              Select one available consultation slot.
            </p>
          </div>

          {loadingSlots ? (
            <div className="rounded-lg border py-10 text-center text-slate-500">
              Loading available slots...
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {slots.map((slot) => (
                <AppointmentSlotCard
                  key={slot.slot}
                  slot={slot}
                  selected={selectedSlot === slot.slot}
                  onSelect={setSelectedSlot}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Booking..." : "Book Appointment"}
      </Button>
    </form>
  );
}

export default AppointmentForm;

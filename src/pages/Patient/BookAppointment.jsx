import { useParams } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import AppointmentForm from "./components/AppointmentForm";

function BookAppointment() {
  const { doctorId } = useParams();

  return (
    <div className="container max-w-3xl py-10">
      <Card>
        <CardContent className="space-y-6 p-8">
          <div>
            <h1 className="text-3xl font-bold">Book Appointment</h1>

            <p className="mt-2 text-slate-500">
              Please fill in the details below to book your appointment.
            </p>
          </div>

          <AppointmentForm doctorId={doctorId} />
        </CardContent>
      </Card>
    </div>
  );
}

export default BookAppointment;

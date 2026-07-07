import {
  CalendarDays,
  FileText,
  Pill,
  ClipboardList,
  Stethoscope,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PrescriptionCard({ prescription }) {
  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Medical Prescription</CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Doctor */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Stethoscope size={20} />
            Doctor
          </h2>

          <p className="mt-2">
            Dr. {prescription.appointment.doctor.doctorName}
          </p>

          <p className="text-slate-500">
            {prescription.appointment.doctor.speciality}
          </p>
        </div>

        {/* Appointment */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <CalendarDays size={20} />
            Prescription Date
          </h2>

          <p className="mt-2">{prescription.prescriptionDate}</p>
        </div>

        {/* Diagnosis */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <FileText size={20} />
            Diagnosis
          </h2>

          <div className="mt-2 rounded-lg bg-slate-50 p-4">
            {prescription.diagnosis}
          </div>
        </div>

        {/* Medicines */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Pill size={20} />
            Prescribed Medicines
          </h2>

          <div className="mt-2 whitespace-pre-line rounded-lg bg-slate-50 p-4">
            {prescription.prescribedMedicines}
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <ClipboardList size={20} />
            Instructions
          </h2>

          <div className="mt-2 whitespace-pre-line rounded-lg bg-slate-50 p-4">
            {prescription.instructions}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PrescriptionCard;

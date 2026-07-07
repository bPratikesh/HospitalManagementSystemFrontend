import { useNavigate } from "react-router-dom";
import { CalendarDays, FileText, Stethoscope } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { formatDate } from "@/utils/dateUtils";

function PrescriptionHistoryCard({ prescription }) {
  const navigate = useNavigate();

  const handleViewPrescription = () => {
    navigate(`/patient/prescription/${prescription.appointment.id}`);
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="space-y-5 p-6">
        {/* Doctor */}
        <div>
          <h2 className="text-xl font-semibold">
            Dr. {prescription.appointment.doctor.doctorName}
          </h2>

          <p className="mt-1 flex items-center gap-2 text-slate-500">
            <Stethoscope size={16} />

            {prescription.appointment.doctor.speciality}
          </p>
        </div>

        {/* Diagnosis */}
        <div className="flex items-start gap-3">
          <FileText className="mt-1 text-blue-600" size={18} />

          <div>
            <p className="text-sm text-slate-500">Diagnosis</p>

            <p className="font-medium">{prescription.diagnosis}</p>
          </div>
        </div>

        {/* Prescription Date */}
        <div className="flex items-center gap-3">
          <CalendarDays size={18} className="text-green-600" />

          <span>{formatDate(prescription.prescriptionDate)}</span>
        </div>

        {/* Action */}
        <div className="flex justify-end">
          <Button onClick={handleViewPrescription}>View Prescription</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PrescriptionHistoryCard;

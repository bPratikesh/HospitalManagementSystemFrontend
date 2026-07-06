import { BriefcaseMedical, IndianRupee } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="space-y-5 p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
            {doctor.doctorName.charAt(0)}
          </div>

          <h2 className="text-xl font-bold text-slate-800">
            {doctor.doctorName}
          </h2>

          <p className="text-slate-500">{doctor.speciality}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-600">
            <BriefcaseMedical size={18} />
            <span>{doctor.experience} Years Experience</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <IndianRupee size={18} />
            <span>{doctor.consultationFee}</span>
          </div>
        </div>

        <Button
          className="w-full"
          onClick={() => navigate(`/patient/book-appointment/${doctor.id}`)}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;

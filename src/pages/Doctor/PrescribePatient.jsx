import { useNavigate, useParams } from "react-router-dom";

import PrescriptionForm from "./components/PrescriptionForm";

import prescriptionService from "@/services/prescriptionService";

function PrescribePatient() {
  const { appointmentId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await prescriptionService.createPrescription(appointmentId, formData);

      alert("Prescription submitted successfully.");

      navigate("/doctor/appointments");
    } catch (error) {
      console.error(error);
      alert("Failed to submit prescription.");
    }
  };

  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold text-slate-800">
        Prescribe Patient
      </h1>

      <PrescriptionForm onSubmit={handleSubmit} />
    </div>
  );
}

export default PrescribePatient;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PrescriptionCard from "./components/PrescriptionCard";
import { showError } from "@/lib/toast";

import prescriptionService from "@/services/prescriptionService";

function PatientPrescription() {
  const { appointmentId } = useParams();

  const [prescription, setPrescription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrescription();
  }, []);

  const fetchPrescription = async () => {
    try {
      const data =
        await prescriptionService.getPrescriptionByAppointment(appointmentId);

      setPrescription(data);
    } catch (error) {
      console.error(error);
      // alert("Unable to fetch prescription.");
      showError("Unable to fetch prescription.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container py-10">Loading Prescription...</div>;
  }

  return (
    <div className=" py-2">
      <PrescriptionCard prescription={prescription} />
    </div>
  );
}

export default PatientPrescription;

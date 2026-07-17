import { useEffect, useState } from "react";

import PrescriptionHistoryCard from "./components/PrescriptionHistoryCard";

import prescriptionService from "@/services/prescriptionService";
import { getUser } from "@/utils/storage";
import { showError } from "@/lib/toast";

function PatientAllPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const loggedInUser = getUser();

      if (!loggedInUser) return;

      const data = await prescriptionService.getAllPrescriptionsByPatient(
        loggedInUser.patientId,
      );

      console.log(data);
      setPrescriptions(data);
    } catch (error) {
      console.error(error);
      // alert("Failed to fetch prescriptions.");
      showError("Failed to fetch prescriptions.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container py-10">Loading prescriptions...</div>;
  }

  if (prescriptions.length === 0) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-xl font-semibold">No prescriptions found.</h2>

        <p className="mt-2 text-slate-500">
          Your prescriptions will appear here after your doctor prescribes
          medicine.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-10">
      <h1 className="text-3xl font-bold">My Prescriptions</h1>

      {prescriptions.map((prescription) => (
        <PrescriptionHistoryCard
          key={prescription.prescriptionId}
          prescription={prescription}
        />
      ))}
    </div>
  );
}

export default PatientAllPrescriptions;

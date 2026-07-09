import { useEffect, useState } from "react";

import PatientProfileForm from "./components/PatientProfileForm";

import patientService from "@/services/patientService";
import { getUser, saveUser } from "@/utils/storage";
import { showSuccess, showError } from "@/lib/toast";

function PatientProfile() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatient();
  }, []);

  const fetchPatient = async () => {
    try {
      const loggedInUser = getUser();

      if (!loggedInUser) return;

      const data = await patientService.getPatientById(loggedInUser.patientId);

      setPatient(data);
    } catch (error) {
      console.error(error);
      //alert("Failed to load profile.");
      showError("Failed to load profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (formData) => {
    try {
      const loggedInUser = getUser();

      await patientService.updatePatient(loggedInUser.patientId, formData);

      saveUser({
        ...loggedInUser,
        name: formData.patientName,
      });

      showSuccess("Profile updated successfully.");

      fetchPatient();

      setTimeout(() => {
        window.location.reload();
      }, 400);
    } catch (error) {
      console.error(error);

      showError("Failed to update profile.");
    }
  };

  if (loading) {
    return <div className="container py-10">Loading Profile...</div>;
  }

  return (
    <div className="container py-10">
      <PatientProfileForm patient={patient} onSubmit={handleUpdate} />
    </div>
  );
}

export default PatientProfile;

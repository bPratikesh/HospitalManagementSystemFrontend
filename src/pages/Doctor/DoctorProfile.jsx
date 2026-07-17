import { useEffect, useState } from "react";

import DoctorProfileForm from "./components/DoctorProfileForm";

import doctorService from "@/services/doctorService";
import { getUser, saveUser } from "@/utils/storage";
import { showSuccess, showError } from "@/lib/toast";

function DoctorProfile() {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const loggedInUser = getUser();

      if (!loggedInUser) return;

      const data = await doctorService.getDoctorById(loggedInUser.doctorId);

      setDoctor(data);
    } catch (error) {
      console.error(error);
      // alert("Failed to load profile.");
      showError("Failed to load profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (formData) => {
    try {
      const loggedInUser = getUser();

      await doctorService.updateDoctor(loggedInUser.doctorId, formData);

      saveUser({
        ...loggedInUser,
        name: formData.doctorName,
      });

      // alert("Profile updated successfully.");
      showSuccess("Profile updated successfully.");

      fetchDoctor();

      window.location.reload();
    } catch (error) {
      console.error(error);
      // alert("Failed to update profile.");
      showError("Failed to update profile.");
    }
  };

  if (loading) {
    return <div className="container py-10">Loading Profile...</div>;
  }

  return (
    <div className=" py-2">
      <DoctorProfileForm doctor={doctor} onSubmit={handleUpdate} />
    </div>
  );
}

export default DoctorProfile;

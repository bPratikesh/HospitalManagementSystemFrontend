import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function PatientProfileForm({ patient, onSubmit }) {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    bloodGroup: "",
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        patientName: patient.patientName ?? "",
        age: patient.age ?? "",
        gender: patient.gender ?? "",
        bloodGroup: patient.bloodGroup ?? "",
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">My Profile</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>

            <Input
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Age</label>

            <Input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Gender</label>

            <Input
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Blood Group
            </label>

            <Input
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default PatientProfileForm;

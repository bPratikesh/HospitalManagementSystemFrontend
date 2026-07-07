import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function DoctorProfileForm({ doctor, onSubmit }) {
  const [formData, setFormData] = useState({
    doctorName: "",
    experience: "",
    speciality: "",
    consultationFee: "",
  });

  useEffect(() => {
    if (doctor) {
      setFormData({
        doctorName: doctor.doctorName ?? "",
        experience: doctor.experience ?? "",
        speciality: doctor.speciality ?? "",
        consultationFee: doctor.consultationFee ?? "",
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      experience: Number(formData.experience),
      consultationFee: Number(formData.consultationFee),
    });
  };

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">My Profile</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Doctor Name
            </label>

            <Input
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Experience (Years)
            </label>

            <Input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Speciality</label>

            <Input
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Consultation Fee (₹)
            </label>

            <Input
              type="number"
              name="consultationFee"
              value={formData.consultationFee}
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

export default DoctorProfileForm;

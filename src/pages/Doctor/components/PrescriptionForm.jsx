import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function PrescriptionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    diagnosis: "",
    prescribedMedicines: "",
    instructions: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="mx-auto max-w-3xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">Diagnosis</label>

            <Input
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              placeholder="Enter diagnosis"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Prescribed Medicines
            </label>

            <Textarea
              name="prescribedMedicines"
              value={formData.prescribedMedicines}
              onChange={handleChange}
              placeholder="Medicine name, dosage, frequency..."
              rows={6}
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Instructions</label>

            <Textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Diet, precautions, follow-up..."
              rows={5}
              required
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Save Prescription</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default PrescriptionForm;

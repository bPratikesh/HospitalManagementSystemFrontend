import { useEffect, useState } from "react";

import doctorService from "@/services/doctorService";
import DoctorCard from "./components/DoctorCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function BrowseDoctors() {
  const [allDoctors, setAllDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchName, setSearchName] = useState("");
  const [speciality, setSpeciality] = useState("");

  const specializations = [
    ...new Set(allDoctors.map((doctor) => doctor.speciality)),
  ].sort();

  const fetchDoctors = async () => {
    try {
      const data = await doctorService.getDoctorsForPatients();

      setAllDoctors(data);
      setFilteredDoctors(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, []);
  useEffect(() => {
    let result = [...allDoctors];

    if (searchName.trim()) {
      result = result.filter((doctor) =>
        doctor.doctorName.toLowerCase().startsWith(searchName.toLowerCase()),
      );
    }

    if (speciality && speciality !== "all") {
      result = result.filter(
        (doctor) =>
          doctor.speciality.toLowerCase() === speciality.toLowerCase(),
      );
    }

    setFilteredDoctors(result);
  }, [searchName, speciality, allDoctors]);

  if (loading) {
    return (
      <div className="container py-10 text-center">Loading doctors...</div>
    );
  }

  return (
    <div className="py-2">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Browse Doctors</h1>

        <p className="mt-2 text-slate-500">
          Search doctors by name or specialization.
        </p>
      </div>

      <div className="mb-10 grid gap-6 rounded-xl border bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <Label className="h-5">Doctor Name</Label>

          <Input
            placeholder="Search by doctor name..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Specialization</Label>

          <Select value={speciality} onValueChange={setSpeciality}>
            <SelectTrigger className="h-10 w-full">
              <SelectValue placeholder="All Specializations" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Specializations</SelectItem>

              {specializations.map((specialization) => (
                <SelectItem key={specialization} value={specialization}>
                  {specialization}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="rounded-xl border border-dashed py-14 text-center">
          <h3 className="text-xl font-semibold text-slate-700">
            No doctors found
          </h3>

          <p className="mt-2 text-slate-500">
            Try changing the name or specialization.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseDoctors;

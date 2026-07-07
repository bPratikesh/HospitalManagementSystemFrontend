import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { FaUserInjured } from "react-icons/fa";

import AuthHeader from "@/components/common/AuthHeader";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import authService from "@/services/authService";
import { GENDERS, BLOOD_GROUPS } from "@/utils/constants";

function PatientRegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      // name: "",
      email: "",
      password: "",
      patientName: "",
      age: "",
      gender: "",
      bloodGroup: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await authService.registerPatient(data);

      console.log(response.data);

      alert("Patient Registered Successfully!");

      navigate("/login");
    } catch (error) {
      const message = error.response?.data?.message || "Registration Failed";

      alert(message);
    }
  };

  return (
    <>
      <AuthHeader
        title="Patient Registration"
        subtitle="Create your patient account."
      />

      <Card className="mx-auto w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Register as Patient
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* ---------------- Account Information ---------------- */}

            <div>
              <h2 className="mb-5 border-b pb-2 text-lg font-semibold text-slate-700">
                Account Information
              </h2>

              <div className="space-y-5">
                {/* <div>
                  <Label>Full Name</Label>

                  <Input
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: "Full Name is required",
                    })}
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div> */}

                <div>
                  <Label>Email</Label>

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Password</Label>

                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ---------------- Personal Information ---------------- */}

            <div>
              <h2 className="mb-5 border-b pb-2 text-lg font-semibold text-slate-700">
                Personal Information
              </h2>

              <div className="space-y-5">
                <div>
                  <Label>Patient Name</Label>

                  <Input
                    placeholder="Enter patient name"
                    {...register("patientName", {
                      required: "Patient Name is required",
                    })}
                  />

                  {errors.patientName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.patientName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Age</Label>

                  <Input
                    type="number"
                    placeholder="Enter age"
                    {...register("age", {
                      required: "Age is required",
                      min: {
                        value: 1,
                        message: "Age must be greater than zero",
                      },
                      valueAsNumber: true,
                    })}
                  />

                  {errors.age && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.age.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Gender</Label>

                  <Controller
                    name="gender"
                    control={control}
                    rules={{
                      required: "Gender is required",
                    }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>

                        <SelectContent>
                          {GENDERS.map((gender) => (
                            <SelectItem key={gender} value={gender}>
                              {gender}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />

                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.gender.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Blood Group</Label>

                  <Controller
                    name="bloodGroup"
                    control={control}
                    rules={{
                      required: "Blood Group is required",
                    }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Blood Group" />
                        </SelectTrigger>

                        <SelectContent>
                          {BLOOD_GROUPS.map((group) => (
                            <SelectItem key={group} value={group}>
                              {group}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />

                  {errors.bloodGroup && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.bloodGroup.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </Button>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default PatientRegisterForm;

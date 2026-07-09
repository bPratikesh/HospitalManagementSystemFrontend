import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { FaUserDoctor } from "react-icons/fa6";

import AuthHeader from "@/components/common/AuthHeader";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import authService from "@/services/authService";
import { showSuccess, showError } from "@/lib/toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SPECIALITIES } from "@/utils/constants";

function DoctorRegisterForm() {
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
      doctorName: "",
      experience: "",
      speciality: "",
      consultationFee: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await authService.registerDoctor(data);

      console.log("Doctor Registered Successfully");

      console.log(response.data);

      // alert("Doctor Registered Successfully!");
      showSuccess("Doctor registration completed successfully.");

      navigate("/login");
    } catch (error) {
      const message = error.response?.data?.message || "Registration Failed";
      console.error(error);

      //alert(message);
      showError(message);
    }
  };
  return (
    <>
      <AuthHeader
        title="Create Doctor Account"
        subtitle="Join DocCare and start managing your patients efficiently."
      />

      <Card className="mx-auto w-full max-w-2xl shadow-lg mb-50">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <FaUserDoctor className="text-blue-600" />
            Doctor Registration
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Account Information */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <h2 className="mb-5 border-b pb-2 text-lg font-semibold text-slate-700">
                Account Information
              </h2>

              <div className="space-y-5">
                {/* Full Name */}

                {/* <div>
                  <Label htmlFor="name">Full Name</Label>

                  <Input
                    id="name"
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

                {/* Email */}

                <div>
                  <Label htmlFor="email">Email</Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",

                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}

                <div>
                  <Label htmlFor="password">Password</Label>

                  <Input
                    id="password"
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

            {/* Professional Information */}

            {/* Professional Information */}

            <div>
              <h2 className="mb-5 border-b pb-2 text-lg font-semibold text-slate-700">
                Professional Information
              </h2>

              <div className="space-y-5">
                {/* Doctor Name */}

                <div>
                  <Label htmlFor="doctorName">Doctor Name</Label>

                  <Input
                    id="doctorName"
                    placeholder="Enter doctor display name"
                    {...register("doctorName", {
                      required: "Doctor Name is required",
                    })}
                  />

                  {errors.doctorName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.doctorName.message}
                    </p>
                  )}
                </div>

                {/* Experience */}

                <div>
                  <Label htmlFor="experience">Experience (Years)</Label>

                  <Input
                    id="experience"
                    type="number"
                    placeholder="Years of experience"
                    {...register("experience", {
                      required: "Experience is required",
                      min: {
                        value: 0,
                        message: "Experience cannot be negative",
                      },
                      valueAsNumber: true,
                    })}
                  />

                  {errors.experience && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.experience.message}
                    </p>
                  )}
                </div>

                {/* Speciality */}

                <div>
                  <Label>Speciality</Label>

                  <Controller
                    name="speciality"
                    control={control}
                    rules={{
                      required: "Speciality is required",
                    }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select speciality" />
                        </SelectTrigger>

                        <SelectContent>
                          {SPECIALITIES.map((speciality) => (
                            <SelectItem key={speciality} value={speciality}>
                              {speciality}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />

                  {errors.speciality && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.speciality.message}
                    </p>
                  )}
                </div>

                {/* Consultation Fee */}

                <div>
                  <Label htmlFor="consultationFee">Consultation Fee (₹)</Label>

                  <Input
                    id="consultationFee"
                    type="number"
                    placeholder="Enter consultation fee"
                    {...register("consultationFee", {
                      required: "Consultation Fee is required",
                      min: {
                        value: 1,
                        message: "Consultation Fee must be greater than zero",
                      },
                      valueAsNumber: true,
                    })}
                  />

                  {errors.consultationFee && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.consultationFee.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </Button>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?
              <Link
                to="/login"
                className="ml-2 font-semibold text-blue-600 hover:underline"
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

export default DoctorRegisterForm;

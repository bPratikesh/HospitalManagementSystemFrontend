import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";

import AuthHeader from "@/components/common/AuthHeader";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

import authService from "@/services/authService";
import { saveUser } from "@/utils/storage";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

 const onSubmit = async (data) => {
  try {
    const response = await authService.login(data);

    console.log(response.data);

    saveUser(response.data);

    alert("Login Successful!");

    if (response.data.role === "DOCTOR") {
      navigate("/doctor");
    } else {
      navigate("/patient");
    }

  } catch (error) {

    const message =
      error.response?.data?.message ||
      "Login Failed";

    alert(message);
  }
};
  const navigate = useNavigate();
  return (
    <>
      <AuthHeader
        icon={<FaSignInAlt />}
        title=" Sign in"
        subtitle="to access your dashboard and manage appointments."
      />

      <Card className="mx-auto w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}

            <div>
              <Label>Email</Label>

              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
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
              <Label>Password</Label>

              <Input
                type="password"
                placeholder="Enter your password"
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

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isSubmitting}
            >
              Login
            </Button>

            <p className="text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default Login;

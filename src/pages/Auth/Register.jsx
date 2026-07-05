import { useNavigate } from "react-router-dom";

import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import AuthHeader from "@/components/common/AuthHeader";

import RoleCard from "./RoleCard";

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <AuthHeader
        title="Create Your Account"
        subtitle="Join DocCare and start managing your healthcare with ease."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <RoleCard
          icon={<FaUserDoctor />}
          title="Doctor"
          description="Manage appointments, prescribe medicines and receive consultation payments."
          onClick={() => navigate("/doctor-register")}
        />

        <RoleCard
          icon={<FaUser />}
          title="Patient"
          description="Book appointments, pay consultation fees and access prescriptions."
          onClick={() => navigate("/patient-register")}
        />
      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        Already have an account?
        <button
          onClick={() => navigate("/login")}
          className="ml-2 font-semibold text-blue-600 hover:underline"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Register;

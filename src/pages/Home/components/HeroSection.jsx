import { Link } from "react-router-dom";
import {
  Stethoscope,
  CalendarDays,
  ShieldCheck,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import hospitalImage from "@/assets/DocCareeImage.png";

import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container flex min-h-[85vh] flex-col items-center justify-between gap-14 py-20 lg:flex-row pt-10">
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Smart Healthcare Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Doctor Patient
            <span className="text-blue-600"> Management System</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Simplify healthcare by booking appointments, receiving digital
            prescriptions, securely paying consultation fees and managing all
            your medical interactions in one place.
          </p>

          {/* <div className="mt-10 flex flex-wrap gap-5">
            <Link to="/register">
              <Button
                size="lg"
                className="group h-12 cursor-pointer rounded-xl bg-blue-600 px-8 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
              >
                <UserPlus
                  size={18}
                  className="mr-2 transition-transform duration-300 group-hover:scale-110"
                />
                Register
              </Button>
            </Link>

            <Link to="/login">
              <Button
                size="lg"
                className="group h-12 cursor-pointer rounded-xl border-2 border-blue-600 bg-white px-8 text-base font-semibold text-blue-600 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-2xl"
              >
                Sign In
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div> */}

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-blue-600" />
              <span className="font-medium">Easy Appointment Booking</span>
            </div>

            <div className="flex items-center gap-3">
              <Stethoscope className="text-blue-600" />
              <span className="font-medium">Digital Prescriptions</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <span className="font-medium">Wallet Payments</span>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <img src={hospitalImage} alt="Healthcare" className="h-135 rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

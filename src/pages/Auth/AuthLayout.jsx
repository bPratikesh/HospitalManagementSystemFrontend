import { FaUserDoctor } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="container flex min-h-screen items-center justify-center py-12">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-center bg-blue-600 p-12 text-white lg:flex">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-white/20 p-6">
                <FaUserDoctor size={80} />
              </div>
            </div>

            <h2 className="mb-4 text-center text-4xl font-bold">
              Welcome to DocCare
            </h2>

            <p className="text-center text-lg leading-8 text-blue-100">
              Manage appointments, prescriptions, payments and healthcare
              records through one secure platform.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 sm:p-12">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;

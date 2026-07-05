import { Stethoscope } from "lucide-react";

function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-blue-100 p-4">
          <Stethoscope size={40} className="text-blue-600" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>

      <p className="mt-2 text-slate-500">{subtitle}</p>
    </div>
  );
}

export default AuthHeader;

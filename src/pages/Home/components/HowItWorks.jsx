import {
  UserPlus,
  CalendarDays,
  Stethoscope,
  Wallet,
  FileText,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description:
      "Create a Doctor or Patient account to securely access the platform.",
  },
  {
    icon: CalendarDays,
    title: "Book Appointment",
    description:
      "Patients can browse doctors and book appointments based on their healthcare needs.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Consultation",
    description:
      "Doctors review appointments, consult patients, and prescribe medicines digitally.",
  },
  {
    icon: Wallet,
    title: "Pay Consultation Fee",
    description:
      "Patients securely pay the consultation fee through the built-in wallet system.",
  },
  {
    icon: FileText,
    title: "View Prescription",
    description:
      "After successful payment, patients can instantly access their digital prescription.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">How It Works</h2>

          <p className="mt-4 text-lg text-slate-600">
            A simple and secure workflow that connects patients and doctors
            digitally.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-4xl">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Icon size={26} />
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="mt-2 h-full w-[3px] bg-blue-200" />
                  )}
                </div>

                {/* Content */}
                <div className="rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 w-145">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

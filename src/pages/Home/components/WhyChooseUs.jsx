import { Stethoscope, CalendarCheck, Wallet, FileText } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Easy Appointment Booking",
    description:
      "Book appointments with doctors in just a few clicks through a simple and intuitive interface.",
  },
  {
    icon: Stethoscope,
    title: "Digital Consultations",
    description:
      "Doctors can manage appointments, prescribe medicines digitally, and maintain patient records efficiently.",
  },
  {
    icon: Wallet,
    title: "Secure Wallet Payments",
    description:
      "Pay consultation fees securely through the integrated wallet system without any hassle.",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description:
      "Access prescriptions anytime after successful payment without worrying about losing paper records.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose DocCare?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Designed to simplify healthcare management for both doctors and
            patients with a secure, fast, and user-friendly experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition-colors group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

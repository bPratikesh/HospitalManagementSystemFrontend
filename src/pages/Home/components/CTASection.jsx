import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Ready to Simplify Healthcare?
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Join DocCare today to book appointments, manage consultations,
            access digital prescriptions, and experience seamless healthcare
            management—all from one secure platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white px-8 text-blue-600 hover:bg-slate-100 cursor-pointer h-12 w-40"
              >
                Get Started
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-blue-600 cursor-pointer h-12 w-40"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

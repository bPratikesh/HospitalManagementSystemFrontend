import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-300">
      <div className="container py-14">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <Stethoscope size={34} className="text-blue-400" />

              <h2 className="text-3xl font-bold text-white">DocCare</h2>
            </div>

            <p className="mt-5 max-w-md leading-8 text-slate-400">
              DocCare is a Doctor Patient Management System that simplifies
              appointment booking, digital prescriptions, secure wallet payments
              and healthcare management on a single platform.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>pratikeshb9@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>DocCare Clinic Navi Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/bPratikesh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <BsGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/pratikesh-borade-059226190/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <BsLinkedin size={20} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <BsTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-800 pt-5 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} DocCare. All Rights Reserved.</p>

          <p className="mt-2">
            Built with using React, Spring Boot & MySQL.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

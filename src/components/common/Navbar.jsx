import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

import {
  guestLinks,
  doctorLinks,
  patientLinks,
} from "@/utils/navLinks";

function Navbar() {
  const {
    user: currentUser,
    role,
    isAuthenticated,
  } = useAuth();

  // Decide which navigation links to display
  const navLinks =
    role === "DOCTOR"
      ? doctorLinks
      : role === "PATIENT"
      ? patientLinks
      : guestLinks;

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <Stethoscope
            size={30}
            className="text-blue-600"
          />

          <span className="text-2xl font-bold text-slate-800">
            DocCare
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-700">
              {currentUser.name}
            </span>

            <Button variant="outline">
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button>
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
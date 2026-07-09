import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Stethoscope, User, UserPlus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import useAuth from "@/hooks/useAuth";

import { removeUser } from "@/utils/storage";

import { guestLinks, doctorLinks, patientLinks } from "@/utils/navLinks";

function Navbar() {
  const { user: currentUser, role, isAuthenticated } = useAuth();

  // Decide which navigation links to display
  const navLinks =
    role === "DOCTOR"
      ? doctorLinks
      : role === "PATIENT"
        ? patientLinks
        : guestLinks;

  const navigate = useNavigate();
  const handleLogout = () => {
    removeUser();
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Stethoscope size={30} className="text-blue-600" />

          <span className="text-2xl font-bold text-slate-800">DocCare</span>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User size={18} />

                  <span>{currentUser.name}</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/register">
              <Button
                size="lg"
                className="group h-9 w-30 cursor-pointer rounded-xl bg-blue-600 px-8 text-base font-semibold text-white shadow-lg transition-all duration-300  hover:bg-blue-700 hover:shadow-2xl"
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
                className="group h-9 w-30 cursor-pointer rounded-xl border-2 border-blue-600 bg-white px-8 text-base font-semibold text-blue-600 shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl"
              >
                Sign In
                <ArrowRight
                  size={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

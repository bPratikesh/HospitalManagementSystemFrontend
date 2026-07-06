import { Link, useNavigate } from "react-router-dom";
import { Stethoscope, User } from "lucide-react";

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
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>

            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

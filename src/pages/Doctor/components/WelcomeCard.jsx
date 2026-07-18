import { Card, CardContent } from "@/components/ui/card";

function WelcomeCard({ doctorName }) {
  return (
    <Card className="border-none bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl">
      <CardContent className="space-y-2 p-6">
        <h1 className="text-3xl font-bold">
          Welcome back, Dr. {doctorName} 👋
        </h1>

        <p className="text-blue-100 text-lg">
          Manage your appointments, patients and prescriptions from your
          dashboard.
        </p>
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;

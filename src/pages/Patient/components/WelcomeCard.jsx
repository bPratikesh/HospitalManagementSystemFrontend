import { Card, CardContent } from "@/components/ui/card";

function WelcomeCard({ patientName }) {
  return (
    <Card className="border-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
      <CardContent className="p-8">
        <h1 className="text-3xl font-bold">Welcome back, {patientName}! 👋</h1>

        <p className="mt-3 text-green-100">
          Here's a quick overview of your health dashboard.
        </p>
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;

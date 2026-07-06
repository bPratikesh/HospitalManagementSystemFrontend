import { Card, CardContent } from "@/components/ui/card";

function StatsCard({ title, value, icon }) {
  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">{value}</h2>
        </div>

        <div className="rounded-full bg-blue-100 p-3 text-blue-600">{icon}</div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;

import { Card, CardContent } from "@/components/ui/card";

function DashboardCard({ title, value, icon: Icon, iconBg, iconColor }) {
  return (
    <Card className="border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">{value}</h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}
        >
          <Icon className={iconColor} size={28} />
        </div>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;

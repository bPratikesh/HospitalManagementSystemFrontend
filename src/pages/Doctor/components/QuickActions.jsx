import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

function QuickActions({ actions }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-800">Quick Actions</h2>

      <div className="grid gap-20 md:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link key={action.title} to={action.path} className="block w-100 ">
              <Card className="min-h-20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="rounded-full bg-blue-100 p-4 text-blue-600">
                    <Icon size={32} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {action.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {action.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;

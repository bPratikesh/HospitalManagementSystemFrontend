import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

function QuickActions({ actions }) {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold text-slate-800">Quick Actions</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link key={action.title} to={action.path} className="block">
              <Card className="h-60 cursor-pointer border-t-4 border-t-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Icon size={34} />
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

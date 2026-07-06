import { Wallet } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function WalletCard({ balance }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-slate-500">Wallet Balance</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            ₹ {balance}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Use your wallet to pay consultation fees.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-green-100 p-4 text-green-600">
            <Wallet size={34} />
          </div>

          <Button size="sm">Add Money</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default WalletCard;

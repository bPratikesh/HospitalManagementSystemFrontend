
import { Card, CardContent } from "@/components/ui/card";

function WalletCard({ balance }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-slate-500">Wallet Balance</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            ₹ {balance}
          </h2>
        </div>
      </CardContent>
    </Card>
  );
}

export default WalletCard;

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SLOT_LABELS = {
  NINE_TO_ELEVEN: "9:00 AM - 11:00 AM",
  ELEVEN_TO_ONE: "11:00 AM - 1:00 PM",
  TWO_TO_FOUR: "2:00 PM - 4:00 PM",
  FOUR_TO_SIX: "4:00 PM - 6:00 PM",
  SIX_TO_EIGHT: "6:00 PM - 8:00 PM",
  NINE_TO_ELEVEN_PM: "9:00 PM - 11:00 PM",
};

function AppointmentSlotCard({ slot, selected, onSelect }) {
  const getBadge = () => {
    if (!slot.available) return <Badge variant="destructive">FULL</Badge>;

    if (slot.remaining <= 2)
      return (
        <Badge className="bg-amber-500 hover:bg-amber-500">
          Only {slot.remaining} Left
        </Badge>
      );

    return (
      <Badge className="bg-green-600 hover:bg-green-600">
        {slot.remaining} Available
      </Badge>
    );
  };

  return (
    <Card
      onClick={() => {
        if (!slot.available) return;
        onSelect(slot.slot);
      }}
      onDoubleClick={() => onSelect("")}
      className={`cursor-pointer p-5 transition-all duration-300 ${
        selected
          ? "scale-[1.02] border-2 border-blue-600 bg-blue-50 shadow-lg"
          : "hover:border-blue-400 hover:shadow-md"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{SLOT_LABELS[slot.slot]}</h3>

          <p className="mt-2 text-sm text-slate-500">
            {slot.booked} / 8 Booked
          </p>
        </div>

        {getBadge()}
      </div>
    </Card>
  );
}

export default AppointmentSlotCard;

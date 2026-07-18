export const formatSlot = (slot) => {
  const slots = {
    NINE_TO_ELEVEN: "9:00 AM - 11:00 AM",
    ELEVEN_TO_ONE: "11:00 AM - 1:00 PM",
    TWO_TO_FOUR: "2:00 PM - 4:00 PM",
    FOUR_TO_SIX: "4:00 PM - 6:00 PM",
    SIX_TO_EIGHT: "6:00 PM - 8:00 PM",
    NINE_TO_ELEVEN_PM: "9:00 PM - 11:00 PM",
  };

  return slots[slot] || slot;
};

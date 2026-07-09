import { toast } from "sonner";
import { CircleCheck, CircleX, TriangleAlert, Info } from "lucide-react";

export const showSuccess = (message) => {
  toast.success(message, {
    icon: <CircleCheck size={28} />,
  });
};

export const showError = (message) => {
  toast.error(message, {
    icon: <CircleX size={18} />,
  });
};

export const showWarning = (message) => {
  toast.warning(message, {
    icon: <TriangleAlert size={18} />,
  });
};

export const showInfo = (message) => {
  toast.info(message, {
    icon: <Info size={18} />,
  });
};

import {
  LoaderCircle,
  CreditCard,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

function PaymentProcessingDialog({ open, message }) {
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        showCloseButton={false}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
        className="max-w-md border-0 rounded-2xl bg-white p-10 shadow-2xl"
      >
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Payment Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <CreditCard size={40} className="text-blue-600" />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Processing Payment
            </h2>

            <p className="mt-2 text-slate-500">
              Please wait while we securely process your consultation fee.
            </p>
          </div>

          {/* Spinner */}
          <LoaderCircle size={42} className="animate-spin text-blue-600" />

          {/* Progress Box */}
          <div className="w-full rounded-xl bg-slate-100 p-5">
            <div className="flex items-center gap-3">
              <CircleCheck size={18} className="text-green-600" />

              <span className="text-sm font-medium text-slate-700">
                {message}
              </span>
            </div>
          </div>

          {/* Warning */}
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-700">
            Please do not close or refresh this page while your payment is being
            processed.
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={18} className="text-green-600" />

            <span>Secured by DocCare</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentProcessingDialog;

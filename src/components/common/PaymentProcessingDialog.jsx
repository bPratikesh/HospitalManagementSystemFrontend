import { LoaderCircle, CreditCard, ShieldCheck } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

function PaymentProcessingDialog({ open, message }) {
  return (
    <Dialog open={open}>
      <DialogContent
        className="max-w-md border-0 bg-white p-10 shadow-2xl"
        hideCloseButton
      >
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
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

          {/* Loader */}
          <LoaderCircle size={42} className="animate-spin text-blue-600" />

          {/* Dynamic Message */}
          <div className="rounded-lg bg-slate-100 px-5 py-3 text-sm font-medium text-slate-700 w-full">
            {message}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={18} className="text-green-600" />

            <span>Secure payment powered by DocCare</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentProcessingDialog;

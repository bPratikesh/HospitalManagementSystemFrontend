import { ArrowRight } from "lucide-react";

function RoleCard({
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        group
        cursor-pointer
        rounded-xl
        border
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-xl
      "
    >
      <div className="mb-5 flex justify-center text-5xl text-blue-600">
        {icon}
      </div>

      <h2 className="text-center text-xl font-semibold text-slate-800">
        {title}
      </h2>

      <p className="mt-3 text-center text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-center gap-2 font-medium text-blue-600 transition-all group-hover:gap-3">
        Continue

        <ArrowRight size={18} />
      </div>
    </div>
  );
}

export default RoleCard;
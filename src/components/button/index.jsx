import { Plus, Loader2 } from "lucide-react";

const Button = ({
  text = "Button",
  onClick,
  disabled = false,
  loading = false,
  variant = "primary", // primary | secondary | danger
  size = "md", // sm | md | lg
  icon = true,
}) => {

  // 🔹 Variants
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // 🔹 Sizes
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2 rounded-lg transition duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {/* 🔄 Loading Spinner */}
      {loading ? (
        <Loader2 className="animate-spin" size={16} />
      ) : (
        icon && <Plus size={16} />
      )}

      {text}
    </button>
  );
};

export default Button;
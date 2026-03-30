export default function Button2({ children, type = "button", onClick, disabled = false, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` w-[190px] mx-auto py-2.5 px-4 border-2 border-[#0080FF] rounded-lg font-bold text-sm text-[#0080FF]
        bg-white hover:bg-slate-500 active:bg-slate-700
        focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1
        disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150
        ${className}`}
    >
      {children}
    </button>
  )
}
export default function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error = "",
  placeholder = "",
  autoComplete,
}) {
  return (
    <div className="flex flex-col gap-1 mx-auto">
      <label htmlFor={id} className="text-[24px] font-semibold text-[#C4C4C4]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`sm:w-[280px] w-[200px] px-3 py-2 border border-x-0 border-t-0 border-y-2 text-[20px] text-slate-900
          focus:outline-none focus:ring-2 transition-colors text-center font-semibold

          ${error
            ? "border-red-400 focus:ring-red-300 bg-red-50"
            : "border-slate-300 focus:ring-indigo-300 bg-white"
          }`}
      />
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  )
}
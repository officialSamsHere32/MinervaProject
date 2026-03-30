export default function TextAreaField({
  id,
  label,
  value,
  onChange,
  error = null,
  placeholder = "",
  rows = 4,}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-semibold text-[#C4C4C4]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`px-3 py-2 border border-x-0 border-t-0 border-b-0 text-[20px] text-slate-900
          focus:outline-none focus:ring-2 transition-colors text-center font-semibold mb-8
          ${error
            ? "border-red-400 focus:ring-red-300 bg-red-50"
            : "border-slate-300 focus:ring-indigo-300 bg-white"
          }`}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  )
}
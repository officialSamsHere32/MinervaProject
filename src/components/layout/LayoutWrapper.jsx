export default function LayoutWrapper({ children, className = "" }) {
  return (
    <div className="min-h-screen bg-[#0080FF] flex items-center justify-center px-4 py-12">
        <div className={`w-full max-w-md bg-white rounded-2xl shadow-lg p-8 ${className}`}>
            {children}
        </div>
    </div>
  )
}

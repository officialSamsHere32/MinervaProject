import {useState} from 'react' 
import InputField from '../ui/InputField'
import TextAreaField from '../ui/TextAreaField'
import Button from '../ui/Button1'
import { validateRegister } from '../../validation/validation'
import Button2 from '../ui/Button2'
import { register } from '../../services/authService'

export default function ContactFormRegister({
  onSubmit,
  title = "Daftar",
  submitLabel = "Registered!",
  Google = ""
}) {
 // hooks
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    Konfirmasi: "",
  })
// hooks for error handling
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    Konfirmasi: "",
  })
  const [isLoading, setIsLoading] = useState(false)

   //handle change untuk semua field, menggunakan name attribute untuk menentukan field mana yang berubah
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

   //trigger validation saat submit, jika validasi berhasil maka panggil onSubmit dengan formData
  const handleSubmit = (e) => {
    e.preventDefault()      
    setIsLoading(true)
    
    // Validate form data
    const validationErrors = validateRegister(formData)
    setErrors(validationErrors)
    
    const hasErrors = Object.values(validationErrors).some((msg) => msg !== "")
    if (hasErrors) {
      setIsLoading(false)
      alert("Please fix the errors before submitting.")
      return
    }
    
    // Attempt registration
    const result = register(formData.name, formData.password)
    
    if (result.success) {
      alert(result.message)
      onSubmit(result.user)
      // Reset form
      setFormData({ name: "", password: "", Konfirmasi: "" })
    } else {
      alert(result.message)
      setErrors({
        name: result.message.includes('Username') ? result.message : "",
        password: "",
        Konfirmasi: ""
      })
    }
    
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col pb-0">
      <h2 className="text-[40px] font-bold text-slate-800 text-center">{title}</h2>
      <p className='text-[18px] font-base text-[#333333] text-center mb-10'>Daftar dan bergabung ke <br /> dalam kelas</p>
      <InputField
        id="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Username"
        autoComplete="username"
      />

      <InputField
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Password"
        autoComplete="new-password"
      />
      <TextAreaField
        id="Konfirmasi"
        type="password"
        value={formData.Konfirmasi}
        onChange={handleChange}
        error={errors.Konfirmasi}
        placeholder="Konfirmasi Password"
        autoComplete="new-password"
      />

    <div className="flex gap-4 mt-6">
      <Button type='submit' disabled={isLoading}>{isLoading ? 'Tunggu...' : submitLabel}</Button>
      <Button2 type='button'>{Google}</Button2>
      </div>
      <p className='text-center text-sm mt-4 flex mx-auto gap-1'>Sudah punya akun? <a href="/masuk" className='text-center text-sm text-blue-500'> Masuk</a></p>
    </form>
  )
}
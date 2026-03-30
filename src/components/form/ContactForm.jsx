import {useState} from 'react' 
import InputField from '../ui/InputField'
import TextAreaField from '../ui/TextAreaField'
import Button from '../ui/Button1'
import validate from '../../validation/validation'
import Button2 from '../ui/Button2'

export default function ContactForm({
  onSubmit,
  title = "Masuk",
  submitLabel = "Logged in!",
  Google = ""
}) {
 // hooks
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  })
// hooks for error handling
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  })

   //handle change untuk semua field, menggunakan name attribute untuk menentukan field mana yang berubah
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

   //trigger validation saat submit, jika validasi berhasil maka panggil onSubmit dengan formData
  const handleSubmit = (e) => {
    e.preventDefault()      
    // setisName("samuel christian")
    // function validate akan mengembalikan object error, jika field valid maka value error akan tetap string kosong
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    // object.values akan mengembalikan array dari semua value di object errors, lalu some akan mengecek apakah ada value yang tidak kosong (artinya ada error)
    const hasErrors = Object.values(validationErrors).some((msg) => msg !== "")
    if (hasErrors) {
      alert("Cannot complete the process..")
    } else {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col">
      <h2 className="text-[40px] font-bold text-slate-800 text-center">{title}</h2>
      <p className='text-[18px] font-base text-[#333333] text-center mb-10'>masuk terlebih dahulu</p>
      <InputField
        id="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Username"
        autoComplete="name"
      />

      <TextAreaField
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Password"
        autoComplete="password"
      />

      <Button type='submit'>{submitLabel}</Button>
      <p className='text-[11px] font-semibold text-[#C4C4C4] text-center'>- or -</p>
      <Button2 type='submit'>{Google}</Button2>
    </form>
  )
}
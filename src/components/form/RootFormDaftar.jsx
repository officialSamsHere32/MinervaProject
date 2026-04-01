import { useNavigate } from 'react-router-dom'
import LayoutWrapper from '../layout/LayoutWrapper';
import NavbarRegister from '../NavbarRegister';
import ContactFormRegister from "./ContactFormRegister"

export default function RootFormDaftar() {
  const navigate = useNavigate()

  const handleRegister = (user) => {
    // User successfully registered
    console.log("User registered:", user)
    // Redirect to login page after successful registration
    setTimeout(() => {
      navigate('/masuk')
    }, 1000)
  }

  return (
    <>
      <NavbarRegister />
      <LayoutWrapper>
        <ContactFormRegister
          onSubmit={handleRegister}
          title="Daftar"
          submitLabel="Daftar"
          Google='Google'
        />
      </LayoutWrapper>
    </>
  )
}
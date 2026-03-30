// import LayoutWrapper from "../layout/LayoutWrapper"
import LayoutWrapper from '../layout/LayoutWrapper';
import NavbarRegister from '../NavbarRegister';
import ContactFormRegister from "./ContactFormRegister"

export default function RootForm() {
const handleContact = (formData) => {
    console.log("Contact form submitted:", formData)
  }

return (
    <>
      <NavbarRegister />
      <LayoutWrapper>
        <ContactFormRegister
          onSubmit={handleContact}
          title="Daftar"
          submitLabel="Masuk"
          Google='Google'
        />
      </LayoutWrapper>
    </>
  )
}
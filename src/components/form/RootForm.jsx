// import LayoutWrapper from "../layout/LayoutWrapper"
import LayoutWrapper from '../layout/LayoutWrapper';
import NavbarS from '../NavbarSignup';
import ContactForm from "./ContactForm"

export default function RootForm() {
const handleContact = (formData) => {
    console.log("Contact form submitted:", formData)
  }

return (
    <>
      <NavbarS />
      <LayoutWrapper>
        <ContactForm
          onSubmit={handleContact}
          title="Masuk"
          submitLabel="Masuk"
          Google='Google'
        />
      </LayoutWrapper>
    </>
  )
}
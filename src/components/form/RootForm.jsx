// import LayoutWrapper from "../layout/LayoutWrapper"
import LayoutWrapper from '../layout/LayoutWrapper';
import ContactForm from "./ContactForm"

export default function RootForm() {
const handleContact = (formData) => {
    console.log("Contact form submitted:", formData)
  }

  return (
    <LayoutWrapper>
      <ContactForm
        onSubmit={handleContact}
        title="Contact Us"
        submitLabel="Send Message"
      />
    </LayoutWrapper>
  )
}
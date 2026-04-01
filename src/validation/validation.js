// Contact form validation
function validate(data) {
    // data = { name: "", email: "", subject: "", message: "" }
    // data = parameter yang dikirim dari form, berisi semua field yang perlu divalidasi
  const errors = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  if (!data.name.trim()) {
    errors.name = "Full name is required."
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(data.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required."
  } else if (data.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters."
  }

  if (!data.message.trim()) {
    errors.message = "Message is required."
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters."
  }
  return errors
}

// Login form validation
export function validateLogin(data) {
  const errors = {
    name: "",
    password: "",
  }

  if (!data.name.trim()) {
    errors.name = "Username is required."
  } else if (data.name.trim().length < 2) {
    errors.name = "Username must be at least 2 characters."
  }

  if (!data.password.trim()) {
    errors.password = "Password is required."
  } else if (data.password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters."
  }

  return errors
}

// Register form validation
export function validateRegister(data) {
  const errors = {
    name: "",
    password: "",
    Konfirmasi: "",
  }

  if (!data.name.trim()) {
    errors.name = "Username is required."
  } else if (data.name.trim().length < 2) {
    errors.name = "Username must be at least 2 characters."
  }

  if (!data.password.trim()) {
    errors.password = "Password is required."
  } else if (data.password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters."
  }

  if (!data.Konfirmasi.trim()) {
    errors.Konfirmasi = "Please confirm your password."
  } else if (data.Konfirmasi.trim() !== data.password.trim()) {
    errors.Konfirmasi = "Passwords do not match."
  }

  return errors
}

export default validate
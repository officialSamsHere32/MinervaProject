import { useNavigate } from 'react-router-dom'
import LayoutWrapper from '../layout/LayoutWrapper';
import NavbarProfile from '../NavbarProfile';
import Profile from '../profile';

export default function RootForm() {
  const navigate = useNavigate()

  const handleLogin = (user) => {
    // User successfully logged in
    console.log("User logged in:", user)
    // Redirect to home page after successful login
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <>
      <NavbarProfile />
        <Profile
        />
    </>
  )
}
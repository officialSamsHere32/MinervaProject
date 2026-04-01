// Simple authentication service using localStorage
// In production, you would connect this to a backend API

const USERS_KEY = 'users_database'
const CURRENT_USER_KEY = 'current_user'

// Initialize with demo user if not exists
function initializeUsers() {
  if (!localStorage.getItem(USERS_KEY)) {
    const demoUsers = [
      {
        id: 1,
        name: 'demo',
        password: 'demo123' // In production, this should be hashed
      }
    ]
    localStorage.setItem(USERS_KEY, JSON.stringify(demoUsers))
  }
}

// Register a new user
export function register(name, password) {
  try {
    initializeUsers()
    
    const users = JSON.parse(localStorage.getItem(USERS_KEY))
    
    // Check if username already exists
    if (users.some(user => user.name === name)) {
      return {
        success: false,
        message: 'Username already exists. Please choose a different username.'
      }
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      name: name,
      password: password // In production, this should be hashed
    }
    
    users.push(newUser)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    
    return {
      success: true,
      message: 'Registration successful! You can now log in.',
      user: { id: newUser.id, name: newUser.name }
    }
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred during registration.'
    }
  }
}

// Login user
export function login(name, password) {
  try {
    initializeUsers()
    
    const users = JSON.parse(localStorage.getItem(USERS_KEY))
    
    // Find user with matching credentials
    const user = users.find(u => u.name === name && u.password === password)
    
    if (!user) {
      return {
        success: false,
        message: 'Invalid username or password.'
      }
    }
    
    // Store current user session
    const sessionUser = { id: user.id, name: user.name }
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser))
    
    return {
      success: true,
      message: 'Login successful!',
      user: sessionUser
    }
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred during login.'
    }
  }
}

// Get current logged-in user
export function getCurrentUser() {
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY)
    return user ? JSON.parse(user) : null
  } catch (error) {
    return null
  }
}

// Logout user
export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY)
  return { success: true, message: 'Logged out successfully.' }
}

// Check if user is authenticated
export function isAuthenticated() {
  return getCurrentUser() !== null
}

export function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  return emailRegex.test(email);
}

export function validatePassword(password) {
  // Regular expression for password validation
  // The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Test the password against the regex
  return passwordRegex.test(password);
}

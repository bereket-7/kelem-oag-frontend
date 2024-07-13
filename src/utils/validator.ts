export const validateEmail = (email: string): boolean => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
export const validatePhone = (phone: string): boolean => {
    // Basic phone number validation regex (digits and optional hyphens)
    return /^[0-9-]+$/.test(phone);
};
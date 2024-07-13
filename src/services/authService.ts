import { SignupRequestDto } from '../services/dto/SignupRequestDto';
import { API_URL } from '../utils/constant.ts';
export const signup = async (signupData: SignupRequestDto) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });
  
    if (!response.ok) {
      throw new Error('Signup failed');
    }
  
    return response.json();
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

export const passwordRecovery = async (email: string) => {
  const response = await fetch(`${API_URL}/password-recovery`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Password recovery failed');
  }

  return response.json();
};

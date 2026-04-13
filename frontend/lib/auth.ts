// This is where your backend API calls will live.
// Keeping them here keeps your components clean and easy to test.

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface LoginPayload {
  email: string;
  password: string;
}

export async function loginUser(payload: LoginPayload) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    return await res.json(); // Returns JWT token, user data, etc.
  } catch (error) {
    console.error("Auth error:", error);
    throw error;
  }
}
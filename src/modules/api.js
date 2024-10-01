export function checkAndRedirectWithToken() {
  const token = localStorage.getItem("authToken");
  if (token) {
    window.location.href = `https://www.dating.com/people/#token=${token}`;
  }
}

export async function authenticateUser(email, password) {
  const encodedCredentials = btoa(`${email}:${password}`);

  try {
    const response = await fetch("https://api.dating.com/identity", {
      method: "GET",
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Authorization failed");
    }

    const token = response.headers.get("X-Token");
    if (token) {
      localStorage.setItem("authToken", token);
      return { success: true, token };
    }

    return { success: false, error: "No token received" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function registerUser(email, password) {
  try {
    const response = await fetch("https://api.dating.com/identity", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to register");
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

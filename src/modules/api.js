export async function registerUser(email, password) {
    try {
      const response = await fetch('https://api.dating.com/identity', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
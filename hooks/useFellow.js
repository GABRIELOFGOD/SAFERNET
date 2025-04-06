import { baseUrl } from "../utils/Context";

const useFellow = () => {

  const initializeFellow = async (email) => {
    try {
      const request = await fetch(`${baseUrl}/fellow/generate-id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      });
  
      const response = await request.json();
      if (!request.ok || response.error) {
        throw new Error(response.error || "Unknown error occurred.");
      }
  
      return response;
    } catch (error) {
      console.error("Error initializing fellow:", error.message);
      // Re-throw to be caught in handleSubmit
      throw error;
    }
  };

  const getAllFellows = async () => {
    try {
      const request = await fetch(`${baseUrl}/fellow`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
  
      const response = await request.json();
      if (!request.ok || response.error) {
        throw new Error(response.error || "Unknown error occurred.");
      }
  
      return response.fellows;
    } catch (error) {
      console.error("Error fetching fellows:", error.message);
      // Re-throw to be caught in handleSubmit
      throw error;
    }
  }

  return {
    initializeFellow
  }
  
}

export default useFellow;
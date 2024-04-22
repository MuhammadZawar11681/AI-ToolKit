import axios from "axios";

const OPENAI_API_KEY =
  "sk-proj-GDpODmqBiA2OXOJkQ5dbT3BlbkFJcZSTj6BdGjbYWxMiJ0iY";

const instance = axios.create({
  baseURL: "https://api.openai.com/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

export async function sendMessageToOpenAI(message) {
  try {
    const response = await instance.post("completions", {
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.9,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error(
        "OpenAI API Error:",
        error.response.status,
        error.response.data
      );
      throw new Error(
        `Request failed with status code ${error.response.status}`
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
      throw new Error("No response received from OpenAI API");
    } else {
      // Something happened in setting up the request
      console.error("Error setting up the request:", error.message);
      throw new Error("Error setting up the request to OpenAI API");
    }
  }
}

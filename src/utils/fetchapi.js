import axios from "axios";
const RapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": RapidApiKey,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return response;
};

import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "db577f6aedmshfc83550d94401f9p1d5f1cjsn3dc7fc63b3dd",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return response;
};

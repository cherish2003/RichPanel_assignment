import axios from "axios";

export const getConverstions = async (PageID, PageAccessToken) => {
  const response = await axios.get(
    `https://graph.facebook.com/v19.0/${PageID}/conversations/?access_token=${PageAccessToken}`
  );
  return response;
};

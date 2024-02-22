import axios from "axios";

export const getPageinfo = async (UserId, AccessToken) => {
  const response = await axios.get(
    `https://graph.facebook.com/v19.0/${UserId}/accounts/?access_token=${AccessToken}`
  );
  return response?.data;
};

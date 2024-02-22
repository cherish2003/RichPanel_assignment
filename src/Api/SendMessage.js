import axios from "axios";

export const sendMessage = async (
  PageAccessToken,
  recipientId,
  message
) => {
  const URL = `https://graph.facebook.com/v19.0/me/messages?access_token=${PageAccessToken}`;
  const response = await axios.post(URL, {
    recipient: { id: recipientId },
    message: { text: message },
  });
  return response;
};

import axios from "axios";

const getMessagesid = async (ConvId, PageAccessToken) => {
  const response = await axios.get(
    `https://graph.facebook.com/v19.0/${ConvId}?fields=messages&access_token=${PageAccessToken}`
  );
  return response;
};
const getMessagesdata = async (messageid, PageAccessToken) => {
  const response = await axios.get(
    `https://graph.facebook.com/v19.0/${messageid}?fields=id,created_time,from,to,message&access_token=${PageAccessToken}`
  );
  return response;
};

export { getMessagesid, getMessagesdata };

import { makeToast } from "../services/toast";

export const handleJwt = apiResponse => {
  const jwt = apiResponse?.data?.access_token;
  if (jwt) {
    sessionStorage.setItem('jwtToken', jwt);
  } else {
    makeToast('error', 'An authentication error has occurred.')
  }
};

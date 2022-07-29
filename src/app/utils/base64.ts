export const base64Encode = (str: string) => {
  return btoa(encodeURIComponent(str));
};

export const base64Decode = (str: string) => {
  return decodeURIComponent(atob(str));
};
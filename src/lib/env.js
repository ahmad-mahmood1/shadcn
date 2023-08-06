export const inDevelopMode = import.meta.env.REACT_APP_NODE_ENV === "development";

export const getAPIBaseURL = () => {
  const baseUrl = "https://amazon-tech.com/api";
  return baseUrl;
};

const isProductionMode = process.env.NODE_ENV === "production";
export const apiBaseUrl = `${isProductionMode ? process.env.VITE_API_URL : import.meta.env.VITE_API_URL}`;

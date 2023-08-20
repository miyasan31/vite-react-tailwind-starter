// eslint-disable-next-line @typescript-eslint/naming-convention
const isProductionMode = process.env.NODE_ENV === "production";

export const API_BASE_URL = `${isProductionMode ? process.env.VITE_API_URL : import.meta.env.VITE_API_URL}`;

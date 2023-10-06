export const isProd = process.env.NODE_ENV === "production";
export const webUrl = isProd
  ? "https://todoitapp.vercel.app"
  : "http://localhost:3000";

export const apiUrl = isProd
  ? "https://todoitapi.fly.app"
  : "http://localhost:4000";

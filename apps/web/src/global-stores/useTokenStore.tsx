import { create } from "zustand";
import { combine } from "zustand/middleware";

const accessTokenKey = "@toum/token";

const getDefaultValues = () => {
  return {
    accessToken: localStorage.getItem(accessTokenKey) || "",
  };
};

export const useTokenStore = create(
  combine(getDefaultValues(), (set) => ({
    setTokens: (x: { accessToken: string }) => {
      localStorage.setItem(accessTokenKey, x.accessToken);

      set(x);
    },
  }))
);

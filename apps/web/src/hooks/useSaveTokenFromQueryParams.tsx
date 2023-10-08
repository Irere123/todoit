import { useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { indexRoute } from "../routes/root";
import { useTokenStore } from "../global-stores/useTokenStore";

export const useSaveTokenFromQueryParams = () => {
  const { token } = useSearch({ from: indexRoute.id });
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof token === "string" && token) {
      useTokenStore.getState().setTokens({
        accessToken: token,
      });

      // Push to next path after auto redirect to /dash (100 msecs is unoticeable)
      setTimeout(() => navigate({ to: "/dasboard" }), 100);
    }
  }, [token, navigate]);
};

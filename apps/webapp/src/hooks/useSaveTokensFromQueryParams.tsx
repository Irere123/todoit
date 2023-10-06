"use client";

import { useTokenStore } from "@/stores/useTokenStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useSaveTokensFromQueryParams = () => {
  const params = useSearchParams();
  const token = params.get("token");
  const { push } = useRouter();

  useEffect(() => {
    if (typeof token === "string" && token) {
      useTokenStore.getState().setTokens({
        accessToken: token,
      });

      let nextPath = "/dashboard";

      // Push to next path after auto redirect to /dash (100 msecs is unoticeable)
      setTimeout(() => push(nextPath), 100);
    }
  }, [token, push]);
};

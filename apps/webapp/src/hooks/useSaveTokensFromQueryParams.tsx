"use client";

import { useTokenStore } from "@/stores/useTokenStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useSaveTokensFromQueryParams = () => {
  const params: any = useSearchParams();
  const { push } = useRouter();

  useEffect(() => {
    if (typeof params.token && params.token) {
      useTokenStore.getState().setTokens({
        accessToken: params.token,
      });

      let nextPath = "/dash";

      // Push to next path after auto redirect to /dash (100 msecs is unoticeable)
      setTimeout(() => push(nextPath), 100);
    }
  }, [params, push]);
};

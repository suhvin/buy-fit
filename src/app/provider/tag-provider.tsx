"use client";
import { useUtmGlobalAtom } from "@/src/shared/store/utm.store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const TagProvider = () => {
  const searchParams = useSearchParams();

  const utm_source = searchParams.get("utm_source");
  const utm_medium = searchParams.get("utm_medium");
  const utm_campaign = searchParams.get("utm_campaign");
  const utm_content = searchParams.get("utm_content");
  const utm_term = searchParams.get("utm_term");

  const isCampaign = utm_source || utm_medium || utm_campaign || utm_content || utm_term;

  const [_, setUtmGlobalAtom] = useUtmGlobalAtom();

  useEffect(() => {
    if (isCampaign) {
      setUtmGlobalAtom({
        utmSource: utm_source ?? "",
        utmMedium: utm_medium ?? "",
        utmCampaign: utm_campaign ?? "",
        utmContent: utm_content ?? "",
        utmTerm: utm_term ?? "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCampaign]);

  return <></>;
};

"use client";

import { initUserEvent, trackEvent, User } from "./action";
import { useState, useEffect } from "react";
import { getBrowserInfo } from "./browser-info";
import { usePathname } from "next/navigation";

export const initUser = (...user: User) => {
  initUserEvent(...user);
};

export const useTrack = () => {
  const [browserInfo, setBrowserInfo] = useState(getBrowserInfo());
  const pathname = usePathname();

  const track = (eventName: string, properties?: Record<string, any>) => {
    trackEvent(eventName, { ...properties, ...browserInfo });
  };

  useEffect(() => {
    setBrowserInfo(getBrowserInfo());
  }, [pathname]);

  return { track };
};

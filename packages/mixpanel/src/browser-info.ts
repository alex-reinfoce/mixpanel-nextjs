"use client";

// Add type declaration at the top
interface NetworkInformation extends EventTarget {
  effectiveType: string;
  downlink: number;
}

export function getBrowserInfo() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    // 设备信息
    userAgent: navigator.userAgent,
    language: navigator.language,
    url: window.location.href,

    // 屏幕信息
    screenResolution: {
      width: window.screen.width,
      height: window.screen.height,
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },

    // 性能信息
    connection: (navigator as any).connection
      ? {
          effectiveType: ((navigator as any).connection as NetworkInformation).effectiveType,
          downlink: ((navigator as any).connection as NetworkInformation).downlink,
        }
      : undefined,

    // 时区信息
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    // 引荐来源
    referrer: document.referrer,
  };
}

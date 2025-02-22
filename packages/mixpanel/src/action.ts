"use server";
import { mixpanel } from "./mixpanel";
import type { People } from "mixpanel";

export type User = Parameters<People["set"]>;

export async function trackEvent(
  eventName: string,
  properties: Record<string, any>
) {
  try {
    mixpanel.track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Analytics error:", error);
    throw new Error("Failed to track event");
  }
}

export const initUserEvent = (...user: User) => {
  mixpanel.people.set(...user);
};

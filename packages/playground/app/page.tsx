"use client";
import { useTrack } from "mixpanel-nextjs";

export default function Home() {
  const { track } = useTrack();

  const handleClick = () => {
    track("button_clicked", {
      page: "home",
      timestamp: new Date().toISOString(),
    });
  };

  return <button onClick={handleClick}>Test Mixpanel Event</button>;
}

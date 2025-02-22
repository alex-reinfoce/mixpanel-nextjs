import Mixpanel from "mixpanel";

if (!process.env.MIXPANEL_TOKEN) {
  throw new Error("MIXPANEL_TOKEN is not set");
}

const mixpanel: Mixpanel.Mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN, {
  protocol: "https",
});

export { mixpanel };

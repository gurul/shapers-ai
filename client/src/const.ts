export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_BACKGROUND = "#fcfbf9";
export const APP_SECTION_SURFACE = "#f7f4ee";
export const ACCENT_FOREST_GREEN = "#3e5244";
export const ACCENT_FOREST_GREEN_MUTED = "rgba(62, 82, 68, 0.72)";
export const ACCENT_FOREST_GREEN_BORDER = "rgba(62, 82, 68, 0.2)";
export const ACCENT_FOREST_GREEN_TINT = "rgba(62, 82, 68, 0.12)";
export const ACCENT_FOREST_GREEN_HOVER = "#34453a";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = process.env.NEXT_PUBLIC_OAUTH_PORTAL_URL;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  if (!oauthPortalUrl || !appId) {
    throw new Error(
      "Missing NEXT_PUBLIC_OAUTH_PORTAL_URL or NEXT_PUBLIC_APP_ID."
    );
  }

  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

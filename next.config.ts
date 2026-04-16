import { execSync } from "node:child_process";
import type { NextConfig } from "next";

const getLastUpdated = () => {
  try {
    return execSync(
      "git log -1 --date=format:'%b %-d, %Y, %-I:%M %p' --format='%cd'",
      { encoding: "utf8" }
    ).trim();
  } catch {
    return "Unavailable";
  }
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_LAST_UPDATED: getLastUpdated(),
  },
};

export default nextConfig;

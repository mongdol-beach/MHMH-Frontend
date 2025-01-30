import { OAuthPlatform } from "../types";

export const getOAuthPlatformFromPath = (path: string): OAuthPlatform => {
  return path.replace("/login/", "") as OAuthPlatform;
};

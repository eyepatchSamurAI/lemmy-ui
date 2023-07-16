import { isHttps } from "@utils/env";
import * as cookie from "cookie";
import { authCookieName, refreshTokenCookieName } from "../../config";

export default function setAuthCookie(jwt: string, refreshToken: string) {
  document.cookie = cookie.serialize(authCookieName, jwt, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    secure: isHttps(),
    sameSite: true,
    path: "/",
  });
  document.cookie = cookie.serialize(refreshTokenCookieName, refreshToken, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: isHttps(),
    sameSite: true,
    httpOnly: true,
    path: "/",
  });
}

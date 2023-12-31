import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
  const config = useRuntimeConfig();
  return jwt.sign({ userId }, config.jwtAccessTokenSecret, {
    expiresIn: "15m",
  });
};
const generateRefreshToken = (userId) => {
  const config = useRuntimeConfig();
  return jwt.sign({ userId }, config.jwtRefreshTokenSecret, {
    expiresIn: "4h",
  });
};
export const generateTokens = (userId) => {
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);
  return {
    accessToken,
    refreshToken,
  };
};

export const sendRefreshTokenCookie = (event, refreshToken) => {
  setCookie(event, "refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "none",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
  });
};

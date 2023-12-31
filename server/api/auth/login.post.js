import { getUserByUsername } from "~/server/db/user";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshTokenCookie } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Missing required fields" })
    );
  }

  // check if user exists
  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid username or password",
      })
    );
  }

  // check if password is correct
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Passwords do not match",
      })
    );
  }

  // generate tokens
  const { accessToken, refreshToken } = generateTokens(user.id);

  // save it inside db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // add http only cookie
  sendRefreshTokenCookie(event, refreshToken);

  return {
    body: {
      access_token: accessToken,
      user: userTransformer(user),
    },
  };
});

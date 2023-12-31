import { createUser } from "~/server/db/user";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Missing required fields" })
    );
  }
  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    );
  }
  const randomInt = Math.floor(Math.random() * 100);

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: `https://picsum.photos/id/${randomInt}/200/200`,
  };
  const user = await createUser(userData);
  return {
    body: userTransformer(user),
  };
});

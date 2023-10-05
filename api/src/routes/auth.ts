import { FastifyInstance } from "fastify";
import passport from "@fastify/passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function auth(fastify: FastifyInstance) {
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_ID!,
        callbackURL: "http://locahost:4000/auth/google/callback",
      },
      async function (_accessToken, _refreshToken, profile, cb) {
        let user: any = await prisma.user.findFirst({
          where: { googleId: profile.id },
        });

        console.log(profile);

        return cb(null, user);
      }
    )
  );

  fastify.get(
    "/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  fastify.get(
    "/google/callback",
    { preValidation: passport.authenticate("google", { scope: ["profile"] }) },
    async (_req, res) => {
      res.redirect("/");
    }
  );
}

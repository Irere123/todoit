import { FastifyInstance } from "fastify";
import passport from "@fastify/passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";
import { apiUrl } from "../constants";

const prisma = new PrismaClient();

export async function auth(fastify: FastifyInstance) {
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: `${apiUrl}/auth/google/callback`,
      },
      async function (accessToken, _refreshToken, profile, cb) {
        let user: any = await prisma.user.findFirst({
          where: { googleId: profile.id },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              avatarUrl: profile.photos![0].value,
              email: profile.emails![0].value,
              username: profile.displayName.toLowerCase().split(" ").join("_"),
              googleId: profile.id,
              googleAccessToken: accessToken,
            },
          });
        }

        return cb(null, user);
      }
    )
  );

  fastify.get(
    "/google",
    passport.authenticate("google", { scope: ["profile email"] })
  );

  fastify.get(
    "/google/callback",
    {
      preValidation: passport.authenticate("google", {
        scope: ["profile email"],
      }),
    },
    async (req, res) => {
      console.log(req.user);
      res.redirect("/");
    }
  );
}

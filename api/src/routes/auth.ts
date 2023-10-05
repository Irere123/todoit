import { FastifyInstance } from "fastify";

export async function auth(fastify: FastifyInstance) {
  fastify.get("/", (_, rep) => {
    rep.send("authentication");
  });
}

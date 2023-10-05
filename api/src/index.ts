import fastify from "fastify";

const main = async () => {
  const app = fastify();

  app.get("/", (_, rep) => {
    rep.send("Hello world");
  });

  await app.listen({ port: 4000 }).then((l) => {
    console.log(`Server runnung on ${l}`);
  });
};

main();

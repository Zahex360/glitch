const path = require("path");
const fastify = require("fastify")({
  logger: false,
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "src"),
  prefix: "/",
});

fastify.get("/", function (request, reply) {
  return reply.sendFile("myBlog.html"); // serve the HTML file
});

fastify.listen(
  {
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
  },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);

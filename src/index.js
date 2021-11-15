const { setupServer } = require('./server');

const init = async () => {
  const server = await setupServer();
  await server.start();
};

init().catch((err) => {
  console.log(err);
  process.exit(1);
});

const server = require("./server");

const PORT = process.env.PORT || 6200;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

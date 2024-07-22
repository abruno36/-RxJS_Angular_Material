const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/DBCourses.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Adiciona um atraso nas respostas
server.use((req, res, next) => {
  setTimeout(() => next(), 2000);
});

server.use(router);

const PORT = 5011;
server.listen(PORT, () => {
  console.log(`JSON Server esta rodando na porta: ${PORT}`);
});

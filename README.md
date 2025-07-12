# backend-fastify-schema
This is a setup I prepared for backend development inside a container, using Node.js (with TypeScript), Fastify, Prisma as the ORM, Zod for validation, and Swagger for API documentation.


**Essentials Commands** — separeted by categories:

---

## 🐳 **Docker and Docker Compose Commands**

| Command                                            | Description                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `docker compose up --build`                        | Starts the containers with rebuild (ideal when something changes in the `Dockerfile`) |
| `docker compose up`                                | Starts the containers (without rebuild)                                               |
| `docker compose down`                              | Stops and removes the containers                                                      |
| `docker compose restart`                           | Restarts all containers                                                               |
| `docker compose logs -f`                           | Shows real-time logs                                                                  |
| `docker compose exec app sh`                       | Opens a terminal inside the `app` container                                           |
| `docker compose exec app npm install`              | Installs dependencies inside the container                                            |
| `docker compose exec app npx prisma migrate dev`   | Runs a Prisma migration inside the container                                          |
| `docker compose exec db psql -U test -d test_db` | Accesses the PostgreSQL database via terminal                                         |

---

## 📦 **Node/TypeScript/Prisma Commands**

| Command                              | Description                                      |
| ------------------------------------ | ------------------------------------------------ |
| `npm install package`                | Installs a package normally                      |
| `npm install --save-dev package`     | Installs as a development dependency             |
| `npm run dev`                        | Starts the project in development mode           |
| `npm run build`                      | Compiles TypeScript to JavaScript                |
| `npx prisma generate`                | Generates the Prisma client                      |
| `npx prisma migrate dev --name name` | Creates and applies a migration                  |
| `npx prisma studio`                  | Opens a visual interface to explore the database |
| `npx prisma format`                  | Formats the `schema.prisma` file                 |

---

## 🛑 **When Should You Take Down the Container?**

| Change                             | Requires `down` and `up --build`?        |
| ---------------------------------- | ---------------------------------------- |
| `.ts` code                         | ❌ No (hot reload with `ts-node-dev`)     |
| `package.json` / `node_modules`    | ✅ Yes                                    |
| `Dockerfile`                       | ✅ Yes                                    |
| `docker-compose.yml`               | ✅ Yes                                    |
| `.env` (new environment variables) | ⚠️ Yes (or use `docker compose restart`) |

---

## 🔥 Final Tip: Most Used Command

```bash
docker compose up --build
```

You'll use this a lot — especially when dependencies change or you want to make sure everything is fully updated.

---

Se quiser, posso montar isso já em um `README.md` com formatação pronta ou até gerar um PDF. Deseja?

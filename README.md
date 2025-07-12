# backend-fastify-schema
This is a setup I prepared for backend development inside a container, using Node.js (with TypeScript), Fastify, Prisma as the ORM, Zod for validation, and Swagger for API documentation.


**Comandos essenciais** — separados por categorias:

---

## 🐳 **Comandos Docker e Docker Compose**

| Comando                                            | O que faz                                                               |
| -------------------------------------------------- | ----------------------------------------------------------------------- |
| `docker compose up --build`                        | Sobe os containers com rebuild (ideal quando muda algo no `Dockerfile`) |
| `docker compose up`                                | Sobe os containers (sem rebuild)                                        |
| `docker compose down`                              | Derruba e remove os containers                                          |
| `docker compose restart`                           | Reinicia todos os containers                                            |
| `docker compose logs -f`                           | Mostra logs em tempo real                                               |
| `docker compose exec app sh`                       | Acessa o terminal dentro do container `app`                             |
| `docker compose exec app npm install`              | Instala dependência dentro do container                                 |
| `docker compose exec app npx prisma migrate dev`   | Executa uma migration Prisma no container                               |
| `docker compose exec db psql -U fila1 -d fila1_db` | Acessa o banco PostgreSQL direto no terminal                            |

---

## 📦 **Comandos do Node/TypeScript/Prisma**

| Comando                              | Descrição                                       |
| ------------------------------------ | ----------------------------------------------- |
| `npm install pacote`                 | Instala pacote normalmente                      |
| `npm install --save-dev pacote`      | Instala como dependência de desenvolvimento     |
| `npm run dev`                        | Inicia o projeto em modo desenvolvimento        |
| `npm run build`                      | Compila o TypeScript para JavaScript            |
| `npx prisma generate`                | Gera o client Prisma                            |
| `npx prisma migrate dev --name nome` | Cria uma migration e aplica                     |
| `npx prisma studio`                  | Abre interface visual para ver o banco de dados |
| `npx prisma format`                  | Formata o arquivo `schema.prisma`               |

---

## 🛑 **Quando derrubar o container?**

| Mudança                         | Precisa `down` e `up --build`?       |
| ------------------------------- | ------------------------------------ |
| Código `.ts`                    | ❌ Não (hot reload com `ts-node-dev`) |
| `package.json` / `node_modules` | ✅ Sim                                |
| Dockerfile                      | ✅ Sim                                |
| docker-compose.yml              | ✅ Sim                                |
| `.env` (variáveis novas)        | ⚠️ Sim (ou `docker compose restart`) |

---

## 🔥 Dica final: Comando mais usado

```bash
docker compose up --build
```

Você vai usar isso muito — quando muda dependência ou quer garantir que está tudo atualizado.

---

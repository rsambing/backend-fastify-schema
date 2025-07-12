import Fastify from 'fastify';
import dotenv from 'dotenv';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import fromZodSchema from 'zod-to-json-schema';
import { loginSchema } from './schemas/auth.schema.js';

dotenv.config();

const app = Fastify({ logger: true });

const loginJsonSchema = fromZodSchema(loginSchema);

app.get('/', async () => {
  return { message: 'Fila1 API Online' };
});

app.post('/auth/login', {
  schema: {
    body: loginJsonSchema,
    response: {
      200: {
        type: 'object',
        properties: {
          token: { type: 'string' }
        }
      }
    },
    tags: ['Auth']
  }
}, async (request, reply) => {
  const { email, password } = request.body as any;
  return { token: 'fake-jwt-token' };
});

const start = async () => {
  try {
    await app.register(fastifySwagger, {
      openapi: {
        info: {
          title: 'Fila1 API',
          description: 'Documentação da API do Fila1',
          version: '1.0.0'
        },
        servers: [
          {
            url: 'http://localhost:3333',
            description: 'Servidor local'
          }
        ]
      }
    });

    await app.register(fastifySwaggerUI, {
      routePrefix: '/docs', // Acessa via http://localhost:3333/docs
      uiConfig: {
        docExpansion: 'full',
        deepLinking: false
      }
    });

    await app.listen({ port: Number(process.env.PORT) || 3333, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

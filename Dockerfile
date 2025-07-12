# Dockerfile
FROM node:22

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

EXPOSE 3333

# O comando real será sobrescrito no docker-compose
CMD ["npm", "run", "dev"]

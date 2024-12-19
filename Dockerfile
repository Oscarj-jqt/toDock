# Dockerfile pour un serveur Express API
# Image node
FROM node
WORKDIR /app
# Copie les dépendances dans le répertoire
COPY package.json /app
# Installation
RUN npm install
#Copie du serveur et fichiers statiques et le reste
COPY . /app
EXPOSE 3000
CMD ["node", "server.js"]
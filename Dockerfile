FROM node:10-alpine

WORKDIR /app
ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . .
RUN npm run build --production

RUN npm install -g serve

CMD ["serve", "-p", "80", "-s", "build"]
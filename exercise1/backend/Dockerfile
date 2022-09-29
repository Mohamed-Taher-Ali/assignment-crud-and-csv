FROM node:17.0.1

WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
CMD npm start
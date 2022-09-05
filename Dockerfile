FROM node:17

WORKDIR /usr/src/react-landing-page/

COPY package*.json ./

RUN npm install

# RUN npm run build

COPY . .

RUN npm run build

EXPOSE 3000

# CMD [ "npm", "start" ]

CMD [ "npm", "run", "sServer" ]
FROM node:14.19.3

WORKDIR /back_mrmac_App

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 9000

CMD ["npm","run","start"]
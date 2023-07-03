FROM node:14.19.3

WORKDIR /React_front_mrmac

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 4001

CMD ["npm","run","start"]
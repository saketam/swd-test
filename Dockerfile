FROM node:18.17.0

WORKDIR /code
COPY . /code/
RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start
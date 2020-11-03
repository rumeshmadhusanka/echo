FROM node:10.23-alpine
COPY . .
RUN npm install
ENV PORT=80
EXPOSE 80
ENTRYPOINT ["npm","start"]

FROM node:alpine
COPY . .
RUN npm start
ENV PORT=80
EXPOSE 80
ENTRYPOINT ["npm","start"]

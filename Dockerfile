FROM node:10.23-alpine
COPY . .
RUN npm install
ENV PORT=3005
ENV HOST=169.254.1.2
EXPOSE 3005
ENTRYPOINT ["npm","start"]

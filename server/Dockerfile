FROM node:14.19.2-alpine

WORKDIR /app
COPY packege.json ./
COPY prisma ./prisma
RUN npm install

ENV PORT 3031
EXPOSE 3031

CMD ["node", "dist/main"]
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .
RUN npm run build

FROM nginx:1.25.4-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

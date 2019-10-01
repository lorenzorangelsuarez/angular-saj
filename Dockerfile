# Este Dockerfile define un 'multistage build' de dos
# fases para construir y servir un proyecto en Agular
# Basado en: https://malcoded.com/posts/angular-docker

# Primera fase (construir)

# Usar como base la imagen oficial de Node (v8)
FROM node:10 as build

# Copiar package.json y package-lock.json e instalar dependencias
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copiar el resto del código y construir proyecto
COPY . .
# RUN npm run build --prod
#--output-path dist/app

RUN npm run build -- --prod --c=staging --output-path dist/app
# RUN npm run build --configuration=staging --output-path dist/app

# Segunda fase (servir)

# Usar como base la imagen oficial de Nginx
FROM nginx:1.15-alpine

# Copiar configuración de servidor web
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copiar distribuible a directorio configurado en nginx
COPY --from=build /app/dist/app /www

EXPOSE 5000

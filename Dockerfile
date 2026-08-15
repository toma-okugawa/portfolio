FROM nginx:alpine

LABEL org.opencontainers.image.description="Portfolio and academic CV of Toma Okugawa (static site served by nginx)"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html

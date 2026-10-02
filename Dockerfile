FROM node:24-alpine@sha256:d32cdf619f63fe0471182d08996dd516c6275bb5fd31ae06e55a570bd9e1ad43 AS build

WORKDIR /app
COPY . .
RUN npm run build && npm run check

FROM nginx:1.31.4-alpine@sha256:db35bfc6b2951e7f8a72db5db120288c127ffaeeb4a6d4b95a26fead017d5913

LABEL org.opencontainers.image.source="https://github.com/Leviora-Studio/campus-koethen-landing"
LABEL org.opencontainers.image.licenses="AGPL-3.0-only AND LicenseRef-ThirdParty-Components"
LABEL org.opencontainers.image.documentation="https://github.com/Leviora-Studio/campus-koethen-landing/blob/main/THIRD_PARTY_NOTICES.md"

ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/40-generate-app-config.sh /docker-entrypoint.d/40-generate-app-config.sh
COPY --from=build /app/dist /usr/share/nginx/html
COPY THIRD_PARTY_NOTICES.md /usr/share/licenses/campus-koethen-landing/THIRD_PARTY_NOTICES.md

RUN chmod +x /docker-entrypoint.d/40-generate-app-config.sh

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --spider http://127.0.0.1/ >/dev/null 2>&1 || exit 1

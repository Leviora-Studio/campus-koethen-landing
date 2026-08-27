#!/bin/sh

set -eu

template_path="/usr/share/nginx/html/config.template.js"
target_path="/usr/share/nginx/html/config.js"

validate_store_url() {
  value="$1"

  if [ -z "$value" ]; then
    return 0
  fi

  if ! printf '%s' "$value" | grep -Eq '^https://[A-Za-z0-9./?&=_:%+@~-]+$'; then
    echo "Ignoring invalid store URL. Only HTTPS store URLs are accepted." >&2
    return 1
  fi
}

GOOGLE_PLAY_URL="${GOOGLE_PLAY_URL:-}"
APP_STORE_URL="${APP_STORE_URL:-}"

validate_store_url "$GOOGLE_PLAY_URL" || GOOGLE_PLAY_URL=""
validate_store_url "$APP_STORE_URL" || APP_STORE_URL=""

export GOOGLE_PLAY_URL APP_STORE_URL
envsubst '${GOOGLE_PLAY_URL} ${APP_STORE_URL}' < "$template_path" > "$target_path"

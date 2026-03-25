#!/usr/bin/env bash
set -euo pipefail

confirm_choice() {
  local choice
  echo "Select deployment target:"
  echo "  1) Vercel"
  echo "  2) GCP Cloud Run"
  read -r -p "Choose (1/2): " choice
  case "$choice" in
    1) echo "vercel" ;;
    2) echo "gcp" ;;
    *)
      echo "Invalid choice. Please select 1 or 2." >&2
      exit 1
      ;;
  esac
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

prompt_if_empty() {
  local var_name="$1"
  local prompt="$2"
  local current_value
  current_value="${!var_name:-}"
  if [ -z "$current_value" ]; then
    read -r -p "$prompt" current_value
    if [ -z "$current_value" ]; then
      echo "$var_name is required." >&2
      exit 1
    fi
    export "$var_name"="$current_value"
  fi
}

TARGET=$(confirm_choice)

if [ "$TARGET" = "vercel" ]; then
  require_cmd npx
  if [ -z "${VERCEL_TOKEN:-}" ]; then
    echo "VERCEL_TOKEN is required for Vercel deploy." >&2
    exit 1
  fi

  if [ -n "${VERCEL_DATABASE_URL:-}" ]; then
    export DATABASE_URL="$VERCEL_DATABASE_URL"
  fi

  VERCEL_ARGS=("--prod")
  if [ -n "${VERCEL_SCOPE:-}" ]; then
    VERCEL_ARGS+=("--scope" "$VERCEL_SCOPE")
  fi
  if [ -n "${VERCEL_PROJECT:-}" ]; then
    VERCEL_ARGS+=("--project" "$VERCEL_PROJECT")
  fi
  VERCEL_ARGS+=("--token" "$VERCEL_TOKEN")

  echo "Deploying to Vercel..."
  npx vercel "${VERCEL_ARGS[@]}"
  exit 0
fi

require_cmd gcloud

prompt_if_empty GCP_PROJECT "GCP project ID: "
prompt_if_empty GCP_REGION "GCP region (e.g. asia-northeast1): "
prompt_if_empty GCP_SERVICE "Cloud Run service name: "

ALLOW_UNAUTH="${GCP_ALLOW_UNAUTH:-true}"
ENV_FILE="${GCP_ENV_FILE:-}"

if [ -z "${GCP_DATABASE_URL:-}" ] && [ -z "$ENV_FILE" ]; then
  echo "GCP_DATABASE_URL is required for Cloud Run unless GCP_ENV_FILE is provided." >&2
  exit 1
fi

GCLOUD_ARGS=(
  "run" "deploy" "$GCP_SERVICE"
  "--project" "$GCP_PROJECT"
  "--region" "$GCP_REGION"
  "--source" "."
  "--allow-unauthenticated=$ALLOW_UNAUTH"
)

if [ -n "$ENV_FILE" ]; then
  GCLOUD_ARGS+=("--env-vars-file" "$ENV_FILE")
else
  GCLOUD_ARGS+=("--set-env-vars" "DATABASE_URL=$GCP_DATABASE_URL")
fi

if [ -n "${GCP_CPU:-}" ]; then
  GCLOUD_ARGS+=("--cpu" "$GCP_CPU")
fi
if [ -n "${GCP_MEMORY:-}" ]; then
  GCLOUD_ARGS+=("--memory" "$GCP_MEMORY")
fi
if [ -n "${GCP_MIN_INSTANCES:-}" ]; then
  GCLOUD_ARGS+=("--min-instances" "$GCP_MIN_INSTANCES")
fi
if [ -n "${GCP_MAX_INSTANCES:-}" ]; then
  GCLOUD_ARGS+=("--max-instances" "$GCP_MAX_INSTANCES")
fi

if [ -n "${GCP_SECRETS:-}" ]; then
  GCLOUD_ARGS+=("--set-secrets" "$GCP_SECRETS")
fi

if [ -n "${GCP_CONCURRENCY:-}" ]; then
  GCLOUD_ARGS+=("--concurrency" "$GCP_CONCURRENCY")
fi

if [ -n "${GCP_TIMEOUT:-}" ]; then
  GCLOUD_ARGS+=("--timeout" "$GCP_TIMEOUT")
fi

if [ -n "${GCP_PORT:-}" ]; then
  GCLOUD_ARGS+=("--port" "$GCP_PORT")
fi

echo "Deploying to GCP Cloud Run..."
gcloud "${GCLOUD_ARGS[@]}"

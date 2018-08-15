docker run --rm -w /local -v ${PWD}:/local openapitools/openapi-generator-cli:v3.2.0 \
  generate \
    -i server/api/swagger/swagger.yaml \
    -c frontend-config.json \
    -o frontend/src/app/api \
    -g typescript-angular

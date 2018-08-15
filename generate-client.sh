docker run --rm -w /local -v ${PWD}:/local openapitools/openapi-generator-cli \
  generate \
    -i server/api/swagger/swagger.yaml \
    -c client-config.json \
    -o client \
    -g typescript-fetch

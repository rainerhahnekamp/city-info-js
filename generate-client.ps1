docker run --rm -w /local -v ${PWD}:/local `
    openapitools/openapi-generator-cli:v3.2.3 generate `
    -i server/api/swagger/swagger.yaml `
    -c client-config.json `
    -o client `
    -g typescript-fetch

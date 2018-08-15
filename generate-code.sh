#docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli langs
#docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/api/swagger/swagger.yaml -o /local/out -l typescript-node
#docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/api/swagger/swagger.yaml -o /local/typescript-fetch -l typescript-fetch
#docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/api/swagger/swagger.yaml -o /local/oap-typescript-fetch -l typescript-fetch
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/server/api/swagger/swagger.yaml -c /local/client-config.json -o /local/client -g typescript-fetch

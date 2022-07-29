执行脚本

```shell
 # 编译yaml 生成angular client
 java -jar ./swagger/swagger-codegen-cli.jar generate -i ./swagger.yaml -l typescript-angular -o ./src/app/services/api/swagger

 # 编译json 生成angular client
 java -jar ./swagger/swagger-codegen-cli.jar generate -i ./swagger.json -l typescript-angular -o ./src/app/services/api/swagger

 # 编译 远程 json 文件 生成 angular client
 swagger-codegen generate -i https://petstore.swagger.io/v2/swagger.json -l typescript-angular -o ./src/app/services/api/swagger
```
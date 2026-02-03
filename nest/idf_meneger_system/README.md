### create route
```
nest g module auth
nest g controller auth --no-spec
nest g service auth --no-spec


nest g module users
nest g controller users --no-spec
nest g service users --no-spec

nest g module shifts
nest g controller shifts --no-spec
nest g service shifts --no-spec

nest g module assignments
nest g controller assignments --no-spec
nest g service assignments --no-spec
```
### install all package
```
npm i @nestjs/config @nestjs/jwt passport passport-jwt @nestjs/passport bcrypt
npm i sequelize sequelize-typescript @nestjs/sequelize pg pg-hstore
npm i class-validator class-transformer
npm i -D @types/bcrypt
```

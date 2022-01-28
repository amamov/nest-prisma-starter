# nest-prisma-stater

- [NestJS](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
- [Passport](https://www.passportjs.org/)

## getting start

1. `npm i`

2. `npm run prisma generate`

3. `npm run start:dev`

4. `npm run db:studio`

## .env

```python
# nestjs env
NODE_ENV=development # or production
PORT=5000
ADMIN_USER=...
ADMIN_PASSWORD=...
SECRET_KEY=...

# prisma env
DATABASE_URL="postgresql://{username}:{password}@{host}:{port}/{dbname}?schema=public"

# docker postgresql db env
POSTGRES_DB=...
POSTGRES_USER=...
POSTGRES_PASSWORD=...
```

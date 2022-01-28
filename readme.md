# nest-prisma-stater

- [NestJS](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
- [Passport](https://www.passportjs.org/)

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

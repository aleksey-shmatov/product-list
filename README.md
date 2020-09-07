## Running locally
Add '.env' file in the project root directory with following contents:

```
DB_ROOT_PASSWORD = root
DB_DATABASE = product-list
DB_USER = product-list-user
DB_PASSWORD = password
DB_HOST = db
DB_PORT = 3306
```

Run `docker-compose up` in the project directory.
Open localhost:3000 in browser.


## Design decisions
I chose to create one shared table product and tables with additional details for shirts and pants. In this particular case I would use single table for both but choosen this approach to show cleaner and more scalable way. Unfortunately it complicates querying/modifying data and not possible to guarantee 100% data consistency(in MySQL at least). In general I would choose PostgreSQL for database and store type specific data in the JSONB columns.
I used TypeORM for data layer in hopes to reuse models with Typegraphql, but
unfortunately it is not possible with choosed database design. For this particular tasks TypeORM just brough additional issues, only benefit is auto generation of migrations but then again did not worked cleanly 100%.
I used TypeGraphql to implement Graphql schema and graphql-codegen to generate client-side typings.


## Missing functionality

Better error handling on client and server.
Client-side form validation.
Unit/Integration tests.

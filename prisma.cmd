  //create and push to server
  prisma migrate dev --name init

  prisma migrate dev --name add_reservation_type

  //remove database and create again
  prisma migrate dev --name change-reservation --create-only

  prisma format


  to create database and tables in server
  $ npx prisma db push

  Setup a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate
  $ prisma generate --schema= src/prisma/schema.prisma

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push


//migrations with loss data
prisma db push --accept-data-loss


//to update class of prisma base migrations
prisma migrate dev


//to update database base on migrations
prisma migrate deploy


//don't use it remove all data of database
//when migration errors
prisma migrate reset --force
prisma migrate dev --name price-fload

//delete database
prisma db push --force-reset


//read more on Generating down migrations
prisma migrate resolve --rolled-back 20220926132257_add_discount_plan

//Re-generate the client:
npx prisma generate


prisma migrate dev --name add-reservation-status-to-reservation
prisma db push --accept-data-loss

###to seed database
prisma db seed

###to update database
prisma generate
prisma db push

prisma db push --accept-data-loss

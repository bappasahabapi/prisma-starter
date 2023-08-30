
-    when we change anything in the schema file or model
    then we use  `npx prisma generate` to fetch the change in the  prisma client.

-    when we run the query in the database then we need to
`npx prisma migrate dev`

---

-- Any Change in the model
-    `npx prisma migrate dev` [database e add korbe  new column or change]
-    `npx prisma migrate --name 20230830153102_emial_unique`
-    `npx prisma generate`  [only locally add the new column not in the database]


---



### vsc extention prisma
### 01.Install prisma

-    `yarn add -y`

-   ` yarn add prisma typescript ts-node @types/node --save-dev`

- `npx tsc --init`

-    `npx prisma init`

### 02.Database connection:

`DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`

- For postgres
    
    postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA

###  03.Creating the database schema[Using Prisma Migrate]

- make a model in `schema.prisma` file
- After creating a model then migrate it(Migrate will make structure in the database. Simple create the table ).
        
        - `npx prisma migrate dev --name init `

###  04.Install and generate Prisma Client[For making operation in table CRUD]

- `npm install @prisma/client`

- Create a new file named `index.ts `


##  Run Comman index. [`npx ts-node index.ts`]


-- Any Change in the model
-    `npx prisma migrate dev` [database e add korbe  new column or change]
-    `npx prisma migrate --name 20230830153102_emial_unique`
-    `npx prisma generate`  [only locally add the new column not in the database]


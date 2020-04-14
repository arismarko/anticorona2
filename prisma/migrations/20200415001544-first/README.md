# Migration `20200415001544-first`

This migration has been generated at 4/15/2020, 12:15:44 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Store" (
    "coordinates" TEXT   ,
    "date" DATE NOT NULL  ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "location" TEXT   ,
    "storename" TEXT NOT NULL  
) 

CREATE TABLE "quaint"."Item" (
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "item" TEXT NOT NULL  ,
    "number" TEXT NOT NULL  
) 

CREATE TABLE "quaint"."StoresOnItems" (
    "itemId" INTEGER NOT NULL  ,
    "storeId" INTEGER NOT NULL  ,
    PRIMARY KEY ("storeId","itemId"),FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 

CREATE TABLE "quaint"."_ItemToStore" (
    "A" INTEGER NOT NULL  ,
    "B" INTEGER NOT NULL  ,FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("B") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 

CREATE UNIQUE INDEX "quaint"."_ItemToStore_AB_unique" ON "_ItemToStore"("A","B")

CREATE  INDEX "quaint"."_ItemToStore_B_index" ON "_ItemToStore"("B")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200415001544-first
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,34 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+model Store {
+  coordinates   String?
+  date          DateTime
+  id            Int             @default(autoincrement()) @id
+  location      String?
+  storename     String
+  StoresOnItems StoresOnItems[]
+  Item          Item[]          @relation(references: [id])
+}
+
+model Item {
+  id            Int             @default(autoincrement()) @id
+  item          String
+  number        String
+  StoresOnItems StoresOnItems[]
+  Store         Store[]         @relation(references: [id])
+}
+
+model StoresOnItems {
+  itemId  Int
+  storeId Int
+  Item    Item  @relation(fields: [itemId], references: [id])
+  Store   Store @relation(fields: [storeId], references: [id])
+  @@id([storeId, itemId])
+}
```



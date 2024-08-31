import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
    id: text('id').primaryKey(),
    plaidId: text('plaid_id'),
    name: text("name").notNull(),
    description: text("description").notNull(),
    userId: text("userId").notNull(),
});


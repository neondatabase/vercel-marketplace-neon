import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

// Example schema - customize based on your needs
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
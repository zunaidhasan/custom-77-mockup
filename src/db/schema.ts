import { pgTable, text, varchar, timestamp, boolean, serial } from "drizzle-orm/pg-core";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  projectType: varchar("project_type", { length: 80 }),
  budget: varchar("budget", { length: 40 }),
  timeline: varchar("timeline", { length: 60 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  contacted: boolean("contacted").default(false).notNull(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;

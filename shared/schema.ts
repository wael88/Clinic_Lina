import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export const whatsappClicks = pgTable("whatsapp_clicks", {
  id: serial("id").primaryKey(),
  page: text("page").notNull(),
  lang: text("lang").notNull(),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  utmTerm: text("utm_term"),
  utmContent: text("utm_content"),
  referrer: text("referrer"),
  clickedAt: timestamp("clicked_at").defaultNow(),
});

export const insertWhatsappClickSchema = createInsertSchema(whatsappClicks).omit({
  id: true,
  clickedAt: true,
});

export type WhatsappClick = typeof whatsappClicks.$inferSelect;
export type InsertWhatsappClick = z.infer<typeof insertWhatsappClickSchema>;

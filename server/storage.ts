import { db } from "./db";
import { desc } from "drizzle-orm";
import { inquiries, whatsappClicks, type InsertInquiry, type Inquiry, type InsertWhatsappClick, type WhatsappClick } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  logWhatsappClick(click: InsertWhatsappClick): Promise<WhatsappClick>;
  getWhatsappClicks(): Promise<WhatsappClick[]>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async logWhatsappClick(click: InsertWhatsappClick): Promise<WhatsappClick> {
    const [record] = await db
      .insert(whatsappClicks)
      .values(click)
      .returning();
    return record;
  }

  async getWhatsappClicks(): Promise<WhatsappClick[]> {
    return db.select().from(whatsappClicks).orderBy(desc(whatsappClicks.clickedAt));
  }
}

export const storage = new DatabaseStorage();

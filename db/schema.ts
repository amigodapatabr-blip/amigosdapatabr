import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const donations=sqliteTable('donations',{id:text('id').primaryKey(),donor:text('donor').notNull(),amount:integer('amount').notNull(),status:text('status').notNull(),date:text('date').notNull(),notes:text('notes').notNull().default(''),createdAt:text('created_at').notNull()});
export const settings=sqliteTable('settings',{id:integer('id').primaryKey(),value:text('value').notNull()});

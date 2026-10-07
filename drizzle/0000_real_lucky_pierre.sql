CREATE TABLE `donations` (
	`id` text PRIMARY KEY NOT NULL,
	`donor` text NOT NULL,
	`amount` integer NOT NULL,
	`status` text NOT NULL,
	`date` text NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` integer PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);

-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES 
  (4, 4, 5, 'Doing Great!'),
  (1, 2, 3, 'Help This isn''t going well!'),
  (5, 5, 5, 'Was an awesome week, thanks for everything!'),
  (4, 3, 3, 'This are going alright!'),
  (5, 5, 5, 'Did I mention that it''s really nice out?'),
  (2, 3, 5, 'Been under the weather lately'),
  (3, 4, 2, 'What week are we even in???'),
  (3, 4, 3, 'Ready for the weekend, bring it on!')
;

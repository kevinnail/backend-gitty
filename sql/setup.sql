-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users3;
DROP TABLE IF EXISTS github_users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users3 (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL
);

CREATE TABLE github_users(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  login TEXT NOT NULL,
  email TEXT, 
  avatar TEXT
);

CREATE TABLE posts(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  description VARCHAR(255) NOT NULL

);

INSERT INTO posts (description)
VALUES 
  ('super duper'),
('super duper 2'),
('super duper 3')

DROP DATABASE IF EXISTS "string-creator-db";

CREATE DATABASE "string-creator-db";

\c "string-creator-db"
CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT);

INSERT INTO strings (string) VALUES ('react-boilerplate is awesome!');
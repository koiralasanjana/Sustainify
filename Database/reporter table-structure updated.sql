select * from reporter;
DELETE FROM reporter;
ALTER TABLE reporter ADD CONSTRAINT unique_email UNIQUE (email);
ALTER SEQUENCE reporter_id_seq RESTART WITH 1;

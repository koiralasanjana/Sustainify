CREATE TABLE reporter (
    id SERIAL PRIMARY KEY,                     
    name VARCHAR(255) NOT NULL,                  
    email VARCHAR(255) NOT NULL,                 
    password VARCHAR(255) NOT NULL,              
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
GRANT ALL PRIVILEGES ON TABLE reporter TO reporter;

GRANT INSERT ON TABLE reporter TO reporter;
GRANT USAGE, SELECT ON SEQUENCE reporter_id_seq TO reporter;
SELECT * FROM information_schema.sequences WHERE sequence_name = 'reporter_id_seq';
SELECT grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'reporter';
SELECT * from reporter;
DELETE FROM reporter;





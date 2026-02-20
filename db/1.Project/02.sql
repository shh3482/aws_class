CREATE TABLE DESTINATION (
    de_id INT AUTO_INCREMENT PRIMARY KEY,
    de_name VARCHAR(100),
    de_country VARCHAR(50),
    de_city VARCHAR(50),
    de_lat DOUBLE,
    de_lng DOUBLE,
    de_desc TEXT
);
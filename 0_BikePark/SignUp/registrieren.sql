CREATE TABLE benutzer (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  vorname VARCHAR(50) NOT NULL,
  nachname VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  passwort VARCHAR(100) NOT NULL
);
CREATE DATABASE IF NOT EXISTS json_processor;

USE json_processor;

CREATE TABLE json_data (
  id INT AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  age INT NOT NULL,
  CONSTRAINT pk_jdata PRIMARY KEY (id)
);

CREATE SCHEMA
`burger_db` ;
USE "burger_db";

CREATE TABLE `burger_db`.`burgers`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR
(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  PRIMARY KEY
(`id`));

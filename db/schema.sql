CREATE SCHEMA
`burguer_db` ;
USE "burguer_db";

CREATE TABLE `burguer_db`.`burguers`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `burguer_name` VARCHAR
(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  PRIMARY KEY
(`id`));

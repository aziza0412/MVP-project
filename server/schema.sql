-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bookstore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bookstore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bookstore` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- -----------------------------------------------------
-- Schema booksstore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema booksstore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `booksstore` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bookstore` ;

-- -----------------------------------------------------
-- Table `bookstore`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookstore`.`books` (
  `publication_date` VARCHAR(45) NOT NULL,
  `idbooks` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `image` VARCHAR(2555) NOT NULL,
  `description` VARCHAR(5000) NOT NULL,
  `votes` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idbooks`, `title`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bookstore`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookstore`.`users` (
  `idusers` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bookstore`.`relation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookstore`.`relation` (
  `idrelation` INT NOT NULL,
  `books_idbooks` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idrelation`),
  INDEX `fk_relation_books_idx` (`books_idbooks` ASC) VISIBLE,
  INDEX `fk_relation_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_relation_books`
    FOREIGN KEY (`books_idbooks`)
    REFERENCES `bookstore`.`books` (`idbooks`),
  CONSTRAINT `fk_relation_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `bookstore`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `booksstore` ;

-- -----------------------------------------------------
-- Table `booksstore`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `booksstore`.`books` (
  `idbooks` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(45) NOT NULL,
  `publication_date` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `votes` INT NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idbooks`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `booksstore`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `booksstore`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `booksstore`.`relation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `booksstore`.`relation` (
  `idrelation` INT NOT NULL AUTO_INCREMENT,
  `books_idbooks` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idrelation`),
  INDEX `fk_relation_books_idx` (`books_idbooks` ASC) VISIBLE,
  INDEX `fk_relation_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_relation_books`
    FOREIGN KEY (`books_idbooks`)
    REFERENCES `booksstore`.`books` (`idbooks`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_relation_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `booksstore`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

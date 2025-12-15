
drop database if exists shoppingmall2;

create database shoppingmall2;

use Shoppingmall2;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `id` VARCHAR(13) PRIMARY KEY,
    `pw` VARCHAR(20) NULL,
    `email` VARCHAR(50) NULL,
    `phone` VARCHAR(255) NULL
);

CREATE TABLE `category` (
	`num`	int	PRIMARY KEY auto_increment,
	`code`	char(3)	NOT NULL UNIQUE,
	`title`	varchar(10)	NOT NULL UNIQUE
);

CREATE TABLE `product` (
    `code` CHAR(6) PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `amount` INT NOT NULL DEFAULT 0,
    `price` INT not NULL,
    `thumb` VARCHAR(255) NULL,
    `Field` VARCHAR(255) NULL,
    `num` INT NOT NULL
);

CREATE TABLE `cart` (
	`num`	int	primary key auto_increment,
	`amount`	int	not NULL,
	`id`	varchar(13)	NOT NULL,
	`code`	char(6)	NOT NULL
);

CREATE TABLE `buy` (
    `num` INT PRIMARY KEY AUTO_INCREMENT,
    `address` VARCHAR(100) NOT NULL,
    `amount` INT NOT NULL,
    `id` VARCHAR(13) NOT NULL,
    `code` CHAR(6) NOT NULL,
    `price` INT NOT NULL
);

ALTER TABLE `cart` ADD CONSTRAINT `FK_user_TO_cart_1` FOREIGN KEY (
	`id`
)
REFERENCES `user` (
	`id`
);

ALTER TABLE `cart` ADD CONSTRAINT `FK_product_TO_cart_1` FOREIGN KEY (
	`code`
)
REFERENCES `product` (
	`code`
);




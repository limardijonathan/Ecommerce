DROP DATABASE IF EXISTS buenosTintosDB
CREATE DATABASE buenosTintosDB
USE buenosTintosDB

CREATE TABLE `product` (
   `id` int NOT NULL AUTO_INCREMENT,
   `productName` VARCHAR(255) NOT NULL,
   `productDescription` VARCHAR(1024) NOT NULL,
   `productImage` BLOB NOT NULL,
   `productPrice` DECIMAL(10,2) NOT NULL,
   `idCategory` INT NOT NULL,
   `productOffer` BINARY NOT NULL,
   `productDiscount` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
   `idCategory` INT NOT NULL AUTO_INCREMENT,
   `categoryName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`idCategory`)
);

CREATE TABLE `user` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `userName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `birthDate` DATE NOT NULL,
   `isAdmin` BINARY NOT NULL,
   PRIMARY KEY (`id`)
);
   
CREATE TABLE `productCart` (
   `id` INT NOT NULL,
   `idUser` INT NOT NULL,
   `quantity` INT NOT NULL,
   `totalprice` DECIMAL NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productCartItem` (
   `id` INT,
   `idProductCart` INT NOT NULL,
   `idProduct` INT NOT NULL,
   `quantity` INT NOT NULL,
   `priceItem` DECIMAL NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `product` ADD CONSTRAINT `FK_df64e963-e92f-4a42-8410-ea10f6a2e377` FOREIGN KEY (`idCategory`) REFERENCES `category`(`idCategory`)  ;

ALTER TABLE `productCart` ADD CONSTRAINT `FK_871c7316-de09-45b2-bec6-a95ced7b5705` FOREIGN KEY (`idUser`) REFERENCES `user`(`id`)  ;

ALTER TABLE `productCartItem` ADD CONSTRAINT `FK_88b2a9de-91d5-4fad-8b53-fe5af8b1e8ea` FOREIGN KEY (`idProductCart`) REFERENCES `productCart`(`id`)  ;

ALTER TABLE `productCartItem` ADD CONSTRAINT `FK_b6266fd9-b27f-4200-a9b4-3577240dc6bf` FOREIGN KEY (`idProduct`) REFERENCES `product`(`id`)  ;
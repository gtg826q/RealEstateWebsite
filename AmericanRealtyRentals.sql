-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: AmericanRealtyRentals
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Attachment`
--

DROP TABLE IF EXISTS `Attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attachment` (
  `attachmentID` int(11) NOT NULL AUTO_INCREMENT,
  `commercialID` int(11) DEFAULT NULL,
  `residentialID` int(11) DEFAULT NULL,
  `storageID` int(11) DEFAULT NULL,
  `filePath` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`attachmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attachment`
--

LOCK TABLES `Attachment` WRITE;
/*!40000 ALTER TABLE `Attachment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Commercial`
--

DROP TABLE IF EXISTS `Commercial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Commercial` (
  `commercialID` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT '0' COMMENT '	',
  `bathrooms` varchar(45) DEFAULT '0',
  `rentAmt` decimal(19,2) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`commercialID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Commercial`
--

LOCK TABLES `Commercial` WRITE;
/*!40000 ALTER TABLE `Commercial` DISABLE KEYS */;
/*!40000 ALTER TABLE `Commercial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `K2S0`
--

DROP TABLE IF EXISTS `K2S0`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `K2S0` (
  `L337` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `K2S0`
--

LOCK TABLES `K2S0` WRITE;
/*!40000 ALTER TABLE `K2S0` DISABLE KEYS */;
INSERT INTO `K2S0` VALUES ('59d49ef6d08972726979');
/*!40000 ALTER TABLE `K2S0` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Residential`
--

DROP TABLE IF EXISTS `Residential`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Residential` (
  `residentialID` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL COMMENT '	',
  `zip` varchar(10) DEFAULT NULL,
  `bathrooms` varchar(45) DEFAULT NULL,
  `rentAmt` decimal(19,2) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`residentialID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Residential`
--

LOCK TABLES `Residential` WRITE;
/*!40000 ALTER TABLE `Residential` DISABLE KEYS */;
/*!40000 ALTER TABLE `Residential` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Storage`
--

DROP TABLE IF EXISTS `Storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Storage` (
  `storageID` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `rentAmt` decimal(19,2) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`storageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Storage`
--

LOCK TABLES `Storage` WRITE;
/*!40000 ALTER TABLE `Storage` DISABLE KEYS */;
/*!40000 ALTER TABLE `Storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'AmericanRealtyRentals'
--

--
-- Dumping routines for database 'AmericanRealtyRentals'
--
/*!50003 DROP PROCEDURE IF EXISTS `SearchRentals` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SearchRentals`(addressParam varchar(100), bedroomCount int, bathroomCount int, minRent int, maxRent int)
BEGIN

DECLARE searchString varchar(100);

SET searchString = CONCAT('%', addressParam, '%');

CREATE TEMPORARY TABLE SearchResults (
	commercialID INT,
    residentialID INT,
    storageID INT,
    address varchar(100),
    city varchar(45),
    state varchar(2),
    zip varchar(10),
    bedrooms INT,
    bathrooms INT,
    rentAmt decimal(19,2),
    description varchar(200),
    attachmentID INT,
    filePath varchar(200)
);

INSERT INTO SearchResults
SELECT Commercial.commercialID, 0, 0, address, city, state, zip, 0, 0, rentAmt, description, attachmentID, filePath 
FROM Commercial 
LEFT JOIN Attachment ON Commercial.commercialID = Attachment.commercialID
WHERE (address LIKE searchString OR city LIKE searchString OR state LIKE searchString)
AND (rentAmt >= minRent OR minRent = 0)
AND (rentAmt <= maxRent OR maxRent = 0);

INSERT INTO SearchResults
SELECT 0, Residential.residentialID, 0, address, city, state, zip, bedrooms, bathrooms, rentAmt, description, attachmentID, filePath 
FROM Residential
LEFT JOIN Attachment ON Residential.residentialID = Attachment.residentialID
WHERE (address LIKE searchString OR city LIKE searchString OR state LIKE searchString)
AND bedrooms >= bedroomCount
AND bathrooms >= bathroomCount
AND (rentAmt >= minRent OR minRent = 0)
AND (rentAmt <= maxRent OR maxRent = 0);

INSERT INTO SearchResults
SELECT 0, 0, Storage.storageID, address, city, state, zip, 0, 0, rentAmt, description, attachmentID, filePath  
FROM Storage 
LEFT JOIN Attachment ON Storage.storageID = Attachment.storageID
WHERE (address LIKE searchString OR city LIKE searchString OR state LIKE searchString)
AND (rentAmt >= minRent OR minRent = 0)
AND (rentAmt <= maxRent OR maxRent = 0);

SELECT * FROM SearchResults;

DROP TABLE SearchResults;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-08 19:21:01

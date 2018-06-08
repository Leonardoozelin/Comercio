-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2018 at 06:49 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

CREATE DATABASE comercio;
USE comercio;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comercio`
--

-- --------------------------------------------------------

--
-- Table structure for table `itempedido`
--

CREATE TABLE `itempedido` (
  `itp_codigo` int(11) NOT NULL,
  `itp_produto` varchar(20) DEFAULT NULL,
  `itp_quantidade` int(11) DEFAULT NULL,
  `itp_valorunit` decimal(12,2) DEFAULT NULL,
  `itp_valortotal` decimal(12,2) DEFAULT NULL,
  `ped_codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itempedido`
--

INSERT INTO `itempedido` (`itp_codigo`, `itp_produto`, `itp_quantidade`, `itp_valorunit`, `itp_valortotal`, `ped_codigo`) VALUES
(1, 'BATATA FRITA', 20, '2.50', '50.00', 1),
(2, 'BACON', 10, '1.50', '15.00', 2),
(3, 'AZEITONA', 100, '1.00', '100.00', 3),
(4, 'TOMATE', 2, '10.40', '5.20', 2);

-- --------------------------------------------------------

--
-- Table structure for table `pedido`
--

CREATE TABLE `pedido` (
  `ped_codigo` int(11) NOT NULL,
  `ped_nomecliente` varchar(15) DEFAULT NULL,
  `ped_dtpedido` varchar(12) DEFAULT NULL,
  `ped_condpagto` varchar(10) DEFAULT NULL,
  `ped_ativoinativo` char(1) DEFAULT NULL,
  `ped_ordem` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pedido`
--

INSERT INTO `pedido` (`ped_codigo`, `ped_nomecliente`, `ped_dtpedido`, `ped_condpagto`, `ped_ativoinativo`, `ped_ordem`) VALUES
(1, 'CLAUDIO', '02/06/2018', 'A VISTA', 'A', 123),
(2, 'RODRIGO', '03/06/2018', 'A PRAZO', 'I', 159),
(3, 'ANA', '09/06/2018', 'A VISTA', 'A', 369);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `itempedido`
--
ALTER TABLE `itempedido`
  ADD PRIMARY KEY (`itp_codigo`),
  ADD KEY `fk_ped_itp` (`ped_codigo`) USING BTREE;

--
-- Indexes for table `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`ped_codigo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `itempedido`
--
ALTER TABLE `itempedido`
  MODIFY `itp_codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pedido`
--
ALTER TABLE `pedido`
  MODIFY `ped_codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

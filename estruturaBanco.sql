-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08/06/2018 às 05:52
-- Versão do servidor: 10.1.31-MariaDB
-- Versão do PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `comercio`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `itempedido`
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
-- Fazendo dump de dados para tabela `itempedido`
--

INSERT INTO `itempedido` (`itp_codigo`, `itp_produto`, `itp_quantidade`, `itp_valorunit`, `itp_valortotal`, `ped_codigo`) VALUES
(1, 'BATATA FRITA', 20, '2.50', '50.00', 1),
(2, 'BACON', 10, '1.50', '15.00', 2),
(3, 'AZEITONA', 100, '1.00', '100.00', 3);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `itempedido`
--
ALTER TABLE `itempedido`
  ADD PRIMARY KEY (`itp_codigo`),
  ADD KEY `fk_ped_itp` (`ped_codigo`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `itempedido`
--
ALTER TABLE `itempedido`
  MODIFY `itp_codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `itempedido`
--
ALTER TABLE `itempedido`
  ADD CONSTRAINT `fk_ped_itp` FOREIGN KEY (`ped_codigo`) REFERENCES `pedido` (`ped_codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

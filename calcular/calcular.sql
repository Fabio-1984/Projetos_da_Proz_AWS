/*Uma loja tem um banco de dados que contém todo o controle de vendas de produtos e de cadastro de clientes. Pensando nisso, crie uma função para somar todos os clientes que foram cadastrados na loja durante um dia.*/

-- Criando o banco de dados
CREATE DATABASE vendas;

-- Usando o banco de dados
USE vendas;

CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100),
    Sobrenome VARCHAR(100),
    Email VARCHAR(100),
    DataCadastro DATE
);

-- Criando a função para contar clientes cadastrados em um dia específico
DELIMITER //

CREATE FUNCTION ContarClientesCadastrados(data_consulta DATE) RETURNS INT
BEGIN
    DECLARE total_clientes INT;
    
    SELECT COUNT(*) INTO total_clientes
    FROM Clientes
    WHERE DATE(DataCadastro) = data_consulta;

    RETURN total_clientes;
END;
//
DELIMITER ;



SELECT ContarClientesCadastrados('2023-11-27') AS TotalClientesCadastrados;
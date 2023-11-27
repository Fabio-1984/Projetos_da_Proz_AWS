/*Uma empresa de vendas tem um banco de dados com informações sobre os seus produtos. Ela precisa criar um relatório que faça um levantamento diário da quantidade de produtos comprados por dia. Para ajudar a empresa, crie um procedure para agilizar esse processo.*/

-- Criando o banco de dados
CREATE DATABASE vendas;

-- Usando o banco de dados
USE vendas;

CREATE TABLE Compras (
    CompraID INT AUTO_INCREMENT PRIMARY KEY,
    DataCompra DATE,
    Produto VARCHAR(100),
    Quantidade INT
);
-- Criando a procedure para calcular o total de produtos comprados por dia
DELIMITER //

CREATE PROCEDURE CalcularTotalProdutosPorDia()
BEGIN
    SELECT DataCompra, SUM(Quantidade) AS TotalProdutos
    FROM Compras
    GROUP BY DataCompra;
END;
//
DELIMITER ;


CALL CalcularTotalProdutosPorDia();
/*Crie um banco de dados, adicione tabelas e determine quais são os atributos de cada uma. Em seguida, execute um trigger que se relacione com algum comando, como insert, select, delete ou update.*/

-- Criando o banco de dados
CREATE DATABASE Biblioteca;

-- Usando o banco de dados
USE Biblioteca;

-- Tabela de Autores
CREATE TABLE Autores (
    AutorID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL
);

-- Tabela de Livros
CREATE TABLE Livros (
    LivroID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(200) NOT NULL,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

-- Tabela de Empréstimos
CREATE TABLE Emprestimos (
    EmprestimoID INT AUTO_INCREMENT PRIMARY KEY,
    LivroID INT,
    DataEmprestimo DATE,
    DataDevolucao DATE,
    FOREIGN KEY (LivroID) REFERENCES Livros(LivroID)
);

-- Trigger que atualiza a DataDevolucao quando um livro é devolvido
DELIMITER //
CREATE TRIGGER livro_devolvido
AFTER UPDATE ON Emprestimos
FOR EACH ROW
BEGIN
    IF NEW.DataDevolucao IS NOT NULL THEN
        UPDATE Emprestimos
        SET DataDevolucao = CURDATE()
        WHERE EmprestimoID = NEW.EmprestimoID;
    END IF;
END;
//
DELIMITER ;
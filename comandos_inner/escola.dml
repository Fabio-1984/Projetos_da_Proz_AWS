create database escola;

use escola;


create table aluno(
   matricula INT auto_increment PRIMARY KEY,
   nome VARCHAR(30) NOT NULL,
   turma VARCHAR(20) NOT NULL
);


create table disciplina(
   materia VARCHAR(30) NOT NULL,
   professor VARCHAR(30) NOT NULL,
   matricula_aluno INT,
   
   foreign key (matricula_aluno) references aluno(matricula)
);


insert into aluno(nome, turma) VALUES ('Fabio', '3º A');
insert into aluno(nome, turma) VALUES ('João', '2º A');
insert into aluno(nome, turma) VALUES ('José', '1º A');
insert into aluno(nome, turma) VALUES ('Simone', '2º A');
insert into aluno(nome, turma) VALUES ('Lucia', '3º A');

insert into disciplina(materia, professor) VALUES ('Matemática', 'Aurelio');
insert into disciplina(materia, professor) VALUES ('Portugês', 'Cleber');
insert into disciplina(materia, professor) VALUES ('Inglês', 'Paulo');
insert into disciplina(materia, professor) VALUES ('História', 'Joana');
insert into disciplina(materia, professor) VALUES ('Física', 'Andréia');


select nome, materia from aluno inner join disciplina on disciplina.matricula_aluno = aluno.matricula;

select nome, materia from aluno left join disciplina on disciplina.matricula_aluno = aluno.matricula;

select nome, materia from aluno right join disciplina on disciplina.matricula_aluno = aluno.matricula;
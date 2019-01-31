show databases;
create database portal_noticias;
use portal_noticias;
create table noticias(
id_noticia int not null primary key auto_increment,
titulo varchar(100),
noticia text,
data_criacao timestamp default current_timestamp);
show tables;
insert into noticias(titulo, noticia) values('titulo da noticia 2', 'conteudo da noticia 2');
select * from noticias;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'adminroodt'; /* alterado senha de acesso ao banco */

create table post (
num int PRIMARY KEY auto_increment,
title varchar(255) not null,
writer longtext not null,
content varchar(255) not null,
date dateTime not null default current_timestamp
);
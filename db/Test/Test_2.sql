








CREATE TABLE `COMMENT` (
`co_num` int primary key AUTO_INCREMENT,
`co_content` varchar(200) not NULL,
`co_date` datetime default current_timestamp not NULL,
`co_ori_num` int default 0 not NULL, -- 원댓글 번호(대댓글용)
`co_del` char(1) default 'N' not NULL, -- 삭제 여부 ('Y', 'N')
`co_me_id` varchar(15) NOT NULL, -- 작성자 ID
`co_po_num` int NOT NULL, -- 게시글 번호
FOREIGN KEY (`co_po_num`) REFERENCES `POST` (`po_num`)
);
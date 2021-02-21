CREATE TABLE `users` (
 `userid` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(64) DEFAULT NULL,
 `email` varchar(80) NOT NULL,
 `username` varchar(64) NOT NULL,
 `password` char(32) NOT NULL,
 `updated_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 PRIMARY KEY (`userid`),
 UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COMMENT='users list';

CREATE DATABASE advonitor;

INSERT INTO `users`(`name`, `email`, `username`, `password`) VALUES ("Ganesh","ganesh@gmail.com","tganesh","qwerty");
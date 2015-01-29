CREATE TABLE IF NOT EXISTS `spams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `indentifier` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='tambah kriteria mark as spam disini';

INSERT INTO `spams` (`id`, `indentifier`) VALUES
	(1, 'outlook.com'),
	(2, 'm.apotekt.com');
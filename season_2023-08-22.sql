# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.6.12-MariaDB-0ubuntu0.22.04.1)
# Database: season
# Generation Time: 2023-08-22 09:27:26 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table career
# ------------------------------------------------------------

DROP TABLE IF EXISTS `career`;

CREATE TABLE `career` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `team` varchar(50) NOT NULL DEFAULT '',
  `job` varchar(20) DEFAULT NULL,
  `content` text NOT NULL,
  `mode` tinyint(1) NOT NULL DEFAULT 0,
  `url` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `career` WRITE;
/*!40000 ALTER TABLE `career` DISABLE KEYS */;

INSERT INTO `career` (`id`, `team`, `job`, `content`, `mode`, `url`)
VALUES
	(1,'개발팀','정규직','개발 ∙ 인프라 ∙ Network ∙ VPN ∙ 방화벽 ∙ TypeScript ∙ JavaScript ∙ 크롤링 ∙ Nest.js',1,''),
	(2,'개발팀','계약직','개발 ∙ 인프라 ∙ Network ∙ VPN ∙ 방화벽 ∙ TypeScript ∙ JavaScript ∙ 크롤링 ∙ Nest.js',2,''),
	(3,'개발팀','단기 계약직','개발 ∙ 인프라 ∙ Network ∙ VPN ∙ 방화벽 ∙ TypeScript ∙ JavaScript ∙ 크롤링 ∙ Nest.js',0,''),
	(4,'연구팀','정규직','머신러닝 ∙ ML ∙ 모델링 ∙ 알고리즘 ∙ DATA ∙ SQL ∙ DW ∙ 방화벽 ∙ 분석 ∙ 데이터추출 ∙ 데이터분석',1,''),
	(5,'연구팀','계약직','머신러닝 ∙ ML ∙ 모델링 ∙ 알고리즘 ∙ DATA ∙ SQL ∙ DW ∙ 방화벽 ∙ 분석 ∙ 데이터추출 ∙ 데이터분석',2,''),
	(6,'연구팀','단기 계약직','머신러닝 ∙ ML ∙ 모델링 ∙ 알고리즘 ∙ DATA ∙ SQL ∙ DW ∙ 방화벽 ∙ 분석 ∙ 데이터추출 ∙ 데이터분석',0,'');

/*!40000 ALTER TABLE `career` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table history
# ------------------------------------------------------------

DROP TABLE IF EXISTS `history`;

CREATE TABLE `history` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `year` int(4) NOT NULL,
  `month` int(2) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;

INSERT INTO `history` (`id`, `year`, `month`, `content`)
VALUES
	(1,2021,1,'주식회사 시즌 법인 설립'),
	(2,2021,3,'고려대학교 세종캠퍼스 가족회사 협약'),
	(3,2021,3,'한국고고환경연구소 업무 협약(MOU)'),
	(4,2021,5,'기업부설연구소 설립'),
	(5,2022,2,'군산대학교 가족회사 협약'),
	(6,2022,2,'주식회사 시즌∙군산대학교 S/W중심대학 산학연협력 협약 (MOU)'),
	(7,2022,10,'엑세스랩(주) 업무 협약 (MOU)'),
	(8,2023,1,'고려대학교 세종산학협력단 (KUS) 가족회사 (ACE CLUB) 가입'),
	(9,2023,3,'(주)메타이뮨텍 업무 협약 (MOU)'),
	(10,2023,4,'사업장 확장이전');

/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table member
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `team` varchar(50) NOT NULL DEFAULT '',
  `name` varchar(16) NOT NULL DEFAULT '',
  `position` varchar(32) NOT NULL DEFAULT '',
  `email` text NOT NULL,
  `img` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;

INSERT INTO `member` (`id`, `team`, `name`, `position`, `email`, `img`)
VALUES
	(1,'CEO','채영훈','CEO','proin@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=10.png'),
	(2,'경영지원팀','채정훈','CFO','chaejh@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=4.png'),
	(3,'경영지원팀','김혜린','Manager','blair@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=2.png'),
	(4,'기획팀','김연호','Product Manager','stella@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=3.png'),
	(5,'기획팀','최혜원','Designer','baffle77@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=1.png'),
	(6,'연구팀','이대겸','Researcher, Team Leader','daek29@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=5.png'),
	(7,'연구팀','양혜진','Researcher','hjin@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=6.png'),
	(8,'연구팀','김예은','Researcher','loyevei@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=7.png'),
	(9,'개발팀','권태욱','Developer, Team Leader','kwon3286@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=8.png'),
	(10,'개발팀','정초롱','Developer','jeongcr@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=9.png'),
	(12,'개발팀','최영태','Developer','brian@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=6.png'),
	(13,'개발팀','김채린','Developer','cherry@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=7.png'),
	(14,'개발팀','조정인','Developer','jeongin@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=1.png'),
	(15,'개발팀','문선민','Developer','judians@season.co.kr','/wiz/api/component.admin.about.member/download?path=/var/www/jeongin/storage/profile&name=2.png');

/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table team
# ------------------------------------------------------------

DROP TABLE IF EXISTS `team`;

CREATE TABLE `team` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `team` varchar(50) NOT NULL DEFAULT '',
  `title` text NOT NULL,
  `detail` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;

INSERT INTO `team` (`id`, `team`, `title`, `detail`)
VALUES
	(1,'CEO','CEO',''),
	(2,'경영지원팀','CFO, Management Support Team','팀원들이 회사의 경영목표를 달성할 수 있도록 신속히 지원하고 회사 자산 및 시설을 관리합니다.'),
	(3,'기획팀','Planning team','다양한 요구사항을 분석하고 레퍼런스 조사를 통해 솔루션/서비스를 기획합니다.'),
	(4,'연구팀','AI convergence Technology Research Team','AI 인공지능 개발을 위한 연구와 데이터분석을 수행합니다. 다양한 형태의 데이터로부터 인사이트를 제공하는 것을 주 업무로 수행하고 있습니다.'),
	(5,'개발팀','Software Development Team','최신 인프라 기술을 개발하고 연구 성과를 활용한 웹 기반 솔루션/서비스를 개발합니다.');

/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

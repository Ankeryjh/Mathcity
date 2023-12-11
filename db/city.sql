/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.26 : Database - book
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`book` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `book`;

/*Table structure for table `book` */

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `author` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `category` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` char(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `book` */

insert  into `book`(`id`,`name`,`author`,`category`,`description`) values (1,'13','23','23','23');

/*Table structure for table `citymessage` */

DROP TABLE IF EXISTS `citymessage`;

CREATE TABLE `citymessage` (
  `title` char(225) NOT NULL,
  `num` char(50) NOT NULL,
  `way` char(50) NOT NULL,
  `id` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

/*Data for the table `citymessage` */

insert  into `citymessage`(`title`,`num`,`way`,`id`) values ('今天兰州市政府人员下乡视察工作','232','观看量',37),('兰州市公安局七里河分局破获20年前命案积案','10802','观看量',44),('平凉市崆峒区：“小葡萄”里有“乾坤”','8956','观看量',45),('甘肃省陇西县建成万亩中药材示范基地','5971','关注量',46),('2021年甘肃天水秦安桃花会盛大开园','40218','观看量',47),('甘肃省提高残疾人：“两项补贴”标准','36937','关注量',48),('甘肃多举措推动中医药强省建设','18920','关注量',49),('“推进乡村振兴行动计划发布活动”启动仪式在甘肃宕昌举行','8948','观看量',50),('中共甘肃省委组织关于干部任前公示的公告','61251','观看量',51),('兰州市城关区虚拟养老院回复食堂服务','509','观看量',52);

/*Table structure for table `communitymsg` */

DROP TABLE IF EXISTS `communitymsg`;

CREATE TABLE `communitymsg` (
  `title` char(225) NOT NULL,
  `id` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

/*Data for the table `communitymsg` */

insert  into `communitymsg`(`title`,`id`) values ('今天社区进行新冠疫苗注射，请大家积极阅读相关文件，积极参加。',24),('社区打算在5月10号举行广场舞比赛，请大家积极参加。',25),('社区在6月1号儿童节当天为每个儿童免费发放学习文具一套。',26),('社区菜价将于5月20号进行小规模的调整，望大家积极关注。',27),('社区将于5月1号放假5天，值班人员到时候会通知大家。',28),('七里河区龚家坪西路社区开展“喜迎新春·情系社区”系列主题活动',29),('疫情防控 甘肃在行动 社区“守门人”严把防控关？甘肃省城乡区有序开展疫情群防群控工作',30),('2021甘肃白银市选拔社区工作者公告汇总',31),('2021年甘肃省社区工作者招聘公告',32),('兰州市一小区深入开展“迎五一讲文明树新风促和谐”活动',33);

/*Table structure for table `day` */

DROP TABLE IF EXISTS `day`;

CREATE TABLE `day` (
  `id` int(4) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `day` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `day` */

insert  into `day`(`id`,`day`) values (0001,0);

/*Table structure for table `feedbackmsg` */

DROP TABLE IF EXISTS `feedbackmsg`;

CREATE TABLE `feedbackmsg` (
  `title` char(225) NOT NULL,
  `id` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

/*Data for the table `feedbackmsg` */

insert  into `feedbackmsg`(`title`,`id`) values ('今天李大妈家的小狗丢了，有见到的请及时联系李大妈。联系方式：18198021390',23),(' 王大叔腿常年疼痛，行动不便，希望大家可以多献献爱心，帮助王大叔。电话：18199081313',29),('依新明月，和谐新村，怡和庄园等多个小区存在水压过低，时常停水问题',30),('群众反映：工行信用卡扣除其3000元滞纳金，反映多次，尚未处理',31),('兰州市某高校电梯时有故障，请市质监局实地调查、排除隐患',32),('团结路两边村庄和小区多，大货车噪声和污染严重，建议把停车场取消，两边都绿化，大货车禁行',33),('市民李先生提出，盘旋路至东岗公交专用道已经规划，为什么不用？五里铺至东瓯货车和私家车占用公交车道，公交车无路可走',34),('七里河区吴家园西街，有很多修车店，他们在人行道修车。',35),('西站任家庄街，自从改成单行道后，很多电动车助力车逆行，给交通安全带来极大隐患，希望交警部门加大查处力度',36),('农商银行办理业务‘银行设置5个窗口，但仅开放2个窗口，导致办理业务速度较慢，严重影响正常的业务办理’',37);

/*Table structure for table `lightopen` */

DROP TABLE IF EXISTS `lightopen`;

CREATE TABLE `lightopen` (
  `date` char(50) NOT NULL,
  `name` char(100) NOT NULL,
  `local` char(225) NOT NULL,
  `isOpen` char(5) NOT NULL,
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `sum` int(1) NOT NULL DEFAULT '1',
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

/*Data for the table `lightopen` */

insert  into `lightopen`(`date`,`name`,`local`,`isOpen`,`id`,`sum`) values ('2021-01-27','周佳佳','甘肃省兰州市城关区拱星墩小学','on',32,1);

/*Table structure for table `outwater` */

DROP TABLE IF EXISTS `outwater`;

CREATE TABLE `outwater` (
  `date` char(100) NOT NULL,
  `name` char(50) NOT NULL,
  `local` char(225) NOT NULL,
  `isOpen` char(10) NOT NULL,
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `sum` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `outwater` */

insert  into `outwater`(`date`,`name`,`local`,`isOpen`,`id`,`sum`) values ('2021-04-19','李华','甘肃省天水市秦安县','on',9,1);

/*Table structure for table `username` */

DROP TABLE IF EXISTS `username`;

CREATE TABLE `username` (
  `Sname` char(100) NOT NULL,
  `Sphone` char(50) NOT NULL,
  `Spassword` char(200) NOT NULL,
  `tpassword` char(200) NOT NULL,
  `jurisdiction` char(50) DEFAULT NULL,
  `id` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Sphone`,`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `username` */

insert  into `username`(`Sname`,`Sphone`,`Spassword`,`tpassword`,`jurisdiction`,`id`) values ('zjzzjx','18298031037','$2a$10$d8bZndsSlh/BB2ejQljOxu1c/g5vsUU1GquZ4moHDLw8Dil/XFmoy','$2a$10$VewJRpjs0BWfBhCeIR7FuO2xrJgm8oWaUDsUDg8z3gVQSK/drHPa2','管理员',6);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `Susername` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `Ssex` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `Sage` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `Smajor` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `Sschool` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `Sqq` int(10) NOT NULL,
  `Saddress` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `Smotto` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `id` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

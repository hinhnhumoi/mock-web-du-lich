/*
 Navicat Premium Data Transfer

 Source Server         : ONYX-3306
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : travel_v1

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 21/02/2022 20:59:18
*/
Drop database if exists travel_v1;
create database travel_v1;
use travel_v1;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for binhluan
-- ----------------------------
DROP TABLE IF EXISTS `binhluan`;
CREATE TABLE `binhluan`  (
  `id_bl` int NOT NULL AUTO_INCREMENT,
  `id_chitiet` int NOT NULL,
  `ten` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `noidung` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `trangthai` int NOT NULL,
  `ngaygio` date NOT NULL,
  PRIMARY KEY (`id_bl`) USING BTREE,
  INDEX `id_chitiet`(`id_chitiet`) USING BTREE,
  CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`id_chitiet`) REFERENCES `chitiettour` (`id_chitiet`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of binhluan
-- ----------------------------

-- ----------------------------
-- Table structure for chitiettour
-- ----------------------------
DROP TABLE IF EXISTS `chitiettour`;
CREATE TABLE `chitiettour`  (
  `id_chitiet` int NOT NULL AUTO_INCREMENT,
  `id_tour` int NOT NULL,
  `ngaydi` datetime(0) NOT NULL,
  `ngayve` datetime(0) NOT NULL,
  `soluongcon` int NOT NULL,
  `ghichu` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `hinhanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id_chitiet`) USING BTREE,
  INDEX `id_tour`(`id_tour`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  CONSTRAINT `chitiettour_ibfk_1` FOREIGN KEY (`id_tour`) REFERENCES `tour` (`id_tour`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `chitiettour_ibfk_2` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 61 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chitiettour
-- ----------------------------
INSERT INTO `chitiettour` VALUES (44, 30, '2019-06-06 11:06:00', '2019-06-11 00:03:00', 24, 'Với những vẻ đẹp vừa hùng vỹ vừa tráng lệ và không gian huyền ảo, động Thiên Đường là một điểm đến thu hút khách du lịch suốt bốn mùa của tỉnh Quảng Bình. Cấu trúc kỳ vĩ, vẻ đẹp huyền diệu và tráng lệ của hang động đã khiến những người tham gia khảo sát ngỡ ngàng. Và từ những liên tưởng thú vị về một “Thiên Cung” nơi trần thế, ngay trong lòng Di sản Thiên nhiên Thế giới mà nảy sinh ý tưởng đặt tên là “Động Thiên Đường”.', 'YbhTzyNe2EuyMf3uPtC3JGdyR48ApRNX9l9hH5Qk.jpeg', 9);
INSERT INTO `chitiettour` VALUES (45, 31, '2019-06-13 04:02:00', '2019-06-18 15:01:00', 25, 'sẽ đưa du khách tham quan Hà Nội 36 phố phường, đắm chìm trong nên thơ núi rừng Yên Tử, cảm nhận không gian bao la hùng vĩ của Hạ Long, hay đến với Sapa thành phố chìm trong làn mây bồng bềnh huyền ảo, vẽ nên một bức tranh sơn thủy hữu tình.', '9fqWJJX2PpQczomQytZnxayJB876gegyNouIC3z2.jpeg', 9);
INSERT INTO `chitiettour` VALUES (46, 32, '2019-06-07 02:03:00', '2019-06-10 14:01:00', 24, 'Lê nguyễn thanh tuyền', 'tzunu85Z99ukZqiRSVyUBkiTiMzNG9aSEq1exEUG.jpeg', 9);
INSERT INTO `chitiettour` VALUES (47, 33, '2019-06-20 02:04:00', '2019-06-23 02:04:00', 25, 'Lê nguyễn thanh tuyền', '9fkaQtAamf50CT5XvGwK1CzjktruxgeVZCm7CGPx.jpeg', 9);
INSERT INTO `chitiettour` VALUES (48, 35, '2019-06-14 02:03:00', '2019-06-18 14:02:00', 25, 'Lê nguyễn thanh tuyền', 'lFpUx3QLwugVNThLdnG0OC7yxfZ9899lmRqEScuN.jpeg', 9);
INSERT INTO `chitiettour` VALUES (49, 36, '2019-06-22 02:04:00', '2019-06-25 15:04:00', 9, 'Lê nguyễn thanh tuyền', '6lb639AmFGUpYklxgmUZhhQqJsYb3axcXScwXa9Y.jpeg', 9);
INSERT INTO `chitiettour` VALUES (50, 37, '2019-06-16 13:02:00', '2019-06-19 14:03:00', 24, 'Lê nguyễn thanh tuyền', 'yqklgL5Yja2mXE0K8yf6opePitujiod2CzzQyOI5.jpeg', 9);
INSERT INTO `chitiettour` VALUES (51, 38, '2018-06-22 04:02:00', '2018-06-25 14:03:00', 25, 'Lê nguyễn thanh tuyền', 'fWP9LNQcVHZf1f9ZidSXJCW1WVxTg16uhAMGQraY.jpeg', 9);
INSERT INTO `chitiettour` VALUES (52, 39, '2019-06-22 15:01:00', '2019-06-25 03:04:00', 24, 'Lê nguyễn thanh tuyền', 'mCziIlZi8EtH02hAogJYUe5V4EXbofmaSX4inm3T.jpeg', 9);
INSERT INTO `chitiettour` VALUES (53, 40, '2019-07-18 02:03:00', '2019-07-21 15:04:00', 24, 'Lê nguyễn thanh tuyền', 'K3OzMJdBUepkvlYdIIGavzEqABQx3SBO5fDFYWFz.jpeg', 9);
INSERT INTO `chitiettour` VALUES (54, 41, '2019-07-20 02:03:00', '2019-07-23 14:04:00', 25, 'Lê nguyễn thanh tuyền', 'wocmZx2HF5OOztSLlycpY2SJySXIIlVwhEjF1SWn.jpeg', 9);
INSERT INTO `chitiettour` VALUES (55, 42, '2019-08-03 03:02:00', '2019-08-09 03:02:00', 23, 'Lê nguyễn thanh tuyền', 'qYZRQF9U8HjBf9nLLoldgAiesE9cXAoxwhhSowmP.png', 9);
INSERT INTO `chitiettour` VALUES (56, 43, '2019-09-16 02:03:00', '2019-09-18 04:02:00', 23, 'Lê nguyễn thanh tuyền', 'pN5SdOhEx7pWuJma8h2tWqNDSO45O2ZIDoBKv3Sz.jpeg', 9);
INSERT INTO `chitiettour` VALUES (57, 44, '2019-08-17 02:03:00', '2019-08-24 15:02:00', 24, 'Lê nguyễn thanh tuyền', 'QIoNbGcEuwo7Q2X8g4Ry0WS7Qcx0ADezkK2MadKg.jpeg', 9);
INSERT INTO `chitiettour` VALUES (58, 45, '2019-08-23 03:02:00', '2019-08-25 14:03:00', 25, 'Lê nguyễn thanh tuyền', 'F0vjVN2jllY6rNx2JH7tjNuiiuejtSTp6C3cWOyk.jpeg', 9);
INSERT INTO `chitiettour` VALUES (59, 47, '2019-09-30 03:53:00', '2019-10-04 14:03:00', 25, 'Lê nguyễn thanh tuyền', 'sDv3V2eYaaiqfNKNglkVM2KIfivMSYnxVvGvWCHn.jpeg', 9);
INSERT INTO `chitiettour` VALUES (60, 48, '2019-07-27 02:04:00', '2019-07-31 02:04:00', 25, 'Lê nguyễn thanh tuyền', 'B5MimFC0yog0oh9BuExgQ59NZ0huNaFkjC8SgTz2.jpeg', 9);

-- ----------------------------
-- Table structure for chucvu
-- ----------------------------
DROP TABLE IF EXISTS `chucvu`;
CREATE TABLE `chucvu`  (
  `id_cv` int NOT NULL AUTO_INCREMENT,
  `tencv` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_cv`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chucvu
-- ----------------------------
INSERT INTO `chucvu` VALUES (1, 'khách hàng');
INSERT INTO `chucvu` VALUES (4, 'quản lí');
INSERT INTO `chucvu` VALUES (5, 'nhân viên kinh doanh');

-- ----------------------------
-- Table structure for chuongtrinhtour
-- ----------------------------
DROP TABLE IF EXISTS `chuongtrinhtour`;
CREATE TABLE `chuongtrinhtour`  (
  `id_chuongtrinh` int NOT NULL AUTO_INCREMENT,
  `id_tour` int NOT NULL,
  `tieude` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ngaythu` int NOT NULL,
  `mota` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_chuongtrinh`) USING BTREE,
  INDEX `id_tour`(`id_tour`) USING BTREE,
  CONSTRAINT `chuongtrinhtour_ibfk_1` FOREIGN KEY (`id_tour`) REFERENCES `tour` (`id_tour`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chuongtrinhtour
-- ----------------------------
INSERT INTO `chuongtrinhtour` VALUES (6, 30, '', 1, '06h30: Quý khách tập trung tại điểm đón.  07h00: Khởi hành đi Phan Thiết. Ăn sáng tại Long Thành. Trên đường đi quý khách tìm hiểu về lịch sử, văn hóa, địa lý của những vùng đất đi qua và tham gia các trò chơi vui nhộn cùng với HDV.  Trưa: Dùng cơm trưa tại nhà hàng địa phương. Trên đường về khách sạn, quý khách tham quan: Nghệ thuật tranh cát Phi Long Bảo tàng ngọc trai Long Beach Pearl Mũi Né. Nhận phòng khách sạn và nghỉ ngơi  Chiều: Đoàn tự do tắm biển tại resort. Dùng cơm chiều tại nhà hàng. Chương trình riêng của quý khách. Nghỉ đêm tại resor');
INSERT INTO `chuongtrinhtour` VALUES (7, 30, '', 2, 'Sáng: Dùng điểm tâm sáng tại khách sạn. Quý khách chinh phục Đồi cát bay – tự do tham gia trò chơi trượt cát. Tiếp tục tham quan : Công viên tượng cát Forgotten land – mang chủ để cổ tích và truyền thuyết Việt Nam cùng thế giới, được điêu khắc từ 100% cát tự nhiên, không pha trộn phụ gia và chỉ nhờ sự nén chặt của cát và nước. (bao gồm trong tour).  Trưa: Đoàn dùng bữa trưa tại nhà hàng. Trở về khách sạn nghỉ ngơi.  Chiều: Xe đưa đoàn dùng cơm chiều tại nhà hàng. Quý khách đến với sân khấu Làng Chài – Fishermen Show, thưởng thức chương trình ca múa nhạc kịch trên nền sân khấu nhạc nước lập trình tái tạo cảnh biển cả và làng chài với hàng trăm ống phun nước kỹ thuật số công nghệ 2D và 3D mới nhất hiện nay, được đẩy áp lực cao bởi các bơm chìm công suất lớn và tạo màu bằng hàng ngàn đèn LED 256 màu. (chi phí tự túc).  Tối: Xe đưa đoàn trở về khách sạn nghỉ ngơi');
INSERT INTO `chuongtrinhtour` VALUES (8, 30, '', 3, 'Sáng: Dùng điểm tâm sáng tại khách sạn. Đoàn sinh hoạt tự do  Trưa: Làm thủ tục trả phòng, đoàn dùng bữa trưa tại nhà hàng. Khởi hành về TP.HCM, trên đường về, quý khách tham quan và mua sắm: Cơ sở sản xuất nước mắm - mua sắm đặc sản của miền biển, cũng như tìm hiểu đời sống mua bán của người dân Bình Thuận. Tham quan Lâu Đài rượu vang : Quý khách được nghe giới thiệu về quy trình sản xuất, đóng chai và thưởng thức một trong những loại rượu vang hảo hạng nổi tiếng thế giới được xuất xứ từ Thung Lũng Napa (Mỹ)  Chiều: Về đến TP.HCM, xe đưa đoàn về điểm đón ban đầu, chia tay và hẹn gặp lại quý khách trong hành trình kế tiếp');
INSERT INTO `chuongtrinhtour` VALUES (9, 30, '', 4, 'Sáng: Dùng điểm tâm sáng tại khách sạn. Đoàn sinh hoạt tự do  Trưa: Làm thủ tục trả phòng, đoàn dùng bữa trưa tại nhà hàng. Khởi hành về TP.HCM, trên đường về, quý khách tham quan và mua sắm: Cơ sở sản xuất nước mắm - mua sắm đặc sản của miền biển, cũng như tìm hiểu đời sống mua bán của người dân Bình Thuận. Tham quan Lâu Đài rượu vang : Quý khách được nghe giới thiệu về quy trình sản xuất, đóng chai và thưởng thức một trong những loại rượu vang hảo hạng nổi tiếng thế giới được xuất xứ từ Thung Lũng Napa (Mỹ)  Chiều: Về đến TP.HCM, xe đưa đoàn về điểm đón ban đầu, chia tay và hẹn gặp lại quý khách trong hành trình kế tiếp');
INSERT INTO `chuongtrinhtour` VALUES (10, 30, '', 5, 'Sáng: Dùng điểm tâm sáng tại khách sạn. Đoàn sinh hoạt tự do  Trưa: Làm thủ tục trả phòng, đoàn dùng bữa trưa tại nhà hàng. Khởi hành về TP.HCM, trên đường về, quý khách tham quan và mua sắm: Cơ sở sản xuất nước mắm - mua sắm đặc sản của miền biển, cũng như tìm hiểu đời sống mua bán của người dân Bình Thuận. Tham quan Lâu Đài rượu vang : Quý khách được nghe giới thiệu về quy trình sản xuất, đóng chai và thưởng thức một trong những loại rượu vang hảo hạng nổi tiếng thế giới được xuất xứ từ Thung Lũng Napa (Mỹ)  Chiều: Về đến TP.HCM, xe đưa đoàn về điểm đón ban đầu, chia tay và hẹn gặp lại quý khách trong hành trình kế tiếp');
INSERT INTO `chuongtrinhtour` VALUES (11, 33, 'abc', 1, '<h6><a href=\"http://travel.com:8082/du-lich-bac-lieu-can-tho-ca-mau/49.html\">Du lịch Bạc Li&ecirc;u - Cần Thơ - C&agrave; Mau</a></h6>\r\n\r\n<h5>Khởi h&agrave;nh tại: Thanh kh&ecirc;</h5>\r\n\r\n<h5>Thời gian 3 ng&agrave;y / 3 đ&ecirc;m</h5>\r\n\r\n<h5>Gi&aacute;: 75489800</h5>\r\n\r\n<p>Lịch tr&igrave;nh: Du lịch Bạc Li&ecirc;u - Cần Thơ - C&agrave; Mau</p>\r\n\r\n<p>C&ograve;n: 24 chỗ</p>\r\n\r\n<p>-- dvshvjks</p>\r\n\r\n<p>ohgjk</p>\r\n\r\n<p>&nbsp;</p>');
INSERT INTO `chuongtrinhtour` VALUES (12, 33, '', 2, '05h00 Qúy khách tập trung tại điểm hẹn.  05h30 Khởi hành đi Cà Mau (350 km)  06h30 Thưởng thức món hủ tíu Mỹ Tho.  07h15 Tiếp tục hành trình đến Bạc Liêu.  11h45 Tham quan Nhà công tử Bạc Liêu.  12h30 Ăn trưa tại nhà hàng địa phương.  14h00 Tham quan Nhà Thờ Tắc Sậy (Nhà thờ Cha Diệp) tại huyện Giá Rai, cách Tp. Bạc Liêu 37 km.');
INSERT INTO `chuongtrinhtour` VALUES (13, 33, '', 3, '05h00 Qúy khách tập trung tại điểm hẹn.  05h30 Khởi hành đi Cà Mau (350 km)  06h30 Thưởng thức món hủ tíu Mỹ Tho.  07h15 Tiếp tục hành trình đến Bạc Liêu.  11h45 Tham quan Nhà công tử Bạc Liêu.  12h30 Ăn trưa tại nhà hàng địa phương.  14h00 Tham quan Nhà Thờ Tắc Sậy (Nhà thờ Cha Diệp) tại huyện Giá Rai, cách Tp. Bạc Liêu 37 km.');

-- ----------------------------
-- Table structure for diadiem
-- ----------------------------
DROP TABLE IF EXISTS `diadiem`;
CREATE TABLE `diadiem`  (
  `id_dd` int NOT NULL AUTO_INCREMENT,
  `id_tinh` int NOT NULL,
  `diemden` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mota` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_dd`) USING BTREE,
  INDEX `id_tinh`(`id_tinh`) USING BTREE,
  CONSTRAINT `diadiem_ibfk_1` FOREIGN KEY (`id_tinh`) REFERENCES `tinh` (`id_tinh`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of diadiem
-- ----------------------------
INSERT INTO `diadiem` VALUES (3, 1, 'phố cổ hội an', 'Một địa danh nổi tiếng ở quảng nam');
INSERT INTO `diadiem` VALUES (4, 2, 'đảo lý sơn', 'Một trong những hàng đảo nổi tiếng nhất ở quảng ngãi');
INSERT INTO `diadiem` VALUES (5, 3, 'mỹ châu', 'xã');
INSERT INTO `diadiem` VALUES (6, 3, 'mỹ đức', 'xã');
INSERT INTO `diadiem` VALUES (7, 4, 'Hải châu', 'quận');
INSERT INTO `diadiem` VALUES (8, 4, 'Thanh khê', 'quận');
INSERT INTO `diadiem` VALUES (9, 4, 'Thanh khê', 'quận');
INSERT INTO `diadiem` VALUES (10, 5, 'U minh', 'rừng');

-- ----------------------------
-- Table structure for hoadon
-- ----------------------------
DROP TABLE IF EXISTS `hoadon`;
CREATE TABLE `hoadon`  (
  `id_hd` int NOT NULL AUTO_INCREMENT,
  `id_pd` int NOT NULL,
  `ngaythanhtoan` date NOT NULL,
  `tongtien` int NULL DEFAULT NULL,
  `tinhtrang` int NOT NULL,
  PRIMARY KEY (`id_hd`) USING BTREE,
  INDEX `id_pd`(`id_pd`) USING BTREE,
  CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`id_pd`) REFERENCES `phieudat` (`id_pd`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hoadon
-- ----------------------------
INSERT INTO `hoadon` VALUES (1, 1, '2018-06-02', 3784820, 0);
INSERT INTO `hoadon` VALUES (3, 3, '2018-06-02', 3784820, 0);
INSERT INTO `hoadon` VALUES (4, 2, '2018-06-02', 3784820, 0);

-- ----------------------------
-- Table structure for loaitour
-- ----------------------------
DROP TABLE IF EXISTS `loaitour`;
CREATE TABLE `loaitour`  (
  `id_lt` int NOT NULL AUTO_INCREMENT,
  `tenlt` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_lt`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of loaitour
-- ----------------------------
INSERT INTO `loaitour` VALUES (3, 'Sự kiện');
INSERT INTO `loaitour` VALUES (4, 'nổi bật');
INSERT INTO `loaitour` VALUES (5, 'yêu thích');
INSERT INTO `loaitour` VALUES (6, 'hàng đầu');

-- ----------------------------
-- Table structure for phieudat
-- ----------------------------
DROP TABLE IF EXISTS `phieudat`;
CREATE TABLE `phieudat`  (
  `id_pd` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `id_chitiet` int NOT NULL,
  `ngaydat` date NOT NULL,
  `treem` int NOT NULL,
  `trenho` int NOT NULL,
  `nguoilon` int NOT NULL,
  `soluongdat` int NOT NULL,
  `trangthai` int NOT NULL,
  `ghichu` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `huy` int NOT NULL,
  `thanhtien` float NOT NULL,
  PRIMARY KEY (`id_pd`) USING BTREE,
  INDEX `id_chitiet`(`id_chitiet`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  CONSTRAINT `phieudat_ibfk_1` FOREIGN KEY (`id_chitiet`) REFERENCES `chitiettour` (`id_chitiet`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `phieudat_ibfk_2` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of phieudat
-- ----------------------------
INSERT INTO `phieudat` VALUES (1, 9, 46, '2018-05-30', 1, 0, 0, 1, 1, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (2, 9, 49, '2018-05-31', 1, 0, 0, 1, 1, 'ầ', 0, 3784820);
INSERT INTO `phieudat` VALUES (3, 9, 50, '2018-05-31', 1, 0, 0, 1, 1, 'ncv', 0, 3784820);
INSERT INTO `phieudat` VALUES (4, 2, 52, '2018-06-01', 1, 0, 0, 1, 0, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (5, 2, 49, '2018-06-01', 1, 0, 0, 1, 0, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (6, 2, 49, '2018-06-01', 1, 0, 0, 1, 0, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (7, 2, 49, '2018-06-01', 1, 0, 0, 1, 0, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (8, 2, 49, '2018-06-01', 1, 0, 0, 1, 0, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (9, 2, 49, '2018-06-01', 1, 0, 0, 1, 0, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (10, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (11, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (12, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (13, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (14, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (15, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (16, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (17, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (18, 2, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 75489800);
INSERT INTO `phieudat` VALUES (19, 9, 49, '2018-06-01', 0, 0, 1, 1, 0, 's', 0, 1);
INSERT INTO `phieudat` VALUES (20, 2, 44, '2018-06-01', 0, 0, 1, 1, 0, 'cvbnm,', 0, 7000000);
INSERT INTO `phieudat` VALUES (21, 2, 55, '2018-06-02', 0, 0, 1, 1, 0, 'abc', 0, 75489800);
INSERT INTO `phieudat` VALUES (22, 2, 55, '2018-06-02', 0, 0, 1, 1, 0, 'abc', 0, 75489800);
INSERT INTO `phieudat` VALUES (23, 2, 53, '2018-06-02', 1, 0, 0, 1, 0, 'abc', 0, 3784820);
INSERT INTO `phieudat` VALUES (24, 2, 57, '2018-06-02', 0, 0, 1, 1, 0, 'abc', 0, 75489800);
INSERT INTO `phieudat` VALUES (25, 2, 56, '2018-06-03', 0, 0, 1, 1, 0, 'abc', 0, 75489800);
INSERT INTO `phieudat` VALUES (26, 2, 56, '2018-06-04', 0, 0, 1, 1, 0, 'q', 0, 75489800);

-- ----------------------------
-- Table structure for tinh
-- ----------------------------
DROP TABLE IF EXISTS `tinh`;
CREATE TABLE `tinh`  (
  `id_tinh` int NOT NULL AUTO_INCREMENT,
  `tentinh` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_tinh`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tinh
-- ----------------------------
INSERT INTO `tinh` VALUES (1, 'Quảng nam');
INSERT INTO `tinh` VALUES (2, 'Quảng ngãi');
INSERT INTO `tinh` VALUES (3, 'Bình Định');
INSERT INTO `tinh` VALUES (4, 'Đà Nẵng');
INSERT INTO `tinh` VALUES (5, 'cà mau');
INSERT INTO `tinh` VALUES (6, 'tiền giang');
INSERT INTO `tinh` VALUES (7, 'cần thơ');

-- ----------------------------
-- Table structure for tour
-- ----------------------------
DROP TABLE IF EXISTS `tour`;
CREATE TABLE `tour`  (
  `id_tour` int NOT NULL AUTO_INCREMENT,
  `id_tinh` int NULL DEFAULT NULL,
  `id_dd` int NOT NULL,
  `id_lt` int NULL DEFAULT NULL,
  `phuongtien` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sltd` int NOT NULL,
  `tentour` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `songay` int NOT NULL,
  `sodem` int NOT NULL,
  `gianguoilon` float NOT NULL,
  `giatreem` float NOT NULL,
  `giatrenho` float NOT NULL,
  `motatour` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `lichtrinh` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `bando` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_tour`) USING BTREE,
  INDEX `id_lt`(`id_lt`) USING BTREE,
  INDEX `id_dd`(`id_dd`) USING BTREE,
  INDEX `id_tinh`(`id_tinh`) USING BTREE,
  CONSTRAINT `tour_ibfk_1` FOREIGN KEY (`id_dd`) REFERENCES `diadiem` (`id_dd`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tour_ibfk_2` FOREIGN KEY (`id_lt`) REFERENCES `loaitour` (`id_lt`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tour_ibfk_3` FOREIGN KEY (`id_tinh`) REFERENCES `tinh` (`id_tinh`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tour
-- ----------------------------
INSERT INTO `tour` VALUES (30, 1, 3, 4, 'xe khách, thuyền', 25, 'Du Lịch Miền Trung - Đà Nẵng - Động Thiên Đường 5 ngày dịp hè 2018', 5, 4, 7000000, 5000000, 1000000, 'g1.jpg', 'Đà Nẵng - Bà Nà - Hội An - Huế - Thánh Địa La Vang - Động Thiên Đường', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.442815101503!2d106.280869214879!3d17.5816951879624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ad236984ba6150!2sPhong+Nha+Cave!5e0!3m2!1svi!2s!4v1527695111634');
INSERT INTO `tour` VALUES (31, 4, 8, 6, 'xe bus', 25, 'Du Lịch Miền Bắc - Hạ Long - Sapa - Hàm Rồng 5 ngày giá tốt hè 2018', 5, 4, 4000000, 3000000, 1000000, 'g2.jpg', 'Hà Nội - Hạ Long - Lào Cai - Sapa - Fansipan', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (32, 4, 7, 6, 'xe bus', 25, 'Du lịch Nha Trang: Miền quê hương cát trắng', 3, 3, 75489800, 3784820, 23546, 'g3.jpg', 'nha trang', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (33, 4, 7, 6, 'ô tô , thuyền', 25, 'Du lịch Cà Mau - U Minh Hạ mùa gác kèo ong - Homestay Đất Mũi Cà Mau', 3, 3, 75489800, 3784820, 23546, 'g1.jpg', 'Du lịch Cà Mau - U Minh Hạ mùa gác kèo ong - Homestay', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (34, 4, 9, 4, 'xe ôm', 25, 'Du lịch Tiền Giang - Cần Thơ', 4, 3, 75489800, 3784820, 23546, 'g2.jpg', 'Du lịch Tiền Giang - Cần Thơ', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1524405705291\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>');
INSERT INTO `tour` VALUES (35, 4, 9, 6, 'xe ôm', 25, 'Du lịch Tiền Giang - Cần Thơ', 4, 3, 75489800, 3784820, 23546, 'g3.jpg', 'Du lịch Tiền Giang - Cần Thơ', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1524405705291\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>');
INSERT INTO `tour` VALUES (36, 4, 9, 6, 'xe bus', 25, 'Du lịch Bạc Liêu - Cần Thơ - Cà Mau', 3, 3, 1, 3784820, 23546, 'g1.jpg', 'Du lịch Bạc Liêu - Cần Thơ - Cà Mau', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (37, 4, 9, 6, 'xe bus', 25, 'Vườn rau thủy canh - Thác Datanla - Thiền viện Trúc Lâm', 3, 3, 75489800, 3784820, 23546, 'g2.jpg', 'Vườn rau thủy canh - Thác Datanla - Thiền viện Trúc Lâm', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (38, 4, 7, 5, 'xe bus', 25, 'Du lịch Đà Nẵng - Bà Nà - Hội An - Huế - Động Phong Nha', 3, 3, 75489800, 3784820, 23546, 'g3.jpg', 'Du lịch Đà Nẵng - Bà Nà - Hội An - Huế - Động Phong Nha', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (39, 3, 6, 5, 'xe bus', 25, 'Du lịch Hà Nội - Thị trấn Sapa mờ sương', 3, 3, 75489800, 3784820, 23546, 'g1.jpg', 'Du lịch Hà Nội - Thị trấn Sapa mờ sương', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (40, 4, 8, 3, 'xe bus', 25, 'Du lịch Phan Thiết: Mũi Né - Công viên tượng cát - Show nhạc nước Huyền Thoại Làng Chài', 3, 3, 75489800, 3784820, 23546, 'g2.jpg', 'Du lịch Phan Thiết: Mũi Né - Công viên tượng cát - Show nhạc nước Huyền Thoại Làng Chài', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (41, 4, 7, 3, 'xe bus', 25, 'Tour Lễ Hội Pháo Hoa Đà Nẵng - Huế 3 ngày khởi hành hè 2018 giá tốt', 3, 3, 75489800, 3784820, 23546, 'g3.jpg', 'Đà Nẵng - Bà Nà - Ngũ Hành Sơn - Bán Đảo Sơn Trà - Hội An - Huế', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (42, 4, 7, 3, 'xe bus', 25, 'Du Lịch Đông Bắc - Hà Giang - Cao Bằng - Hồ Ba Bể 6 ngày hè 2018', 6, 5, 75489800, 3784820, 23546, 'g4.jpg', 'Hà Nội - Hà Giang - Quản Bạ - Đồng Văn - Lũng Cú - Mèo Vạc - Cao Bằng - Thác Bản Giốc - Động Ngườm Ngao - Hang Pắc Pó - Hồ Ba Bể', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (43, 4, 7, 5, 'xe bus', 25, 'Combo Sapa 2 ngày khởi hành từ Hà Nội - Khách sạn 4 sao Sapa Charm Hotel', 2, 2, 75489800, 3784820, 23546, 'g3.jpg', 'Thị trấn Sapa - Bản Cát Cát - Núi Hàm Rồng - Fansipan', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (44, 4, 7, 4, 'xe ôm', 25, 'Du Lịch Hạ Long - Hải Phòng - Ninh Bình 4 ngày giá tiết kiệm hè 2018', 4, 3, 75489800, 3784820, 23546, 'g1.jpg', 'Hà Nội - Yên Tử - Hạ Long - Hải Phòng - Cầu Vượt Biển Tân Vũ - Ninh Bình - Chùa Bái Đính - Tràng An', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (45, 3, 5, 4, 'xe bus', 25, 'Du Lịch Miền Tây - Mỹ Tho - Chùa Vình Tràng - Cần Thơ 2 ngày lễ 2/9', 2, 2, 75489800, 3784820, 23546, 'g5.jpg', 'Mỹ Tho - Chùa Vĩnh Tràng - Cồn Long - Lân - Qui - Phụng - Cần Thơ - Chợ Nổi Cái Răng', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (46, 1, 3, 4, 'xe bus', 25, 'Tour Hành Hương Tháng Giêng Bạc Liêu - Mẹ Nam Hải giá tiết kiệm 2018', 2, 2, 75489800, 3784820, 23546, 'g7.jpg', 'Bạc Liêu - Quan Âm Phật Đài Mẹ Nam Hải - Cánh Đồng Quạt Gió - Chùa Xiêm Cán', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (47, 2, 4, 4, 'xe bus', 25, 'Du Lịch Phú Quốc - Hòn Móng Tay - Hòn Mây Rút giá tiết kiệm 2018', 4, 3, 75489800, 3784820, 23546, 'g2.jpg', 'Phú Quốc - Hòn Móng Tay - Hòn Mây Rút', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');
INSERT INTO `tour` VALUES (48, 2, 4, 4, 'xe bus', 25, 'Du Lịch Mai Châu - Mộc Châu - Ninh Bình 4 ngày khởi hành dịp hè 2018', 4, 3, 75489800, 3784820, 23546, 'g3.jpg', 'Mai Châu - Bản Lác - Mộc Châu - Thác Dải Yếm - Đồi Chè Trái Tim - Chùa Bái Đính - Tràng An', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61409.712273423174!2d108.14112001492046!3d15.850971738017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420425059780e9%3A0xd46fd8eeb5230300!2zxJBp4buHbiBRdWFuZywgxJBp4buHbiBCw6BuLCBRdWFuZyBOYW0gUHJvdmluY2U!5e0!3m2!1sen!2s!4v1526491810707');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cmnd` int NOT NULL,
  `diachi` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sdt` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ghichu` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_cv` int NOT NULL,
  `Status`			INT  DEFAULT 0 , -- 0:Not Active, 1: Active
  `avatarUrl` varchar(600),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_cv`(`id_cv`) USING BTREE,
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_cv`) REFERENCES `chucvu` (`id_cv`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `user` VALUES (2	, 'Nguyễn thị ngân'			, 2059437335	, ' Quảng nam'		, 1226452598, 'lenguyenthanhtuyen97@gmail.com'	, 'note1'	, 'ngannguyen'	, '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'	, 1		,1 		,'' );
INSERT INTO `user` VALUES (9	, 'Lê nguyễn thanh tuyền'	, 205943664		, ' Quảng nam'		, 1226452598, 'lenguyenthanhtuyen97@gmail.com'	, 'note2'	, 'tthuyen'		, '$2y$10$4OPYhSdN/E8kYI8R9/XOLe2oGMLmJMZqfWRntc4L.BOMF0ktSG9My'	, 4		,1 		,'' );
INSERT INTO `user` VALUES (10	, 'Nguyễn Thị Ngân'			, 205943664		, ' Quảng nam'		, 1226452598, 'levantinh@gmail.com'				, 'note3'	, 'tuyen2'		, '$2y$10$67hudI0nqJpTQ9Ye90ZCX.lbkPuue3vX9Qtf5tZO0QNXeuXdHiP36'	, 1		,1 		,'' );
INSERT INTO `user` VALUES (12	, 'lê văn tịnh'				, 205943664		, ' quảng nam'		, 1226452598, 'lenguyenthanhtuyen97@gmail.com'	, 'note4'	, 'tinhle'		, '$2y$10$ucxVKawI1N3hinTnPIwx5eddDcw.uH8lIL4o2VZ1m4C4pZNRYz3q6'	, 5		,1 		,'' );
INSERT INTO `user` VALUES (14	, 'czx'						, 2059437335	, 'quảng nam'		, 1226452598, 'lenguyenthanhtuyen97@gmail.com'	, 'note5'	, 'tuyenlnt'	, '$2y$10$H3dpN1wBS0XfA8S1IYYprOhE8cAOpGPT04eMqW0XOnet0Qg6pEpHC'	, 4		,1 		,'' );
INSERT INTO `user` VALUES (15	, 'a'						, 2059437335	, 'đ'				, 1226452598, 'lenguyenthanhtuyen97@gmail.com'	, 'note6'	, 'a'			, '$2y$10$XIsjlIEUXNkovdPq0Zf9Wu6nOADYku8WT3DBl66p3Ba6UMd.mbiDm'	, 1		,1		,'' );
INSERT INTO `user` VALUES (16	, 'admin'					, 123456789		, 'VP'				, 1226452598, 'lenguyenthanhtuyen97@gmail.com'	, 'note7'	, 'adminn'		, '$2a$12$M4f5oWU.pwjw/IYLUpNilu7JMRl4AV7SEcUUCsDaX//ZNBE6vA4NO'	, 4		,1		,'' );

SET FOREIGN_KEY_CHECKS = 1;

-- Create table Registration_User_Token
DROP TABLE IF EXISTS 	`Token`;
CREATE TABLE IF NOT EXISTS `Token` ( 	
	id 				INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`token`	 		CHAR(36) NOT NULL UNIQUE,
	UserID     		INT NOT NULL,
	`expiryDate` 	DATETIME NOT NULL,
    `type`			Varchar(50),
    FOREIGN KEY (UserID) REFERENCES  `user`(`id`)
);

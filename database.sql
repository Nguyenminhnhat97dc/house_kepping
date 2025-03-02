﻿CREATE DATABASE webtruyen1;
CREATE TABLE `LoaiTruyen`(
	`IdLoaiTruyen` int not null AUTO_INCREMENT,
	`TenLoai` text COLLATE utf8_unicode_ci,
	PRIMARY KEY (`IdLoaiTruyen`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `LoaiTruyen` VALUES
(1, 'tiên hiệp'),(2, 'võng du'),(3,'huyền huyễn');

create table `Truyen`(
	`IdTruyen` int not null AUTO_INCREMENT ,
	`TenTruyen` text COLLATE utf8_unicode_ci,
	`IdLoaiTruyen` int not null,
	HinhAnh text,
	`TrangThai`text COLLATE utf8_unicode_ci,
	`GioiThieu` text COLLATE utf8_unicode_ci,
	`LuotXem` int,
	`NgayDang` datetime DEFAULT current_timestamp(),
	`TacGia` text COLLATE utf8_unicode_ci,
	PRIMARY KEY (`IdTruyen`),
	FOREIGN KEY (`IdLoaiTruyen`) REFERENCES `LoaiTruyen`(`IdLoaiTruyen`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `truyen` VALUES
(1,'Đại Chúa Tể','3','dai_chua_te.jpg','hoàn thành','GioiThieu',1,'2020-1-1','Thiên Tàm Thổ Đậu'),
(2,'Vô Địch Thật Tịch Mịch','1','vo_dich_that_tich_mich.jpg','hoàn thành','GioiThieu',2,'2020-1-1','Tân Phong'),
(3,'Đế Bá','3','de_ba.jpg','hoàn thành','GioiThieu',3,'2020-1-1','Yếm Bút Tiêu Sinh'),
(4,'Ta Hệ Chữa Trị Trò Chơi','2','ta_he_chua_tri_tro_choi.jpg','hoàn thành','GioiThieu',4,'2020-1-1','Ngã hội không điều chứ'),
(5,'Vạn Tộc Chi Kiếp','3','van_toc_chi_kiep.jpg','đang cập nhập','GioiThieu',5,'2020-1-1','lão ưng cật tiểu kê'),
(6,'Tôn Hầu Là Sư Đệ Ta','1','ton_hau_la_su_de_ta.jpg','đang cập nhập','GioiThieu',6,'2020-1-1','Đạt ma'),
(7,'Cho Mời Tiểu Sư Thúc','2','cho_moi_tieu_su_thuc.jpg','đang cập nhập','GioiThieu',7,'2020-1-1','Nhĩ Căn'),
(8,'Ta Muốn làm thiên đao','2','ta_muon_lam_thien_dao.jpg','đang cập nhập','GioiThieu',8,'2020-1-1','DD Lão Huynh'),
(9,'Toàn chức pháp sư','1','toan_chuc_phap_su.jpg','đang cập nhập','GioiThieu',9,'2020-1-1','Phan phan'),
(10,'Huyền Lục','3','huyen_luc.jpg','đang cập nhập','GioiThieu',10,'2020-1-1','vệ huyền hy'),
(11,'Vạn cổ thần đé','1','van_co_than_de.jpg','đang cập nhập','GioiThieu',11,'2020-1-1','Phi thiên ngư'),
(12,'Đế Chế đại việt','3','de_che_dai_viet.jpg','đang cập nhập','GioiThieu',12,'2020-1-1','Hàm ngư'),
(13,'gamer xưng bá dị giới','1','gamer_xung_ba_di_gioi.jpg','đang cập nhập','GioiThieu',13,'2020-1-1','gameer'),
(15,'đỉnh luyện thần ma','2','dinh_luyen_than_ma.jpg','đang cập nhập','GioiThieu',15,'2020-1-1','hắc tâm lão ma'),
(17,'vũ luyện điền phong','3','vu_luyen_dien_phong.jpg','đang cập nhập','GioiThieu',17,'2020-1-1','mạc mặc'),
(18,'Ta có thể vô hạn đổi hệ thống','3','ta_co_the_vo_han_doi_he_thong.jpg','đang cập nhập','GioiThieu',18,'2020-1-1','tử thủ'),
(19,'Vạn Cổ đệ nhất thần nhân','3','van_co_de_nhat_than_nhan.jpg','đang cập nhập','GioiThieu',19,'2020-1-1','Phong Thanh Duong'),
(20,'Thế giới duy nhất pháp sư','3','the_gioi_duy_nhat_phap_su.jpg','đang cập nhập','GioiThieu',20,'2020-1-1','diễm linh cơ'),
(21,'Phong thần ký','3','phong_than_ky.jpg','đang cập nhập','GioiThieu',21,'2020-1-1','tiêu thiên tứ'),
(22,'Tinh tế tu chân hằng ngày','1','tinh_te_tu_chan_hang_ngay.jpg','đang cập nhập','GioiThieu',22,'2021-2-27','Thí Kiếm Thiên Nhai'),
(23,'Chư thiên chi sát khí hào hùng','3','chu_thien_chi_sat_khi_hao_hung.jpg','đang cập nhập','GioiThieu',23,'2021-2-27','Cương trung canh hữu cường'),
(24,'Đây là tinh cầu của ta','3','day_la_tinh_cau_cua_ta.jpg','đang cập nhập','GioiThieu',24,'2021-2-27','cơ xoa'),
(25,'Tiên lục','3','tien_luc.jpg','đang cập nhập','GioiThieu',25,'2021-2-27','Bố cốc liêu'),
(26,'Yêu long cổ đế','2','yeu_long_co_de.jpg','đang cập nhập','GioiThieu',26,'2021-2-27','Tô Hàn'),
(27,'Tối Cường hệ thống đế hoàng','2','toi_cuong_he_thong_de_hoang.jpg','đang cập nhập','GioiThieu',27,'2021-2-27','Đinh hồng'),
(28,'Ta cao hơn trời','2','ta_cao_hon_troi.jpg','đang cập nhập','GioiThieu',28,'2021-2-27','Ngân sắc kỷ niệm tệ');
create table `BtvDeCu`(
	`IdTruyen` int ,
	`DiemBTVDeCu` int,
	FOREIGN KEY (`IdTruyen`) REFERENCES `truyen`(`IdTruyen`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `BtvDeCu` VALUES
(1,100),
(2,98),
(3,99),
(4,97),
(5,96),
(6,95),
(7,94);
create table`ChuongTruyen`(
	`IdTruyen` int not null ,
	`IdChuong` int not null,
	`TenChuong` text COLLATE utf8_unicode_ci,
	`NguoiDang` text COLLATE utf8_unicode_ci,
	`NgayDang` datetime DEFAULT current_timestamp(),
	`LuotXemChuong` int,
	`TenFoder` text,
	FOREIGN KEY (`IdTruyen`) REFERENCES `Truyen`(`IdTruyen`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `ChuongTruyen` VALUES
(1,1,'Bắc Linh Viện','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,2,'Thiếu Niên Bị Đuổi Khỏi Linh Lộ','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,3,'Mục Vực','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,4,'Đại Phù Đồ Quyết','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,5,'Đại Thiên Thế Giới','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,6,'Biên độ dao động linh lực','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,7,'Mộ Nguyên','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,8,'Liễu Dương','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,9,'Đối mặt','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,10,'Tỷ thí học viện','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,11,'Đàm Thanh Sơn','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,12,'Ra tay','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,13,'Chiến Liễu Dương','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,14,'Linh Động cảnh trung kỳ','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),
(1,15,'Phá Linh châu','LacMaiTrang',current_timestamp(),20,'Dai_Chua_Te'),

(2,1,'Ta Là Bất Tử','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,2,'Nghĩ Đến Đã Thấy Hý Hững','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,3,'Thật Là Không Có Tiền Đồ','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,4,'Mình Khác Gì Autohack','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,5,'Ta Chỉ Không Tin Mà Thôi','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,6,'Cảm nhiễm toàn trường','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,7,'Phân tích này một đợt liền ổn','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,8,'Chờ một chút, ta có chuyện muốn nói','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,9,'Các ngươi sát tính quá nặng đi','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,10,'Sư đệ, không cần','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,11,'Độ thiện cảm xoát không tệ','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,12,'Tự sáng tạo công pháp chỉ nam','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,13,'Ngủ ngươi tê liệt, đứng dậy nào','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,14,'Ta tuyên ngôn rất nhiều','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),
(2,15,'Nhất định phải điệu thấp','Ẩn Môn',current_timestamp(),10,'Vo_Dich_That_Tich_Mich'),

(7,1,'cho mời tiểu sư thúc','Đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,2,'Trời Giáng Tường Vân, thánh nhân đến thế gian','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,3,'Các Nguoi Diễn Xuất Thật Chuyên Nghiệp À','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,4,'Chúng Ta Bội Phục','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,5,'Ẩn Tiên Cư','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,6,'cho mời tiểu sư thúc','Đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,7,'Trời Giáng Tường Vân, thánh nhân đến thế gian','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,8,'Các Nguoi Diễn Xuất Thật Chuyên Nghiệp À','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,9,'Chúng Ta Bội Phục','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,10,'Ẩn Tiên Cư','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,11,'Trời Giáng Tường Vân, thánh nhân đến thế gian','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,12,'Các Nguoi Diễn Xuất Thật Chuyên Nghiệp À','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,13,'Chúng Ta Bội Phục','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),
(7,14,'Ẩn Tiên Cư','đại nhật',current_timestamp(),30,'Cho_Moi_Tieu_Su_Thuc'),

(3,1,'Tam Quỷ Gia','Cao Lãng',current_timestamp(),100,'De_Ba'),
(3,2,'Tam Quỷ Gia(2)','Hạo Hiên',current_timestamp(),100,'De_Ba'),
(3,3,'Tây Nhan Cổ Phái(1)','Gia Ý',current_timestamp(),100,'De_Ba'),
(3,4,'Tây Nhan Cổ Phái(2)','Anh Kiệt',current_timestamp(),100,'De_Ba'),
(3,5,'Vị Hôn Thê(1)','Thuần Nhã',current_timestamp(),100,'De_Ba'),
(3,6,'Vị hôn thê (hạ)','Cao Lãng',current_timestamp(),100,'De_Ba'),
(3,7,'Cửu Thánh Yêu Môn (thượng)','Hạo Hiên',current_timestamp(),100,'De_Ba'),
(3,8,' Cửu Thánh Yêu Môn (hạ)','Gia Ý',current_timestamp(),100,'De_Ba'),
(3,9,'Giết người không chớp mắt (thượng)','Anh Kiệt',current_timestamp(),100,'De_Ba'),
(3,10,'Giết người không chớp mắt (hạ)','Thuần Nhã',current_timestamp(),100,'De_Ba'),
(3,11,'Ta hung hăng càn quấy, ta ương ngạnh (thượng)','Cao Lãng',current_timestamp(),100,'De_Ba'),
(3,12,'Ta hung hăng càn quấy, ta ương ngạnh (hạ)','Hạo Hiên',current_timestamp(),100,'De_Ba'),
(3,13,' Loạn Tâm Lâm (thượng)','Gia Ý',current_timestamp(),100,'De_Ba'),
(3,14,'Loạn Tâm Lâm (hạ)','Anh Kiệt',current_timestamp(),100,'De_Ba'),
(3,15,'Kỳ tích xuất tay ta (thượng)','Thuần Nhã',current_timestamp(),100,'De_Ba'),

(6,1,'Sư phụ, ngươi muốn ôm cháu trai không','Cao Lãng',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,2,'Cái thế giới này nhân vật chính cũng là Hầu Tử','Hạo Hiên',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,3,'Tôn Ngộ Không mở cái thật không tốt đầu','Gia Ý',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,4,'Hồ bằng cẩu hữu đã thị cảm','Anh Kiệt',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,5,'Công ty của các ngươi vũ khí muốn tán tỉnh nữ minh tinh','Thuần Nhã',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,6,'Một đầu khác Hầu Tử ra tới đoạt trò vui','Cao Lãng',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,7,'Con khỉ này tại dùng di động','Hạo Hiên',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,8,'Xuống tới, nhường ba ba đánh chết ngươi','Gia Ý',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,9,'Ngươi hô cha ta sự tình cũng quên rồi sao','Anh Kiệt',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,10,'Ta là một đầu có hài hước cảm giác Hầu Tử','Thuần Nhã',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,11,'Nắm sủng vật dưỡng thành nhi tử','Cao Lãng',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,12,'Ngươi là nếm qua chim chim trái cây Hầu Tử, vẫn là ăn Hầu Tử trái cây chim?','Hạo Hiên',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,13,'Đông hải tối cường diễn viên quần chúng','Gia Ý',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,14,'Chúng ta đêm nay hành động là trắng trợn cướp đoạt dân nữ sao','Anh Kiệt',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),
(6,15,'Kiếm tiền phương pháp liền là trở thành hải tặc cùng với bắt lấy hải tặc','Thuần Nhã',current_timestamp(),100,'Ton_Hau_La_Su_De_Ta'),

(5,1,'Phụ Tử','Cao Lãng',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,2,'Tứ Đại Học Phủ','Hạo Hiên',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,3,'Sách Họa vạn tộc','Gia Ý',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,4,'phương pháp gia tốc khai nguyên cảnh','Anh Kiệt',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,5,'mộng cảnh','Thuần Nhã',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,6,'Thiết Dực điểu tái hiện','Cao Lãng',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,7,'quyển sách kỳ bí','Hạo Hiên',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,8,'thiên tài của đại hạ phủ(1)','Gia Ý',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,9,'thiên tài của đại hạ phủ(2)','Anh Kiệt',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,10,'thủ đoạn của van minh học phủ(1)','Thuần Nhã',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,11,'thủ đoạn của van minh học phủ(2)','Cao Lãng',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,12,'khai nguyên tứ trọng(1)','Hạo Hiên',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,13,'khai nguyên tứ trọng(2)','Gia Ý',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,14,'trước thềm gió êm sóng lăng','Anh Kiệt',current_timestamp(),100,'Van_Toc_Chi_Kiep'),
(5,15,'dẫn xà xuất động','Thuần Nhã',current_timestamp(),100,'Van_Toc_Chi_Kiep'),

(4,1,'chơi trò chơi sao? Chơi trước đó trước mổ sọ loại kia','Cao Lãng',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,2,'Hòa thuận quê nhà quan hệ','Hạo Hiên',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,3,'Đi ngủ!','Gia Ý',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,4,'Hướng phía không thể nói nói phương hướng phát triển','Anh Kiệt',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,5,'Ngươi quản cái này gọi nhàn nhã chữa trị trò chơi?','Thuần Nhã',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,6,'Xã sợ tốt, nhưng là người điên','Cao Lãng',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,7,'Lệ Tuyết','Hạo Hiên',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,8,'Hệ thống phán định người tốt','Gia Ý',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,9,'Hắn diễn liền giống như tự mình trải qua đồng dạng','Anh Kiệt',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,10,'Tủ lạnh','Thuần Nhã',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,11,'Đã đánh không lại, vậy liền gia nhập','Cao Lãng',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,12,'Trong hành lang người','Hạo Hiên',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,13,'Cái thứ hai nhiệm vụ xem tivi','Gia Ý',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,14,'Đẳng cấp hai','Anh Kiệt',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),
(4,15,'Là ai tại chữa trị ai?','Thuần Nhã',current_timestamp(),100,'Ta_He_Chua_Tri_Cho_Choi'),

(28,1,'Phu tử cứu mạng','Cao Lãng',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,2,'Quân tử tứ nghệ','Hạo Hiên',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,3,'Quan Phong Dị Văn Lục','Gia Ý',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,4,'Đáy nước trầm thi','Anh Kiệt',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,5,'Huyện tôn Bạch Hạo','Thuần Nhã',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,6,'Trong mộng gặp quỷ','Cao Lãng',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,7,'Một viên từ trên trời giáng xuống hoả tinh','Hạo Hiên',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,8,'Thiên Thần hạ phàm','Gia Ý',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,9,'Nghĩa dân mẫu mực','Anh Kiệt',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,10,'Đến một cái bảo bối tốt','Thuần Nhã',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,11,'Phẩm họa 3 quyển','Cao Lãng',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,12,'Ngao Ưng Đồ','Hạo Hiên',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,13,'Ngõ hẹp gặp nhau dũng giả thắng','Gia Ý',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,14,'Một mắt phá pháp','Anh Kiệt',current_timestamp(),100,'Ta_Cao_Hon_Troi'),
(28,15,'Truyền nhân y bát','Thuần Nhã',current_timestamp(),100,'Ta_Cao_Hon_Troi'),

(27,1,'ta tại dị giới điểm hồng bao','Cao Lãng',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,2,'Trực tiếp bật hack!','Hạo Hiên',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,3,'Giết! Giết! Giết!','Gia Ý',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,4,'Lãnh khốc vô tình!','Anh Kiệt',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,5,'Hoàng hậu nương nương giá lâm!','Thuần Nhã',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,6,'Ngươi là ta tiểu khả ái!','Cao Lãng',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,7,'Hoàng cung nước, rất sâu!','Hạo Hiên',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,8,'Hoàng tử cùng hoàng đế','Gia Ý',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,9,'Từ xưa vô tình đế vương gia!','Anh Kiệt',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,10,'Ba ba đánh mặt!','Thuần Nhã',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,11,'Đè lại nàng, Hạo gia ngắm cái chắc','Cao Lãng',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,12,'Đêm mưa dưới giết chóc!','Hạo Hiên',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,13,'Miếu hoang bên trong nữ quỷ?','Gia Ý',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,14,'Hai người cao thủ!','Anh Kiệt',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),
(27,15,'Không phải Hạo gia quá bạc đãng, chỉ vì hệ thống quá vô sỉ!','Thuần Nhã',current_timestamp(),100,'Toi_Cuong_He_Thong_De_Hoang'),

(26,1,'Bức hôn','Cao Lãng',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,2,'Ta nếu là không cưới đâu?','Hạo Hiên',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,3,'Mở long mạch!','Gia Ý',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,4,'Tiêu Vũ Tuệ','Anh Kiệt',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,5,'Một bạt tai!','Thuần Nhã',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,6,'Bức hôn','Cao Lãng',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,7,'Ta nếu là không cưới đâu?','Hạo Hiên',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,8,'Mở long mạch!','Gia Ý',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,9,'Tiêu Vũ Tuệ','Anh Kiệt',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,10,'Một bạt tai!','Thuần Nhã',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,11,'Bức hôn','Cao Lãng',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,12,'Ta nếu là không cưới đâu?','Hạo Hiên',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,13,'Mở long mạch!','Gia Ý',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,14,'Tiêu Vũ Tuệ','Anh Kiệt',current_timestamp(),100,'Yeu_Long_Co_De'),
(26,15,'Một bạt tai!','Thuần Nhã',current_timestamp(),100,'Yeu_Long_Co_De'),

(25,1,'Bạch cốt hoa đán','Cao Lãng',current_timestamp(),100,'Tien_Luc'),
(25,2,'Khô lâu Đạo Binh','Hạo Hiên',current_timestamp(),100,'Tien_Luc'),
(25,3,'Thải Sinh Cát Chiết','Gia Ý',current_timestamp(),100,'Tien_Luc'),
(25,4,'Phù lục hạt giống','Anh Kiệt',current_timestamp(),100,'Tien_Luc'),
(25,5,'Vô Tự Phù Lục','Thuần Nhã',current_timestamp(),100,'Tien_Luc'),
(25,6,'Bạch cốt hoa đán','Cao Lãng',current_timestamp(),100,'Tien_Luc'),
(25,7,'Khô lâu Đạo Binh','Hạo Hiên',current_timestamp(),100,'Tien_Luc'),
(25,8,'Thải Sinh Cát Chiết','Gia Ý',current_timestamp(),100,'Tien_Luc'),
(25,9,'Phù lục hạt giống','Anh Kiệt',current_timestamp(),100,'Tien_Luc'),
(25,10,'Vô Tự Phù Lục','Thuần Nhã',current_timestamp(),100,'Tien_Luc'),
(25,11,'Bạch cốt hoa đán','Cao Lãng',current_timestamp(),100,'Tien_Luc'),
(25,12,'Khô lâu Đạo Binh','Hạo Hiên',current_timestamp(),100,'Tien_Luc'),
(25,13,'Thải Sinh Cát Chiết','Gia Ý',current_timestamp(),100,'Tien_Luc'),
(25,14,'Phù lục hạt giống','Anh Kiệt',current_timestamp(),100,'Tien_Luc'),
(25,15,'Vô Tự Phù Lục','Thuần Nhã',current_timestamp(),100,'Tien_Luc'),

(24,1,'Bạch cốt hoa đán','Cao Lãng',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,2,'Khô lâu Đạo Binh','Hạo Hiên',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,3,'Thải Sinh Cát Chiết','Gia Ý',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,4,'Phù lục hạt giống','Anh Kiệt',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,5,'Vô Tự Phù Lục','Thuần Nhã',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,6,'Bạch cốt hoa đán','Cao Lãng',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,7,'Khô lâu Đạo Binh','Hạo Hiên',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,8,'Thải Sinh Cát Chiết','Gia Ý',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,9,'Phù lục hạt giống','Anh Kiệt',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,10,'Vô Tự Phù Lục','Thuần Nhã',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,11,'Bạch cốt hoa đán','Cao Lãng',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,12,'Khô lâu Đạo Binh','Hạo Hiên',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,13,'Thải Sinh Cát Chiết','Gia Ý',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,14,'Phù lục hạt giống','Anh Kiệt',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),
(24,15,'Vô Tự Phù Lục','Thuần Nhã',current_timestamp(),100,'Day_La_Tinh_Cau_Cua_Ta'),

(23,1,'Thần bí cổ môn','Cao Lãng',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,2,'Dương Liên Đình','Hạo Hiên',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,3,'Ta muốn luyện võ công','Gia Ý',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,4,'long Tượng Bàn Nhược Công','Anh Kiệt',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,5,'Hà tiểu thư tự vận','Thuần Nhã',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,6,'Thần bí cổ môn','Cao Lãng',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,7,'Dương Liên Đình','Hạo Hiên',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,8,'Ta muốn luyện võ công','Gia Ý',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,9,'long Tượng Bàn Nhược Công','Anh Kiệt',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,10,'Hà tiểu thư tự vận','Thuần Nhã',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,11,'Thần bí cổ môn','Cao Lãng',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,12,'Dương Liên Đình','Hạo Hiên',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,13,'Ta muốn luyện võ công','Gia Ý',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,14,'long Tượng Bàn Nhược Công','Anh Kiệt',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),
(23,15,'Hà tiểu thư tự vận','Thuần Nhã',current_timestamp(),100,'Chu_Thien_Chi_Sat_Khi_Hao_Hung'),

(22,1,'có thể chạm tay đến trường sinh','Cao Lãng',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,2,'Ngưng Khí cùng Linh Động','Hạo Hiên',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,3,'Nắm cỏ có thể, ăn cỏ phạm pháp','Gia Ý',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,4,'Võ ban! Nhất định phải võ ban!','Anh Kiệt',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,5,'Mê chi tự tin','Thuần Nhã',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,6,'có thể chạm tay đến trường sinh','Cao Lãng',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,7,'Ngưng Khí cùng Linh Động','Hạo Hiên',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,8,'Nắm cỏ có thể, ăn cỏ phạm pháp','Gia Ý',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,9,'Võ ban! Nhất định phải võ ban!','Anh Kiệt',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,10,'Mê chi tự tin','Thuần Nhã',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,11,'có thể chạm tay đến trường sinh','Cao Lãng',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,12,'Ngưng Khí cùng Linh Động','Hạo Hiên',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,13,'Nắm cỏ có thể, ăn cỏ phạm pháp','Gia Ý',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,14,'Võ ban! Nhất định phải võ ban!','Anh Kiệt',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),
(22,15,'Mê chi tự tin','Thuần Nhã',current_timestamp(),100,'Tinh_Te_Tu_Chan_Hang_Ngay'),

(21,1,'Kẻ hủy diệt','Cao Lãng',current_timestamp(),100,'Phong_Than_Ky'),
(21,2,'Ti Mệnh','Hạo Hiên',current_timestamp(),100,'Phong_Than_Ky'),
(21,3,'Kha thiên lạc','Gia Ý',current_timestamp(),100,'Phong_Than_Ky'),
(21,4,'A công','Anh Kiệt',current_timestamp(),100,'Phong_Than_Ky'),
(21,5,'đã lâu không gặp','Thuần Nhã',current_timestamp(),100,'Phong_Than_Ky'),
(21,6,'Kẻ hủy diệt','Cao Lãng',current_timestamp(),100,'Phong_Than_Ky'),
(21,7,'Ti Mệnh','Hạo Hiên',current_timestamp(),100,'Phong_Than_Ky'),
(21,8,'Kha thiên lạc','Gia Ý',current_timestamp(),100,'Phong_Than_Ky'),
(21,9,'A công','Anh Kiệt',current_timestamp(),100,'Phong_Than_Ky'),
(21,10,'đã lâu không gặp','Thuần Nhã',current_timestamp(),100,'Phong_Than_Ky'),
(21,11,'Kẻ hủy diệt','Cao Lãng',current_timestamp(),100,'Phong_Than_Ky'),
(21,12,'Ti Mệnh','Hạo Hiên',current_timestamp(),100,'Phong_Than_Ky'),
(21,13,'Kha thiên lạc','Gia Ý',current_timestamp(),100,'Phong_Than_Ky'),
(21,14,'A công','Anh Kiệt',current_timestamp(),100,'Phong_Than_Ky'),
(21,15,'đã lâu không gặp','Thuần Nhã',current_timestamp(),100,'Phong_Than_Ky'),

(20,1,'kịch bản không đúng','Cao Lãng',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,2,'Thiên Linh Đại Lục','Hạo Hiên',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,3,'mạc Gia Gia Chủ Mạc Tần Phong','Gia Ý',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,4,'Tình Thương Của Cha','Anh Kiệt',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,5,'Chờ Ngươi Đi Đến Đỉnh Phong, Tự Nhiên Sẽ Hiểu','Thuần Nhã',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,6,'kịch bản không đúng','Cao Lãng',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,7,'Thiên Linh Đại Lục','Hạo Hiên',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,8,'mạc Gia Gia Chủ Mạc Tần Phong','Gia Ý',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,9,'Tình Thương Của Cha','Anh Kiệt',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,10,'Chờ Ngươi Đi Đến Đỉnh Phong, Tự Nhiên Sẽ Hiểu','Thuần Nhã',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,11,'kịch bản không đúng','Cao Lãng',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,12,'Thiên Linh Đại Lục','Hạo Hiên',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,13,'mạc Gia Gia Chủ Mạc Tần Phong','Gia Ý',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,14,'Tình Thương Của Cha','Anh Kiệt',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),
(20,15,'Chờ Ngươi Đi Đến Đỉnh Phong, Tự Nhiên Sẽ Hiểu','Thuần Nhã',current_timestamp(),100,'The_Gioi_Duy_Nhat_Phap_Su'),

(19,1,'Thánh Thú Chiến Hồn','Cao Lãng',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,2,'Vĩnh Hằng Luyện Ngục Phượng Hoàng','Hạo Hiên',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,3,'1 phong thư bỏ vợ','Gia Ý',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,4,'Heo mẹ lên cây','Anh Kiệt',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,5,'Huyết mạch gông xiềng','Thuần Nhã',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,6,'Thánh Thú Chiến Hồn','Cao Lãng',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,7,'Vĩnh Hằng Luyện Ngục Phượng Hoàng','Hạo Hiên',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,8,'1 phong thư bỏ vợ','Gia Ý',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,9,'Heo mẹ lên cây','Anh Kiệt',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,10,'Huyết mạch gông xiềng','Thuần Nhã',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,11,'Thánh Thú Chiến Hồn','Cao Lãng',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,12,'Vĩnh Hằng Luyện Ngục Phượng Hoàng','Hạo Hiên',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,13,'1 phong thư bỏ vợ','Gia Ý',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,14,'Heo mẹ lên cây','Anh Kiệt',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan'),
(19,15,'Huyết mạch gông xiềng','Thuần Nhã',current_timestamp(),100,'Van_Co_De_Nhat_Than_Nhan');







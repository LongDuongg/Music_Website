-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 17, 2023 lúc 02:12 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `music`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
   `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `User`
--

INSERT INTO `User` (`id`, `username`, `password`,`email`) VALUES
(1,'binh', '12345','binh27@gmail.com'),
(2,'long', '12','long@gmail.com'),
(3, 'toan', '123','toan@gmail.com');



CREATE TABLE `Song` (
  `song_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `url` text DEFAULT NULL,
  `release_date` datetime DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Song`
--

INSERT INTO `musics` (`song_id`, `title`, `artist`,`url`, `release_date`,`genre`) VALUES
(4,'Loi nho', 'Den Vau',  'link', '2023-12-13 17:02:32','Rap'),
(5, 'Bạn đời', 'Karik', 'https://drive.google.com/file/d/13LIJZfSJHpR9l0kSvrtFANMjwi8j7cFQ/view?usp=sharing', '2023-12-14 18:19:26','Rap'),
(8, 'Hót hòn họt',  'Hương Giang', 'https://drive.google.com/file/d/1mi7qJRutU8UlQbgrM0aB0ojGrF7oKRbH/view?usp=drive_link', '2023-12-15 18:09:09','Pop'),
(9, 'I Need You', 'Prod. Alive Funk', 'https://drive.google.com/file/d/1YSQPhpFNzmdhh6Mmz-0ftSFg2obI38QF/view?usp=drive_link', '2023-12-15 18:10:02','Nhac nuoc ngoai'),
(10, 'All Night', 'Koolaidirty',  'https://drive.google.com/file/d/18WTUeX_BHCelCme1syHWWCe7k-aqnb6L/view?usp=drive_link', '2023-12-15 18:15:02','Nhac nuoc ngoai'),
(13, 'Nỗi đau ai thấu','Trương Khải Minh',  'https://drive.google.com/file/d/1Pb0bXc82JqUS5N45f2gjUcYE1Bweczdu/view?usp=drive_link', '2023-12-15 18:20:30','Pop'),
(14,  'Nấu ăn cho em', 'Đen Vâu', 'https://drive.google.com/file/d/1qBHvHMJU9dDC_Ll7lE15SkPKdaIQOLTN/view?usp=drive_link', '2023-12-16 11:48:07','Rap');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Playlist`
--

CREATE TABLE `Playlist` (
  `id` int(11) NOT NULL,
   `title` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Playlist`
--

INSERT INTO `Playlist` (`id`, `account_id`, `name`) VALUES
(8, 1, 'Nhạc hay'),
(10, 1, 'Nhạc của Đen'),
(11, 1, 'Nhạc Tết'),
(13, 1, 'Danh sách phát của bạn');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),


--
-- Chỉ mục cho bảng `Song`
--
ALTER TABLE `Song`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),


--
-- Chỉ mục cho bảng `Playlist`
--
ALTER TABLE `Playlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `musics`
--
ALTER TABLE `Song`
  ADD CONSTRAINT `Song_ibfk_1` FOREIGN KEY (`id`) REFERENCES `User` (`id`) ON DELETE CASCADE,

--
-- Các ràng buộc cho bảng `Playlist`
--
ALTER TABLE `Playlist`
  ADD CONSTRAINT `Playlist_ibfk_1` FOREIGN KEY (`id`) REFERENCES `User` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

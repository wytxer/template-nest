/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : nestjs

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '用户 id',
  `union_id` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '同微信的 unionid',
  `open_id` varchar(64) COLLATE utf8mb4_general_ci NOT NULL COMMENT '微信小程序的 openid',
  `nickname` varchar(16) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '匿名用户' COMMENT '用户昵称',
  `avatar_url` varchar(64) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'https://static.bszhct.com/common/default-avatar.jpg' COMMENT '用户头像访问地址',
  `phone` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '电话号码',
  `gender` varchar(64) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'UNKNOWN' COMMENT '性别枚举，UNKNOWN：未知，MALE：男，FEMALE：女',
  `client_source` varchar(64) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'WECHAT_APP' COMMENT '客户端来源，WECHAT_APP：微信小程序',
  `logged_at` datetime DEFAULT NULL COMMENT '最后登录时间',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

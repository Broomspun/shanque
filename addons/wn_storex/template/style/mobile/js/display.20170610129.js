webpackJsonp([1, 4], [, , , function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e) {
		var t, a, n, i, l, u, s, o = "";
		for (t in e) if (a = e[t], a instanceof Array) for (s = 0; s < a.length; ++s) l = a[s], n = t + "[" + s + "]", u = {}, u[n] = l, o += r(u) + "&";
		else if (a instanceof Object) for (i in a) l = a[i], n = t + "[" + i + "]", u = {}, u[n] = l, o += r(u) + "&";
		else void 0 !== a && null !== a && (o += encodeURIComponent(t) + "=" + encodeURIComponent(a) + "&");
		return o.length ? o.substr(0, o.length - 1) : o
	}
	function i(e, t) {
		t || (t = "wn_storex");
		var a = "index.php?i=" + o.
	default.parse().i + "&c=" + o.
	default.parse().c + "&m=" + t + "&";
		return e && (e = e.split("/"), e[0] && (a += "c=" + e[0] + "&"), e[1] && (a += "a=" + e[1] + "&"), e[2] && (a += "do=" + e[2] + "&"), e[3] && (a += "op=" + e[3] + "&")), a
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.roomService = t.wifiInfo = t.hotelInfo = t.clerkRoomEdit = t.clerkRoomInfo = t.clerkRoom = t.clerkOrderEdit = t.clerkOrderInfo = t.clerkOrder = t.clerkPermission = t.creditMineConfirm = t.creditGoodsMine = t.creditGoodsExchange = t.creditGoodsDetail = t.creditCouponDetail = t.creditCouponList = t.creditGoodsList = t.wxOpenCard = t.wxAddCard = t.couponInfo = t.myCoupon = t.couponExchange = t.couponList = t.receiveInfo = t.receiveCard = t.noticeRead = t.noticeList = t.extend = t.signRecord = t.remedySign = t.signSing = t.signInfo = t.rechargePay = t.rechargeAdd = t.cardRecharge = t.orderConfirm = t.orderCancel = t.orderComment = t.orderInfo = t.orderList = t.userCredits = t.editAddress = t.addressInfo = t.defaultAddress = t.deleteAddress = t.addressLists = t.updateUserInfo = t.getUserInfo = t.orderPay = t.goodsOrder = t.goodsBuyInfo = t.goodsInfo = t.moreGoods = t.categorySub = t.categoryClass = t.storeComment = t.storeDetail = t.storeList = t.wnAjax = void 0;
	var l = a(40),
		u = n(l),
		s = a(25),
		o = n(s);
	u.
default.$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8", u.
default.$http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", u.
default.$http.defaults.transformRequest = [function(e) {
		return r(e)
	}];
	var c = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "get",
				t = arguments[1],
				a = arguments[2],
				n = arguments[3];
			t.indexOf("http://") === -1 && t.indexOf("https://") === -1 && (t = i(t, n));
			var r = {};
			r.method = e, r.url = t, "get" === r.method ? r.params = a.data : r.data = a.data, u.
		default.$http(r).then(function(e) {
				e = e.data.message, a.complete && "function" == typeof a.complete && a.complete(e.message), e.errno || 0 === e.errno ? 0 !== e.errno ? a.error && "function" == typeof a.error && a.error(e.message) : a.success && "function" == typeof a.success && a.success(e.message) : a.error("未知错误")
			}).
			catch (function(e) {
				a.complete && "function" == typeof a.complete && a.complete(response.message), a.error && "function" == typeof a.error && a.error(e)
			})
		},
		p = function(e) {
			return c("post", "//store/store_list", e)
		},
		m = function(e) {
			return c("post", "//store/store_detail", e)
		},
		v = function(e) {
			return c("get", "//store/store_comment", e)
		},
		d = function(e) {
			return c("get", "//category/class", e)
		},
		f = function(e) {
			return c("get", "//category/sub_class", e)
		},
		h = function(e) {
			return c("get", "//category/more_goods", e)
		},
		_ = function(e) {
			return c("get", "//goods/goods_info", e)
		},
		g = function(e) {
			return c("get", "//goods/info", e)
		},
		x = function(e) {
			return c("post", "//goods/order", e)
		},
		w = function(e) {
			return c("get", "//orders/orderpay", e)
		},
		b = function(e) {
			return c("get", "//orders/order_list", e)
		},
		y = function(e) {
			return c("get", "//orders/order_detail", e)
		},
		C = function(e) {
			return c("post", "//orders/order_comment", e)
		},
		k = function(e) {
			return c("get", "//orders/cancel", e)
		},
		S = function(e) {
			return c("get", "//orders/confirm_goods", e)
		},
		M = function(e) {
			return c("get", "//usercenter/personal_info", e)
		},
		I = function(e) {
			return c("post", "//usercenter/personal_update", e)
		},
		$ = function(e) {
			return c("get", "//usercenter/credits_record", e)
		},
		A = function(e) {
			return c("get", "//recharge/card_recharge", e)
		},
		O = function(e) {
			return c("post", "//recharge/recharge_add", e)
		},
		V = function(e) {
			return c("post", "//recharge/recharge_pay", e)
		},
		T = function(e) {
			return c("get", "//usercenter/address_lists", e)
		},
		R = function(e) {
			return c("get", "//usercenter/address_delete", e)
		},
		P = function(e) {
			return c("post", "//usercenter/address_default", e)
		},
		N = function(e) {
			return c("get", "//usercenter/current_address", e)
		},
		L = function(e) {
			return c("post", "//usercenter/address_post", e)
		},
		D = function(e) {
			return c("get", "//sign/sign_info", e)
		},
		E = function(e) {
			return c("get", "//sign/sign", e)
		},
		B = function(e) {
			return c("get", "//sign/remedy_sign", e)
		},
		F = function(e) {
			return c("get", "//sign/sign_record", e)
		},
		j = function(e) {
			return c("get", "//usercenter/extend_switch", e)
		},
		H = function(e) {
			return c("get", "//notice/notice_list", e)
		},
		z = function(e) {
			return c("get", "//notice/read_notice", e)
		},
		Y = function(e) {
			return c("get", "//membercard/receive_info", e)
		},
		W = function(e) {
			return c("post", "//membercard/receive_card", e)
		},
		G = function(e) {
			return c("get", "//coupon/display", e, "wn_storex_plugin_credit_mall")
		},
		X = function(e) {
			return c("get", "//coupon/exchange", e, "wn_storex_plugin_credit_mall")
		},
		U = function(e) {
			return c("get", "//coupon/mine", e)
		},
		q = function(e) {
			return c("post", "//coupon/detail", e)
		},
		Z = function(e) {
			return c("post", "//coupon/addcard", e)
		},
		J = function(e) {
			return c("post", "//coupon/opencard", e)
		},
		Q = function(e) {
			return c("post", "//goods/display", e, "wn_storex_plugin_credit_mall")
		},
		K = function(e) {
			return c("post", "//goods/detail", e, "wn_storex_plugin_credit_mall")
		},
		ee = function(e) {
			return c("post", "//goods/exchange", e, "wn_storex_plugin_credit_mall")
		},
		te = function(e) {
			return c("post", "//goods/mine", e, "wn_storex_plugin_credit_mall")
		},
		ae = function(e) {
			return c("post", "//goods/confirm", e, "wn_storex_plugin_credit_mall")
		},
		ne = function(e) {
			return c("post", "//coupon/display", e, "wn_storex_plugin_credit_mall")
		},
		re = function(e) {
			return c("post", "//coupon/detail", e, "wn_storex_plugin_credit_mall")
		},
		ie = function(e) {
			return c("get", "//clerk/permission_storex", e)
		},
		le = function(e) {
			return c("get", "//clerk/order", e)
		},
		ue = function(e) {
			return c("get", "//clerk/order_info", e)
		},
		se = function(e) {
			return c("get", "//clerk/edit_order", e)
		},
		oe = function(e) {
			return c("get", "//clerk/room", e)
		},
		ce = function(e) {
			return c("get", "//clerk/room_info", e)
		},
		pe = function(e) {
			return c("post", "//clerk/edit_room", e)
		},
		me = function(e) {
			return c("post", "//hotelservice/hotel_info", e, "wn_storex_plugin_hotel_service")
		},
		ve = function(e) {
			return c("post", "//hotelservice/wifi_info", e, "wn_storex_plugin_hotel_service")
		},
		de = function(e) {
			return c("post", "//hotelservice/room_service", e, "wn_storex_plugin_hotel_service")
		};
	t.wnAjax = c, t.storeList = p, t.storeDetail = m, t.storeComment = v, t.categoryClass = d, t.categorySub = f, t.moreGoods = h, t.goodsInfo = _, t.goodsBuyInfo = g, t.goodsOrder = x, t.orderPay = w, t.getUserInfo = M, t.updateUserInfo = I, t.addressLists = T, t.deleteAddress = R, t.defaultAddress = P, t.addressInfo = N, t.editAddress = L, t.userCredits = $, t.orderList = b, t.orderInfo = y, t.orderComment = C, t.orderCancel = k, t.orderConfirm = S, t.cardRecharge = A, t.rechargeAdd = O, t.rechargePay = V, t.signInfo = D, t.signSing = E, t.remedySign = B, t.signRecord = F, t.extend = j, t.noticeList = H, t.noticeRead = z, t.receiveCard = W, t.receiveInfo = Y, t.couponList = G, t.couponExchange = X, t.myCoupon = U, t.couponInfo = q, t.wxAddCard = Z, t.wxOpenCard = J, t.creditGoodsList = Q, t.creditCouponList = ne, t.creditCouponDetail = re, t.creditGoodsDetail = K, t.creditGoodsExchange = ee, t.creditGoodsMine = te, t.creditMineConfirm = ae, t.clerkPermission = ie, t.clerkOrder = le, t.clerkOrderInfo = ue, t.clerkOrderEdit = se, t.clerkRoom = oe, t.clerkRoomInfo = ce, t.clerkRoomEdit = pe, t.hotelInfo = me, t.wifiInfo = ve, t.roomService = de
}, function(e, t, a) {
	a(119);
	var n = a(0)(a(85), a(142), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(112);
	var n = a(0)(a(82), a(135), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(110);
	var n = a(0)(a(93), a(133), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(102);
	var n = a(0)(a(89), a(125), null, null);
	e.exports = n.exports
}, , , function(e, t, a) {
	var n = a(0)(a(172), a(365), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(259);
	var n = a(0)(a(173), a(311), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(107);
	var n = a(0)(null, a(130), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(109);
	var n = a(0)(null, a(132), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(113);
	var n = a(0)(a(95), a(136), null, null);
	e.exports = n.exports
}, , function(e, t, a) {
	a(263);
	var n = a(0)(a(181), a(317), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(268);
	var n = a(0)(a(184), a(325), null, null);
	e.exports = n.exports
}, , , , , , , , , function(e, t, a) {
	a(108);
	var n = a(0)(a(90), a(131), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(115);
	var n = a(0)(a(94), a(138), null, null);
	e.exports = n.exports
}, , , function(e, t, a) {
	a(101);
	var n = a(0)(a(86), a(124), null, null);
	e.exports = n.exports
}, , function(e, t, a) {
	a(103);
	var n = a(0)(a(80), a(126), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(105);
	var n = a(0)(a(84), a(128), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(292);
	var n = a(0)(a(178), a(359), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(285);
	var n = a(0)(a(180), a(350), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(189), a(336), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(276);
	var n = a(0)(a(190), a(339), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(194), a(310), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(266);
	var n = a(0)(a(195), a(320), null, null);
	e.exports = n.exports
}, , , , , , , , function(e, t, a) {
	a(118);
	var n = a(0)(a(96), a(141), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(9),
		i = n(r),
		l = a(42),
		u = n(l),
		s = a(2),
		o = n(s),
		c = a(25),
		p = n(c);
	a(41).polyfill(), u.
default.use(o.
default);
	var m = {
		state: {
			isLoading: !1,
			tabbar: !0
		},
		mutations: {
			updateLoadingStatus: function(e, t) {
				e.isLoading = t.isLoading
			},
			setVersion: function(e, t) {
				e.version = t.version
			},
			hasTabbar: function(e, t) {
				e.tabbar = t.tabbar
			}
		}
	},
		v = {
			state: {
				url: "index.php?i=" + p.
			default.parse().i + "&c=" + p.
			default.parse().c + "&m=wn_storex&",
				payurl:
				"index.php?i=" + p.
			default.parse().i + "&c=mc&a=cash&",
				profile:
				"index.php?i=" + p.
			default.parse().i + "&c=utility&a=file&do=upload&type=image&thumb=0",
				rechargeurl:
				"/#/Home/Recharge",
				displayurl: "index.php?i=" + p.
			default.parse().i + "&c=" + p.
			default.parse().c + "&m=wn_storex&do=display",
				switchurl:
				"index.php?i=" + p.
			default.parse().i + "&c=" + p.
			default.parse().c + "&m=wn_storex&do=display",
				userInfo:
				"string" == typeof sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")) : {},
				storeInfo: "string" == typeof sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("storeInfo")) : {},
				extend: {},
				error: ""
			},
			mutations: {
				setUserInfo: function(e, t) {
					sessionStorage.setItem("userInfo", (0, i.
				default)(t)), e.userInfo = t
				},
				setStoreInfo: function(e, t) {
					sessionStorage.setItem("storeInfo", (0, i.
				default)(t)), e.storeInfo = t
				},
				setExtend: function(e, t) {
					e.extend = t, e.extend.notice_unread_num = t.notice_unread_num > 0 ? t.notice_unread_num.toString() : ""
				},
				haveError: function(e, t) {
					e.error = t
				}
			}
		};
	t.
default = new o.
default.Store({
		modules: {
			vux: m,
			storex: v
		}
	})
}, , , , , , , function(e, t, a) {
	a(104);
	var n = a(0)(a(81), a(127), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(255);
	var n = a(0)(a(169), a(305), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(294);
	var n = a(0)(a(170), a(364), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(279);
	var n = a(0)(a(175), a(343), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(106);
	var n = a(0)(a(88), a(129), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(187), a(337), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(289);
	var n = a(0)(a(188), a(356), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(117);
	var n = a(0)(a(91), a(140), null, null);
	e.exports = n.exports
}, function(e, t) {
	e.exports = [{
		name: "北京市",
		value: "110000"
	}, {
		name: "天津市",
		value: "120000"
	}, {
		name: "河北省",
		value: "130000"
	}, {
		name: "山西省",
		value: "140000"
	}, {
		name: "内蒙古自治区",
		value: "150000"
	}, {
		name: "辽宁省",
		value: "210000"
	}, {
		name: "吉林省",
		value: "220000"
	}, {
		name: "黑龙江省",
		value: "230000"
	}, {
		name: "上海市",
		value: "310000"
	}, {
		name: "江苏省",
		value: "320000"
	}, {
		name: "浙江省",
		value: "330000"
	}, {
		name: "安徽省",
		value: "340000"
	}, {
		name: "福建省",
		value: "350000"
	}, {
		name: "江西省",
		value: "360000"
	}, {
		name: "山东省",
		value: "370000"
	}, {
		name: "河南省",
		value: "410000"
	}, {
		name: "湖北省",
		value: "420000"
	}, {
		name: "湖南省",
		value: "430000"
	}, {
		name: "广东省",
		value: "440000"
	}, {
		name: "广西壮族自治区",
		value: "450000"
	}, {
		name: "海南省",
		value: "460000"
	}, {
		name: "重庆市",
		value: "500000"
	}, {
		name: "四川省",
		value: "510000"
	}, {
		name: "贵州省",
		value: "520000"
	}, {
		name: "云南省",
		value: "530000"
	}, {
		name: "西藏自治区",
		value: "540000"
	}, {
		name: "陕西省",
		value: "610000"
	}, {
		name: "甘肃省",
		value: "620000"
	}, {
		name: "青海省",
		value: "630000"
	}, {
		name: "宁夏回族自治区",
		value: "640000"
	}, {
		name: "新疆维吾尔自治区",
		value: "650000"
	}, {
		name: "市辖区",
		value: "110100",
		parent: "110000"
	}, {
		name: "东城区",
		value: "110101",
		parent: "110100"
	}, {
		name: "西城区",
		value: "110102",
		parent: "110100"
	}, {
		name: "朝阳区",
		value: "110105",
		parent: "110100"
	}, {
		name: "丰台区",
		value: "110106",
		parent: "110100"
	}, {
		name: "石景山区",
		value: "110107",
		parent: "110100"
	}, {
		name: "海淀区",
		value: "110108",
		parent: "110100"
	}, {
		name: "门头沟区",
		value: "110109",
		parent: "110100"
	}, {
		name: "房山区",
		value: "110111",
		parent: "110100"
	}, {
		name: "通州区",
		value: "110112",
		parent: "110100"
	}, {
		name: "顺义区",
		value: "110113",
		parent: "110100"
	}, {
		name: "昌平区",
		value: "110114",
		parent: "110100"
	}, {
		name: "大兴区",
		value: "110115",
		parent: "110100"
	}, {
		name: "怀柔区",
		value: "110116",
		parent: "110100"
	}, {
		name: "平谷区",
		value: "110117",
		parent: "110100"
	}, {
		name: "密云县",
		value: "110228",
		parent: "110100"
	}, {
		name: "延庆县",
		value: "110229",
		parent: "110100"
	}, {
		name: "市辖区",
		value: "120100",
		parent: "120000"
	}, {
		name: "和平区",
		value: "120101",
		parent: "120100"
	}, {
		name: "河东区",
		value: "120102",
		parent: "120100"
	}, {
		name: "河西区",
		value: "120103",
		parent: "120100"
	}, {
		name: "南开区",
		value: "120104",
		parent: "120100"
	}, {
		name: "河北区",
		value: "120105",
		parent: "120100"
	}, {
		name: "红桥区",
		value: "120106",
		parent: "120100"
	}, {
		name: "东丽区",
		value: "120110",
		parent: "120100"
	}, {
		name: "西青区",
		value: "120111",
		parent: "120100"
	}, {
		name: "津南区",
		value: "120112",
		parent: "120100"
	}, {
		name: "北辰区",
		value: "120113",
		parent: "120100"
	}, {
		name: "武清区",
		value: "120114",
		parent: "120100"
	}, {
		name: "宝坻区",
		value: "120115",
		parent: "120100"
	}, {
		name: "滨海新区",
		value: "120116",
		parent: "120100"
	}, {
		name: "宁河区",
		value: "120117",
		parent: "120100"
	}, {
		name: "静海区",
		value: "120118",
		parent: "120100"
	}, {
		name: "蓟县",
		value: "120225",
		parent: "120100"
	}, {
		name: "石家庄市",
		value: "130100",
		parent: "130000"
	}, {
		name: "唐山市",
		value: "130200",
		parent: "130000"
	}, {
		name: "秦皇岛市",
		value: "130300",
		parent: "130000"
	}, {
		name: "邯郸市",
		value: "130400",
		parent: "130000"
	}, {
		name: "邢台市",
		value: "130500",
		parent: "130000"
	}, {
		name: "保定市",
		value: "130600",
		parent: "130000"
	}, {
		name: "张家口市",
		value: "130700",
		parent: "130000"
	}, {
		name: "承德市",
		value: "130800",
		parent: "130000"
	}, {
		name: "沧州市",
		value: "130900",
		parent: "130000"
	}, {
		name: "廊坊市",
		value: "131000",
		parent: "130000"
	}, {
		name: "衡水市",
		value: "131100",
		parent: "130000"
	}, {
		name: "定州市",
		value: "139001",
		parent: "130000"
	}, {
		name: "辛集市",
		value: "139002",
		parent: "130000"
	}, {
		name: "长安区",
		value: "130102",
		parent: "130100"
	}, {
		name: "桥西区",
		value: "130104",
		parent: "130100"
	}, {
		name: "新华区",
		value: "130105",
		parent: "130100"
	}, {
		name: "井陉矿区",
		value: "130107",
		parent: "130100"
	}, {
		name: "裕华区",
		value: "130108",
		parent: "130100"
	}, {
		name: "藁城区",
		value: "130109",
		parent: "130100"
	}, {
		name: "鹿泉区",
		value: "130110",
		parent: "130100"
	}, {
		name: "栾城区",
		value: "130111",
		parent: "130100"
	}, {
		name: "井陉县",
		value: "130121",
		parent: "130100"
	}, {
		name: "正定县",
		value: "130123",
		parent: "130100"
	}, {
		name: "行唐县",
		value: "130125",
		parent: "130100"
	}, {
		name: "灵寿县",
		value: "130126",
		parent: "130100"
	}, {
		name: "高邑县",
		value: "130127",
		parent: "130100"
	}, {
		name: "深泽县",
		value: "130128",
		parent: "130100"
	}, {
		name: "赞皇县",
		value: "130129",
		parent: "130100"
	}, {
		name: "无极县",
		value: "130130",
		parent: "130100"
	}, {
		name: "平山县",
		value: "130131",
		parent: "130100"
	}, {
		name: "元氏县",
		value: "130132",
		parent: "130100"
	}, {
		name: "赵县",
		value: "130133",
		parent: "130100"
	}, {
		name: "晋州市",
		value: "130183",
		parent: "130100"
	}, {
		name: "新乐市",
		value: "130184",
		parent: "130100"
	}, {
		name: "路南区",
		value: "130202",
		parent: "130200"
	}, {
		name: "路北区",
		value: "130203",
		parent: "130200"
	}, {
		name: "古冶区",
		value: "130204",
		parent: "130200"
	}, {
		name: "开平区",
		value: "130205",
		parent: "130200"
	}, {
		name: "丰南区",
		value: "130207",
		parent: "130200"
	}, {
		name: "丰润区",
		value: "130208",
		parent: "130200"
	}, {
		name: "曹妃甸区",
		value: "130209",
		parent: "130200"
	}, {
		name: "滦县",
		value: "130223",
		parent: "130200"
	}, {
		name: "滦南县",
		value: "130224",
		parent: "130200"
	}, {
		name: "乐亭县",
		value: "130225",
		parent: "130200"
	}, {
		name: "迁西县",
		value: "130227",
		parent: "130200"
	}, {
		name: "玉田县",
		value: "130229",
		parent: "130200"
	}, {
		name: "遵化市",
		value: "130281",
		parent: "130200"
	}, {
		name: "迁安市",
		value: "130283",
		parent: "130200"
	}, {
		name: "海港区",
		value: "130302",
		parent: "130300"
	}, {
		name: "山海关区",
		value: "130303",
		parent: "130300"
	}, {
		name: "北戴河区",
		value: "130304",
		parent: "130300"
	}, {
		name: "抚宁区",
		value: "130306",
		parent: "130300"
	}, {
		name: "青龙满族自治县",
		value: "130321",
		parent: "130300"
	}, {
		name: "昌黎县",
		value: "130322",
		parent: "130300"
	}, {
		name: "卢龙县",
		value: "130324",
		parent: "130300"
	}, {
		name: "邯山区",
		value: "130402",
		parent: "130400"
	}, {
		name: "丛台区",
		value: "130403",
		parent: "130400"
	}, {
		name: "复兴区",
		value: "130404",
		parent: "130400"
	}, {
		name: "峰峰矿区",
		value: "130406",
		parent: "130400"
	}, {
		name: "邯郸县",
		value: "130421",
		parent: "130400"
	}, {
		name: "临漳县",
		value: "130423",
		parent: "130400"
	}, {
		name: "成安县",
		value: "130424",
		parent: "130400"
	}, {
		name: "大名县",
		value: "130425",
		parent: "130400"
	}, {
		name: "涉县",
		value: "130426",
		parent: "130400"
	}, {
		name: "磁县",
		value: "130427",
		parent: "130400"
	}, {
		name: "肥乡县",
		value: "130428",
		parent: "130400"
	}, {
		name: "永年县",
		value: "130429",
		parent: "130400"
	}, {
		name: "邱县",
		value: "130430",
		parent: "130400"
	}, {
		name: "鸡泽县",
		value: "130431",
		parent: "130400"
	}, {
		name: "广平县",
		value: "130432",
		parent: "130400"
	}, {
		name: "馆陶县",
		value: "130433",
		parent: "130400"
	}, {
		name: "魏县",
		value: "130434",
		parent: "130400"
	}, {
		name: "曲周县",
		value: "130435",
		parent: "130400"
	}, {
		name: "武安市",
		value: "130481",
		parent: "130400"
	}, {
		name: "桥东区",
		value: "130502",
		parent: "130500"
	}, {
		name: "桥西区",
		value: "130503",
		parent: "130500"
	}, {
		name: "邢台县",
		value: "130521",
		parent: "130500"
	}, {
		name: "临城县",
		value: "130522",
		parent: "130500"
	}, {
		name: "内丘县",
		value: "130523",
		parent: "130500"
	}, {
		name: "柏乡县",
		value: "130524",
		parent: "130500"
	}, {
		name: "隆尧县",
		value: "130525",
		parent: "130500"
	}, {
		name: "任县",
		value: "130526",
		parent: "130500"
	}, {
		name: "南和县",
		value: "130527",
		parent: "130500"
	}, {
		name: "宁晋县",
		value: "130528",
		parent: "130500"
	}, {
		name: "巨鹿县",
		value: "130529",
		parent: "130500"
	}, {
		name: "新河县",
		value: "130530",
		parent: "130500"
	}, {
		name: "广宗县",
		value: "130531",
		parent: "130500"
	}, {
		name: "平乡县",
		value: "130532",
		parent: "130500"
	}, {
		name: "威县",
		value: "130533",
		parent: "130500"
	}, {
		name: "清河县",
		value: "130534",
		parent: "130500"
	}, {
		name: "临西县",
		value: "130535",
		parent: "130500"
	}, {
		name: "南宫市",
		value: "130581",
		parent: "130500"
	}, {
		name: "沙河市",
		value: "130582",
		parent: "130500"
	}, {
		name: "竞秀区",
		value: "130602",
		parent: "130600"
	}, {
		name: "莲池区",
		value: "130606",
		parent: "130600"
	}, {
		name: "满城区",
		value: "130607",
		parent: "130600"
	}, {
		name: "清苑区",
		value: "130608",
		parent: "130600"
	}, {
		name: "徐水区",
		value: "130609",
		parent: "130600"
	}, {
		name: "涞水县",
		value: "130623",
		parent: "130600"
	}, {
		name: "阜平县",
		value: "130624",
		parent: "130600"
	}, {
		name: "定兴县",
		value: "130626",
		parent: "130600"
	}, {
		name: "唐县",
		value: "130627",
		parent: "130600"
	}, {
		name: "高阳县",
		value: "130628",
		parent: "130600"
	}, {
		name: "容城县",
		value: "130629",
		parent: "130600"
	}, {
		name: "涞源县",
		value: "130630",
		parent: "130600"
	}, {
		name: "望都县",
		value: "130631",
		parent: "130600"
	}, {
		name: "安新县",
		value: "130632",
		parent: "130600"
	}, {
		name: "易县",
		value: "130633",
		parent: "130600"
	}, {
		name: "曲阳县",
		value: "130634",
		parent: "130600"
	}, {
		name: "蠡县",
		value: "130635",
		parent: "130600"
	}, {
		name: "顺平县",
		value: "130636",
		parent: "130600"
	}, {
		name: "博野县",
		value: "130637",
		parent: "130600"
	}, {
		name: "雄县",
		value: "130638",
		parent: "130600"
	}, {
		name: "涿州市",
		value: "130681",
		parent: "130600"
	}, {
		name: "安国市",
		value: "130683",
		parent: "130600"
	}, {
		name: "高碑店市",
		value: "130684",
		parent: "130600"
	}, {
		name: "桥东区",
		value: "130702",
		parent: "130700"
	}, {
		name: "桥西区",
		value: "130703",
		parent: "130700"
	}, {
		name: "宣化区",
		value: "130705",
		parent: "130700"
	}, {
		name: "下花园区",
		value: "130706",
		parent: "130700"
	}, {
		name: "宣化县",
		value: "130721",
		parent: "130700"
	}, {
		name: "张北县",
		value: "130722",
		parent: "130700"
	}, {
		name: "康保县",
		value: "130723",
		parent: "130700"
	}, {
		name: "沽源县",
		value: "130724",
		parent: "130700"
	}, {
		name: "尚义县",
		value: "130725",
		parent: "130700"
	}, {
		name: "蔚县",
		value: "130726",
		parent: "130700"
	}, {
		name: "阳原县",
		value: "130727",
		parent: "130700"
	}, {
		name: "怀安县",
		value: "130728",
		parent: "130700"
	}, {
		name: "万全县",
		value: "130729",
		parent: "130700"
	}, {
		name: "怀来县",
		value: "130730",
		parent: "130700"
	}, {
		name: "涿鹿县",
		value: "130731",
		parent: "130700"
	}, {
		name: "赤城县",
		value: "130732",
		parent: "130700"
	}, {
		name: "崇礼县",
		value: "130733",
		parent: "130700"
	}, {
		name: "双桥区",
		value: "130802",
		parent: "130800"
	}, {
		name: "双滦区",
		value: "130803",
		parent: "130800"
	}, {
		name: "鹰手营子矿区",
		value: "130804",
		parent: "130800"
	}, {
		name: "承德县",
		value: "130821",
		parent: "130800"
	}, {
		name: "兴隆县",
		value: "130822",
		parent: "130800"
	}, {
		name: "平泉县",
		value: "130823",
		parent: "130800"
	}, {
		name: "滦平县",
		value: "130824",
		parent: "130800"
	}, {
		name: "隆化县",
		value: "130825",
		parent: "130800"
	}, {
		name: "丰宁满族自治县",
		value: "130826",
		parent: "130800"
	}, {
		name: "宽城满族自治县",
		value: "130827",
		parent: "130800"
	}, {
		name: "围场满族蒙古族自治县",
		value: "130828",
		parent: "130800"
	}, {
		name: "新华区",
		value: "130902",
		parent: "130900"
	}, {
		name: "运河区",
		value: "130903",
		parent: "130900"
	}, {
		name: "沧县",
		value: "130921",
		parent: "130900"
	}, {
		name: "青县",
		value: "130922",
		parent: "130900"
	}, {
		name: "东光县",
		value: "130923",
		parent: "130900"
	}, {
		name: "海兴县",
		value: "130924",
		parent: "130900"
	}, {
		name: "盐山县",
		value: "130925",
		parent: "130900"
	}, {
		name: "肃宁县",
		value: "130926",
		parent: "130900"
	}, {
		name: "南皮县",
		value: "130927",
		parent: "130900"
	}, {
		name: "吴桥县",
		value: "130928",
		parent: "130900"
	}, {
		name: "献县",
		value: "130929",
		parent: "130900"
	}, {
		name: "孟村回族自治县",
		value: "130930",
		parent: "130900"
	}, {
		name: "泊头市",
		value: "130981",
		parent: "130900"
	}, {
		name: "任丘市",
		value: "130982",
		parent: "130900"
	}, {
		name: "黄骅市",
		value: "130983",
		parent: "130900"
	}, {
		name: "河间市",
		value: "130984",
		parent: "130900"
	}, {
		name: "安次区",
		value: "131002",
		parent: "131000"
	}, {
		name: "广阳区",
		value: "131003",
		parent: "131000"
	}, {
		name: "固安县",
		value: "131022",
		parent: "131000"
	}, {
		name: "永清县",
		value: "131023",
		parent: "131000"
	}, {
		name: "香河县",
		value: "131024",
		parent: "131000"
	}, {
		name: "大城县",
		value: "131025",
		parent: "131000"
	}, {
		name: "文安县",
		value: "131026",
		parent: "131000"
	}, {
		name: "大厂回族自治县",
		value: "131028",
		parent: "131000"
	}, {
		name: "霸州市",
		value: "131081",
		parent: "131000"
	}, {
		name: "三河市",
		value: "131082",
		parent: "131000"
	}, {
		name: "桃城区",
		value: "131102",
		parent: "131100"
	}, {
		name: "枣强县",
		value: "131121",
		parent: "131100"
	}, {
		name: "武邑县",
		value: "131122",
		parent: "131100"
	}, {
		name: "武强县",
		value: "131123",
		parent: "131100"
	}, {
		name: "饶阳县",
		value: "131124",
		parent: "131100"
	}, {
		name: "安平县",
		value: "131125",
		parent: "131100"
	}, {
		name: "故城县",
		value: "131126",
		parent: "131100"
	}, {
		name: "景县",
		value: "131127",
		parent: "131100"
	}, {
		name: "阜城县",
		value: "131128",
		parent: "131100"
	}, {
		name: "冀州市",
		value: "131181",
		parent: "131100"
	}, {
		name: "深州市",
		value: "131182",
		parent: "131100"
	}, {
		name: "太原市",
		value: "140100",
		parent: "140000"
	}, {
		name: "大同市",
		value: "140200",
		parent: "140000"
	}, {
		name: "阳泉市",
		value: "140300",
		parent: "140000"
	}, {
		name: "长治市",
		value: "140400",
		parent: "140000"
	}, {
		name: "晋城市",
		value: "140500",
		parent: "140000"
	}, {
		name: "朔州市",
		value: "140600",
		parent: "140000"
	}, {
		name: "晋中市",
		value: "140700",
		parent: "140000"
	}, {
		name: "运城市",
		value: "140800",
		parent: "140000"
	}, {
		name: "忻州市",
		value: "140900",
		parent: "140000"
	}, {
		name: "临汾市",
		value: "141000",
		parent: "140000"
	}, {
		name: "吕梁市",
		value: "141100",
		parent: "140000"
	}, {
		name: "小店区",
		value: "140105",
		parent: "140100"
	}, {
		name: "迎泽区",
		value: "140106",
		parent: "140100"
	}, {
		name: "杏花岭区",
		value: "140107",
		parent: "140100"
	}, {
		name: "尖草坪区",
		value: "140108",
		parent: "140100"
	}, {
		name: "万柏林区",
		value: "140109",
		parent: "140100"
	}, {
		name: "晋源区",
		value: "140110",
		parent: "140100"
	}, {
		name: "清徐县",
		value: "140121",
		parent: "140100"
	}, {
		name: "阳曲县",
		value: "140122",
		parent: "140100"
	}, {
		name: "娄烦县",
		value: "140123",
		parent: "140100"
	}, {
		name: "古交市",
		value: "140181",
		parent: "140100"
	}, {
		name: "城区",
		value: "140202",
		parent: "140200"
	}, {
		name: "矿区",
		value: "140203",
		parent: "140200"
	}, {
		name: "南郊区",
		value: "140211",
		parent: "140200"
	}, {
		name: "新荣区",
		value: "140212",
		parent: "140200"
	}, {
		name: "阳高县",
		value: "140221",
		parent: "140200"
	}, {
		name: "天镇县",
		value: "140222",
		parent: "140200"
	}, {
		name: "广灵县",
		value: "140223",
		parent: "140200"
	}, {
		name: "灵丘县",
		value: "140224",
		parent: "140200"
	}, {
		name: "浑源县",
		value: "140225",
		parent: "140200"
	}, {
		name: "左云县",
		value: "140226",
		parent: "140200"
	}, {
		name: "大同县",
		value: "140227",
		parent: "140200"
	}, {
		name: "城区",
		value: "140302",
		parent: "140300"
	}, {
		name: "矿区",
		value: "140303",
		parent: "140300"
	}, {
		name: "郊区",
		value: "140311",
		parent: "140300"
	}, {
		name: "平定县",
		value: "140321",
		parent: "140300"
	}, {
		name: "盂县",
		value: "140322",
		parent: "140300"
	}, {
		name: "城区",
		value: "140402",
		parent: "140400"
	}, {
		name: "郊区",
		value: "140411",
		parent: "140400"
	}, {
		name: "长治县",
		value: "140421",
		parent: "140400"
	}, {
		name: "襄垣县",
		value: "140423",
		parent: "140400"
	}, {
		name: "屯留县",
		value: "140424",
		parent: "140400"
	}, {
		name: "平顺县",
		value: "140425",
		parent: "140400"
	}, {
		name: "黎城县",
		value: "140426",
		parent: "140400"
	}, {
		name: "壶关县",
		value: "140427",
		parent: "140400"
	}, {
		name: "长子县",
		value: "140428",
		parent: "140400"
	}, {
		name: "武乡县",
		value: "140429",
		parent: "140400"
	}, {
		name: "沁县",
		value: "140430",
		parent: "140400"
	}, {
		name: "沁源县",
		value: "140431",
		parent: "140400"
	}, {
		name: "潞城市",
		value: "140481",
		parent: "140400"
	}, {
		name: "城区",
		value: "140502",
		parent: "140500"
	}, {
		name: "沁水县",
		value: "140521",
		parent: "140500"
	}, {
		name: "阳城县",
		value: "140522",
		parent: "140500"
	}, {
		name: "陵川县",
		value: "140524",
		parent: "140500"
	}, {
		name: "泽州县",
		value: "140525",
		parent: "140500"
	}, {
		name: "高平市",
		value: "140581",
		parent: "140500"
	}, {
		name: "朔城区",
		value: "140602",
		parent: "140600"
	}, {
		name: "平鲁区",
		value: "140603",
		parent: "140600"
	}, {
		name: "山阴县",
		value: "140621",
		parent: "140600"
	}, {
		name: "应县",
		value: "140622",
		parent: "140600"
	}, {
		name: "右玉县",
		value: "140623",
		parent: "140600"
	}, {
		name: "怀仁县",
		value: "140624",
		parent: "140600"
	}, {
		name: "榆次区",
		value: "140702",
		parent: "140700"
	}, {
		name: "榆社县",
		value: "140721",
		parent: "140700"
	}, {
		name: "左权县",
		value: "140722",
		parent: "140700"
	}, {
		name: "和顺县",
		value: "140723",
		parent: "140700"
	}, {
		name: "昔阳县",
		value: "140724",
		parent: "140700"
	}, {
		name: "寿阳县",
		value: "140725",
		parent: "140700"
	}, {
		name: "太谷县",
		value: "140726",
		parent: "140700"
	}, {
		name: "祁县",
		value: "140727",
		parent: "140700"
	}, {
		name: "平遥县",
		value: "140728",
		parent: "140700"
	}, {
		name: "灵石县",
		value: "140729",
		parent: "140700"
	}, {
		name: "介休市",
		value: "140781",
		parent: "140700"
	}, {
		name: "盐湖区",
		value: "140802",
		parent: "140800"
	}, {
		name: "临猗县",
		value: "140821",
		parent: "140800"
	}, {
		name: "万荣县",
		value: "140822",
		parent: "140800"
	}, {
		name: "闻喜县",
		value: "140823",
		parent: "140800"
	}, {
		name: "稷山县",
		value: "140824",
		parent: "140800"
	}, {
		name: "新绛县",
		value: "140825",
		parent: "140800"
	}, {
		name: "绛县",
		value: "140826",
		parent: "140800"
	}, {
		name: "垣曲县",
		value: "140827",
		parent: "140800"
	}, {
		name: "夏县",
		value: "140828",
		parent: "140800"
	}, {
		name: "平陆县",
		value: "140829",
		parent: "140800"
	}, {
		name: "芮城县",
		value: "140830",
		parent: "140800"
	}, {
		name: "永济市",
		value: "140881",
		parent: "140800"
	}, {
		name: "河津市",
		value: "140882",
		parent: "140800"
	}, {
		name: "忻府区",
		value: "140902",
		parent: "140900"
	}, {
		name: "定襄县",
		value: "140921",
		parent: "140900"
	}, {
		name: "五台县",
		value: "140922",
		parent: "140900"
	}, {
		name: "代县",
		value: "140923",
		parent: "140900"
	}, {
		name: "繁峙县",
		value: "140924",
		parent: "140900"
	}, {
		name: "宁武县",
		value: "140925",
		parent: "140900"
	}, {
		name: "静乐县",
		value: "140926",
		parent: "140900"
	}, {
		name: "神池县",
		value: "140927",
		parent: "140900"
	}, {
		name: "五寨县",
		value: "140928",
		parent: "140900"
	}, {
		name: "岢岚县",
		value: "140929",
		parent: "140900"
	}, {
		name: "河曲县",
		value: "140930",
		parent: "140900"
	}, {
		name: "保德县",
		value: "140931",
		parent: "140900"
	}, {
		name: "偏关县",
		value: "140932",
		parent: "140900"
	}, {
		name: "原平市",
		value: "140981",
		parent: "140900"
	}, {
		name: "尧都区",
		value: "141002",
		parent: "141000"
	}, {
		name: "曲沃县",
		value: "141021",
		parent: "141000"
	}, {
		name: "翼城县",
		value: "141022",
		parent: "141000"
	}, {
		name: "襄汾县",
		value: "141023",
		parent: "141000"
	}, {
		name: "洪洞县",
		value: "141024",
		parent: "141000"
	}, {
		name: "古县",
		value: "141025",
		parent: "141000"
	}, {
		name: "安泽县",
		value: "141026",
		parent: "141000"
	}, {
		name: "浮山县",
		value: "141027",
		parent: "141000"
	}, {
		name: "吉县",
		value: "141028",
		parent: "141000"
	}, {
		name: "乡宁县",
		value: "141029",
		parent: "141000"
	}, {
		name: "大宁县",
		value: "141030",
		parent: "141000"
	}, {
		name: "隰县",
		value: "141031",
		parent: "141000"
	}, {
		name: "永和县",
		value: "141032",
		parent: "141000"
	}, {
		name: "蒲县",
		value: "141033",
		parent: "141000"
	}, {
		name: "汾西县",
		value: "141034",
		parent: "141000"
	}, {
		name: "侯马市",
		value: "141081",
		parent: "141000"
	}, {
		name: "霍州市",
		value: "141082",
		parent: "141000"
	}, {
		name: "离石区",
		value: "141102",
		parent: "141100"
	}, {
		name: "文水县",
		value: "141121",
		parent: "141100"
	}, {
		name: "交城县",
		value: "141122",
		parent: "141100"
	}, {
		name: "兴县",
		value: "141123",
		parent: "141100"
	}, {
		name: "临县",
		value: "141124",
		parent: "141100"
	}, {
		name: "柳林县",
		value: "141125",
		parent: "141100"
	}, {
		name: "石楼县",
		value: "141126",
		parent: "141100"
	}, {
		name: "岚县",
		value: "141127",
		parent: "141100"
	}, {
		name: "方山县",
		value: "141128",
		parent: "141100"
	}, {
		name: "中阳县",
		value: "141129",
		parent: "141100"
	}, {
		name: "交口县",
		value: "141130",
		parent: "141100"
	}, {
		name: "孝义市",
		value: "141181",
		parent: "141100"
	}, {
		name: "汾阳市",
		value: "141182",
		parent: "141100"
	}, {
		name: "呼和浩特市",
		value: "150100",
		parent: "150000"
	}, {
		name: "包头市",
		value: "150200",
		parent: "150000"
	}, {
		name: "乌海市",
		value: "150300",
		parent: "150000"
	}, {
		name: "赤峰市",
		value: "150400",
		parent: "150000"
	}, {
		name: "通辽市",
		value: "150500",
		parent: "150000"
	}, {
		name: "鄂尔多斯市",
		value: "150600",
		parent: "150000"
	}, {
		name: "呼伦贝尔市",
		value: "150700",
		parent: "150000"
	}, {
		name: "巴彦淖尔市",
		value: "150800",
		parent: "150000"
	}, {
		name: "乌兰察布市",
		value: "150900",
		parent: "150000"
	}, {
		name: "兴安盟",
		value: "152200",
		parent: "150000"
	}, {
		name: "锡林郭勒盟",
		value: "152500",
		parent: "150000"
	}, {
		name: "阿拉善盟",
		value: "152900",
		parent: "150000"
	}, {
		name: "新城区",
		value: "150102",
		parent: "150100"
	}, {
		name: "回民区",
		value: "150103",
		parent: "150100"
	}, {
		name: "玉泉区",
		value: "150104",
		parent: "150100"
	}, {
		name: "赛罕区",
		value: "150105",
		parent: "150100"
	}, {
		name: "土默特左旗",
		value: "150121",
		parent: "150100"
	}, {
		name: "托克托县",
		value: "150122",
		parent: "150100"
	}, {
		name: "和林格尔县",
		value: "150123",
		parent: "150100"
	}, {
		name: "清水河县",
		value: "150124",
		parent: "150100"
	}, {
		name: "武川县",
		value: "150125",
		parent: "150100"
	}, {
		name: "东河区",
		value: "150202",
		parent: "150200"
	}, {
		name: "昆都仑区",
		value: "150203",
		parent: "150200"
	}, {
		name: "青山区",
		value: "150204",
		parent: "150200"
	}, {
		name: "石拐区",
		value: "150205",
		parent: "150200"
	}, {
		name: "白云鄂博矿区",
		value: "150206",
		parent: "150200"
	}, {
		name: "九原区",
		value: "150207",
		parent: "150200"
	}, {
		name: "土默特右旗",
		value: "150221",
		parent: "150200"
	}, {
		name: "固阳县",
		value: "150222",
		parent: "150200"
	}, {
		name: "达尔罕茂明安联合旗",
		value: "150223",
		parent: "150200"
	}, {
		name: "海勃湾区",
		value: "150302",
		parent: "150300"
	}, {
		name: "海南区",
		value: "150303",
		parent: "150300"
	}, {
		name: "乌达区",
		value: "150304",
		parent: "150300"
	}, {
		name: "红山区",
		value: "150402",
		parent: "150400"
	}, {
		name: "元宝山区",
		value: "150403",
		parent: "150400"
	}, {
		name: "松山区",
		value: "150404",
		parent: "150400"
	}, {
		name: "阿鲁科尔沁旗",
		value: "150421",
		parent: "150400"
	}, {
		name: "巴林左旗",
		value: "150422",
		parent: "150400"
	}, {
		name: "巴林右旗",
		value: "150423",
		parent: "150400"
	}, {
		name: "林西县",
		value: "150424",
		parent: "150400"
	}, {
		name: "克什克腾旗",
		value: "150425",
		parent: "150400"
	}, {
		name: "翁牛特旗",
		value: "150426",
		parent: "150400"
	}, {
		name: "喀喇沁旗",
		value: "150428",
		parent: "150400"
	}, {
		name: "宁城县",
		value: "150429",
		parent: "150400"
	}, {
		name: "敖汉旗",
		value: "150430",
		parent: "150400"
	}, {
		name: "科尔沁区",
		value: "150502",
		parent: "150500"
	}, {
		name: "科尔沁左翼中旗",
		value: "150521",
		parent: "150500"
	}, {
		name: "科尔沁左翼后旗",
		value: "150522",
		parent: "150500"
	}, {
		name: "开鲁县",
		value: "150523",
		parent: "150500"
	}, {
		name: "库伦旗",
		value: "150524",
		parent: "150500"
	}, {
		name: "奈曼旗",
		value: "150525",
		parent: "150500"
	}, {
		name: "扎鲁特旗",
		value: "150526",
		parent: "150500"
	}, {
		name: "霍林郭勒市",
		value: "150581",
		parent: "150500"
	}, {
		name: "东胜区",
		value: "150602",
		parent: "150600"
	}, {
		name: "达拉特旗",
		value: "150621",
		parent: "150600"
	}, {
		name: "准格尔旗",
		value: "150622",
		parent: "150600"
	}, {
		name: "鄂托克前旗",
		value: "150623",
		parent: "150600"
	}, {
		name: "鄂托克旗",
		value: "150624",
		parent: "150600"
	}, {
		name: "杭锦旗",
		value: "150625",
		parent: "150600"
	}, {
		name: "乌审旗",
		value: "150626",
		parent: "150600"
	}, {
		name: "伊金霍洛旗",
		value: "150627",
		parent: "150600"
	}, {
		name: "海拉尔区",
		value: "150702",
		parent: "150700"
	}, {
		name: "扎赉诺尔区",
		value: "150703",
		parent: "150700"
	}, {
		name: "阿荣旗",
		value: "150721",
		parent: "150700"
	}, {
		name: "莫力达瓦达斡尔族自治旗",
		value: "150722",
		parent: "150700"
	}, {
		name: "鄂伦春自治旗",
		value: "150723",
		parent: "150700"
	}, {
		name: "鄂温克族自治旗",
		value: "150724",
		parent: "150700"
	}, {
		name: "陈巴尔虎旗",
		value: "150725",
		parent: "150700"
	}, {
		name: "新巴尔虎左旗",
		value: "150726",
		parent: "150700"
	}, {
		name: "新巴尔虎右旗",
		value: "150727",
		parent: "150700"
	}, {
		name: "满洲里市",
		value: "150781",
		parent: "150700"
	}, {
		name: "牙克石市",
		value: "150782",
		parent: "150700"
	}, {
		name: "扎兰屯市",
		value: "150783",
		parent: "150700"
	}, {
		name: "额尔古纳市",
		value: "150784",
		parent: "150700"
	}, {
		name: "根河市",
		value: "150785",
		parent: "150700"
	}, {
		name: "临河区",
		value: "150802",
		parent: "150800"
	}, {
		name: "五原县",
		value: "150821",
		parent: "150800"
	}, {
		name: "磴口县",
		value: "150822",
		parent: "150800"
	}, {
		name: "乌拉特前旗",
		value: "150823",
		parent: "150800"
	}, {
		name: "乌拉特中旗",
		value: "150824",
		parent: "150800"
	}, {
		name: "乌拉特后旗",
		value: "150825",
		parent: "150800"
	}, {
		name: "杭锦后旗",
		value: "150826",
		parent: "150800"
	}, {
		name: "集宁区",
		value: "150902",
		parent: "150900"
	}, {
		name: "卓资县",
		value: "150921",
		parent: "150900"
	}, {
		name: "化德县",
		value: "150922",
		parent: "150900"
	}, {
		name: "商都县",
		value: "150923",
		parent: "150900"
	}, {
		name: "兴和县",
		value: "150924",
		parent: "150900"
	}, {
		name: "凉城县",
		value: "150925",
		parent: "150900"
	}, {
		name: "察哈尔右翼前旗",
		value: "150926",
		parent: "150900"
	}, {
		name: "察哈尔右翼中旗",
		value: "150927",
		parent: "150900"
	}, {
		name: "察哈尔右翼后旗",
		value: "150928",
		parent: "150900"
	}, {
		name: "四子王旗",
		value: "150929",
		parent: "150900"
	}, {
		name: "丰镇市",
		value: "150981",
		parent: "150900"
	}, {
		name: "乌兰浩特市",
		value: "152201",
		parent: "152200"
	}, {
		name: "阿尔山市",
		value: "152202",
		parent: "152200"
	}, {
		name: "科尔沁右翼前旗",
		value: "152221",
		parent: "152200"
	}, {
		name: "科尔沁右翼中旗",
		value: "152222",
		parent: "152200"
	}, {
		name: "扎赉特旗",
		value: "152223",
		parent: "152200"
	}, {
		name: "突泉县",
		value: "152224",
		parent: "152200"
	}, {
		name: "二连浩特市",
		value: "152501",
		parent: "152500"
	}, {
		name: "锡林浩特市",
		value: "152502",
		parent: "152500"
	}, {
		name: "阿巴嘎旗",
		value: "152522",
		parent: "152500"
	}, {
		name: "苏尼特左旗",
		value: "152523",
		parent: "152500"
	}, {
		name: "苏尼特右旗",
		value: "152524",
		parent: "152500"
	}, {
		name: "东乌珠穆沁旗",
		value: "152525",
		parent: "152500"
	}, {
		name: "西乌珠穆沁旗",
		value: "152526",
		parent: "152500"
	}, {
		name: "太仆寺旗",
		value: "152527",
		parent: "152500"
	}, {
		name: "镶黄旗",
		value: "152528",
		parent: "152500"
	}, {
		name: "正镶白旗",
		value: "152529",
		parent: "152500"
	}, {
		name: "正蓝旗",
		value: "152530",
		parent: "152500"
	}, {
		name: "多伦县",
		value: "152531",
		parent: "152500"
	}, {
		name: "阿拉善左旗",
		value: "152921",
		parent: "152900"
	}, {
		name: "阿拉善右旗",
		value: "152922",
		parent: "152900"
	}, {
		name: "额济纳旗",
		value: "152923",
		parent: "152900"
	}, {
		name: "沈阳市",
		value: "210100",
		parent: "210000"
	}, {
		name: "大连市",
		value: "210200",
		parent: "210000"
	}, {
		name: "鞍山市",
		value: "210300",
		parent: "210000"
	}, {
		name: "抚顺市",
		value: "210400",
		parent: "210000"
	}, {
		name: "本溪市",
		value: "210500",
		parent: "210000"
	}, {
		name: "丹东市",
		value: "210600",
		parent: "210000"
	}, {
		name: "锦州市",
		value: "210700",
		parent: "210000"
	}, {
		name: "营口市",
		value: "210800",
		parent: "210000"
	}, {
		name: "阜新市",
		value: "210900",
		parent: "210000"
	}, {
		name: "辽阳市",
		value: "211000",
		parent: "210000"
	}, {
		name: "盘锦市",
		value: "211100",
		parent: "210000"
	}, {
		name: "铁岭市",
		value: "211200",
		parent: "210000"
	}, {
		name: "朝阳市",
		value: "211300",
		parent: "210000"
	}, {
		name: "葫芦岛市",
		value: "211400",
		parent: "210000"
	}, {
		name: "和平区",
		value: "210102",
		parent: "210100"
	}, {
		name: "沈河区",
		value: "210103",
		parent: "210100"
	}, {
		name: "大东区",
		value: "210104",
		parent: "210100"
	}, {
		name: "皇姑区",
		value: "210105",
		parent: "210100"
	}, {
		name: "铁西区",
		value: "210106",
		parent: "210100"
	}, {
		name: "苏家屯区",
		value: "210111",
		parent: "210100"
	}, {
		name: "浑南区",
		value: "210112",
		parent: "210100"
	}, {
		name: "沈北新区",
		value: "210113",
		parent: "210100"
	}, {
		name: "于洪区",
		value: "210114",
		parent: "210100"
	}, {
		name: "辽中县",
		value: "210122",
		parent: "210100"
	}, {
		name: "康平县",
		value: "210123",
		parent: "210100"
	}, {
		name: "法库县",
		value: "210124",
		parent: "210100"
	}, {
		name: "新民市",
		value: "210181",
		parent: "210100"
	}, {
		name: "中山区",
		value: "210202",
		parent: "210200"
	}, {
		name: "西岗区",
		value: "210203",
		parent: "210200"
	}, {
		name: "沙河口区",
		value: "210204",
		parent: "210200"
	}, {
		name: "甘井子区",
		value: "210211",
		parent: "210200"
	}, {
		name: "旅顺口区",
		value: "210212",
		parent: "210200"
	}, {
		name: "金州区",
		value: "210213",
		parent: "210200"
	}, {
		name: "长海县",
		value: "210224",
		parent: "210200"
	}, {
		name: "瓦房店市",
		value: "210281",
		parent: "210200"
	}, {
		name: "普兰店市",
		value: "210282",
		parent: "210200"
	}, {
		name: "庄河市",
		value: "210283",
		parent: "210200"
	}, {
		name: "铁东区",
		value: "210302",
		parent: "210300"
	}, {
		name: "铁西区",
		value: "210303",
		parent: "210300"
	}, {
		name: "立山区",
		value: "210304",
		parent: "210300"
	}, {
		name: "千山区",
		value: "210311",
		parent: "210300"
	}, {
		name: "台安县",
		value: "210321",
		parent: "210300"
	}, {
		name: "岫岩满族自治县",
		value: "210323",
		parent: "210300"
	}, {
		name: "海城市",
		value: "210381",
		parent: "210300"
	}, {
		name: "新抚区",
		value: "210402",
		parent: "210400"
	}, {
		name: "东洲区",
		value: "210403",
		parent: "210400"
	}, {
		name: "望花区",
		value: "210404",
		parent: "210400"
	}, {
		name: "顺城区",
		value: "210411",
		parent: "210400"
	}, {
		name: "抚顺县",
		value: "210421",
		parent: "210400"
	}, {
		name: "新宾满族自治县",
		value: "210422",
		parent: "210400"
	}, {
		name: "清原满族自治县",
		value: "210423",
		parent: "210400"
	}, {
		name: "平山区",
		value: "210502",
		parent: "210500"
	}, {
		name: "溪湖区",
		value: "210503",
		parent: "210500"
	}, {
		name: "明山区",
		value: "210504",
		parent: "210500"
	}, {
		name: "南芬区",
		value: "210505",
		parent: "210500"
	}, {
		name: "本溪满族自治县",
		value: "210521",
		parent: "210500"
	}, {
		name: "桓仁满族自治县",
		value: "210522",
		parent: "210500"
	}, {
		name: "元宝区",
		value: "210602",
		parent: "210600"
	}, {
		name: "振兴区",
		value: "210603",
		parent: "210600"
	}, {
		name: "振安区",
		value: "210604",
		parent: "210600"
	}, {
		name: "宽甸满族自治县",
		value: "210624",
		parent: "210600"
	}, {
		name: "东港市",
		value: "210681",
		parent: "210600"
	}, {
		name: "凤城市",
		value: "210682",
		parent: "210600"
	}, {
		name: "古塔区",
		value: "210702",
		parent: "210700"
	}, {
		name: "凌河区",
		value: "210703",
		parent: "210700"
	}, {
		name: "太和区",
		value: "210711",
		parent: "210700"
	}, {
		name: "黑山县",
		value: "210726",
		parent: "210700"
	}, {
		name: "义县",
		value: "210727",
		parent: "210700"
	}, {
		name: "凌海市",
		value: "210781",
		parent: "210700"
	}, {
		name: "北镇市",
		value: "210782",
		parent: "210700"
	}, {
		name: "站前区",
		value: "210802",
		parent: "210800"
	}, {
		name: "西市区",
		value: "210803",
		parent: "210800"
	}, {
		name: "鲅鱼圈区",
		value: "210804",
		parent: "210800"
	}, {
		name: "老边区",
		value: "210811",
		parent: "210800"
	}, {
		name: "盖州市",
		value: "210881",
		parent: "210800"
	}, {
		name: "大石桥市",
		value: "210882",
		parent: "210800"
	}, {
		name: "海州区",
		value: "210902",
		parent: "210900"
	}, {
		name: "新邱区",
		value: "210903",
		parent: "210900"
	}, {
		name: "太平区",
		value: "210904",
		parent: "210900"
	}, {
		name: "清河门区",
		value: "210905",
		parent: "210900"
	}, {
		name: "细河区",
		value: "210911",
		parent: "210900"
	}, {
		name: "阜新蒙古族自治县",
		value: "210921",
		parent: "210900"
	}, {
		name: "彰武县",
		value: "210922",
		parent: "210900"
	}, {
		name: "白塔区",
		value: "211002",
		parent: "211000"
	}, {
		name: "文圣区",
		value: "211003",
		parent: "211000"
	}, {
		name: "宏伟区",
		value: "211004",
		parent: "211000"
	}, {
		name: "弓长岭区",
		value: "211005",
		parent: "211000"
	}, {
		name: "太子河区",
		value: "211011",
		parent: "211000"
	}, {
		name: "辽阳县",
		value: "211021",
		parent: "211000"
	}, {
		name: "灯塔市",
		value: "211081",
		parent: "211000"
	}, {
		name: "双台子区",
		value: "211102",
		parent: "211100"
	}, {
		name: "兴隆台区",
		value: "211103",
		parent: "211100"
	}, {
		name: "大洼县",
		value: "211121",
		parent: "211100"
	}, {
		name: "盘山县",
		value: "211122",
		parent: "211100"
	}, {
		name: "银州区",
		value: "211202",
		parent: "211200"
	}, {
		name: "清河区",
		value: "211204",
		parent: "211200"
	}, {
		name: "铁岭县",
		value: "211221",
		parent: "211200"
	}, {
		name: "西丰县",
		value: "211223",
		parent: "211200"
	}, {
		name: "昌图县",
		value: "211224",
		parent: "211200"
	}, {
		name: "调兵山市",
		value: "211281",
		parent: "211200"
	}, {
		name: "开原市",
		value: "211282",
		parent: "211200"
	}, {
		name: "双塔区",
		value: "211302",
		parent: "211300"
	}, {
		name: "龙城区",
		value: "211303",
		parent: "211300"
	}, {
		name: "朝阳县",
		value: "211321",
		parent: "211300"
	}, {
		name: "建平县",
		value: "211322",
		parent: "211300"
	}, {
		name: "喀喇沁左翼蒙古族自治县",
		value: "211324",
		parent: "211300"
	}, {
		name: "北票市",
		value: "211381",
		parent: "211300"
	}, {
		name: "凌源市",
		value: "211382",
		parent: "211300"
	}, {
		name: "连山区",
		value: "211402",
		parent: "211400"
	}, {
		name: "龙港区",
		value: "211403",
		parent: "211400"
	}, {
		name: "南票区",
		value: "211404",
		parent: "211400"
	}, {
		name: "绥中县",
		value: "211421",
		parent: "211400"
	}, {
		name: "建昌县",
		value: "211422",
		parent: "211400"
	}, {
		name: "兴城市",
		value: "211481",
		parent: "211400"
	}, {
		name: "长春市",
		value: "220100",
		parent: "220000"
	}, {
		name: "吉林市",
		value: "220200",
		parent: "220000"
	}, {
		name: "四平市",
		value: "220300",
		parent: "220000"
	}, {
		name: "辽源市",
		value: "220400",
		parent: "220000"
	}, {
		name: "通化市",
		value: "220500",
		parent: "220000"
	}, {
		name: "白山市",
		value: "220600",
		parent: "220000"
	}, {
		name: "松原市",
		value: "220700",
		parent: "220000"
	}, {
		name: "白城市",
		value: "220800",
		parent: "220000"
	}, {
		name: "延边朝鲜族自治州",
		value: "222400",
		parent: "220000"
	}, {
		name: "南关区",
		value: "220102",
		parent: "220100"
	}, {
		name: "宽城区",
		value: "220103",
		parent: "220100"
	}, {
		name: "朝阳区",
		value: "220104",
		parent: "220100"
	}, {
		name: "二道区",
		value: "220105",
		parent: "220100"
	}, {
		name: "绿园区",
		value: "220106",
		parent: "220100"
	}, {
		name: "双阳区",
		value: "220112",
		parent: "220100"
	}, {
		name: "九台区",
		value: "220113",
		parent: "220100"
	}, {
		name: "农安县",
		value: "220122",
		parent: "220100"
	}, {
		name: "榆树市",
		value: "220182",
		parent: "220100"
	}, {
		name: "德惠市",
		value: "220183",
		parent: "220100"
	}, {
		name: "昌邑区",
		value: "220202",
		parent: "220200"
	}, {
		name: "龙潭区",
		value: "220203",
		parent: "220200"
	}, {
		name: "船营区",
		value: "220204",
		parent: "220200"
	}, {
		name: "丰满区",
		value: "220211",
		parent: "220200"
	}, {
		name: "永吉县",
		value: "220221",
		parent: "220200"
	}, {
		name: "蛟河市",
		value: "220281",
		parent: "220200"
	}, {
		name: "桦甸市",
		value: "220282",
		parent: "220200"
	}, {
		name: "舒兰市",
		value: "220283",
		parent: "220200"
	}, {
		name: "磐石市",
		value: "220284",
		parent: "220200"
	}, {
		name: "铁西区",
		value: "220302",
		parent: "220300"
	}, {
		name: "铁东区",
		value: "220303",
		parent: "220300"
	}, {
		name: "梨树县",
		value: "220322",
		parent: "220300"
	}, {
		name: "伊通满族自治县",
		value: "220323",
		parent: "220300"
	}, {
		name: "公主岭市",
		value: "220381",
		parent: "220300"
	}, {
		name: "双辽市",
		value: "220382",
		parent: "220300"
	}, {
		name: "龙山区",
		value: "220402",
		parent: "220400"
	}, {
		name: "西安区",
		value: "220403",
		parent: "220400"
	}, {
		name: "东丰县",
		value: "220421",
		parent: "220400"
	}, {
		name: "东辽县",
		value: "220422",
		parent: "220400"
	}, {
		name: "东昌区",
		value: "220502",
		parent: "220500"
	}, {
		name: "二道江区",
		value: "220503",
		parent: "220500"
	}, {
		name: "通化县",
		value: "220521",
		parent: "220500"
	}, {
		name: "辉南县",
		value: "220523",
		parent: "220500"
	}, {
		name: "柳河县",
		value: "220524",
		parent: "220500"
	}, {
		name: "梅河口市",
		value: "220581",
		parent: "220500"
	}, {
		name: "集安市",
		value: "220582",
		parent: "220500"
	}, {
		name: "浑江区",
		value: "220602",
		parent: "220600"
	}, {
		name: "江源区",
		value: "220605",
		parent: "220600"
	}, {
		name: "抚松县",
		value: "220621",
		parent: "220600"
	}, {
		name: "靖宇县",
		value: "220622",
		parent: "220600"
	}, {
		name: "长白朝鲜族自治县",
		value: "220623",
		parent: "220600"
	}, {
		name: "临江市",
		value: "220681",
		parent: "220600"
	}, {
		name: "宁江区",
		value: "220702",
		parent: "220700"
	}, {
		name: "前郭尔罗斯蒙古族自治县",
		value: "220721",
		parent: "220700"
	}, {
		name: "长岭县",
		value: "220722",
		parent: "220700"
	}, {
		name: "乾安县",
		value: "220723",
		parent: "220700"
	}, {
		name: "扶余市",
		value: "220781",
		parent: "220700"
	}, {
		name: "洮北区",
		value: "220802",
		parent: "220800"
	}, {
		name: "镇赉县",
		value: "220821",
		parent: "220800"
	}, {
		name: "通榆县",
		value: "220822",
		parent: "220800"
	}, {
		name: "洮南市",
		value: "220881",
		parent: "220800"
	}, {
		name: "大安市",
		value: "220882",
		parent: "220800"
	}, {
		name: "延吉市",
		value: "222401",
		parent: "222400"
	}, {
		name: "图们市",
		value: "222402",
		parent: "222400"
	}, {
		name: "敦化市",
		value: "222403",
		parent: "222400"
	}, {
		name: "珲春市",
		value: "222404",
		parent: "222400"
	}, {
		name: "龙井市",
		value: "222405",
		parent: "222400"
	}, {
		name: "和龙市",
		value: "222406",
		parent: "222400"
	}, {
		name: "汪清县",
		value: "222424",
		parent: "222400"
	}, {
		name: "安图县",
		value: "222426",
		parent: "222400"
	}, {
		name: "哈尔滨市",
		value: "230100",
		parent: "230000"
	}, {
		name: "齐齐哈尔市",
		value: "230200",
		parent: "230000"
	}, {
		name: "鸡西市",
		value: "230300",
		parent: "230000"
	}, {
		name: "鹤岗市",
		value: "230400",
		parent: "230000"
	}, {
		name: "双鸭山市",
		value: "230500",
		parent: "230000"
	}, {
		name: "大庆市",
		value: "230600",
		parent: "230000"
	}, {
		name: "伊春市",
		value: "230700",
		parent: "230000"
	}, {
		name: "佳木斯市",
		value: "230800",
		parent: "230000"
	}, {
		name: "七台河市",
		value: "230900",
		parent: "230000"
	}, {
		name: "牡丹江市",
		value: "231000",
		parent: "230000"
	}, {
		name: "黑河市",
		value: "231100",
		parent: "230000"
	}, {
		name: "绥化市",
		value: "231200",
		parent: "230000"
	}, {
		name: "大兴安岭地区",
		value: "232700",
		parent: "230000"
	}, {
		name: "道里区",
		value: "230102",
		parent: "230100"
	}, {
		name: "南岗区",
		value: "230103",
		parent: "230100"
	}, {
		name: "道外区",
		value: "230104",
		parent: "230100"
	}, {
		name: "平房区",
		value: "230108",
		parent: "230100"
	}, {
		name: "松北区",
		value: "230109",
		parent: "230100"
	}, {
		name: "香坊区",
		value: "230110",
		parent: "230100"
	}, {
		name: "呼兰区",
		value: "230111",
		parent: "230100"
	}, {
		name: "阿城区",
		value: "230112",
		parent: "230100"
	}, {
		name: "双城区",
		value: "230113",
		parent: "230100"
	}, {
		name: "依兰县",
		value: "230123",
		parent: "230100"
	}, {
		name: "方正县",
		value: "230124",
		parent: "230100"
	}, {
		name: "宾县",
		value: "230125",
		parent: "230100"
	}, {
		name: "巴彦县",
		value: "230126",
		parent: "230100"
	}, {
		name: "木兰县",
		value: "230127",
		parent: "230100"
	}, {
		name: "通河县",
		value: "230128",
		parent: "230100"
	}, {
		name: "延寿县",
		value: "230129",
		parent: "230100"
	}, {
		name: "尚志市",
		value: "230183",
		parent: "230100"
	}, {
		name: "五常市",
		value: "230184",
		parent: "230100"
	}, {
		name: "龙沙区",
		value: "230202",
		parent: "230200"
	}, {
		name: "建华区",
		value: "230203",
		parent: "230200"
	}, {
		name: "铁锋区",
		value: "230204",
		parent: "230200"
	}, {
		name: "昂昂溪区",
		value: "230205",
		parent: "230200"
	}, {
		name: "富拉尔基区",
		value: "230206",
		parent: "230200"
	}, {
		name: "碾子山区",
		value: "230207",
		parent: "230200"
	}, {
		name: "梅里斯达斡尔族区",
		value: "230208",
		parent: "230200"
	}, {
		name: "龙江县",
		value: "230221",
		parent: "230200"
	}, {
		name: "依安县",
		value: "230223",
		parent: "230200"
	}, {
		name: "泰来县",
		value: "230224",
		parent: "230200"
	}, {
		name: "甘南县",
		value: "230225",
		parent: "230200"
	}, {
		name: "富裕县",
		value: "230227",
		parent: "230200"
	}, {
		name: "克山县",
		value: "230229",
		parent: "230200"
	}, {
		name: "克东县",
		value: "230230",
		parent: "230200"
	}, {
		name: "拜泉县",
		value: "230231",
		parent: "230200"
	}, {
		name: "讷河市",
		value: "230281",
		parent: "230200"
	}, {
		name: "鸡冠区",
		value: "230302",
		parent: "230300"
	}, {
		name: "恒山区",
		value: "230303",
		parent: "230300"
	}, {
		name: "滴道区",
		value: "230304",
		parent: "230300"
	}, {
		name: "梨树区",
		value: "230305",
		parent: "230300"
	}, {
		name: "城子河区",
		value: "230306",
		parent: "230300"
	}, {
		name: "麻山区",
		value: "230307",
		parent: "230300"
	}, {
		name: "鸡东县",
		value: "230321",
		parent: "230300"
	}, {
		name: "虎林市",
		value: "230381",
		parent: "230300"
	}, {
		name: "密山市",
		value: "230382",
		parent: "230300"
	}, {
		name: "向阳区",
		value: "230402",
		parent: "230400"
	}, {
		name: "工农区",
		value: "230403",
		parent: "230400"
	}, {
		name: "南山区",
		value: "230404",
		parent: "230400"
	}, {
		name: "兴安区",
		value: "230405",
		parent: "230400"
	}, {
		name: "东山区",
		value: "230406",
		parent: "230400"
	}, {
		name: "兴山区",
		value: "230407",
		parent: "230400"
	}, {
		name: "萝北县",
		value: "230421",
		parent: "230400"
	}, {
		name: "绥滨县",
		value: "230422",
		parent: "230400"
	}, {
		name: "尖山区",
		value: "230502",
		parent: "230500"
	}, {
		name: "岭东区",
		value: "230503",
		parent: "230500"
	}, {
		name: "四方台区",
		value: "230505",
		parent: "230500"
	}, {
		name: "宝山区",
		value: "230506",
		parent: "230500"
	}, {
		name: "集贤县",
		value: "230521",
		parent: "230500"
	}, {
		name: "友谊县",
		value: "230522",
		parent: "230500"
	}, {
		name: "宝清县",
		value: "230523",
		parent: "230500"
	}, {
		name: "饶河县",
		value: "230524",
		parent: "230500"
	}, {
		name: "萨尔图区",
		value: "230602",
		parent: "230600"
	}, {
		name: "龙凤区",
		value: "230603",
		parent: "230600"
	}, {
		name: "让胡路区",
		value: "230604",
		parent: "230600"
	}, {
		name: "红岗区",
		value: "230605",
		parent: "230600"
	}, {
		name: "大同区",
		value: "230606",
		parent: "230600"
	}, {
		name: "肇州县",
		value: "230621",
		parent: "230600"
	}, {
		name: "肇源县",
		value: "230622",
		parent: "230600"
	}, {
		name: "林甸县",
		value: "230623",
		parent: "230600"
	}, {
		name: "杜尔伯特蒙古族自治县",
		value: "230624",
		parent: "230600"
	}, {
		name: "伊春区",
		value: "230702",
		parent: "230700"
	}, {
		name: "南岔区",
		value: "230703",
		parent: "230700"
	}, {
		name: "友好区",
		value: "230704",
		parent: "230700"
	}, {
		name: "西林区",
		value: "230705",
		parent: "230700"
	}, {
		name: "翠峦区",
		value: "230706",
		parent: "230700"
	}, {
		name: "新青区",
		value: "230707",
		parent: "230700"
	}, {
		name: "美溪区",
		value: "230708",
		parent: "230700"
	}, {
		name: "金山屯区",
		value: "230709",
		parent: "230700"
	}, {
		name: "五营区",
		value: "230710",
		parent: "230700"
	}, {
		name: "乌马河区",
		value: "230711",
		parent: "230700"
	}, {
		name: "汤旺河区",
		value: "230712",
		parent: "230700"
	}, {
		name: "带岭区",
		value: "230713",
		parent: "230700"
	}, {
		name: "乌伊岭区",
		value: "230714",
		parent: "230700"
	}, {
		name: "红星区",
		value: "230715",
		parent: "230700"
	}, {
		name: "上甘岭区",
		value: "230716",
		parent: "230700"
	}, {
		name: "嘉荫县",
		value: "230722",
		parent: "230700"
	}, {
		name: "铁力市",
		value: "230781",
		parent: "230700"
	}, {
		name: "向阳区",
		value: "230803",
		parent: "230800"
	}, {
		name: "前进区",
		value: "230804",
		parent: "230800"
	}, {
		name: "东风区",
		value: "230805",
		parent: "230800"
	}, {
		name: "郊区",
		value: "230811",
		parent: "230800"
	}, {
		name: "桦南县",
		value: "230822",
		parent: "230800"
	}, {
		name: "桦川县",
		value: "230826",
		parent: "230800"
	}, {
		name: "汤原县",
		value: "230828",
		parent: "230800"
	}, {
		name: "抚远县",
		value: "230833",
		parent: "230800"
	}, {
		name: "同江市",
		value: "230881",
		parent: "230800"
	}, {
		name: "富锦市",
		value: "230882",
		parent: "230800"
	}, {
		name: "新兴区",
		value: "230902",
		parent: "230900"
	}, {
		name: "桃山区",
		value: "230903",
		parent: "230900"
	}, {
		name: "茄子河区",
		value: "230904",
		parent: "230900"
	}, {
		name: "勃利县",
		value: "230921",
		parent: "230900"
	}, {
		name: "东安区",
		value: "231002",
		parent: "231000"
	}, {
		name: "阳明区",
		value: "231003",
		parent: "231000"
	}, {
		name: "爱民区",
		value: "231004",
		parent: "231000"
	}, {
		name: "西安区",
		value: "231005",
		parent: "231000"
	}, {
		name: "东宁县",
		value: "231024",
		parent: "231000"
	}, {
		name: "林口县",
		value: "231025",
		parent: "231000"
	}, {
		name: "绥芬河市",
		value: "231081",
		parent: "231000"
	}, {
		name: "海林市",
		value: "231083",
		parent: "231000"
	}, {
		name: "宁安市",
		value: "231084",
		parent: "231000"
	}, {
		name: "穆棱市",
		value: "231085",
		parent: "231000"
	}, {
		name: "爱辉区",
		value: "231102",
		parent: "231100"
	}, {
		name: "嫩江县",
		value: "231121",
		parent: "231100"
	}, {
		name: "逊克县",
		value: "231123",
		parent: "231100"
	}, {
		name: "孙吴县",
		value: "231124",
		parent: "231100"
	}, {
		name: "北安市",
		value: "231181",
		parent: "231100"
	}, {
		name: "五大连池市",
		value: "231182",
		parent: "231100"
	}, {
		name: "北林区",
		value: "231202",
		parent: "231200"
	}, {
		name: "望奎县",
		value: "231221",
		parent: "231200"
	}, {
		name: "兰西县",
		value: "231222",
		parent: "231200"
	}, {
		name: "青冈县",
		value: "231223",
		parent: "231200"
	}, {
		name: "庆安县",
		value: "231224",
		parent: "231200"
	}, {
		name: "明水县",
		value: "231225",
		parent: "231200"
	}, {
		name: "绥棱县",
		value: "231226",
		parent: "231200"
	}, {
		name: "安达市",
		value: "231281",
		parent: "231200"
	}, {
		name: "肇东市",
		value: "231282",
		parent: "231200"
	}, {
		name: "海伦市",
		value: "231283",
		parent: "231200"
	}, {
		name: "呼玛县",
		value: "232721",
		parent: "232700"
	}, {
		name: "塔河县",
		value: "232722",
		parent: "232700"
	}, {
		name: "漠河县",
		value: "232723",
		parent: "232700"
	}, {
		name: "市辖区",
		value: "310100",
		parent: "310000"
	}, {
		name: "黄浦区",
		value: "310101",
		parent: "310100"
	}, {
		name: "徐汇区",
		value: "310104",
		parent: "310100"
	}, {
		name: "长宁区",
		value: "310105",
		parent: "310100"
	}, {
		name: "静安区",
		value: "310106",
		parent: "310100"
	}, {
		name: "普陀区",
		value: "310107",
		parent: "310100"
	}, {
		name: "闸北区",
		value: "310108",
		parent: "310100"
	}, {
		name: "虹口区",
		value: "310109",
		parent: "310100"
	}, {
		name: "杨浦区",
		value: "310110",
		parent: "310100"
	}, {
		name: "闵行区",
		value: "310112",
		parent: "310100"
	}, {
		name: "宝山区",
		value: "310113",
		parent: "310100"
	}, {
		name: "嘉定区",
		value: "310114",
		parent: "310100"
	}, {
		name: "浦东新区",
		value: "310115",
		parent: "310100"
	}, {
		name: "金山区",
		value: "310116",
		parent: "310100"
	}, {
		name: "松江区",
		value: "310117",
		parent: "310100"
	}, {
		name: "青浦区",
		value: "310118",
		parent: "310100"
	}, {
		name: "奉贤区",
		value: "310120",
		parent: "310100"
	}, {
		name: "崇明县",
		value: "310230",
		parent: "310100"
	}, {
		name: "南京市",
		value: "320100",
		parent: "320000"
	}, {
		name: "无锡市",
		value: "320200",
		parent: "320000"
	}, {
		name: "徐州市",
		value: "320300",
		parent: "320000"
	}, {
		name: "常州市",
		value: "320400",
		parent: "320000"
	}, {
		name: "苏州市",
		value: "320500",
		parent: "320000"
	}, {
		name: "南通市",
		value: "320600",
		parent: "320000"
	}, {
		name: "连云港市",
		value: "320700",
		parent: "320000"
	}, {
		name: "淮安市",
		value: "320800",
		parent: "320000"
	}, {
		name: "盐城市",
		value: "320900",
		parent: "320000"
	}, {
		name: "扬州市",
		value: "321000",
		parent: "320000"
	}, {
		name: "镇江市",
		value: "321100",
		parent: "320000"
	}, {
		name: "泰州市",
		value: "321200",
		parent: "320000"
	}, {
		name: "宿迁市",
		value: "321300",
		parent: "320000"
	}, {
		name: "玄武区",
		value: "320102",
		parent: "320100"
	}, {
		name: "秦淮区",
		value: "320104",
		parent: "320100"
	}, {
		name: "建邺区",
		value: "320105",
		parent: "320100"
	}, {
		name: "鼓楼区",
		value: "320106",
		parent: "320100"
	}, {
		name: "浦口区",
		value: "320111",
		parent: "320100"
	}, {
		name: "栖霞区",
		value: "320113",
		parent: "320100"
	}, {
		name: "雨花台区",
		value: "320114",
		parent: "320100"
	}, {
		name: "江宁区",
		value: "320115",
		parent: "320100"
	}, {
		name: "六合区",
		value: "320116",
		parent: "320100"
	}, {
		name: "溧水区",
		value: "320117",
		parent: "320100"
	}, {
		name: "高淳区",
		value: "320118",
		parent: "320100"
	}, {
		name: "崇安区",
		value: "320202",
		parent: "320200"
	}, {
		name: "南长区",
		value: "320203",
		parent: "320200"
	}, {
		name: "北塘区",
		value: "320204",
		parent: "320200"
	}, {
		name: "锡山区",
		value: "320205",
		parent: "320200"
	}, {
		name: "惠山区",
		value: "320206",
		parent: "320200"
	}, {
		name: "滨湖区",
		value: "320211",
		parent: "320200"
	}, {
		name: "江阴市",
		value: "320281",
		parent: "320200"
	}, {
		name: "宜兴市",
		value: "320282",
		parent: "320200"
	}, {
		name: "鼓楼区",
		value: "320302",
		parent: "320300"
	}, {
		name: "云龙区",
		value: "320303",
		parent: "320300"
	}, {
		name: "贾汪区",
		value: "320305",
		parent: "320300"
	}, {
		name: "泉山区",
		value: "320311",
		parent: "320300"
	}, {
		name: "铜山区",
		value: "320312",
		parent: "320300"
	}, {
		name: "丰县",
		value: "320321",
		parent: "320300"
	}, {
		name: "沛县",
		value: "320322",
		parent: "320300"
	}, {
		name: "睢宁县",
		value: "320324",
		parent: "320300"
	}, {
		name: "新沂市",
		value: "320381",
		parent: "320300"
	}, {
		name: "邳州市",
		value: "320382",
		parent: "320300"
	}, {
		name: "天宁区",
		value: "320402",
		parent: "320400"
	}, {
		name: "钟楼区",
		value: "320404",
		parent: "320400"
	}, {
		name: "新北区",
		value: "320411",
		parent: "320400"
	}, {
		name: "武进区",
		value: "320412",
		parent: "320400"
	}, {
		name: "金坛区",
		value: "320413",
		parent: "320400"
	}, {
		name: "溧阳市",
		value: "320481",
		parent: "320400"
	}, {
		name: "虎丘区",
		value: "320505",
		parent: "320500"
	}, {
		name: "吴中区",
		value: "320506",
		parent: "320500"
	}, {
		name: "相城区",
		value: "320507",
		parent: "320500"
	}, {
		name: "姑苏区",
		value: "320508",
		parent: "320500"
	}, {
		name: "吴江区",
		value: "320509",
		parent: "320500"
	}, {
		name: "常熟市",
		value: "320581",
		parent: "320500"
	}, {
		name: "张家港市",
		value: "320582",
		parent: "320500"
	}, {
		name: "昆山市",
		value: "320583",
		parent: "320500"
	}, {
		name: "太仓市",
		value: "320585",
		parent: "320500"
	}, {
		name: "崇川区",
		value: "320602",
		parent: "320600"
	}, {
		name: "港闸区",
		value: "320611",
		parent: "320600"
	}, {
		name: "通州区",
		value: "320612",
		parent: "320600"
	}, {
		name: "海安县",
		value: "320621",
		parent: "320600"
	}, {
		name: "如东县",
		value: "320623",
		parent: "320600"
	}, {
		name: "启东市",
		value: "320681",
		parent: "320600"
	}, {
		name: "如皋市",
		value: "320682",
		parent: "320600"
	}, {
		name: "海门市",
		value: "320684",
		parent: "320600"
	}, {
		name: "连云区",
		value: "320703",
		parent: "320700"
	}, {
		name: "海州区",
		value: "320706",
		parent: "320700"
	}, {
		name: "赣榆区",
		value: "320707",
		parent: "320700"
	}, {
		name: "东海县",
		value: "320722",
		parent: "320700"
	}, {
		name: "灌云县",
		value: "320723",
		parent: "320700"
	}, {
		name: "灌南县",
		value: "320724",
		parent: "320700"
	}, {
		name: "清河区",
		value: "320802",
		parent: "320800"
	}, {
		name: "淮安区",
		value: "320803",
		parent: "320800"
	}, {
		name: "淮阴区",
		value: "320804",
		parent: "320800"
	}, {
		name: "清浦区",
		value: "320811",
		parent: "320800"
	}, {
		name: "涟水县",
		value: "320826",
		parent: "320800"
	}, {
		name: "洪泽县",
		value: "320829",
		parent: "320800"
	}, {
		name: "盱眙县",
		value: "320830",
		parent: "320800"
	}, {
		name: "金湖县",
		value: "320831",
		parent: "320800"
	}, {
		name: "亭湖区",
		value: "320902",
		parent: "320900"
	}, {
		name: "盐都区",
		value: "320903",
		parent: "320900"
	}, {
		name: "大丰区",
		value: "320904",
		parent: "320900"
	}, {
		name: "响水县",
		value: "320921",
		parent: "320900"
	}, {
		name: "滨海县",
		value: "320922",
		parent: "320900"
	}, {
		name: "阜宁县",
		value: "320923",
		parent: "320900"
	}, {
		name: "射阳县",
		value: "320924",
		parent: "320900"
	}, {
		name: "建湖县",
		value: "320925",
		parent: "320900"
	}, {
		name: "东台市",
		value: "320981",
		parent: "320900"
	}, {
		name: "广陵区",
		value: "321002",
		parent: "321000"
	}, {
		name: "邗江区",
		value: "321003",
		parent: "321000"
	}, {
		name: "江都区",
		value: "321012",
		parent: "321000"
	}, {
		name: "宝应县",
		value: "321023",
		parent: "321000"
	}, {
		name: "仪征市",
		value: "321081",
		parent: "321000"
	}, {
		name: "高邮市",
		value: "321084",
		parent: "321000"
	}, {
		name: "京口区",
		value: "321102",
		parent: "321100"
	}, {
		name: "润州区",
		value: "321111",
		parent: "321100"
	}, {
		name: "丹徒区",
		value: "321112",
		parent: "321100"
	}, {
		name: "丹阳市",
		value: "321181",
		parent: "321100"
	}, {
		name: "扬中市",
		value: "321182",
		parent: "321100"
	}, {
		name: "句容市",
		value: "321183",
		parent: "321100"
	}, {
		name: "海陵区",
		value: "321202",
		parent: "321200"
	}, {
		name: "高港区",
		value: "321203",
		parent: "321200"
	}, {
		name: "姜堰区",
		value: "321204",
		parent: "321200"
	}, {
		name: "兴化市",
		value: "321281",
		parent: "321200"
	}, {
		name: "靖江市",
		value: "321282",
		parent: "321200"
	}, {
		name: "泰兴市",
		value: "321283",
		parent: "321200"
	}, {
		name: "宿城区",
		value: "321302",
		parent: "321300"
	}, {
		name: "宿豫区",
		value: "321311",
		parent: "321300"
	}, {
		name: "沭阳县",
		value: "321322",
		parent: "321300"
	}, {
		name: "泗阳县",
		value: "321323",
		parent: "321300"
	}, {
		name: "泗洪县",
		value: "321324",
		parent: "321300"
	}, {
		name: "杭州市",
		value: "330100",
		parent: "330000"
	}, {
		name: "宁波市",
		value: "330200",
		parent: "330000"
	}, {
		name: "温州市",
		value: "330300",
		parent: "330000"
	}, {
		name: "嘉兴市",
		value: "330400",
		parent: "330000"
	}, {
		name: "湖州市",
		value: "330500",
		parent: "330000"
	}, {
		name: "绍兴市",
		value: "330600",
		parent: "330000"
	}, {
		name: "金华市",
		value: "330700",
		parent: "330000"
	}, {
		name: "衢州市",
		value: "330800",
		parent: "330000"
	}, {
		name: "舟山市",
		value: "330900",
		parent: "330000"
	}, {
		name: "台州市",
		value: "331000",
		parent: "330000"
	}, {
		name: "丽水市",
		value: "331100",
		parent: "330000"
	}, {
		name: "上城区",
		value: "330102",
		parent: "330100"
	}, {
		name: "下城区",
		value: "330103",
		parent: "330100"
	}, {
		name: "江干区",
		value: "330104",
		parent: "330100"
	}, {
		name: "拱墅区",
		value: "330105",
		parent: "330100"
	}, {
		name: "西湖区",
		value: "330106",
		parent: "330100"
	}, {
		name: "滨江区",
		value: "330108",
		parent: "330100"
	}, {
		name: "萧山区",
		value: "330109",
		parent: "330100"
	}, {
		name: "余杭区",
		value: "330110",
		parent: "330100"
	}, {
		name: "富阳区",
		value: "330111",
		parent: "330100"
	}, {
		name: "桐庐县",
		value: "330122",
		parent: "330100"
	}, {
		name: "淳安县",
		value: "330127",
		parent: "330100"
	}, {
		name: "建德市",
		value: "330182",
		parent: "330100"
	}, {
		name: "临安市",
		value: "330185",
		parent: "330100"
	}, {
		name: "海曙区",
		value: "330203",
		parent: "330200"
	}, {
		name: "江东区",
		value: "330204",
		parent: "330200"
	}, {
		name: "江北区",
		value: "330205",
		parent: "330200"
	}, {
		name: "北仑区",
		value: "330206",
		parent: "330200"
	}, {
		name: "镇海区",
		value: "330211",
		parent: "330200"
	}, {
		name: "鄞州区",
		value: "330212",
		parent: "330200"
	}, {
		name: "象山县",
		value: "330225",
		parent: "330200"
	}, {
		name: "宁海县",
		value: "330226",
		parent: "330200"
	}, {
		name: "余姚市",
		value: "330281",
		parent: "330200"
	}, {
		name: "慈溪市",
		value: "330282",
		parent: "330200"
	}, {
		name: "奉化市",
		value: "330283",
		parent: "330200"
	}, {
		name: "鹿城区",
		value: "330302",
		parent: "330300"
	}, {
		name: "龙湾区",
		value: "330303",
		parent: "330300"
	}, {
		name: "瓯海区",
		value: "330304",
		parent: "330300"
	}, {
		name: "洞头区",
		value: "330305",
		parent: "330300"
	}, {
		name: "永嘉县",
		value: "330324",
		parent: "330300"
	}, {
		name: "平阳县",
		value: "330326",
		parent: "330300"
	}, {
		name: "苍南县",
		value: "330327",
		parent: "330300"
	}, {
		name: "文成县",
		value: "330328",
		parent: "330300"
	}, {
		name: "泰顺县",
		value: "330329",
		parent: "330300"
	}, {
		name: "瑞安市",
		value: "330381",
		parent: "330300"
	}, {
		name: "乐清市",
		value: "330382",
		parent: "330300"
	}, {
		name: "南湖区",
		value: "330402",
		parent: "330400"
	}, {
		name: "秀洲区",
		value: "330411",
		parent: "330400"
	}, {
		name: "嘉善县",
		value: "330421",
		parent: "330400"
	}, {
		name: "海盐县",
		value: "330424",
		parent: "330400"
	}, {
		name: "海宁市",
		value: "330481",
		parent: "330400"
	}, {
		name: "平湖市",
		value: "330482",
		parent: "330400"
	}, {
		name: "桐乡市",
		value: "330483",
		parent: "330400"
	}, {
		name: "吴兴区",
		value: "330502",
		parent: "330500"
	}, {
		name: "南浔区",
		value: "330503",
		parent: "330500"
	}, {
		name: "德清县",
		value: "330521",
		parent: "330500"
	}, {
		name: "长兴县",
		value: "330522",
		parent: "330500"
	}, {
		name: "安吉县",
		value: "330523",
		parent: "330500"
	}, {
		name: "越城区",
		value: "330602",
		parent: "330600"
	}, {
		name: "柯桥区",
		value: "330603",
		parent: "330600"
	}, {
		name: "上虞区",
		value: "330604",
		parent: "330600"
	}, {
		name: "新昌县",
		value: "330624",
		parent: "330600"
	}, {
		name: "诸暨市",
		value: "330681",
		parent: "330600"
	}, {
		name: "嵊州市",
		value: "330683",
		parent: "330600"
	}, {
		name: "婺城区",
		value: "330702",
		parent: "330700"
	}, {
		name: "金东区",
		value: "330703",
		parent: "330700"
	}, {
		name: "武义县",
		value: "330723",
		parent: "330700"
	}, {
		name: "浦江县",
		value: "330726",
		parent: "330700"
	}, {
		name: "磐安县",
		value: "330727",
		parent: "330700"
	}, {
		name: "兰溪市",
		value: "330781",
		parent: "330700"
	}, {
		name: "义乌市",
		value: "330782",
		parent: "330700"
	}, {
		name: "东阳市",
		value: "330783",
		parent: "330700"
	}, {
		name: "永康市",
		value: "330784",
		parent: "330700"
	}, {
		name: "柯城区",
		value: "330802",
		parent: "330800"
	}, {
		name: "衢江区",
		value: "330803",
		parent: "330800"
	}, {
		name: "常山县",
		value: "330822",
		parent: "330800"
	}, {
		name: "开化县",
		value: "330824",
		parent: "330800"
	}, {
		name: "龙游县",
		value: "330825",
		parent: "330800"
	}, {
		name: "江山市",
		value: "330881",
		parent: "330800"
	}, {
		name: "定海区",
		value: "330902",
		parent: "330900"
	}, {
		name: "普陀区",
		value: "330903",
		parent: "330900"
	}, {
		name: "岱山县",
		value: "330921",
		parent: "330900"
	}, {
		name: "嵊泗县",
		value: "330922",
		parent: "330900"
	}, {
		name: "椒江区",
		value: "331002",
		parent: "331000"
	}, {
		name: "黄岩区",
		value: "331003",
		parent: "331000"
	}, {
		name: "路桥区",
		value: "331004",
		parent: "331000"
	}, {
		name: "玉环县",
		value: "331021",
		parent: "331000"
	}, {
		name: "三门县",
		value: "331022",
		parent: "331000"
	}, {
		name: "天台县",
		value: "331023",
		parent: "331000"
	}, {
		name: "仙居县",
		value: "331024",
		parent: "331000"
	}, {
		name: "温岭市",
		value: "331081",
		parent: "331000"
	}, {
		name: "临海市",
		value: "331082",
		parent: "331000"
	}, {
		name: "莲都区",
		value: "331102",
		parent: "331100"
	}, {
		name: "青田县",
		value: "331121",
		parent: "331100"
	}, {
		name: "缙云县",
		value: "331122",
		parent: "331100"
	}, {
		name: "遂昌县",
		value: "331123",
		parent: "331100"
	}, {
		name: "松阳县",
		value: "331124",
		parent: "331100"
	}, {
		name: "云和县",
		value: "331125",
		parent: "331100"
	}, {
		name: "庆元县",
		value: "331126",
		parent: "331100"
	}, {
		name: "景宁畲族自治县",
		value: "331127",
		parent: "331100"
	}, {
		name: "龙泉市",
		value: "331181",
		parent: "331100"
	}, {
		name: "合肥市",
		value: "340100",
		parent: "340000"
	}, {
		name: "芜湖市",
		value: "340200",
		parent: "340000"
	}, {
		name: "蚌埠市",
		value: "340300",
		parent: "340000"
	}, {
		name: "淮南市",
		value: "340400",
		parent: "340000"
	}, {
		name: "马鞍山市",
		value: "340500",
		parent: "340000"
	}, {
		name: "淮北市",
		value: "340600",
		parent: "340000"
	}, {
		name: "铜陵市",
		value: "340700",
		parent: "340000"
	}, {
		name: "安庆市",
		value: "340800",
		parent: "340000"
	}, {
		name: "黄山市",
		value: "341000",
		parent: "340000"
	}, {
		name: "滁州市",
		value: "341100",
		parent: "340000"
	}, {
		name: "阜阳市",
		value: "341200",
		parent: "340000"
	}, {
		name: "宿州市",
		value: "341300",
		parent: "340000"
	}, {
		name: "六安市",
		value: "341500",
		parent: "340000"
	}, {
		name: "亳州市",
		value: "341600",
		parent: "340000"
	}, {
		name: "池州市",
		value: "341700",
		parent: "340000"
	}, {
		name: "宣城市",
		value: "341800",
		parent: "340000"
	}, {
		name: "瑶海区",
		value: "340102",
		parent: "340100"
	}, {
		name: "庐阳区",
		value: "340103",
		parent: "340100"
	}, {
		name: "蜀山区",
		value: "340104",
		parent: "340100"
	}, {
		name: "包河区",
		value: "340111",
		parent: "340100"
	}, {
		name: "长丰县",
		value: "340121",
		parent: "340100"
	}, {
		name: "肥东县",
		value: "340122",
		parent: "340100"
	}, {
		name: "肥西县",
		value: "340123",
		parent: "340100"
	}, {
		name: "庐江县",
		value: "340124",
		parent: "340100"
	}, {
		name: "巢湖市",
		value: "340181",
		parent: "340100"
	}, {
		name: "镜湖区",
		value: "340202",
		parent: "340200"
	}, {
		name: "弋江区",
		value: "340203",
		parent: "340200"
	}, {
		name: "鸠江区",
		value: "340207",
		parent: "340200"
	}, {
		name: "三山区",
		value: "340208",
		parent: "340200"
	}, {
		name: "芜湖县",
		value: "340221",
		parent: "340200"
	}, {
		name: "繁昌县",
		value: "340222",
		parent: "340200"
	}, {
		name: "南陵县",
		value: "340223",
		parent: "340200"
	}, {
		name: "无为县",
		value: "340225",
		parent: "340200"
	}, {
		name: "龙子湖区",
		value: "340302",
		parent: "340300"
	}, {
		name: "蚌山区",
		value: "340303",
		parent: "340300"
	}, {
		name: "禹会区",
		value: "340304",
		parent: "340300"
	}, {
		name: "淮上区",
		value: "340311",
		parent: "340300"
	}, {
		name: "怀远县",
		value: "340321",
		parent: "340300"
	}, {
		name: "五河县",
		value: "340322",
		parent: "340300"
	}, {
		name: "固镇县",
		value: "340323",
		parent: "340300"
	}, {
		name: "大通区",
		value: "340402",
		parent: "340400"
	}, {
		name: "田家庵区",
		value: "340403",
		parent: "340400"
	}, {
		name: "谢家集区",
		value: "340404",
		parent: "340400"
	}, {
		name: "八公山区",
		value: "340405",
		parent: "340400"
	}, {
		name: "潘集区",
		value: "340406",
		parent: "340400"
	}, {
		name: "凤台县",
		value: "340421",
		parent: "340400"
	}, {
		name: "花山区",
		value: "340503",
		parent: "340500"
	}, {
		name: "雨山区",
		value: "340504",
		parent: "340500"
	}, {
		name: "博望区",
		value: "340506",
		parent: "340500"
	}, {
		name: "当涂县",
		value: "340521",
		parent: "340500"
	}, {
		name: "含山县",
		value: "340522",
		parent: "340500"
	}, {
		name: "和县",
		value: "340523",
		parent: "340500"
	}, {
		name: "杜集区",
		value: "340602",
		parent: "340600"
	}, {
		name: "相山区",
		value: "340603",
		parent: "340600"
	}, {
		name: "烈山区",
		value: "340604",
		parent: "340600"
	}, {
		name: "濉溪县",
		value: "340621",
		parent: "340600"
	}, {
		name: "铜官山区",
		value: "340702",
		parent: "340700"
	}, {
		name: "狮子山区",
		value: "340703",
		parent: "340700"
	}, {
		name: "郊区",
		value: "340711",
		parent: "340700"
	}, {
		name: "铜陵县",
		value: "340721",
		parent: "340700"
	}, {
		name: "迎江区",
		value: "340802",
		parent: "340800"
	}, {
		name: "大观区",
		value: "340803",
		parent: "340800"
	}, {
		name: "宜秀区",
		value: "340811",
		parent: "340800"
	}, {
		name: "怀宁县",
		value: "340822",
		parent: "340800"
	}, {
		name: "枞阳县",
		value: "340823",
		parent: "340800"
	}, {
		name: "潜山县",
		value: "340824",
		parent: "340800"
	}, {
		name: "太湖县",
		value: "340825",
		parent: "340800"
	}, {
		name: "宿松县",
		value: "340826",
		parent: "340800"
	}, {
		name: "望江县",
		value: "340827",
		parent: "340800"
	}, {
		name: "岳西县",
		value: "340828",
		parent: "340800"
	}, {
		name: "桐城市",
		value: "340881",
		parent: "340800"
	}, {
		name: "屯溪区",
		value: "341002",
		parent: "341000"
	}, {
		name: "黄山区",
		value: "341003",
		parent: "341000"
	}, {
		name: "徽州区",
		value: "341004",
		parent: "341000"
	}, {
		name: "歙县",
		value: "341021",
		parent: "341000"
	}, {
		name: "休宁县",
		value: "341022",
		parent: "341000"
	}, {
		name: "黟县",
		value: "341023",
		parent: "341000"
	}, {
		name: "祁门县",
		value: "341024",
		parent: "341000"
	}, {
		name: "琅琊区",
		value: "341102",
		parent: "341100"
	}, {
		name: "南谯区",
		value: "341103",
		parent: "341100"
	}, {
		name: "来安县",
		value: "341122",
		parent: "341100"
	}, {
		name: "全椒县",
		value: "341124",
		parent: "341100"
	}, {
		name: "定远县",
		value: "341125",
		parent: "341100"
	}, {
		name: "凤阳县",
		value: "341126",
		parent: "341100"
	}, {
		name: "天长市",
		value: "341181",
		parent: "341100"
	}, {
		name: "明光市",
		value: "341182",
		parent: "341100"
	}, {
		name: "颍州区",
		value: "341202",
		parent: "341200"
	}, {
		name: "颍东区",
		value: "341203",
		parent: "341200"
	}, {
		name: "颍泉区",
		value: "341204",
		parent: "341200"
	}, {
		name: "临泉县",
		value: "341221",
		parent: "341200"
	}, {
		name: "太和县",
		value: "341222",
		parent: "341200"
	}, {
		name: "阜南县",
		value: "341225",
		parent: "341200"
	}, {
		name: "颍上县",
		value: "341226",
		parent: "341200"
	}, {
		name: "界首市",
		value: "341282",
		parent: "341200"
	}, {
		name: "埇桥区",
		value: "341302",
		parent: "341300"
	}, {
		name: "砀山县",
		value: "341321",
		parent: "341300"
	}, {
		name: "萧县",
		value: "341322",
		parent: "341300"
	}, {
		name: "灵璧县",
		value: "341323",
		parent: "341300"
	}, {
		name: "泗县",
		value: "341324",
		parent: "341300"
	}, {
		name: "金安区",
		value: "341502",
		parent: "341500"
	}, {
		name: "裕安区",
		value: "341503",
		parent: "341500"
	}, {
		name: "寿县",
		value: "341521",
		parent: "341500"
	}, {
		name: "霍邱县",
		value: "341522",
		parent: "341500"
	}, {
		name: "舒城县",
		value: "341523",
		parent: "341500"
	}, {
		name: "金寨县",
		value: "341524",
		parent: "341500"
	}, {
		name: "霍山县",
		value: "341525",
		parent: "341500"
	}, {
		name: "谯城区",
		value: "341602",
		parent: "341600"
	}, {
		name: "涡阳县",
		value: "341621",
		parent: "341600"
	}, {
		name: "蒙城县",
		value: "341622",
		parent: "341600"
	}, {
		name: "利辛县",
		value: "341623",
		parent: "341600"
	}, {
		name: "贵池区",
		value: "341702",
		parent: "341700"
	}, {
		name: "东至县",
		value: "341721",
		parent: "341700"
	}, {
		name: "石台县",
		value: "341722",
		parent: "341700"
	}, {
		name: "青阳县",
		value: "341723",
		parent: "341700"
	}, {
		name: "宣州区",
		value: "341802",
		parent: "341800"
	}, {
		name: "郎溪县",
		value: "341821",
		parent: "341800"
	}, {
		name: "广德县",
		value: "341822",
		parent: "341800"
	}, {
		name: "泾县",
		value: "341823",
		parent: "341800"
	}, {
		name: "绩溪县",
		value: "341824",
		parent: "341800"
	}, {
		name: "旌德县",
		value: "341825",
		parent: "341800"
	}, {
		name: "宁国市",
		value: "341881",
		parent: "341800"
	}, {
		name: "福州市",
		value: "350100",
		parent: "350000"
	}, {
		name: "厦门市",
		value: "350200",
		parent: "350000"
	}, {
		name: "莆田市",
		value: "350300",
		parent: "350000"
	}, {
		name: "三明市",
		value: "350400",
		parent: "350000"
	}, {
		name: "泉州市",
		value: "350500",
		parent: "350000"
	}, {
		name: "漳州市",
		value: "350600",
		parent: "350000"
	}, {
		name: "南平市",
		value: "350700",
		parent: "350000"
	}, {
		name: "龙岩市",
		value: "350800",
		parent: "350000"
	}, {
		name: "宁德市",
		value: "350900",
		parent: "350000"
	}, {
		name: "鼓楼区",
		value: "350102",
		parent: "350100"
	}, {
		name: "台江区",
		value: "350103",
		parent: "350100"
	}, {
		name: "仓山区",
		value: "350104",
		parent: "350100"
	}, {
		name: "马尾区",
		value: "350105",
		parent: "350100"
	}, {
		name: "晋安区",
		value: "350111",
		parent: "350100"
	}, {
		name: "闽侯县",
		value: "350121",
		parent: "350100"
	}, {
		name: "连江县",
		value: "350122",
		parent: "350100"
	}, {
		name: "罗源县",
		value: "350123",
		parent: "350100"
	}, {
		name: "闽清县",
		value: "350124",
		parent: "350100"
	}, {
		name: "永泰县",
		value: "350125",
		parent: "350100"
	}, {
		name: "平潭县",
		value: "350128",
		parent: "350100"
	}, {
		name: "福清市",
		value: "350181",
		parent: "350100"
	}, {
		name: "长乐市",
		value: "350182",
		parent: "350100"
	}, {
		name: "思明区",
		value: "350203",
		parent: "350200"
	}, {
		name: "海沧区",
		value: "350205",
		parent: "350200"
	}, {
		name: "湖里区",
		value: "350206",
		parent: "350200"
	}, {
		name: "集美区",
		value: "350211",
		parent: "350200"
	}, {
		name: "同安区",
		value: "350212",
		parent: "350200"
	}, {
		name: "翔安区",
		value: "350213",
		parent: "350200"
	}, {
		name: "城厢区",
		value: "350302",
		parent: "350300"
	}, {
		name: "涵江区",
		value: "350303",
		parent: "350300"
	}, {
		name: "荔城区",
		value: "350304",
		parent: "350300"
	}, {
		name: "秀屿区",
		value: "350305",
		parent: "350300"
	}, {
		name: "仙游县",
		value: "350322",
		parent: "350300"
	}, {
		name: "梅列区",
		value: "350402",
		parent: "350400"
	}, {
		name: "三元区",
		value: "350403",
		parent: "350400"
	}, {
		name: "明溪县",
		value: "350421",
		parent: "350400"
	}, {
		name: "清流县",
		value: "350423",
		parent: "350400"
	}, {
		name: "宁化县",
		value: "350424",
		parent: "350400"
	}, {
		name: "大田县",
		value: "350425",
		parent: "350400"
	}, {
		name: "尤溪县",
		value: "350426",
		parent: "350400"
	}, {
		name: "沙县",
		value: "350427",
		parent: "350400"
	}, {
		name: "将乐县",
		value: "350428",
		parent: "350400"
	}, {
		name: "泰宁县",
		value: "350429",
		parent: "350400"
	}, {
		name: "建宁县",
		value: "350430",
		parent: "350400"
	}, {
		name: "永安市",
		value: "350481",
		parent: "350400"
	}, {
		name: "鲤城区",
		value: "350502",
		parent: "350500"
	}, {
		name: "丰泽区",
		value: "350503",
		parent: "350500"
	}, {
		name: "洛江区",
		value: "350504",
		parent: "350500"
	}, {
		name: "泉港区",
		value: "350505",
		parent: "350500"
	}, {
		name: "惠安县",
		value: "350521",
		parent: "350500"
	}, {
		name: "安溪县",
		value: "350524",
		parent: "350500"
	}, {
		name: "永春县",
		value: "350525",
		parent: "350500"
	}, {
		name: "德化县",
		value: "350526",
		parent: "350500"
	}, {
		name: "金门县",
		value: "350527",
		parent: "350500"
	}, {
		name: "石狮市",
		value: "350581",
		parent: "350500"
	}, {
		name: "晋江市",
		value: "350582",
		parent: "350500"
	}, {
		name: "南安市",
		value: "350583",
		parent: "350500"
	}, {
		name: "芗城区",
		value: "350602",
		parent: "350600"
	}, {
		name: "龙文区",
		value: "350603",
		parent: "350600"
	}, {
		name: "云霄县",
		value: "350622",
		parent: "350600"
	}, {
		name: "漳浦县",
		value: "350623",
		parent: "350600"
	}, {
		name: "诏安县",
		value: "350624",
		parent: "350600"
	}, {
		name: "长泰县",
		value: "350625",
		parent: "350600"
	}, {
		name: "东山县",
		value: "350626",
		parent: "350600"
	}, {
		name: "南靖县",
		value: "350627",
		parent: "350600"
	}, {
		name: "平和县",
		value: "350628",
		parent: "350600"
	}, {
		name: "华安县",
		value: "350629",
		parent: "350600"
	}, {
		name: "龙海市",
		value: "350681",
		parent: "350600"
	}, {
		name: "延平区",
		value: "350702",
		parent: "350700"
	}, {
		name: "建阳区",
		value: "350703",
		parent: "350700"
	}, {
		name: "顺昌县",
		value: "350721",
		parent: "350700"
	}, {
		name: "浦城县",
		value: "350722",
		parent: "350700"
	}, {
		name: "光泽县",
		value: "350723",
		parent: "350700"
	}, {
		name: "松溪县",
		value: "350724",
		parent: "350700"
	}, {
		name: "政和县",
		value: "350725",
		parent: "350700"
	}, {
		name: "邵武市",
		value: "350781",
		parent: "350700"
	}, {
		name: "武夷山市",
		value: "350782",
		parent: "350700"
	}, {
		name: "建瓯市",
		value: "350783",
		parent: "350700"
	}, {
		name: "新罗区",
		value: "350802",
		parent: "350800"
	}, {
		name: "永定区",
		value: "350803",
		parent: "350800"
	}, {
		name: "长汀县",
		value: "350821",
		parent: "350800"
	}, {
		name: "上杭县",
		value: "350823",
		parent: "350800"
	}, {
		name: "武平县",
		value: "350824",
		parent: "350800"
	}, {
		name: "连城县",
		value: "350825",
		parent: "350800"
	}, {
		name: "漳平市",
		value: "350881",
		parent: "350800"
	}, {
		name: "蕉城区",
		value: "350902",
		parent: "350900"
	}, {
		name: "霞浦县",
		value: "350921",
		parent: "350900"
	}, {
		name: "古田县",
		value: "350922",
		parent: "350900"
	}, {
		name: "屏南县",
		value: "350923",
		parent: "350900"
	}, {
		name: "寿宁县",
		value: "350924",
		parent: "350900"
	}, {
		name: "周宁县",
		value: "350925",
		parent: "350900"
	}, {
		name: "柘荣县",
		value: "350926",
		parent: "350900"
	}, {
		name: "福安市",
		value: "350981",
		parent: "350900"
	}, {
		name: "福鼎市",
		value: "350982",
		parent: "350900"
	}, {
		name: "南昌市",
		value: "360100",
		parent: "360000"
	}, {
		name: "景德镇市",
		value: "360200",
		parent: "360000"
	}, {
		name: "萍乡市",
		value: "360300",
		parent: "360000"
	}, {
		name: "九江市",
		value: "360400",
		parent: "360000"
	}, {
		name: "新余市",
		value: "360500",
		parent: "360000"
	}, {
		name: "鹰潭市",
		value: "360600",
		parent: "360000"
	}, {
		name: "赣州市",
		value: "360700",
		parent: "360000"
	}, {
		name: "吉安市",
		value: "360800",
		parent: "360000"
	}, {
		name: "宜春市",
		value: "360900",
		parent: "360000"
	}, {
		name: "抚州市",
		value: "361000",
		parent: "360000"
	}, {
		name: "上饶市",
		value: "361100",
		parent: "360000"
	}, {
		name: "东湖区",
		value: "360102",
		parent: "360100"
	}, {
		name: "西湖区",
		value: "360103",
		parent: "360100"
	}, {
		name: "青云谱区",
		value: "360104",
		parent: "360100"
	}, {
		name: "湾里区",
		value: "360105",
		parent: "360100"
	}, {
		name: "青山湖区",
		value: "360111",
		parent: "360100"
	}, {
		name: "新建区",
		value: "360112",
		parent: "360100"
	}, {
		name: "南昌县",
		value: "360121",
		parent: "360100"
	}, {
		name: "安义县",
		value: "360123",
		parent: "360100"
	}, {
		name: "进贤县",
		value: "360124",
		parent: "360100"
	}, {
		name: "昌江区",
		value: "360202",
		parent: "360200"
	}, {
		name: "珠山区",
		value: "360203",
		parent: "360200"
	}, {
		name: "浮梁县",
		value: "360222",
		parent: "360200"
	}, {
		name: "乐平市",
		value: "360281",
		parent: "360200"
	}, {
		name: "安源区",
		value: "360302",
		parent: "360300"
	}, {
		name: "湘东区",
		value: "360313",
		parent: "360300"
	}, {
		name: "莲花县",
		value: "360321",
		parent: "360300"
	}, {
		name: "上栗县",
		value: "360322",
		parent: "360300"
	}, {
		name: "芦溪县",
		value: "360323",
		parent: "360300"
	}, {
		name: "庐山区",
		value: "360402",
		parent: "360400"
	}, {
		name: "浔阳区",
		value: "360403",
		parent: "360400"
	}, {
		name: "九江县",
		value: "360421",
		parent: "360400"
	}, {
		name: "武宁县",
		value: "360423",
		parent: "360400"
	}, {
		name: "修水县",
		value: "360424",
		parent: "360400"
	}, {
		name: "永修县",
		value: "360425",
		parent: "360400"
	}, {
		name: "德安县",
		value: "360426",
		parent: "360400"
	}, {
		name: "星子县",
		value: "360427",
		parent: "360400"
	}, {
		name: "都昌县",
		value: "360428",
		parent: "360400"
	}, {
		name: "湖口县",
		value: "360429",
		parent: "360400"
	}, {
		name: "彭泽县",
		value: "360430",
		parent: "360400"
	}, {
		name: "瑞昌市",
		value: "360481",
		parent: "360400"
	}, {
		name: "共青城市",
		value: "360482",
		parent: "360400"
	}, {
		name: "渝水区",
		value: "360502",
		parent: "360500"
	}, {
		name: "分宜县",
		value: "360521",
		parent: "360500"
	}, {
		name: "月湖区",
		value: "360602",
		parent: "360600"
	}, {
		name: "余江县",
		value: "360622",
		parent: "360600"
	}, {
		name: "贵溪市",
		value: "360681",
		parent: "360600"
	}, {
		name: "章贡区",
		value: "360702",
		parent: "360700"
	}, {
		name: "南康区",
		value: "360703",
		parent: "360700"
	}, {
		name: "赣县",
		value: "360721",
		parent: "360700"
	}, {
		name: "信丰县",
		value: "360722",
		parent: "360700"
	}, {
		name: "大余县",
		value: "360723",
		parent: "360700"
	}, {
		name: "上犹县",
		value: "360724",
		parent: "360700"
	}, {
		name: "崇义县",
		value: "360725",
		parent: "360700"
	}, {
		name: "安远县",
		value: "360726",
		parent: "360700"
	}, {
		name: "龙南县",
		value: "360727",
		parent: "360700"
	}, {
		name: "定南县",
		value: "360728",
		parent: "360700"
	}, {
		name: "全南县",
		value: "360729",
		parent: "360700"
	}, {
		name: "宁都县",
		value: "360730",
		parent: "360700"
	}, {
		name: "于都县",
		value: "360731",
		parent: "360700"
	}, {
		name: "兴国县",
		value: "360732",
		parent: "360700"
	}, {
		name: "会昌县",
		value: "360733",
		parent: "360700"
	}, {
		name: "寻乌县",
		value: "360734",
		parent: "360700"
	}, {
		name: "石城县",
		value: "360735",
		parent: "360700"
	}, {
		name: "瑞金市",
		value: "360781",
		parent: "360700"
	}, {
		name: "吉州区",
		value: "360802",
		parent: "360800"
	}, {
		name: "青原区",
		value: "360803",
		parent: "360800"
	}, {
		name: "吉安县",
		value: "360821",
		parent: "360800"
	}, {
		name: "吉水县",
		value: "360822",
		parent: "360800"
	}, {
		name: "峡江县",
		value: "360823",
		parent: "360800"
	}, {
		name: "新干县",
		value: "360824",
		parent: "360800"
	}, {
		name: "永丰县",
		value: "360825",
		parent: "360800"
	}, {
		name: "泰和县",
		value: "360826",
		parent: "360800"
	}, {
		name: "遂川县",
		value: "360827",
		parent: "360800"
	}, {
		name: "万安县",
		value: "360828",
		parent: "360800"
	}, {
		name: "安福县",
		value: "360829",
		parent: "360800"
	}, {
		name: "永新县",
		value: "360830",
		parent: "360800"
	}, {
		name: "井冈山市",
		value: "360881",
		parent: "360800"
	}, {
		name: "袁州区",
		value: "360902",
		parent: "360900"
	}, {
		name: "奉新县",
		value: "360921",
		parent: "360900"
	}, {
		name: "万载县",
		value: "360922",
		parent: "360900"
	}, {
		name: "上高县",
		value: "360923",
		parent: "360900"
	}, {
		name: "宜丰县",
		value: "360924",
		parent: "360900"
	}, {
		name: "靖安县",
		value: "360925",
		parent: "360900"
	}, {
		name: "铜鼓县",
		value: "360926",
		parent: "360900"
	}, {
		name: "丰城市",
		value: "360981",
		parent: "360900"
	}, {
		name: "樟树市",
		value: "360982",
		parent: "360900"
	}, {
		name: "高安市",
		value: "360983",
		parent: "360900"
	}, {
		name: "临川区",
		value: "361002",
		parent: "361000"
	}, {
		name: "南城县",
		value: "361021",
		parent: "361000"
	}, {
		name: "黎川县",
		value: "361022",
		parent: "361000"
	}, {
		name: "南丰县",
		value: "361023",
		parent: "361000"
	}, {
		name: "崇仁县",
		value: "361024",
		parent: "361000"
	}, {
		name: "乐安县",
		value: "361025",
		parent: "361000"
	}, {
		name: "宜黄县",
		value: "361026",
		parent: "361000"
	}, {
		name: "金溪县",
		value: "361027",
		parent: "361000"
	}, {
		name: "资溪县",
		value: "361028",
		parent: "361000"
	}, {
		name: "东乡县",
		value: "361029",
		parent: "361000"
	}, {
		name: "广昌县",
		value: "361030",
		parent: "361000"
	}, {
		name: "信州区",
		value: "361102",
		parent: "361100"
	}, {
		name: "广丰区",
		value: "361103",
		parent: "361100"
	}, {
		name: "上饶县",
		value: "361121",
		parent: "361100"
	}, {
		name: "玉山县",
		value: "361123",
		parent: "361100"
	}, {
		name: "铅山县",
		value: "361124",
		parent: "361100"
	}, {
		name: "横峰县",
		value: "361125",
		parent: "361100"
	}, {
		name: "弋阳县",
		value: "361126",
		parent: "361100"
	}, {
		name: "余干县",
		value: "361127",
		parent: "361100"
	}, {
		name: "鄱阳县",
		value: "361128",
		parent: "361100"
	}, {
		name: "万年县",
		value: "361129",
		parent: "361100"
	}, {
		name: "婺源县",
		value: "361130",
		parent: "361100"
	}, {
		name: "德兴市",
		value: "361181",
		parent: "361100"
	}, {
		name: "济南市",
		value: "370100",
		parent: "370000"
	}, {
		name: "青岛市",
		value: "370200",
		parent: "370000"
	}, {
		name: "淄博市",
		value: "370300",
		parent: "370000"
	}, {
		name: "枣庄市",
		value: "370400",
		parent: "370000"
	}, {
		name: "东营市",
		value: "370500",
		parent: "370000"
	}, {
		name: "烟台市",
		value: "370600",
		parent: "370000"
	}, {
		name: "潍坊市",
		value: "370700",
		parent: "370000"
	}, {
		name: "济宁市",
		value: "370800",
		parent: "370000"
	}, {
		name: "泰安市",
		value: "370900",
		parent: "370000"
	}, {
		name: "威海市",
		value: "371000",
		parent: "370000"
	}, {
		name: "日照市",
		value: "371100",
		parent: "370000"
	}, {
		name: "莱芜市",
		value: "371200",
		parent: "370000"
	}, {
		name: "临沂市",
		value: "371300",
		parent: "370000"
	}, {
		name: "德州市",
		value: "371400",
		parent: "370000"
	}, {
		name: "聊城市",
		value: "371500",
		parent: "370000"
	}, {
		name: "滨州市",
		value: "371600",
		parent: "370000"
	}, {
		name: "菏泽市",
		value: "371700",
		parent: "370000"
	}, {
		name: "历下区",
		value: "370102",
		parent: "370100"
	}, {
		name: "市中区",
		value: "370103",
		parent: "370100"
	}, {
		name: "槐荫区",
		value: "370104",
		parent: "370100"
	}, {
		name: "天桥区",
		value: "370105",
		parent: "370100"
	}, {
		name: "历城区",
		value: "370112",
		parent: "370100"
	}, {
		name: "长清区",
		value: "370113",
		parent: "370100"
	}, {
		name: "平阴县",
		value: "370124",
		parent: "370100"
	}, {
		name: "济阳县",
		value: "370125",
		parent: "370100"
	}, {
		name: "商河县",
		value: "370126",
		parent: "370100"
	}, {
		name: "章丘市",
		value: "370181",
		parent: "370100"
	}, {
		name: "市南区",
		value: "370202",
		parent: "370200"
	}, {
		name: "市北区",
		value: "370203",
		parent: "370200"
	}, {
		name: "黄岛区",
		value: "370211",
		parent: "370200"
	}, {
		name: "崂山区",
		value: "370212",
		parent: "370200"
	}, {
		name: "李沧区",
		value: "370213",
		parent: "370200"
	}, {
		name: "城阳区",
		value: "370214",
		parent: "370200"
	}, {
		name: "胶州市",
		value: "370281",
		parent: "370200"
	}, {
		name: "即墨市",
		value: "370282",
		parent: "370200"
	}, {
		name: "平度市",
		value: "370283",
		parent: "370200"
	}, {
		name: "莱西市",
		value: "370285",
		parent: "370200"
	}, {
		name: "淄川区",
		value: "370302",
		parent: "370300"
	}, {
		name: "张店区",
		value: "370303",
		parent: "370300"
	}, {
		name: "博山区",
		value: "370304",
		parent: "370300"
	}, {
		name: "临淄区",
		value: "370305",
		parent: "370300"
	}, {
		name: "周村区",
		value: "370306",
		parent: "370300"
	}, {
		name: "桓台县",
		value: "370321",
		parent: "370300"
	}, {
		name: "高青县",
		value: "370322",
		parent: "370300"
	}, {
		name: "沂源县",
		value: "370323",
		parent: "370300"
	}, {
		name: "市中区",
		value: "370402",
		parent: "370400"
	}, {
		name: "薛城区",
		value: "370403",
		parent: "370400"
	}, {
		name: "峄城区",
		value: "370404",
		parent: "370400"
	}, {
		name: "台儿庄区",
		value: "370405",
		parent: "370400"
	}, {
		name: "山亭区",
		value: "370406",
		parent: "370400"
	}, {
		name: "滕州市",
		value: "370481",
		parent: "370400"
	}, {
		name: "东营区",
		value: "370502",
		parent: "370500"
	}, {
		name: "河口区",
		value: "370503",
		parent: "370500"
	}, {
		name: "垦利县",
		value: "370521",
		parent: "370500"
	}, {
		name: "利津县",
		value: "370522",
		parent: "370500"
	}, {
		name: "广饶县",
		value: "370523",
		parent: "370500"
	}, {
		name: "芝罘区",
		value: "370602",
		parent: "370600"
	}, {
		name: "福山区",
		value: "370611",
		parent: "370600"
	}, {
		name: "牟平区",
		value: "370612",
		parent: "370600"
	}, {
		name: "莱山区",
		value: "370613",
		parent: "370600"
	}, {
		name: "长岛县",
		value: "370634",
		parent: "370600"
	}, {
		name: "龙口市",
		value: "370681",
		parent: "370600"
	}, {
		name: "莱阳市",
		value: "370682",
		parent: "370600"
	}, {
		name: "莱州市",
		value: "370683",
		parent: "370600"
	}, {
		name: "蓬莱市",
		value: "370684",
		parent: "370600"
	}, {
		name: "招远市",
		value: "370685",
		parent: "370600"
	}, {
		name: "栖霞市",
		value: "370686",
		parent: "370600"
	}, {
		name: "海阳市",
		value: "370687",
		parent: "370600"
	}, {
		name: "潍城区",
		value: "370702",
		parent: "370700"
	}, {
		name: "寒亭区",
		value: "370703",
		parent: "370700"
	}, {
		name: "坊子区",
		value: "370704",
		parent: "370700"
	}, {
		name: "奎文区",
		value: "370705",
		parent: "370700"
	}, {
		name: "临朐县",
		value: "370724",
		parent: "370700"
	}, {
		name: "昌乐县",
		value: "370725",
		parent: "370700"
	}, {
		name: "青州市",
		value: "370781",
		parent: "370700"
	}, {
		name: "诸城市",
		value: "370782",
		parent: "370700"
	}, {
		name: "寿光市",
		value: "370783",
		parent: "370700"
	}, {
		name: "安丘市",
		value: "370784",
		parent: "370700"
	}, {
		name: "高密市",
		value: "370785",
		parent: "370700"
	}, {
		name: "昌邑市",
		value: "370786",
		parent: "370700"
	}, {
		name: "任城区",
		value: "370811",
		parent: "370800"
	}, {
		name: "兖州区",
		value: "370812",
		parent: "370800"
	}, {
		name: "微山县",
		value: "370826",
		parent: "370800"
	}, {
		name: "鱼台县",
		value: "370827",
		parent: "370800"
	}, {
		name: "金乡县",
		value: "370828",
		parent: "370800"
	}, {
		name: "嘉祥县",
		value: "370829",
		parent: "370800"
	}, {
		name: "汶上县",
		value: "370830",
		parent: "370800"
	}, {
		name: "泗水县",
		value: "370831",
		parent: "370800"
	}, {
		name: "梁山县",
		value: "370832",
		parent: "370800"
	}, {
		name: "曲阜市",
		value: "370881",
		parent: "370800"
	}, {
		name: "邹城市",
		value: "370883",
		parent: "370800"
	}, {
		name: "泰山区",
		value: "370902",
		parent: "370900"
	}, {
		name: "岱岳区",
		value: "370911",
		parent: "370900"
	}, {
		name: "宁阳县",
		value: "370921",
		parent: "370900"
	}, {
		name: "东平县",
		value: "370923",
		parent: "370900"
	}, {
		name: "新泰市",
		value: "370982",
		parent: "370900"
	}, {
		name: "肥城市",
		value: "370983",
		parent: "370900"
	}, {
		name: "环翠区",
		value: "371002",
		parent: "371000"
	}, {
		name: "文登区",
		value: "371003",
		parent: "371000"
	}, {
		name: "荣成市",
		value: "371082",
		parent: "371000"
	}, {
		name: "乳山市",
		value: "371083",
		parent: "371000"
	}, {
		name: "东港区",
		value: "371102",
		parent: "371100"
	}, {
		name: "岚山区",
		value: "371103",
		parent: "371100"
	}, {
		name: "五莲县",
		value: "371121",
		parent: "371100"
	}, {
		name: "莒县",
		value: "371122",
		parent: "371100"
	}, {
		name: "莱城区",
		value: "371202",
		parent: "371200"
	}, {
		name: "钢城区",
		value: "371203",
		parent: "371200"
	}, {
		name: "兰山区",
		value: "371302",
		parent: "371300"
	}, {
		name: "罗庄区",
		value: "371311",
		parent: "371300"
	}, {
		name: "河东区",
		value: "371312",
		parent: "371300"
	}, {
		name: "沂南县",
		value: "371321",
		parent: "371300"
	}, {
		name: "郯城县",
		value: "371322",
		parent: "371300"
	}, {
		name: "沂水县",
		value: "371323",
		parent: "371300"
	}, {
		name: "兰陵县",
		value: "371324",
		parent: "371300"
	}, {
		name: "费县",
		value: "371325",
		parent: "371300"
	}, {
		name: "平邑县",
		value: "371326",
		parent: "371300"
	}, {
		name: "莒南县",
		value: "371327",
		parent: "371300"
	}, {
		name: "蒙阴县",
		value: "371328",
		parent: "371300"
	}, {
		name: "临沭县",
		value: "371329",
		parent: "371300"
	}, {
		name: "德城区",
		value: "371402",
		parent: "371400"
	}, {
		name: "陵城区",
		value: "371403",
		parent: "371400"
	}, {
		name: "宁津县",
		value: "371422",
		parent: "371400"
	}, {
		name: "庆云县",
		value: "371423",
		parent: "371400"
	}, {
		name: "临邑县",
		value: "371424",
		parent: "371400"
	}, {
		name: "齐河县",
		value: "371425",
		parent: "371400"
	}, {
		name: "平原县",
		value: "371426",
		parent: "371400"
	}, {
		name: "夏津县",
		value: "371427",
		parent: "371400"
	}, {
		name: "武城县",
		value: "371428",
		parent: "371400"
	}, {
		name: "乐陵市",
		value: "371481",
		parent: "371400"
	}, {
		name: "禹城市",
		value: "371482",
		parent: "371400"
	}, {
		name: "东昌府区",
		value: "371502",
		parent: "371500"
	}, {
		name: "阳谷县",
		value: "371521",
		parent: "371500"
	}, {
		name: "莘县",
		value: "371522",
		parent: "371500"
	}, {
		name: "茌平县",
		value: "371523",
		parent: "371500"
	}, {
		name: "东阿县",
		value: "371524",
		parent: "371500"
	}, {
		name: "冠县",
		value: "371525",
		parent: "371500"
	}, {
		name: "高唐县",
		value: "371526",
		parent: "371500"
	}, {
		name: "临清市",
		value: "371581",
		parent: "371500"
	}, {
		name: "滨城区",
		value: "371602",
		parent: "371600"
	}, {
		name: "沾化区",
		value: "371603",
		parent: "371600"
	}, {
		name: "惠民县",
		value: "371621",
		parent: "371600"
	}, {
		name: "阳信县",
		value: "371622",
		parent: "371600"
	}, {
		name: "无棣县",
		value: "371623",
		parent: "371600"
	}, {
		name: "博兴县",
		value: "371625",
		parent: "371600"
	}, {
		name: "邹平县",
		value: "371626",
		parent: "371600"
	}, {
		name: "牡丹区",
		value: "371702",
		parent: "371700"
	}, {
		name: "曹县",
		value: "371721",
		parent: "371700"
	}, {
		name: "单县",
		value: "371722",
		parent: "371700"
	}, {
		name: "成武县",
		value: "371723",
		parent: "371700"
	}, {
		name: "巨野县",
		value: "371724",
		parent: "371700"
	}, {
		name: "郓城县",
		value: "371725",
		parent: "371700"
	}, {
		name: "鄄城县",
		value: "371726",
		parent: "371700"
	}, {
		name: "定陶县",
		value: "371727",
		parent: "371700"
	}, {
		name: "东明县",
		value: "371728",
		parent: "371700"
	}, {
		name: "郑州市",
		value: "410100",
		parent: "410000"
	}, {
		name: "开封市",
		value: "410200",
		parent: "410000"
	}, {
		name: "洛阳市",
		value: "410300",
		parent: "410000"
	}, {
		name: "平顶山市",
		value: "410400",
		parent: "410000"
	}, {
		name: "安阳市",
		value: "410500",
		parent: "410000"
	}, {
		name: "鹤壁市",
		value: "410600",
		parent: "410000"
	}, {
		name: "新乡市",
		value: "410700",
		parent: "410000"
	}, {
		name: "焦作市",
		value: "410800",
		parent: "410000"
	}, {
		name: "濮阳市",
		value: "410900",
		parent: "410000"
	}, {
		name: "许昌市",
		value: "411000",
		parent: "410000"
	}, {
		name: "漯河市",
		value: "411100",
		parent: "410000"
	}, {
		name: "三门峡市",
		value: "411200",
		parent: "410000"
	}, {
		name: "南阳市",
		value: "411300",
		parent: "410000"
	}, {
		name: "商丘市",
		value: "411400",
		parent: "410000"
	}, {
		name: "信阳市",
		value: "411500",
		parent: "410000"
	}, {
		name: "周口市",
		value: "411600",
		parent: "410000"
	}, {
		name: "驻马店市",
		value: "411700",
		parent: "410000"
	}, {
		name: "济源市",
		value: "419001",
		parent: "410000"
	}, {
		name: "中原区",
		value: "410102",
		parent: "410100"
	}, {
		name: "二七区",
		value: "410103",
		parent: "410100"
	}, {
		name: "管城回族区",
		value: "410104",
		parent: "410100"
	}, {
		name: "金水区",
		value: "410105",
		parent: "410100"
	}, {
		name: "上街区",
		value: "410106",
		parent: "410100"
	}, {
		name: "惠济区",
		value: "410108",
		parent: "410100"
	}, {
		name: "中牟县",
		value: "410122",
		parent: "410100"
	}, {
		name: "巩义市",
		value: "410181",
		parent: "410100"
	}, {
		name: "荥阳市",
		value: "410182",
		parent: "410100"
	}, {
		name: "新密市",
		value: "410183",
		parent: "410100"
	}, {
		name: "新郑市",
		value: "410184",
		parent: "410100"
	}, {
		name: "登封市",
		value: "410185",
		parent: "410100"
	}, {
		name: "龙亭区",
		value: "410202",
		parent: "410200"
	}, {
		name: "顺河回族区",
		value: "410203",
		parent: "410200"
	}, {
		name: "鼓楼区",
		value: "410204",
		parent: "410200"
	}, {
		name: "禹王台区",
		value: "410205",
		parent: "410200"
	}, {
		name: "金明区",
		value: "410211",
		parent: "410200"
	}, {
		name: "祥符区",
		value: "410212",
		parent: "410200"
	}, {
		name: "杞县",
		value: "410221",
		parent: "410200"
	}, {
		name: "通许县",
		value: "410222",
		parent: "410200"
	}, {
		name: "尉氏县",
		value: "410223",
		parent: "410200"
	}, {
		name: "兰考县",
		value: "410225",
		parent: "410200"
	}, {
		name: "老城区",
		value: "410302",
		parent: "410300"
	}, {
		name: "西工区",
		value: "410303",
		parent: "410300"
	}, {
		name: "瀍河回族区",
		value: "410304",
		parent: "410300"
	}, {
		name: "涧西区",
		value: "410305",
		parent: "410300"
	}, {
		name: "吉利区",
		value: "410306",
		parent: "410300"
	}, {
		name: "洛龙区",
		value: "410311",
		parent: "410300"
	}, {
		name: "孟津县",
		value: "410322",
		parent: "410300"
	}, {
		name: "新安县",
		value: "410323",
		parent: "410300"
	}, {
		name: "栾川县",
		value: "410324",
		parent: "410300"
	}, {
		name: "嵩县",
		value: "410325",
		parent: "410300"
	}, {
		name: "汝阳县",
		value: "410326",
		parent: "410300"
	}, {
		name: "宜阳县",
		value: "410327",
		parent: "410300"
	}, {
		name: "洛宁县",
		value: "410328",
		parent: "410300"
	}, {
		name: "伊川县",
		value: "410329",
		parent: "410300"
	}, {
		name: "偃师市",
		value: "410381",
		parent: "410300"
	}, {
		name: "新华区",
		value: "410402",
		parent: "410400"
	}, {
		name: "卫东区",
		value: "410403",
		parent: "410400"
	}, {
		name: "石龙区",
		value: "410404",
		parent: "410400"
	}, {
		name: "湛河区",
		value: "410411",
		parent: "410400"
	}, {
		name: "宝丰县",
		value: "410421",
		parent: "410400"
	}, {
		name: "叶县",
		value: "410422",
		parent: "410400"
	}, {
		name: "鲁山县",
		value: "410423",
		parent: "410400"
	}, {
		name: "郏县",
		value: "410425",
		parent: "410400"
	}, {
		name: "舞钢市",
		value: "410481",
		parent: "410400"
	}, {
		name: "汝州市",
		value: "410482",
		parent: "410400"
	}, {
		name: "文峰区",
		value: "410502",
		parent: "410500"
	}, {
		name: "北关区",
		value: "410503",
		parent: "410500"
	}, {
		name: "殷都区",
		value: "410505",
		parent: "410500"
	}, {
		name: "龙安区",
		value: "410506",
		parent: "410500"
	}, {
		name: "安阳县",
		value: "410522",
		parent: "410500"
	}, {
		name: "汤阴县",
		value: "410523",
		parent: "410500"
	}, {
		name: "滑县",
		value: "410526",
		parent: "410500"
	}, {
		name: "内黄县",
		value: "410527",
		parent: "410500"
	}, {
		name: "林州市",
		value: "410581",
		parent: "410500"
	}, {
		name: "鹤山区",
		value: "410602",
		parent: "410600"
	}, {
		name: "山城区",
		value: "410603",
		parent: "410600"
	}, {
		name: "淇滨区",
		value: "410611",
		parent: "410600"
	}, {
		name: "浚县",
		value: "410621",
		parent: "410600"
	}, {
		name: "淇县",
		value: "410622",
		parent: "410600"
	}, {
		name: "红旗区",
		value: "410702",
		parent: "410700"
	}, {
		name: "卫滨区",
		value: "410703",
		parent: "410700"
	}, {
		name: "凤泉区",
		value: "410704",
		parent: "410700"
	}, {
		name: "牧野区",
		value: "410711",
		parent: "410700"
	}, {
		name: "新乡县",
		value: "410721",
		parent: "410700"
	}, {
		name: "获嘉县",
		value: "410724",
		parent: "410700"
	}, {
		name: "原阳县",
		value: "410725",
		parent: "410700"
	}, {
		name: "延津县",
		value: "410726",
		parent: "410700"
	}, {
		name: "封丘县",
		value: "410727",
		parent: "410700"
	}, {
		name: "长垣县",
		value: "410728",
		parent: "410700"
	}, {
		name: "卫辉市",
		value: "410781",
		parent: "410700"
	}, {
		name: "辉县市",
		value: "410782",
		parent: "410700"
	}, {
		name: "解放区",
		value: "410802",
		parent: "410800"
	}, {
		name: "中站区",
		value: "410803",
		parent: "410800"
	}, {
		name: "马村区",
		value: "410804",
		parent: "410800"
	}, {
		name: "山阳区",
		value: "410811",
		parent: "410800"
	}, {
		name: "修武县",
		value: "410821",
		parent: "410800"
	}, {
		name: "博爱县",
		value: "410822",
		parent: "410800"
	}, {
		name: "武陟县",
		value: "410823",
		parent: "410800"
	}, {
		name: "温县",
		value: "410825",
		parent: "410800"
	}, {
		name: "沁阳市",
		value: "410882",
		parent: "410800"
	}, {
		name: "孟州市",
		value: "410883",
		parent: "410800"
	}, {
		name: "华龙区",
		value: "410902",
		parent: "410900"
	}, {
		name: "清丰县",
		value: "410922",
		parent: "410900"
	}, {
		name: "南乐县",
		value: "410923",
		parent: "410900"
	}, {
		name: "范县",
		value: "410926",
		parent: "410900"
	}, {
		name: "台前县",
		value: "410927",
		parent: "410900"
	}, {
		name: "濮阳县",
		value: "410928",
		parent: "410900"
	}, {
		name: "魏都区",
		value: "411002",
		parent: "411000"
	}, {
		name: "许昌县",
		value: "411023",
		parent: "411000"
	}, {
		name: "鄢陵县",
		value: "411024",
		parent: "411000"
	}, {
		name: "襄城县",
		value: "411025",
		parent: "411000"
	}, {
		name: "禹州市",
		value: "411081",
		parent: "411000"
	}, {
		name: "长葛市",
		value: "411082",
		parent: "411000"
	}, {
		name: "源汇区",
		value: "411102",
		parent: "411100"
	}, {
		name: "郾城区",
		value: "411103",
		parent: "411100"
	}, {
		name: "召陵区",
		value: "411104",
		parent: "411100"
	}, {
		name: "舞阳县",
		value: "411121",
		parent: "411100"
	}, {
		name: "临颍县",
		value: "411122",
		parent: "411100"
	}, {
		name: "湖滨区",
		value: "411202",
		parent: "411200"
	}, {
		name: "渑池县",
		value: "411221",
		parent: "411200"
	}, {
		name: "陕县",
		value: "411222",
		parent: "411200"
	}, {
		name: "卢氏县",
		value: "411224",
		parent: "411200"
	}, {
		name: "义马市",
		value: "411281",
		parent: "411200"
	}, {
		name: "灵宝市",
		value: "411282",
		parent: "411200"
	}, {
		name: "宛城区",
		value: "411302",
		parent: "411300"
	}, {
		name: "卧龙区",
		value: "411303",
		parent: "411300"
	}, {
		name: "南召县",
		value: "411321",
		parent: "411300"
	}, {
		name: "方城县",
		value: "411322",
		parent: "411300"
	}, {
		name: "西峡县",
		value: "411323",
		parent: "411300"
	}, {
		name: "镇平县",
		value: "411324",
		parent: "411300"
	}, {
		name: "内乡县",
		value: "411325",
		parent: "411300"
	}, {
		name: "淅川县",
		value: "411326",
		parent: "411300"
	}, {
		name: "社旗县",
		value: "411327",
		parent: "411300"
	}, {
		name: "唐河县",
		value: "411328",
		parent: "411300"
	}, {
		name: "新野县",
		value: "411329",
		parent: "411300"
	}, {
		name: "桐柏县",
		value: "411330",
		parent: "411300"
	}, {
		name: "邓州市",
		value: "411381",
		parent: "411300"
	}, {
		name: "梁园区",
		value: "411402",
		parent: "411400"
	}, {
		name: "睢阳区",
		value: "411403",
		parent: "411400"
	}, {
		name: "民权县",
		value: "411421",
		parent: "411400"
	}, {
		name: "睢县",
		value: "411422",
		parent: "411400"
	}, {
		name: "宁陵县",
		value: "411423",
		parent: "411400"
	}, {
		name: "柘城县",
		value: "411424",
		parent: "411400"
	}, {
		name: "虞城县",
		value: "411425",
		parent: "411400"
	}, {
		name: "夏邑县",
		value: "411426",
		parent: "411400"
	}, {
		name: "永城市",
		value: "411481",
		parent: "411400"
	}, {
		name: "浉河区",
		value: "411502",
		parent: "411500"
	}, {
		name: "平桥区",
		value: "411503",
		parent: "411500"
	}, {
		name: "罗山县",
		value: "411521",
		parent: "411500"
	}, {
		name: "光山县",
		value: "411522",
		parent: "411500"
	}, {
		name: "新县",
		value: "411523",
		parent: "411500"
	}, {
		name: "商城县",
		value: "411524",
		parent: "411500"
	}, {
		name: "固始县",
		value: "411525",
		parent: "411500"
	}, {
		name: "潢川县",
		value: "411526",
		parent: "411500"
	}, {
		name: "淮滨县",
		value: "411527",
		parent: "411500"
	}, {
		name: "息县",
		value: "411528",
		parent: "411500"
	}, {
		name: "川汇区",
		value: "411602",
		parent: "411600"
	}, {
		name: "扶沟县",
		value: "411621",
		parent: "411600"
	}, {
		name: "西华县",
		value: "411622",
		parent: "411600"
	}, {
		name: "商水县",
		value: "411623",
		parent: "411600"
	}, {
		name: "沈丘县",
		value: "411624",
		parent: "411600"
	}, {
		name: "郸城县",
		value: "411625",
		parent: "411600"
	}, {
		name: "淮阳县",
		value: "411626",
		parent: "411600"
	}, {
		name: "太康县",
		value: "411627",
		parent: "411600"
	}, {
		name: "鹿邑县",
		value: "411628",
		parent: "411600"
	}, {
		name: "项城市",
		value: "411681",
		parent: "411600"
	}, {
		name: "驿城区",
		value: "411702",
		parent: "411700"
	}, {
		name: "西平县",
		value: "411721",
		parent: "411700"
	}, {
		name: "上蔡县",
		value: "411722",
		parent: "411700"
	}, {
		name: "平舆县",
		value: "411723",
		parent: "411700"
	}, {
		name: "正阳县",
		value: "411724",
		parent: "411700"
	}, {
		name: "确山县",
		value: "411725",
		parent: "411700"
	}, {
		name: "泌阳县",
		value: "411726",
		parent: "411700"
	}, {
		name: "汝南县",
		value: "411727",
		parent: "411700"
	}, {
		name: "遂平县",
		value: "411728",
		parent: "411700"
	}, {
		name: "新蔡县",
		value: "411729",
		parent: "411700"
	}, {
		name: "武汉市",
		value: "420100",
		parent: "420000"
	}, {
		name: "黄石市",
		value: "420200",
		parent: "420000"
	}, {
		name: "十堰市",
		value: "420300",
		parent: "420000"
	}, {
		name: "宜昌市",
		value: "420500",
		parent: "420000"
	}, {
		name: "襄阳市",
		value: "420600",
		parent: "420000"
	}, {
		name: "鄂州市",
		value: "420700",
		parent: "420000"
	}, {
		name: "荆门市",
		value: "420800",
		parent: "420000"
	}, {
		name: "孝感市",
		value: "420900",
		parent: "420000"
	}, {
		name: "荆州市",
		value: "421000",
		parent: "420000"
	}, {
		name: "黄冈市",
		value: "421100",
		parent: "420000"
	}, {
		name: "咸宁市",
		value: "421200",
		parent: "420000"
	}, {
		name: "随州市",
		value: "421300",
		parent: "420000"
	}, {
		name: "恩施土家族苗族自治州",
		value: "422800",
		parent: "420000"
	}, {
		name: "仙桃市",
		value: "429004",
		parent: "420000"
	}, {
		name: "潜江市",
		value: "429005",
		parent: "420000"
	}, {
		name: "天门市",
		value: "429006",
		parent: "420000"
	}, {
		name: "神农架林区",
		value: "429021",
		parent: "420000"
	}, {
		name: "江岸区",
		value: "420102",
		parent: "420100"
	}, {
		name: "江汉区",
		value: "420103",
		parent: "420100"
	}, {
		name: "硚口区",
		value: "420104",
		parent: "420100"
	}, {
		name: "汉阳区",
		value: "420105",
		parent: "420100"
	}, {
		name: "武昌区",
		value: "420106",
		parent: "420100"
	}, {
		name: "青山区",
		value: "420107",
		parent: "420100"
	}, {
		name: "洪山区",
		value: "420111",
		parent: "420100"
	}, {
		name: "东西湖区",
		value: "420112",
		parent: "420100"
	}, {
		name: "汉南区",
		value: "420113",
		parent: "420100"
	}, {
		name: "蔡甸区",
		value: "420114",
		parent: "420100"
	}, {
		name: "江夏区",
		value: "420115",
		parent: "420100"
	}, {
		name: "黄陂区",
		value: "420116",
		parent: "420100"
	}, {
		name: "新洲区",
		value: "420117",
		parent: "420100"
	}, {
		name: "黄石港区",
		value: "420202",
		parent: "420200"
	}, {
		name: "西塞山区",
		value: "420203",
		parent: "420200"
	}, {
		name: "下陆区",
		value: "420204",
		parent: "420200"
	}, {
		name: "铁山区",
		value: "420205",
		parent: "420200"
	}, {
		name: "阳新县",
		value: "420222",
		parent: "420200"
	}, {
		name: "大冶市",
		value: "420281",
		parent: "420200"
	}, {
		name: "茅箭区",
		value: "420302",
		parent: "420300"
	}, {
		name: "张湾区",
		value: "420303",
		parent: "420300"
	}, {
		name: "郧阳区",
		value: "420304",
		parent: "420300"
	}, {
		name: "郧西县",
		value: "420322",
		parent: "420300"
	}, {
		name: "竹山县",
		value: "420323",
		parent: "420300"
	}, {
		name: "竹溪县",
		value: "420324",
		parent: "420300"
	}, {
		name: "房县",
		value: "420325",
		parent: "420300"
	}, {
		name: "丹江口市",
		value: "420381",
		parent: "420300"
	}, {
		name: "西陵区",
		value: "420502",
		parent: "420500"
	}, {
		name: "伍家岗区",
		value: "420503",
		parent: "420500"
	}, {
		name: "点军区",
		value: "420504",
		parent: "420500"
	}, {
		name: "猇亭区",
		value: "420505",
		parent: "420500"
	}, {
		name: "夷陵区",
		value: "420506",
		parent: "420500"
	}, {
		name: "远安县",
		value: "420525",
		parent: "420500"
	}, {
		name: "兴山县",
		value: "420526",
		parent: "420500"
	}, {
		name: "秭归县",
		value: "420527",
		parent: "420500"
	}, {
		name: "长阳土家族自治县",
		value: "420528",
		parent: "420500"
	}, {
		name: "五峰土家族自治县",
		value: "420529",
		parent: "420500"
	}, {
		name: "宜都市",
		value: "420581",
		parent: "420500"
	}, {
		name: "当阳市",
		value: "420582",
		parent: "420500"
	}, {
		name: "枝江市",
		value: "420583",
		parent: "420500"
	}, {
		name: "襄城区",
		value: "420602",
		parent: "420600"
	}, {
		name: "樊城区",
		value: "420606",
		parent: "420600"
	}, {
		name: "襄州区",
		value: "420607",
		parent: "420600"
	}, {
		name: "南漳县",
		value: "420624",
		parent: "420600"
	}, {
		name: "谷城县",
		value: "420625",
		parent: "420600"
	}, {
		name: "保康县",
		value: "420626",
		parent: "420600"
	}, {
		name: "老河口市",
		value: "420682",
		parent: "420600"
	}, {
		name: "枣阳市",
		value: "420683",
		parent: "420600"
	}, {
		name: "宜城市",
		value: "420684",
		parent: "420600"
	}, {
		name: "梁子湖区",
		value: "420702",
		parent: "420700"
	}, {
		name: "华容区",
		value: "420703",
		parent: "420700"
	}, {
		name: "鄂城区",
		value: "420704",
		parent: "420700"
	}, {
		name: "东宝区",
		value: "420802",
		parent: "420800"
	}, {
		name: "掇刀区",
		value: "420804",
		parent: "420800"
	}, {
		name: "京山县",
		value: "420821",
		parent: "420800"
	}, {
		name: "沙洋县",
		value: "420822",
		parent: "420800"
	}, {
		name: "钟祥市",
		value: "420881",
		parent: "420800"
	}, {
		name: "孝南区",
		value: "420902",
		parent: "420900"
	}, {
		name: "孝昌县",
		value: "420921",
		parent: "420900"
	}, {
		name: "大悟县",
		value: "420922",
		parent: "420900"
	}, {
		name: "云梦县",
		value: "420923",
		parent: "420900"
	}, {
		name: "应城市",
		value: "420981",
		parent: "420900"
	}, {
		name: "安陆市",
		value: "420982",
		parent: "420900"
	}, {
		name: "汉川市",
		value: "420984",
		parent: "420900"
	}, {
		name: "沙市区",
		value: "421002",
		parent: "421000"
	}, {
		name: "荆州区",
		value: "421003",
		parent: "421000"
	}, {
		name: "公安县",
		value: "421022",
		parent: "421000"
	}, {
		name: "监利县",
		value: "421023",
		parent: "421000"
	}, {
		name: "江陵县",
		value: "421024",
		parent: "421000"
	}, {
		name: "石首市",
		value: "421081",
		parent: "421000"
	}, {
		name: "洪湖市",
		value: "421083",
		parent: "421000"
	}, {
		name: "松滋市",
		value: "421087",
		parent: "421000"
	}, {
		name: "黄州区",
		value: "421102",
		parent: "421100"
	}, {
		name: "团风县",
		value: "421121",
		parent: "421100"
	}, {
		name: "红安县",
		value: "421122",
		parent: "421100"
	}, {
		name: "罗田县",
		value: "421123",
		parent: "421100"
	}, {
		name: "英山县",
		value: "421124",
		parent: "421100"
	}, {
		name: "浠水县",
		value: "421125",
		parent: "421100"
	}, {
		name: "蕲春县",
		value: "421126",
		parent: "421100"
	}, {
		name: "黄梅县",
		value: "421127",
		parent: "421100"
	}, {
		name: "麻城市",
		value: "421181",
		parent: "421100"
	}, {
		name: "武穴市",
		value: "421182",
		parent: "421100"
	}, {
		name: "咸安区",
		value: "421202",
		parent: "421200"
	}, {
		name: "嘉鱼县",
		value: "421221",
		parent: "421200"
	}, {
		name: "通城县",
		value: "421222",
		parent: "421200"
	}, {
		name: "崇阳县",
		value: "421223",
		parent: "421200"
	}, {
		name: "通山县",
		value: "421224",
		parent: "421200"
	}, {
		name: "赤壁市",
		value: "421281",
		parent: "421200"
	}, {
		name: "曾都区",
		value: "421303",
		parent: "421300"
	}, {
		name: "随县",
		value: "421321",
		parent: "421300"
	}, {
		name: "广水市",
		value: "421381",
		parent: "421300"
	}, {
		name: "恩施市",
		value: "422801",
		parent: "422800"
	}, {
		name: "利川市",
		value: "422802",
		parent: "422800"
	}, {
		name: "建始县",
		value: "422822",
		parent: "422800"
	}, {
		name: "巴东县",
		value: "422823",
		parent: "422800"
	}, {
		name: "宣恩县",
		value: "422825",
		parent: "422800"
	}, {
		name: "咸丰县",
		value: "422826",
		parent: "422800"
	}, {
		name: "来凤县",
		value: "422827",
		parent: "422800"
	}, {
		name: "鹤峰县",
		value: "422828",
		parent: "422800"
	}, {
		name: "长沙市",
		value: "430100",
		parent: "430000"
	}, {
		name: "株洲市",
		value: "430200",
		parent: "430000"
	}, {
		name: "湘潭市",
		value: "430300",
		parent: "430000"
	}, {
		name: "衡阳市",
		value: "430400",
		parent: "430000"
	}, {
		name: "邵阳市",
		value: "430500",
		parent: "430000"
	}, {
		name: "岳阳市",
		value: "430600",
		parent: "430000"
	}, {
		name: "常德市",
		value: "430700",
		parent: "430000"
	}, {
		name: "张家界市",
		value: "430800",
		parent: "430000"
	}, {
		name: "益阳市",
		value: "430900",
		parent: "430000"
	}, {
		name: "郴州市",
		value: "431000",
		parent: "430000"
	}, {
		name: "永州市",
		value: "431100",
		parent: "430000"
	}, {
		name: "怀化市",
		value: "431200",
		parent: "430000"
	}, {
		name: "娄底市",
		value: "431300",
		parent: "430000"
	}, {
		name: "湘西土家族苗族自治州",
		value: "433100",
		parent: "430000"
	}, {
		name: "芙蓉区",
		value: "430102",
		parent: "430100"
	}, {
		name: "天心区",
		value: "430103",
		parent: "430100"
	}, {
		name: "岳麓区",
		value: "430104",
		parent: "430100"
	}, {
		name: "开福区",
		value: "430105",
		parent: "430100"
	}, {
		name: "雨花区",
		value: "430111",
		parent: "430100"
	}, {
		name: "望城区",
		value: "430112",
		parent: "430100"
	}, {
		name: "长沙县",
		value: "430121",
		parent: "430100"
	}, {
		name: "宁乡县",
		value: "430124",
		parent: "430100"
	}, {
		name: "浏阳市",
		value: "430181",
		parent: "430100"
	}, {
		name: "荷塘区",
		value: "430202",
		parent: "430200"
	}, {
		name: "芦淞区",
		value: "430203",
		parent: "430200"
	}, {
		name: "石峰区",
		value: "430204",
		parent: "430200"
	}, {
		name: "天元区",
		value: "430211",
		parent: "430200"
	}, {
		name: "株洲县",
		value: "430221",
		parent: "430200"
	}, {
		name: "攸县",
		value: "430223",
		parent: "430200"
	}, {
		name: "茶陵县",
		value: "430224",
		parent: "430200"
	}, {
		name: "炎陵县",
		value: "430225",
		parent: "430200"
	}, {
		name: "醴陵市",
		value: "430281",
		parent: "430200"
	}, {
		name: "雨湖区",
		value: "430302",
		parent: "430300"
	}, {
		name: "岳塘区",
		value: "430304",
		parent: "430300"
	}, {
		name: "湘潭县",
		value: "430321",
		parent: "430300"
	}, {
		name: "湘乡市",
		value: "430381",
		parent: "430300"
	}, {
		name: "韶山市",
		value: "430382",
		parent: "430300"
	}, {
		name: "珠晖区",
		value: "430405",
		parent: "430400"
	}, {
		name: "雁峰区",
		value: "430406",
		parent: "430400"
	}, {
		name: "石鼓区",
		value: "430407",
		parent: "430400"
	}, {
		name: "蒸湘区",
		value: "430408",
		parent: "430400"
	}, {
		name: "南岳区",
		value: "430412",
		parent: "430400"
	}, {
		name: "衡阳县",
		value: "430421",
		parent: "430400"
	}, {
		name: "衡南县",
		value: "430422",
		parent: "430400"
	}, {
		name: "衡山县",
		value: "430423",
		parent: "430400"
	}, {
		name: "衡东县",
		value: "430424",
		parent: "430400"
	}, {
		name: "祁东县",
		value: "430426",
		parent: "430400"
	}, {
		name: "耒阳市",
		value: "430481",
		parent: "430400"
	}, {
		name: "常宁市",
		value: "430482",
		parent: "430400"
	}, {
		name: "双清区",
		value: "430502",
		parent: "430500"
	}, {
		name: "大祥区",
		value: "430503",
		parent: "430500"
	}, {
		name: "北塔区",
		value: "430511",
		parent: "430500"
	}, {
		name: "邵东县",
		value: "430521",
		parent: "430500"
	}, {
		name: "新邵县",
		value: "430522",
		parent: "430500"
	}, {
		name: "邵阳县",
		value: "430523",
		parent: "430500"
	}, {
		name: "隆回县",
		value: "430524",
		parent: "430500"
	}, {
		name: "洞口县",
		value: "430525",
		parent: "430500"
	}, {
		name: "绥宁县",
		value: "430527",
		parent: "430500"
	}, {
		name: "新宁县",
		value: "430528",
		parent: "430500"
	}, {
		name: "城步苗族自治县",
		value: "430529",
		parent: "430500"
	}, {
		name: "武冈市",
		value: "430581",
		parent: "430500"
	}, {
		name: "岳阳楼区",
		value: "430602",
		parent: "430600"
	}, {
		name: "云溪区",
		value: "430603",
		parent: "430600"
	}, {
		name: "君山区",
		value: "430611",
		parent: "430600"
	}, {
		name: "岳阳县",
		value: "430621",
		parent: "430600"
	}, {
		name: "华容县",
		value: "430623",
		parent: "430600"
	}, {
		name: "湘阴县",
		value: "430624",
		parent: "430600"
	}, {
		name: "平江县",
		value: "430626",
		parent: "430600"
	}, {
		name: "汨罗市",
		value: "430681",
		parent: "430600"
	}, {
		name: "临湘市",
		value: "430682",
		parent: "430600"
	}, {
		name: "武陵区",
		value: "430702",
		parent: "430700"
	}, {
		name: "鼎城区",
		value: "430703",
		parent: "430700"
	}, {
		name: "安乡县",
		value: "430721",
		parent: "430700"
	}, {
		name: "汉寿县",
		value: "430722",
		parent: "430700"
	}, {
		name: "澧县",
		value: "430723",
		parent: "430700"
	}, {
		name: "临澧县",
		value: "430724",
		parent: "430700"
	}, {
		name: "桃源县",
		value: "430725",
		parent: "430700"
	}, {
		name: "石门县",
		value: "430726",
		parent: "430700"
	}, {
		name: "津市市",
		value: "430781",
		parent: "430700"
	}, {
		name: "永定区",
		value: "430802",
		parent: "430800"
	}, {
		name: "武陵源区",
		value: "430811",
		parent: "430800"
	}, {
		name: "慈利县",
		value: "430821",
		parent: "430800"
	}, {
		name: "桑植县",
		value: "430822",
		parent: "430800"
	}, {
		name: "资阳区",
		value: "430902",
		parent: "430900"
	}, {
		name: "赫山区",
		value: "430903",
		parent: "430900"
	}, {
		name: "南县",
		value: "430921",
		parent: "430900"
	}, {
		name: "桃江县",
		value: "430922",
		parent: "430900"
	}, {
		name: "安化县",
		value: "430923",
		parent: "430900"
	}, {
		name: "沅江市",
		value: "430981",
		parent: "430900"
	}, {
		name: "北湖区",
		value: "431002",
		parent: "431000"
	}, {
		name: "苏仙区",
		value: "431003",
		parent: "431000"
	}, {
		name: "桂阳县",
		value: "431021",
		parent: "431000"
	}, {
		name: "宜章县",
		value: "431022",
		parent: "431000"
	}, {
		name: "永兴县",
		value: "431023",
		parent: "431000"
	}, {
		name: "嘉禾县",
		value: "431024",
		parent: "431000"
	}, {
		name: "临武县",
		value: "431025",
		parent: "431000"
	}, {
		name: "汝城县",
		value: "431026",
		parent: "431000"
	}, {
		name: "桂东县",
		value: "431027",
		parent: "431000"
	}, {
		name: "安仁县",
		value: "431028",
		parent: "431000"
	}, {
		name: "资兴市",
		value: "431081",
		parent: "431000"
	}, {
		name: "零陵区",
		value: "431102",
		parent: "431100"
	}, {
		name: "冷水滩区",
		value: "431103",
		parent: "431100"
	}, {
		name: "祁阳县",
		value: "431121",
		parent: "431100"
	}, {
		name: "东安县",
		value: "431122",
		parent: "431100"
	}, {
		name: "双牌县",
		value: "431123",
		parent: "431100"
	}, {
		name: "道县",
		value: "431124",
		parent: "431100"
	}, {
		name: "江永县",
		value: "431125",
		parent: "431100"
	}, {
		name: "宁远县",
		value: "431126",
		parent: "431100"
	}, {
		name: "蓝山县",
		value: "431127",
		parent: "431100"
	}, {
		name: "新田县",
		value: "431128",
		parent: "431100"
	}, {
		name: "江华瑶族自治县",
		value: "431129",
		parent: "431100"
	}, {
		name: "鹤城区",
		value: "431202",
		parent: "431200"
	}, {
		name: "中方县",
		value: "431221",
		parent: "431200"
	}, {
		name: "沅陵县",
		value: "431222",
		parent: "431200"
	}, {
		name: "辰溪县",
		value: "431223",
		parent: "431200"
	}, {
		name: "溆浦县",
		value: "431224",
		parent: "431200"
	}, {
		name: "会同县",
		value: "431225",
		parent: "431200"
	}, {
		name: "麻阳苗族自治县",
		value: "431226",
		parent: "431200"
	}, {
		name: "新晃侗族自治县",
		value: "431227",
		parent: "431200"
	}, {
		name: "芷江侗族自治县",
		value: "431228",
		parent: "431200"
	}, {
		name: "靖州苗族侗族自治县",
		value: "431229",
		parent: "431200"
	}, {
		name: "通道侗族自治县",
		value: "431230",
		parent: "431200"
	}, {
		name: "洪江市",
		value: "431281",
		parent: "431200"
	}, {
		name: "娄星区",
		value: "431302",
		parent: "431300"
	}, {
		name: "双峰县",
		value: "431321",
		parent: "431300"
	}, {
		name: "新化县",
		value: "431322",
		parent: "431300"
	}, {
		name: "冷水江市",
		value: "431381",
		parent: "431300"
	}, {
		name: "涟源市",
		value: "431382",
		parent: "431300"
	}, {
		name: "吉首市",
		value: "433101",
		parent: "433100"
	}, {
		name: "泸溪县",
		value: "433122",
		parent: "433100"
	}, {
		name: "凤凰县",
		value: "433123",
		parent: "433100"
	}, {
		name: "花垣县",
		value: "433124",
		parent: "433100"
	}, {
		name: "保靖县",
		value: "433125",
		parent: "433100"
	}, {
		name: "古丈县",
		value: "433126",
		parent: "433100"
	}, {
		name: "永顺县",
		value: "433127",
		parent: "433100"
	}, {
		name: "龙山县",
		value: "433130",
		parent: "433100"
	}, {
		name: "广州市",
		value: "440100",
		parent: "440000"
	}, {
		name: "韶关市",
		value: "440200",
		parent: "440000"
	}, {
		name: "深圳市",
		value: "440300",
		parent: "440000"
	}, {
		name: "珠海市",
		value: "440400",
		parent: "440000"
	}, {
		name: "汕头市",
		value: "440500",
		parent: "440000"
	}, {
		name: "佛山市",
		value: "440600",
		parent: "440000"
	}, {
		name: "江门市",
		value: "440700",
		parent: "440000"
	}, {
		name: "湛江市",
		value: "440800",
		parent: "440000"
	}, {
		name: "茂名市",
		value: "440900",
		parent: "440000"
	}, {
		name: "肇庆市",
		value: "441200",
		parent: "440000"
	}, {
		name: "惠州市",
		value: "441300",
		parent: "440000"
	}, {
		name: "梅州市",
		value: "441400",
		parent: "440000"
	}, {
		name: "汕尾市",
		value: "441500",
		parent: "440000"
	}, {
		name: "河源市",
		value: "441600",
		parent: "440000"
	}, {
		name: "阳江市",
		value: "441700",
		parent: "440000"
	}, {
		name: "清远市",
		value: "441800",
		parent: "440000"
	}, {
		name: "东莞市",
		value: "441900",
		parent: "440000"
	}, {
		name: "中山市",
		value: "442000",
		parent: "440000"
	}, {
		name: "潮州市",
		value: "445100",
		parent: "440000"
	}, {
		name: "揭阳市",
		value: "445200",
		parent: "440000"
	}, {
		name: "云浮市",
		value: "445300",
		parent: "440000"
	}, {
		name: "荔湾区",
		value: "440103",
		parent: "440100"
	}, {
		name: "越秀区",
		value: "440104",
		parent: "440100"
	}, {
		name: "海珠区",
		value: "440105",
		parent: "440100"
	}, {
		name: "天河区",
		value: "440106",
		parent: "440100"
	}, {
		name: "白云区",
		value: "440111",
		parent: "440100"
	}, {
		name: "黄埔区",
		value: "440112",
		parent: "440100"
	}, {
		name: "番禺区",
		value: "440113",
		parent: "440100"
	}, {
		name: "花都区",
		value: "440114",
		parent: "440100"
	}, {
		name: "南沙区",
		value: "440115",
		parent: "440100"
	}, {
		name: "从化区",
		value: "440117",
		parent: "440100"
	}, {
		name: "增城区",
		value: "440118",
		parent: "440100"
	}, {
		name: "武江区",
		value: "440203",
		parent: "440200"
	}, {
		name: "浈江区",
		value: "440204",
		parent: "440200"
	}, {
		name: "曲江区",
		value: "440205",
		parent: "440200"
	}, {
		name: "始兴县",
		value: "440222",
		parent: "440200"
	}, {
		name: "仁化县",
		value: "440224",
		parent: "440200"
	}, {
		name: "翁源县",
		value: "440229",
		parent: "440200"
	}, {
		name: "乳源瑶族自治县",
		value: "440232",
		parent: "440200"
	}, {
		name: "新丰县",
		value: "440233",
		parent: "440200"
	}, {
		name: "乐昌市",
		value: "440281",
		parent: "440200"
	}, {
		name: "南雄市",
		value: "440282",
		parent: "440200"
	}, {
		name: "罗湖区",
		value: "440303",
		parent: "440300"
	}, {
		name: "福田区",
		value: "440304",
		parent: "440300"
	}, {
		name: "南山区",
		value: "440305",
		parent: "440300"
	}, {
		name: "宝安区",
		value: "440306",
		parent: "440300"
	}, {
		name: "龙岗区",
		value: "440307",
		parent: "440300"
	}, {
		name: "盐田区",
		value: "440308",
		parent: "440300"
	}, {
		name: "香洲区",
		value: "440402",
		parent: "440400"
	}, {
		name: "斗门区",
		value: "440403",
		parent: "440400"
	}, {
		name: "金湾区",
		value: "440404",
		parent: "440400"
	}, {
		name: "龙湖区",
		value: "440507",
		parent: "440500"
	}, {
		name: "金平区",
		value: "440511",
		parent: "440500"
	}, {
		name: "濠江区",
		value: "440512",
		parent: "440500"
	}, {
		name: "潮阳区",
		value: "440513",
		parent: "440500"
	}, {
		name: "潮南区",
		value: "440514",
		parent: "440500"
	}, {
		name: "澄海区",
		value: "440515",
		parent: "440500"
	}, {
		name: "南澳县",
		value: "440523",
		parent: "440500"
	}, {
		name: "禅城区",
		value: "440604",
		parent: "440600"
	}, {
		name: "南海区",
		value: "440605",
		parent: "440600"
	}, {
		name: "顺德区",
		value: "440606",
		parent: "440600"
	}, {
		name: "三水区",
		value: "440607",
		parent: "440600"
	}, {
		name: "高明区",
		value: "440608",
		parent: "440600"
	}, {
		name: "蓬江区",
		value: "440703",
		parent: "440700"
	}, {
		name: "江海区",
		value: "440704",
		parent: "440700"
	}, {
		name: "新会区",
		value: "440705",
		parent: "440700"
	}, {
		name: "台山市",
		value: "440781",
		parent: "440700"
	}, {
		name: "开平市",
		value: "440783",
		parent: "440700"
	}, {
		name: "鹤山市",
		value: "440784",
		parent: "440700"
	}, {
		name: "恩平市",
		value: "440785",
		parent: "440700"
	}, {
		name: "赤坎区",
		value: "440802",
		parent: "440800"
	}, {
		name: "霞山区",
		value: "440803",
		parent: "440800"
	}, {
		name: "坡头区",
		value: "440804",
		parent: "440800"
	}, {
		name: "麻章区",
		value: "440811",
		parent: "440800"
	}, {
		name: "遂溪县",
		value: "440823",
		parent: "440800"
	}, {
		name: "徐闻县",
		value: "440825",
		parent: "440800"
	}, {
		name: "廉江市",
		value: "440881",
		parent: "440800"
	}, {
		name: "雷州市",
		value: "440882",
		parent: "440800"
	}, {
		name: "吴川市",
		value: "440883",
		parent: "440800"
	}, {
		name: "茂南区",
		value: "440902",
		parent: "440900"
	}, {
		name: "电白区",
		value: "440904",
		parent: "440900"
	}, {
		name: "高州市",
		value: "440981",
		parent: "440900"
	}, {
		name: "化州市",
		value: "440982",
		parent: "440900"
	}, {
		name: "信宜市",
		value: "440983",
		parent: "440900"
	}, {
		name: "端州区",
		value: "441202",
		parent: "441200"
	}, {
		name: "鼎湖区",
		value: "441203",
		parent: "441200"
	}, {
		name: "高要区",
		value: "441204",
		parent: "441200"
	}, {
		name: "广宁县",
		value: "441223",
		parent: "441200"
	}, {
		name: "怀集县",
		value: "441224",
		parent: "441200"
	}, {
		name: "封开县",
		value: "441225",
		parent: "441200"
	}, {
		name: "德庆县",
		value: "441226",
		parent: "441200"
	}, {
		name: "四会市",
		value: "441284",
		parent: "441200"
	}, {
		name: "惠城区",
		value: "441302",
		parent: "441300"
	}, {
		name: "惠阳区",
		value: "441303",
		parent: "441300"
	}, {
		name: "博罗县",
		value: "441322",
		parent: "441300"
	}, {
		name: "惠东县",
		value: "441323",
		parent: "441300"
	}, {
		name: "龙门县",
		value: "441324",
		parent: "441300"
	}, {
		name: "梅江区",
		value: "441402",
		parent: "441400"
	}, {
		name: "梅县区",
		value: "441403",
		parent: "441400"
	}, {
		name: "大埔县",
		value: "441422",
		parent: "441400"
	}, {
		name: "丰顺县",
		value: "441423",
		parent: "441400"
	}, {
		name: "五华县",
		value: "441424",
		parent: "441400"
	}, {
		name: "平远县",
		value: "441426",
		parent: "441400"
	}, {
		name: "蕉岭县",
		value: "441427",
		parent: "441400"
	}, {
		name: "兴宁市",
		value: "441481",
		parent: "441400"
	}, {
		name: "城区",
		value: "441502",
		parent: "441500"
	}, {
		name: "海丰县",
		value: "441521",
		parent: "441500"
	}, {
		name: "陆河县",
		value: "441523",
		parent: "441500"
	}, {
		name: "陆丰市",
		value: "441581",
		parent: "441500"
	}, {
		name: "源城区",
		value: "441602",
		parent: "441600"
	}, {
		name: "紫金县",
		value: "441621",
		parent: "441600"
	}, {
		name: "龙川县",
		value: "441622",
		parent: "441600"
	}, {
		name: "连平县",
		value: "441623",
		parent: "441600"
	}, {
		name: "和平县",
		value: "441624",
		parent: "441600"
	}, {
		name: "东源县",
		value: "441625",
		parent: "441600"
	}, {
		name: "江城区",
		value: "441702",
		parent: "441700"
	}, {
		name: "阳东区",
		value: "441704",
		parent: "441700"
	}, {
		name: "阳西县",
		value: "441721",
		parent: "441700"
	}, {
		name: "阳春市",
		value: "441781",
		parent: "441700"
	}, {
		name: "清城区",
		value: "441802",
		parent: "441800"
	}, {
		name: "清新区",
		value: "441803",
		parent: "441800"
	}, {
		name: "佛冈县",
		value: "441821",
		parent: "441800"
	}, {
		name: "阳山县",
		value: "441823",
		parent: "441800"
	}, {
		name: "连山壮族瑶族自治县",
		value: "441825",
		parent: "441800"
	}, {
		name: "连南瑶族自治县",
		value: "441826",
		parent: "441800"
	}, {
		name: "英德市",
		value: "441881",
		parent: "441800"
	}, {
		name: "连州市",
		value: "441882",
		parent: "441800"
	}, {
		name: "湘桥区",
		value: "445102",
		parent: "445100"
	}, {
		name: "潮安区",
		value: "445103",
		parent: "445100"
	}, {
		name: "饶平县",
		value: "445122",
		parent: "445100"
	}, {
		name: "榕城区",
		value: "445202",
		parent: "445200"
	}, {
		name: "揭东区",
		value: "445203",
		parent: "445200"
	}, {
		name: "揭西县",
		value: "445222",
		parent: "445200"
	}, {
		name: "惠来县",
		value: "445224",
		parent: "445200"
	}, {
		name: "普宁市",
		value: "445281",
		parent: "445200"
	}, {
		name: "云城区",
		value: "445302",
		parent: "445300"
	}, {
		name: "云安区",
		value: "445303",
		parent: "445300"
	}, {
		name: "新兴县",
		value: "445321",
		parent: "445300"
	}, {
		name: "郁南县",
		value: "445322",
		parent: "445300"
	}, {
		name: "罗定市",
		value: "445381",
		parent: "445300"
	}, {
		name: "南宁市",
		value: "450100",
		parent: "450000"
	}, {
		name: "柳州市",
		value: "450200",
		parent: "450000"
	}, {
		name: "桂林市",
		value: "450300",
		parent: "450000"
	}, {
		name: "梧州市",
		value: "450400",
		parent: "450000"
	}, {
		name: "北海市",
		value: "450500",
		parent: "450000"
	}, {
		name: "防城港市",
		value: "450600",
		parent: "450000"
	}, {
		name: "钦州市",
		value: "450700",
		parent: "450000"
	}, {
		name: "贵港市",
		value: "450800",
		parent: "450000"
	}, {
		name: "玉林市",
		value: "450900",
		parent: "450000"
	}, {
		name: "百色市",
		value: "451000",
		parent: "450000"
	}, {
		name: "贺州市",
		value: "451100",
		parent: "450000"
	}, {
		name: "河池市",
		value: "451200",
		parent: "450000"
	}, {
		name: "来宾市",
		value: "451300",
		parent: "450000"
	}, {
		name: "崇左市",
		value: "451400",
		parent: "450000"
	}, {
		name: "兴宁区",
		value: "450102",
		parent: "450100"
	}, {
		name: "青秀区",
		value: "450103",
		parent: "450100"
	}, {
		name: "江南区",
		value: "450105",
		parent: "450100"
	}, {
		name: "西乡塘区",
		value: "450107",
		parent: "450100"
	}, {
		name: "良庆区",
		value: "450108",
		parent: "450100"
	}, {
		name: "邕宁区",
		value: "450109",
		parent: "450100"
	}, {
		name: "武鸣区",
		value: "450110",
		parent: "450100"
	}, {
		name: "隆安县",
		value: "450123",
		parent: "450100"
	}, {
		name: "马山县",
		value: "450124",
		parent: "450100"
	}, {
		name: "上林县",
		value: "450125",
		parent: "450100"
	}, {
		name: "宾阳县",
		value: "450126",
		parent: "450100"
	}, {
		name: "横县",
		value: "450127",
		parent: "450100"
	}, {
		name: "城中区",
		value: "450202",
		parent: "450200"
	}, {
		name: "鱼峰区",
		value: "450203",
		parent: "450200"
	}, {
		name: "柳南区",
		value: "450204",
		parent: "450200"
	}, {
		name: "柳北区",
		value: "450205",
		parent: "450200"
	}, {
		name: "柳江县",
		value: "450221",
		parent: "450200"
	}, {
		name: "柳城县",
		value: "450222",
		parent: "450200"
	}, {
		name: "鹿寨县",
		value: "450223",
		parent: "450200"
	}, {
		name: "融安县",
		value: "450224",
		parent: "450200"
	}, {
		name: "融水苗族自治县",
		value: "450225",
		parent: "450200"
	}, {
		name: "三江侗族自治县",
		value: "450226",
		parent: "450200"
	}, {
		name: "秀峰区",
		value: "450302",
		parent: "450300"
	}, {
		name: "叠彩区",
		value: "450303",
		parent: "450300"
	}, {
		name: "象山区",
		value: "450304",
		parent: "450300"
	}, {
		name: "七星区",
		value: "450305",
		parent: "450300"
	}, {
		name: "雁山区",
		value: "450311",
		parent: "450300"
	}, {
		name: "临桂区",
		value: "450312",
		parent: "450300"
	}, {
		name: "阳朔县",
		value: "450321",
		parent: "450300"
	}, {
		name: "灵川县",
		value: "450323",
		parent: "450300"
	}, {
		name: "全州县",
		value: "450324",
		parent: "450300"
	}, {
		name: "兴安县",
		value: "450325",
		parent: "450300"
	}, {
		name: "永福县",
		value: "450326",
		parent: "450300"
	}, {
		name: "灌阳县",
		value: "450327",
		parent: "450300"
	}, {
		name: "龙胜各族自治县",
		value: "450328",
		parent: "450300"
	}, {
		name: "资源县",
		value: "450329",
		parent: "450300"
	}, {
		name: "平乐县",
		value: "450330",
		parent: "450300"
	}, {
		name: "荔浦县",
		value: "450331",
		parent: "450300"
	}, {
		name: "恭城瑶族自治县",
		value: "450332",
		parent: "450300"
	}, {
		name: "万秀区",
		value: "450403",
		parent: "450400"
	}, {
		name: "长洲区",
		value: "450405",
		parent: "450400"
	}, {
		name: "龙圩区",
		value: "450406",
		parent: "450400"
	}, {
		name: "苍梧县",
		value: "450421",
		parent: "450400"
	}, {
		name: "藤县",
		value: "450422",
		parent: "450400"
	}, {
		name: "蒙山县",
		value: "450423",
		parent: "450400"
	}, {
		name: "岑溪市",
		value: "450481",
		parent: "450400"
	}, {
		name: "海城区",
		value: "450502",
		parent: "450500"
	}, {
		name: "银海区",
		value: "450503",
		parent: "450500"
	}, {
		name: "铁山港区",
		value: "450512",
		parent: "450500"
	}, {
		name: "合浦县",
		value: "450521",
		parent: "450500"
	}, {
		name: "港口区",
		value: "450602",
		parent: "450600"
	}, {
		name: "防城区",
		value: "450603",
		parent: "450600"
	}, {
		name: "上思县",
		value: "450621",
		parent: "450600"
	}, {
		name: "东兴市",
		value: "450681",
		parent: "450600"
	}, {
		name: "钦南区",
		value: "450702",
		parent: "450700"
	}, {
		name: "钦北区",
		value: "450703",
		parent: "450700"
	}, {
		name: "灵山县",
		value: "450721",
		parent: "450700"
	}, {
		name: "浦北县",
		value: "450722",
		parent: "450700"
	}, {
		name: "港北区",
		value: "450802",
		parent: "450800"
	}, {
		name: "港南区",
		value: "450803",
		parent: "450800"
	}, {
		name: "覃塘区",
		value: "450804",
		parent: "450800"
	}, {
		name: "平南县",
		value: "450821",
		parent: "450800"
	}, {
		name: "桂平市",
		value: "450881",
		parent: "450800"
	}, {
		name: "玉州区",
		value: "450902",
		parent: "450900"
	}, {
		name: "福绵区",
		value: "450903",
		parent: "450900"
	}, {
		name: "容县",
		value: "450921",
		parent: "450900"
	}, {
		name: "陆川县",
		value: "450922",
		parent: "450900"
	}, {
		name: "博白县",
		value: "450923",
		parent: "450900"
	}, {
		name: "兴业县",
		value: "450924",
		parent: "450900"
	}, {
		name: "北流市",
		value: "450981",
		parent: "450900"
	}, {
		name: "右江区",
		value: "451002",
		parent: "451000"
	}, {
		name: "田阳县",
		value: "451021",
		parent: "451000"
	}, {
		name: "田东县",
		value: "451022",
		parent: "451000"
	}, {
		name: "平果县",
		value: "451023",
		parent: "451000"
	}, {
		name: "德保县",
		value: "451024",
		parent: "451000"
	}, {
		name: "那坡县",
		value: "451026",
		parent: "451000"
	}, {
		name: "凌云县",
		value: "451027",
		parent: "451000"
	}, {
		name: "乐业县",
		value: "451028",
		parent: "451000"
	}, {
		name: "田林县",
		value: "451029",
		parent: "451000"
	}, {
		name: "西林县",
		value: "451030",
		parent: "451000"
	}, {
		name: "隆林各族自治县",
		value: "451031",
		parent: "451000"
	}, {
		name: "靖西市",
		value: "451081",
		parent: "451000"
	}, {
		name: "八步区",
		value: "451102",
		parent: "451100"
	}, {
		name: "昭平县",
		value: "451121",
		parent: "451100"
	}, {
		name: "钟山县",
		value: "451122",
		parent: "451100"
	}, {
		name: "富川瑶族自治县",
		value: "451123",
		parent: "451100"
	}, {
		name: "金城江区",
		value: "451202",
		parent: "451200"
	}, {
		name: "南丹县",
		value: "451221",
		parent: "451200"
	}, {
		name: "天峨县",
		value: "451222",
		parent: "451200"
	}, {
		name: "凤山县",
		value: "451223",
		parent: "451200"
	}, {
		name: "东兰县",
		value: "451224",
		parent: "451200"
	}, {
		name: "罗城仫佬族自治县",
		value: "451225",
		parent: "451200"
	}, {
		name: "环江毛南族自治县",
		value: "451226",
		parent: "451200"
	}, {
		name: "巴马瑶族自治县",
		value: "451227",
		parent: "451200"
	}, {
		name: "都安瑶族自治县",
		value: "451228",
		parent: "451200"
	}, {
		name: "大化瑶族自治县",
		value: "451229",
		parent: "451200"
	}, {
		name: "宜州市",
		value: "451281",
		parent: "451200"
	}, {
		name: "兴宾区",
		value: "451302",
		parent: "451300"
	}, {
		name: "忻城县",
		value: "451321",
		parent: "451300"
	}, {
		name: "象州县",
		value: "451322",
		parent: "451300"
	}, {
		name: "武宣县",
		value: "451323",
		parent: "451300"
	}, {
		name: "金秀瑶族自治县",
		value: "451324",
		parent: "451300"
	}, {
		name: "合山市",
		value: "451381",
		parent: "451300"
	}, {
		name: "江州区",
		value: "451402",
		parent: "451400"
	}, {
		name: "扶绥县",
		value: "451421",
		parent: "451400"
	}, {
		name: "宁明县",
		value: "451422",
		parent: "451400"
	}, {
		name: "龙州县",
		value: "451423",
		parent: "451400"
	}, {
		name: "大新县",
		value: "451424",
		parent: "451400"
	}, {
		name: "天等县",
		value: "451425",
		parent: "451400"
	}, {
		name: "凭祥市",
		value: "451481",
		parent: "451400"
	}, {
		name: "海口市",
		value: "460100",
		parent: "460000"
	}, {
		name: "三亚市",
		value: "460200",
		parent: "460000"
	}, {
		name: "三沙市",
		value: "460300",
		parent: "460000"
	}, {
		name: "五指山市",
		value: "469001",
		parent: "460000"
	}, {
		name: "琼海市",
		value: "469002",
		parent: "460000"
	}, {
		name: "儋州市",
		value: "469003",
		parent: "460000"
	}, {
		name: "文昌市",
		value: "469005",
		parent: "460000"
	}, {
		name: "万宁市",
		value: "469006",
		parent: "460000"
	}, {
		name: "东方市",
		value: "469007",
		parent: "460000"
	}, {
		name: "定安县",
		value: "469021",
		parent: "460000"
	}, {
		name: "屯昌县",
		value: "469022",
		parent: "460000"
	}, {
		name: "澄迈县",
		value: "469023",
		parent: "460000"
	}, {
		name: "临高县",
		value: "469024",
		parent: "460000"
	}, {
		name: "白沙黎族自治县",
		value: "469025",
		parent: "460000"
	}, {
		name: "昌江黎族自治县",
		value: "469026",
		parent: "460000"
	}, {
		name: "乐东黎族自治县",
		value: "469027",
		parent: "460000"
	}, {
		name: "陵水黎族自治县",
		value: "469028",
		parent: "460000"
	}, {
		name: "保亭黎族苗族自治县",
		value: "469029",
		parent: "460000"
	}, {
		name: "琼中黎族苗族自治县",
		value: "469030",
		parent: "460000"
	}, {
		name: "秀英区",
		value: "460105",
		parent: "460100"
	}, {
		name: "龙华区",
		value: "460106",
		parent: "460100"
	}, {
		name: "琼山区",
		value: "460107",
		parent: "460100"
	}, {
		name: "美兰区",
		value: "460108",
		parent: "460100"
	}, {
		name: "海棠区",
		value: "460202",
		parent: "460200"
	}, {
		name: "吉阳区",
		value: "460203",
		parent: "460200"
	}, {
		name: "天涯区",
		value: "460204",
		parent: "460200"
	}, {
		name: "崖州区",
		value: "460205",
		parent: "460200"
	}, {
		name: "西沙群岛",
		value: "460321",
		parent: "460300"
	}, {
		name: "南沙群岛",
		value: "460322",
		parent: "460300"
	}, {
		name: "中沙群岛的岛礁及其海域",
		value: "460323",
		parent: "460300"
	}, {
		name: "市辖区",
		value: "500100",
		parent: "500000"
	}, {
		name: "万州区",
		value: "500101",
		parent: "500100"
	}, {
		name: "涪陵区",
		value: "500102",
		parent: "500100"
	}, {
		name: "渝中区",
		value: "500103",
		parent: "500100"
	}, {
		name: "大渡口区",
		value: "500104",
		parent: "500100"
	}, {
		name: "江北区",
		value: "500105",
		parent: "500100"
	}, {
		name: "沙坪坝区",
		value: "500106",
		parent: "500100"
	}, {
		name: "九龙坡区",
		value: "500107",
		parent: "500100"
	}, {
		name: "南岸区",
		value: "500108",
		parent: "500100"
	}, {
		name: "北碚区",
		value: "500109",
		parent: "500100"
	}, {
		name: "綦江区",
		value: "500110",
		parent: "500100"
	}, {
		name: "大足区",
		value: "500111",
		parent: "500100"
	}, {
		name: "渝北区",
		value: "500112",
		parent: "500100"
	}, {
		name: "巴南区",
		value: "500113",
		parent: "500100"
	}, {
		name: "黔江区",
		value: "500114",
		parent: "500100"
	}, {
		name: "长寿区",
		value: "500115",
		parent: "500100"
	}, {
		name: "江津区",
		value: "500116",
		parent: "500100"
	}, {
		name: "合川区",
		value: "500117",
		parent: "500100"
	}, {
		name: "永川区",
		value: "500118",
		parent: "500100"
	}, {
		name: "南川区",
		value: "500119",
		parent: "500100"
	}, {
		name: "璧山区",
		value: "500120",
		parent: "500100"
	}, {
		name: "铜梁区",
		value: "500151",
		parent: "500100"
	}, {
		name: "潼南区",
		value: "500152",
		parent: "500100"
	}, {
		name: "荣昌区",
		value: "500153",
		parent: "500100"
	}, {
		name: "梁平县",
		value: "500228",
		parent: "500100"
	}, {
		name: "城口县",
		value: "500229",
		parent: "500100"
	}, {
		name: "丰都县",
		value: "500230",
		parent: "500100"
	}, {
		name: "垫江县",
		value: "500231",
		parent: "500100"
	}, {
		name: "武隆县",
		value: "500232",
		parent: "500100"
	}, {
		name: "忠县",
		value: "500233",
		parent: "500100"
	}, {
		name: "开县",
		value: "500234",
		parent: "500100"
	}, {
		name: "云阳县",
		value: "500235",
		parent: "500100"
	}, {
		name: "奉节县",
		value: "500236",
		parent: "500100"
	}, {
		name: "巫山县",
		value: "500237",
		parent: "500100"
	}, {
		name: "巫溪县",
		value: "500238",
		parent: "500100"
	}, {
		name: "石柱土家族自治县",
		value: "500240",
		parent: "500100"
	}, {
		name: "秀山土家族苗族自治县",
		value: "500241",
		parent: "500100"
	}, {
		name: "酉阳土家族苗族自治县",
		value: "500242",
		parent: "500100"
	}, {
		name: "彭水苗族土家族自治县",
		value: "500243",
		parent: "500100"
	}, {
		name: "成都市",
		value: "510100",
		parent: "510000"
	}, {
		name: "自贡市",
		value: "510300",
		parent: "510000"
	}, {
		name: "攀枝花市",
		value: "510400",
		parent: "510000"
	}, {
		name: "泸州市",
		value: "510500",
		parent: "510000"
	}, {
		name: "德阳市",
		value: "510600",
		parent: "510000"
	}, {
		name: "绵阳市",
		value: "510700",
		parent: "510000"
	}, {
		name: "广元市",
		value: "510800",
		parent: "510000"
	}, {
		name: "遂宁市",
		value: "510900",
		parent: "510000"
	}, {
		name: "内江市",
		value: "511000",
		parent: "510000"
	}, {
		name: "乐山市",
		value: "511100",
		parent: "510000"
	}, {
		name: "南充市",
		value: "511300",
		parent: "510000"
	}, {
		name: "眉山市",
		value: "511400",
		parent: "510000"
	}, {
		name: "宜宾市",
		value: "511500",
		parent: "510000"
	}, {
		name: "广安市",
		value: "511600",
		parent: "510000"
	}, {
		name: "达州市",
		value: "511700",
		parent: "510000"
	}, {
		name: "雅安市",
		value: "511800",
		parent: "510000"
	}, {
		name: "巴中市",
		value: "511900",
		parent: "510000"
	}, {
		name: "资阳市",
		value: "512000",
		parent: "510000"
	}, {
		name: "阿坝藏族羌族自治州",
		value: "513200",
		parent: "510000"
	}, {
		name: "甘孜藏族自治州",
		value: "513300",
		parent: "510000"
	}, {
		name: "凉山彝族自治州",
		value: "513400",
		parent: "510000"
	}, {
		name: "锦江区",
		value: "510104",
		parent: "510100"
	}, {
		name: "青羊区",
		value: "510105",
		parent: "510100"
	}, {
		name: "金牛区",
		value: "510106",
		parent: "510100"
	}, {
		name: "武侯区",
		value: "510107",
		parent: "510100"
	}, {
		name: "成华区",
		value: "510108",
		parent: "510100"
	}, {
		name: "龙泉驿区",
		value: "510112",
		parent: "510100"
	}, {
		name: "青白江区",
		value: "510113",
		parent: "510100"
	}, {
		name: "新都区",
		value: "510114",
		parent: "510100"
	}, {
		name: "温江区",
		value: "510115",
		parent: "510100"
	}, {
		name: "金堂县",
		value: "510121",
		parent: "510100"
	}, {
		name: "双流县",
		value: "510122",
		parent: "510100"
	}, {
		name: "郫县",
		value: "510124",
		parent: "510100"
	}, {
		name: "大邑县",
		value: "510129",
		parent: "510100"
	}, {
		name: "蒲江县",
		value: "510131",
		parent: "510100"
	}, {
		name: "新津县",
		value: "510132",
		parent: "510100"
	}, {
		name: "都江堰市",
		value: "510181",
		parent: "510100"
	}, {
		name: "彭州市",
		value: "510182",
		parent: "510100"
	}, {
		name: "邛崃市",
		value: "510183",
		parent: "510100"
	}, {
		name: "崇州市",
		value: "510184",
		parent: "510100"
	}, {
		name: "自流井区",
		value: "510302",
		parent: "510300"
	}, {
		name: "贡井区",
		value: "510303",
		parent: "510300"
	}, {
		name: "大安区",
		value: "510304",
		parent: "510300"
	}, {
		name: "沿滩区",
		value: "510311",
		parent: "510300"
	}, {
		name: "荣县",
		value: "510321",
		parent: "510300"
	}, {
		name: "富顺县",
		value: "510322",
		parent: "510300"
	}, {
		name: "东区",
		value: "510402",
		parent: "510400"
	}, {
		name: "西区",
		value: "510403",
		parent: "510400"
	}, {
		name: "仁和区",
		value: "510411",
		parent: "510400"
	}, {
		name: "米易县",
		value: "510421",
		parent: "510400"
	}, {
		name: "盐边县",
		value: "510422",
		parent: "510400"
	}, {
		name: "江阳区",
		value: "510502",
		parent: "510500"
	}, {
		name: "纳溪区",
		value: "510503",
		parent: "510500"
	}, {
		name: "龙马潭区",
		value: "510504",
		parent: "510500"
	}, {
		name: "泸县",
		value: "510521",
		parent: "510500"
	}, {
		name: "合江县",
		value: "510522",
		parent: "510500"
	}, {
		name: "叙永县",
		value: "510524",
		parent: "510500"
	}, {
		name: "古蔺县",
		value: "510525",
		parent: "510500"
	}, {
		name: "旌阳区",
		value: "510603",
		parent: "510600"
	}, {
		name: "中江县",
		value: "510623",
		parent: "510600"
	}, {
		name: "罗江县",
		value: "510626",
		parent: "510600"
	}, {
		name: "广汉市",
		value: "510681",
		parent: "510600"
	}, {
		name: "什邡市",
		value: "510682",
		parent: "510600"
	}, {
		name: "绵竹市",
		value: "510683",
		parent: "510600"
	}, {
		name: "涪城区",
		value: "510703",
		parent: "510700"
	}, {
		name: "游仙区",
		value: "510704",
		parent: "510700"
	}, {
		name: "三台县",
		value: "510722",
		parent: "510700"
	}, {
		name: "盐亭县",
		value: "510723",
		parent: "510700"
	}, {
		name: "安县",
		value: "510724",
		parent: "510700"
	}, {
		name: "梓潼县",
		value: "510725",
		parent: "510700"
	}, {
		name: "北川羌族自治县",
		value: "510726",
		parent: "510700"
	}, {
		name: "平武县",
		value: "510727",
		parent: "510700"
	}, {
		name: "江油市",
		value: "510781",
		parent: "510700"
	}, {
		name: "利州区",
		value: "510802",
		parent: "510800"
	}, {
		name: "昭化区",
		value: "510811",
		parent: "510800"
	}, {
		name: "朝天区",
		value: "510812",
		parent: "510800"
	}, {
		name: "旺苍县",
		value: "510821",
		parent: "510800"
	}, {
		name: "青川县",
		value: "510822",
		parent: "510800"
	}, {
		name: "剑阁县",
		value: "510823",
		parent: "510800"
	}, {
		name: "苍溪县",
		value: "510824",
		parent: "510800"
	}, {
		name: "船山区",
		value: "510903",
		parent: "510900"
	}, {
		name: "安居区",
		value: "510904",
		parent: "510900"
	}, {
		name: "蓬溪县",
		value: "510921",
		parent: "510900"
	}, {
		name: "射洪县",
		value: "510922",
		parent: "510900"
	}, {
		name: "大英县",
		value: "510923",
		parent: "510900"
	}, {
		name: "市中区",
		value: "511002",
		parent: "511000"
	}, {
		name: "东兴区",
		value: "511011",
		parent: "511000"
	}, {
		name: "威远县",
		value: "511024",
		parent: "511000"
	}, {
		name: "资中县",
		value: "511025",
		parent: "511000"
	}, {
		name: "隆昌县",
		value: "511028",
		parent: "511000"
	}, {
		name: "市中区",
		value: "511102",
		parent: "511100"
	}, {
		name: "沙湾区",
		value: "511111",
		parent: "511100"
	}, {
		name: "五通桥区",
		value: "511112",
		parent: "511100"
	}, {
		name: "金口河区",
		value: "511113",
		parent: "511100"
	}, {
		name: "犍为县",
		value: "511123",
		parent: "511100"
	}, {
		name: "井研县",
		value: "511124",
		parent: "511100"
	}, {
		name: "夹江县",
		value: "511126",
		parent: "511100"
	}, {
		name: "沐川县",
		value: "511129",
		parent: "511100"
	}, {
		name: "峨边彝族自治县",
		value: "511132",
		parent: "511100"
	}, {
		name: "马边彝族自治县",
		value: "511133",
		parent: "511100"
	}, {
		name: "峨眉山市",
		value: "511181",
		parent: "511100"
	}, {
		name: "顺庆区",
		value: "511302",
		parent: "511300"
	}, {
		name: "高坪区",
		value: "511303",
		parent: "511300"
	}, {
		name: "嘉陵区",
		value: "511304",
		parent: "511300"
	}, {
		name: "南部县",
		value: "511321",
		parent: "511300"
	}, {
		name: "营山县",
		value: "511322",
		parent: "511300"
	}, {
		name: "蓬安县",
		value: "511323",
		parent: "511300"
	}, {
		name: "仪陇县",
		value: "511324",
		parent: "511300"
	}, {
		name: "西充县",
		value: "511325",
		parent: "511300"
	}, {
		name: "阆中市",
		value: "511381",
		parent: "511300"
	}, {
		name: "东坡区",
		value: "511402",
		parent: "511400"
	}, {
		name: "彭山区",
		value: "511403",
		parent: "511400"
	}, {
		name: "仁寿县",
		value: "511421",
		parent: "511400"
	}, {
		name: "洪雅县",
		value: "511423",
		parent: "511400"
	}, {
		name: "丹棱县",
		value: "511424",
		parent: "511400"
	}, {
		name: "青神县",
		value: "511425",
		parent: "511400"
	}, {
		name: "翠屏区",
		value: "511502",
		parent: "511500"
	}, {
		name: "南溪区",
		value: "511503",
		parent: "511500"
	}, {
		name: "宜宾县",
		value: "511521",
		parent: "511500"
	}, {
		name: "江安县",
		value: "511523",
		parent: "511500"
	}, {
		name: "长宁县",
		value: "511524",
		parent: "511500"
	}, {
		name: "高县",
		value: "511525",
		parent: "511500"
	}, {
		name: "珙县",
		value: "511526",
		parent: "511500"
	}, {
		name: "筠连县",
		value: "511527",
		parent: "511500"
	}, {
		name: "兴文县",
		value: "511528",
		parent: "511500"
	}, {
		name: "屏山县",
		value: "511529",
		parent: "511500"
	}, {
		name: "广安区",
		value: "511602",
		parent: "511600"
	}, {
		name: "前锋区",
		value: "511603",
		parent: "511600"
	}, {
		name: "岳池县",
		value: "511621",
		parent: "511600"
	}, {
		name: "武胜县",
		value: "511622",
		parent: "511600"
	}, {
		name: "邻水县",
		value: "511623",
		parent: "511600"
	}, {
		name: "华蓥市",
		value: "511681",
		parent: "511600"
	}, {
		name: "通川区",
		value: "511702",
		parent: "511700"
	}, {
		name: "达川区",
		value: "511703",
		parent: "511700"
	}, {
		name: "宣汉县",
		value: "511722",
		parent: "511700"
	}, {
		name: "开江县",
		value: "511723",
		parent: "511700"
	}, {
		name: "大竹县",
		value: "511724",
		parent: "511700"
	}, {
		name: "渠县",
		value: "511725",
		parent: "511700"
	}, {
		name: "万源市",
		value: "511781",
		parent: "511700"
	}, {
		name: "雨城区",
		value: "511802",
		parent: "511800"
	}, {
		name: "名山区",
		value: "511803",
		parent: "511800"
	}, {
		name: "荥经县",
		value: "511822",
		parent: "511800"
	}, {
		name: "汉源县",
		value: "511823",
		parent: "511800"
	}, {
		name: "石棉县",
		value: "511824",
		parent: "511800"
	}, {
		name: "天全县",
		value: "511825",
		parent: "511800"
	}, {
		name: "芦山县",
		value: "511826",
		parent: "511800"
	}, {
		name: "宝兴县",
		value: "511827",
		parent: "511800"
	}, {
		name: "巴州区",
		value: "511902",
		parent: "511900"
	}, {
		name: "恩阳区",
		value: "511903",
		parent: "511900"
	}, {
		name: "通江县",
		value: "511921",
		parent: "511900"
	}, {
		name: "南江县",
		value: "511922",
		parent: "511900"
	}, {
		name: "平昌县",
		value: "511923",
		parent: "511900"
	}, {
		name: "雁江区",
		value: "512002",
		parent: "512000"
	}, {
		name: "安岳县",
		value: "512021",
		parent: "512000"
	}, {
		name: "乐至县",
		value: "512022",
		parent: "512000"
	}, {
		name: "简阳市",
		value: "512081",
		parent: "512000"
	}, {
		name: "汶川县",
		value: "513221",
		parent: "513200"
	}, {
		name: "理县",
		value: "513222",
		parent: "513200"
	}, {
		name: "茂县",
		value: "513223",
		parent: "513200"
	}, {
		name: "松潘县",
		value: "513224",
		parent: "513200"
	}, {
		name: "九寨沟县",
		value: "513225",
		parent: "513200"
	}, {
		name: "金川县",
		value: "513226",
		parent: "513200"
	}, {
		name: "小金县",
		value: "513227",
		parent: "513200"
	}, {
		name: "黑水县",
		value: "513228",
		parent: "513200"
	}, {
		name: "马尔康县",
		value: "513229",
		parent: "513200"
	}, {
		name: "壤塘县",
		value: "513230",
		parent: "513200"
	}, {
		name: "阿坝县",
		value: "513231",
		parent: "513200"
	}, {
		name: "若尔盖县",
		value: "513232",
		parent: "513200"
	}, {
		name: "红原县",
		value: "513233",
		parent: "513200"
	}, {
		name: "康定市",
		value: "513301",
		parent: "513300"
	}, {
		name: "泸定县",
		value: "513322",
		parent: "513300"
	}, {
		name: "丹巴县",
		value: "513323",
		parent: "513300"
	}, {
		name: "九龙县",
		value: "513324",
		parent: "513300"
	}, {
		name: "雅江县",
		value: "513325",
		parent: "513300"
	}, {
		name: "道孚县",
		value: "513326",
		parent: "513300"
	}, {
		name: "炉霍县",
		value: "513327",
		parent: "513300"
	}, {
		name: "甘孜县",
		value: "513328",
		parent: "513300"
	}, {
		name: "新龙县",
		value: "513329",
		parent: "513300"
	}, {
		name: "德格县",
		value: "513330",
		parent: "513300"
	}, {
		name: "白玉县",
		value: "513331",
		parent: "513300"
	}, {
		name: "石渠县",
		value: "513332",
		parent: "513300"
	}, {
		name: "色达县",
		value: "513333",
		parent: "513300"
	}, {
		name: "理塘县",
		value: "513334",
		parent: "513300"
	}, {
		name: "巴塘县",
		value: "513335",
		parent: "513300"
	}, {
		name: "乡城县",
		value: "513336",
		parent: "513300"
	}, {
		name: "稻城县",
		value: "513337",
		parent: "513300"
	}, {
		name: "得荣县",
		value: "513338",
		parent: "513300"
	}, {
		name: "西昌市",
		value: "513401",
		parent: "513400"
	}, {
		name: "木里藏族自治县",
		value: "513422",
		parent: "513400"
	}, {
		name: "盐源县",
		value: "513423",
		parent: "513400"
	}, {
		name: "德昌县",
		value: "513424",
		parent: "513400"
	}, {
		name: "会理县",
		value: "513425",
		parent: "513400"
	}, {
		name: "会东县",
		value: "513426",
		parent: "513400"
	}, {
		name: "宁南县",
		value: "513427",
		parent: "513400"
	}, {
		name: "普格县",
		value: "513428",
		parent: "513400"
	}, {
		name: "布拖县",
		value: "513429",
		parent: "513400"
	}, {
		name: "金阳县",
		value: "513430",
		parent: "513400"
	}, {
		name: "昭觉县",
		value: "513431",
		parent: "513400"
	}, {
		name: "喜德县",
		value: "513432",
		parent: "513400"
	}, {
		name: "冕宁县",
		value: "513433",
		parent: "513400"
	}, {
		name: "越西县",
		value: "513434",
		parent: "513400"
	}, {
		name: "甘洛县",
		value: "513435",
		parent: "513400"
	}, {
		name: "美姑县",
		value: "513436",
		parent: "513400"
	}, {
		name: "雷波县",
		value: "513437",
		parent: "513400"
	}, {
		name: "贵阳市",
		value: "520100",
		parent: "520000"
	}, {
		name: "六盘水市",
		value: "520200",
		parent: "520000"
	}, {
		name: "遵义市",
		value: "520300",
		parent: "520000"
	}, {
		name: "安顺市",
		value: "520400",
		parent: "520000"
	}, {
		name: "毕节市",
		value: "520500",
		parent: "520000"
	}, {
		name: "铜仁市",
		value: "520600",
		parent: "520000"
	}, {
		name: "黔西南布依族苗族自治州",
		value: "522300",
		parent: "520000"
	}, {
		name: "黔东南苗族侗族自治州",
		value: "522600",
		parent: "520000"
	}, {
		name: "黔南布依族苗族自治州",
		value: "522700",
		parent: "520000"
	}, {
		name: "南明区",
		value: "520102",
		parent: "520100"
	}, {
		name: "云岩区",
		value: "520103",
		parent: "520100"
	}, {
		name: "花溪区",
		value: "520111",
		parent: "520100"
	}, {
		name: "乌当区",
		value: "520112",
		parent: "520100"
	}, {
		name: "白云区",
		value: "520113",
		parent: "520100"
	}, {
		name: "观山湖区",
		value: "520115",
		parent: "520100"
	}, {
		name: "开阳县",
		value: "520121",
		parent: "520100"
	}, {
		name: "息烽县",
		value: "520122",
		parent: "520100"
	}, {
		name: "修文县",
		value: "520123",
		parent: "520100"
	}, {
		name: "清镇市",
		value: "520181",
		parent: "520100"
	}, {
		name: "钟山区",
		value: "520201",
		parent: "520200"
	}, {
		name: "六枝特区",
		value: "520203",
		parent: "520200"
	}, {
		name: "水城县",
		value: "520221",
		parent: "520200"
	}, {
		name: "盘县",
		value: "520222",
		parent: "520200"
	}, {
		name: "红花岗区",
		value: "520302",
		parent: "520300"
	}, {
		name: "汇川区",
		value: "520303",
		parent: "520300"
	}, {
		name: "遵义县",
		value: "520321",
		parent: "520300"
	}, {
		name: "桐梓县",
		value: "520322",
		parent: "520300"
	}, {
		name: "绥阳县",
		value: "520323",
		parent: "520300"
	}, {
		name: "正安县",
		value: "520324",
		parent: "520300"
	}, {
		name: "道真仡佬族苗族自治县",
		value: "520325",
		parent: "520300"
	}, {
		name: "务川仡佬族苗族自治县",
		value: "520326",
		parent: "520300"
	}, {
		name: "凤冈县",
		value: "520327",
		parent: "520300"
	}, {
		name: "湄潭县",
		value: "520328",
		parent: "520300"
	}, {
		name: "余庆县",
		value: "520329",
		parent: "520300"
	}, {
		name: "习水县",
		value: "520330",
		parent: "520300"
	}, {
		name: "赤水市",
		value: "520381",
		parent: "520300"
	}, {
		name: "仁怀市",
		value: "520382",
		parent: "520300"
	}, {
		name: "西秀区",
		value: "520402",
		parent: "520400"
	}, {
		name: "平坝区",
		value: "520403",
		parent: "520400"
	}, {
		name: "普定县",
		value: "520422",
		parent: "520400"
	}, {
		name: "镇宁布依族苗族自治县",
		value: "520423",
		parent: "520400"
	}, {
		name: "关岭布依族苗族自治县",
		value: "520424",
		parent: "520400"
	}, {
		name: "紫云苗族布依族自治县",
		value: "520425",
		parent: "520400"
	}, {
		name: "七星关区",
		value: "520502",
		parent: "520500"
	}, {
		name: "大方县",
		value: "520521",
		parent: "520500"
	}, {
		name: "黔西县",
		value: "520522",
		parent: "520500"
	}, {
		name: "金沙县",
		value: "520523",
		parent: "520500"
	}, {
		name: "织金县",
		value: "520524",
		parent: "520500"
	}, {
		name: "纳雍县",
		value: "520525",
		parent: "520500"
	}, {
		name: "威宁彝族回族苗族自治县",
		value: "520526",
		parent: "520500"
	}, {
		name: "赫章县",
		value: "520527",
		parent: "520500"
	}, {
		name: "碧江区",
		value: "520602",
		parent: "520600"
	}, {
		name: "万山区",
		value: "520603",
		parent: "520600"
	}, {
		name: "江口县",
		value: "520621",
		parent: "520600"
	}, {
		name: "玉屏侗族自治县",
		value: "520622",
		parent: "520600"
	}, {
		name: "石阡县",
		value: "520623",
		parent: "520600"
	}, {
		name: "思南县",
		value: "520624",
		parent: "520600"
	}, {
		name: "印江土家族苗族自治县",
		value: "520625",
		parent: "520600"
	}, {
		name: "德江县",
		value: "520626",
		parent: "520600"
	}, {
		name: "沿河土家族自治县",
		value: "520627",
		parent: "520600"
	}, {
		name: "松桃苗族自治县",
		value: "520628",
		parent: "520600"
	}, {
		name: "兴义市",
		value: "522301",
		parent: "522300"
	}, {
		name: "兴仁县",
		value: "522322",
		parent: "522300"
	}, {
		name: "普安县",
		value: "522323",
		parent: "522300"
	}, {
		name: "晴隆县",
		value: "522324",
		parent: "522300"
	}, {
		name: "贞丰县",
		value: "522325",
		parent: "522300"
	}, {
		name: "望谟县",
		value: "522326",
		parent: "522300"
	}, {
		name: "册亨县",
		value: "522327",
		parent: "522300"
	}, {
		name: "安龙县",
		value: "522328",
		parent: "522300"
	}, {
		name: "凯里市",
		value: "522601",
		parent: "522600"
	}, {
		name: "黄平县",
		value: "522622",
		parent: "522600"
	}, {
		name: "施秉县",
		value: "522623",
		parent: "522600"
	}, {
		name: "三穗县",
		value: "522624",
		parent: "522600"
	}, {
		name: "镇远县",
		value: "522625",
		parent: "522600"
	}, {
		name: "岑巩县",
		value: "522626",
		parent: "522600"
	}, {
		name: "天柱县",
		value: "522627",
		parent: "522600"
	}, {
		name: "锦屏县",
		value: "522628",
		parent: "522600"
	}, {
		name: "剑河县",
		value: "522629",
		parent: "522600"
	}, {
		name: "台江县",
		value: "522630",
		parent: "522600"
	}, {
		name: "黎平县",
		value: "522631",
		parent: "522600"
	}, {
		name: "榕江县",
		value: "522632",
		parent: "522600"
	}, {
		name: "从江县",
		value: "522633",
		parent: "522600"
	}, {
		name: "雷山县",
		value: "522634",
		parent: "522600"
	}, {
		name: "麻江县",
		value: "522635",
		parent: "522600"
	}, {
		name: "丹寨县",
		value: "522636",
		parent: "522600"
	}, {
		name: "都匀市",
		value: "522701",
		parent: "522700"
	}, {
		name: "福泉市",
		value: "522702",
		parent: "522700"
	}, {
		name: "荔波县",
		value: "522722",
		parent: "522700"
	}, {
		name: "贵定县",
		value: "522723",
		parent: "522700"
	}, {
		name: "瓮安县",
		value: "522725",
		parent: "522700"
	}, {
		name: "独山县",
		value: "522726",
		parent: "522700"
	}, {
		name: "平塘县",
		value: "522727",
		parent: "522700"
	}, {
		name: "罗甸县",
		value: "522728",
		parent: "522700"
	}, {
		name: "长顺县",
		value: "522729",
		parent: "522700"
	}, {
		name: "龙里县",
		value: "522730",
		parent: "522700"
	}, {
		name: "惠水县",
		value: "522731",
		parent: "522700"
	}, {
		name: "三都水族自治县",
		value: "522732",
		parent: "522700"
	}, {
		name: "昆明市",
		value: "530100",
		parent: "530000"
	}, {
		name: "曲靖市",
		value: "530300",
		parent: "530000"
	}, {
		name: "玉溪市",
		value: "530400",
		parent: "530000"
	}, {
		name: "保山市",
		value: "530500",
		parent: "530000"
	}, {
		name: "昭通市",
		value: "530600",
		parent: "530000"
	}, {
		name: "丽江市",
		value: "530700",
		parent: "530000"
	}, {
		name: "普洱市",
		value: "530800",
		parent: "530000"
	}, {
		name: "临沧市",
		value: "530900",
		parent: "530000"
	}, {
		name: "楚雄彝族自治州",
		value: "532300",
		parent: "530000"
	}, {
		name: "红河哈尼族彝族自治州",
		value: "532500",
		parent: "530000"
	}, {
		name: "文山壮族苗族自治州",
		value: "532600",
		parent: "530000"
	}, {
		name: "西双版纳傣族自治州",
		value: "532800",
		parent: "530000"
	}, {
		name: "大理白族自治州",
		value: "532900",
		parent: "530000"
	}, {
		name: "德宏傣族景颇族自治州",
		value: "533100",
		parent: "530000"
	}, {
		name: "怒江傈僳族自治州",
		value: "533300",
		parent: "530000"
	}, {
		name: "迪庆藏族自治州",
		value: "533400",
		parent: "530000"
	}, {
		name: "五华区",
		value: "530102",
		parent: "530100"
	}, {
		name: "盘龙区",
		value: "530103",
		parent: "530100"
	}, {
		name: "官渡区",
		value: "530111",
		parent: "530100"
	}, {
		name: "西山区",
		value: "530112",
		parent: "530100"
	}, {
		name: "东川区",
		value: "530113",
		parent: "530100"
	}, {
		name: "呈贡区",
		value: "530114",
		parent: "530100"
	}, {
		name: "晋宁县",
		value: "530122",
		parent: "530100"
	}, {
		name: "富民县",
		value: "530124",
		parent: "530100"
	}, {
		name: "宜良县",
		value: "530125",
		parent: "530100"
	}, {
		name: "石林彝族自治县",
		value: "530126",
		parent: "530100"
	}, {
		name: "嵩明县",
		value: "530127",
		parent: "530100"
	}, {
		name: "禄劝彝族苗族自治县",
		value: "530128",
		parent: "530100"
	}, {
		name: "寻甸回族彝族自治县",
		value: "530129",
		parent: "530100"
	}, {
		name: "安宁市",
		value: "530181",
		parent: "530100"
	}, {
		name: "麒麟区",
		value: "530302",
		parent: "530300"
	}, {
		name: "马龙县",
		value: "530321",
		parent: "530300"
	}, {
		name: "陆良县",
		value: "530322",
		parent: "530300"
	}, {
		name: "师宗县",
		value: "530323",
		parent: "530300"
	}, {
		name: "罗平县",
		value: "530324",
		parent: "530300"
	}, {
		name: "富源县",
		value: "530325",
		parent: "530300"
	}, {
		name: "会泽县",
		value: "530326",
		parent: "530300"
	}, {
		name: "沾益县",
		value: "530328",
		parent: "530300"
	}, {
		name: "宣威市",
		value: "530381",
		parent: "530300"
	}, {
		name: "红塔区",
		value: "530402",
		parent: "530400"
	}, {
		name: "江川县",
		value: "530421",
		parent: "530400"
	}, {
		name: "澄江县",
		value: "530422",
		parent: "530400"
	}, {
		name: "通海县",
		value: "530423",
		parent: "530400"
	}, {
		name: "华宁县",
		value: "530424",
		parent: "530400"
	}, {
		name: "易门县",
		value: "530425",
		parent: "530400"
	}, {
		name: "峨山彝族自治县",
		value: "530426",
		parent: "530400"
	}, {
		name: "新平彝族傣族自治县",
		value: "530427",
		parent: "530400"
	}, {
		name: "元江哈尼族彝族傣族自治县",
		value: "530428",
		parent: "530400"
	}, {
		name: "隆阳区",
		value: "530502",
		parent: "530500"
	}, {
		name: "施甸县",
		value: "530521",
		parent: "530500"
	}, {
		name: "龙陵县",
		value: "530523",
		parent: "530500"
	}, {
		name: "昌宁县",
		value: "530524",
		parent: "530500"
	}, {
		name: "腾冲市",
		value: "530581",
		parent: "530500"
	}, {
		name: "昭阳区",
		value: "530602",
		parent: "530600"
	}, {
		name: "鲁甸县",
		value: "530621",
		parent: "530600"
	}, {
		name: "巧家县",
		value: "530622",
		parent: "530600"
	}, {
		name: "盐津县",
		value: "530623",
		parent: "530600"
	}, {
		name: "大关县",
		value: "530624",
		parent: "530600"
	}, {
		name: "永善县",
		value: "530625",
		parent: "530600"
	}, {
		name: "绥江县",
		value: "530626",
		parent: "530600"
	}, {
		name: "镇雄县",
		value: "530627",
		parent: "530600"
	}, {
		name: "彝良县",
		value: "530628",
		parent: "530600"
	}, {
		name: "威信县",
		value: "530629",
		parent: "530600"
	}, {
		name: "水富县",
		value: "530630",
		parent: "530600"
	}, {
		name: "古城区",
		value: "530702",
		parent: "530700"
	}, {
		name: "玉龙纳西族自治县",
		value: "530721",
		parent: "530700"
	}, {
		name: "永胜县",
		value: "530722",
		parent: "530700"
	}, {
		name: "华坪县",
		value: "530723",
		parent: "530700"
	}, {
		name: "宁蒗彝族自治县",
		value: "530724",
		parent: "530700"
	}, {
		name: "思茅区",
		value: "530802",
		parent: "530800"
	}, {
		name: "宁洱哈尼族彝族自治县",
		value: "530821",
		parent: "530800"
	}, {
		name: "墨江哈尼族自治县",
		value: "530822",
		parent: "530800"
	}, {
		name: "景东彝族自治县",
		value: "530823",
		parent: "530800"
	}, {
		name: "景谷傣族彝族自治县",
		value: "530824",
		parent: "530800"
	}, {
		name: "镇沅彝族哈尼族拉祜族自治县",
		value: "530825",
		parent: "530800"
	}, {
		name: "江城哈尼族彝族自治县",
		value: "530826",
		parent: "530800"
	}, {
		name: "孟连傣族拉祜族佤族自治县",
		value: "530827",
		parent: "530800"
	}, {
		name: "澜沧拉祜族自治县",
		value: "530828",
		parent: "530800"
	}, {
		name: "西盟佤族自治县",
		value: "530829",
		parent: "530800"
	}, {
		name: "临翔区",
		value: "530902",
		parent: "530900"
	}, {
		name: "凤庆县",
		value: "530921",
		parent: "530900"
	}, {
		name: "云县",
		value: "530922",
		parent: "530900"
	}, {
		name: "永德县",
		value: "530923",
		parent: "530900"
	}, {
		name: "镇康县",
		value: "530924",
		parent: "530900"
	}, {
		name: "双江拉祜族佤族布朗族傣族自治县",
		value: "530925",
		parent: "530900"
	}, {
		name: "耿马傣族佤族自治县",
		value: "530926",
		parent: "530900"
	}, {
		name: "沧源佤族自治县",
		value: "530927",
		parent: "530900"
	}, {
		name: "楚雄市",
		value: "532301",
		parent: "532300"
	}, {
		name: "双柏县",
		value: "532322",
		parent: "532300"
	}, {
		name: "牟定县",
		value: "532323",
		parent: "532300"
	}, {
		name: "南华县",
		value: "532324",
		parent: "532300"
	}, {
		name: "姚安县",
		value: "532325",
		parent: "532300"
	}, {
		name: "大姚县",
		value: "532326",
		parent: "532300"
	}, {
		name: "永仁县",
		value: "532327",
		parent: "532300"
	}, {
		name: "元谋县",
		value: "532328",
		parent: "532300"
	}, {
		name: "武定县",
		value: "532329",
		parent: "532300"
	}, {
		name: "禄丰县",
		value: "532331",
		parent: "532300"
	}, {
		name: "个旧市",
		value: "532501",
		parent: "532500"
	}, {
		name: "开远市",
		value: "532502",
		parent: "532500"
	}, {
		name: "蒙自市",
		value: "532503",
		parent: "532500"
	}, {
		name: "弥勒市",
		value: "532504",
		parent: "532500"
	}, {
		name: "屏边苗族自治县",
		value: "532523",
		parent: "532500"
	}, {
		name: "建水县",
		value: "532524",
		parent: "532500"
	}, {
		name: "石屏县",
		value: "532525",
		parent: "532500"
	}, {
		name: "泸西县",
		value: "532527",
		parent: "532500"
	}, {
		name: "元阳县",
		value: "532528",
		parent: "532500"
	}, {
		name: "红河县",
		value: "532529",
		parent: "532500"
	}, {
		name: "金平苗族瑶族傣族自治县",
		value: "532530",
		parent: "532500"
	}, {
		name: "绿春县",
		value: "532531",
		parent: "532500"
	}, {
		name: "河口瑶族自治县",
		value: "532532",
		parent: "532500"
	}, {
		name: "文山市",
		value: "532601",
		parent: "532600"
	}, {
		name: "砚山县",
		value: "532622",
		parent: "532600"
	}, {
		name: "西畴县",
		value: "532623",
		parent: "532600"
	}, {
		name: "麻栗坡县",
		value: "532624",
		parent: "532600"
	}, {
		name: "马关县",
		value: "532625",
		parent: "532600"
	}, {
		name: "丘北县",
		value: "532626",
		parent: "532600"
	}, {
		name: "广南县",
		value: "532627",
		parent: "532600"
	}, {
		name: "富宁县",
		value: "532628",
		parent: "532600"
	}, {
		name: "景洪市",
		value: "532801",
		parent: "532800"
	}, {
		name: "勐海县",
		value: "532822",
		parent: "532800"
	}, {
		name: "勐腊县",
		value: "532823",
		parent: "532800"
	}, {
		name: "大理市",
		value: "532901",
		parent: "532900"
	}, {
		name: "漾濞彝族自治县",
		value: "532922",
		parent: "532900"
	}, {
		name: "祥云县",
		value: "532923",
		parent: "532900"
	}, {
		name: "宾川县",
		value: "532924",
		parent: "532900"
	}, {
		name: "弥渡县",
		value: "532925",
		parent: "532900"
	}, {
		name: "南涧彝族自治县",
		value: "532926",
		parent: "532900"
	}, {
		name: "巍山彝族回族自治县",
		value: "532927",
		parent: "532900"
	}, {
		name: "永平县",
		value: "532928",
		parent: "532900"
	}, {
		name: "云龙县",
		value: "532929",
		parent: "532900"
	}, {
		name: "洱源县",
		value: "532930",
		parent: "532900"
	}, {
		name: "剑川县",
		value: "532931",
		parent: "532900"
	}, {
		name: "鹤庆县",
		value: "532932",
		parent: "532900"
	}, {
		name: "瑞丽市",
		value: "533102",
		parent: "533100"
	}, {
		name: "芒市",
		value: "533103",
		parent: "533100"
	}, {
		name: "梁河县",
		value: "533122",
		parent: "533100"
	}, {
		name: "盈江县",
		value: "533123",
		parent: "533100"
	}, {
		name: "陇川县",
		value: "533124",
		parent: "533100"
	}, {
		name: "泸水县",
		value: "533321",
		parent: "533300"
	}, {
		name: "福贡县",
		value: "533323",
		parent: "533300"
	}, {
		name: "贡山独龙族怒族自治县",
		value: "533324",
		parent: "533300"
	}, {
		name: "兰坪白族普米族自治县",
		value: "533325",
		parent: "533300"
	}, {
		name: "香格里拉市",
		value: "533401",
		parent: "533400"
	}, {
		name: "德钦县",
		value: "533422",
		parent: "533400"
	}, {
		name: "维西傈僳族自治县",
		value: "533423",
		parent: "533400"
	}, {
		name: "拉萨市",
		value: "540100",
		parent: "540000"
	}, {
		name: "日喀则市",
		value: "540200",
		parent: "540000"
	}, {
		name: "昌都市",
		value: "540300",
		parent: "540000"
	}, {
		name: "林芝市",
		value: "540400",
		parent: "540000"
	}, {
		name: "山南地区",
		value: "542200",
		parent: "540000"
	}, {
		name: "那曲地区",
		value: "542400",
		parent: "540000"
	}, {
		name: "阿里地区",
		value: "542500",
		parent: "540000"
	}, {
		name: "城关区",
		value: "540102",
		parent: "540100"
	}, {
		name: "林周县",
		value: "540121",
		parent: "540100"
	}, {
		name: "当雄县",
		value: "540122",
		parent: "540100"
	}, {
		name: "尼木县",
		value: "540123",
		parent: "540100"
	}, {
		name: "曲水县",
		value: "540124",
		parent: "540100"
	}, {
		name: "堆龙德庆县",
		value: "540125",
		parent: "540100"
	}, {
		name: "达孜县",
		value: "540126",
		parent: "540100"
	}, {
		name: "墨竹工卡县",
		value: "540127",
		parent: "540100"
	}, {
		name: "桑珠孜区",
		value: "540202",
		parent: "540200"
	}, {
		name: "南木林县",
		value: "540221",
		parent: "540200"
	}, {
		name: "江孜县",
		value: "540222",
		parent: "540200"
	}, {
		name: "定日县",
		value: "540223",
		parent: "540200"
	}, {
		name: "萨迦县",
		value: "540224",
		parent: "540200"
	}, {
		name: "拉孜县",
		value: "540225",
		parent: "540200"
	}, {
		name: "昂仁县",
		value: "540226",
		parent: "540200"
	}, {
		name: "谢通门县",
		value: "540227",
		parent: "540200"
	}, {
		name: "白朗县",
		value: "540228",
		parent: "540200"
	}, {
		name: "仁布县",
		value: "540229",
		parent: "540200"
	}, {
		name: "康马县",
		value: "540230",
		parent: "540200"
	}, {
		name: "定结县",
		value: "540231",
		parent: "540200"
	}, {
		name: "仲巴县",
		value: "540232",
		parent: "540200"
	}, {
		name: "亚东县",
		value: "540233",
		parent: "540200"
	}, {
		name: "吉隆县",
		value: "540234",
		parent: "540200"
	}, {
		name: "聂拉木县",
		value: "540235",
		parent: "540200"
	}, {
		name: "萨嘎县",
		value: "540236",
		parent: "540200"
	}, {
		name: "岗巴县",
		value: "540237",
		parent: "540200"
	}, {
		name: "卡若区",
		value: "540302",
		parent: "540300"
	}, {
		name: "江达县",
		value: "540321",
		parent: "540300"
	}, {
		name: "贡觉县",
		value: "540322",
		parent: "540300"
	}, {
		name: "类乌齐县",
		value: "540323",
		parent: "540300"
	}, {
		name: "丁青县",
		value: "540324",
		parent: "540300"
	}, {
		name: "察雅县",
		value: "540325",
		parent: "540300"
	}, {
		name: "八宿县",
		value: "540326",
		parent: "540300"
	}, {
		name: "左贡县",
		value: "540327",
		parent: "540300"
	}, {
		name: "芒康县",
		value: "540328",
		parent: "540300"
	}, {
		name: "洛隆县",
		value: "540329",
		parent: "540300"
	}, {
		name: "边坝县",
		value: "540330",
		parent: "540300"
	}, {
		name: "巴宜区",
		value: "540402",
		parent: "540400"
	}, {
		name: "工布江达县",
		value: "540421",
		parent: "540400"
	}, {
		name: "米林县",
		value: "540422",
		parent: "540400"
	}, {
		name: "墨脱县",
		value: "540423",
		parent: "540400"
	}, {
		name: "波密县",
		value: "540424",
		parent: "540400"
	}, {
		name: "察隅县",
		value: "540425",
		parent: "540400"
	}, {
		name: "朗县",
		value: "540426",
		parent: "540400"
	}, {
		name: "乃东县",
		value: "542221",
		parent: "542200"
	}, {
		name: "扎囊县",
		value: "542222",
		parent: "542200"
	}, {
		name: "贡嘎县",
		value: "542223",
		parent: "542200"
	}, {
		name: "桑日县",
		value: "542224",
		parent: "542200"
	}, {
		name: "琼结县",
		value: "542225",
		parent: "542200"
	}, {
		name: "曲松县",
		value: "542226",
		parent: "542200"
	}, {
		name: "措美县",
		value: "542227",
		parent: "542200"
	}, {
		name: "洛扎县",
		value: "542228",
		parent: "542200"
	}, {
		name: "加查县",
		value: "542229",
		parent: "542200"
	}, {
		name: "隆子县",
		value: "542231",
		parent: "542200"
	}, {
		name: "错那县",
		value: "542232",
		parent: "542200"
	}, {
		name: "浪卡子县",
		value: "542233",
		parent: "542200"
	}, {
		name: "那曲县",
		value: "542421",
		parent: "542400"
	}, {
		name: "嘉黎县",
		value: "542422",
		parent: "542400"
	}, {
		name: "比如县",
		value: "542423",
		parent: "542400"
	}, {
		name: "聂荣县",
		value: "542424",
		parent: "542400"
	}, {
		name: "安多县",
		value: "542425",
		parent: "542400"
	}, {
		name: "申扎县",
		value: "542426",
		parent: "542400"
	}, {
		name: "索县",
		value: "542427",
		parent: "542400"
	}, {
		name: "班戈县",
		value: "542428",
		parent: "542400"
	}, {
		name: "巴青县",
		value: "542429",
		parent: "542400"
	}, {
		name: "尼玛县",
		value: "542430",
		parent: "542400"
	}, {
		name: "双湖县",
		value: "542431",
		parent: "542400"
	}, {
		name: "普兰县",
		value: "542521",
		parent: "542500"
	}, {
		name: "札达县",
		value: "542522",
		parent: "542500"
	}, {
		name: "噶尔县",
		value: "542523",
		parent: "542500"
	}, {
		name: "日土县",
		value: "542524",
		parent: "542500"
	}, {
		name: "革吉县",
		value: "542525",
		parent: "542500"
	}, {
		name: "改则县",
		value: "542526",
		parent: "542500"
	}, {
		name: "措勤县",
		value: "542527",
		parent: "542500"
	}, {
		name: "西安市",
		value: "610100",
		parent: "610000"
	}, {
		name: "铜川市",
		value: "610200",
		parent: "610000"
	}, {
		name: "宝鸡市",
		value: "610300",
		parent: "610000"
	}, {
		name: "咸阳市",
		value: "610400",
		parent: "610000"
	}, {
		name: "渭南市",
		value: "610500",
		parent: "610000"
	}, {
		name: "延安市",
		value: "610600",
		parent: "610000"
	}, {
		name: "汉中市",
		value: "610700",
		parent: "610000"
	}, {
		name: "榆林市",
		value: "610800",
		parent: "610000"
	}, {
		name: "安康市",
		value: "610900",
		parent: "610000"
	}, {
		name: "商洛市",
		value: "611000",
		parent: "610000"
	}, {
		name: "新城区",
		value: "610102",
		parent: "610100"
	}, {
		name: "碑林区",
		value: "610103",
		parent: "610100"
	}, {
		name: "莲湖区",
		value: "610104",
		parent: "610100"
	}, {
		name: "灞桥区",
		value: "610111",
		parent: "610100"
	}, {
		name: "未央区",
		value: "610112",
		parent: "610100"
	}, {
		name: "雁塔区",
		value: "610113",
		parent: "610100"
	}, {
		name: "阎良区",
		value: "610114",
		parent: "610100"
	}, {
		name: "临潼区",
		value: "610115",
		parent: "610100"
	}, {
		name: "长安区",
		value: "610116",
		parent: "610100"
	}, {
		name: "高陵区",
		value: "610117",
		parent: "610100"
	}, {
		name: "蓝田县",
		value: "610122",
		parent: "610100"
	}, {
		name: "周至县",
		value: "610124",
		parent: "610100"
	}, {
		name: "户县",
		value: "610125",
		parent: "610100"
	}, {
		name: "王益区",
		value: "610202",
		parent: "610200"
	}, {
		name: "印台区",
		value: "610203",
		parent: "610200"
	}, {
		name: "耀州区",
		value: "610204",
		parent: "610200"
	}, {
		name: "宜君县",
		value: "610222",
		parent: "610200"
	}, {
		name: "渭滨区",
		value: "610302",
		parent: "610300"
	}, {
		name: "金台区",
		value: "610303",
		parent: "610300"
	}, {
		name: "陈仓区",
		value: "610304",
		parent: "610300"
	}, {
		name: "凤翔县",
		value: "610322",
		parent: "610300"
	}, {
		name: "岐山县",
		value: "610323",
		parent: "610300"
	}, {
		name: "扶风县",
		value: "610324",
		parent: "610300"
	}, {
		name: "眉县",
		value: "610326",
		parent: "610300"
	}, {
		name: "陇县",
		value: "610327",
		parent: "610300"
	}, {
		name: "千阳县",
		value: "610328",
		parent: "610300"
	}, {
		name: "麟游县",
		value: "610329",
		parent: "610300"
	}, {
		name: "凤县",
		value: "610330",
		parent: "610300"
	}, {
		name: "太白县",
		value: "610331",
		parent: "610300"
	}, {
		name: "秦都区",
		value: "610402",
		parent: "610400"
	}, {
		name: "杨陵区",
		value: "610403",
		parent: "610400"
	}, {
		name: "渭城区",
		value: "610404",
		parent: "610400"
	}, {
		name: "三原县",
		value: "610422",
		parent: "610400"
	}, {
		name: "泾阳县",
		value: "610423",
		parent: "610400"
	}, {
		name: "乾县",
		value: "610424",
		parent: "610400"
	}, {
		name: "礼泉县",
		value: "610425",
		parent: "610400"
	}, {
		name: "永寿县",
		value: "610426",
		parent: "610400"
	}, {
		name: "彬县",
		value: "610427",
		parent: "610400"
	}, {
		name: "长武县",
		value: "610428",
		parent: "610400"
	}, {
		name: "旬邑县",
		value: "610429",
		parent: "610400"
	}, {
		name: "淳化县",
		value: "610430",
		parent: "610400"
	}, {
		name: "武功县",
		value: "610431",
		parent: "610400"
	}, {
		name: "兴平市",
		value: "610481",
		parent: "610400"
	}, {
		name: "临渭区",
		value: "610502",
		parent: "610500"
	}, {
		name: "华县",
		value: "610521",
		parent: "610500"
	}, {
		name: "潼关县",
		value: "610522",
		parent: "610500"
	}, {
		name: "大荔县",
		value: "610523",
		parent: "610500"
	}, {
		name: "合阳县",
		value: "610524",
		parent: "610500"
	}, {
		name: "澄城县",
		value: "610525",
		parent: "610500"
	}, {
		name: "蒲城县",
		value: "610526",
		parent: "610500"
	}, {
		name: "白水县",
		value: "610527",
		parent: "610500"
	}, {
		name: "富平县",
		value: "610528",
		parent: "610500"
	}, {
		name: "韩城市",
		value: "610581",
		parent: "610500"
	}, {
		name: "华阴市",
		value: "610582",
		parent: "610500"
	}, {
		name: "宝塔区",
		value: "610602",
		parent: "610600"
	}, {
		name: "延长县",
		value: "610621",
		parent: "610600"
	}, {
		name: "延川县",
		value: "610622",
		parent: "610600"
	}, {
		name: "子长县",
		value: "610623",
		parent: "610600"
	}, {
		name: "安塞县",
		value: "610624",
		parent: "610600"
	}, {
		name: "志丹县",
		value: "610625",
		parent: "610600"
	}, {
		name: "吴起县",
		value: "610626",
		parent: "610600"
	}, {
		name: "甘泉县",
		value: "610627",
		parent: "610600"
	}, {
		name: "富县",
		value: "610628",
		parent: "610600"
	}, {
		name: "洛川县",
		value: "610629",
		parent: "610600"
	}, {
		name: "宜川县",
		value: "610630",
		parent: "610600"
	}, {
		name: "黄龙县",
		value: "610631",
		parent: "610600"
	}, {
		name: "黄陵县",
		value: "610632",
		parent: "610600"
	}, {
		name: "汉台区",
		value: "610702",
		parent: "610700"
	}, {
		name: "南郑县",
		value: "610721",
		parent: "610700"
	}, {
		name: "城固县",
		value: "610722",
		parent: "610700"
	}, {
		name: "洋县",
		value: "610723",
		parent: "610700"
	}, {
		name: "西乡县",
		value: "610724",
		parent: "610700"
	}, {
		name: "勉县",
		value: "610725",
		parent: "610700"
	}, {
		name: "宁强县",
		value: "610726",
		parent: "610700"
	}, {
		name: "略阳县",
		value: "610727",
		parent: "610700"
	}, {
		name: "镇巴县",
		value: "610728",
		parent: "610700"
	}, {
		name: "留坝县",
		value: "610729",
		parent: "610700"
	}, {
		name: "佛坪县",
		value: "610730",
		parent: "610700"
	}, {
		name: "榆阳区",
		value: "610802",
		parent: "610800"
	}, {
		name: "神木县",
		value: "610821",
		parent: "610800"
	}, {
		name: "府谷县",
		value: "610822",
		parent: "610800"
	}, {
		name: "横山县",
		value: "610823",
		parent: "610800"
	}, {
		name: "靖边县",
		value: "610824",
		parent: "610800"
	}, {
		name: "定边县",
		value: "610825",
		parent: "610800"
	}, {
		name: "绥德县",
		value: "610826",
		parent: "610800"
	}, {
		name: "米脂县",
		value: "610827",
		parent: "610800"
	}, {
		name: "佳县",
		value: "610828",
		parent: "610800"
	}, {
		name: "吴堡县",
		value: "610829",
		parent: "610800"
	}, {
		name: "清涧县",
		value: "610830",
		parent: "610800"
	}, {
		name: "子洲县",
		value: "610831",
		parent: "610800"
	}, {
		name: "汉滨区",
		value: "610902",
		parent: "610900"
	}, {
		name: "汉阴县",
		value: "610921",
		parent: "610900"
	}, {
		name: "石泉县",
		value: "610922",
		parent: "610900"
	}, {
		name: "宁陕县",
		value: "610923",
		parent: "610900"
	}, {
		name: "紫阳县",
		value: "610924",
		parent: "610900"
	}, {
		name: "岚皋县",
		value: "610925",
		parent: "610900"
	}, {
		name: "平利县",
		value: "610926",
		parent: "610900"
	}, {
		name: "镇坪县",
		value: "610927",
		parent: "610900"
	}, {
		name: "旬阳县",
		value: "610928",
		parent: "610900"
	}, {
		name: "白河县",
		value: "610929",
		parent: "610900"
	}, {
		name: "商州区",
		value: "611002",
		parent: "611000"
	}, {
		name: "洛南县",
		value: "611021",
		parent: "611000"
	}, {
		name: "丹凤县",
		value: "611022",
		parent: "611000"
	}, {
		name: "商南县",
		value: "611023",
		parent: "611000"
	}, {
		name: "山阳县",
		value: "611024",
		parent: "611000"
	}, {
		name: "镇安县",
		value: "611025",
		parent: "611000"
	}, {
		name: "柞水县",
		value: "611026",
		parent: "611000"
	}, {
		name: "兰州市",
		value: "620100",
		parent: "620000"
	}, {
		name: "嘉峪关市",
		value: "620200",
		parent: "620000"
	}, {
		name: "金昌市",
		value: "620300",
		parent: "620000"
	}, {
		name: "白银市",
		value: "620400",
		parent: "620000"
	}, {
		name: "天水市",
		value: "620500",
		parent: "620000"
	}, {
		name: "武威市",
		value: "620600",
		parent: "620000"
	}, {
		name: "张掖市",
		value: "620700",
		parent: "620000"
	}, {
		name: "平凉市",
		value: "620800",
		parent: "620000"
	}, {
		name: "酒泉市",
		value: "620900",
		parent: "620000"
	}, {
		name: "庆阳市",
		value: "621000",
		parent: "620000"
	}, {
		name: "定西市",
		value: "621100",
		parent: "620000"
	}, {
		name: "陇南市",
		value: "621200",
		parent: "620000"
	}, {
		name: "临夏回族自治州",
		value: "622900",
		parent: "620000"
	}, {
		name: "甘南藏族自治州",
		value: "623000",
		parent: "620000"
	}, {
		name: "城关区",
		value: "620102",
		parent: "620100"
	}, {
		name: "七里河区",
		value: "620103",
		parent: "620100"
	}, {
		name: "西固区",
		value: "620104",
		parent: "620100"
	}, {
		name: "安宁区",
		value: "620105",
		parent: "620100"
	}, {
		name: "红古区",
		value: "620111",
		parent: "620100"
	}, {
		name: "永登县",
		value: "620121",
		parent: "620100"
	}, {
		name: "皋兰县",
		value: "620122",
		parent: "620100"
	}, {
		name: "榆中县",
		value: "620123",
		parent: "620100"
	}, {
		name: "金川区",
		value: "620302",
		parent: "620300"
	}, {
		name: "永昌县",
		value: "620321",
		parent: "620300"
	}, {
		name: "白银区",
		value: "620402",
		parent: "620400"
	}, {
		name: "平川区",
		value: "620403",
		parent: "620400"
	}, {
		name: "靖远县",
		value: "620421",
		parent: "620400"
	}, {
		name: "会宁县",
		value: "620422",
		parent: "620400"
	}, {
		name: "景泰县",
		value: "620423",
		parent: "620400"
	}, {
		name: "秦州区",
		value: "620502",
		parent: "620500"
	}, {
		name: "麦积区",
		value: "620503",
		parent: "620500"
	}, {
		name: "清水县",
		value: "620521",
		parent: "620500"
	}, {
		name: "秦安县",
		value: "620522",
		parent: "620500"
	}, {
		name: "甘谷县",
		value: "620523",
		parent: "620500"
	}, {
		name: "武山县",
		value: "620524",
		parent: "620500"
	}, {
		name: "张家川回族自治县",
		value: "620525",
		parent: "620500"
	}, {
		name: "凉州区",
		value: "620602",
		parent: "620600"
	}, {
		name: "民勤县",
		value: "620621",
		parent: "620600"
	}, {
		name: "古浪县",
		value: "620622",
		parent: "620600"
	}, {
		name: "天祝藏族自治县",
		value: "620623",
		parent: "620600"
	}, {
		name: "甘州区",
		value: "620702",
		parent: "620700"
	}, {
		name: "肃南裕固族自治县",
		value: "620721",
		parent: "620700"
	}, {
		name: "民乐县",
		value: "620722",
		parent: "620700"
	}, {
		name: "临泽县",
		value: "620723",
		parent: "620700"
	}, {
		name: "高台县",
		value: "620724",
		parent: "620700"
	}, {
		name: "山丹县",
		value: "620725",
		parent: "620700"
	}, {
		name: "崆峒区",
		value: "620802",
		parent: "620800"
	}, {
		name: "泾川县",
		value: "620821",
		parent: "620800"
	}, {
		name: "灵台县",
		value: "620822",
		parent: "620800"
	}, {
		name: "崇信县",
		value: "620823",
		parent: "620800"
	}, {
		name: "华亭县",
		value: "620824",
		parent: "620800"
	}, {
		name: "庄浪县",
		value: "620825",
		parent: "620800"
	}, {
		name: "静宁县",
		value: "620826",
		parent: "620800"
	}, {
		name: "肃州区",
		value: "620902",
		parent: "620900"
	}, {
		name: "金塔县",
		value: "620921",
		parent: "620900"
	}, {
		name: "瓜州县",
		value: "620922",
		parent: "620900"
	}, {
		name: "肃北蒙古族自治县",
		value: "620923",
		parent: "620900"
	}, {
		name: "阿克塞哈萨克族自治县",
		value: "620924",
		parent: "620900"
	}, {
		name: "玉门市",
		value: "620981",
		parent: "620900"
	}, {
		name: "敦煌市",
		value: "620982",
		parent: "620900"
	}, {
		name: "西峰区",
		value: "621002",
		parent: "621000"
	}, {
		name: "庆城县",
		value: "621021",
		parent: "621000"
	}, {
		name: "环县",
		value: "621022",
		parent: "621000"
	}, {
		name: "华池县",
		value: "621023",
		parent: "621000"
	}, {
		name: "合水县",
		value: "621024",
		parent: "621000"
	}, {
		name: "正宁县",
		value: "621025",
		parent: "621000"
	}, {
		name: "宁县",
		value: "621026",
		parent: "621000"
	}, {
		name: "镇原县",
		value: "621027",
		parent: "621000"
	}, {
		name: "安定区",
		value: "621102",
		parent: "621100"
	}, {
		name: "通渭县",
		value: "621121",
		parent: "621100"
	}, {
		name: "陇西县",
		value: "621122",
		parent: "621100"
	}, {
		name: "渭源县",
		value: "621123",
		parent: "621100"
	}, {
		name: "临洮县",
		value: "621124",
		parent: "621100"
	}, {
		name: "漳县",
		value: "621125",
		parent: "621100"
	}, {
		name: "岷县",
		value: "621126",
		parent: "621100"
	}, {
		name: "武都区",
		value: "621202",
		parent: "621200"
	}, {
		name: "成县",
		value: "621221",
		parent: "621200"
	}, {
		name: "文县",
		value: "621222",
		parent: "621200"
	}, {
		name: "宕昌县",
		value: "621223",
		parent: "621200"
	}, {
		name: "康县",
		value: "621224",
		parent: "621200"
	}, {
		name: "西和县",
		value: "621225",
		parent: "621200"
	}, {
		name: "礼县",
		value: "621226",
		parent: "621200"
	}, {
		name: "徽县",
		value: "621227",
		parent: "621200"
	}, {
		name: "两当县",
		value: "621228",
		parent: "621200"
	}, {
		name: "临夏市",
		value: "622901",
		parent: "622900"
	}, {
		name: "临夏县",
		value: "622921",
		parent: "622900"
	}, {
		name: "康乐县",
		value: "622922",
		parent: "622900"
	}, {
		name: "永靖县",
		value: "622923",
		parent: "622900"
	}, {
		name: "广河县",
		value: "622924",
		parent: "622900"
	}, {
		name: "和政县",
		value: "622925",
		parent: "622900"
	}, {
		name: "东乡族自治县",
		value: "622926",
		parent: "622900"
	}, {
		name: "积石山保安族东乡族撒拉族自治县",
		value: "622927",
		parent: "622900"
	}, {
		name: "合作市",
		value: "623001",
		parent: "623000"
	}, {
		name: "临潭县",
		value: "623021",
		parent: "623000"
	}, {
		name: "卓尼县",
		value: "623022",
		parent: "623000"
	}, {
		name: "舟曲县",
		value: "623023",
		parent: "623000"
	}, {
		name: "迭部县",
		value: "623024",
		parent: "623000"
	}, {
		name: "玛曲县",
		value: "623025",
		parent: "623000"
	}, {
		name: "碌曲县",
		value: "623026",
		parent: "623000"
	}, {
		name: "夏河县",
		value: "623027",
		parent: "623000"
	}, {
		name: "西宁市",
		value: "630100",
		parent: "630000"
	}, {
		name: "海东市",
		value: "630200",
		parent: "630000"
	}, {
		name: "海北藏族自治州",
		value: "632200",
		parent: "630000"
	}, {
		name: "黄南藏族自治州",
		value: "632300",
		parent: "630000"
	}, {
		name: "海南藏族自治州",
		value: "632500",
		parent: "630000"
	}, {
		name: "果洛藏族自治州",
		value: "632600",
		parent: "630000"
	}, {
		name: "玉树藏族自治州",
		value: "632700",
		parent: "630000"
	}, {
		name: "海西蒙古族藏族自治州",
		value: "632800",
		parent: "630000"
	}, {
		name: "城东区",
		value: "630102",
		parent: "630100"
	}, {
		name: "城中区",
		value: "630103",
		parent: "630100"
	}, {
		name: "城西区",
		value: "630104",
		parent: "630100"
	}, {
		name: "城北区",
		value: "630105",
		parent: "630100"
	}, {
		name: "大通回族土族自治县",
		value: "630121",
		parent: "630100"
	}, {
		name: "湟中县",
		value: "630122",
		parent: "630100"
	}, {
		name: "湟源县",
		value: "630123",
		parent: "630100"
	}, {
		name: "乐都区",
		value: "630202",
		parent: "630200"
	}, {
		name: "平安区",
		value: "630203",
		parent: "630200"
	}, {
		name: "民和回族土族自治县",
		value: "630222",
		parent: "630200"
	}, {
		name: "互助土族自治县",
		value: "630223",
		parent: "630200"
	}, {
		name: "化隆回族自治县",
		value: "630224",
		parent: "630200"
	}, {
		name: "循化撒拉族自治县",
		value: "630225",
		parent: "630200"
	}, {
		name: "门源回族自治县",
		value: "632221",
		parent: "632200"
	}, {
		name: "祁连县",
		value: "632222",
		parent: "632200"
	}, {
		name: "海晏县",
		value: "632223",
		parent: "632200"
	}, {
		name: "刚察县",
		value: "632224",
		parent: "632200"
	}, {
		name: "同仁县",
		value: "632321",
		parent: "632300"
	}, {
		name: "尖扎县",
		value: "632322",
		parent: "632300"
	}, {
		name: "泽库县",
		value: "632323",
		parent: "632300"
	}, {
		name: "河南蒙古族自治县",
		value: "632324",
		parent: "632300"
	}, {
		name: "共和县",
		value: "632521",
		parent: "632500"
	}, {
		name: "同德县",
		value: "632522",
		parent: "632500"
	}, {
		name: "贵德县",
		value: "632523",
		parent: "632500"
	}, {
		name: "兴海县",
		value: "632524",
		parent: "632500"
	}, {
		name: "贵南县",
		value: "632525",
		parent: "632500"
	}, {
		name: "玛沁县",
		value: "632621",
		parent: "632600"
	}, {
		name: "班玛县",
		value: "632622",
		parent: "632600"
	}, {
		name: "甘德县",
		value: "632623",
		parent: "632600"
	}, {
		name: "达日县",
		value: "632624",
		parent: "632600"
	}, {
		name: "久治县",
		value: "632625",
		parent: "632600"
	}, {
		name: "玛多县",
		value: "632626",
		parent: "632600"
	}, {
		name: "玉树市",
		value: "632701",
		parent: "632700"
	}, {
		name: "杂多县",
		value: "632722",
		parent: "632700"
	}, {
		name: "称多县",
		value: "632723",
		parent: "632700"
	}, {
		name: "治多县",
		value: "632724",
		parent: "632700"
	}, {
		name: "囊谦县",
		value: "632725",
		parent: "632700"
	}, {
		name: "曲麻莱县",
		value: "632726",
		parent: "632700"
	}, {
		name: "格尔木市",
		value: "632801",
		parent: "632800"
	}, {
		name: "德令哈市",
		value: "632802",
		parent: "632800"
	}, {
		name: "乌兰县",
		value: "632821",
		parent: "632800"
	}, {
		name: "都兰县",
		value: "632822",
		parent: "632800"
	}, {
		name: "天峻县",
		value: "632823",
		parent: "632800"
	}, {
		name: "银川市",
		value: "640100",
		parent: "640000"
	}, {
		name: "石嘴山市",
		value: "640200",
		parent: "640000"
	}, {
		name: "吴忠市",
		value: "640300",
		parent: "640000"
	}, {
		name: "固原市",
		value: "640400",
		parent: "640000"
	}, {
		name: "中卫市",
		value: "640500",
		parent: "640000"
	}, {
		name: "兴庆区",
		value: "640104",
		parent: "640100"
	}, {
		name: "西夏区",
		value: "640105",
		parent: "640100"
	}, {
		name: "金凤区",
		value: "640106",
		parent: "640100"
	}, {
		name: "永宁县",
		value: "640121",
		parent: "640100"
	}, {
		name: "贺兰县",
		value: "640122",
		parent: "640100"
	}, {
		name: "灵武市",
		value: "640181",
		parent: "640100"
	}, {
		name: "大武口区",
		value: "640202",
		parent: "640200"
	}, {
		name: "惠农区",
		value: "640205",
		parent: "640200"
	}, {
		name: "平罗县",
		value: "640221",
		parent: "640200"
	}, {
		name: "利通区",
		value: "640302",
		parent: "640300"
	}, {
		name: "红寺堡区",
		value: "640303",
		parent: "640300"
	}, {
		name: "盐池县",
		value: "640323",
		parent: "640300"
	}, {
		name: "同心县",
		value: "640324",
		parent: "640300"
	}, {
		name: "青铜峡市",
		value: "640381",
		parent: "640300"
	}, {
		name: "原州区",
		value: "640402",
		parent: "640400"
	}, {
		name: "西吉县",
		value: "640422",
		parent: "640400"
	}, {
		name: "隆德县",
		value: "640423",
		parent: "640400"
	}, {
		name: "泾源县",
		value: "640424",
		parent: "640400"
	}, {
		name: "彭阳县",
		value: "640425",
		parent: "640400"
	}, {
		name: "沙坡头区",
		value: "640502",
		parent: "640500"
	}, {
		name: "中宁县",
		value: "640521",
		parent: "640500"
	}, {
		name: "海原县",
		value: "640522",
		parent: "640500"
	}, {
		name: "乌鲁木齐市",
		value: "650100",
		parent: "650000"
	}, {
		name: "克拉玛依市",
		value: "650200",
		parent: "650000"
	}, {
		name: "吐鲁番市",
		value: "650400",
		parent: "650000"
	}, {
		name: "哈密地区",
		value: "652200",
		parent: "650000"
	}, {
		name: "昌吉回族自治州",
		value: "652300",
		parent: "650000"
	}, {
		name: "博尔塔拉蒙古自治州",
		value: "652700",
		parent: "650000"
	}, {
		name: "巴音郭楞蒙古自治州",
		value: "652800",
		parent: "650000"
	}, {
		name: "阿克苏地区",
		value: "652900",
		parent: "650000"
	}, {
		name: "克孜勒苏柯尔克孜自治州",
		value: "653000",
		parent: "650000"
	}, {
		name: "喀什地区",
		value: "653100",
		parent: "650000"
	}, {
		name: "和田地区",
		value: "653200",
		parent: "650000"
	}, {
		name: "伊犁哈萨克自治州",
		value: "654000",
		parent: "650000"
	}, {
		name: "塔城地区",
		value: "654200",
		parent: "650000"
	}, {
		name: "阿勒泰地区",
		value: "654300",
		parent: "650000"
	}, {
		name: "石河子市",
		value: "659001",
		parent: "650000"
	}, {
		name: "阿拉尔市",
		value: "659002",
		parent: "650000"
	}, {
		name: "图木舒克市",
		value: "659003",
		parent: "650000"
	}, {
		name: "五家渠市",
		value: "659004",
		parent: "650000"
	}, {
		name: "天山区",
		value: "650102",
		parent: "650100"
	}, {
		name: "沙依巴克区",
		value: "650103",
		parent: "650100"
	}, {
		name: "新市区",
		value: "650104",
		parent: "650100"
	}, {
		name: "水磨沟区",
		value: "650105",
		parent: "650100"
	}, {
		name: "头屯河区",
		value: "650106",
		parent: "650100"
	}, {
		name: "达坂城区",
		value: "650107",
		parent: "650100"
	}, {
		name: "米东区",
		value: "650109",
		parent: "650100"
	}, {
		name: "乌鲁木齐县",
		value: "650121",
		parent: "650100"
	}, {
		name: "独山子区",
		value: "650202",
		parent: "650200"
	}, {
		name: "克拉玛依区",
		value: "650203",
		parent: "650200"
	}, {
		name: "白碱滩区",
		value: "650204",
		parent: "650200"
	}, {
		name: "乌尔禾区",
		value: "650205",
		parent: "650200"
	}, {
		name: "高昌区",
		value: "650402",
		parent: "650400"
	}, {
		name: "鄯善县",
		value: "650421",
		parent: "650400"
	}, {
		name: "托克逊县",
		value: "650422",
		parent: "650400"
	}, {
		name: "哈密市",
		value: "652201",
		parent: "652200"
	}, {
		name: "巴里坤哈萨克自治县",
		value: "652222",
		parent: "652200"
	}, {
		name: "伊吾县",
		value: "652223",
		parent: "652200"
	}, {
		name: "昌吉市",
		value: "652301",
		parent: "652300"
	}, {
		name: "阜康市",
		value: "652302",
		parent: "652300"
	}, {
		name: "呼图壁县",
		value: "652323",
		parent: "652300"
	}, {
		name: "玛纳斯县",
		value: "652324",
		parent: "652300"
	}, {
		name: "奇台县",
		value: "652325",
		parent: "652300"
	}, {
		name: "吉木萨尔县",
		value: "652327",
		parent: "652300"
	}, {
		name: "木垒哈萨克自治县",
		value: "652328",
		parent: "652300"
	}, {
		name: "博乐市",
		value: "652701",
		parent: "652700"
	}, {
		name: "阿拉山口市",
		value: "652702",
		parent: "652700"
	}, {
		name: "精河县",
		value: "652722",
		parent: "652700"
	}, {
		name: "温泉县",
		value: "652723",
		parent: "652700"
	}, {
		name: "库尔勒市",
		value: "652801",
		parent: "652800"
	}, {
		name: "轮台县",
		value: "652822",
		parent: "652800"
	}, {
		name: "尉犁县",
		value: "652823",
		parent: "652800"
	}, {
		name: "若羌县",
		value: "652824",
		parent: "652800"
	}, {
		name: "且末县",
		value: "652825",
		parent: "652800"
	}, {
		name: "焉耆回族自治县",
		value: "652826",
		parent: "652800"
	}, {
		name: "和静县",
		value: "652827",
		parent: "652800"
	}, {
		name: "和硕县",
		value: "652828",
		parent: "652800"
	}, {
		name: "博湖县",
		value: "652829",
		parent: "652800"
	}, {
		name: "阿克苏市",
		value: "652901",
		parent: "652900"
	}, {
		name: "温宿县",
		value: "652922",
		parent: "652900"
	}, {
		name: "库车县",
		value: "652923",
		parent: "652900"
	}, {
		name: "沙雅县",
		value: "652924",
		parent: "652900"
	}, {
		name: "新和县",
		value: "652925",
		parent: "652900"
	}, {
		name: "拜城县",
		value: "652926",
		parent: "652900"
	}, {
		name: "乌什县",
		value: "652927",
		parent: "652900"
	}, {
		name: "阿瓦提县",
		value: "652928",
		parent: "652900"
	}, {
		name: "柯坪县",
		value: "652929",
		parent: "652900"
	}, {
		name: "阿图什市",
		value: "653001",
		parent: "653000"
	}, {
		name: "阿克陶县",
		value: "653022",
		parent: "653000"
	}, {
		name: "阿合奇县",
		value: "653023",
		parent: "653000"
	}, {
		name: "乌恰县",
		value: "653024",
		parent: "653000"
	}, {
		name: "喀什市",
		value: "653101",
		parent: "653100"
	}, {
		name: "疏附县",
		value: "653121",
		parent: "653100"
	}, {
		name: "疏勒县",
		value: "653122",
		parent: "653100"
	}, {
		name: "英吉沙县",
		value: "653123",
		parent: "653100"
	}, {
		name: "泽普县",
		value: "653124",
		parent: "653100"
	}, {
		name: "莎车县",
		value: "653125",
		parent: "653100"
	}, {
		name: "叶城县",
		value: "653126",
		parent: "653100"
	}, {
		name: "麦盖提县",
		value: "653127",
		parent: "653100"
	}, {
		name: "岳普湖县",
		value: "653128",
		parent: "653100"
	}, {
		name: "伽师县",
		value: "653129",
		parent: "653100"
	}, {
		name: "巴楚县",
		value: "653130",
		parent: "653100"
	}, {
		name: "塔什库尔干塔吉克自治县",
		value: "653131",
		parent: "653100"
	}, {
		name: "和田市",
		value: "653201",
		parent: "653200"
	}, {
		name: "和田县",
		value: "653221",
		parent: "653200"
	}, {
		name: "墨玉县",
		value: "653222",
		parent: "653200"
	}, {
		name: "皮山县",
		value: "653223",
		parent: "653200"
	}, {
		name: "洛浦县",
		value: "653224",
		parent: "653200"
	}, {
		name: "策勒县",
		value: "653225",
		parent: "653200"
	}, {
		name: "于田县",
		value: "653226",
		parent: "653200"
	}, {
		name: "民丰县",
		value: "653227",
		parent: "653200"
	}, {
		name: "伊宁市",
		value: "654002",
		parent: "654000"
	}, {
		name: "奎屯市",
		value: "654003",
		parent: "654000"
	}, {
		name: "霍尔果斯市",
		value: "654004",
		parent: "654000"
	}, {
		name: "伊宁县",
		value: "654021",
		parent: "654000"
	}, {
		name: "察布查尔锡伯自治县",
		value: "654022",
		parent: "654000"
	}, {
		name: "霍城县",
		value: "654023",
		parent: "654000"
	}, {
		name: "巩留县",
		value: "654024",
		parent: "654000"
	}, {
		name: "新源县",
		value: "654025",
		parent: "654000"
	}, {
		name: "昭苏县",
		value: "654026",
		parent: "654000"
	}, {
		name: "特克斯县",
		value: "654027",
		parent: "654000"
	}, {
		name: "尼勒克县",
		value: "654028",
		parent: "654000"
	}, {
		name: "塔城市",
		value: "654201",
		parent: "654200"
	}, {
		name: "乌苏市",
		value: "654202",
		parent: "654200"
	}, {
		name: "额敏县",
		value: "654221",
		parent: "654200"
	}, {
		name: "沙湾县",
		value: "654223",
		parent: "654200"
	}, {
		name: "托里县",
		value: "654224",
		parent: "654200"
	}, {
		name: "裕民县",
		value: "654225",
		parent: "654200"
	}, {
		name: "和布克赛尔蒙古自治县",
		value: "654226",
		parent: "654200"
	}, {
		name: "阿勒泰市",
		value: "654301",
		parent: "654300"
	}, {
		name: "布尔津县",
		value: "654321",
		parent: "654300"
	}, {
		name: "富蕴县",
		value: "654322",
		parent: "654300"
	}, {
		name: "福海县",
		value: "654323",
		parent: "654300"
	}, {
		name: "哈巴河县",
		value: "654324",
		parent: "654300"
	}, {
		name: "青河县",
		value: "654325",
		parent: "654300"
	}, {
		name: "吉木乃县",
		value: "654326",
		parent: "654300"
	}, {
		name: "中西區",
		value: "810001",
		parent: "810000"
	}, {
		name: "灣仔區",
		value: "810002",
		parent: "810000"
	}, {
		name: "東區",
		value: "810003",
		parent: "810000"
	}, {
		name: "南區",
		value: "810004",
		parent: "810000"
	}, {
		name: "油尖旺區",
		value: "810005",
		parent: "810000"
	}, {
		name: "深水埗區",
		value: "810006",
		parent: "810000"
	}, {
		name: "九龍城區",
		value: "810007",
		parent: "810000"
	}, {
		name: "黃大仙區",
		value: "810008",
		parent: "810000"
	}, {
		name: "觀塘區",
		value: "810009",
		parent: "810000"
	}, {
		name: "荃灣區",
		value: "810010",
		parent: "810000"
	}, {
		name: "屯門區",
		value: "810011",
		parent: "810000"
	}, {
		name: "元朗區",
		value: "810012",
		parent: "810000"
	}, {
		name: "北區",
		value: "810013",
		parent: "810000"
	}, {
		name: "大埔區",
		value: "810014",
		parent: "810000"
	}, {
		name: "西貢區",
		value: "810015",
		parent: "810000"
	}, {
		name: "沙田區",
		value: "810016",
		parent: "810000"
	}, {
		name: "葵青區",
		value: "810017",
		parent: "810000"
	}, {
		name: "離島區",
		value: "810018",
		parent: "810000"
	}, {
		name: "花地瑪堂區",
		value: "820001",
		parent: "820000"
	}, {
		name: "花王堂區",
		value: "820002",
		parent: "820000"
	}, {
		name: "望德堂區",
		value: "820003",
		parent: "820000"
	}, {
		name: "大堂區",
		value: "820004",
		parent: "820000"
	}, {
		name: "風順堂區",
		value: "820005",
		parent: "820000"
	}, {
		name: "嘉模堂區",
		value: "820006",
		parent: "820000"
	}, {
		name: "路氹填海區",
		value: "820007",
		parent: "820000"
	}, {
		name: "聖方濟各堂區",
		value: "820008",
		parent: "820000"
	}, {
		name: "--",
		value: "--",
		parent: "110200"
	}, {
		name: "--",
		value: "--",
		parent: "120200"
	}, {
		name: "--",
		value: "--",
		parent: "139000"
	}, {
		name: "--",
		value: "--",
		parent: "139001"
	}, {
		name: "--",
		value: "--",
		parent: "139002"
	}, {
		name: "--",
		value: "--",
		parent: "310200"
	}, {
		name: "--",
		value: "--",
		parent: "419000"
	}, {
		name: "--",
		value: "--",
		parent: "419001"
	}, {
		name: "--",
		value: "--",
		parent: "429000"
	}, {
		name: "--",
		value: "--",
		parent: "429004"
	}, {
		name: "--",
		value: "--",
		parent: "429005"
	}, {
		name: "--",
		value: "--",
		parent: "429006"
	}, {
		name: "--",
		value: "--",
		parent: "429021"
	}, {
		name: "--",
		value: "--",
		parent: "441900"
	}, {
		name: "--",
		value: "--",
		parent: "442000"
	}, {
		name: "--",
		value: "--",
		parent: "469000"
	}, {
		name: "--",
		value: "--",
		parent: "469001"
	}, {
		name: "--",
		value: "--",
		parent: "469002"
	}, {
		name: "--",
		value: "--",
		parent: "469003"
	}, {
		name: "--",
		value: "--",
		parent: "469005"
	}, {
		name: "--",
		value: "--",
		parent: "469006"
	}, {
		name: "--",
		value: "--",
		parent: "469007"
	}, {
		name: "--",
		value: "--",
		parent: "469021"
	}, {
		name: "--",
		value: "--",
		parent: "469022"
	}, {
		name: "--",
		value: "--",
		parent: "469023"
	}, {
		name: "--",
		value: "--",
		parent: "469024"
	}, {
		name: "--",
		value: "--",
		parent: "469025"
	}, {
		name: "--",
		value: "--",
		parent: "469026"
	}, {
		name: "--",
		value: "--",
		parent: "469027"
	}, {
		name: "--",
		value: "--",
		parent: "469028"
	}, {
		name: "--",
		value: "--",
		parent: "469029"
	}, {
		name: "--",
		value: "--",
		parent: "469030"
	}, {
		name: "--",
		value: "--",
		parent: "500200"
	}, {
		name: "--",
		value: "--",
		parent: "620200"
	}, {
		name: "--",
		value: "--",
		parent: "659000"
	}, {
		name: "--",
		value: "--",
		parent: "659001"
	}, {
		name: "--",
		value: "--",
		parent: "659002"
	}, {
		name: "--",
		value: "--",
		parent: "659003"
	}, {
		name: "--",
		value: "--",
		parent: "659004"
	}]
}, , , , , , , function(e, t, a) {
	a(116);
	var n = a(0)(a(87), a(139), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(114);
	var n = a(0)(a(92), a(137), null, null);
	e.exports = n.exports
}, , , , , , , , , function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(27),
		i = n(r);
	t.
default = {
		components: {
			XDialog: i.
		default
		},
		created: function() {
			"undefined" != typeof this.value && (this.showValue = this.value)
		},
		props: {
			value: Boolean,
			title: String,
			content: String,
			buttonText: String,
			maskTransition: {
				type: String,
			default:
				"vux-mask"
			},
			dialogTransition: {
				type: String,
			default:
				"vux-dialog"
			}
		},
		data: function() {
			return {
				showValue: !1
			}
		},
		methods: {
			_onHide: function() {
				this.showValue = !1
			}
		},
		watch: {
			value: function(e) {
				this.showValue = e
			},
			showValue: function(e) {
				this.$emit("input", e)
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(20);
	t.
default = {
		props: {
			header: Object,
			footer: Object
		},
		methods: {
			onClickFooter: function() {
				this.footer.link && (0, n.go)(this.footer.link, this.$router), this.$emit("on-click-footer")
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(13),
		i = n(r),
		l = a(20),
		u = a(65),
		s = n(u);
	t.
default = {
		components: {
			InlineDesc: i.
		default
		},
		props: (0, s.
	default)(),
		computed: {
			valueClass: function() {
				return {
					"vux-cell-primary": "content" === this.primary || "left" === this.valueAlign,
					"vux-cell-align-left": "left" === this.valueAlign,
					"vux-cell-arrow-transition": !! this.arrowDirection,
					"vux-cell-arrow-up": "up" === this.arrowDirection,
					"vux-cell-arrow-down": "down" === this.arrowDirection
				}
			}
		},
		methods: {
			getLabelStyles: function() {
				return {
					width: this.$parent.labelWidth || this.$parent.$parent.labelWidth,
					textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
					marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
				}
			},
			onClick: function() {
				!this.disabled && (0, l.go)(this.link, this.$router)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(27),
		i = n(r);
	t.
default = {
		components: {
			XDialog: i.
		default
		},
		props: {
			value: {
				type: Boolean,
			default:
				!1
			},
			hideOnBlur: {
				type: Boolean,
			default:
				!1
			},
			title: String,
			confirmText: String,
			cancelText: String,
			maskTransition: {
				type: String,
			default:
				"vux-fade"
			},
			dialogTransition: {
				type: String,
			default:
				"vux-dialog"
			},
			content: String
		},
		created: function() {
			this.showValue = this.show, this.value && (this.showValue = this.value)
		},
		watch: {
			value: function(e) {
				this.showValue = e
			},
			showValue: function(e) {
				this.$emit("input", e)
			}
		},
		data: function() {
			return {
				showValue: !1
			}
		},
		methods: {
			_onConfirm: function() {
				this.showValue = !1, this.$emit("on-confirm")
			},
			_onCancel: function() {
				this.showValue = !1, this.$emit("on-cancel")
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(15),
		i = n(r),
		l = a(30),
		u = n(l),
		s = a(234),
		o = n(s),
		c = a(4),
		p = n(c),
		m = a(13),
		v = n(m),
		d = a(19),
		f = n(d),
		h = a(31),
		_ = n(h);
	t.
default = {
		mixins: [f.
	default],
		components: {
			Group: p.
		default,
			InlineDesc:
			v.
		default,
			Icon:
			u.
		default
		},
		props: {
			format: {
				type: String,
			default:
				"YYYY-MM-DD"
			},
			title: {
				type: String,
				required: !0
			},
			value: {
				type: String,
			default:
				""
			},
			inlineDesc: String,
			placeholder: String,
			minYear: Number,
			maxYear: Number,
			confirmText: {
				type: String,
			default:
				"ok"
			},
			cancelText: {
				type: String,
			default:
				"cancel"
			},
			clearText: String,
			yearRow: {
				type: String,
			default:
				"{value}"
			},
			monthRow: {
				type: String,
			default:
				"{value}"
			},
			dayRow: {
				type: String,
			default:
				"{value}"
			},
			hourRow: {
				type: String,
			default:
				"{value}"
			},
			minuteRow: {
				type: String,
			default:
				"{value}"
			},
			required: {
				type: Boolean,
			default:
				!1
			},
			minHour: {
				type: Number,
			default:
				0
			},
			maxHour: {
				type: Number,
			default:
				23
			},
			startDate: String,
			endDate: String,
			valueTextAlign: String,
			displayFormat: Function
		},
		created: function() {
			this.currentValue = this.value, this.handleChangeEvent = !0
		},
		data: function() {
			return {
				currentValue: null,
				valid: !0,
				errors: {}
			}
		},
		mounted: function() {
			var e = this,
				t = this.uuid;
			this.$nextTick(function() {
				e.$el.setAttribute("id", "vux-datetime-" + t), e.render()
			})
		},
		computed: {
			_value: function() {
				return this.currentValue ? this.displayFormat ? this.displayFormat(this.currentValue) : this.currentValue : this.placeholder || ""
			},
			pickerOptions: function() {
				var e = this,
					t = {
						trigger: "#vux-datetime-" + this.uuid,
						format: this.format,
						value: this.currentValue,
						output: ".vux-datetime-value",
						confirmText: this.confirmText,
						cancelText: e.cancelText,
						clearText: e.clearText,
						yearRow: this.yearRow,
						monthRow: this.monthRow,
						dayRow: this.dayRow,
						hourRow: this.hourRow,
						minuteRow: this.minuteRow,
						minHour: this.minHour,
						maxHour: this.maxHour,
						startDate: this.startDate,
						endDate: this.endDate,
						onConfirm: function(t) {
							e.currentValue = t
						},
						onClear: function(t) {
							e.$emit("on-clear", t)
						},
						onHide: function() {
							e.validate()
						}
					};
				return this.minYear && (t.minYear = this.minYear), this.maxYear && (t.maxYear = this.maxYear), t
			},
			firstError: function() {
				var e = (0, i.
			default)(this.errors)[0];
				return this.errors[e]
			}
		},
		methods: {
			render: function() {
				var e = this;
				this.$nextTick(function() {
					e.picker && e.picker.destroy(), e.picker = new o.
				default (e.pickerOptions)
				})
			},
			validate: function() {
				return !this.currentValue && this.required ? (this.valid = !1, void(this.errors.required = "必填")) : (this.valid = !0, void(this.errors = {}))
			}
		},
		watch: {
			currentValue: function(e) {
				this.$emit("on-change", e), this.$emit("input", e), this.validate()
			},
			startDate: function() {
				this.render()
			},
			endDate: function() {
				this.render()
			},
			format: function(e) {
				this.currentValue && (this.currentValue = (0, _.
			default)(this.currentValue, e)), this.render()
			},
			value: function(e) {
				this.currentValue !== e && (this.currentValue = e, this.render())
			}
		},
		beforeDestroy: function() {
			this.picker.destroy()
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			title: String,
			titleColor: String,
			labelWidth: String,
			labelAlign: String,
			labelMarginRight: String,
			gutter: String
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			type: String,
			isMsg: Boolean
		},
		computed: {
			className: function() {
				return "weui-icon weui_icon_" + this.type + " weui-icon-" + this.type.replace(/_/g, "-")
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			value: {
				type: Boolean,
			default:
				!1
			},
			text: String,
			position: String
		},
		created: function() {
			this.show = this.value
		},
		data: function() {
			return {
				show: !1
			}
		},
		watch: {
			value: function(e) {
				this.show = e
			},
			show: function(e) {
				this.$emit("input", e)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(8),
		i = n(r),
		l = a(1),
		u = n(l),
		s = a(5),
		o = n(s),
		c = a(7),
		p = n(c),
		m = a(26),
		v = n(m),
		d = a(66),
		f = n(d),
		h = a(65),
		_ = n(h),
		g = a(29),
		x = n(g),
		w = a(49),
		b = n(w),
		y = (0, _.
	default)();
	delete y.value, t.
default = {
		components: {
			Popup: p.
		default,
			Radio:
			v.
		default,
			Cell:
			o.
		default
		},
		directives: {
			TransferDom: x.
		default
		},
		props: (0, u.
	default)({
			placeholder: String
		}, y, (0, f.
	default)()),
		computed: {
			displayValue: function() {
				var e = this;
				if (!this.options.length) return "";
				if ("object" === (0, i.
			default)(this.options[0])) {
					var t = (0, b.
				default)(this.options, function(t) {
						return t.key === e.currentValue
					});
					if (t) return t.value
				}
				return this.currentValue
			}
		},
		methods: {
			onValueChange: function(e) {
				this.hide()
			},
			show: function() {
				this.showPopup = !0
			},
			hide: function() {
				this.showPopup = !1
			}
		},
		watch: {
			value: function(e) {
				this.currentValue = e
			},
			currentValue: function(e) {
				this.$emit("input", e), this.$emit("on-change", e)
			}
		},
		data: function() {
			return {
				showPopup: !1,
				currentValue: this.value
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(15),
		i = n(r),
		l = a(237),
		u = n(l);
	t.
default = {
		props: {
			value: Boolean,
			height: {
				type: String,
			default:
				"auto"
			},
			width: {
				type: String,
			default:
				"auto"
			},
			showMask: {
				type: Boolean,
			default:
				!0
			},
			isTransparent: Boolean,
			hideOnBlur: {
				type: Boolean,
			default:
				!0
			},
			position: {
				type: String,
			default:
				"bottom"
			}
		},
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				var t = e;
				e.popup = new u.
			default ({
					showMask: t.showMask,
					container: t.$el,
					hideOnBlur: t.hideOnBlur,
					onOpen: function() {
						t.fixSafariOverflowScrolling("auto"), t.show = !0
					},
					onClose: function() {
						t.show = !1, (0, i.
					default)(window.__$vuxPopups).length > 1 || document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled") || setTimeout(function() {
							t.fixSafariOverflowScrolling("touch")
						}, 300)
					}
				}), e.$overflowScrollingList = document.querySelectorAll(".vux-fix-safari-overflow-scrolling")
			})
		},
		methods: {
			fixSafariOverflowScrolling: function(e) {
				if (this.$overflowScrollingList.length) for (var t = 0; t < this.$overflowScrollingList.length; t++) this.$overflowScrollingList[t].style.webkitOverflowScrolling = e
			}
		},
		data: function() {
			return {
				hasFirstShow: !1,
				show: this.value
			}
		},
		computed: {
			styles: function e() {
				var e = {};
				return this.position && "bottom" !== this.position && "top" !== this.position ? e.width = this.width : e.height = this.height, this.isTransparent && (e.background = "transparent"), e
			}
		},
		watch: {
			show: function(e) {
				var t = this;
				this.$emit("input", e), e ? (this.popup.show(), this.$emit("on-show"), this.fixSafariOverflowScrolling("auto"), this.hasFirstShow || (this.$emit("on-first-show"), this.hasFirstShow = !0)) : (this.$emit("on-hide"), this.show = !1, this.popup.hide(!1), setTimeout(function() {
					document.querySelector(".vux-popup-dialog.vux-popup-show") || t.fixSafariOverflowScrolling("touch")
				}, 200))
			},
			value: function(e) {
				this.show = e
			}
		},
		beforeDestroy: function() {
			this.popup.destroy(), this.fixSafariOverflowScrolling("touch")
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e, t) {
		for (var a = e.length; a--;) if (e[a] === t) return !0;
		return !1
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(19),
		l = n(i),
		u = a(97),
		s = a(66),
		o = n(s);
	t.
default = {
		mixins: [l.
	default],
		filters: {
			getValue: u.getValue,
			getKey: u.getKey
		},
		props: (0, o.
	default)(),
		mounted: function() {
			this.handleChangeEvent = !0
		},
		methods: {
			getKey: u.getKey,
			onFocus: function() {
				this.currentValue = this.fillValue || "", this.isFocus = !0
			}
		},
		watch: {
			value: function(e) {
				this.currentValue = e
			},
			currentValue: function(e) {
				var t = r(this.options, e);
				"" !== e && t && (this.fillValue = ""), this.$emit("on-change", e), this.$emit("input", e)
			},
			fillValue: function(e) {
				this.fillMode && this.isFocus && (this.currentValue = e)
			}
		},
		data: function() {
			return {
				fillValue: "",
				isFocus: !1,
				currentValue: this.value
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(239),
		i = n(r);
	t.
default = {
		mixins: [i.
	default],
		props: {
			value: Boolean,
			time: {
				type: Number,
			default:
				2e3
			},
			type: {
				type: String,
			default:
				"success"
			},
			transition: String,
			width: {
				type: String,
			default:
				"7.6em"
			},
			isShowMask: {
				type: Boolean,
			default:
				!1
			},
			text: String,
			position: String
		},
		data: function() {
			return {
				show: !1
			}
		},
		created: function() {
			this.value && (this.show = !0)
		},
		computed: {
			currentTransition: function() {
				return this.transition ? this.transition : "top" === this.position ? "vux-slide-from-top" : "bottom" === this.position ? "vux-slide-from-bottom" : "vux-fade"
			},
			toastClass: function() {
				return {
					"weui-toast_forbidden": "warn" === this.type,
					"weui-toast_cancel": "cancel" === this.type,
					"weui-toast_success": "success" === this.type,
					"weui-toast_text": "text" === this.type,
					"vux-toast-top": "top" === this.position,
					"vux-toast-bottom": "bottom" === this.position,
					"vux-toast-middle": "middle" === this.position
				}
			},
			style: function() {
				if ("text" === this.type && "auto" === this.width) return {
					padding: "10px"
				}
			}
		},
		watch: {
			show: function(e) {
				var t = this;
				e && (this.$emit("input", !0), this.$emit("on-show"), this.fixSafariOverflowScrolling("auto"), clearTimeout(this.timeout), this.timeout = setTimeout(function() {
					t.show = !1, t.$emit("input", !1), t.$emit("on-hide"), t.fixSafariOverflowScrolling("touch")
				}, this.time))
			},
			value: function(e) {
				this.show = e
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: ["bodyPaddingTop", "bodyPaddingBottom"],
		methods: {
			scrollTo: function(e) {
				this.$refs.viewBoxBody.scrollTop = e
			},
			getScrollTop: function() {
				return this.$refs.viewBoxBody.scrollTop
			},
			getScrollBody: function() {
				return this.$refs.viewBoxBody
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			type: {
			default:
				"default"
			},
			disabled: Boolean,
			mini: Boolean,
			plain: Boolean,
			text: String,
			actionType: String,
			showLoading: Boolean
		},
		computed: {
			classes: function() {
				return [{
					"weui-btn_disabled": this.disabled,
					"weui-btn_mini": this.mini
				}, "weui-btn_" + this.type, this.plain ? "weui-btn_plain-" + this.type : "", this.showLoading ? "weui-btn_loading" : ""]
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			value: {
				type: Boolean,
			default:
				!1
			},
			maskTransition: {
				type: String,
			default:
				"vux-mask"
			},
			dialogTransition: {
				type: String,
			default:
				"vux-dialog"
			},
			hideOnBlur: Boolean,
			dialogStyle: Object,
			scroll: {
				type: Boolean,
			default:
				!0
			}
		},
		created: function() {
			"undefined" != typeof this.value && (this.currentValue = this.value)
		},
		watch: {
			value: {
				handler: function(e) {
					this.currentValue = e
				},
				immediate: !0
			},
			currentValue: function(e) {
				this.$emit(e ? "on-show" : "on-hide"), this.$emit("input", e)
			}
		},
		data: function() {
			return {
				currentValue: !1
			}
		},
		methods: {
			onTouchMove: function(e) {
				!this.scroll && e.preventDefault()
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(15),
		i = n(r),
		l = a(19),
		u = n(l),
		s = a(30),
		o = n(s),
		c = a(13),
		p = n(c),
		m = a(300),
		v = n(m),
		d = a(301),
		f = n(d),
		h = a(240),
		_ = n(h),
		g = {
			email: {
				fn: v.
			default,
				msg:
				"邮箱格式"
			},
			"china-mobile": {
				fn: function(e) {
					return (0, f.
				default)(e, "zh-CN")
				},
				msg: "手机号码"
			},
			"china-name": {
				fn: function(e) {
					return e.length >= 2 && e.length <= 6
				},
				msg: "中文姓名"
			}
		};
	t.
default = {
		created: function() {
			var e = this;
			this.currentValue = this.value || "", this.title || this.placeholder || this.currentValue || console.warn("no title and no placeholder?"), this.required && !this.currentValue && (this.valid = !1), this.handleChangeEvent = !0, this.debounce && (this._debounce = (0, _.
		default)(function() {
				e.$emit("on-change", e.currentValue)
			}, this.debounce))
		},
		mounted: function() {
			this.$slots && this.$slots["restricted-label"] && (this.hasRestrictedLabel = !0)
		},
		beforeDestroy: function() {
			this._debounce && this._debounce.cancel()
		},
		mixins: [u.
	default],
		components: {
			Icon: o.
		default,
			InlineDesc:
			p.
		default
		},
		props: {
			title: {
				type: String,
			default:
				""
			},
			type: {
				type: String,
			default:
				"text"
			},
			placeholder: String,
			value: [String, Number],
			name: String,
			readonly: Boolean,
			disabled: Boolean,
			keyboard: String,
			inlineDesc: String,
			isType: [String, Function],
			min: Number,
			max: Number,
			showClear: {
				type: Boolean,
			default:
				!0
			},
			equalWith: String,
			textAlign: String,
			autocomplete: {
				type: String,
			default:
				"off"
			},
			autocapitalize: {
				type: String,
			default:
				"off"
			},
			autocorrect: {
				type: String,
			default:
				"off"
			},
			spellcheck: {
				type: String,
			default:
				"false"
			},
			novalidate: {
				type: Boolean,
			default:
				!1
			},
			iconType: String,
			debounce: Number,
			placeholderAlign: String,
			labelWidth: String
		},
		computed: {
			labelStyles: function() {
				return {
					width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
					textAlign: this.$parent.labelAlign,
					marginRight: this.$parent.labelMarginRight
				}
			},
			pattern: function() {
				if ("number" === this.keyboard || "china-mobile" === this.isType) return "[0-9]*"
			},
			labelWidthComputed: function() {
				var e = this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1;
				if (e < 10) return e + "em"
			},
			hasErrors: function() {
				return (0, i.
			default)(this.errors).length > 0
			},
			inputStyle: function() {
				if (this.textAlign) return {
					textAlign: this.textAlign
				}
			}
		},
		methods: {
			reset: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				this.dirty = !1, this.currentValue = e, this.firstError = "", this.valid = !0
			},
			clear: function() {
				this.currentValue = "", this.focus()
			},
			focus: function() {
				this.$refs.input.focus()
			},
			blur: function() {
				this.$refs.input.blur()
			},
			focusHandler: function() {
				this.$emit("on-focus", this.currentValue)
			},
			onBlur: function() {
				this.setTouched(), this.validate(), this.$emit("on-blur", this.currentValue)
			},
			getError: function() {
				var e = (0, i.
			default)(this.errors)[0];
				this.firstError = this.errors[e]
			},
			validate: function() {
				if ("undefined" != typeof this.equalWith) return void this.validateEqual();
				if (this.errors = {}, !this.currentValue && !this.required) return void(this.valid = !0);
				if (!this.currentValue && this.required) return this.valid = !1, this.errors.required = "必填哦", void this.getError();
				if ("string" == typeof this.isType) {
					var e = g[this.isType];
					if (e) {
						if (this.valid = e.fn(this.currentValue), !this.valid) return void(this.errors.format = e.msg + "格式不对哦~");
						delete this.errors.format
					}
				}
				if ("function" == typeof this.isType) {
					var t = this.isType(this.currentValue);
					if (this.valid = t.valid, !this.valid) return this.errors.format = t.msg, this.forceShowError = !0, void(this.firstError || this.getError());
					delete this.errors.format
				}
				if (this.min) {
					if (this.currentValue.length < this.min) return this.errors.min = "最少应该输入" + this.min + "个字符哦", this.valid = !1, void(this.firstError || this.getError());
					delete this.errors.min
				}
				if (this.max) {
					if (this.currentValue.length > this.max) return this.errors.max = "最多可以输入" + this.max + "个字符哦", this.valid = !1, void(this.forceShowError = !0);
					this.forceShowError = !1, delete this.errors.max
				}
				this.valid = !0
			},
			validateEqual: function() {
				if (!this.equalWith && this.currentValue) return this.valid = !1, void(this.errors.equal = "输入不一致");
				var e = this.dirty || this.currentValue.length >= this.equalWith.length;
				return e && this.currentValue !== this.equalWith ? (this.valid = !1, void(this.errors.equal = "输入不一致")) : void(!this.currentValue && this.required ? this.valid = !1 : (this.valid = !0, delete this.errors.equal))
			}
		},
		data: function e() {
			var e = {
				hasRestrictedLabel: !1,
				firstError: "",
				forceShowError: !1,
				hasLengthEqual: !1,
				valid: !0,
				currentValue: ""
			};
			return e
		},
		watch: {
			valid: function() {
				this.getError()
			},
			value: function(e) {
				this.currentValue = e
			},
			equalWith: function(e) {
				e && this.equalWith ? (e.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate()
			},
			currentValue: function(e) {
				!this.equalWith && e && this.validateEqual(), e && this.equalWith ? (e.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate(), this.$emit("input", e), this._debounce ? this._debounce() : this.$emit("on-change", e)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(19),
		i = n(r),
		l = a(13),
		u = n(l),
		s = a(165),
		o = n(s);
	t.
default = {
		minxins: [i.
	default],
		mounted: function() {
			var e = this;
			this.$slots && this.$slots["restricted-label"] && (this.hasRestrictedLabel = !0), this.$nextTick(function() {
				e.autosize && e.bindAutosize()
			})
		},
		components: {
			InlineDesc: u.
		default
		},
		props: {
			title: String,
			inlineDesc: String,
			showCounter: {
				type: Boolean,
			default:
				!0
			},
			max: Number,
			value: String,
			name: String,
			placeholder: String,
			readonly: Boolean,
			rows: {
				type: Number,
			default:
				3
			},
			cols: {
				type: Number,
			default:
				30
			},
			height: Number,
			autocomplete: {
				type: String,
			default:
				"off"
			},
			autocapitalize: {
				type: String,
			default:
				"off"
			},
			autocorrect: {
				type: String,
			default:
				"off"
			},
			spellcheck: {
				type: String,
			default:
				"false"
			},
			autosize: Boolean
		},
		created: function() {
			this.currentValue = this.value
		},
		watch: {
			autosize: function(e) {
				this.unbindAutosize(), e && this.bindAutosize()
			},
			value: function(e) {
				this.currentValue = e
			},
			currentValue: function(e) {
				this.max && e && e.length > this.max && (this.currentValue = e.slice(0, this.max)), this.$emit("input", this.currentValue), this.$emit("on-change", this.currentValue)
			}
		},
		data: function() {
			return {
				hasRestrictedLabel: !1,
				currentValue: ""
			}
		},
		computed: {
			count: function() {
				var e = 0;
				return this.currentValue && (e = this.currentValue.replace(/\n/g, "aa").length), e > this.max ? this.max : e
			},
			textareaStyle: function() {
				if (this.height) return {
					height: this.height + "px"
				}
			},
			labelStyles: function() {
				return {
					width: this.$parent.labelWidth || this.labelWidth + "em",
					textAlign: this.$parent.labelAlign,
					marginRight: this.$parent.labelMarginRight
				}
			},
			labelWidth: function() {
				return this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1
			}
		},
		methods: {
			bindAutosize: function() {
				(0, o.
			default)(this.$refs.textarea)
			},
			unbindAutosize: function() {
				o.
			default.destroy(this.$refs.textarea)
			},
			focus: function() {
				this.$refs.textarea.focus()
			}
		},
		beforeDestroy: function() {
			this.unbindAutosize()
		}
	}
}, , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAjVBMVEUAAAAAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+gAn+hTZ18WAAAALnRSTlMAQMCxL5r5Ce/cleWMOAWjcNLFhn9lLCcVulEbEfvz18OrX0wiHt7dy3hEDnZdIueG5wAAAYVJREFUSMftllmSgjAQQFtCwr5vIui4bzPT9z/eGClBCBiKL2vK9wWdelRCd9KBD/8X1TQYDsIMU+33NIpSqNYnhjiCsEelOAoqrhFHIqzVHGuaXdPALpF6YyWEja4ppmPGw7qYnK6JY018J9OHAXyZac4elDzs1K/mO64TUSEVKQ97pCIYY/ZuQjrGPCttFnzYkpsiB/6LcYK5rnaS3LSIHV8ib11Pb8vPC11qhtc6MF/YBv+Se3tOUGbGnWAWB7wa3S+ZaQOkEVGUjb3N4IkEJaaluXY9btlOU+yGxIwgwme+kvqITOPglemUTMhIw/4nHDTnTkfUM2hRJDnrN4u2uOIV7BK7gIbvhddjzkB5Fo8ZFzeIzGtvAtGkkOmN6JVc9PBOfn1pshQOmyVylsS5z43gg+DXHTbxVPCi82N/VwLHadWOdZkPmmjtoOFAl9iG0VTw6u5wTvZV9raEYQ/5DoY7km4ExxUOkk/ugnR6553c7afeMBRt8q1m0k3qRFX48N78AVxK4+HSgVGAAAAAAElFTkSuQmCC"
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAilBMVEUAAADdORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORndORm053+WAAAALXRSTlMA8vgP6dHcU5SAP1clA/p8STggB/DFcTIU49PKsYZpLB0MpJ+bX07WwLuPXBsaigjyAAABqUlEQVRIx+2W25KCMAyGl1IUkDOIiIDns33/19smsMKAY7PrzY7jf8P86XxT2iRtvz56W+mWwcQTMcPXH4LjRCiljR+BgqQhqms0Uhv8sC+IsvqkQSWNPsmopNcn26HdqJOIaXmIosOiiw7JdvduQeWXVloFkVsPrjmJzONhyjYkUmzdXsLC/YJGinPUxm0Tl00khWfWQfdqoKeTYo+xQzsdkfQmEMkKNL8iEVzOoUrTcGmXnEpewM+SZsW6TOeGRs7X0q7u84xW0m5JZAqbOm39UVZGnFPITLqqnn2OH18GAgK5AIfp4I7D8etCRE3uYF+x+2dyn/CkmMnQTk2W0kygwWwsPtZkyVKTVkNyLN6I00ko2RDTkck6wuXB7KaaPEkT4/IMXceCZ9CwJzXJ4vsM0zqrWzgVmJrEVWW89QkU0V4QSExomNz/IYCaOlJIcQXvNPWXh+BSQSI1ByP2pSjMwMXGYTQS26OrJSefJjzsDgWJoJEo8/Yz4GBb00nhFZXtOHZ6Fn39+UbSXr8FX7956bf9Cy+MIaqRXzXDl1TuPcXgJfXRv9Y3z6jxQMTPpxgAAAAASUVORK5CYII="
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAACZ1BMVEUAAAAAgIgAgIjfMzMAgIjfMzPfMzMAgIjfMzMAgIjfMzMAgIjfMzPfMzMAgIjfMzMAgIjfMzMAgIgAgIjfMzMAgIjfMzMAgIjfMzMAgIgAgIjfMzMAgIjfMzMAgIjfMzMAgIgAgIjfMzMAgIjfMzMAgIgAgIjfMzMAgIgAR4jfMzP////g8PH8/v7A4OL+/v/6/f33+/vl8/MIhIzx9vnY7O2Ytc8CgYn3+fv0+vrl7PPT6eubzdB4nsBvuLxYrLEplZwAfYgAVIhEQW7jTEzr9fbQ3enN5uj75eWowdem0tWh0dShu9OQyMuJxchqtbpokrlcrrNBdqdAoKYikZgfXpcUipIAc4gRRYHt8vfg6fHZ5e787e3U4OvK5ObE4uS+3+G63d+22922yt3629uw2Nqt19mp1deautCXy873zc2Ox8qEwsb1wMB4vMBhsLVUhLBSqa9Qga44nKM1bqEymJ8fj5cYjJQWV5IITIwCSIkAW4jpb2+8NkDNNTrt9vfo8fXd7/DK2ebC0+O+0OH64OCx2NuwxtuTsc2HxMf2xsaFp8aAwMR9vsJ0ur5ms7hgjLXyrKxJe6vxqKgslp0qZpzvlpbskZISVJEOUY8DbYoAZIgAT4gKRoQvQ3ZUP2jnZWV2PFuIO1TgNzf++fnN3Oj51talvtX40NCUys2RyMyxt8uKq8h8vsJwmLxulrtptLn0trZLpatFiKhEeKjwoaHwn58ceZUOh4/ti4sAYYjrgYHrfn4gRHwhRHvqdnbAa3aFUGxQQGqlUWRmPmHmX1+aOU2rOEevN0XiREThQEDHNTzYNDbcJScaAAAAKHRSTlMA/vX1Hx/Uvr6oqIODRgQD5ubSl5dvb1tbSDU1Dw/w79i4uLa2RTExc3PhQQAAAypJREFUSMftlVVzFEEURnF3d5c7/c26+wIbJW6QhLi7EiO4u7u7u7s7P4pJZbL0LlMEKKp4yXk/VX27T93u1kUX/5/eA3oyP1/fHBd45i+iQLrP7NUhzp3KfrB8sRDAMvqZ6bI4tA/jOBEoHiMFusvmYF78JARyVMnsIZuDePN0kLlIyewrm/14c0GQOU/JHCiP2ZM3g+5nPikxvt2cyIvLhUCeKF7QpHZzDG+eCTKPKJkj5DEHsNbwfB87FV4hmSeDx7SYRFEMqySekbI5nN3HEsYOYLdkPg9+TS9s5TnAUt4cK5fH2CXcZqwCLxlb0S601Nc3ywFVQU0pkuk1GJIs3iRq2EckxzeOnT2Hp4wtwWdf69s9h5PXRSRnqGA/3JSwf89DcmIzxUIfhhCNcxu2XcEdGiYfdhR7D/iYD/k+QIVNEYiIQPVa1NuhRSaZEJYFbSZqslAVjyJdDlF/2ezDHreN+Qx7W1F6FVvXIcGqa7ZrkrHKhewUICs3ZqkqxOKAtw4alZdodLs4mbG9WM9YKU4dwMEoVBtVTRqjCxvvYWMcYmrgIKIGrPbAZmkASohogj/3B8CWC6hgW/AqA7VpecLW1NSLh1xwmeGJhpMkCjV6Yy5ZNLZGKfch/ty/7F4fXnrwLMsPf50WKnRQnJaQJyZtEOOpDQtJ1GD73+VuWK03dJp7LdJ37bemZ+ugMyTCZFqphakxBvGd5h6Xag8NjUPxrUpsoBjsLIJHDycKO8/dvMZ146YZIoCd5FCVhOjL1RKXA3PnOOk3tda1xXZrdLRDl5IE9WY4q64j050YmDvHC1lsikPGrlqcLyhcGEtulEViR4EapoLGgNw5Vggy1auQHmrGXVHvKKIcrdqmq3OrVm5vux8ud44PQgd5qkPCGuMRMcyT8kibbdDlUqQWZSTB5c7xrkNsthrNCRpjpCiWUSQk9AsRawvZR8TlrrijW65FRSVviip3l+ygusTEyoVuaV5PtIGIy53jm9Dpt8DnzvHxt7b7kP+03SX+fLvPlk3Gc/w3zGlDZHPGL07bonDaKXP8v/wsPj5OVfzle/Tv1a2LLv4R3wF4b4SXWSUqLQAAAABJRU5ErkJggg=="
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyMEE5MjIwMDlFMTFFNzk3RkI5QjhENUYyQzdBMDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyMEE5MjEwMDlFMTFFNzk3RkI5QjhENUYyQzdBMDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOmU5ZjAwNDdlLTRhYmMtN2Q0Yy05ODk0LTVjYzI4YWY5MDFjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplOWYwMDQ3ZS00YWJjLTdkNGMtOTg5NC01Y2MyOGFmOTAxYzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Zw8duAAAEP0lEQVR42uyafWhNYRzHz2F2NealaJlkmhhRFjZEtloaFrN/+GfEsvljzNtE/tAShqlZ0jY1kZSIvC+0zUtjoxlDZKFRSlZM1tib72/3d+u2zj0vzz3nntOcX3177r3n5Xk+53me3/N7fufKvb290kC3QdJ/YC6kC+lCupAupAspaGFqB2VZFrpp0uUEenizofnQXGgyNAkaBXn4tN/QL+gj9BZ6CVVBTTUZ9UIRSqDARlaLeIxCAo6AsqB0KErwwX+DLkIVgG1wDCTgUlHsh+aYPNKeQAWArbQNEnBxKEqhxRZPq2ooB7DvRSCFHQ8A81C8CAEgWTLVhTo3i1xsuCdRUTiKs9Bqm5zlGSgbvfrXkuEKwAgUV6EUm1cFGr5pAG03dbgCcDCK8w4A9A3fc6ask/3sALTSAYBtUDl03NQ5iV5M4oVathHuC4OVY5i2+Y0wD77/CWpO4iZh7EWn2wTXBB2FLvg7G7RrJK/Niyi6wrGeQCx6hus6mwDvMdxd/zAPcDSa1kOF0Fj+OZO9rjDk1hCCdVOPQUUAe67g/CiiOgEl9ju0TQ1SdbgmX0mMR9EQAjgK1stozgGuRQFuDDu+jSp+Ib56VV2jSE/q9aZroeUCAcJXqIRCQ8D9CLBsZTPgaI17pUGNIutkos7GNqORa1Bu4F7Rsjd8bgyuKwwAuADFM+ikDkCJt3VCc3KmTshN0GM09jQa94gX6gSF82povkG3Au0ZcX0UO5xMg6Nihuic7PDb5Go5jDg0vJkbSg9vD7QLGg5dgg7j+DOViIqu2QLtg0YIzOt2zMlhIj3p0VkBzZ182g71dVdGfRetYWj4EZSR+P5dI2RcgqIYmhaE84qwuifJOinNoeQdVeBiURwzKVzsRE+Gi/RkKxSts5IhPDxzdcDREN4LbYfCTVqGWgMd0PKurwxWlAWAcSpwMkQO5R2020RAsteikE8NVjQU2qmS5KrlDXe0ZL7ViUJeF6gshyMUH9xEiJaUemiehVHTDeGtFhpIy0KswQppv3eQ52cu97CVRm2cCsfTI5oZKBKolEKxTzx0rQYkK6GtluhwJauAWiTnGj3MU2onaELyRjXHwZB5aGNHUJAMShnsUgcClqFt17ROMpJczuMA2yn2kNskmQbJwzadlwK7jdbvFb4Elpk9SaA/JW/O846NgJT7SVHag5oCyaCUtV4GFUA9IYSjBf0QlOqfktRjwb7VeiB5U4JWG8Wl9P6jVvUpmP1Wiy3GYrgPkjf9OEsLUM3CRC9EL05BMUHhUBdnCjyCt6Y1r5KDkJtqkYzlkLClCo0r5k0wzVt6b7lQ8v53gF7Wjleor5ujqWZOWlFvVfV/W2UnZIbfZ0oI56Nxn/1+u83y9TylSCI550OTp++PEbim2+oJLex40GiKGSl3swMNve+E6EDohc9AMfcfWS6kC+lCupAupAsZ2P4JMABpnoPvAlfCHQAAAABJRU5ErkJggg=="
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("i", {
				class: [e.className, e.isMsg ? "weui-icon_msg" : ""]
			})
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("transition", {
				attrs: {
					name: "vux-popup-animate-" + e.position
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.show,
					expression: "show"
				}],
				staticClass: "vux-popup-dialog",
				class: ["vux-popup-" + e.position, e.show ? "vux-popup-show" : ""],
				style: e.styles
			}, [e._t("default")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-alert"
			}, [a("x-dialog", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showValue,
					expression: "showValue"
				}],
				attrs: {
					"mask-transition": e.maskTransition,
					"dialog-transition": e.dialogTransition
				},
				domProps: {
					value: e.showValue
				},
				on: {
					"on-hide": function(t) {
						e.$emit("on-hide")
					},
					"on-show": function(t) {
						e.$emit("on-show")
					},
					input: function(t) {
						e.showValue = t
					}
				}
			}, [a("div", {
				staticClass: "weui-dialog__hd"
			}, [a("strong", {
				staticClass: "weui-dialog__title"
			}, [e._v(e._s(e.title))])]), e._v(" "), a("div", {
				staticClass: "weui-dialog__bd"
			}, [e._t("default", [a("div", {
				domProps: {
					innerHTML: e._s(e.content)
				}
			})])], 2), e._v(" "), a("div", {
				staticClass: "weui-dialog__ft"
			}, [a("a", {
				staticClass: "weui-dialog__btn weui-dialog__btn_primary",
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: e._onHide
				}
			}, [e._v(e._s(e.buttonText || "确定"))])])])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-panel weui-panel_access"
			}, [e.header && e.header.title ? a("div", {
				staticClass: "weui-panel__hd",
				domProps: {
					innerHTML: e._s(e.header.title)
				},
				on: {
					click: function(t) {
						e.$emit("on-click-header")
					}
				}
			}) : e._e(), e._v(" "), e._t("header"), e._v(" "), a("div", {
				staticClass: "weui-panel__bd"
			}, [a("div", {
				staticClass: "vux-card-content"
			}, [e._t("content")], 2)]), e._v(" "), a("div", {
				staticClass: "weui-panel__ft"
			}, [e.footer && e.footer.title ? a("a", {
				staticClass: "weui-cell weui-cell_access weui-cell_link",
				attrs: {
					href: "javascript:"
				},
				on: {
					click: e.onClickFooter
				}
			}, [a("div", {
				staticClass: "weui-cell__bd",
				domProps: {
					innerHTML: e._s(e.footer.title)
				}
			})]) : e._e()]), e._v(" "), e._t("footer")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("a", {
				staticClass: "vux-datetime weui-cell weui-cell_access",
				attrs: {
					href: "javascript:"
				}
			}, [e._t("default", [a("div", [a("p", {
				style: {
					width: e.$parent.labelWidth,
					textAlign: e.$parent.labelAlign,
					marginRight: e.$parent.labelMarginRight
				},
				domProps: {
					innerHTML: e._s(e.title)
				}
			}), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()], 1), e._v(" "), a("div", {
				staticClass: "weui-cell__ft vux-cell-primary vux-datetime-value",
				style: {
					textAlign: e.valueTextAlign
				}
			}, [e._v("\n      " + e._s(e._value) + "\n      "), a("icon", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.valid,
					expression: "!valid"
				}],
				staticClass: "vux-input-icon",
				attrs: {
					type: "warn",
					title: e.firstError
				}
			})], 1)])], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("cell", {
				attrs: {
					title: e.title,
					value: e.currentValue,
					"is-link": "",
					"value-align": e.valueAlign
				},
				nativeOn: {
					click: function(t) {
						e.show(t)
					}
				}
			}, [e._v("\n  " + e._s(e.displayValue || e.placeholder) + "\n  "), a("div", {
				directives: [{
					name: "transfer-dom",
					rawName: "v-transfer-dom"
				}]
			}, [a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showPopup,
					expression: "showPopup"
				}],
				staticStyle: {
					"background-color": "#fff"
				},
				domProps: {
					value: e.showPopup
				},
				on: {
					input: function(t) {
						e.showPopup = t
					}
				}
			}, [a("radio", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				attrs: {
					options: e.options,
					"fill-mode": !1
				},
				domProps: {
					value: e.currentValue
				},
				on: {
					"on-change": e.onValueChange,
					input: function(t) {
						e.currentValue = t
					}
				}
			})], 1)], 1)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("p", {
				staticClass: "vux-divider"
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-cells_radio"
			}, [e._l(e.options, function(t, n) {
				return a("label", {
					staticClass: "weui-cell weui-cell_radio weui-check__label",
					attrs: {
						for :"radio_" + e.uuid + "_" + n
					}
				}, [a("div", {
					staticClass: "weui-cell__bd"
				}, [a("p", [a("img", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t && t.icon,
						expression: "one && one.icon"
					}],
					staticClass: "vux-radio-icon",
					attrs: {
						src: t.icon
					}
				}), e._v(" "), a("span", {
					staticClass: "vux-radio-label"
				}, [e._v(e._s(e._f("getValue")(t)))])])]), e._v(" "), a("div", {
					staticClass: "weui-cell__ft"
				}, [a("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.currentValue,
						expression: "currentValue"
					}],
					staticClass: "weui-check",
					attrs: {
						type: "radio",
						id: "radio_" + e.uuid + "_" + n
					},
					domProps: {
						value: e.getKey(t),
						checked: e._q(e.currentValue, e.getKey(t))
					},
					on: {
						click: function(a) {
							e.currentValue = e.getKey(t)
						}
					}
				}), e._v(" "), a("span", {
					staticClass: "weui-icon-checked"
				})])])
			}), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.fillMode,
					expression: "fillMode"
				}],
				staticClass: "weui-cell"
			}, [a("div", {
				staticClass: "weui-cell__hd"
			}, [a("label", {
				staticClass: "weui-label",
				attrs: {
					for :""
				}
			}, [e._v(e._s(e.fillLabel))])]), e._v(" "), a("div", {
				staticClass: "weui-cell__bd"
			}, [a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.fillValue,
					expression: "fillValue"
				}],
				staticClass: "weui-input needsclick",
				attrs: {
					type: "text",
					placeholder: e.fillPlaceholder
				},
				domProps: {
					value: e._s(e.fillValue)
				},
				on: {
					blur: function(t) {
						e.isFocus = !1
					},
					focus: function(t) {
						e.onFocus()
					},
					input: function(t) {
						t.target.composing || (e.fillValue = t.target.value)
					}
				}
			})]), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: "" === e.value && !e.isFocus,
					expression: "value==='' && !isFocus"
				}],
				staticClass: "weui-cell__ft"
			}, [a("i", {
				staticClass: "weui-icon-warn"
			})])])], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("span", {
				staticClass: "vux-label-desc"
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("button", {
				staticClass: "weui-btn",
				class: e.classes,
				attrs: {
					disabled: e.disabled,
					type: e.actionType
				}
			}, [e.showLoading ? a("i", {
				staticClass: "weui-loading"
			}) : e._e(), e._t("default", [e._v(e._s(e.text))])], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("x-dialog", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showValue,
					expression: "showValue"
				}],
				attrs: {
					"mask-transition": e.maskTransition,
					"dialog-transition": e.dialogTransition,
					"hide-on-blur": e.hideOnBlur
				},
				domProps: {
					value: e.showValue
				},
				on: {
					"on-hide": function(t) {
						e.$emit("on-hide")
					},
					"on-show": function(t) {
						e.$emit("on-show")
					},
					input: function(t) {
						e.showValue = t
					}
				}
			}, [a("div", {
				staticClass: "weui-dialog__hd"
			}, [a("strong", {
				staticClass: "weui-dialog__title"
			}, [e._v(e._s(e.title))])]), e._v(" "), a("div", {
				staticClass: "weui-dialog__bd"
			}, [e._t("default", [a("div", {
				domProps: {
					innerHTML: e._s(e.content)
				}
			})])], 2), e._v(" "), a("div", {
				staticClass: "weui-dialog__ft"
			}, [a("a", {
				staticClass: "weui-dialog__btn weui-dialog__btn_default",
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: e._onCancel
				}
			}, [e._v(e._s(e.cancelText || "取消"))]), e._v(" "), a("a", {
				staticClass: "weui-dialog__btn weui-dialog__btn_primary",
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: e._onConfirm
				}
			}, [e._v(e._s(e.confirmText || "确定"))])])])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-cell",
				class: {
					"vux-tap-active": e.isLink || !! e.link,
					"weui-cell_access": e.isLink || !! e.link,
					"vux-cell-no-border-intent": !e.borderIntent,
					"vux-cell-disabled": e.disabled
				},
				on: {
					click: e.onClick
				}
			}, [a("div", {
				staticClass: "weui-cell__hd"
			}, [e._t("icon")], 2), e._v(" "), a("div", {
				staticClass: "vux-cell-bd",
				class: {
					"vux-cell-primary": "title" === e.primary && "left" !== e.valueAlign
				}
			}, [a("p", [e.title ? a("label", {
				staticClass: "vux-label",
				style: e.getLabelStyles()
			}, [e._v(e._s(e.title))]) : e._e(), e._v(" "), e._t("after-title")], 2), e._v(" "), a("inline-desc", [e._t("inline-desc", [e._v(e._s(e.inlineDesc))])], 2)], 1), e._v(" "), a("div", {
				staticClass: "weui-cell__ft",
				class: e.valueClass
			}, [e._t("value"), e._v(" "), e._t("default", [e._v(e._s(e.value))]), e._v(" "), e.isLoading ? a("i", {
				staticClass: "weui-loading"
			}) : e._e()], 2), e._v(" "), e._t("child")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-x-input weui-cell",
				class: {
					"weui-cell_warn": !e.novalidate && !e.valid
				}
			}, [a("div", {
				staticClass: "weui-cell__hd"
			}, [e.hasRestrictedLabel ? a("div", {
				style: e.labelStyles
			}, [e._t("restricted-label")], 2) : e._e(), e._v(" "), e._t("label", [e.title ? a("label", {
				staticClass: "weui-label",
				style: {
					width: e.labelWidth || e.$parent.labelWidth || e.labelWidthComputed,
					textAlign: e.$parent.labelAlign,
					marginRight: e.$parent.labelMarginRight
				},
				domProps: {
					innerHTML: e._s(e.title)
				}
			}) : e._e(), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()])], 2), e._v(" "), a("div", {
				staticClass: "weui-cell__bd weui-cell__primary",
				class: e.placeholderAlign ? "vux-x-input-placeholder-" + e.placeholderAlign : ""
			}, [e.type && "text" !== e.type ? e._e() : a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "weui-input",
				style: e.inputStyle,
				attrs: {
					maxlength: e.max,
					autocomplete: e.autocomplete,
					autocapitalize: e.autocapitalize,
					autocorrect: e.autocorrect,
					spellcheck: e.spellcheck,
					type: "text",
					name: e.name,
					pattern: e.pattern,
					placeholder: e.placeholder,
					readonly: e.readonly,
					disabled: e.disabled
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					focus: e.focusHandler,
					blur: e.onBlur,
					input: function(t) {
						t.target.composing || (e.currentValue = t.target.value)
					}
				}
			}), e._v(" "), "number" === e.type ? a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "weui-input",
				style: e.inputStyle,
				attrs: {
					maxlength: e.max,
					autocomplete: e.autocomplete,
					autocapitalize: e.autocapitalize,
					autocorrect: e.autocorrect,
					spellcheck: e.spellcheck,
					type: "number",
					name: e.name,
					pattern: e.pattern,
					placeholder: e.placeholder,
					readonly: e.readonly,
					disabled: e.disabled
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					focus: e.focusHandler,
					blur: [e.onBlur, function(t) {
						e.$forceUpdate()
					}],
					input: function(t) {
						t.target.composing || (e.currentValue = e._n(t.target.value))
					}
				}
			}) : e._e(), e._v(" "), "email" === e.type ? a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "weui-input",
				style: e.inputStyle,
				attrs: {
					maxlength: e.max,
					autocomplete: e.autocomplete,
					autocapitalize: e.autocapitalize,
					autocorrect: e.autocorrect,
					spellcheck: e.spellcheck,
					type: "email",
					name: e.name,
					pattern: e.pattern,
					placeholder: e.placeholder,
					readonly: e.readonly,
					disabled: e.disabled
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					focus: e.focusHandler,
					blur: e.onBlur,
					input: function(t) {
						t.target.composing || (e.currentValue = t.target.value)
					}
				}
			}) : e._e(), e._v(" "), "password" === e.type ? a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "weui-input",
				style: e.inputStyle,
				attrs: {
					maxlength: e.max,
					autocomplete: e.autocomplete,
					autocapitalize: e.autocapitalize,
					autocorrect: e.autocorrect,
					spellcheck: e.spellcheck,
					type: "password",
					name: e.name,
					pattern: e.pattern,
					placeholder: e.placeholder,
					readonly: e.readonly,
					disabled: e.disabled
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					focus: e.focusHandler,
					blur: e.onBlur,
					input: function(t) {
						t.target.composing || (e.currentValue = t.target.value)
					}
				}
			}) : e._e(), e._v(" "), "tel" === e.type ? a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "weui-input",
				style: e.inputStyle,
				attrs: {
					maxlength: e.max,
					autocomplete: e.autocomplete,
					autocapitalize: e.autocapitalize,
					autocorrect: e.autocorrect,
					spellcheck: e.spellcheck,
					type: "tel",
					name: e.name,
					pattern: e.pattern,
					placeholder: e.placeholder,
					readonly: e.readonly,
					disabled: e.disabled
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					focus: e.focusHandler,
					blur: e.onBlur,
					input: function(t) {
						t.target.composing || (e.currentValue = t.target.value)
					}
				}
			}) : e._e()]), e._v(" "), a("div", {
				staticClass: "weui-cell__ft"
			}, [a("icon", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.equalWith && e.showClear && e.currentValue && !e.readonly && !e.disabled,
					expression: "!equalWith && showClear && currentValue && !readonly && !disabled"
				}],
				attrs: {
					type: "clear"
				},
				nativeOn: {
					click: function(t) {
						e.clear(t)
					}
				}
			}), e._v(" "), a("icon", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.novalidate && !e.equalWith && (e.touched && !e.valid && e.firstError || e.forceShowError && !e.valid && e.firstError),
					expression: "!novalidate && !equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"
				}],
				staticClass: "vux-input-icon",
				attrs: {
					type: "warn",
					title: e.valid ? "" : e.firstError
				}
			}), e._v(" "), !e.novalidate && e.hasLengthEqual && e.dirty && e.equalWith && !e.valid ? a("icon", {
				staticClass: "vux-input-icon",
				attrs: {
					type: "warn"
				}
			}) : e._e(), e._v(" "), a("icon", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.novalidate && e.equalWith && e.equalWith === e.currentValue && e.valid,
					expression: "!novalidate && equalWith && equalWith === currentValue && valid"
				}],
				attrs: {
					type: "success"
				}
			}), e._v(" "), a("icon", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.novalidate && "success" === e.iconType,
					expression: "novalidate && iconType === 'success'"
				}],
				staticClass: "vux-input-icon",
				attrs: {
					type: "success"
				}
			}), e._v(" "), a("icon", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.novalidate && "error" === e.iconType,
					expression: "novalidate && iconType === 'error'"
				}],
				staticClass: "vux-input-icon",
				attrs: {
					type: "warn"
				}
			}), e._v(" "), e._t("right")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-tab"
			}, [e._t("header"), e._v(" "), a("div", {
				ref: "viewBoxBody",
				staticClass: "weui-tab__panel vux-fix-safari-overflow-scrolling",
				style: {
					paddingTop: e.bodyPaddingTop,
					paddingBottom: e.bodyPaddingBottom
				},
				attrs: {
					id: "vux_view_box_body"
				}
			}, [e._t("default")], 2), e._v(" "), e._t("bottom")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-x-dialog",
				on: {
					touchmove: e.onTouchMove
				}
			}, [a("transition", {
				attrs: {
					name: e.maskTransition
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.currentValue,
					expression: "currentValue"
				}],
				staticClass: "weui-mask",
				on: {
					click: function(t) {
						e.hideOnBlur && (e.currentValue = !1)
					}
				}
			})]), e._v(" "), a("transition", {
				attrs: {
					name: e.dialogTransition
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.currentValue,
					expression: "currentValue"
				}],
				staticClass: "weui-dialog",
				style: e.dialogStyle
			}, [e._t("default")], 2)])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("transition", {
				attrs: {
					name: "vux-mask"
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.show,
					expression: "show"
				}],
				staticClass: "weui-loading_toast"
			}, [a("div", {
				staticClass: "weui-mask_transparent"
			}), e._v(" "), a("div", {
				staticClass: "weui-toast",
				style: {
					position: e.position
				}
			}, [a("i", {
				staticClass: "weui-loading weui-icon_toast"
			}), e._v(" "), a("p", {
				staticClass: "weui-toast__content"
			}, [e._v(e._s(e.text || "加载中")), e._t("default")], 2)])])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-toast"
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.isShowMask && e.show,
					expression: "isShowMask && show"
				}],
				staticClass: "weui-mask_transparent"
			}), e._v(" "), a("transition", {
				attrs: {
					name: e.currentTransition
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.show,
					expression: "show"
				}],
				staticClass: "weui-toast",
				class: e.toastClass,
				style: {
					width: e.width
				}
			}, [a("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: "text" !== e.type,
					expression: "type !== 'text'"
				}],
				staticClass: "weui-icon-success-no-circle weui-icon_toast"
			}), e._v(" "), e.text ? a("p", {
				staticClass: "weui-toast__content",
				style: e.style,
				domProps: {
					innerHTML: e._s(e.text)
				}
			}) : a("p", {
				staticClass: "weui-toast__content"
			}, [e._t("default")], 2)])])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-cell vux-x-textarea"
			}, [a("div", {
				staticClass: "weui-cell__hd"
			}, [e.hasRestrictedLabel ? a("div", {
				style: e.labelStyles
			}, [e._t("restricted-label")], 2) : e._e(), e._v(" "), e._t("label", [e.title ? a("label", {
				staticClass: "weui-label",
				style: {
					width: e.$parent.labelWidth || e.labelWidth + "em",
					textAlign: e.$parent.labelAlign,
					marginRight: e.$parent.labelMarginRight
				},
				domProps: {
					innerHTML: e._s(e.title)
				}
			}) : e._e(), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()])], 2), e._v(" "), a("div", {
				staticClass: "weui-cell__bd"
			}, [a("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				ref: "textarea",
				staticClass: "weui-textarea",
				style: e.textareaStyle,
				attrs: {
					autocomplete: e.autocomplete,
					autocapitalize: e.autocapitalize,
					autocorrect: e.autocorrect,
					spellcheck: e.spellcheck,
					placeholder: e.placeholder,
					readonly: e.readonly,
					name: e.name,
					rows: e.rows,
					cols: e.cols,
					maxlength: e.max
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					focus: function(t) {
						e.$emit("on-focus")
					},
					blur: function(t) {
						e.$emit("on-blur")
					},
					input: function(t) {
						t.target.composing || (e.currentValue = t.target.value)
					}
				}
			}), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showCounter && e.max,
					expression: "showCounter && max"
				}],
				staticClass: "weui-textarea-counter",
				on: {
					click: e.focus
				}
			}, [a("span", [e._v(e._s(e.count))]), e._v("/" + e._s(e.max) + "\n    ")])])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [e.title ? a("div", {
				staticClass: "weui-cells__title",
				style: {
					color: e.titleColor
				},
				domProps: {
					innerHTML: e._s(e.title)
				}
			}) : e._e(), e._v(" "), a("div", {
				staticClass: "weui-cells",
				class: {
					"vux-no-group-title": !e.title
				},
				style: {
					marginTop: e.gutter
				}
			}, [e._t("after-title"), e._v(" "), e._t("default")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t, a) {
	a(286);
	var n = a(0)(a(168), a(353), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(267);
	var n = a(0)(a(196), a(322), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(274);
	var n = a(0)(a(197), a(335), null, null);
	e.exports = n.exports
}, , function(e, t, a) {
	"use strict";
	(function(e) {
		function n(e) {
			return e && e.__esModule ? e : {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = a(153),
			i = n(r),
			l = {
				install: function(t, a) {
					t.mixin({
						beforeCreate: function() {
							r()
						},
						data: function() {
							return {
								BMapData: {
									address: ""
								}
							}
						}
					}), t.prototype.$location = function(e) {
						var t = this;
						r().then(function() {
							var a = new BMap.Geolocation;
							a.getCurrentPosition(function(a) {
								if (this.getStatus() === BMAP_STATUS_SUCCESS) {
									var r = {};
									null === a.accuracy && t.$vux.toast.show({
										width: "20em",
										text: "请允许获取位置",
										type: "text"
									}), r = a.point, n(r, function(a) {
										t.$set(t.BMapData, "address", a.address), e && "function" == typeof e && e(a)
									})
								} else t.$vux.toast.show({
									width: "20em",
									text: "获取地址位置失败",
									type: "text"
								})
							}, {
								enableHighAccuracy: !1,
								timeout: 3e3,
								maximumAge: 60
							})
						})
					};
					var n = function(e, t) {
							var a = new BMap.Geocoder;
							a.getLocation(e, function(e) {
								e && t && "function" == typeof t && t(e)
							})
						},
						r = function() {
							return e.BMap ? e.BMap._preloader ? e.BMap._preloader : i.
						default.resolve(e.BMap):
							(e.BMap = {}, e.BMap._preloader = new i.
						default (function(t, a) {
								e._initBaiduMap = function() {
									t(e.BMap), e.document.body.removeChild(n), e.BMap._preloader = null, e._initBaiduMap = null
								};
								var n = document.createElement("script");
								e.document.body.appendChild(n), n.src = "//api.map.baidu.com/api?v=2.0&ak=WYABRjaoGklLEcobdrl2erIGvOpT4toj&callback=_initBaiduMap"
							}), e.BMap._preloader)
						}
				}
			};
		t.
	default = l
	}).call(t, a(64))
}, , , , , , , , , , , , , , function(e, t, a) {
	a(277);
	var n = a(0)(a(182), a(340), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(191), a(327), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(296);
	var n = a(0)(a(192), a(368), null, null);
	e.exports = n.exports
}, , , , function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				e.$tabbar = document.querySelector(".weui-tabbar")
			})
		},
		props: {
			value: Boolean,
			showCancel: Boolean,
			cancelText: String,
			menus: {
				type: [Object, Array],
			default:


				function() {
					return {}
				}
			},
			closeOnClickingMask: {
				type: Boolean,
			default:
				!0
			}
		},
		data: function() {
			return {
				show: !1
			}
		},
		methods: {
			onMenuClick: function(e, t) {
				"string" == typeof e ? this.emitEvent("on-click-menu", t) : "disabled" !== e.type && "info" !== e.type && (e.value ? this.emitEvent("on-click-menu", e.value) : this.show = !1)
			},
			onClickingMask: function() {
				this.closeOnClickingMask && (this.show = !1)
			},
			emitEvent: function(e, t) {
				var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
				"on-click-menu" !== e || /.noop/.test(t) || (this.$emit(e, t), this.$emit(e + "-" + t), a && (this.show = !1))
			},
			fixIos: function(e) {
				this.$el.parentNode && this.$el.parentNode.className.indexOf("v-transfer-dom") !== -1 || this.$tabbar && /iphone/i.test(navigator.userAgent) && (this.$tabbar.style.zIndex = e)
			}
		},
		watch: {
			show: function(e) {
				var t = this;
				this.$emit("input", e), e ? this.fixIos(-1) : setTimeout(function() {
					t.fixIos(100)
				}, 200)
			},
			value: {
				handler: function(e) {
					this.show = e
				},
				immediate: !0
			}
		},
		beforeDestroy: function() {
			this.fixIos(100)
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			text: [String, Number]
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e, t) {
		return (0, l.
	default)(e) === (0, l.
	default)(t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(9),
		l = n(i),
		u = a(8),
		s = n(u);
	t.
default = {
		props: {
			value: {
				type: [String, Number, Object],
				required: !0
			},
			disabled: Boolean
		},
		computed: {
			classNames: function() {
				var e = this,
					t = "string" == typeof this.value || "number" == typeof this.value,
					a = {
						"vux-tap-active": !this.disabled
					};
				if (this.$parent.defaultItemClass && (a[this.$parent.defaultItemClass] = !0), this.$parent.selectedItemClass) {
					var n = !1;
					if ("radio" === this.$parent.type) t && this.$parent.currentValue === this.value ? n = !0 : "object" === (0, s.
				default)(this.value) && r(this.$parent.currentValue, this.value) && (n = !0);
					else if ("string" == typeof this.value) this.$parent.currentValue.indexOf(this.value) > -1 && (n = !0);
					else if (this.$parent.currentValue && this.$parent.currentValue.length) {
						var i = this.$parent.currentValue.filter(function(t) {
							return r(t, e.value)
						});
						n = i.length > 0
					}
					a[this.$parent.selectedItemClass] = n
				}
				return this.$parent.disabledItemClass && (a[this.$parent.disabledItemClass] = this.disabled), a
			}
		},
		methods: {
			select: function() {
				"radio" === this.$parent.type ? this.selectRadio() : this.selectCheckbox()
			},
			selectRadio: function() {
				this.disabled || (this.$parent.currentValue = this.value), this.$emit("on-item-click", this.value, this.disabled)
			},
			selectCheckbox: function() {
				this.$parent.currentValue && null !== this.$parent.currentValue || (this.$parent.currentValue = []);
				var e = "string" == typeof this.value || "number" == typeof this.value;
				if (!this.disabled) {
					var t = -1;
					t = e ? this.$parent.currentValue.indexOf(this.value) : this.$parent.currentValue.map(function(e) {
						return (0, l.
					default)(e)
					}).indexOf((0, l.
				default)(this.value)), t > -1 ? this.$parent.currentValue.splice(t, 1) : (!this.$parent.max || this.$parent.max && null !== this.$parent.currentValue && this.$parent.currentValue.length < this.$parent.max) && (this.$parent.currentValue && this.$parent.currentValue.length || (this.$parent.currentValue = []), this.$parent.currentValue.push(this.value))
				}
				this.$emit("on-item-click", this.value, this.disabled)
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			defaultItemClass: String,
			selectedItemClass: String,
			disabledItemClass: String,
			type: {
				type: String,
			default:
				"radio"
			},
			value: [String, Number, Array, Object],
			max: Number
		},
		watch: {
			value: function(e) {
				this.currentValue = e, this.$emit("on-change", e)
			},
			currentValue: function(e) {
				this.$emit("input", e)
			}
		},
		data: function() {
			return {
				currentValue: this.value
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e) {
		return JSON.parse((0, s.
	default)(e))
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(15),
		l = n(i),
		u = a(9),
		s = n(u),
		o = a(19),
		c = n(o),
		p = a(417),
		m = n(p),
		v = a(30),
		d = n(v),
		f = a(97),
		h = a(422),
		_ = n(h);
	t.
default = {
		components: {
			Tip: m.
		default,
			Icon:
			d.
		default
		},
		filters: {
			getValue: f.getValue,
			getKey: f.getKey
		},
		mixins: [c.
	default],
		props: {
			name: String,
			showError: Boolean,
			title: String,
			required: {
				type: Boolean,
			default:
				!1
			},
			options: {
				type: Array,
				required: !0
			},
			value: {
				type: Array,
			default:


				function() {
					return []
				}
			},
			max: Number,
			min: Number,
			fillMode: Boolean,
			randomOrder: Boolean,
			checkDisabled: {
				type: Boolean,
			default:
				!0
			},
			labelPosition: String
		},
		data: function() {
			return {
				currentValue: [],
				currentOptions: this.options
			}
		},
		created: function() {
			this.handleChangeEvent = !0, this.value && (this.currentValue = this.value), this.randomOrder ? this.currentOptions = (0, _.
		default)(this.options) : this.currentOptions = this.options
		},
		methods: {
			getValue: f.getValue,
			getKey: f.getKey,
			ifDisable: function(e) {
				return !!this.checkDisabled && (this.currentValue.indexOf(e) === -1 && this.currentValue.length === this._max)
			}
		},
		computed: {
			_total: function() {
				return this.fillMode ? this.options.length + 1 : this.options.length
			},
			_min: function() {
				if (!this.required && !this.min) return 0;
				if (!this.required && this.min) return Math.min(this._total, this.min);
				if (this.required) {
					if (this.min) {
						var e = Math.max(1, this.min);
						return Math.min(this._total, e)
					}
					return 1
				}
			},
			_max: function() {
				return (this.required || this.max) && this.max ? this.max > this._total ? this._total : this.max : this._total
			},
			valid: function() {
				return this.currentValue.length >= this._min && this.currentValue.length <= this._max
			}
		},
		watch: {
			value: function(e) {
				(0, s.
			default)(e) !== (0, s.
			default)(this.currentValue) && (this.currentValue = e)
			},
			options: function(e) {
				this.currentOptions = e
			},
			currentValue: function(e) {
				var t = r(e);
				this.$emit("on-change", t), this.$emit("input", t);
				var a = {};
				this._min && (this.required ? this.currentValue.length < this._min && (a = {
					min: this._min
				}) : this.currentValue.length && this.currentValue.length < this._min && (a = {
					min: this._min
				})), !this.valid && this.dirty && (0, l.
			default)(a).length ? this.$emit("on-error", a) : this.$emit("on-clear-error")
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = ["-moz-box-", "-webkit-box-", ""];
	t.
default = {
		props: {
			span: [Number, String],
			order: [Number, String]
		},
		methods: {
			buildWidth: function(e) {
				return "number" == typeof e ? e < 1 ? e : e / 12 : "string" == typeof e ? e.replace("px", "") / this.bodyWidth : void 0
			}
		},
		computed: {
			style: function() {
				var e = {},
					t = "horizontal" === this.$parent.orient ? "marginLeft" : "marginTop";
				if (e[t] = this.$parent.gutter + "px", this.span) for (var a = 0; a < n.length; a++) e[n[a] + "flex"] = "0 0 " + 100 * this.buildWidth(this.span) + "%";
				return "undefined" != typeof this.order && (e.order = this.order), e
			}
		},
		data: function() {
			return {
				bodyWidth: document.documentElement.offsetWidth
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			gutter: {
				type: Number,
			default:
				8
			},
			orient: {
				type: String,
			default:
				"horizontal"
			},
			justify: String,
			align: String,
			wrap: String,
			direction: String
		},
		computed: {
			styles: function e() {
				var e = {
					"justify-content": this.justify,
					"-webkit-justify-content": this.justify,
					"align-items": this.align,
					"-webkit-align-items": this.align,
					"flex-wrap": this.wrap,
					"-webkit-flex-wrap": this.wrap,
					"flex-direction": this.direction,
					"-webkit-flex-direction": this.direction
				};
				return e
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(20);
	t.
default = {
		props: ["headerLabel", "headerValue", "bodyItems", "footerButtons", "name"],
		methods: {
			onButtonClick: function(e, t) {
				e && e(this.name), t && (0, n.go)(t, this.$router)
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			showLoading: {
				type: Boolean,
			default:
				!0
			},
			tip: String,
			backgroundColor: String
		},
		methods: {
			getStyle: function() {
				if (!this.showLoading && this.tip) return {
					"background-color": this.backgroundColor
				}
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(20);
	t.
default = {
		props: {
			header: String,
			footer: Object,
			list: Array,
			type: {
				type: String,
			default:
				"1"
			}
		},
		methods: {
			getUrl: function(e) {
				return (0, n.getUrl)(e, this.$router)
			},
			onClickFooter: function() {
				this.$emit("on-click-footer"), (0, n.go)(this.footer.url, this.$router)
			},
			onClickHeader: function() {
				this.$emit("on-click-header")
			},
			onItemClick: function(e) {
				this.$emit("on-click-item", e), (0, n.go)(e.url, this.$router)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(9),
		i = n(r),
		l = a(8),
		u = n(l),
		s = a(236),
		o = n(s),
		c = a(148),
		p = a(428),
		m = n(p),
		v = a(43),
		d = n(v);
	t.
default = {
		components: {
			Flexbox: c.Flexbox,
			FlexboxItem: c.FlexboxItem
		},
		created: function() {
			if (0 !== this.columns) {
				var e = this.columns;
				this.store = new m.
			default (this.data, e, this.fixedColumns), this.currentData = this.store.getColumns(this.value)
			}
		},
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				e.render(e.currentData, e.currentValue)
			})
		},
		props: {
			data: [Array],
			columns: {
				type: Number,
			default:
				0
			},
			fixedColumns: {
				type: Number,
			default:
				0
			},
			value: Array,
			itemClass: {
				type: String,
			default:
				"scroller-item"
			},
			columnWidth: Array
		},
		methods: {
			getNameValues: function() {
				return (0, d.
			default)(this.currentValue, this.data)
			},
			getId: function(e) {
				return "#vux-picker-" + this.uuid + "-" + e
			},
			render: function(e, t) {
				this.count = this.currentData.length;
				var a = this;
				if (e && e.length) {
					var n = this.currentData.length;
					if (t.length < n) for (var r = 0; r < n; r++) this.$set(a.currentValue, r, e[r][0].value || e[r][0]);
					for (var i = function(n) {
							return document.querySelector(a.getId(n)) ? (a.scroller[n] && a.scroller[n].destroy(), a.scroller[n] = new o.
						default (a.getId(n), {
								data: e[n],
								defaultValue: t[n] || e[n][0].value,
								itemClass: a.item_class,
								onSelect: function(e) {
									a.$set(a.currentValue, n, e), (!this.columns || this.columns && a.getValue().length === a.store.count) && a.$emit("on-change", a.getValue()), 0 !== a.columns && a.renderChain(n + 1)
								}
							}), void(a.currentValue && a.scroller[n].select(t[n]))) : {
								v: void 0
							}
						}, l = 0; l < e.length; l++) {
						var s = i(l);
						if ("object" === ("undefined" == typeof s ? "undefined" : (0, u.
					default)(s))) return s.v
					}
				}
			},
			renderChain: function(e) {
				if (this.columns && !(e > this.count - 1)) {
					var t = this,
						a = this.getId(e);
					this.scroller[e].destroy();
					var n = this.store.getChildren(t.getValue()[e - 1]);
					this.scroller[e] = new o.
				default (a, {
						data: n,
						itemClass: t.item_class,
						onSelect: function(a) {
							t.$set(t.currentValue, e, a), t.$emit("on-change", t.getValue()), t.renderChain(e + 1)
						}
					}), this.$set(this.currentValue, e, n[0].value), this.renderChain(e + 1)
				}
			},
			getValue: function() {
				for (var e = [], t = 0; t < this.currentData.length; t++) {
					if (!this.scroller[t]) return [];
					e.push(this.scroller[t].value)
				}
				return e
			},
			emitValueChange: function(e) {
				(!this.columns || this.columns && e.length === this.store.count) && this.$emit("on-change", e)
			}
		},
		data: function() {
			return {
				scroller: [],
				count: 0,
				uuid: Math.random().toString(36).substring(3, 8),
				currentData: this.data,
				currentValue: this.value
			}
		},
		watch: {
			value: function(e) {
				(0, i.
			default)(e) !== (0, i.
			default)(this.currentValue) && (this.currentValue = e)
			},
			currentValue: function(e, t) {
				if (this.$emit("input", e), 0 !== this.columns) e.length > 0 && (0, i.
			default)(e) !== (0, i.
			default)(t) && (this.currentData = this.store.getColumns(e), this.$nextTick(function() {
					this.render(this.currentData, e)
				}));
				else if (e.length) for (var a = 0; a < e.length; a++) this.scroller[a] && this.scroller[a].value !== e[a] && this.scroller[a].select(e[a]);
				else this.render(this.currentData, [])
			},
			data: function(e) {
				(0, i.
			default)(e) !== (0, i.
			default)(this.currentData) && (this.currentData = e)
			},
			currentData: function(e) {
				var t = this;
				if ("[object Array]" === Object.prototype.toString.call(e[0])) this.$nextTick(function() {
					t.render(e, t.currentValue), t.$nextTick(function() {
						t.emitValueChange(t.getValue()), (0, i.
					default)(t.getValue()) !== (0, i.
					default)(t.currentValue) && (!t.columns || t.columns && t.getValue().length === t.store.count) && (t.currentValue = t.getValue())
					})
				});
				else if (0 !== this.columns) {
					if (!e.length) return;
					var a = this.columns;
					this.store = new m.
				default (e, a, this.fixedColumns), this.currentData = this.store.getColumns(this.currentValue)
				}
			}
		},
		beforeDestroy: function() {
			for (var e = 0; e < this.count; e++) this.scroller[e].destroy(), this.scroller[e] = null
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(9),
		i = n(r),
		l = a(411),
		u = n(l),
		s = a(5),
		o = n(s),
		c = a(7),
		p = n(c),
		m = a(13),
		v = n(m),
		d = a(148),
		f = a(431),
		h = n(f),
		_ = a(43),
		g = n(_),
		x = a(238),
		w = n(x),
		b = a(29),
		y = n(b),
		C = function(e) {
			return JSON.parse((0, i.
		default)(e))
		};
	t.
default = {
		directives: {
			TransferDom: y.
		default
		},
		created: function() {
			"undefined" != typeof this.show && (this.showValue = this.show)
		},
		mixins: [w.
	default],
		components: {
			Picker: u.
		default,
			Cell:
			o.
		default,
			Popup:
			p.
		default,
			Flexbox:
			d.Flexbox,
			FlexboxItem: d.FlexboxItem,
			InlineDesc: v.
		default
		},
		filters: {
			array2string: h.
		default,
			value2name:
			g.
		default
		},
		props: {
			valueTextAlign: {
				type: String,
			default:
				"right"
			},
			title: String,
			cancelText: String,
			confirmText: String,
			data: {
				type: Array,
			default:


				function() {
					return []
				}
			},
			placeholder: String,
			columns: {
				type: Number,
			default:
				0
			},
			fixedColumns: {
				type: Number,
			default:
				0
			},
			value: {
				type: Array,
			default:


				function() {
					return []
				}
			},
			showName: Boolean,
			inlineDesc: [String, Number, Array, Object, Boolean],
			showCell: {
				type: Boolean,
			default:
				!0
			},
			show: Boolean,
			displayFormat: Function,
			isTransferDom: {
				type: Boolean,
			default:
				!0
			},
			columnWidth: Array
		},
		methods: {
			value2name: g.
		default,
			getNameValues:


			function() {
				return (0, g.
			default)(this.currentValue, this.data)
			},
			onClick: function() {
				this.showValue = !0
			},
			onHide: function(e) {
				this.showValue = !1, e && (this.closeType = !0, this.currentValue = C(this.tempValue)), e || (this.closeType = !1, this.value.length > 0 && (this.tempValue = C(this.currentValue)))
			},
			onPopupShow: function() {
				this.closeType = !1, this.$emit("on-show")
			},
			onPopupHide: function(e) {
				this.value.length > 0 && (this.tempValue = C(this.currentValue)), this.$emit("on-hide", this.closeType)
			},
			onPickerChange: function(e) {
				if ((0, i.
			default)(this.currentValue) !== (0, i.
			default)(e) && this.value.length) {
					var t = (0, i.
				default)(this.data);
					t !== this.currentData && "[]" !== this.currentData && (this.tempValue = C(e)), this.currentData = t
				}
				this.$emit("on-shadow-change", C(e))
			}
		},
		watch: {
			value: function(e) {
				(0, i.
			default)(e) !== (0, i.
			default)(this.tempValue) && (this.tempValue = C(e))
			},
			currentValue: function(e) {
				this.$emit("on-change", C(e)), this.$emit("input", C(e))
			},
			show: function(e) {
				this.showValue = e
			}
		},
		data: function() {
			return {
				onShowProcess: !1,
				tempValue: C(this.value),
				closeType: !1,
				currentData: (0, i.
			default)(this.data),
				showValue: !1,
				currentValue: this.value
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e) {
		return e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(450),
		l = n(i),
		u = a(298),
		s = n(u);
	t.
default = {
		props: {
			value: String,
			size: {
				type: Number,
			default:
				80
			},
			level: {
				type: String,
			default:
				"L"
			},
			bgColor: {
				type: String,
			default:
				"#FFFFFF"
			},
			fgColor: {
				type: String,
			default:
				"#000000"
			},
			type: {
				type: String,
			default:
				"img"
			}
		},
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				e.render()
			})
		},
		data: function() {
			return {
				imgData: ""
			}
		},
		watch: {
			value: function() {
				this.render()
			},
			size: function() {
				this.render()
			},
			level: function() {
				this.render()
			},
			bgColor: function() {
				this.render()
			},
			fgColor: function() {
				this.render()
			}
		},
		methods: {
			render: function() {
				var e = this,
					t = new l.
				default (-1, s.
				default [this.level]);
				t.addData(this.value), t.make();
				var a = this.$refs.canvas,
					n = a.getContext("2d"),
					i = t.modules,
					u = this.size / i.length,
					o = this.size / i.length,
					c = (window.devicePixelRatio || 1) / r(n);
				a.height = a.width = this.size * c, n.scale(c, c), i.forEach(function(t, a) {
					t.forEach(function(t, r) {
						n.fillStyle = t ? e.fgColor : e.bgColor;
						var i = Math.ceil((r + 1) * u) - Math.floor(r * u),
							l = Math.ceil((a + 1) * o) - Math.floor(a * o);
						n.fillRect(Math.round(r * u), Math.round(a * o), i, l)
					})
				}), "img" === this.type && (this.imgData = a.toDataURL("image/png"))
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		created: function() {
			this.currentValue = this.value
		},
		mounted: function() {
			this.updateStyle()
		},
		props: {
			max: {
				type: Number,
			default:
				5
			},
			value: {
				type: Number,
			default:
				0
			},
			disabled: Boolean,
			star: {
				type: String,
			default:
				"★"
			},
			activeColor: {
				type: String,
			default:
				"#fc6"
			},
			margin: {
				type: Number,
			default:
				2
			},
			fontSize: {
				type: Number,
			default:
				25
			}
		},
		computed: {
			sliceValue: function() {
				var e = this.currentValue.toString().split(".");
				return 1 === e.length ? [e[0], 0] : e
			},
			cutIndex: function() {
				return 1 * this.sliceValue[0]
			},
			cutPercent: function() {
				return 10 * this.sliceValue[1]
			}
		},
		methods: {
			handleClick: function(e, t) {
				this.disabled && !t || (this.currentValue === e + 1 ? (this.currentValue = e, this.updateStyle()) : this.currentValue = e + 1)
			},
			updateStyle: function() {
				for (var e = 0; e < this.max; e++) e <= this.currentValue - 1 ? this.$set(this.colors, e, this.activeColor) : this.$set(this.colors, e, "#ccc")
			}
		},
		data: function() {
			return {
				colors: [],
				currentValue: 0
			}
		},
		watch: {
			currentValue: function(e) {
				this.updateStyle(), this.$emit("input", e)
			},
			value: function(e) {
				this.currentValue = e
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e) {
		return JSON.parse((0, l.
	default)(e))
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(9),
		l = n(i),
		u = a(54),
		s = n(u),
		o = a(463),
		c = n(o),
		p = a(460),
		m = n(p),
		v = a(461),
		d = n(v),
		f = function() {
			return {
				content: "Pull Down To Refresh",
				height: 60,
				autoRefresh: !1,
				downContent: "Pull Down To Refresh",
				upContent: "Release To Refresh",
				loadingContent: "Loading...",
				clsPrefix: "xs-plugin-pulldown-"
			}
		},
		h = function() {
			return {
				content: "Pull Up To Refresh",
				pullUpHeight: 60,
				height: 40,
				autoRefresh: !1,
				downContent: "Release To Refresh",
				upContent: "Pull Up To Refresh",
				loadingContent: "Loading...",
				clsPrefix: "xs-plugin-pullup-"
			}
		};
	t.
default = {
		props: {
			value: {
				type: Object,
			default:


				function() {
					return {
						pulldownStatus: "",
						pullupStatus: ""
					}
				}
			},
			height: String,
			lockX: Boolean,
			lockY: Boolean,
			scrollbarX: Boolean,
			scrollbarY: Boolean,
			bounce: {
				type: Boolean,
			default:
				!0
			},
			useOriginScroll: {
				type: Boolean,
			default:
				!1
			},
			useTransition: {
				type: Boolean,
			default:
				!0
			},
			preventDefault: {
				type: Boolean,
			default:
				!1
			},
			stopPropagation: Boolean,
			boundryCheck: {
				type: Boolean,
			default:
				!0
			},
			gpuAcceleration: {
				type: Boolean,
			default:
				!0
			},
			usePulldown: {
				type: Boolean,
			default:
				!1
			},
			usePullup: {
				type: Boolean,
			default:
				!1
			},
			pulldownConfig: {
				type: Object,
			default:


				function() {
					return {}
				}
			},
			pullupConfig: {
				type: Object,
			default:


				function() {
					return {}
				}
			},
			enableHorizontalSwiping: {
				type: Boolean,
			default:
				!1
			},
			scrollBottomOffset: {
				type: Number,
			default:
				0
			}
		},
		methods: {
			reset: function(e, t, a) {
				e && ("undefined" != typeof e.left && this._xscroll.scrollLeft(e.left, t, a), "undefined" != typeof e.top && this._xscroll.scrollTop(e.top, t, a)), this._xscroll && this._xscroll.resetSize()
			},
			donePulldown: function() {
				var e = this;
				this.pulldown.reset(function() {
					e.reset()
				}), this.currentValue.pulldownStatus = "default"
			},
			disablePullup: function() {
				this.pullup.stop(), this.currentValue.pullupStatus = "disabled"
			},
			enablePullup: function() {
				this.currentValue.pullupStatus = "default", this.pullup.restart()
			},
			donePullup: function() {
				this.pullup.complete(), this.reset(), this.currentValue.pullupStatus = "default"
			},
			getStyles: function() {
				var e = this.height;
				!this.height && this.$el && !this.$el.style.height && this.lockX && (e = document.documentElement.clientHeight + "px", this.reset()), this.height && 0 === this.height.indexOf("-") && (e = document.documentElement.clientHeight + parseInt(this.height) + "px"), this.styles = {
					height: "" + e
				}
			}
		},
		created: function() {
			var e = this;
			this.value ? this.currentValue = this.value : this.currentValue = {
				pulldownStatus: "",
				pullupStatus: ""
			}, this.handleOrientationchange = function() {
				setTimeout(function() {
					e.reset()
				}, 100)
			}
		},
		data: function() {
			return {
				currentValue: {},
				styles: {}
			}
		},
		watch: {
			currentValue: {
				handler: function(e) {
					this.$emit("input", r(e))
				},
				deep: !0
			},
			height: function() {
				this.getStyles()
			},
			value: {
				handler: function(e) {
					"default" === e.pullupStatus && "default" !== this.currentValue.pullupStatus && this.donePullup(), "default" === e.pulldownStatus && "default" !== this.currentValue.pulldownStatus && this.donePulldown(), "disabled" === e.pullupStatus && "disabled" !== this.currentValue.pullupStatus && this.disablePullup(), "enabled" === e.pullupStatus && "disabled" === this.currentValue.pullupStatus && this.enablePullup()
				},
				deep: !0
			}
		},
		mounted: function() {
			var e = this;
			this.uuid = Math.random().toString(36).substring(3, 8), this.$nextTick(function() {
				e.$el.setAttribute("id", "vux-scroller-" + e.uuid);
				var t = null;
				if (e.$slots.
			default &&(t = e.$slots.
			default [0].elm), !t) throw new Error("no content is found");
				if (e._xscroll = new c.
			default ({
					renderTo: "#vux-scroller-" + e.uuid,
					lockX: e.lockX,
					lockY: e.lockY,
					scrollbarX: e.scrollbarX,
					scrollbarY: e.scrollbarY,
					content: t,
					bounce: e.bounce,
					useOriginScroll: e.useOriginScroll,
					useTransition: e.useTransition,
					preventDefault: e.preventDefault,
					boundryCheck: e.boundryCheck,
					gpuAcceleration: e.gpuAcceleration,
					stopPropagation: e.stopPropagation
				}), e._xscroll.on("scroll", function() {
					if (e._xscroll) {
						var t = e._xscroll.getScrollTop();
						e.$emit("on-scroll", {
							top: t,
							left: e._xscroll.getScrollLeft()
						});
						var a = e._xscroll.containerHeight,
							n = e._xscroll.height;
						t >= a - n - e.scrollBottomOffset && e.$emit("on-scroll-bottom")
					}
				}), e.usePulldown) {
					var a = e.$slots.pulldown,
						n = (0, s.
					default)(f(), e.pulldownConfig);
					a && (n.container = a[0].elm), e.pulldown = new m.
				default (n), e._xscroll.plug(e.pulldown), e.pulldown.on("loading", function(t) {
						e.$emit("on-pulldown-loading", e.uuid)
					}), e.pulldown.on("statuschange", function(t) {
						e.currentValue.pulldownStatus = t.newVal
					})
				}
				if (e.usePullup) {
					var r = e.$slots.pullup,
						i = (0, s.
					default)(h(), e.pullupConfig);
					r && (i.container = r[0].elm), e.pullup = new d.
				default (i), e._xscroll.plug(e.pullup), e.pullup.on("loading", function(t) {
						e.$emit("on-pullup-loading", e.uuid)
					}), e.pullup.on("statuschange", function(t) {
						e.currentValue.pullupStatus = t.newVal
					})
				}
				e.enableHorizontalSwiping && (e._xscroll.on("panstart", function(t) {
					2 !== t.direction && 4 !== t.direction || (t.preventDefault(), e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !1), e._xscroll.userConfig.lockY = !0)
				}), e._xscroll.on("panend", function() {
					e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !0), e._xscroll.userConfig.lockY = !1
				})), e._xscroll.render(), window.addEventListener("orientationchange", e.handleOrientationchange, !1)
			}), this.getStyles()
		},
		beforeDestroy: function() {
			this.pullup && (this._xscroll.unplug(this.pullup), this.pullup.pluginDestructor()), this.pulldown && (this._xscroll.unplug(this.pulldown), this.pulldown.pluginDestructor()), window.removeEventListener("orientationchange", this.handleOrientationchange, !1), this._xscroll.destroy(), this._xscroll = null
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(151),
		i = n(r);
	t.
default = {
		mixins: [i.
	default],
		props: {
			required: {
				type: Boolean,
			default:
				!1
			},
			placeholder: String,
			cancelText: String,
			value: {
				type: String,
			default:
				""
			},
			results: {
				type: Array,
			default:


				function() {
					return []
				}
			},
			autoFixed: {
				type: Boolean,
			default:
				!0
			},
			top: {
				type: String,
			default:
				"0px"
			},
			position: {
				type: String,
			default:
				"fixed"
			},
			autoScrollToTop: Boolean
		},
		created: function() {
			this.value && (this.currentValue = this.value)
		},
		computed: {
			fixPosition: function() {
				return this.isFixed ? "absolute" === this.position ? "absolute" : "fixed" : "static"
			}
		},
		methods: {
			clear: function() {
				this.currentValue = "", this.isFocus = !0, this.setFocus(), this.autoFixed && !this.isFixed && (this.isFixed = !0)
			},
			cancel: function() {
				this.isCancel = !0, this.currentValue = "", this.isFixed = !1, this.$emit("on-cancel")
			},
			handleResultClick: function(e) {
				this.$emit("result-click", e), this.$emit("on-result-click", e), this.isCancel = !0, this.isFixed = !1
			},
			touch: function() {
				this.isCancel = !1, this.autoFixed && (this.isFixed = !0), this.$emit("on-touch")
			},
			setFocus: function() {
				this.$refs.input.focus()
			},
			onFocus: function() {
				this.isFocus = !0, this.$emit("on-focus"), this.touch()
			},
			onBlur: function() {
				this.isFocus = !1
			}
		},
		data: function() {
			return {
				currentValue: "",
				isCancel: !0,
				isFocus: !1,
				isFixed: !1
			}
		},
		watch: {
			isFixed: function(e) {
				e === !0 && (this.setFocus(), this.isFocus = !0, this.autoScrollToTop && setTimeout(function() {
					window.scrollTo(0, 0)
				}, 150))
			},
			value: function(e) {
				this.currentValue = e
			},
			currentValue: function(e) {
				this.$emit("input", e), this.$emit("on-change", e)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(49),
		i = n(r),
		l = a(151),
		u = n(l),
		s = function(e, t) {
			var a = (0, i.
		default)(t, function(t) {
				return t.key === e
			});
			return a ? a.value : e
		};
	t.
default = {
		mixins: [u.
	default],
		created: function() {
			"undefined" != typeof this.value && (this.currentValue = this.value)
		},
		computed: {
			processOptions: function() {
				return this.options.length && {}.hasOwnProperty.call(this.options[0], "key") ? this.options : this.options.map(function(e) {
					return {
						key: e,
						value: e
					}
				})
			},
			showPlaceholder: function() {
				return !("undefined" != typeof this.value && "" !== this.value || !this.placeholder)
			}
		},
		filters: {
			findByKey: s
		},
		watch: {
			value: function(e) {
				this.currentValue = e
			},
			currentValue: function(e) {
				this.$emit("input", e), this.$emit("on-change", e)
			}
		},
		props: {
			title: String,
			direction: String,
			options: {
				type: Array,
				required: !0
			},
			name: String,
			placeholder: String,
			readonly: Boolean,
			value: [Boolean, String, Number, Object]
		},
		data: function() {
			return {
				currentValue: "",
				isIOS: /iPad|iPhone|iPod/.test(window.navigator.userAgent)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(429),
		i = n(r);
	t.
default = {
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				(0, i.
			default)(e.$el, {
					scrollBox: e.scrollBox,
					offset: e.offset,
					checkStickySupport: "undefined" == typeof e.checkStickySupport || e.checkStickySupport
				})
			})
		},
		props: ["scrollBox", "offset", "checkStickySupport"]
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			text: String,
			backgroundColor: String,
			type: String,
			width: {
				type: Number,
			default:
				80
			}
		},
		methods: {
			onButtonClick: function() {
				"swipeout-item" === this.$parent.$options._componentTag && this.$parent.onItemClick(this.text)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(9),
		i = n(r);
	t.
default = {
		name: "swipeout-item",
		props: {
			sensitivity: {
				type: Number,
			default:
				0
			},
			autoCloseOnButtonClick: {
				type: Boolean,
			default:
				!0
			},
			disabled: Boolean,
			threshold: {
				type: Number,
			default:
				.3
			},
			underlayColor: String,
			transitionMode: {
				type: String,
			default:
				"reveal"
			}
		},
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				e.target = e.$refs.content, e.$slots["left-menu"] && (e.hasLeftMenu = !0, e.caculateMenuWidth("left")), e.$slots["right-menu"] && (e.hasRightMenu = !0, e.caculateMenuWidth("right"))
			})
		},
		methods: {
			caculateMenuWidth: function(e) {
				var t = this.$slots[e + "-menu"][0].children.filter(function(e) {
					return e.tag
				}),
					a = 0;
				t.forEach(function(e) {
					var t = e.componentOptions ? e.componentOptions.propsData : {};
					a += t.width || 80
				}), this[e + "MenuWidth"] = a
			},
			onContentClick: function() {
				this.styles.transform.indexOf("(0px, 0, 0)") === -1 && this._setClose(200)
			},
			onItemClick: function() {
				this.autoCloseOnButtonClick && this._setClose()
			},
			start: function(e) {
				if (!this.disabled && !this.isOpen && "button" !== e.target.nodeName.toLowerCase()) {
					if ("swipeout" === this.$parent.$options._componentTag) {
						var t = this.$parent.$children.filter(function(e) {
							return e.$data.styles.transform.indexOf("(0px, 0, 0)") === -1
						});
						if (t.length > 0) return t.forEach(function(e) {
							e.setOffset(0, !0)
						}), void e.preventDefault()
					}
					var a = e.touches ? e.touches[0] : e;
					this.pageX = a.pageX, this.pageY = a.pageY
				}
			},
			move: function(e) {
				if (!this.disabled) {
					if ("button" === e.target.nodeName.toLowerCase()) return void e.preventDefault();
					if (void 0 === this.pageX) return void e.preventDefault();
					var t = e.touches ? e.touches[0] : e;
					if (this.distX = t.pageX - this.pageX, this.distY = t.pageY - this.pageY, this.direction || (this.direction = this.distX > 0 ? "left" : "right"), ("right" === this.direction && this.distX > 0 && this.hasRightMenu || "left" === this.direction && this.distX < 0 && this.hasLeftMenu) && (this.valid = !0, e.preventDefault()), void 0 === this.valid && (this.distX > 0 && this.hasLeftMenu === !1 ? this.valid = !1 : this.distX < 0 && this.hasRightMenu === !1 ? this.valid = !1 : Math.abs(this.distX) > this.sensitivity || Math.abs(this.distY) > this.sensitivity ? this.valid = Math.abs(this.distX) > Math.abs(this.distY) : e.preventDefault()), this.valid === !0) {
						if (Math.abs(this.distX) <= this.menuWidth) this.setOffset(this.distX, !1);
						else {
							var a = .5 * (Math.abs(this.distX) - this.menuWidth),
								n = (this.menuWidth + a) * (this.distX < 0 ? -1 : 1);
							this.setOffset(n, !1)
						}
						e.preventDefault()
					}
				}
			},
			end: function(e) {
				if (!this.disabled && "button" !== e.target.nodeName.toLowerCase()) {
					if (this.valid === !0) {
						if (this.distX < 0 && "right" === this.direction) {
							var t = this.threshold <= 1 ? this.rightMenuWidth * this.threshold : this.threshold;
							this.distX < -t ? (this.setOffset(-this.rightMenuWidth, !0), this.$emit("on-open"), this.isOpen = !0) : this._setClose()
						} else if (this.distX > 0 && "left" === this.direction) {
							var a = this.threshold <= 1 ? this.leftMenuWidth * this.threshold : this.threshold;
							this.distX > a ? (this.setOffset(this.leftMenuWidth, !0), this.$emit("on-open"), this.isOpen = !0) : this._setClose()
						}
					} else void 0 !== this.pageX;
					this.pageX = this.pageY = this.valid = void 0, this.direction = ""
				}
			},
			setOffset: function(e) {
				var t = this,
					a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments[2];
				if (this.isAnimated = a, !this.disabled || n) {
					if (("right" === this.direction && e > 0 || "left" === this.direction && e < 0) && (e = 0), 0 === e && setTimeout(function() {
						t.isOpen = !1
					}, 300), e < 0 && Math.abs(e) === this.rightMenuWidth ? this.distX = -this.rightMenuWidth : e > 0 && Math.abs(e) === this.leftMenuWidth && (this.distX = this.leftMenuWidth), a && this.target) {
						this.target && this.target.classList.add("vux-swipeout-content-animated");
						var r = function(e, t) {
								return function() {
									t.classList.remove("vux-swipeout-content-animated"), e.isAnimated = !1, t.removeEventListener("webkitTransitionEnd", r), t.removeEventListener("transitionend", r)
								}
							}(this, this.target);
						this.target.addEventListener("webkitTransitionEnd", r), this.target.addEventListener("transitionend", r)
					}
					this.styles.transform = "translate3d(" + e + "px, 0, 0)"
				}
			},
			_setClose: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				this.setOffset(0, !0), this.$emit("on-close"), t ? setTimeout(function() {
					e.isOpen = !1
				}, t) : this.isOpen = !1, this.distX = 0
			},
			open: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "right";
				this.setOffset("right" === e ? -this.rightMenuWidth : this.leftMenuWidth, !0, !0)
			},
			close: function() {
				this.setOffset(0, !0, !0)
			}
		},
		computed: {
			menuWidth: function() {
				return !this.hasLeftMenu && this.hasRightMenu ? this.rightMenuWidth : this.hasLeftMenu && !this.hasRightMenu ? this.leftMenuWidth : this.hasLeftMenu && this.hasRightMenu ? this.distX < 0 ? this.rightMenuWidth : this.leftMenuWidth : void 0
			},
			buttonBoxStyle: function() {
				return {
					backgroundColor: this.underlayColor
				}
			},
			leftButtonBoxStyle: function() {
				var e = JSON.parse((0, i.
			default)(this.buttonBoxStyle));
				if ("follow" === this.transitionMode) {
					var t = this.styles.transform.indexOf("(0px, 0, 0)") === -1 ? this.leftMenuWidth - this.distX : this.leftMenuWidth;
					e.transform = "translate3d(-" + t + "px, 0, 0)"
				}
				return e
			},
			rightButtonBoxStyle: function() {
				var e = JSON.parse((0, i.
			default)(this.buttonBoxStyle));
				if ("follow" === this.transitionMode) {
					var t = this.styles.transform.indexOf("(0px, 0, 0)") === -1 ? this.rightMenuWidth - Math.abs(this.distX) : this.rightMenuWidth;
					t < 0 && (t = 0), this.isAnimated && (e.transition = "transform 0.2s"), e.transform = "translate3d(" + t + "px, 0, 0)"
				}
				return e
			}
		},
		data: function() {
			return {
				pageX: void 0,
				pageY: void 0,
				distX: 0,
				distY: 0,
				hasLeftMenu: !1,
				hasRightMenu: !1,
				animated: !1,
				isAnimated: !1,
				isOpen: !1,
				styles: {
					transform: "translate3d(0px, 0, 0)"
				},
				direction: "",
				leftMenuWidth: 160,
				rightMenuWidth: 160
			}
		},
		watch: {
			disabled: function(e, t) {
				e !== !0 || t || this.setOffset(0, !0, !0)
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				e.$parent.rerender()
			})
		},
		beforeDestroy: function() {
			var e = this.$parent;
			this.$nextTick(function() {
				e.rerender()
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(9),
		i = n(r),
		l = a(430),
		u = n(l),
		s = a(20);
	t.
default = {
		created: function() {
			this.index = this.value || 0, this.index && (this.current = this.index)
		},
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				e.list && 0 === e.list.length || e.render(e.index), e.xheight = e.getHeight()
			})
		},
		methods: {
			clickListItem: function(e) {
				(0, s.go)(e.url, this.$router), this.$emit("on-click-list-item", JSON.parse((0, i.
			default)(e)))
			},
			buildBackgroundUrl: function(e) {
				return "url(" + e + ")"
			},
			render: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				this.swiper && this.swiper.destroy(), this.swiper = new u.
			default ({
					container: this.$el,
					direction: this.direction,
					auto: this.auto,
					loop: this.loop,
					interval: this.interval,
					threshold: this.threshold,
					duration: this.duration,
					height: this.height || this._height,
					minMovingDistance: this.minMovingDistance,
					imgList: this.imgList
				}).on("swiped", function(t, a) {
					e.current = a % e.length, e.index = a % e.length
				}), t > 0 && this.swiper.go(t)
			},
			rerender: function() {
				var e = this;
				this.$el && this.$nextTick(function() {
					e.index = e.value || 0, e.current = e.value || 0, e.length = e.list.length || e.$children.length, e.destroy(), e.render(e.value)
				})
			},
			destroy: function() {
				this.swiper && this.swiper.destroy()
			},
			getHeight: function() {
				var e = parseInt(this.height, 10);
				return e ? this.height : e ? void 0 : this.aspectRatio ? this.$el.offsetWidth * this.aspectRatio + "px" : "180px"
			}
		},
		props: {
			list: {
				type: Array,
			default:


				function() {
					return []
				}
			},
			direction: {
				type: String,
			default:
				"horizontal"
			},
			showDots: {
				type: Boolean,
			default:
				!0
			},
			showDescMask: {
				type: Boolean,
			default:
				!0
			},
			dotsPosition: {
				type: String,
			default:
				"right"
			},
			dotsClass: String,
			auto: {
				type: Boolean,
			default:
				!1
			},
			loop: Boolean,
			interval: {
				type: Number,
			default:
				3e3
			},
			threshold: {
				type: Number,
			default:
				50
			},
			duration: {
				type: Number,
			default:
				300
			},
			height: {
				type: String,
			default:
				"auto"
			},
			aspectRatio: Number,
			minMovingDistance: {
				type: Number,
			default:
				0
			},
			value: {
				type: Number,
			default:
				0
			}
		},
		data: function() {
			return {
				current: this.index || 0,
				xheight: "auto",
				length: this.list.length,
				index: 0
			}
		},
		watch: {
			list: function(e) {
				this.rerender()
			},
			current: function(e) {
				this.index = e, this.$emit("on-index-change", e)
			},
			index: function(e) {
				var t = this;
				e !== this.current && this.$nextTick(function() {
					t.swiper && t.swiper.go(e)
				}), this.$emit("input", e)
			},
			value: function(e) {
				this.index = e
			}
		},
		beforeDestroy: function() {
			this.destroy()
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(44);
	t.
default = {
		mixins: [n.childMixin],
		props: {
			activeClass: String,
			disabled: Boolean
		},
		computed: {
			style: function() {
				return {
					borderWidth: this.$parent.lineWidth + "px",
					borderColor: this.$parent.activeColor,
					color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
					border: this.$parent.animate ? "none" : "auto"
				}
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(44);
	t.
default = {
		mixins: [n.parentMixin],
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				setTimeout(function() {
					e.hasReady = !0
				}, 0)
			})
		},
		props: {
			lineWidth: {
				type: Number,
			default:
				3
			},
			activeColor: String,
			barActiveColor: String,
			defaultColor: String,
			disabledColor: String,
			animate: {
				type: Boolean,
			default:
				!0
			},
			customBarWidth: [Function, String]
		},
		computed: {
			barLeft: function() {
				return this.currentIndex * (100 / this.number) + "%"
			},
			barRight: function() {
				return (this.number - this.currentIndex - 1) * (100 / this.number) + "%"
			},
			innerBarStyle: function() {
				return {
					width: "function" == typeof this.customBarWidth ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
					backgroundColor: this.barActiveColor || this.activeColor
				}
			},
			barStyle: function() {
				var e = {
					left: this.barLeft,
					right: this.barRight,
					display: "block",
					height: this.lineWidth + "px",
					transition: this.hasReady ? null : "none"
				};
				return this.customBarWidth ? e.backgroundColor = "transparent" : e.backgroundColor = this.barActiveColor || this.activeColor, e
			},
			barClass: function() {
				return {
					"vux-tab-ink-bar-transition-forward": "forward" === this.direction,
					"vux-tab-ink-bar-transition-backward": "backward" === this.direction
				}
			}
		},
		watch: {
			currentIndex: function(e, t) {
				this.direction = e > t ? "forward" : "backward", this.$emit("on-index-change", e, t)
			}
		},
		data: function() {
			return {
				direction: "forward",
				right: "100%",
				hasReady: !1
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(44),
		i = a(143),
		l = n(i);
	t.
default = {
		components: {
			Badge: l.
		default
		},
		beforeMount: function() {
			this.$slots.icon || (this.simple = !0), this.$slots["icon-active"] && (this.hasActiveIcon = !0)
		},
		mixins: [r.childMixin],
		props: {
			showDot: {
				type: Boolean,
			default:
				!1
			},
			badge: String,
			link: [String, Object],
			iconClass: String
		},
		computed: {
			isActive: function() {
				return this.$parent.index === this.currentIndex
			}
		},
		data: function() {
			return {
				simple: !1,
				hasActiveIcon: !1
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(44);
	t.
default = {
		mixins: [n.parentMixin],
		props: {
			iconClass: String
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			align: {
				type: String,
			default:
				"left"
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(149),
		i = n(r),
		l = a(43),
		u = n(l),
		s = a(34),
		o = n(s);
	t.
default = {
		components: {
			PopupPicker: o.
		default
		},
		props: {
			title: {
				type: String,
				required: !0
			},
			value: {
				type: Array,
			default:


				function() {
					return []
				}
			},
			rawValue: Boolean,
			list: {
				type: Array,
				required: !0
			},
			inlineDesc: String,
			placeholder: String,
			hideDistrict: Boolean,
			valueTextAlign: String,
			confirmText: String,
			cancelText: String,
			displayFormat: {
				type: Function,
			default:


				function(e, t) {
					return t
				}
			}
		},
		created: function() {
			if (this.currentValue.length && this.rawValue) {
				var e = (0, i.
			default)(this.currentValue, this.list);
				/__/.test(e) ? (console.error("Vux: Wrong address value", this.currentValue), this.currentValue = []) : this.currentValue = e.split(" ")
			}
		},
		methods: {
			emitHide: function(e) {
				this.$emit("on-hide", e)
			},
			getAddressName: function() {
				return (0, u.
			default)(this.value, this.list)
			}
		},
		data: function() {
			return {
				currentValue: this.value
			}
		},
		computed: {
			nameValue: function() {
				return (0, u.
			default)(this.currentValue, this.list)
			}
		},
		watch: {
			currentValue: function(e) {
				this.$emit("input", e)
			},
			value: function(e) {
				if (e.length && !/\d+/.test(e[0])) {
					var t = (0, i.
				default)(e, this.list).split(" ");
					if ("__" !== t[0] && "__" !== t[1]) return void(this.currentValue = t)
				}
				this.currentValue = e
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(54),
		i = n(r);
	t.
default = {
		props: {
			leftOptions: Object,
			title: String,
			transition: String,
			rightOptions: {
				type: Object,
			default:


				function() {
					return {
						showMore: !1
					}
				}
			}
		},
		computed: {
			_leftOptions: function() {
				return (0, i.
			default)({
					showBack: !0,
					preventGoBack: !1
				}, this.leftOptions || {})
			}
		},
		methods: {
			onClickBack: function() {
				this._leftOptions.preventGoBack ? this.$emit("on-click-back") : this.$router ? this.$router.back() : window.history.back()
			}
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		props: {
			min: Number,
			max: Number,
			readonly: Boolean,
			step: {
				type: Number,
			default:
				1
			},
			value: {
				validator: function(e) {
					return "number" == typeof e || "string" == typeof e && "" === e
				},
			default:
				0
			},
			name: String,
			title: String,
			fillable: {
				type: Boolean,
			default:
				!1
			},
			width: {
				type: String,
			default:
				"50px"
			},
			buttonStyle: {
				type: String,
			default:
				"square"
			},
			align: {
				type: String,
			default:
				"right"
			}
		},
		created: function() {
			this.currentValue = this.value
		},
		data: function() {
			return {
				currentValue: 0
			}
		},
		computed: {
			disabledMin: function() {
				return "undefined" != typeof this.min && ("" === this.currentValue || this.currentValue <= this.min)
			},
			disabledMax: function() {
				return "undefined" != typeof this.max && ("" === this.currentValue || this.currentValue >= this.max)
			}
		},
		watch: {
			currentValue: function(e, t) {
				var a = this;
				"" !== e && (this.min && this.currentValue < this.min && (this.currentValue = this.min), this.max && this.currentValue > this.max && (this.currentValue = this.max)), this.$nextTick(function() {
					a.$emit("on-change", a.currentValue), a.$emit("input", a.currentValue)
				})
			},
			value: function(e) {
				this.currentValue = e
			}
		},
		methods: {
			add: function() {
				this.disabledMax || (this.currentValue += this.step)
			},
			sub: function() {
				this.disabledMin || (this.currentValue -= this.step)
			},
			blur: function() {
				"" === this.currentValue && (this.currentValue = 0)
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(13),
		i = n(r);
	t.
default = {
		components: {
			InlineDesc: i.
		default
		},
		computed: {
			labelStyle: function() {
				var e = /<\/?[^>]*>/.test(this.title),
					t = Math.min(e ? 5 : this.title.length + 1, 14) + "em";
				return {
					display: "block",
					width: t
				}
			}
		},
		props: {
			title: {
				type: String,
				required: !0
			},
			disabled: Boolean,
			value: {
				type: Boolean,
			default:
				!1
			},
			inlineDesc: [String, Boolean, Number]
		},
		data: function() {
			return {
				currentValue: this.value
			}
		},
		watch: {
			currentValue: function(e) {
				this.$emit("input", e), this.$emit("on-change", e)
			},
			value: function(e) {
				this.currentValue = e
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(406),
		s = n(u),
		o = a(62),
		c = n(o),
		p = a(4),
		m = n(p),
		v = a(5),
		d = n(v),
		f = a(6),
		h = n(f),
		_ = a(11),
		g = n(_),
		x = a(10),
		w = n(x),
		b = a(416),
		y = n(b),
		C = a(145),
		k = n(C),
		S = a(415),
		M = n(S),
		I = a(414),
		$ = n(I),
		A = a(2);
	t.
default = {
		components: {
			Actionsheet: s.
		default,
			XSwitch:
			k.
		default,
			Group:
			m.
		default,
			Cell:
			d.
		default,
			XButton:
			h.
		default,
			Flexbox:
			g.
		default,
			FlexboxItem:
			w.
		default,
			Swipeout:
			y.
		default,
			SwipeoutItem:
			M.
		default,
			SwipeoutButton:
			$.
		default,
			Toast:
			c.
		default
		},
		computed: (0, i.
	default)({}, (0, A.mapState)({
			url: function(e) {
				return e.storex.url
			}
		})),
		data: function() {
			return {
				addresslists: [],
				auto: !1,
				menus1: {
					edit: "编辑",
					delete: "删除",
				default:
					"设为默认"
				},
				show1: !1,
				editid: ""
			}
		},
		methods: {
			showaction: function(e) {
				this.show1 = !0, this.editid = e
			},
			edit: function() {
				var e = this.editid;
				this.$router.push("/Home/AddressEdit/" + e)
			},
			del: function() {
				var e = this.editid,
					t = this;
				this.$vux.confirm.show({
					title: "确定要删除吗？",
					onConfirm: function() {
						(0, l.deleteAddress)({
							data: {
								id: e
							},
							error: function(e) {
								t.$vux.alert.show({
									title: "出错啦",
									content: e
								})
							},
							success: function(e) {
								t.$vux.toast.show({
									text: "删除成功",
									onShow: function() {
										t.getList()
									}
								})
							}
						})
					}
				})
			},
			def: function() {
				var e = this.editid,
					t = this;
				(0, l.defaultAddress)({
					data: {
						id: e,
						isdefault: 1
					},
					error: function(e) {
						t.$vux.alert.show({
							title: "出错啦",
							content: e
						})
					},
					success: function(e) {
						t.$vux.toast.show({
							text: "修改成功",
							onShow: function() {
								t.getList()
							}
						})
					}
				})
			},
			getList: function() {
				var e = this;
				(0, l.addressLists)({
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					success: function(t) {
						e.addresslists = t
					}
				})
			}
		},
		created: function() {
			this.getList()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(14),
		m = n(p),
		v = a(63),
		d = n(v),
		f = a(38),
		h = n(f),
		_ = a(47),
		g = n(_),
		x = a(43),
		w = n(x),
		b = a(149),
		y = n(b),
		C = a(2);
	t.
default = {
		components: {
			Group: s.
		default,
			Cell:
			c.
		default,
			XInput:
			m.
		default,
			XAddress:
			h.
		default,
			XTextarea:
			g.
		default
		},
		computed: (0, i.
	default)({}, (0, C.mapState)({
			url: function(e) {
				return e.storex.url
			}
		}), {
			addressValue: {
				get: function() {
					return this.province && this.city && this.district ? [this.province, this.city, this.district] : []
				},
				set: function(e) {
					e = (0, w.
				default)(e, this.addressData).split(" "), this.address.province = e[0], this.address.city = e[1], this.address.district = e[2]
				}
			}
		}),
		methods: {
			changeData: function() {
				var e = [this.address.province, this.address.city, this.address.district],
					t = (0, y.
				default)(e, this.addressData).split(" ");
				this.province = t[0], this.city = t[1], this.district = t[2]
			},
			post: function() {
				var e = this,
					t = "new" === e.$route.params.id ? "" : e.$route.params.id;
				(0, l.editAddress)({
					data: {
						id: t,
						fields: this.address
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					success: function(t) {
						e.$vux.toast.show({
							text: "添加成功",
							onHide: function() {
								e.$router.back()
							}
						})
					}
				})
			}
		},
		data: function() {
			return {
				id: "",
				addressData: d.
			default,
				province:
				"",
				city: "",
				district: "",
				address: {
					username: "",
					province: "山西省",
					city: "太原市",
					district: "小店区",
					mobile: "",
					address: "",
					zipcode: ""
				}
			}
		},
		created: function() {
			if (this.$route.params.id && "new" !== this.$route.params.id) {
				var e = this;
				(0, l.addressInfo)({
					data: {
						id: this.$route.params.id
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					success: function(t) {
						e.address = t, e.changeData()
					}
				})
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(4),
		i = n(r),
		l = a(5),
		u = n(l);
	t.
default = {
		components: {
			Group: i.
		default,
			Cell:
			u.
		default
		},
		data: function() {
			return {}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(6),
		m = n(p),
		v = a(11),
		d = n(v),
		f = a(10),
		h = n(f),
		_ = a(7),
		g = n(_),
		x = a(35),
		w = n(x),
		b = a(2);
	t.
default = {
		components: {
			Group: s.
		default,
			Cell:
			c.
		default,
			XButton:
			m.
		default,
			Flexbox:
			d.
		default,
			FlexboxItem:
			h.
		default,
			Popup:
			g.
		default,
			Rater:
			w.
		default
		},
		computed: (0, i.
	default)({}, (0, b.mapState)({
			url: function(e) {
				return e.storex.url
			}
		})),
		methods: {
			getOrderInfo: function() {
				var e = this;
				(0, l.clerkOrderInfo)({
					data: {
						orderid: this.$route.params.oid
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					success: function(t) {
						e.orderInfo = t
					}
				})
			},
			orderType: function(e, t) {
				var a = this;
				this.$vux.confirm.show({
					title: "确定操作？",
					onConfirm: function() {
						(0, l.clerkOrderEdit)({
							data: {
								type: e,
								orderid: t
							},
							success: function(e) {
								a.$vux.toast.show({
									text: "操作成功",
									type: "success",
									onShow: function() {
										a.getOrderInfo()
									}
								})
							},
							error: function(e) {
								a.$vux.alert.show({
									title: "出错啦",
									content: e
								})
							}
						})
					}
				})
			}
		},
		data: function() {
			return {
				orderInfo: {},
				storeinfo: [],
				show: !1,
				comment_level: 5,
				comment: ""
			}
		},
		created: function() {
			this.getOrderInfo()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(12),
		s = n(u),
		o = a(17),
		c = n(o),
		p = a(16),
		m = n(p),
		v = a(6),
		d = n(v),
		f = a(4),
		h = n(f),
		_ = a(59),
		g = n(_),
		x = a(57),
		w = n(x),
		b = a(56),
		y = n(b),
		C = a(2);
	t.
default = {
		components: {
			Divider: s.
		default,
			Sticky:
			c.
		default,
			Scroller:
			m.
		default,
			XButton:
			d.
		default,
			Group:
			h.
		default,
			PopupRadio:
			g.
		default,
			Checker:
			w.
		default,
			CheckerItem:
			y.
		default
		},
		computed: (0, i.
	default)({}, (0, C.mapState)({
			name: function(e) {
				return e.storex.storeInfo.title
			},
			storeid: function(e) {
				return e.storex.storeInfo.id
			},
			version: function(e) {
				return e.storex.storeInfo.version
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			evenOrderList: function() {
				var e = this,
					t = this.checkList;
				return this.orderList.filter(function(a) {
					if (("-1" === e.selectedStore || e.selectedStore === a.hotelid) && a.operate[t]) return a
				})
			}
		}),
		data: function() {
			return {
				orderList: [],
				selectedStore: "-1",
				storeList: [{
					key: "-1",
					value: "全部店铺"
				}],
				checkList: "is_cancel"
			}
		},
		methods: {
			orderType: function(e, t) {
				var a = this;
				this.$vux.confirm.show({
					title: "确定操作？",
					onConfirm: function() {
						(0, l.clerkOrderEdit)({
							data: {
								type: e,
								orderid: t
							},
							success: function(e) {
								a.$vux.toast.show({
									text: "操作成功",
									type: "success",
									onShow: function() {
										a.getOrder()
									}
								})
							},
							error: function(e) {
								a.$vux.alert.show({
									title: "出错啦",
									content: e
								})
							}
						})
					}
				})
			},
			getOrder: function() {
				var e = this;
				(0, l.clerkOrder)({
					success: function(t) {
						e.orderList = t.order_lists
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					}
				})
			}
		},
		created: function() {
			var e = this;
			(0, l.clerkPermission)({
				data: {
					type: "order"
				},
				success: function(t) {
					for (var a in t) e.storeList.push({
						key: t[a].id,
						value: t[a].title
					});
					e.getOrder()
				},
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(8),
		i = n(r),
		l = a(1),
		u = n(l),
		s = a(3),
		o = a(29),
		c = n(o),
		p = a(31),
		m = n(p),
		v = a(33),
		d = n(v),
		f = a(4),
		h = n(f),
		_ = a(5),
		g = n(_),
		x = a(17),
		w = n(x),
		b = a(407),
		y = n(b),
		C = a(6),
		k = n(C),
		S = a(7),
		M = n(S),
		I = a(14),
		$ = n(I),
		A = a(2);
	t.
default = {
		directives: {
			TransferDom: c.
		default
		},
		components: {
			Datetime: d.
		default,
			Group:
			h.
		default,
			Cell:
			g.
		default,
			Sticky:
			w.
		default,
			Checklist:
			y.
		default,
			XButton:
			k.
		default,
			Popup:
			M.
		default,
			XInput:
			$.
		default
		},
		computed: (0, u.
	default)({}, (0, A.mapState)({
			name: function(e) {
				return e.storex.storeInfo.title
			},
			storeid: function(e) {
				return e.storex.storeInfo.id
			},
			version: function(e) {
				return e.storex.storeInfo.version
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			startDate: function() {
				var e = Date.parse(this.btime) / 1e3;
				return (0, m.
			default)(new Date(1e3 * e), "YYYY-MM-DD")
			},
			endDate: function() {
				var e = Date.parse(this.etime) / 1e3;
				return (0, m.
			default)(new Date(1e3 * e), "YYYY-MM-DD")
			}
		}),
		data: function() {
			return {
				title: "",
				today: (0, m.
			default)(new Date, "YYYY-MM-DD"),
				afterMonth: (0, m.
			default)(new Date((new Date).setMonth((new Date).getMonth() + 1)), "YYYY-MM-DD"),
				btime: (0, m.
			default)(new Date, "YYYY-MM-DD"),
				etime: (0, m.
			default)(new Date((new Date).setMonth((new Date).getMonth() + 1)), "YYYY-MM-DD"),
				priceList: [],
				timeList: [],
				showPop: !1,
				cprice: "",
				oprice: "",
				num: ""
			}
		},
		methods: {
			search: function() {
				var e = this;
				(0, s.clerkRoomInfo)({
					data: {
						room_id: this.$route.params.id,
						start_time: this.btime,
						end_time: this.etime
					},
					success: function(t) {
						e.priceList = t.price_list, e.title = t.title
					}
				})
			},
			change: function() {
				if (console.log((0, i.
			default)(this.num)), this.timeList.length > 0 && this.cprice > 0 && this.oprice > 0 && this.cprice <= this.oprice && "number" == typeof this.num && this.num >= -1) {
					for (var e = "", t = 0; t < this.timeList.length; t++) e = this.timeList[t] + "," + e;
					var a = this;
					(0, s.clerkRoomEdit)({
						data: {
							room_id: this.$route.params.id,
							dates: e,
							oprice: a.oprice,
							cprice: a.cprice,
							num: a.num
						},
						success: function(e) {
							a.$vux.toast.show({
								text: "操作成功",
								type: "success",
								onShow: function() {
									a.search()
								},
								onHide: function() {
									a.showPop = !1, a.timeList = []
								}
							})
						}
					})
				} else this.$vux.toast.show({
					text: "检查提交",
					type: "warn"
				})
			}
		},
		watch: {
			btime: function(e) {
				this.search()
			},
			etime: function(e) {
				this.search()
			}
		},
		created: function() {
			this.search()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(12),
		s = n(u),
		o = a(17),
		c = n(o),
		p = a(6),
		m = n(p),
		v = a(11),
		d = n(v),
		f = a(10),
		h = n(f),
		_ = a(4),
		g = n(_),
		x = a(59),
		w = n(x),
		b = a(2);
	t.
default = {
		name: "roomList",
		components: {
			Divider: s.
		default,
			Sticky:
			c.
		default,
			XButton:
			m.
		default,
			Flexbox:
			d.
		default,
			FlexboxItem:
			h.
		default,
			Group:
			g.
		default,
			PopupRadio:
			w.
		default
		},
		computed: (0, i.
	default)({}, (0, b.mapState)({
			name: function(e) {
				return e.storex.storeInfo.title
			},
			storeid: function(e) {
				return e.storex.storeInfo.id
			},
			version: function(e) {
				return e.storex.storeInfo.version
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			evenRoomList: function() {
				var e = this;
				return this.roomList.filter(function(t) {
					if ("-1" === e.selectedStore || e.selectedStore === t.hotelid) return t
				})
			}
		}),
		methods: {
			getRoom: function() {
				var e = this;
				(0, l.clerkRoom)({
					success: function(t) {
						e.roomList = t
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					}
				})
			}
		},
		data: function() {
			return {
				roomList: [],
				selectedStore: "-1",
				storeList: [{
					key: "-1",
					value: "全部店铺"
				}]
			}
		},
		created: function() {
			var e = this;
			(0, l.clerkPermission)({
				data: {
					type: "room"
				},
				success: function(t) {
					for (var a in t) e.storeList.push({
						key: t[a].id,
						value: t[a].title
					});
					e.getRoom()
				},
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(3),
		i = a(412),
		l = n(i),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(14),
		m = n(p),
		v = a(409),
		d = n(v);
	t.
default = {
		name: "Coupon",
		components: {
			Qrcode: l.
		default,
			Group:
			s.
		default,
			Cell:
			c.
		default,
			XInput:
			m.
		default,
			FormPreview:
			d.
		default
		},
		data: function() {
			return {
				use: !1,
				couponInfo: {},
				pass: "",
				showDiscount: !1
			}
		},
		methods: {
			alert: function(e) {
				function t() {
					return e.apply(this, arguments)
				}
				return t.toString = function() {
					return e.toString()
				}, t
			}(function() {
				alert(1)
			})
		},
		created: function() {
			this.$store.commit("hasTabbar", {
				tabbar: !1
			});
			var e = this;
			(0, r.couponInfo)({
				data: this.$route.params,
				success: function(t) {
					e.couponInfo = t
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(3),
		i = a(58),
		l = n(i);
	t.
default = {
		components: {
			LoadMore: l.
		default
		},
		data: function() {
			return {
				showMore: 0,
				couponList: {},
				loading: !0,
				creditType: {
					credit1: "storex-integral",
					credit2: "storex-balance"
				}
			}
		},
		methods: {
			exchange: function(e) {
				var t = this;
				this.$vux.confirm.show({
					title: "确定兑换此卡券？",
					content: "兑换需要消耗" + ("credit1" === e.credittype ? "积分" : "余额") + e.credit,
					onConfirm: function() {
						(0, r.couponExchange)({
							data: {
								id: e.coupon.id
							},
							success: function(e) {
								t.$vux.toast.show({
									text: "兑换成功",
									type: "text"
								})
							},
							error: function(e) {
								t.$vux.toast.show({
									text: e,
									type: "warn"
								})
							}
						})
					}
				})
			}
		},
		created: function() {
			var e = this;
			(0, r.couponList)({
				success: function(t) {
					e.couponList = t, e.loading = !1
				},
				error: function(t) {
					e.$vux.toast.show({
						text: t,
						type: "warn"
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(32),
		i = n(r),
		l = a(4),
		u = n(l),
		s = a(5),
		o = n(s);
	t.
default = {
		components: {
			Alert: i.
		default,
			Group:
			u.
		default,
			Cell:
			o.
		default
		},
		data: function() {
			return {
				num: this.$store.state.storex.userInfo.credit2
			}
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(6),
		m = n(p),
		v = a(11),
		d = n(v),
		f = a(10),
		h = n(f),
		_ = a(7),
		g = n(_),
		x = a(35),
		w = n(x),
		b = a(2);
	t.
default = {
		components: {
			Group: s.
		default,
			Cell:
			c.
		default,
			XButton:
			m.
		default,
			Flexbox:
			d.
		default,
			FlexboxItem:
			h.
		default,
			Popup:
			g.
		default,
			Rater:
			w.
		default
		},
		computed: (0, i.
	default)({}, (0, b.mapState)({
			url: function(e) {
				return e.storex.url
			}
		})),
		methods: {
			getOrder: function() {
				var e = this;
				(0, l.creditGoodsDetail)({
					data: {
						tid: this.$route.params.tid,
						id: this.$route.params.id
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					success: function(t) {
						e.orderInfo = t.goods, e.address = t.address
					}
				})
			},
			Confirm: function() {
				var e = this;
				this.$vux.confirm.show({
					title: "确认收到货啦？",
					content: "一定要确认收到货才可以哦",
					onConfirm: function() {
						(0, l.creditMineConfirm)({
							data: {
								tid: e.$route.params.tid
							},
							error: function(t) {
								e.$vux.alert.show({
									title: "出错啦",
									content: t
								})
							},
							success: function() {
								e.$vux.toast.show({
									text: "成功",
									type: "success",
									onShow: function() {
										e.getOrder()
									}
								})
							}
						})
					}
				})
			}
		},
		data: function() {
			return {
				orderInfo: {},
				address: {},
				statusType: {
					0: "待发货",
					"-1": "订单关闭",
					1: "已发货",
					2: "已收货"
				}
			}
		},
		created: function() {
			this.getOrder()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(2),
		s = a(4),
		o = n(s),
		c = a(5),
		p = n(c),
		m = a(37),
		v = n(m),
		d = a(36),
		f = n(d),
		h = a(17),
		_ = n(h),
		g = a(55),
		x = n(g);
	t.
default = {
		components: {
			Group: o.
		default,
			Cell:
			p.
		default,
			Tab:
			v.
		default,
			TabItem:
			f.
		default,
			Sticky:
			_.
		default,
			Card:
			x.
		default
		},
		computed: (0, i.
	default)({}, (0, u.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			}
		})),
		data: function() {
			return {
				creditList: []
			}
		},
		methods: {
			getCreditList: function() {
				var e = this;
				(0, l.creditGoodsList)({
					data: {},
					success: function(t) {
						e.creditList = t
					}
				})
			}
		},
		created: function() {
			this.getCreditList()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(3),
		i = a(4),
		l = n(i),
		u = a(7),
		s = n(u),
		o = a(26),
		c = n(o),
		p = a(39),
		m = n(p);
	t.
default = {
		components: {
			Group: l.
		default,
			Popup:
			s.
		default,
			Radio:
			c.
		default,
			XHeader:
			m.
		default
		},
		data: function() {
			return {
				showadd: !1,
				address_info: [],
				addressid: "",
				detail: {},
				address: {},
				exchangeData: {}
			}
		},
		methods: {
			exchange: function() {
				var e = this;
				e.address_info = [], this.$vux.loading.show({
					text: "获取地址"
				}), (0, r.addressLists)({
					success: function(t) {
						if (t.length) for (var a in t) t[a].province && t[a].city && t[a].district && e.address_info.push({
							key: t[a].id,
							value: t[a].province + t[a].city + t[a].district + t[a].address
						});
						e.address = t, e.$vux.loading.hide(), e.showadd = !0
					}
				})
			},
			change: function(e) {
				if ("string" != typeof e && (e = this.addressid), e) {
					e = e.toString();
					for (var t in this.address) this.address[t].id === e && (this.exchangeData = this.address[t], this.exchangeData.id = this.$route.params.id)
				}
			},
			submit: function() {
				var e = this;
				(0, r.creditGoodsExchange)({
					data: this.exchangeData,
					success: function() {
						e.$vux.toast.show({
							text: "兑换成功",
							type: "success"
						})
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					complete: function() {
						e.showadd = !1
					}
				})
			}
		},
		created: function() {
			var e = this;
			(0, r.creditGoodsDetail)({
				data: {
					id: this.$route.params.id
				},
				success: function(t) {
					e.detail = t.goods
				}
			})
		},
		beforeRouteEnter: function(e, t, a) {
			"AddressEdit" === t.name ? a(function(e) {
				e.exchange()
			}) : a()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(2),
		s = a(4),
		o = n(s),
		c = a(5),
		p = n(c),
		m = a(37),
		v = n(m),
		d = a(36),
		f = n(d),
		h = a(17),
		_ = n(h),
		g = a(55),
		x = n(g),
		w = a(16),
		b = n(w);
	t.
default = {
		components: {
			Group: o.
		default,
			Cell:
			p.
		default,
			Tab:
			v.
		default,
			TabItem:
			f.
		default,
			Sticky:
			_.
		default,
			Card:
			x.
		default,
			Scroller:
			b.
		default
		},
		computed: (0, i.
	default)({}, (0, u.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			}
		})),
		data: function() {
			return {
				type: "卡券兑换",
				index: 0,
				list: ["卡券兑换", "实物兑换"],
				creditList: [],
				statusType: {
					0: "待发货",
					"-1": "订单关闭",
					1: "已发货",
					2: "已收货"
				}
			}
		},
		methods: {
			getCreditList: function() {
				var e = this;
				(0, l.creditGoodsMine)({
					data: {},
					success: function(t) {
						e.creditList = t
					}
				})
			}
		},
		created: function() {
			this.getCreditList()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(37),
		s = n(u),
		o = a(36),
		c = n(o),
		p = a(4),
		m = n(p),
		v = a(5),
		d = n(v),
		f = a(12),
		h = n(f),
		_ = a(17),
		g = n(_),
		x = a(2);
	t.
default = {
		components: {
			Tab: s.
		default,
			TabItem:
			c.
		default,
			Group:
			m.
		default,
			Cell:
			d.
		default,
			Divider:
			h.
		default,
			Sticky:
			g.
		default
		},
		computed: (0, i.
	default)({}, (0, x.mapState)({
			url: function(e) {
				return e.storex.url
			}
		})),
		methods: {
			tabselected: function(e, t) {
				this.fid = e, this.selected = t, this.creditlist = e ? this.recharge : this.consume
			}
		},
		data: function() {
			return {
				selected: "消费记录",
				fix: "0",
				list: ["消费记录", "充值记录"],
				over: [],
				unfinish: [],
				creditlist: []
			}
		},
		created: function() {
			var e = this;
			(0, l.userCredits)({
				data: {
					credittype: "credit2"
				},
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t
					})
				},
				success: function(t) {
					e.creditlist = e.consume = t.consume, e.recharge = t.recharge
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(32),
		u = n(l),
		s = a(4),
		o = n(s),
		c = a(5),
		p = n(c),
		m = a(143),
		v = n(m),
		d = a(2);
	t.
default = {
		components: {
			Alert: u.
		default,
			Group:
			o.
		default,
			Cell:
			p.
		default,
			Badge:
			v.
		default
		},
		data: function() {
			return {
				member: !1,
				showBack: !1
			}
		},
		computed: (0, i.
	default)({}, (0, d.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			},
			rechargeurl: function(e) {
				return e.storex.rechargeurl
			},
			url: function(e) {
				return e.storex.url
			},
			extend: function(e) {
				return e.storex.extend
			}
		})),
		methods: {
			scanpay: function() {
				wx.ready(function() {
					wx.scanQRCode({
						needResult: 0,
						scanType: ["qrCode", "barCode"],
						success: function(e) {
							var t = e.resultStr;
							console.log(t)
						}
					})
				})
			}
		},
		created: function() {}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(2);
	t.
default = {
		components: {
			Group: s.
		default,
			Cell:
			c.
		default
		},
		data: function() {
			return {
				list: []
			}
		},
		methods: {},
		computed: (0, i.
	default)({}, (0, p.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			},
			url: function(e) {
				return e.storex.url
			}
		})),
		created: function() {
			var e = this;
			(0, l.noticeList)({
				success: function(t) {
					e.list = t
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(2);
	t.
default = {
		components: {
			Group: s.
		default,
			Cell:
			c.
		default
		},
		data: function() {
			return {
				content: ""
			}
		},
		methods: {},
		computed: (0, i.
	default)({}, (0, p.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			},
			url: function(e) {
				return e.storex.url
			}
		})),
		created: function() {
			var e = this;
			(0, l.noticeRead)({
				data: {
					id: e.$route.params.id
				},
				success: function(t) {
					e.content = t.content, extend({
						success: function(t) {
							e.$store.commit("setExtend", t)
						}
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(2),
		u = a(3),
		s = a(58),
		o = n(s);
	t.
default = {
		components: {
			LoadMore: o.
		default
		},
		data: function() {
			return {
				showMore: 0,
				couponList: {},
				loading: !0
			}
		},
		computed: (0, i.
	default)({}, (0, l.mapState)({
			extend: function(e) {
				return e.storex.extend
			}
		})),
		methods: {
			getMyCoupon: function() {
				var e = this;
				(0, u.myCoupon)({
					success: function(t) {
						e.couponList = t.lists, e.couponSource = t.source, e.loading = !1
					},
					error: function(t) {
						e.$vux.toast.show({
							text: t,
							type: "warn"
						})
					}
				})
			},
			wxCard: function(e) {
				if ("" === e.code) {
					var t = this;
					(0, u.wxAddCard)({
						data: {
							id: e.id
						},
						success: function(e) {
							wx.ready(function() {
								wx.addCard({
									cardList: [{
										cardId: e.card_id,
										cardExt: e.card_ext
									}],
									success: function(e) {
										t.getMyCoupon()
									}
								})
							})
						}
					})
				} else wx.ready(function() {
					wx.openCard({
						cardList: [{
							cardId: e.card_id,
							code: e.code
						}]
					})
				})
			}
		},
		created: function() {
			this.getMyCoupon()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(6),
		m = n(p),
		v = a(11),
		d = n(v),
		f = a(10),
		h = n(f),
		_ = a(7),
		g = n(_),
		x = a(35),
		w = n(x),
		b = a(2);
	t.
default = {
		components: {
			Group: s.
		default,
			Cell:
			c.
		default,
			XButton:
			m.
		default,
			Flexbox:
			d.
		default,
			FlexboxItem:
			h.
		default,
			Popup:
			g.
		default,
			Rater:
			w.
		default
		},
		computed: (0, i.
	default)({}, (0, b.mapState)({
			url: function(e) {
				return e.storex.url
			}
		})),
		methods: {
			getOrder: function() {
				var e = this;
				(0, l.orderInfo)({
					data: {
						id: this.$route.params.oid
					},
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					success: function(t) {
						e.orderinfo = t, e.storeinfo = t.store_info
					}
				})
			},
			commentPost: function() {
				if (this.comment_level && this.comment) {
					var e = this;
					(0, l.orderComment)({
						data: {
							comment: e.comment,
							id: e.orderinfo.id,
							comment_level: e.comment_level
						},
						success: function() {
							e.$vux.toast.show({
								text: "感谢您的评论",
								position: "middle"
							}), setTimeout(function() {
								e.show = !1, e.orderinfo.is_comment = 2
							}, 1500)
						},
						error: function(t) {
							e.$vux.toast.show({
								text: t,
								type: "warn"
							})
						}
					})
				} else this.$vux.toast.show({
					text: "表单不正确",
					type: "warn"
				})
			},
			Cancle: function() {
				var e = this;
				this.$vux.confirm.show({
					title: "确定要取消订单？",
					content: "奴家舍不得你啊",
					onConfirm: function() {
						(0, l.orderCancel)({
							data: {
								id: e.$route.params.oid
							},
							error: function(t) {
								e.$vux.alert.show({
									title: "出错啦",
									content: t.message
								})
							},
							success: function() {
								e.$vux.toast.show({
									text: "订单已取消"
								}), e.getOrder()
							}
						})
					}
				})
			},
			Confirm: function() {
				var e = this;
				this.$vux.confirm.show({
					title: "确认收到货啦？",
					content: "一定要确认收到货才可以哦",
					onConfirm: function() {
						(0, l.orderConfirm)({
							data: {
								id: e.$route.params.oid
							},
							error: function(t) {
								e.$vux.alert.show({
									title: "出错啦",
									content: t.message
								})
							},
							success: function() {
								e.getOrder()
							}
						})
					}
				})
			}
		},
		data: function() {
			return {
				orderinfo: {
					is_over: 2
				},
				storeinfo: [],
				show: !1,
				comment_level: 5,
				comment: ""
			}
		},
		watch: {
			comment_level: function(e, t) {
				e <= 0 && console.log(e)
			}
		},
		created: function() {
			this.getOrder()
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(37),
		s = n(u),
		o = a(36),
		c = n(o),
		p = a(12),
		m = n(p),
		v = a(17),
		d = n(v),
		f = a(16),
		h = n(f),
		_ = a(2);
	t.
default = {
		components: {
			Tab: s.
		default,
			TabItem:
			c.
		default,
			Divider:
			m.
		default,
			Sticky:
			d.
		default,
			Scroller:
			h.
		default
		},
		computed: (0, i.
	default)({}, (0, _.mapState)({
			name: function(e) {
				return e.storex.storeInfo.title
			},
			storeid: function(e) {
				return e.storex.storeInfo.id
			},
			version: function(e) {
				return e.storex.storeInfo.version
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			orderlist: function() {
				var e = this.fid ? this.over : this.unfinish;
				return this.pageNo * this.pageSize >= e.length ? e.slice(0, e.length) : e.slice(0, this.pageNo * this.pageSize)
			}
		}),
		methods: {
			tabselected: function(e, t) {
				var a = this;
				this.fid = e, this.selected = t, this.pageNo = 1;
				var n = this.fid ? this.over : this.unfinish;
				a.pageNo * a.pageSize >= n.length ? a.status.pullupStatus = "disabled" : a.status.pullupStatus = "enabled", this.$nextTick(function() {
					a.$refs.orderlist.reset({
						top: 0
					})
				})
			},
			update: function() {
				var e = this;
				this.pageNo = this.pageNo + 1;
				var t = this.fid ? this.over : this.unfinish;
				setTimeout(function() {
					e.pageNo * e.pageSize >= t.length ? e.status.pullupStatus = "disabled" : e.status.pullupStatus = "default"
				}, 100), this.$nextTick(function() {
					e.$refs.orderlist.reset()
				})
			}
		},
		watch: {
			"status.pullupStatus": function(e) {
				console.log(e)
			}
		},
		data: function() {
			return {
				selected: "未完成订单",
				fid: 0,
				pageNo: 1,
				pageSize: 10,
				status: {
					pullupStatus: "default"
				},
				pullupConfigs: {
					content: "加载更多",
					pullUpHeight: 60,
					height: 40,
					autoRefresh: !1,
					downContent: "释放加载",
					upContent: "上拉加载更多",
					loadingContent: "正在加载....",
					clsPrefix: "xs-plugin-pullup-"
				},
				list: ["未完成订单", "完成订单"],
				over: [],
				unfinish: []
			}
		},
		created: function() {
			var e = this;
			(0, l.orderList)({
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t,
						onHide: function() {
							e.$router.push("/")
						}
					})
				},
				success: function(t) {
					e.over = t.over, e.orderlist = e.unfinish = t.unfinish
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(9),
		i = n(r),
		l = a(1),
		u = n(l),
		s = a(3),
		o = a(4),
		c = n(o),
		p = a(5),
		m = n(p),
		v = a(14),
		d = n(v),
		f = a(63),
		h = n(f),
		_ = a(38),
		g = n(_),
		x = a(47),
		w = n(x),
		b = a(33),
		y = n(b),
		C = a(34),
		k = n(C),
		S = a(2);
	t.
default = {
		components: {
			Group: c.
		default,
			Cell:
			m.
		default,
			XInput:
			d.
		default,
			XAddress:
			g.
		default,
			XTextarea:
			w.
		default,
			Datetime:
			y.
		default,
			PopupPicker:
			k.
		default
		},
		computed: (0, u.
	default)({}, (0, S.mapState)({
			url: function(e) {
				return e.storex.url
			},
			extend: function(e) {
				return e.storex.extend
			}
		})),
		methods: {
			postCard: function() {
				var e = (0, i.
			default)(this.fields),
					t = JSON.parse(e);
				for (var a in t) delete t[a].type, delete t[a].list, "[object Array]" === Object.prototype.toString.call(t[a].value) && (t[a].value = t[a].value[0]);
				var n = this;
				t = {
					extend_info: t
				}, console.log(t), (0, s.receiveCard)({
					data: t,
					success: function(e) {
						n.$vux.toast.show({
							text: e,
							type: "success",
							onHide: function() {
								n.$router.push("/Home/Index")
							}
						})
					},
					error: function(e) {
						n.$vux.alert.show({
							title: "出错啦",
							content: e
						})
					}
				})
			},
			type: function(e) {
				var t = {
					type: "",
					list: "",
					value: ""
				};
				switch (e) {
				case "avatar":
					return t.type = "avatar", t;
				case "birth":
				case "birthyear":
				case "birthmonth":
				case "birthday":
					return t.type = "dataTime", t.value = "2015-11-12", t;
				case "reside":
				case "resideprovince":
				case "residecity":
				case "residedist":
					return t.value = [], t.type = "address", t;
				case "bio":
				case "interest":
					return t.type = "textarea", t;
				case "gender":
					return t.list = [
						[{
							name: "保密",
							value: "3"
						}, {
							name: "男",
							value: "1"
						}, {
							name: "女",
							value: "2"
						}]
					], t.value = ["3"], t.type = "popupPicker", t;
				case "education":
					return t.list = [
						["博士", "硕士", "本科", "专科", "中学", "小学", "其它"]
					], t.value = ["博士"], t.type = "popupPicker", t;
				case "constellation":
					return t.list = [
						["水瓶座", "双鱼座", "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射座", "摩羯座"]
					], t.value = ["水瓶座"], t.type = "popupPicker", t;
				case "zodiac":
					return t.list = [
						["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"]
					], t.value = ["鼠"], t.type = "popupPicker", t;
				case "bloodtype":
					return t.list = [
						["A", "B", "AB", "O", "其它"]
					], t.value = ["A"], t.type = "popupPicker", t;
				case "nickname":
				case "realname":
				case "address":
				case "mobile":
				case "qq":
				case "msn":
				case "email":
				case "telephone":
				case "taobao":
				case "alipay":
				case "studentid":
				case "grade":
				case "graduateschool":
				case "idcard":
				case "zipcode":
				case "site":
				case "affectivestatus":
				case "lookingfor":
				case "nationality":
				case "height":
				case "weight":
				case "company":
				case "occupation":
				case "position":
				case "revenue":
				default:
					return t.type = "default", t
				}
			}
		},
		data: function() {
			return {
				fields: "",
				list: [
					["小米1", "iPhone1", "华为1", "情怀1", "三星1", "其他1", "不告诉你1"]
				],
				addressData: h.
			default,
				province:
				"",
				city: "",
				district: "",
				address: {
					username: "",
					province: "山西省",
					city: "太原市",
					district: "小店区",
					mobile: "",
					address: "",
					zipcode: ""
				}
			}
		},
		created: function() {
			var e = this;
			this.extend.card && 1 !== this.extend.card ? e.$vux.alert.show({
				title: "出错啦",
				content: "系统关闭了会员卡",
				onHide: function() {
					e.$router.push("/Home/Index")
				}
			}) : (0, s.receiveInfo)({
				success: function(t) {
					for (var a in t) t[a].type = e.type(t[a].bind).type, t[a].value = e.type(t[a].bind).value, t[a].list = e.type(t[a].bind).list;
					e.fields = t
				},
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t,
						onHide: function() {
							e.$router.push("/Home/Index")
						}
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(57),
		s = n(u),
		o = a(56),
		c = n(o),
		p = a(4),
		m = n(p),
		v = a(5),
		d = n(v),
		f = a(14),
		h = n(f),
		_ = a(6),
		g = n(_),
		x = a(2);
	t.
default = {
		components: {
			Checker: s.
		default,
			CheckerItem:
			c.
		default,
			Group:
			m.
		default,
			Cell:
			d.
		default,
			XInput:
			h.
		default,
			XButton:
			g.
		default
		},
		computed: (0, i.
	default)({}, (0, x.mapState)({
			url: function(e) {
				return e.storex.url
			}
		})),
		methods: {
			focus: function() {
				this.$refs.rechargeInput.focus()
			},
			rechargepost: function() {
				var e = this;
				e.recharge.type = "credit", e.recharge.fee = e.recharge.condition, (0, l.rechargeAdd)({
					data: e.recharge,
					error: function(t) {
						e.$vux.alert.show({
							title: "出错啦",
							content: t
						})
					},
					success: function(t) {
						e.$vux.toast.show({
							text: "生成订单"
						}), setTimeout(function() {
							e.$router.push("/Home/RechargePay/" + t)
						}, 2e3)
					}
				})
			}
		},
		data: function() {
			return {
				recharge: {},
				other: {
					back: 0,
					backtype: 2,
					condition: 10
				},
				cardRecharge: []
			}
		},
		watch: {
			otherSum: function(e, t) {
				e < 0 && (this.otherSum = "")
			}
		},
		created: function() {
			var e = this;
			(0, l.cardRecharge)({
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t
					})
				},
				success: function(t) {
					t.length > 0 ? (e.cardRecharge = t, e.recharge = t[0]) : (e.recharge = e.other, e.$refs.rechargeInput.focus())
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(4),
		u = n(l),
		s = a(5),
		o = n(s),
		c = a(152),
		p = n(c),
		m = a(2);
	t.
default = {
		components: {
			Group: u.
		default,
			Cell:
			o.
		default
		},
		computed: (0, i.
	default)({}, (0, m.mapState)({
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			url: function(e) {
				return e.storex.url
			},
			payurl: function(e) {
				return e.storex.payurl
			},
			rechargeurl: function(e) {
				return e.rechargeurl
			}
		})),
		methods: {
			pay: function(e) {
				location.href = this.payurl + "do=" + e + "&params=" + this.params
			}
		},
		data: function() {
			return {
				payinfo: "",
				orderinfo: ""
			}
		},
		created: function() {
			var e = this;
			this.$http.post(this.url + "&do=recharge&op=recharge_pay", {
				id: this.$route.params.id
			}).then(function(t) {
				t = t.data.message, t.errno ? e.$vux.alert.show({
					title: "出错啦",
					content: t.message
				}) : (e.orderinfo = JSON.parse(t.message.params), e.payinfo = t.message.pay, e.params = p.
			default.encode(t.message.params))
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(31),
		s = n(u),
		o = a(4),
		c = n(o),
		p = a(5),
		m = n(p),
		v = a(11),
		d = n(v),
		f = a(10),
		h = n(f),
		_ = a(27),
		g = n(_),
		x = a(29),
		w = n(x),
		b = a(2);
	t.
default = {
		directives: {
			TransferDom: w.
		default
		},
		components: {
			Group: c.
		default,
			Cell:
			m.
		default,
			Flexbox:
			d.
		default,
			FlexboxItem:
			h.
		default,
			XDialog:
			g.
		default
		},
		data: function() {
			return {
				showStrategyr: !1,
				weeksList: ["日", "一", "二", "三", "四", "五", "六"],
				day: (0, s.
			default)(new Date, "YYYY年MM月DD日"),
				serviceDay: "1",
				remind: 1,
				signList: [],
				sign: {},
				signStatus: !0,
				content: ""
			}
		},
		methods: {
			signIn: function() {
				var e = this;
				this.signStatus ? (0, l.signSing)({
					data: {
						day: this.serviceDay
					},
					success: function(t) {
						e.$vux.toast.show({
							text: t,
							type: "success",
							width: "7.6em",
							onHide: function() {
								e.signList[e.serviceDay].status = 1, e.signStatus = !1
							}
						})
					},
					error: function(t) {
						e.$vux.toast.show({
							text: t,
							type: "warn",
							width: "7.6em"
						})
					}
				}) : this.$vux.toast.show({
					text: "已经签到了",
					type: "warn",
					width: "7.6em"
				})
			},
			fillSign: function(e, t) {
				var a = this;
				e = Number(e);
				var n = Number(this.serviceDay);
				if (e < n) {
					if (this.sign.remedy) if (1 === t.status) this.$vux.toast.show({
						text: "已经签到了",
						type: "warn",
						width: "7.6em"
					});
					else {
						var r = "本次补签需要消耗";
						r = "credit1" === this.sign.remedy_cost_type ? r + "积分" + this.sign.remedy_cost : r + "余额" + this.sign.remedy_cost + "元", a.$vux.confirm.show({
							title: "确定补签？",
							content: r,
							hideOnBlur: !0,
							onConfirm: function() {
								(0, l.remedySign)({
									data: {
										day: e
									},
									success: function(t) {
										a.$vux.toast.show({
											text: t,
											type: "success",
											width: "7.6em",
											onHide: function() {
												a.signList[e].status = 1
											}
										})
									},
									error: function(e) {
										a.$vux.toast.show({
											text: e,
											type: "warn",
											width: "7.6em"
										})
									}
								})
							}
						})
					}
				} else e === n ? this.signIn() : this.$vux.toast.show({
					text: "还不能签到",
					type: "warn",
					width: "7.6em"
				})
			}
		},
		filters: {
			addZero: function(e) {
				return e >= 10 ? e : "0" + e
			}
		},
		computed: (0, i.
	default)({}, (0, b.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			weekday: function() {
				var e = new Date;
				return e = new Date(e.setDate(1)), e.getDay()
			}
		}),
		created: function() {
			var e = this;
			(0, l.signInfo)({
				success: function(t) {
					console.log(t), e.content = t.content, e.signList = t.signs, e.sign = t.sign, e.serviceDay = t.day, e.signStatus = 2 === e.signList[t.day].status
				},
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(34),
		s = n(u),
		o = a(4),
		c = n(o),
		p = a(5),
		m = n(p),
		v = a(2);
	t.
default = {
		components: {
			PopupPicker: s.
		default,
			Group:
			c.
		default,
			Cell:
			m.
		default
		},
		data: function() {
			return {
				type: ["签到", "补签", "额外"],
				time: [],
				searchList: [
					[]
				],
				signList: []
			}
		},
		methods: {
			onChange: function(e) {
				var t = this;
				(0, l.signRecord)({
					data: {
						month: e[0]
					},
					success: function(e) {
						t.signList = e
					},
					error: function() {
						t.$vux.toast.show({
							text: response,
							type: "warn",
							width: "7.6em"
						})
					}
				})
			}
		},
		computed: (0, i.
	default)({}, (0, v.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			},
			url: function(e) {
				return e.storex.url
			}
		})),
		created: function() {
			for (var e = new Date, t = e.getFullYear(), a = e.getMonth() + 1, n = 1; n < 4; n++) a > 0 && this.searchList[0].push({
				name: t + "年" + a + "月",
				value: "" + a
			}), a--;
			var r = this;
			(0, l.signRecord)({
				success: function(e) {
					r.signList = e
				},
				error: function() {
					r.$vux.toast.show({
						text: response,
						type: "warn",
						width: "7.6em"
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(7),
		s = n(u),
		o = a(4),
		c = n(o),
		p = a(145),
		m = n(p),
		v = a(14),
		d = n(v),
		f = a(6),
		h = n(f),
		_ = a(26),
		g = n(_),
		x = a(16),
		w = n(x),
		b = a(62),
		y = n(b),
		C = a(38),
		k = n(C),
		S = a(63),
		M = n(S),
		I = a(5),
		$ = n(I),
		A = a(32),
		O = n(A),
		V = a(2),
		T = a(454),
		R = n(T);
	t.
default = {
		components: {
			Radio: g.
		default,
			Popup:
			s.
		default,
			Group:
			c.
		default,
			XSwitch:
			m.
		default,
			XInput:
			d.
		default,
			XButton:
			h.
		default,
			Scroller:
			w.
		default,
			Toast:
			y.
		default,
			XAddress:
			k.
		default,
			ChinaAddressData:
			M.
		default,
			Alert:
			O.
		default,
			Cell:
			$.
		default,
			"vue-core-image-upload":
			R.
		default
		},
		data: function() {
			return {
				sex: [{
					key: "1",
					value: "男"
				}, {
					key: "2",
					value: "女"
				}],
				nicknameedit: "",
				realnameedit: this.realname,
				showedit: !1,
				editname: "",
				gender: 1,
				genderedit: this.gender
			}
		},
		computed: (0, i.
	default)({}, (0, V.mapState)({
			userInfo: function(e) {
				return e.storex.userInfo
			},
			url: function(e) {
				return e.storex.url
			},
			profile: function(e) {
				return e.storex.profile
			}
		})),
		methods: {
			imageuploaded: function(e) {
				e && e.attachment && this.updateUser({
					fields: {
						avatar: e.attachment
					}
				})
			},
			editshow: function(e) {
				this.showedit = !0, this.editname = e
			},
			updateUser: function(e) {
				var t = this;
				(0, l.updateUserInfo)({
					data: e,
					error: function(e) {
						t.$vux.toast.show({
							text: e,
							type: "warn"
						})
					},
					success: function(e) {
						(0, l.getUserInfo)({
							error: function(e) {
								t.$vux.alert.show({
									title: "出错啦",
									content: e
								})
							},
							success: function(e) {
								t.$vux.toast.show({
									text: "修改成功",
									type: "success",
									onHide: function() {
										t.showedit = !1
									}
								}), t.$store.commit("setUserInfo", e)
							}
						})
					}
				})
			},
			update: function(e) {
				var t = {};
				switch (this.editname) {
				case "nickname":
					t.nickname = this.nicknameedit;
					break;
				case "realname":
					t.realname = this.realnameedit;
					break;
				case "gender":
					t.gender = e
				}
				this.updateUser({
					fields: t
				})
			}
		},
		filters: {
			sex: function e(t) {
				if (!t) return "";
				var e = ["保密", "男", "女"];
				return e[t]
			}
		},
		created: function() {
			this.nicknameedit = this.userInfo.nickname, this.realnameedit = this.userInfo.realname, this.genderedit = this.userInfo.gender
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(3),
		i = a(35),
		l = n(i),
		u = a(12),
		s = n(u),
		o = a(16),
		c = n(o),
		p = a(410),
		m = n(p);
	t.
default = {
		name: "Comment",
		components: {
			Rater: l.
		default,
			Divider:
			s.
		default,
			Scroller:
			c.
		default,
			Panel:
			m.
		default
		},
		data: function() {
			return {
				commentList: [],
				pullupConfigs: {
					content: "加载更多",
					pullUpHeight: 60,
					height: 40,
					autoRefresh: !1,
					downContent: "释放加载",
					upContent: "上拉加载更多",
					loadingContent: "正在加载....",
					clsPrefix: "xs-plugin-pullup-"
				},
				status: {
					pullupStatus: "default"
				},
				page: 1
			}
		},
		filters: {
			commentLevel: function(e) {
				return e && "0" !== e && 0 !== e ? Number(e) : 5
			}
		},
		methods: {
			update: function() {
				this.page = this.page + 1, this.getCommment({
					id: this.$route.params.storeid,
					page: this.page
				})
			},
			getCommment: function(e) {
				var t = this;
				(0, r.storeComment)({
					data: e,
					error: function(e) {
						t.$vux.alert.show({
							title: "出错啦",
							content: e
						})
					},
					success: function(e) {
						t.commentList = t.commentList.concat(e.list), t.status.pullupStatus = "default", e.isshow || (t.status.pullupStatus = "disabled"), t.$nextTick(function() {
							t.$refs.commentScroller.reset({
								top: 0
							})
						})
					}
				})
			}
		},
		created: function() {
			this.list = {}, this.getCommment({
				id: this.$route.params.storeid,
				page: 1
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(4),
		s = n(u),
		o = a(5),
		c = n(o),
		p = a(152),
		m = n(p),
		v = a(2);
	t.
default = {
		components: {
			Group: s.
		default,
			Cell:
			c.
		default
		},
		computed: (0, i.
	default)({}, (0, v.mapState)({
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			payurl: function(e) {
				return e.storex.payurl
			},
			rechargeurl: function(e) {
				return e.rechargeurl
			}
		})),
		methods: {
			pay: function(e) {
				location.href = this.payurl + "do=" + e + "&params=" + this.params
			}
		},
		data: function() {
			return {
				payinfo: "",
				orderinfo: "",
				params: ""
			}
		},
		created: function() {
			var e = this;
			(0, l.orderPay)({
				data: {
					id: this.$route.params.payid
				},
				error: function(t) {
					e.$vux.alert.show({
						title: "出错啦",
						content: t
					})
				},
				success: function(t) {
					e.orderinfo = JSON.parse(t.params), e.payinfo = t.pay, e.params = m.
				default.encode(t.params), e.credits = t.credits
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(402),
		u = n(l),
		s = a(61),
		o = n(s),
		c = a(60),
		p = n(c),
		m = a(4),
		v = n(m),
		d = a(5),
		f = n(d),
		h = a(7),
		_ = n(h),
		g = a(39),
		x = n(g),
		w = a(2);
	t.
default = {
		components: {
			Swiper: o.
		default,
			SwiperItem:
			p.
		default,
			Group:
			v.
		default,
			Cell:
			f.
		default,
			Popup:
			_.
		default,
			XHeader:
			x.
		default,
			BaiduMap:
			u.
		default
		},
		computed: (0, i.
	default)({}, (0, w.mapState)({
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			map: function() {
				return {
					lng: this.storeInfo.lng,
					lat: this.storeInfo.lat,
					title: this.storeInfo.title,
					thumb: this.storeInfo.thumb,
					content: this.storeInfo.content,
					tel: this.storeInfo.phone,
					address: this.storeInfo.location_p + this.storeInfo.location_c + this.storeInfo.location_a + this.storeInfo.address
				}
			}
		}),
		methods: {
			openMap: function() {
				this.showMap = !0
			}
		},
		data: function() {
			return {
				showMap: !1
			}
		},
		beforeCreate: function() {
			this.$route.params.storeid || "undefined" !== this.$route.params.storeid || this.$router.push("/")
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(61),
		u = n(l),
		s = a(60),
		o = n(s),
		c = a(2);
	t.
default = {
		components: {
			Swiper: u.
		default,
			SwiperItem:
			o.
		default
		},
		computed: (0, i.
	default)({}, (0, c.mapState)({
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			url: function(e) {
				return e.storex.url
			},
			displayurl: function(e) {
				return e.storex.displayurl
			}
		})),
		data: function() {
			return {}
		},
		created: function() {}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(3),
		u = a(39),
		s = n(u),
		o = a(4),
		c = n(o),
		p = a(5),
		m = n(p),
		v = a(7),
		d = n(v),
		f = a(12),
		h = n(f),
		_ = a(161),
		g = n(_),
		x = a(2),
		w = a(403),
		b = n(w);
	t.
default = {
		name: "StoreList",
		components: {
			listCity: b.
		default,
			XHeader:
			s.
		default,
			Group:
			c.
		default,
			Cell:
			m.
		default,
			Popup:
			d.
		default,
			Divider:
			h.
		default,
			Search:
			g.
		default
		},
		computed: (0, i.
	default)({}, (0, x.mapState)({
			switchurl: function(e) {
				return e.storex.switchurl
			}
		}), {
			cityAdress: function() {
				return 2 === this.selectType ? this.cityName : this.BMapData.address
			}
		}),
		data: function() {
			return {
				results: [],
				value: "",
				list: "",
				loadMore: !0,
				selectType: 1,
				citySelect: !1,
				cityName: "",
				keyword: "",
				address: "",
				time: ""
			}
		},
		methods: {
			selected: function(e) {
				this.citySelect = !1, this.loadMore = !1, this.selectType = 2, this.address = e, this.getList({
					city: e.id
				})
			},
			getResult: function(e) {
				1 === this.selectType ? this.getList({
					lng: this.address.point.lng,
					lat: this.address.point.lat,
					keyword: e
				}) : 2 === this.selectType && this.getList({
					city: this.address.id,
					keyword: e
				})
			},
			onCancel: function() {},
			locationed: function(e) {
				this.citySelect = !1, this.selectType = 1, this.BMapData.address = e.address, this.address = e, this.getList({
					lng: e.point.lng,
					lat: e.point.lat
				})
			},
			getList: function(e) {
				var t = this;
				(0, l.storeList)({
					data: e,
					error: function(e) {
						t.$vux.alert.show({
							title: "出错啦",
							content: e
						})
					},
					success: function(e) {
						"1" !== e.version && 0 !== e.stores.length ? location.href = t.switchurl + "&id=" + e.stores[0].id + "#/StoreIndex/" + e.stores[0].id : t.list = e.stores
					}
				})
			}
		},
		created: function() {
			this.$store.commit("hasTabbar", {
				tabbar: !1
			});
			var e = this,
				t = void 0;
			console.time("测试定位速度: "), this.$location(function(a) {
				e.loadMore = !1, a.point && a.point.lat && a.point.lng && (e.address = a, t = {
					lng: a.point.lng,
					lat: a.point.lat
				}), console.timeEnd("测试定位速度: "), e.getList(t), e.time = console.timeEnd("测试定位速度: ")
			})
		}
	}
}, function(e, t, a) {
	"use strict";
	(function(e) {
		function n(e) {
			return e && e.__esModule ? e : {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = a(8),
			i = n(r),
			l = a(153),
			u = n(l);
		t.
	default = {
			props: {
				center: {
					type: Object
				}
			},
			methods: {
				getMapScript: function() {
					return e.BMap ? e.BMap._preloader ? e.BMap._preloader : u.
				default.resolve(e.BMap):
					(e.BMap = {}, e.BMap._preloader = new u.
				default (function(t, a) {
						e._initBaiduMap = function() {
							t(e.BMap), e.document.body.removeChild(n), e.BMap._preloader = null, e._initBaiduMap = null
						};
						var n = document.createElement("script");
						e.document.body.appendChild(n), n.src = "//api.map.baidu.com/api?v=2.0&ak=WYABRjaoGklLEcobdrl2erIGvOpT4toj&callback=_initBaiduMap"
					}), e.BMap._preloader)
				}
			},
			created: function() {
				var e = this;
				this.getMapScript().then(function() {
					if ("object" === (0, i.
				default)(e.center)) {
						var t = new BMap.Map("allmap"),
							a = new BMap.Point(e.center.lng, e.center.lat);
						t.centerAndZoom(a, 15), t.enableScrollWheelZoom();
						var n = '<div style="margin:0;line-height:20px;padding:2px;">\n\t\t\t\t\t\t<img src="' + e.center.thumb + '" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>\n\t\t\t\t\t\t地址：' + e.center.address + "<br/>电话：" + e.center.tel + "<br/>简介：" + e.center.content + "。\n\t\t\t\t\t\t</div>",
							r = null;
						r = new BMapLib.SearchInfoWindow(t, n, {
							title: e.center.title,
							width: 290,
							height: 105,
							panel: "panel",
							enableAutoPan: !0,
							searchTypes: [BMAPLIB_TAB_TO_HERE, BMAPLIB_TAB_FROM_HERE]
						});
						var l = new BMap.Marker(a);
						l.enableDragging(), l.addEventListener("click", function(e) {
							r.open(l)
						}), t.addOverlay(l)
					}
				})
			}
		}
	}).call(t, a(64))
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(404),
		i = n(r),
		l = a(419),
		u = n(l),
		s = a(405),
		o = n(s),
		c = a(58),
		p = n(c);
	t.
default = {
		name: "index-city",
		components: {
			indexList: i.
		default,
			indexSection:
			o.
		default,
			LoadMore:
			p.
		default
		},
		props: {
			showNow: {
				type: Boolean,
			default:
				!0
			},
			value: [String, Number, Array, Object],
			listClass: {
				type: String,
			default:
				""
			}
		},
		data: function() {
			return {
				cityJson: u.
			default,
				locationMore:
				!1,
				point: {},
				cityLocation: {}
			}
		},
		methods: {
			mapLocation: function() {
				this.$set(this, "locationMore", !0);
				var e = this;
				this.$location(function(t) {
					e.locationMore = !1, e.cityLocation = t
				})
			},
			select: function(e) {
				this.$emit("input", e.name), this.$emit("on-change", e)
			},
			selectlocation: function() {
				this.cityLocation && this.$emit("on-location", this.cityLocation)
			}
		},
		watch: {}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		name: "index-list",
		props: {
			height: Number,
			showIndicator: {
				type: Boolean,
			default:
				!0
			}
		},
		data: function() {
			return {
				sections: [],
				navWidth: 0,
				indicatorTime: null,
				moving: !1,
				firstSection: null,
				currentIndicator: "",
				currentHeight: this.height,
				navOffsetX: 0
			}
		},
		watch: {
			sections: function() {
				this.init()
			}
		},
		methods: {
			init: function() {
				var e = this;
				this.$nextTick(function() {
					e.navWidth = e.$refs.nav.clientWidth
				});
				var t = this.$refs.content.getElementsByTagName("li");
				t.length > 0 && (this.firstSection = t[0])
			},
			handleTouchStart: function(e) {
				return "LI" !== e.target.tagName ? "" : (this.navOffsetX = e.changedTouches[0].clientX, this.scrollList(e.changedTouches[0].clientY), this.indicatorTime && clearTimeout(this.indicatorTime), this.moving = !0, window.addEventListener("touchmove", this.handleTouchMove), void window.addEventListener("touchend", this.handleTouchEnd))
			},
			handleTouchMove: function(e) {
				e.preventDefault(), this.scrollList(e.changedTouches[0].clientY)
			},
			handleTouchEnd: function() {
				var e = this;
				this.indicatorTime = setTimeout(function() {
					e.moving = !1, e.currentIndicator = ""
				}, 500), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchend", this.handleTouchEnd)
			},
			scrollList: function(e) {
				var t = document.elementFromPoint(this.navOffsetX, e);
				if (t && t.classList.contains("wn-indexlist-navitem")) {
					this.currentIndicator = t.innerText;
					var a = this.sections.filter(function(e) {
						return e.index === t.innerText
					}),
						n = void 0;
					a.length > 0 && (n = a[0].$el, this.$refs.content.scrollTop = n.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top)
				}
			}
		},
		mounted: function() {
			this.currentHeight || (this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top), this.init()
		}
	}
}, function(e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		name: "index-section",
		props: {
			index: {
				type: String,
				required: !0
			}
		},
		mounted: function() {
			this.$parent.sections.push(this)
		},
		beforeDestroy: function() {
			var e = this.$parent.sections.indexOf(this);
			e > -1 && this.$parent.sections.splice(e, 1)
		}
	}
}, , , , , , , , , , , , , , , , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, , function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAPFBMVEUAAAAftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI4ftI7GXNyMAAAAE3RSTlMAkaDfayJaVpbW0xGx9fHs4cO9/OjFNgAAAJ1JREFUSMftlssOxCAIRXXw1U47L/7/X4e4GRMWIzdN0wVnRUJOjApicJzDyI34L9SyEhNPkrSIqZkN5NGMFjOOJllMGk024abmud0G5k2qQTFlvu8BM18iYmaRfFl4KVbzIenao2o0P5Jee7QazU3Se492fE18n/DZQvd5Rg3hdat7pcUfV+/sa5nAG4/NFXyW4fMTUxP+T3Ccg/gCyXBrJsf+x3EAAAAASUVORK5CYII="
}, , , function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "home sign-list"
			}, [a("group", [a("popup-picker", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.time,
					expression: "time"
				}],
				attrs: {
					title: "选择时间",
					"show-name": "",
					data: e.searchList
				},
				domProps: {
					value: e.time
				},
				on: {
					"on-change": e.onChange,
					input: function(t) {
						e.time = t
					}
				}
			})], 1), e._v(" "), a("group", e._l(e.signList, function(t) {
				return a("cell", [a("span", {
					slot: "after-title"
				}, [e._v(e._s(e.type[t.remedy]) + "获得" + e._s(t.credit) + "积分")]), e._v(" "), a("span", {
					slot: "default"
				}, [e._v(" " + e._s(t.year) + "年" + e._s(t.month) + "月" + e._s(t.day) + "日")])])
			}))], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "message-list"
			}, [a("group", e._l(e.list, function(e) {
				return a("cell", {
					class: {
						unread: !e.read_status
					},
					attrs: {
						title: e.title,
						"inline-desc": e.addtime,
						link: "/Home/MessageInfo/" + e.id
					}
				}, [a("i", {
					staticClass: "storex-unread",
					slot: "icon"
				})])
			}))], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "profile"
			}, [a("div", {
				staticClass: "weui-tab__panel"
			}, [a("group", [a("cell", {
				attrs: {
					title: "头像",
					"is-link": ""
				}
			}, [a("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: e.userInfo.avatar,
					expression: "userInfo.avatar"
				}],
				staticClass: "avatar-img",
				attrs: {
					alt: ""
				},
				slot: "value"
			})]), e._v(" "), a("vue-core-image-upload", {
				attrs: {
					text: "",
					"input-of-file": "file",
					crop: !1,
					url: e.profile,
					extensions: "png,gif,jpeg,jpg"
				},
				on: {
					imageuploaded: e.imageuploaded
				}
			})], 1), e._v(" "), a("group", [a("cell", {
				attrs: {
					title: "昵称",
					value: e.userInfo.nickname,
					"is-link": ""
				},
				nativeOn: {
					click: function(t) {
						e.editshow("nickname")
					}
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "真实姓名",
					value: e.userInfo.realname,
					"is-link": ""
				},
				nativeOn: {
					click: function(t) {
						e.editshow("realname")
					}
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "性别",
					value: e._f("sex")(e.userInfo.gender),
					"is-link": ""
				},
				nativeOn: {
					click: function(t) {
						e.editshow("gender")
					}
				}
			})], 1), e._v(" "), a("group", [a("cell", {
				attrs: {
					title: "收货地址",
					value: "管理",
					link: "/Home/Address"
				}
			})], 1)], 1), e._v(" "), a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showedit,
					expression: "showedit"
				}],
				staticClass: "user-edit",
				attrs: {
					height: "100%"
				},
				domProps: {
					value: e.showedit
				},
				on: {
					input: function(t) {
						e.showedit = t
					}
				}
			}, [a("div", {
				staticClass: "user-edit"
			}, ["nickname" == e.editname ? a("group", [a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.nicknameedit,
					expression: "nicknameedit"
				}],
				attrs: {
					title: "昵称",
					name: "nickname",
					required: "",
					placeholder: "请输入昵称"
				},
				domProps: {
					value: e.nicknameedit
				},
				on: {
					input: function(t) {
						e.nicknameedit = t
					}
				}
			})], 1) : e._e(), e._v(" "), "realname" == e.editname ? a("group", [a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.realnameedit,
					expression: "realnameedit"
				}],
				attrs: {
					title: "姓名",
					name: "realname",
					required: "",
					placeholder: "请输入姓名"
				},
				domProps: {
					value: e.realnameedit
				},
				on: {
					input: function(t) {
						e.realnameedit = t
					}
				}
			})], 1) : e._e(), e._v(" "), "gender" == e.editname ? a("group", [a("radio", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.genderedit,
					expression: "genderedit"
				}],
				attrs: {
					options: e.sex
				},
				domProps: {
					value: e.genderedit
				},
				on: {
					"on-change": e.update,
					input: function(t) {
						e.genderedit = t
					}
				}
			})], 1) : e._e(), e._v(" "), a("div", {
				staticClass: "weui-btn-area",
				staticStyle: {
					"margin-top": "200px"
				}
			}, ["gender" != e.editname ? a("x-button", {
				attrs: {
					text: "确定",
					"action-type": "submit",
					type: "warn"
				},
				nativeOn: {
					click: function(t) {
						e.update(t)
					}
				}
			}) : e._e(), e._v(" "), a("x-button", {
				attrs: {
					text: "取消",
					type: "submit"
				},
				nativeOn: {
					click: function(t) {
						e.showedit = e.warn
					}
				}
			})], 1)], 1)])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-checker-item",
				class: e.classNames,
				on: {
					click: e.select
				}
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "credit-store"
			}, [a("div", {
				staticClass: "credit-store-box"
			}, [a("card", {
				attrs: {
					header: {
						title: "我的兑换"
					}
				}
			}, [a("div", {
				staticClass: "weui-panel weui-panel_access goods-list",
				slot: "content"
			}, [a("div", {
				staticClass: "weui-panel__bd"
			}, e._l(e.creditList, function(t) {
				return a("router-link", {
					staticClass: "weui-media-box weui-media-box_appmsg",
					attrs: {
						to: "/Home/CreditMineDetail/" + t.exid + "/" + t.tid,
						tag: "div"
					}
				}, [a("div", {
					staticClass: "weui-media-box__hd"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.thumb,
						expression: "order.thumb"
					}],
					staticClass: "weui-media-box__thumb",
					attrs: {
						alt: ""
					}
				})]), e._v(" "), a("div", {
					staticClass: "weui-media-box__bd"
				}, [a("h4", {
					staticClass: "weui-media-box__title wn-goods-title"
				}, [e._v(e._s(t.title) + " "), a("span", [e._v(" " + e._s(t.extra.title))])]), e._v(" "), a("p", {
					staticClass: "weui-media-box__desc wn-goods-sub"
				}, [a("span", {
					staticClass: "storex",
					class: "credit2" == t.credittype ? "storex-balance" : "storex-integral"
				}), e._v(e._s(t.credit))])]), e._v(" "), a("div", {
					staticClass: "weui-media-box__ft c-active select-color",
					staticStyle: {
						"flex-direction": "row-reverse"
					}
				}, [e._v("\n\t\t\t\t\t\t\t" + e._s(e.statusType[t.status]) + "\n\t\t\t\t\t\t")])])
			}))])])], 1)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "add-address bg-popup"
			}, [a("group", [e._l(e.fields, function(t, n) {
				return ["default" == t.type ? a("x-input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.value,
						expression: "field.value"
					}],
					key: n,
					attrs: {
						title: t.title
					},
					domProps: {
						value: t.value
					},
					on: {
						input: function(e) {
							t.value = e
						}
					}
				}) : e._e(), e._v(" "), "popupPicker" == t.type ? a("popup-picker", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.value,
						expression: "field.value"
					}],
					key: n,
					attrs: {
						title: t.title,
						data: t.list,
						"show-name": "gender" == t.bind,
						"data-ss": n
					},
					domProps: {
						value: t.value
					},
					on: {
						input: function(e) {
							t.value = e
						}
					}
				}) : e._e(), e._v(" "), "address" == t.type ? a("x-address", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.value,
						expression: "field.value"
					}],
					key: n,
					attrs: {
						title: t.title,
						"raw-value": "",
						"raw-value": "",
						list: e.addressData
					},
					domProps: {
						value: t.value
					},
					on: {
						input: function(e) {
							t.value = e
						}
					}
				}) : e._e(), e._v(" "), "dataTime" == t.type ? a("datetime", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.value,
						expression: "field.value"
					}],
					key: n,
					attrs: {
						title: t.title
					},
					domProps: {
						value: t.value
					},
					on: {
						input: function(e) {
							t.value = e
						}
					}
				}) : e._e()]
			})], 2), e._v(" "), a("div", {
				staticClass: "weui-btn-area"
			}, [a("a", {
				staticClass: "weui-btn weui-btn_submit weui-btn_warn",
				on: {
					click: e.postCard
				}
			}, [e._v("确认")])])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "classify order-list"
			}, [a("div", {
				staticStyle: {
					height: "44px"
				}
			}, [a("sticky", {
				attrs: {
					"scroll-box": "vux_view_box_body",
					"check-sticky-support": !1
				}
			}, [a("tab", {
				attrs: {
					"line-width": 2,
					"active-color": "#212121",
					"bar-active-color": "#f86b4f"
				}
			}, e._l(e.list, function(t, n) {
				return a("tab-item", {
					staticClass: "vux-center",
					attrs: {
						selected: e.selected === t
					},
					on: {
						"on-item-click": function(a) {
							e.tabselected(n, t)
						}
					}
				}, [e._v(e._s(t))])
			}))], 1)], 1), e._v(" "), a("scroller", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.status,
					expression: "status"
				}],
				ref: "orderlist",
				attrs: {
					"lock-x": "",
					"scrollbar-y": "",
					bounce: "",
					"use-pullup": "",
					height: "-100",
					"pullup-config": e.pullupConfigs
				},
				domProps: {
					value: e.status
				},
				on: {
					"on-pullup-loading": e.update,
					input: function(t) {
						e.status = t
					}
				}
			}, [a("div", {
				staticClass: "weui-panel weui-panel_access goods-list"
			}, [a("div", {
				staticClass: "weui-panel__bd"
			}, e._l(e.orderlist, function(t) {
				return a("router-link", {
					staticClass: "weui-media-box weui-media-box_appmsg",
					attrs: {
						to: "/Home/OrderInfo/" + t.id,
						tag: "div"
					}
				}, [a("div", {
					staticClass: "weui-media-box__hd"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.thumb,
						expression: "order.thumb"
					}],
					staticClass: "weui-media-box__thumb",
					attrs: {
						alt: ""
					}
				})]), e._v(" "), a("div", {
					staticClass: "weui-media-box__bd"
				}, [a("h4", {
					staticClass: "weui-media-box__title wn-goods-title"
				}, [e._v(e._s(t.style))]), e._v(" "), a("p", {
					staticClass: "weui-media-box__desc wn-goods-sub"
				}, [e._v("数量：" + e._s(t.nums ? t.nums : "0"))]), e._v(" "), a("p", {
					staticClass: "weui-media-box__desc wn-goods-sub"
				}, [e._v("总价：￥" + e._s(t.sum_price))])]), e._v(" "), a("div", {
					staticClass: "weui-media-box__ft c-active select-color"
				}, [e._v("\r\n\t\t\t\t\t\t" + e._s(t.order_status) + "\r\n\t\t\t\t\t")])])
			}))])]), e._v(" "), "" == e.orderlist ? a("divider", [e._v("暂无数据")]) : e._e()], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-panel weui-panel_access"
			}, [e.header ? a("div", {
				staticClass: "weui-panel__hd",
				domProps: {
					innerHTML: e._s(e.header)
				},
				on: {
					click: e.onClickHeader
				}
			}) : e._e(), e._v(" "), a("div", {
				staticClass: "weui-panel__bd"
			}, ["1" === e.type ? e._l(e.list, function(t) {
				return a("a", {
					staticClass: "weui-media-box weui-media-box_appmsg",
					attrs: {
						href: e.getUrl(t.url)
					},
					on: {
						click: function(a) {
							a.preventDefault(), e.onItemClick(t)
						}
					}
				}, [t.src ? a("div", {
					staticClass: "weui-media-box__hd"
				}, [a("img", {
					staticClass: "weui-media-box__thumb",
					attrs: {
						src: t.src,
						alt: ""
					}
				})]) : e._e(), e._v(" "), a("div", {
					staticClass: "weui-media-box__bd"
				}, [a("h4", {
					staticClass: "weui-media-box__title"
				}, [e._v(e._s(t.title))]), e._v(" "), a("p", {
					staticClass: "weui-media-box__desc"
				}, [e._v(e._s(t.desc))])])])
			}) : e._e(), e._v(" "), "2" === e.type ? e._l(e.list, function(t) {
				return a("div", {
					staticClass: "weui-media-box weui-media-box_text",
					on: {
						click: function(a) {
							a.preventDefault(), e.onItemClick(t)
						}
					}
				}, [a("h4", {
					staticClass: "weui-media-box__title"
				}, [e._v(e._s(t.title))]), e._v(" "), a("p", {
					staticClass: "weui-media-box__desc"
				}, [e._v(e._s(t.desc))])])
			}) : e._e(), e._v(" "), "3" === e.type ? [a("div", {
				staticClass: "weui-media-box weui-media-box_small-appmsg"
			}, [a("div", {
				staticClass: "weui-cells"
			}, e._l(e.list, function(t) {
				return a("a", {
					staticClass: "weui-cell weui-cell_access",
					attrs: {
						href: e.getUrl(t.url)
					},
					on: {
						click: function(a) {
							a.preventDefault(), e.onItemClick(t)
						}
					}
				}, [a("div", {
					staticClass: "weui-cell__hd"
				}, [a("img", {
					staticStyle: {
						width: "20px",
						"margin-right": "5px",
						display: "block"
					},
					attrs: {
						src: t.src,
						alt: ""
					}
				})]), e._v(" "), a("div", {
					staticClass: "weui-cell__bd"
				}, [a("p", [e._v(e._s(t.title))])]), e._v(" "), a("span", {
					staticClass: "weui-cell__ft"
				})])
			}))])] : e._e()], 2), e._v(" "), a("div", {
				staticClass: "weui-panel__ft"
			}, [e.footer && "3" !== e.type ? a("a", {
				staticClass: "weui-cell weui-cell_access weui-cell_link",
				attrs: {
					href: e.getUrl(e.footer.url)
				},
				on: {
					click: function(t) {
						t.preventDefault(), e.onClickFooter(t)
					}
				}
			}, [a("div", {
				staticClass: "weui-cell__bd",
				domProps: {
					innerHTML: e._s(e.footer.title)
				}
			})]) : e._e()])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("popup-picker", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				attrs: {
					"fixed-columns": e.hideDistrict ? 2 : 0,
					columns: 3,
					data: e.list,
					title: e.title,
					"show-name": "",
					"inline-desc": e.inlineDesc,
					placeholder: e.placeholder,
					"value-text-align": e.valueTextAlign,
					"confirm-text": e.confirmText,
					"cancel-text": e.cancelText,
					"display-format": e.displayFormat
				},
				domProps: {
					value: e.currentValue
				},
				on: {
					"on-hide": e.emitHide,
					"on-show": function(t) {
						e.$emit("on-show")
					},
					input: function(t) {
						e.currentValue = t
					}
				}
			})], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-flexbox",
				class: {
					"vux-flex-col": "vertical" === e.orient,
					"vux-flex-row": "horizontal" === e.orient
				},
				style: e.styles
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t, a) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "pay"
			}, [n("group", [n("cell", [n("p", {
				slot: "after-title"
			}, [e._v(e._s(e.orderinfo.title))]), e._v(" "), n("span", {
				staticClass: "c-active pay-fee select-color",
				slot: "default"
			}, [e._v("￥" + e._s(e.orderinfo.fee))])])], 1), e._v(" "), n("group", {
				staticClass: "pay-list"
			}, [e.payinfo.wechat && e.payinfo.wechat.
			switch ?n("cell", {
				attrs: {
					title: "微信支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("wechat")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(123),
					alt: ""
				},
				slot: "icon"
			})]): e._e(),
			e._v(" "),
			e.payinfo.alipay && e.payinfo.alipay.
			switch ?n("cell", {
				attrs: {
					title: "支付宝支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("alipay")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(120),
					alt: ""
				},
				slot: "icon"
			})]): e._e(),
			e._v(" "),
			e.payinfo.baifubao && e.payinfo.baifubao.
			switch ?n("cell", {
				attrs: {
					title: "百付宝支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("baifubao")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(121),
					alt: ""
				},
				slot: "icon"
			})]): e._e(),
			e._v(" "),
			e.payinfo.unionpay && e.payinfo.unionpay.
			switch ?n("cell", {
				attrs: {
					title: "银联支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("unionpay")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(122),
					alt: ""
				},
				slot: "icon"
			})]): e._e()], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "classify clerk-order-list"
			}, [a("div", {
				staticStyle: {
					height: "80px"
				}
			}, [a("sticky", {
				attrs: {
					"scroll-box": "vux_view_box_body",
					"check-sticky-support": !1
				}
			}, [a("group", {
				staticClass: "clerk-select"
			}, [a("span", {
				staticClass: "storex-store"
			}), e._v(" "), a("popup-radio", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.selectedStore,
					expression: "selectedStore"
				}],
				staticClass: "wn-select-down text-over",
				attrs: {
					options: e.storeList
				},
				domProps: {
					value: e.selectedStore
				},
				on: {
					input: function(t) {
						e.selectedStore = t
					}
				}
			})], 1), e._v(" "), a("scroller", {
				attrs: {
					"lock-y": "",
					"scrollbar-x": ""
				}
			}, [a("checker", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.checkList,
					expression: "checkList"
				}],
				staticClass: "box",
				attrs: {
					type: "radio",
					"default-item-class": "wn-btn-defalut clerk-check",
					"selected-item-class": "wn-btn-primary"
				},
				domProps: {
					value: e.checkList
				},
				on: {
					input: function(t) {
						e.checkList = t
					}
				}
			}, [a("checker-item", {
				attrs: {
					value: "is_cancel"
				}
			}, [e._v("订单取消")]), e._v(" "), a("checker-item", {
				attrs: {
					value: "is_refuse"
				}
			}, [e._v("订单拒绝")]), e._v(" "), a("checker-item", {
				attrs: {
					value: "is_confirm"
				}
			}, [e._v("订单确认")]), e._v(" "), a("checker-item", {
				attrs: {
					value: "is_access"
				}
			}, [e._v("订单入住")]), e._v(" "), a("checker-item", {
				attrs: {
					value: "is_over"
				}
			}, [e._v("订单完成")]), e._v(" "), a("checker-item", {
				attrs: {
					value: "is_send"
				}
			}, [e._v("订单发货")])], 1)], 1)], 1)], 1), e._v(" "), a("div", {}, e._l(e.evenOrderList, function(t) {
				return a("div", {
					staticClass: "weui-panel weui-panel_access goods-list"
				}, [a("div", {
					staticClass: "weui-panel__bd"
				}, [a("router-link", {
					staticClass: "weui-media-box weui-media-box_appmsg",
					staticStyle: {
						"align-items": "flex-start"
					},
					attrs: {
						to: "/Home/CLerk/OrderInfo/" + t.id,
						tag: "div"
					}
				}, [a("div", {
					staticClass: "weui-media-box__hd"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.thumb,
						expression: "order.thumb"
					}],
					staticClass: "weui-media-box__thumb",
					attrs: {
						alt: ""
					}
				})]), e._v(" "), a("div", {
					staticClass: "weui-media-box__bd"
				}, [a("h4", {
					staticClass: "weui-media-box__title wn-goods-title"
				}, [e._v(e._s(t.style))])]), e._v(" "), a("div", {
					staticClass: "weui-media-box__ft c-active select-color text-right"
				}, [a("p", {
					staticClass: "weui-media-box__desc wn-goods-sub"
				}, [e._v("X" + e._s(t.nums ? t.nums : "0"))]), e._v(" "), a("p", {
					staticClass: "weui-media-box__desc wn-goods-sub"
				}, [e._v("￥" + e._s(t.sum_price))])])]), e._v(" "), a("div", {
					staticClass: "weui-media-box weui-media-box_appmsg",
					staticStyle: {
						"flex-direction": "row-reverse"
					}
				}, [a("div", {
					staticClass: "weui-media-box__ft"
				}, [t.operate.is_cancel ? a("x-button", {
					staticClass: "wn-btn-defalut",
					attrs: {
						type: "default",
						mini: "",
						plain: ""
					},
					nativeOn: {
						click: function(a) {
							e.orderType("is_cancel", t.id)
						}
					}
				}, [e._v("订单取消")]) : e._e(), e._v(" "), t.operate.is_refuse ? a("x-button", {
					staticClass: "wn-btn-defalut",
					attrs: {
						type: "default",
						mini: "",
						plain: ""
					},
					nativeOn: {
						click: function(a) {
							e.orderType("is_refuse", t.id)
						}
					}
				}, [e._v("订单拒绝")]) : e._e(), e._v(" "), t.operate.is_confirm ? a("x-button", {
					staticClass: "wn-btn-primary",
					attrs: {
						type: "primary",
						mini: "",
						plain: ""
					},
					nativeOn: {
						click: function(a) {
							e.orderType("is_confirm", t.id)
						}
					}
				}, [e._v("订单确认")]) : e._e(), e._v(" "), t.operate.is_access ? a("x-button", {
					staticClass: "wn-btn-primary",
					attrs: {
						type: "primary",
						mini: "",
						plain: ""
					},
					nativeOn: {
						click: function(a) {
							e.orderType("is_access", t.id)
						}
					}
				}, [e._v("订单入住")]) : e._e(), e._v(" "), t.operate.is_over ? a("x-button", {
					staticClass: "wn-btn-primary",
					attrs: {
						type: "primary",
						mini: "",
						plain: ""
					},
					nativeOn: {
						click: function(a) {
							e.orderType("is_over", t.id)
						}
					}
				}, [e._v("订单完成")]) : e._e(), e._v(" "), t.operate.is_send ? a("x-button", {
					staticClass: "wn-btn-primary",
					attrs: {
						type: "primary",
						mini: "",
						plain: ""
					},
					nativeOn: {
						click: function(a) {
							e.orderType("is_send", t.id)
						}
					}
				}, [e._v("订单发货")]) : e._e()], 1)])], 1)])
			})), e._v(" "), "" == e.orderList ? a("divider", [e._v("暂无数据")]) : e._e()], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "address-list weui-tab bg-popup",
				staticStyle: {
					"padding-bottom": "50px"
				}
			}, [a("group", {
				staticClass: "weui-tab__panel vux-fix-safari-overflow-scrolling"
			}, e._l(e.addresslists, function(t) {
				return a("cell", {
					attrs: {
						title: t.province + t.city + t.district + t.address,
						value: 1 == t.isdefault ? "默认地址" : ""
					},
					nativeOn: {
						click: function(a) {
							e.showaction(t.id)
						}
					}
				})
			})), e._v(" "), a("actionsheet", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.show1,
					expression: "show1"
				}],
				attrs: {
					"show-cancel": "",
					menus: e.menus1
				},
				domProps: {
					value: e.show1
				},
				on: {
					"on-click-menu-delete": e.del,
					"on-click-menu-default": e.def,
					"on-click-menu-edit": e.edit,
					input: function(t) {
						e.show1 = t
					}
				}
			}), e._v(" "), a("flexbox", {
				staticClass: "weui-tabbar wn-tabbar",
				staticStyle: {
					"padding-bottom": "50px"
				}
			}, [a("flexbox-item", [a("router-link", {
				attrs: {
					to: "/Home/AddressEdit/new"
				}
			}, [a("x-button", {
				staticStyle: {
					"border-radius": "0"
				},
				attrs: {
					type: "warn"
				}
			}, [e._v("+新增收货地址")])], 1)], 1)], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return e.orderInfo ? a("div", {
				staticClass: "clerk-order-info"
			}, [a("group", [a("cell", [a("h3", {
				staticClass: "c-active",
				slot: "after-title"
			}, [e._v(e._s(e.orderInfo.order_status))])]), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "店铺",
					value: e.orderInfo.title
				}
			}), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "房源"
				}
			}, [a("span", [e._v(e._s(e.orderInfo.style) + "  ")]), e._v(" "), a("span", {
				staticStyle: {
					float: "right"
				}
			}, [e._v("￥" + e._s(e.orderInfo.sum_price))])]), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "数量",
					value: "X " + e.orderInfo.nums
				}
			}), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "总计"
				}
			}, [a("span", {
				staticClass: "c-active"
			}, [e._v("￥" + e._s(e.orderInfo.sum_price))])]), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "入住人",
					value: e.orderInfo.contact_name
				}
			}), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "手机号",
					value: e.orderInfo.mobile
				}
			}), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "入住时间",
					value: e.orderInfo.btime
				}
			}), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "备注",
					value: e.orderInfo.remark
				}
			}), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "配送方式",
					value: 1 == e.orderInfo.mode_distribute ? "自提" : "配送"
				}
			}), e._v(" "), 2 == e.orderInfo.mode_distribute ? a("cell", {
				attrs: {
					"value-align": "left",
					title: "期望时间",
					value: e.orderInfo.order_time
				}
			}) : e._e(), e._v(" "), 2 == e.orderInfo.mode_distribute ? a("cell", {
				attrs: {
					"value-align": "left",
					title: "配送地址",
					value: e.orderInfo.address
				}
			}) : e._e(), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "订单号码",
					value: e.orderInfo.ordersn
				}
			}), e._v(" "), a("cell", {
				attrs: {
					"value-align": "left",
					title: "订单时间",
					value: e.orderInfo.time
				}
			})], 1), e._v(" "), a("div", {
				staticClass: "order-action"
			}, [e.orderInfo.operate && e.orderInfo.operate.is_cancel ? a("x-button", {
				staticClass: "wn-btn-defalut",
				attrs: {
					type: "default",
					mini: "",
					plain: ""
				},
				nativeOn: {
					click: function(t) {
						e.orderType("is_cancel", e.orderInfo.id)
					}
				}
			}, [e._v("订单取消")]) : e._e(), e._v(" "), e.orderInfo.operate && e.orderInfo.operate.is_refuse ? a("x-button", {
				staticClass: "wn-btn-defalut",
				attrs: {
					type: "default",
					mini: "",
					plain: ""
				},
				nativeOn: {
					click: function(t) {
						e.orderType("is_refuse", e.orderInfo.id)
					}
				}
			}, [e._v("订单拒绝")]) : e._e(), e._v(" "), e.orderInfo.operate && e.orderInfo.operate.is_confirm ? a("x-button", {
				staticClass: "wn-btn-primary",
				attrs: {
					type: "primary",
					mini: "",
					plain: ""
				},
				nativeOn: {
					click: function(t) {
						e.orderType("is_confirm", e.orderInfo.id)
					}
				}
			}, [e._v("订单确认")]) : e._e(), e._v(" "), e.orderInfo.operate && e.orderInfo.operate.is_access ? a("x-button", {
				staticClass: "wn-btn-primary",
				attrs: {
					type: "primary",
					mini: "",
					plain: ""
				},
				nativeOn: {
					click: function(t) {
						e.orderType("is_access", e.orderInfo.id)
					}
				}
			}, [e._v("订单入住")]) : e._e(), e._v(" "), e.orderInfo.operate && e.orderInfo.operate.is_over ? a("x-button", {
				staticClass: "wn-btn-primary",
				attrs: {
					type: "primary",
					mini: "",
					plain: ""
				},
				nativeOn: {
					click: function(t) {
						e.orderType("is_over", e.orderInfo.id)
					}
				}
			}, [e._v("订单完成")]) : e._e(), e._v(" "), e.orderInfo.operate && e.orderInfo.operate.is_send ? a("x-button", {
				staticClass: "wn-btn-primary",
				attrs: {
					type: "primary",
					mini: "",
					plain: ""
				},
				nativeOn: {
					click: function(t) {
						e.orderType("is_send", e.orderInfo.id)
					}
				}
			}, [e._v("订单发货")]) : e._e()], 1)], 1) : e._e()
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "store"
			}, [a("swiper", {
				staticStyle: {
					width: "100%",
					margin: "0 auto"
				},
				attrs: {
					loop: "",
					"aspect-ratio": 616 / 375,
					"dots-position": "center"
				}
			}, e._l(e.storeInfo.thumbs, function(e, t) {
				return a("swiper-item", {
					key: e,
					staticClass: "slider"
				}, [a("img", {
					attrs: {
						src: e,
						alt: t
					}
				})])
			})), e._v(" "), a("div", {
				staticClass: "store-info"
			}, [a("div", {
				staticClass: "store-info-panel"
			}, [a("div", {
				staticClass: "store-logo"
			}, [a("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: e.storeInfo.thumb,
					expression: "storeInfo.thumb"
				}],
				attrs: {
					alt: ""
				}
			})]), e._v(" "), a("div", {
				staticClass: "detail-btn"
			}, [a("router-link", {
				attrs: {
					to: "/StoreDetail/" + e.storeInfo.id
				}
			}, [e._v("查看详情")])], 1)])]), e._v(" "), 1 == e.storeInfo.version ? a("div", {
				staticClass: "store-switch"
			}, [a("a", {
				attrs: {
					href: e.displayurl
				}
			}, [e._v("切换店铺")])]) : e._e()], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				style: e.styles
			}, [a("div", {
				staticClass: "xs-container"
			}, [e._t("default"), e._v(" "), e._t("pulldown"), e._v(" "), e._t("pullup")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "credit-store-detail"
			}, [a("div", {
				staticClass: "head"
			}, [a("img", {
				attrs: {
					src: e.detail.thumb,
					alt: ""
				}
			})]), e._v(" "), a("div", {
				staticClass: "credit border-after"
			}, [a("span", {
				staticClass: "num c-active"
			}, [e._v(e._s(e.detail.credit))]), a("span", {
				staticClass: "storex",
				class: "credit2" == e.detail.credittype ? "storex-balance" : "storex-integral"
			}), e._v(" "), a("div", {
				staticClass: "exchange"
			}, [a("button", {
				staticClass: "weui-btn weui-btn_warn",
				attrs: {
					type: "button",
					name: "button"
				},
				on: {
					click: e.exchange
				}
			}, [e._v("立即兑换")])])]), e._v(" "), a("div", {
				staticClass: "detail"
			}, [a("h3", [e._v("房源名称")]), e._v(" "), a("span", [e._v(" " + e._s(e.detail.title))]), e._v(" "), a("h4", [e._v("兑换说明")]), e._v(" "), a("div", {
				staticClass: "content",
				domProps: {
					innerHTML: e._s(e.detail.description)
				}
			})]), e._v(" "), a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showadd,
					expression: "showadd"
				}],
				staticClass: "showadd",
				staticStyle: {
					overflow: "auto"
				},
				attrs: {
					height: "100%"
				},
				domProps: {
					value: e.showadd
				},
				on: {
					input: function(t) {
						e.showadd = t
					}
				}
			}, [a("x-header", {
				staticStyle: {
					width: "100%",
					position: "fixed",
					left: "0",
					top: "0",
					"z-index": "100"
				},
				attrs: {
					"left-options": {
						showBack: !0,
						backText: "选择地址",
						preventGoBack: !0
					}
				},
				on: {
					"on-click-back": function(t) {
						e.showadd = !1
					}
				}
			}), e._v(" "), a("div", {
				staticClass: "address-list",
				staticStyle: {
					"padding-top": "40px",
					"min-height": "100%"
				}
			}, [a("group", [a("radio", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.addressid,
					expression: "addressid"
				}],
				attrs: {
					options: e.address_info
				},
				domProps: {
					value: e.addressid
				},
				on: {
					"on-change": e.change,
					input: function(t) {
						e.addressid = t
					}
				}
			})], 1), e._v(" "), a("div", {
				staticStyle: {
					opacity: "0"
				}
			}, [a("button", {
				staticClass: "weui-btn weui-btn_warn"
			}, [e._v("确定兑换")]), e._v(" "), a("button", {
				staticClass: "weui-btn weui-btn_warn"
			}, [e._v("+新增收货地址")])]), e._v(" "), a("div", {
				staticClass: "showadd-action"
			}, [a("button", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.addressid,
					expression: "addressid"
				}],
				staticClass: "weui-btn weui-btn_warn",
				on: {
					click: e.submit
				}
			}, [e._v("确定兑换")]), e._v(" "), a("router-link", {
				attrs: {
					to: "/Home/AddressEdit/new"
				}
			}, [a("button", {
				staticClass: "weui-btn weui-btn_warn"
			}, [e._v("+新增收货地址")])])], 1)], 1)], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.title,
					expression: "title"
				}],
				staticClass: "weui-cells__title"
			}, [e._v(e._s(e.title))]), e._v(" "), e._t("after-title"), e._v(" "), a("div", {
				staticClass: "weui-cells weui-cells_checkbox"
			}, e._l(e.currentOptions, function(t, n) {
				return a("label", {
					staticClass: "weui-cell weui-check_label",
					class: {
						"vux-checklist-label-left": "left" === e.labelPosition
					},
					attrs: {
						for :"checkbox_" + e.uuid + "_" + n
					}
				}, [a("div", {
					staticClass: "weui-cell__hd"
				}, [a("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.currentValue,
						expression: "currentValue"
					}],
					staticClass: "weui-check",
					attrs: {
						type: "checkbox",
						name: "vux-checkbox-" + e.uuid,
						id: "checkbox_" + e.uuid + "_" + n,
						disabled: e.ifDisable(e.getKey(t))
					},
					domProps: {
						value: e.getKey(t),
						checked: Array.isArray(e.currentValue) ? e._i(e.currentValue, e.getKey(t)) > -1 : e.currentValue
					},
					on: {
						click: function(a) {
							var n = e.currentValue,
								r = a.target,
								i = !! r.checked;
							if (Array.isArray(n)) {
								var l = e.getKey(t),
									u = e._i(n, l);
								i ? u < 0 && (e.currentValue = n.concat(l)) : u > -1 && (e.currentValue = n.slice(0, u).concat(n.slice(u + 1)))
							} else e.currentValue = i
						}
					}
				}), e._v(" "), a("i", {
					staticClass: "weui-icon-checked vux-checklist-icon-checked"
				})]), e._v(" "), a("div", {
					staticClass: "weui-cell__bd"
				}, [a("p", {
					domProps: {
						innerHTML: e._s(e.getValue(t))
					}
				})])])
			})), e._v(" "), e._t("footer")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-header"
			}, [a("div", {
				staticClass: "vux-header-left"
			}, [e._t("overwrite-left", [a("transition", {
				attrs: {
					name: e.transition
				}
			}, [a("a", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e._leftOptions.showBack,
					expression: "_leftOptions.showBack"
				}],
				staticClass: "vux-header-back",
				on: {
					click: [function(t) {
						e._k(t.keyCode, "preventDefault")
					},
					e.onClickBack]
				}
			}, [e._v(e._s("undefined" == typeof e._leftOptions.backText ? "返回" : e._leftOptions.backText))])]), e._v(" "), a("transition", {
				attrs: {
					name: e.transition
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e._leftOptions.showBack,
					expression: "_leftOptions.showBack"
				}],
				staticClass: "left-arrow",
				on: {
					click: e.onClickBack
				}
			})])]), e._v(" "), e._t("left")], 2), e._v(" "), a("h1", {
				staticClass: "vux-header-title",
				on: {
					click: function(t) {
						e.$emit("on-click-title")
					}
				}
			}, [e._t("default", [a("transition", {
				attrs: {
					name: e.transition
				}
			}, [a("span", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.title,
					expression: "title"
				}]
			}, [e._v(e._s(e.title))])])])], 2), e._v(" "), a("div", {
				staticClass: "vux-header-right"
			}, [e.rightOptions.showMore ? a("a", {
				staticClass: "vux-header-more",
				on: {
					click: [function(t) {
						e._k(t.keyCode, "preventDefault")
					}, function(t) {
						e.$emit("on-click-more")
					}]
				}
			}) : e._e(), e._v(" "), e._t("right")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {}, [a("div", {
				staticStyle: {
					height: "44px"
				}
			}, [a("sticky", {
				attrs: {
					"scroll-box": "vux_view_box_body",
					"check-sticky-support": !1
				}
			}, [a("tab", {
				attrs: {
					"line-width": 2
				}
			}, e._l(e.list, function(t, n) {
				return a("tab-item", {
					staticClass: "vux-center",
					attrs: {
						selected: e.selected === t
					},
					on: {
						"on-item-click": function(a) {
							e.tabselected(n, t)
						}
					}
				}, [e._v(e._s(t))])
			}))], 1)], 1), e._v(" "), a("div", {
				staticClass: "weui-cells"
			}, e._l(e.creditlist, function(t) {
				return a("div", {
					staticClass: "weui-cell flex-start"
				}, [a("div", {
					staticClass: "weui-cell__bd"
				}, [a("p", [e._v(e._s(t.remark))])]), e._v(" "), a("div", {
					staticClass: "weui-cell__ft"
				}, [a("div", {
					staticClass: "date"
				}, [e._v(e._s(t.createtime))]), e._v(" "), a("div", {
					staticClass: "sum c-active"
				}, [e._v("￥" + e._s(t.num))])])])
			})), e._v(" "), "" == e.creditlist ? a("divider", [e._v("暂无数据")]) : e._e()], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-cell"
			}, [a("div", [a("p", {
				style: {
					width: e.$parent.labelWidth,
					textAlign: e.$parent.labelAlign,
					marginRight: e.$parent.labelMarginRight
				},
				domProps: {
					innerHTML: e._s(e.title)
				}
			})]), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.readonly,
					expression: "!readonly"
				}],
				staticClass: "weui-cell__ft vux-cell-primary",
				class: {
					"vux-number-round": "round" === e.buttonStyle
				},
				staticStyle: {
					"font-size": "0"
				}
			}, [a("div", {
				style: {
					float: e.align
				}
			}, [a("a", {
				staticClass: "vux-number-selector vux-number-selector-sub",
				class: {
					"vux-number-disabled": e.disabledMin
				},
				on: {
					click: e.sub
				}
			}, [a("svg", {
				attrs: {
					viewBox: "0 0 1024 1024",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					"xmlns:xlink": "http://www.w3.org/1999/xlink",
					width: "18",
					height: "18"
				}
			}, [a("defs"), a("path", {
				attrs: {
					d: "M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"
				}
			})])]), e._v(" "), a("input", {
				directives: [{
					name: "model",
					rawName: "v-model.number",
					value: e.currentValue,
					expression: "currentValue",
					modifiers: {
						number: !0
					}
				}],
				staticClass: "vux-number-input",
				style: {
					width: e.width
				},
				attrs: {
					name: e.name,
					readonly: !e.fillable,
					pattern: "[0-9]*",
					type: "number"
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					blur: [e.blur, function(t) {
						e.$forceUpdate()
					}],
					input: function(t) {
						t.target.composing || (e.currentValue = e._n(t.target.value))
					}
				}
			}), e._v(" "), a("a", {
				staticClass: "vux-number-selector vux-number-selector-plus",
				class: {
					"vux-number-disabled": e.disabledMax
				},
				on: {
					click: e.add
				}
			}, [a("svg", {
				attrs: {
					viewBox: "0 0 1024 1024",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					"xmlns:xlink": "http://www.w3.org/1999/xlink",
					width: "20",
					height: "20"
				}
			}, [a("defs"), a("path", {
				attrs: {
					d: "M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"
				}
			})])])])]), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.readonly,
					expression: "readonly"
				}],
				staticClass: "weui-cell__ft vux-cell-primary"
			}, [e._v("\n    " + e._s(e.value) + "\n  ")])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "coupon-list bg-popup"
			}, [e.loading ? a("load-more", {
				attrs: {
					tip: "正在加载"
				}
			}) : e._e(), e._v(" "), e.loading || 0 != e.couponList.length ? e._e() : a("load-more", {
				attrs: {
					"show-loading": !1,
					tip: "暂无优惠券"
				}
			}), e._v(" "), e._l(e.couponList, function(t, n) {
				return a("div", {
					staticClass: "coupon-item",
					on: {
						click: function(a) {
							e.exchange(t)
						}
					}
				}, [a("div", {
					staticClass: "info"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.coupon.logo_url,
						expression: "coupon.coupon.logo_url"
					}],
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("div", {
					staticClass: "content"
				}, [a("h4", {
					staticClass: "title"
				}, [e._v("\n\t\t\t\t\t" + e._s(t.coupon.title) + " " + e._s(t.coupon.sub_title) + "\n\t\t\t\t\t"), a("span", {
					staticClass: "pull-right"
				}, [a("i", {
					staticClass: "storex",
					class: e.creditType[t.credittype]
				}), e._v(e._s(t.credit))])]), e._v(" "), a("div", {
					staticClass: "explain active",
					class: {
						active: e.showMore == n,
						" text-over": e.showMore != n
					},
					on: {
						click: function(t) {
							t.stopPropagation(), e.showMore = e.showMore == n ? "-1" : n
						}
					}
				}, [e._v("\n\t\t\t\t\t" + e._s(t.coupon.description) + "\n\t\t\t\t")])])]), e._v(" "), a("div", {
					staticClass: "time"
				}, [e._v("\n\t\t\t" + e._s(t.coupon.extra_date_info) + "\n\t\t")])])
			})], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "balance"
			}, [a("div", {
				staticClass: "weui-tab"
			}, [a("div", {
				staticClass: "weui-tab__panel"
			}, [a("div", {
				staticClass: "sum"
			}, [e._v("\r\n\t\t\t\t￥" + e._s(e.num) + "\r\n\t\t\t")]), e._v(" "), a("div", {
				staticClass: "weui-btn-area"
			}, [a("router-link", {
				staticClass: "weui-btn weui-btn_warn",
				attrs: {
					to: "/Home/Recharge"
				}
			}, [e._v("充值")])], 1), e._v(" "), a("div", {
				staticClass: "text-right balance-list"
			}, [a("router-link", {
				staticClass: "c-link link-color",
				attrs: {
					to: "/Home/CreditsRecord"
				}
			}, [e._v("查看明细")])], 1)])])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-sticky-box"
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "home sign"
			}, [a("div", {
				staticClass: "sign-box border-after"
			}, [a("div", {
				staticClass: "sign-header"
			}, [a("span", [e._v(e._s(e.day))])]), e._v(" "), a("div", {
				staticClass: "sign-buttom"
			}, [a("a", {
				staticClass: "weui-btn weui-btn_submit",
				on: {
					click: e.signIn
				}
			}, [e._v(e._s(e.signStatus ? "" : "已") + "签到")])]), e._v(" "), a("div", {
				staticClass: "sign-calendar"
			}, [a("flexbox", {
				staticClass: "calendar-header border-before",
				attrs: {
					gutter: 0,
					wrap: "wrap"
				}
			}, e._l(e.weeksList, function(t) {
				return a("flexbox-item", {
					attrs: {
						span: 1 / 7
					}
				}, [a("div", {
					staticClass: "item"
				}, [e._v(e._s(t))])]);
			})), e._v(" "), a("flexbox", {
				staticClass: "calendar-content",
				attrs: {
					gutter: 0,
					wrap: "wrap"
				}
			}, [e._l(e.weekday, function(e) {
				return a("flexbox-item", {
					attrs: {
						span: 1 / 7
					}
				}, [a("div", {
					staticClass: "item"
				})])
			}), e._v(" "), e._l(e.signList, function(t, n) {
				return a("flexbox-item", {
					attrs: {
						span: 1 / 7
					}
				}, [a("div", {
					staticClass: "day",
					class: {
						"is-sign": 1 == t.status
					},
					on: {
						click: function(a) {
							e.fillSign(n, t)
						}
					}
				}, [a("span", [e._v(e._s(e._f("addZero")(n)))])])])
			})], 2)], 1)]), e._v(" "), a("div", {}, [a("group", [a("cell", {
				attrs: {
					title: "签到记录",
					link: "/Home/SignList"
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "积分攻略",
					"is-link": ""
				},
				nativeOn: {
					click: function(t) {
						e.showStrategyr = !0
					}
				}
			})], 1)], 1), e._v(" "), a("div", {
				directives: [{
					name: "transfer-dom",
					rawName: "v-transfer-dom"
				}],
				staticClass: "sign"
			}, [a("x-dialog", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showStrategyr,
					expression: "showStrategyr"
				}],
				staticClass: "dialog-demo",
				attrs: {
					hideOnBlur: !0
				},
				domProps: {
					value: e.showStrategyr
				},
				on: {
					input: function(t) {
						e.showStrategyr = t
					}
				}
			}, [a("p", {
				staticClass: "dialog-header"
			}, [e._v("签到规则")]), e._v(" "), a("div", {
				staticClass: "dialog-content",
				domProps: {
					innerHTML: e._s(e.content)
				}
			}), e._v(" "), a("div", {
				staticClass: "dialog-footer"
			}, [a("span", {
				staticClass: "dialog-close",
				on: {
					click: function(t) {
						e.showStrategyr = !1
					}
				}
			}, [e._v("关闭")])])])], 1)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("a", {
				staticClass: "weui-tabbar__item",
				class: {
					"weui-bar__item_on": e.isActive,
					"vux-tabbar-simple": e.simple
				},
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: function(t) {
						e.onItemClick(!0)
					}
				}
			}, [e.simple ? e._e() : a("div", {
				staticClass: "weui-tabbar__icon",
				class: [e.iconClass || e.$parent.iconClass,
				{
					"vux-reddot": e.showDot
				}]
			}, [e.simple || e.hasActiveIcon && e.isActive ? e._e() : e._t("icon"), e._v(" "), !e.simple && e.hasActiveIcon && e.isActive ? e._t("icon-active") : e._e(), e._v(" "), e.badge ? a("sup", [a("badge", {
				attrs: {
					text: e.badge
				}
			})], 1) : e._e()], 2), e._v(" "), a("p", {
				staticClass: "weui-tabbar__label"
			}, [e._t("label")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "store-list"
			}, [a("div", {
				staticClass: "select-address"
			}, [a("p", {
				on: {
					click: function(t) {
						e.citySelect = !0
					}
				}
			}, [a("i", {
				staticClass: "storex-address"
			}), e._v("\n\t\t\t" + e._s(e.cityAdress) + "\n\t\t\t"), a("span", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.loadMore,
					expression: "loadMore"
				}]
			}, [a("i", {
				staticClass: "weui-loading"
			}), e._v("定位中")]), e._v(" "), a("i", {
				staticClass: "storex-arrow-down"
			})]), e._v(" "), a("search", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.keyword,
					expression: "keyword"
				}],
				staticClass: "store-list-search",
				attrs: {
					placeholder: e.keyword ? e.keyword : "搜索",
					"auto-fixed": !1
				},
				domProps: {
					value: e.keyword
				},
				on: {
					"on-submit": e.getResult,
					"on-cancel": e.onCancel,
					input: function(t) {
						e.keyword = t
					}
				}
			})], 1), e._v(" "), a("group", e._l(e.list, function(t) {
				return a("cell", {
					attrs: {
						title: ""
					}
				}, [a("a", {
					attrs: {
						href: e.switchurl + "&id=" + t.id + "#/StoreIndex/" + t.id
					},
					slot: "icon"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.thumb,
						expression: "item.thumb"
					}],
					attrs: {
						alt: ""
					}
				})]), e._v(" "), a("div", {
					staticClass: "weui-cell__bd",
					slot: "after-title"
				}, [a("a", {
					attrs: {
						href: e.switchurl + "&id=" + t.id + "#/StoreIndex/" + t.id
					},
					slot: "icon"
				}, [a("div", {
					staticClass: "name wn-goods-title"
				}, [e._v(e._s(t.title))]), e._v(" "), a("div", {
					staticClass: "address wn-content "
				}, [e._v(e._s(t.address ? t.address : " "))]), e._v(" "), a("div", {
					staticClass: "business-hours wn-content"
				}, [a("i", {
					staticClass: "storex-reserve"
				}), e._v(e._s(t.timestart) + " - " + e._s(t.timeend)), 1 == e.selectType ? a("span", {
					staticStyle: {
						"font-size": "10px"
					}
				}, [e._v("距你" + e._s(t.distances) + "Km")]) : e._e()])])]), e._v(" "), a("div", {
					staticClass: "tel"
				}, [a("a", {
					staticClass: "c-active",
					attrs: {
						href: "tel:" + t.phone
					}
				}, [a("span", {
					staticClass: "storex-tel"
				})])])])
			})), e._v(" "), "" == e.list ? a("divider", [e._v("暂无店铺")]) : e._e(), e._v(" "), a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.citySelect,
					expression: "citySelect"
				}],
				attrs: {
					height: "100%"
				},
				domProps: {
					value: e.citySelect
				},
				on: {
					input: function(t) {
						e.citySelect = t
					}
				}
			}, [a("list-city", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.cityName,
					expression: "cityName"
				}],
				attrs: {
					listClass: "index-city"
				},
				domProps: {
					value: e.cityName
				},
				on: {
					"on-change": e.selected,
					"on-location": e.locationed,
					input: function(t) {
						e.cityName = t
					}
				}
			})], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t, a) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "pay"
			}, [n("group", [n("cell", [n("p", {
				slot: "after-title"
			}, [e._v(e._s(e.orderinfo.title))]), e._v(" "), n("span", {
				staticClass: "c-active pay-fee select-color",
				slot: "default"
			}, [e._v("￥" + e._s(e.orderinfo.fee))])])], 1), e._v(" "), n("group", {
				staticClass: "pay-list"
			}, [e.payinfo.credit ? n("cell", {
				nativeOn: {
					click: function(t) {
						e.pay("credit")
					}
				}
			}, [n("p", {
				slot: "after-title"
			}, [e._v("\n\t\t\t余额支付\n\t\t\t"), n("span", {
				staticClass: "select-color"
			}, [e._v("￥" + e._s(e.credits.credit2))])]), e._v(" "), n("img", {
				attrs: {
					src: a(299),
					alt: ""
				},
				slot: "icon"
			})]) : e._e(), e._v(" "), e.payinfo.wechat && "4" != e.payinfo.wechat.
			switch ?n("cell", {
				attrs: {
					title: "微信支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("wechat")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(123),
					alt: ""
				},
				slot: "icon"
			})]): e._e(),
			e._v(" "),
			e.payinfo.alipay ? n("cell", {
				attrs: {
					title: "支付宝支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("alipay")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(120),
					alt: ""
				},
				slot: "icon"
			})]) : e._e(),
			e._v(" "),
			e.payinfo.baifubao ? n("cell", {
				attrs: {
					title: "百付宝支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("baifubao")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(121),
					alt: ""
				},
				slot: "icon"
			})]) : e._e(),
			e._v(" "),
			e.payinfo.unionpay ? n("cell", {
				attrs: {
					title: "银联支付"
				},
				nativeOn: {
					click: function(t) {
						e.pay("unionpay")
					}
				}
			}, [n("img", {
				attrs: {
					src: a(122),
					alt: ""
				},
				slot: "icon"
			})]) : e._e()], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("canvas", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: "canvas" === e.type,
					expression: "type === 'canvas'"
				}],
				ref: "canvas",
				style: {
					height: e.size,
					width: e.size
				},
				attrs: {
					height: e.size,
					width: e.size
				}
			}), e._v(" "), "img" === e.type ? a("img", {
				attrs: {
					src: e.imgData
				}
			}) : e._e()])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "wn-indexlist"
			}, [a("ul", {
				ref: "content",
				staticClass: "wn-indexlist-content",
				style: {
					height: e.currentHeight + "px",
					"margin-right": e.navWidth + "px"
				}
			}, [e._t("default")], 2), e._v(" "), a("div", {
				ref: "nav",
				staticClass: "wn-indexlist-nav",
				on: {
					touchstart: function(t) {
						t.stopPropagation(), e.handleTouchStart(t)
					}
				}
			}, [a("ul", {
				staticClass: "wn-indexlist-navlist"
			}, e._l(e.sections, function(t) {
				return a("li", {
					staticClass: "wn-indexlist-navitem"
				}, [e._v(e._s(t.index))])
			}))]), e._v(" "), e.showIndicator ? a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.moving,
					expression: "moving"
				}],
				staticClass: "wn-indexlist-indicator"
			}, [e._v(e._s(e.currentIndicator))]) : e._e()])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-swipeout"
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {}, [a("group", {}, [a("cell", {
				attrs: {
					title: "订单管理",
					link: "/Home/Clerk/OrderList"
				}
			})], 1), e._v(" "), a("group", {}, [a("cell", {
				attrs: {
					title: "房源维护",
					link: "/Home/Clerk/Roomlist"
				}
			})], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "home bg-popup"
			}, [a("div", {
				staticClass: "weui-tab__panel"
			}, [1 == e.extend.card ? a("div", {
				staticClass: "banner card-banner flip-box",
				class: {
					active: e.showBack
				},
				on: {
					click: function(t) {
						e.showBack = !e.showBack
					}
				}
			}, [1 == e.userInfo.mycard.is_receive ? a("div", {
				staticClass: "card-panel flip-item-front",
				style: {
					background: "url(" + e.userInfo.mycard.background.image + ") center",
					"background-size": "100% 100%"
				}
			}, [a("div", {
				staticClass: "logo"
			}, [a("img", {
				staticClass: "avatar",
				attrs: {
					src: e.userInfo.mycard.logo,
					alt: ""
				}
			})]), e._v(" "), a("div", {
				staticClass: "con",
				style: {
					color: e.userInfo.mycard.color.title
				}
			}, [e._v(e._s(e.userInfo.mycard.card_label.title))]), e._v(" "), a("div", {
				staticClass: "rank",
				style: {
					color: e.userInfo.mycard.color.rank
				}
			}, [e._v(e._s(e.userInfo.mycard.group.title))]), e._v(" "), a("div", {
				staticClass: "num",
				style: {
					color: e.userInfo.mycard.color.number
				}
			}, [e._v("NO:" + e._s(e.userInfo.mycard.cardsn))])]) : e._e(), e._v(" "), 1 == e.userInfo.mycard.is_receive ? a("div", {
				staticClass: "card-panel flip-item-back",
				style: {
					background: "url(" + e.userInfo.mycard.background.image + ") center",
					"background-size": "100% 100%"
				}
			}, [a("div", {
				staticClass: "description",
				domProps: {
					innerHTML: e._s(e.userInfo.mycard.description)
				}
			})]) : e._e(), e._v(" "), 2 == e.userInfo.mycard.is_receive ? a("div", {
				staticClass: "card-panel"
			}, [a("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: e.userInfo.mycard.background.image,
					expression: "userInfo.mycard.background.image"
				}],
				staticClass: "bg-card",
				attrs: {
					alt: ""
				}
			}), e._v(" "), a("div", {
				staticClass: "con receive"
			}, [a("router-link", {
				attrs: {
					to: "/Home/ReceiveCard"
				}
			}, [e._v("点击领取会员卡")])], 1)]) : e._e()]) : e._e(), e._v(" "), a("div", {
				staticClass: "banner home-banner"
			}, [a("router-link", {
				attrs: {
					to: "/Home/UserInfo"
				}
			}, [a("img", {
				staticClass: "avatar",
				attrs: {
					src: e.userInfo.avatar,
					alt: ""
				}
			}), e._v(" "), a("span", {
				staticClass: "nickname"
			}, [e._v(e._s(e.userInfo.nickname))]), e._v(" "), a("span", {
				staticClass: "arrows"
			}, [a("i", {
				staticClass: "wi wi-angle-right"
			})])])], 1), e._v(" "), a("div", {
				staticClass: "money-panel border-after"
			}, [a("div", {
				staticClass: "recharge"
			}, [a("router-link", {
				attrs: {
					to: "/Home/Recharge"
				}
			}, [a("i", {
				staticClass: "storex-recharge"
			}), e._v(" "), a("span", [e._v("充值")])])], 1), e._v(" "), a("div", {
				staticClass: "pay",
				on: {
					click: e.scanpay
				}
			}, [e._m(0)])]), e._v(" "), a("group", {}, [a("cell", {
				attrs: {
					title: "我的余额",
					value: "￥" + e.userInfo.credit2,
					link: "/Home/Credit/"
				}
			}, [a("span", {
				staticClass: "storex-balance",
				slot: "icon"
			})]), e._v(" "), a("cell", {
				attrs: {
					title: "我的积分",
					value: e.userInfo.credit1,
					link: e.extend.plugin_list && e.extend.plugin_list.wn_storex_plugin_credit_mall ? "/Home/CreditStore/" : ""
				}
			}, [a("span", {
				staticClass: "storex storex-integral",
				slot: "icon"
			})]), e._v(" "), a("cell", {
				attrs: {
					title: "我的订单",
					link: "/Home/OrderList/"
				}
			}, [a("span", {
				staticClass: "storex-order",
				slot: "icon"
			})]), e._v(" "), 1 == e.extend.card ? a("cell", {
				attrs: {
					title: "我的优惠券",
					link: "/Home/MyCouponList/"
				}
			}, [a("span", {
				staticClass: "storex storex-card",
				slot: "icon"
			})]) : e._e()], 1), e._v(" "), a("group", [1 == e.extend.sign ? a("cell", {
				attrs: {
					title: "签到",
					value: "",
					link: "/Home/Sign"
				}
			}, [a("span", {
				staticClass: "storex storex-sign",
				slot: "icon"
			})]) : e._e(), e._v(" "), a("cell", {
				attrs: {
					title: "消息",
					value: "",
					link: "/Home/Message"
				}
			}, [a("span", {
				staticClass: "storex storex-message",
				slot: "icon"
			}), e._v(" "), a("div", {
				staticClass: "badge-value",
				slot: "value"
			}, [e.extend.notice_unread_num ? a("badge", {
				attrs: {
					text: e.extend.notice_unread_num
				}
			}) : e._e()], 1)])], 1), e._v(" "), a("group", {}, [e.userInfo.clerk ? a("cell", {
				attrs: {
					title: "店铺管理",
					link: "/Home/Clerk/Index"
				}
			}, [a("span", {
				staticClass: "storex-set",
				slot: "icon"
			})]) : e._e(), e._v(" "), a("cell", {
				attrs: {
					title: "设置",
					link: "/Home/UserInfo"
				}
			}, [a("span", {
				staticClass: "storex-set",
				slot: "icon"
			})])], 1)], 1)])
		},
		staticRenderFns: [function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("a", [a("i", {
				staticClass: "storex-payment"
			}), e._v(" "), a("span", [e._v("付款")])])
		}]
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-x-switch weui-cell weui-cell_switch"
			}, [a("div", {
				staticClass: "weui-cell__bd"
			}, [a("label", {
				staticClass: "weui-label",
				style: e.labelStyle,
				domProps: {
					innerHTML: e._s(e.title)
				}
			}), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()], 1), e._v(" "), a("div", {
				staticClass: "weui-cell__ft"
			}, [a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				staticClass: "weui-switch",
				attrs: {
					type: "checkbox",
					disabled: e.disabled
				},
				domProps: {
					checked: Array.isArray(e.currentValue) ? e._i(e.currentValue, null) > -1 : e.currentValue
				},
				on: {
					click: function(t) {
						var a = e.currentValue,
							n = t.target,
							r = !! n.checked;
						if (Array.isArray(a)) {
							var i = null,
								l = e._i(a, i);
							r ? l < 0 && (e.currentValue = a.concat(i)) : l > -1 && (e.currentValue = a.slice(0, l).concat(a.slice(l + 1)))
						} else e.currentValue = r
					}
				}
			})])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-tab-item",
				class: [e.currentSelected ? e.activeClass : "",
				{
					"vux-tab-selected": e.currentSelected,
					"vux-tab-disabled": e.disabled
				}],
				style: e.style,
				on: {
					click: e.onItemClick
				}
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-swiper-item"
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "order",
				staticStyle: {
					height: "100%",
					position: "relative"
				}
			}, [a("div", {
				staticClass: "weui-tab__panel vux-fix-safari-overflow-scrolling"
			}, [a("group", [a("cell", {
				attrs: {
					title: "兑换名称",
					value: e.orderInfo.title
				}
			})], 1), e._v(" "), a("group", {
				attrs: {
					title: "房源信息"
				}
			}, [e.orderInfo.extra ? a("cell", {
				attrs: {
					title: "房源名称",
					value: e.orderInfo.extra.title
				}
			}) : e._e(), e._v(" "), a("cell", {
				attrs: {
					title: "消耗"
				}
			}, [a("span", {
				staticClass: "storex",
				class: "credit2" == e.orderInfo.credittype ? "storex-balance" : "storex-integral"
			}), e._v(" "), a("span", {
				staticClass: "num c-active"
			}, [e._v(e._s(e.orderInfo.credit))])])], 1), e._v(" "), a("group", {
				attrs: {
					title: "配送信息"
				}
			}, [a("cell", {
				attrs: {
					title: "配送地址",
					value: e.address.province + e.address.city + e.address.district + e.address.address
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "联系人",
					value: e.address.username
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "联系电话",
					value: e.address.mobile
				}
			})], 1), e._v(" "), a("group", {
				attrs: {
					title: "订单状态"
				}
			}, [a("cell", {
				attrs: {
					title: "订单状态"
				}
			}, [a("span", {
				staticClass: "c-active"
			}, [e._v(e._s(e.statusType[e.address.status]))])])], 1)], 1), e._v(" "), a("flexbox", {
				staticClass: "weui-tabbar tabbar-buy wn-tabbar"
			}, [1 == e.address.status ? a("flexbox-item", [a("x-button", {
				attrs: {
					type: "warn"
				},
				nativeOn: {
					click: function(t) {
						e.Confirm(t)
					}
				}
			}, [e._v("确认收货")])], 1) : e._e()], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-tab",
				class: {
					"vux-tab-no-animate": !e.animate
				}
			}, [e._t("default"), e._v(" "), e.animate ? a("div", {
				staticClass: "vux-tab-ink-bar",
				class: e.barClass,
				style: e.barStyle
			}, [e.customBarWidth ? a("span", {
				staticClass: "vux-tab-bar-inner",
				style: e.innerBarStyle
			}) : e._e()]) : e._e()], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-search-box",
				class: {
					"vux-search-fixed": e.isFixed
				},
				style: {
					top: e.isFixed ? e.top : "",
					position: e.fixPosition
				}
			}, [a("div", {
				staticClass: "weui-search-bar",
				class: {
					"weui-search-bar_focusing": !e.isCancel || e.currentValue
				}
			}, [a("form", {
				staticClass: "weui-search-bar__form",
				attrs: {
					action: "."
				},
				on: {
					submit: function(t) {
						t.preventDefault(), e.$emit("on-submit", e.value)
					}
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.isFixed && e.autoFixed,
					expression: "!isFixed && autoFixed"
				}],
				staticClass: "vux-search-mask",
				on: {
					click: e.touch
				}
			}), e._v(" "), a("div", {
				staticClass: "weui-search-bar__box"
			}, [a("i", {
				staticClass: "weui-icon-search"
			}), e._v(" "), a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "weui-search-bar__input",
				attrs: {
					type: "search",
					id: "search_input_" + e.uuid,
					placeholder: e.placeholder,
					autocomplete: "off",
					required: e.required
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					focus: e.onFocus,
					blur: e.onBlur,
					input: function(t) {
						t.target.composing || (e.currentValue = t.target.value)
					}
				}
			}), e._v(" "), a("a", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.currentValue,
					expression: "currentValue"
				}],
				staticClass: "weui-icon-clear",
				attrs: {
					href: "javascript:"
				},
				on: {
					click: e.clear
				}
			})]), e._v(" "), a("label", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.isFocus && !e.value,
					expression: "!isFocus && !value"
				}],
				staticClass: "weui-search-bar__label",
				attrs: {
					for :"search_input_" + e.uuid
				}
			}, [a("i", {
				staticClass: "weui-icon-search"
			}), e._v(" "), a("span", [e._v(e._s(e.placeholder || "搜索"))])])]), e._v(" "), a("a", {
				staticClass: "weui-search-bar__cancel-btn",
				attrs: {
					href: "javascript:"
				},
				on: {
					click: e.cancel
				}
			}, [e._v(e._s(e.cancelText || "取消"))]), e._v(" "), e._t("right")], 2), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.isFixed,
					expression: "isFixed"
				}],
				staticClass: "weui-cells vux-search_show"
			}, [e._t("default"), e._v(" "), e._l(e.results, function(t) {
				return a("div", {
					staticClass: "weui-cell weui-cell_access",
					on: {
						click: function(a) {
							e.handleResultClick(t)
						},
						touchmove: function(e) {
							e.preventDefault()
						}
					}
				}, [a("div", {
					staticClass: "weui-cell__bd weui-cell_primary"
				}, [a("p", [e._v(e._s(t.title))])])])
			})], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("li", {
				staticClass: "wn-indexsection"
			}, [a("p", {
				staticClass: "wn-indexsection-index"
			}, [e._v(e._s(e.index))]), e._v(" "), a("ul", [e._t("default")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticStyle: {
					width: "100%",
					height: "100%"
				},
				attrs: {
					id: "allmap"
				}
			}, [e.center ? e._e() : a("p", [e._v("没有坐标")]), e._v("\n\t" + e._s(e.center.lng) + "\n")])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-loadmore",
				class: {
					"weui-loadmore_line": !e.showLoading,
					"weui-loadmore_dot": !e.showLoading && !e.tip
				}
			}, [e.showLoading ? a("i", {
				staticClass: "weui-loading"
			}) : e._e(), e._v(" "), a("span", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.tip || !e.showLoading,
					expression: "tip || !showLoading"
				}],
				staticClass: "weui-loadmore__tips",
				style: e.getStyle()
			}, [e._v(e._s(e.tip))])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-actionsheet"
			}, [a("transition", {
				attrs: {
					name: "vux-actionsheet-mask"
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.show,
					expression: "show"
				}],
				staticClass: "weui-mask weui-mask_transparent",
				on: {
					click: e.onClickingMask
				}
			})]), e._v(" "), a("div", {
				staticClass: "weui-actionsheet",
				class: {
					"weui-actionsheet_toggle": e.show
				}
			}, [a("div", {
				staticClass: "weui-actionsheet__menu"
			}, e._l(e.menus, function(t, n) {
				return a("div", {
					staticClass: "weui-actionsheet__cell",
					class: "vux-actionsheet-menu-" + (t.type || "default"),
					domProps: {
						innerHTML: e._s(t.label || t)
					},
					on: {
						click: function(a) {
							e.onMenuClick(t, n)
						}
					}
				})
			})), e._v(" "), e.showCancel ? a("div", {
				staticClass: "weui-actionsheet__action",
				on: {
					click: function(t) {
						e.emitEvent("on-click-menu", "cancel")
					}
				}
			}, [a("div", {
				staticClass: "weui-actionsheet__cell"
			}, [e._v(e._s(e.cancelText || "取消"))])]) : e._e()])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "credit-store"
			}, [a("group", {}, [a("card", {
				attrs: {
					header: {
						title: "我的积分"
					}
				}
			}, [a("div", {
				staticClass: "card-demo-flex card-demo-content01",
				slot: "content"
			}, [a("div", {
				staticClass: "vux-1px-r"
			}, [e._v("\n\t\t\t\t\t积分"), a("span", {
				staticClass: "c-active"
			}, [e._v(e._s(e.userInfo.credit1))])]), e._v(" "), a("div", {
				staticClass: "vux-1px-r"
			}, [a("router-link", {
				attrs: {
					to: "/Home/CreditStoreMine",
					tag: "span"
				}
			}, [e._v("兑换记录")])], 1), e._v(" "), a("div", {}, [a("router-link", {
				attrs: {
					to: "/Home/CouponList",
					tag: "span"
				}
			}, [e._v("卡券兑换")])], 1)])])], 1), e._v(" "), a("div", {
				staticClass: "credit-store-box"
			}, [a("card", {
				attrs: {
					header: {
						title: "积分商城"
					}
				}
			}, [a("div", {
				staticClass: "credit-store-list",
				slot: "content"
			}, e._l(e.creditList, function(t) {
				return a("router-link", {
					staticClass: "credit-store-item",
					attrs: {
						to: "/Home/CreditStoreDetail/" + t.id,
						tag: "div"
					}
				}, [a("div", {
					staticClass: "box"
				}, [a("div", {
					staticClass: "title wn-goods-title"
				}, [e._v("\n\t\t\t\t\t\t\t" + e._s(t.title) + "\n\t\t\t\t\t\t")]), e._v(" "), a("div", {
					staticClass: "credit"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.thumb,
						expression: "item.thumb"
					}],
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("span", {
					staticClass: "storex",
					class: "credit2" == t.credittype ? "storex-balance" : "storex-integral"
				}, [a("i", {
					staticClass: "c-active"
				}, [e._v(e._s(t.credit))])])])])])
			}))])], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "comment"
			}, [a("scroller", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.status,
					expression: "status"
				}],
				ref: "commentScroller",
				attrs: {
					"lock-x": "",
					"scrollbar-y": "",
					bounce: "",
					"use-pullup": "",
					height: "-50",
					"pullup-config": e.pullupConfigs
				},
				domProps: {
					value: e.status
				},
				on: {
					"on-pullup-loading": e.update,
					input: function(t) {
						e.status = t
					}
				}
			}, [a("div", {
				staticClass: "weui-panel weui-panel_access"
			}, [a("div", {
				staticClass: "weui-panel__hd"
			}, [e._v("全部评论")]), e._v(" "), a("div", {
				staticClass: "weui-panel__bd"
			}, e._l(e.commentList, function(t) {
				return a("div", {
					staticClass: "weui-media-box weui-media-box_text wn-content"
				}, [t.user_info ? a("div", {
					staticClass: "weui-media-box__title"
				}, [a("div", {
					staticStyle: {
						float: "left"
					}
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.user_info.avatar,
						expression: "comment.user_info.avatar"
					}],
					staticClass: "avatar",
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("div", {
					staticStyle: {
						display: "inline-block"
					}
				}, [a("p", {
					staticClass: "nickname wn-content-title"
				}, [e._v(e._s(t.user_info.nickname))]), e._v(" "), a("p", {
					staticClass: "wn-goods-sub"
				}, [e._v(e._s(t.createtime))])])]), e._v(" "), a("div", {
					staticClass: "pull-right level"
				}, [a("rater", {
					attrs: {
						value: e._f("commentLevel")(t.comment_level),
						star: "☻",
						"font-size": 20,
						"active-color": "#f86b4f",
						disabled: ""
					}
				})], 1)]) : e._e(), e._v(" "), a("div", {
					staticClass: "weui-media-box__desc wn-content"
				}, [e._v("\n\t\t\t\t\t\t" + e._s(t.comment) + "\n\t\t\t\t\t")]), e._v(" "), a("p", {
					staticClass: "weui-media-box__info wn-goods-sub"
				}, [a("i", {
					staticClass: "storex-tag"
				}), e._v(e._s(t.title))])])
			}))]), e._v(" "), 0 == e.commentList.length ? a("divider", [e._v("暂无评论")]) : e._e(), e._v(" "), "disabled" === e.status.pullupStatus && 0 != e.commentList.length ? a("divider", [e._v("没有更多数据啦")]) : e._e()], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "clerk-room-list"
			}, [a("div", {
				staticStyle: {
					height: "40px"
				}
			}, [a("sticky", {
				staticStyle: {
					"z-index": "1",
					"background-color": "#eeeff3"
				},
				attrs: {
					"scroll-box": "vux_view_box_body",
					"check-sticky-support": !1
				}
			}, [a("group", {
				staticClass: "clerk-select"
			}, [a("span", {
				staticClass: "storex-store"
			}), e._v(" "), a("popup-radio", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.selectedStore,
					expression: "selectedStore"
				}],
				staticClass: "wn-select-down text-over",
				attrs: {
					options: e.storeList
				},
				domProps: {
					value: e.selectedStore
				},
				on: {
					input: function(t) {
						e.selectedStore = t
					}
				}
			})], 1)], 1)], 1), e._v(" "), a("div", {}, e._l(e.evenRoomList, function(t) {
				return a("div", {
					staticClass: "weui-panel weui-panel_access"
				}, [a("div", {
					staticClass: "weui-panel__bd"
				}, [a("router-link", {
					staticClass: "weui-media-box weui-media-box_appmsg",
					staticStyle: {
						"align-items": "flex-start"
					},
					attrs: {
						to: "/Home/CLerk/RoomInfo/" + t.id,
						tag: "div"
					}
				}, [a("div", {
					staticClass: "weui-media-box__hd"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.thumb,
						expression: "room.thumb"
					}],
					staticClass: "weui-media-box__thumb",
					attrs: {
						alt: ""
					}
				})]), e._v(" "), a("div", {
					staticClass: "weui-media-box__bd"
				}, [a("h4", {
					staticClass: "weui-media-box__title title wn-goods-title"
				}, [e._v(e._s(t.title))]), e._v(" "), a("div", {
					staticClass: "c-active"
				}, [e._v("￥" + e._s(t.cprice))]), e._v(" "), a("span", {
					staticClass: "num",
					attrs: {
						hidden: ""
					}
				}, [e._v("剩余房间数：20")])])])], 1)])
			}))])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-group-tip",
				style: {
					"text-align": e.align
				}
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "clerk-room-info"
			}, [a("div", {
				staticStyle: {
					height: "100px"
				}
			}, [a("sticky", {
				staticStyle: {
					"z-index": "1"
				},
				attrs: {
					"scroll-box": "vux_view_box_body",
					"check-sticky-support": !1
				}
			}, [a("div", {
				staticClass: "head weui-cells"
			}, [a("div", {
				staticClass: "weui-cell"
			}, [a("span", {
				staticClass: "storex-store weui-cell__hd"
			}), e._v(e._s(e.title) + "\r\n\t\t\t\t")])]), e._v(" "), a("group", {
				staticClass: "select-time"
			}, [a("datetime", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.btime,
					expression: "btime"
				}],
				attrs: {
					placeholder: "开始时间",
					"start-date": e.today,
					"end-date": e.endDate,
					format: "YYYY-MM-DD",
					title: "开始时间",
					"year-row": "{value}年",
					"month-row": "{value}月",
					"day-row": "{value}日",
					"confirm-text": "完成",
					"cancel-text": "取消"
				},
				domProps: {
					value: e.btime
				},
				on: {
					input: function(t) {
						e.btime = t
					}
				}
			}), e._v(" "), a("datetime", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.etime,
					expression: "etime"
				}],
				attrs: {
					placeholder: "结束时间",
					"start-date": e.startDate,
					"end-date": e.afterMonth,
					format: "YYYY-MM-DD",
					title: "结束时间",
					"year-row": "{value}年",
					"month-row": "{value}月",
					"day-row": "{value}日",
					"confirm-text": "完成",
					"cancel-text": "取消"
				},
				domProps: {
					value: e.etime
				},
				on: {
					input: function(t) {
						e.etime = t
					}
				}
			})], 1)], 1)], 1), e._v(" "), a("div", {
				staticStyle: {
					"padding-bottom": "60px"
				}
			}, e._l(e.priceList, function(t, n) {
				return a("div", {
					staticClass: "weui-cells weui-cells_checkbox"
				}, [a("label", {
					staticClass: "weui-cell weui-check__label vux-checklist-label-left"
				}, [a("div", {
					staticClass: "weui-cell__hd"
				}, [a("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.timeList,
						expression: "timeList"
					}],
					staticClass: "weui-check",
					attrs: {
						type: "checkbox",
						name: "checkbox1"
					},
					domProps: {
						value: n,
						checked: Array.isArray(e.timeList) ? e._i(e.timeList, n) > -1 : e.timeList
					},
					on: {
						click: function(t) {
							var a = e.timeList,
								r = t.target,
								i = !! r.checked;
							if (Array.isArray(a)) {
								var l = n,
									u = e._i(a, l);
								i ? u < 0 && (e.timeList = a.concat(l)) : u > -1 && (e.timeList = a.slice(0, u).concat(a.slice(u + 1)))
							} else e.timeList = i
						}
					}
				}), e._v(" "), a("i", {
					staticClass: "weui-icon-checked"
				})]), e._v(" "), a("div", {
					staticClass: "weui-cell__bd"
				}, [a("p", [e._v("时   间： " + e._s(n))]), e._v(" "), a("p", [e._v("前台价： " + e._s(t.oprice))]), e._v(" "), a("p", [e._v("优惠价： " + e._s(t.cprice))]), e._v(" "), a("p", [e._v("房   量： " + e._s(t.num == -1 ? "无限" : 0 == t.num ? "无房" : t.num))])])])])
			})), e._v(" "), a("div", {
				staticClass: "footer border-before"
			}, [a("x-button", {
				staticClass: "weui-btn weui-btn_warn",
				attrs: {
					type: "button",
					name: "button",
					disabled: !e.timeList.length
				},
				nativeOn: {
					click: function(t) {
						e.showPop = !0
					}
				}
			}, [e._v("批量修改")])], 1), e._v(" "), a("div", {
				directives: [{
					name: "transfer-dom",
					rawName: "v-transfer-dom"
				}]
			}, [a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showPop,
					expression: "showPop"
				}],
				staticStyle: {
					"padding-bottom": "20px"
				},
				attrs: {
					"is-transparent": ""
				},
				domProps: {
					value: e.showPop
				},
				on: {
					input: function(t) {
						e.showPop = t
					}
				}
			}, [a("div", {
				staticClass: "pop-room-info"
			}, [a("group", [a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.oprice,
					expression: "oprice"
				}],
				attrs: {
					title: "前台价",
					placeholder: "前台价",
					type: "number"
				},
				domProps: {
					value: e.oprice
				},
				on: {
					input: function(t) {
						e.oprice = e._n(t)
					},
					blur: function(t) {
						e.$forceUpdate()
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.cprice,
					expression: "cprice"
				}],
				attrs: {
					title: "优惠价",
					placeholder: "优惠价",
					type: "number"
				},
				domProps: {
					value: e.cprice
				},
				on: {
					input: function(t) {
						e.cprice = e._n(t)
					},
					blur: function(t) {
						e.$forceUpdate()
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.num,
					expression: "num"
				}],
				attrs: {
					title: "房间量",
					placeholder: "房量为0为无房 房量为-1为无限",
					type: "number"
				},
				domProps: {
					value: e.num
				},
				on: {
					input: function(t) {
						e.num = e._n(t)
					},
					blur: function(t) {
						e.$forceUpdate()
					}
				}
			})], 1), e._v(" "), a("div", {
				staticStyle: {
					padding: "20px 15px"
				}
			}, [a("x-button", {
				attrs: {
					type: "warn"
				},
				nativeOn: {
					click: function(t) {
						e.change(t)
					}
				}
			}, [e._v("修改")]), e._v(" "), a("x-button", {
				nativeOn: {
					click: function(t) {
						e.showPop = !1
					}
				}
			}, [e._v("取消")])], 1)], 1)])], 1)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-rater"
			}, [a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				staticStyle: {
					display: "none"
				},
				domProps: {
					value: e._s(e.currentValue)
				},
				on: {
					input: function(t) {
						t.target.composing || (e.currentValue = t.target.value)
					}
				}
			}), e._v(" "), e._l(e.max, function(t) {
				return a("a", {
					staticClass: "vux-rater-box",
					class: {
						"is-active": e.currentValue > t - 1
					},
					style: {
						color: e.colors && e.colors[t - 1] ? e.colors[t - 1] : "#ccc",
						marginRight: e.margin + "px",
						fontSize: e.fontSize + "px",
						width: e.fontSize + "px",
						height: e.fontSize + "px",
						lineHeight: e.fontSize + "px"
					},
					on: {
						click: function(a) {
							e.handleClick(t - 1)
						}
					}
				}, [a("span", {
					staticClass: "vux-rater-inner"
				}, [e._v(e._s(e.star)), e.cutPercent > 0 && e.cutIndex === t - 1 ? a("span", {
					staticClass: "vux-rater-outer",
					style: {
						color: e.activeColor,
						width: e.cutPercent + "%"
					}
				}, [e._v(e._s(e.star))]) : e._e()])])
			})], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "add-address bg-popup"
			}, [a("group", {
				attrs: {
					"label-width": "4em",
					"label-margin-right": "2em",
					"label-align": "left"
				}
			}, [a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.address.username,
					expression: "address.username"
				}],
				attrs: {
					title: "收货人",
					placeholder: "请输入收货人"
				},
				domProps: {
					value: e.address.username
				},
				on: {
					input: function(t) {
						e.address.username = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.address.mobile,
					expression: "address.mobile"
				}],
				attrs: {
					title: "联系电话",
					placeholder: "请输入联系电话"
				},
				domProps: {
					value: e.address.mobile
				},
				on: {
					input: function(t) {
						e.address.mobile = t
					}
				}
			}), e._v(" "), a("x-address", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.addressValue,
					expression: "addressValue"
				}],
				attrs: {
					title: "地址地区",
					placeholder: "",
					"raw-value": "",
					list: e.addressData
				},
				domProps: {
					value: e.addressValue
				},
				on: {
					input: function(t) {
						e.addressValue = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.address.address,
					expression: "address.address"
				}],
				attrs: {
					title: "详细地址",
					placeholder: "请输入详细地址"
				},
				domProps: {
					value: e.address.address
				},
				on: {
					input: function(t) {
						e.address.address = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.address.zipcode,
					expression: "address.zipcode"
				}],
				attrs: {
					title: "邮政编码",
					placeholder: "邮政编码"
				},
				domProps: {
					value: e.address.zipcode
				},
				on: {
					input: function(t) {
						e.address.zipcode = t
					}
				}
			})], 1), e._v(" "), a("div", {
				staticClass: "weui-btn-area"
			}, [a("a", {
				staticClass: "weui-btn weui-btn_warn",
				on: {
					click: e.post
				}
			}, [e._v("确认")])])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("button", {
				staticClass: "vux-swipeout-button",
				class: {
					"vux-swipeout-button-primary": "primary" === e.type,
					"vux-swipeout-button-warn": "warn" === e.type,
					"vux-swipeout-button-default": "default" === e.type
				},
				style: {
					width: e.width + "px",
					backgroundColor: e.backgroundColor
				},
				attrs: {
					type: "button"
				},
				on: {
					click: e.onButtonClick
				}
			}, [e._t("default", [e._v(e._s(e.text))])], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("span", {
				class: ["vux-badge",
				{
					"vux-badge-single": "undefined" != typeof e.text && 1 === e.text.toString().length
				}],
				domProps: {
					textContent: e._s(e.text)
				}
			})
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "order",
				staticStyle: {
					height: "100%",
					position: "relative"
				}
			}, [a("div", {
				staticClass: "weui-tab__panel vux-fix-safari-overflow-scrolling",
				staticStyle: {
					"padding-bottom": "50px"
				}
			}, [a("group", [a("cell", {
				attrs: {
					title: e.storeinfo.title,
					value: "进入店铺",
					link: "/StoreIndex/" + e.storeinfo.id
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: e.orderinfo.style,
					value: "×" + e.orderinfo.nums + "  ￥" + e.orderinfo.sum_price
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "总计:￥" + e.orderinfo.sum_price,
					value: "应付:￥" + e.orderinfo.sum_price
				}
			})], 1), e._v(" "), e.orderinfo.store_info && 1 == e.orderinfo.store_info.store_type ? a("group", {
				attrs: {
					title: "入住信息"
				}
			}, [a("cell", {
				attrs: {
					title: "入住人",
					value: e.orderinfo.contact_name
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "手机号",
					value: e.orderinfo.mobile
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "入住时间",
					value: e.orderinfo.btime
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "备注",
					value: e.orderinfo.remark
				}
			})], 1) : e._e(), e._v(" "), e.orderinfo.store_info && 0 == e.orderinfo.store_info.store_type && e.orderinfo.mode_distribute ? a("group", {
				attrs: {
					title: "配送信息"
				}
			}, [a("cell", {
				attrs: {
					title: "配送方式",
					value: 1 == e.orderinfo.mode_distribute ? "自提" : "配送"
				}
			}), e._v(" "), 2 == e.orderinfo.mode_distribute ? a("cell", {
				attrs: {
					title: "期望时间",
					value: e.orderinfo.order_time
				}
			}) : e._e(), e._v(" "), 2 == e.orderinfo.mode_distribute ? a("cell", {
				attrs: {
					title: "配送地址",
					value: e.orderinfo.address
				}
			}) : e._e()], 1) : e._e(), e._v(" "), a("group", {
				attrs: {
					title: "订单信息"
				}
			}, [a("cell", {
				attrs: {
					title: "订单号码",
					value: e.orderinfo.ordersn
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "订单时间",
					value: e.orderinfo.time
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "订单状态",
					value: e.orderinfo.order_status
				}
			})], 1), e._v(" "), e.orderinfo.express_name ? a("group", {
				attrs: {
					title: "配送信息"
				}
			}, [a("cell", {
				attrs: {
					title: e.orderinfo.express_name,
					value: e.orderinfo.track_number
				}
			})], 1) : e._e()], 1), e._v(" "), a("flexbox", {
				staticClass: "weui-tabbar tabbar-buy wn-tabbar",
				staticStyle: {
					"padding-bottom": "50px"
				}
			}, [1 == e.orderinfo.is_pay ? a("flexbox-item", [a("router-link", {
				attrs: {
					to: "/Pay/" + e.orderinfo.id
				}
			}, [a("x-button", {
				attrs: {
					type: "warn"
				}
			}, [e._v("立即支付")])], 1)], 1) : e._e(), e._v(" "), 1 == e.orderinfo.is_cancle ? a("flexbox-item", [a("x-button", {
				attrs: {
					type: "reserve"
				},
				nativeOn: {
					click: function(t) {
						e.Cancle(t)
					}
				}
			}, [e._v("取消订单")])], 1) : e._e(), e._v(" "), 1 == e.orderinfo.is_confirm ? a("flexbox-item", [a("x-button", {
				attrs: {
					type: "warn"
				},
				nativeOn: {
					click: function(t) {
						e.Confirm(t)
					}
				}
			}, [e._v("确认收货")])], 1) : e._e(), e._v(" "), "1" == e.orderinfo.is_over ? a("flexbox-item", [a("router-link", {
				attrs: {
					to: "/Category/" + e.storeinfo.id
				}
			}, [a("x-button", {
				attrs: {
					type: "warn"
				}
			}, [e._v("再来一单")])], 1)], 1) : e._e(), e._v(" "), 1 == e.orderinfo.is_comment ? a("flexbox-item", [a("x-button", {
				attrs: {
					type: "reserve"
				},
				nativeOn: {
					click: function(t) {
						e.show = !0
					}
				}
			}, [e._v("评价订单")])], 1) : e._e()], 1), e._v(" "), a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.show,
					expression: "show"
				}],
				staticClass: "comment-post",
				attrs: {
					height: "100%"
				},
				domProps: {
					value: e.show
				},
				on: {
					input: function(t) {
						e.show = t
					}
				}
			}, [a("div", {
				staticClass: "comment-post bg-popup"
			}, [a("div", {
				staticClass: "comment-rater"
			}, [a("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: e.orderinfo.thumb,
					expression: "orderinfo.thumb"
				}],
				staticClass: "thumb",
				attrs: {
					alt: ""
				}
			}), e._v(" "), a("div", {
				staticClass: "level"
			}, [a("p", [e._v("评价")]), e._v(" "), a("p", [a("rater", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.comment_level,
					expression: "comment_level"
				}],
				staticClass: "star",
				attrs: {
					"font-size": 30,
					star: "☻"
				},
				domProps: {
					value: e.comment_level
				},
				on: {
					input: function(t) {
						e.comment_level = t
					}
				}
			})], 1)])]), e._v(" "), a("div", {
				staticClass: "comment"
			}, [a("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.comment,
					expression: "comment"
				}],
				staticClass: "weui-textarea bg-input",
				attrs: {
					autocomplete: "off",
					autocapitalize: "off",
					autocorrect: "off",
					spellcheck: "false",
					rows: "8",
					placeholder: "添加评论",
					cols: "30"
				},
				domProps: {
					value: e._s(e.comment)
				},
				on: {
					input: function(t) {
						t.target.composing || (e.comment = t.target.value)
					}
				}
			})]), e._v(" "), a("div", {
				staticClass: "submit"
			}, [a("x-button", {
				attrs: {
					type: "warn"
				},
				nativeOn: {
					click: function(t) {
						e.commentPost(t)
					}
				}
			}, [e._v("提交")]), e._v(" "), a("x-button", {
				attrs: {
					type: "reserve"
				},
				nativeOn: {
					click: function(t) {
						e.show = !1
					}
				}
			}, [e._v("取消")])], 1)])])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-picker"
			}, [a("flexbox", {
				attrs: {
					gutter: 0
				}
			}, e._l(e.currentData, function(t, n) {
				return a("flexbox-item", {
					key: n,
					staticStyle: {
						"margin-left": "0"
					},
					attrs: {
						span: e.columnWidth && e.columnWidth[n]
					}
				}, [a("div", {
					staticClass: "vux-picker-item",
					attrs: {
						id: "vux-picker-" + e.uuid + "-" + n
					}
				})])
			}))], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-slider"
			}, [a("div", {
				staticClass: "vux-swiper",
				style: {
					height: e.xheight
				}
			}, [e._t("default"), e._v(" "), e._l(e.list, function(t, n) {
				return a("div", {
					staticClass: "vux-swiper-item",
					attrs: {
						"data-index": n
					},
					on: {
						click: function(a) {
							e.clickListItem(t)
						}
					}
				}, [a("a", {
					attrs: {
						href: "javascript:"
					}
				}, [a("div", {
					staticClass: "vux-img",
					style: {
						backgroundImage: e.buildBackgroundUrl(t.img)
					}
				}), e._v(" "), e.showDescMask ? a("p", {
					staticClass: "vux-swiper-desc"
				}, [e._v(e._s(t.title))]) : e._e()])])
			})], 2), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showDots,
					expression: "showDots"
				}],
				class: [e.dotsClass, "vux-indicator", "vux-indicator-" + e.dotsPosition]
			}, e._l(e.length, function(t) {
				return a("a", {
					attrs: {
						href: "javascript:"
					}
				}, [a("i", {
					staticClass: "vux-icon-dot",
					class: {
						active: t - 1 === e.current
					}
				})])
			}))])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "recharge bg-popup"
			}, [a("div", {
				staticClass: "sum-panel"
			}, [a("checker", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.recharge,
					expression: "recharge"
				}],
				staticClass: "weui-flex",
				attrs: {
					"default-item-class": "weui-flex__item",
					"selected-item-class": "selected"
				},
				domProps: {
					value: e.recharge
				},
				on: {
					input: function(t) {
						e.recharge = t
					}
				}
			}, [e._l(e.cardRecharge, function(t, n) {
				return a("checker-item", {
					key: n,
					attrs: {
						value: t
					}
				}, [a("div", {
					staticClass: "recharge-item"
				}, [a("div", {
					staticClass: "par-value"
				}, [e._v(e._s(t.condition) + "元")]), e._v(" "), a("div", {
					staticClass: "donate"
				}, [e._v("赠送" + e._s(t.back) + e._s(t.backunit))])])])
			}), e._v(" "), a("checker-item", {
				key: "-1",
				staticClass: "other-sum",
				attrs: {
					value: e.other
				},
				on: {
					"on-item-click": e.focus
				}
			}, [a("div", {
				staticClass: "recharge-item"
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: 2 != e.recharge.backtype,
					expression: "recharge.backtype != 2"
				}],
				staticClass: "par-value"
			}, [e._v("其他金额")]), e._v(" "), a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.recharge.condition,
					expression: "recharge.condition"
				}],
				ref: "rechargeInput",
				staticClass: "weui-input",
				attrs: {
					name: "",
					type: "number",
					min: "0"
				},
				domProps: {
					value: e._s(e.recharge.condition)
				},
				on: {
					input: function(t) {
						t.target.composing || (e.recharge.condition = e._n(t.target.value))
					},
					blur: function(t) {
						e.$forceUpdate()
					}
				}
			})])])], 2), e._v(" "), a("group", [a("cell", {
				attrs: {
					title: "支付金额",
					value: "￥" + e.recharge.condition
				}
			})], 1), e._v(" "), a("group", [a("x-button", {
				attrs: {
					type: "warn"
				},
				nativeOn: {
					click: function(t) {
						e.rechargepost(t)
					}
				}
			}, [e._v("确定")])], 1)], 1)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "store"
			}, [a("index-list", {
				class: e.listClass
			}, [e.showNow ? a("index-section", {
				staticClass: "wn-city-wrap ",
				attrs: {
					index: "当前"
				}
			}, [a("p", {
				staticClass: "wn-city-location"
			}, [a("span", {
				on: {
					click: function(t) {
						e.selectlocation()
					}
				}
			}, [e._v(e._s(e.BMapData && e.BMapData.address ? e.BMapData.address : " "))]), e._v(" "), a("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.locationMore,
					expression: "locationMore"
				}],
				staticClass: "weui-loading"
			}), e._v(" "), a("a", {
				staticStyle: {
					float: "right"
				},
				on: {
					click: e.mapLocation,
					touchstart: e.mapLocation
				}
			}, [e._v("定位")])])]) : e._e(), e._v(" "), e._l(e.cityJson, function(t, n) {
				return a("index-section", {
					staticClass: "wn-city-wrap",
					attrs: {
						index: n
					}
				}, e._l(t, function(t) {
					return a("li", {
						staticClass: "wn-city-grid",
						attrs: {
							title: t.name + "市"
						},
						on: {
							click: function(a) {
								e.select(t)
							}
						}
					}, [e._v(" " + e._s(t.name))])
				}))
			})], 2)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-cell-box"
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showCell,
					expression: "showCell"
				}],
				staticClass: "weui-cell vux-tap-active weui-cell_access",
				on: {
					click: e.onClick
				}
			}, [a("div", {
				staticClass: "weui-cell__hd"
			}, [e.title ? a("label", {
				staticClass: "weui-label",
				style: {
					display: "block",
					width: e.$parent.labelWidth || e.$parent.$parent.labelWidth,
					textAlign: e.$parent.labelAlign || e.$parent.$parent.labelAlign,
					marginRight: e.$parent.labelMarginRight || e.$parent.$parent.labelMarginRight
				},
				domProps: {
					innerHTML: e._s(e.title)
				}
			}) : e._e(), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()], 1), e._v(" "), a("div", {
				staticClass: "vux-cell-primary vux-popup-picker-select-box"
			}, [a("div", {
				staticClass: "vux-popup-picker-select",
				style: {
					textAlign: e.valueTextAlign
				}
			}, [e.displayFormat || e.showName || !e.value.length ? e._e() : a("span", {
				staticClass: "vux-popup-picker-value"
			}, [e._v(e._s(e._f("array2string")(e.value)))]), e._v(" "), !e.displayFormat && e.showName && e.value.length ? a("span", {
				staticClass: "vux-popup-picker-value"
			}, [e._v(e._s(e._f("value2name")(e.value, e.data)))]) : e._e(), e._v(" "), e.displayFormat && e.value.length ? a("span", {
				staticClass: "vux-popup-picker-value"
			}, [e._v(e._s(e.displayFormat(e.value, e.value2name(e.value, e.data))))]) : e._e(), e._v(" "), !e.value.length && e.placeholder ? a("span", {
				staticClass: "vux-popup-picker-placeholder",
				domProps: {
					innerHTML: e._s(e.placeholder)
				}
			}) : e._e()])]), e._v(" "), a("div", {
				staticClass: "weui-cell__ft"
			})]), e._v(" "), a("div", {
				directives: [{
					name: "transfer-dom",
					rawName: "v-transfer-dom",
					value: e.isTransferDom,
					expression: "isTransferDom"
				}]
			}, [a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showValue,
					expression: "showValue"
				}],
				staticClass: "vux-popup-picker",
				attrs: {
					id: "vux-popup-picker-" + e.uuid
				},
				domProps: {
					value: e.showValue
				},
				on: {
					"on-hide": e.onPopupHide,
					"on-show": e.onPopupShow,
					input: function(t) {
						e.showValue = t
					}
				}
			}, [a("div", {
				staticClass: "vux-popup-picker-container"
			}, [a("div", {
				staticClass: "vux-popup-picker-header"
			}, [a("flexbox", [a("flexbox-item", {
				staticClass: "vux-popup-picker-header-menu vux-popup-picker-cancel",
				nativeOn: {
					click: function(t) {
						e.onHide(!1)
					}
				}
			}, [e._v(e._s(e.cancelText || "取消"))]), e._v(" "), a("flexbox-item", {
				staticClass: "vux-popup-picker-header-menu vux-popup-picker-header-menu-right",
				nativeOn: {
					click: function(t) {
						e.onHide(!0)
					}
				}
			}, [e._v(e._s(e.confirmText || "完成"))])], 1)], 1), e._v(" "), a("picker", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.tempValue,
					expression: "tempValue"
				}],
				attrs: {
					data: e.data,
					columns: e.columns,
					"fixed-columns": e.fixedColumns,
					container: "#vux-popup-picker-" + e.uuid,
					"column-width": e.columnWidth
				},
				domProps: {
					value: e.tempValue
				},
				on: {
					"on-change": e.onPickerChange,
					input: function(t) {
						e.tempValue = t
					}
				}
			})], 1)])], 1)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-swipeout-item",
				on: {
					touchstart: e.start,
					mousedown: e.start,
					touchmove: e.move,
					mousemove: e.move,
					touchend: e.end,
					mouseup: e.end,
					touchcancel: e.end
				}
			}, [a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.distX >= 0,
					expression: "distX >= 0"
				}],
				staticClass: "vux-swipeout-button-box vux-swipeout-button-box-left",
				style: e.leftButtonBoxStyle
			}, [e._t("left-menu")], 2), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.distX <= 0,
					expression: "distX <= 0"
				}],
				staticClass: "vux-swipeout-button-box",
				style: e.rightButtonBoxStyle
			}, [e._t("right-menu")], 2), e._v(" "), a("div", {
				ref: "content",
				staticClass: "vux-swipeout-content",
				style: e.styles,
				on: {
					mousedown: e.onContentClick,
					touchstart: e.onContentClick
				}
			}, [e._t("content")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "message-content",
				domProps: {
					innerHTML: e._s(e.content)
				}
			})
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-form-preview weui-form-preview"
			}, [a("div", {
				staticClass: "weui-form-preview__hd"
			}, [a("label", {
				staticClass: "weui-form-preview__label",
				domProps: {
					innerHTML: e._s(e.headerLabel)
				}
			}), e._v(" "), a("em", {
				staticClass: "weui-form-preview__value",
				domProps: {
					innerHTML: e._s(e.headerValue)
				}
			})]), e._v(" "), a("div", {
				staticClass: "weui-form-preview__bd"
			}, e._l(e.bodyItems, function(t) {
				return a("div", {
					staticClass: "weui-form-preview__item"
				}, [a("label", {
					staticClass: "weui-form-preview__label"
				}, [e._v(e._s(t.label))]), e._v(" "), a("span", {
					staticClass: "weui-form-preview__value"
				}, [e._v(e._s(t.value))])])
			})), e._v(" "), a("div", {
				staticClass: "weui-form-preview__ft"
			}, e._l(e.footerButtons, function(t) {
				return a("a", {
					staticClass: "weui-form-preview__btn",
					class: {
						"weui-form-preview__btn_default": "default" === t.style,
						"weui-form-preview__btn_primary": "primary" === t.style
					},
					attrs: {
						href: "javascript:"
					},
					on: {
						click: function(a) {
							e.onButtonClick(t.onButtonClick, t.link)
						}
					}
				}, [e._v(e._s(t.text))])
			}))])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "coupon-list bg-popup"
			}, [e.extend.plugin_list && e.extend.plugin_list.wn_storex_plugin_credit_mall ? a("router-link", {
				staticClass: "weui-btn weui-btn-exchange",
				attrs: {
					to: "/Home/CouponList"
				}
			}, [e._v("领券中心")]) : e._e(), e._v(" "), e.loading ? a("load-more", {
				attrs: {
					tip: "正在加载"
				}
			}) : e._e(), e._v(" "), e.loading || 0 != e.couponList.length ? e._e() : a("load-more", {
				attrs: {
					"show-loading": !1,
					tip: "暂无优惠券"
				}
			}), e._v(" "), e._l(e.couponList, function(t, n) {
				return 1 == e.couponSource ? a("div", {
					staticClass: "coupon-item",
					on: {
						click: function(a) {
							e.$router.push("/Home/Coupon/" + t.recid + "/" + t.id)
						}
					}
				}, [a("div", {
					staticClass: "info"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.logo_url,
						expression: "coupon.logo_url"
					}],
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("div", {
					staticClass: "content"
				}, [a("h4", {
					staticClass: "title"
				}, [e._v("\n\t\t\t\t\t" + e._s(t.title) + " " + e._s(t.sub_title) + "\n\t\t\t\t")]), e._v(" "), a("div", {
					staticClass: "explain active",
					class: {
						active: e.showMore == n,
						" text-over": e.showMore != n
					},
					on: {
						click: function(t) {
							t.stopPropagation(), e.showMore = e.showMore == n ? "-1" : n
						}
					}
				}, [e._v("\n\t\t\t\t\t" + e._s(t.description) + "\n\t\t\t\t")])])]), e._v(" "), a("div", {
					staticClass: "time"
				}, [e._v("\n\t\t\t" + e._s(t.extra_date_info) + "\n\t\t")])]) : e._e()
			}), e._v(" "), e._l(e.couponList, function(t, n) {
				return 2 == e.couponSource ? a("div", {
					staticClass: "coupon-item",
					on: {
						click: function(a) {
							e.wxCard(t)
						}
					}
				}, [a("div", {
					staticClass: "info"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.logo_url,
						expression: "coupon.logo_url"
					}],
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("div", {
					staticClass: "content"
				}, [a("h4", {
					staticClass: "title"
				}, [e._v("\n\t\t\t\t\t" + e._s(t.title) + " " + e._s(t.sub_title) + "\n\t\t\t\t\t"), a("span", {
					staticClass: "pull-right"
				}, [e._v("微信卡券" + e._s(t.code ? "已领取" : "未领取"))])]), e._v(" "), a("div", {
					staticClass: "explain active",
					class: {
						active: e.showMore == n,
						" text-over": e.showMore != n
					},
					on: {
						click: function(t) {
							t.stopPropagation(), e.showMore = e.showMore == n ? "-1" : n
						}
					}
				}, [e._v("\n\t\t\t\t\t" + e._s(t.description) + "\n\t\t\t\t")])])]), e._v(" "), a("div", {
					staticClass: "time"
				}, [e._v("\n\t\t\t" + e._s(t.extra_date_info) + "\n\t\t")])]) : e._e()
			})], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-checker-box"
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-flexbox-item",
				style: e.style
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-selector weui-cell",
				class: {
					"weui-cell_select": !e.readonly,
					"weui-cell_select-after": e.title
				}
			}, [e.title ? a("div", {
				staticClass: "weui-cell__hd"
			}, [a("label", {
				staticClass: "weui-label",
				style: {
					width: e.$parent.labelWidth,
					textAlign: e.$parent.labelAlign,
					marginRight: e.$parent.labelMarginRight
				},
				attrs: {
					for :"vux-selector-" + e.uuid
				}
			}, [e._v(e._s(e.title))])]) : e._e(), e._v(" "), e.readonly ? a("div", {
				staticClass: "weui-cell__ft vux-selector-readonly"
			}, [e._v("\n    " + e._s(e._f("findByKey")(e.value, e.processOptions)) + "\n  ")]) : a("div", {
				staticClass: "weui-cell__bd"
			}, [a("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.currentValue,
					expression: "currentValue"
				}],
				staticClass: "weui-select",
				style: {
					direction: e.direction
				},
				attrs: {
					id: "vux-selector-" + e.uuid,
					name: e.name
				},
				on: {
					change: function(t) {
						e.currentValue = Array.prototype.filter.call(t.target.options, function(e) {
							return e.selected
						}).map(function(e) {
							var t = "_value" in e ? e._value : e.value;
							return t
						})[0]
					}
				}
			}, [e.showPlaceholder ? a("option", {
				attrs: {
					value: ""
				},
				domProps: {
					selected: "undefined" == typeof e.value && e.placeholder
				}
			}, [e._v(e._s(e.placeholder))]) : e._e(), e._v(" "), !e.placeholder && ("undefined" === e.value || "" === e.value, !0) && e.isIOS && e.title ? a("option", {
				attrs: {
					disabled: ""
				}
			}) : e._e(), e._v(" "), e._l(e.processOptions, function(t) {
				return a("option", {
					domProps: {
						value: t.key
					}
				}, [e._v(e._s(t.value))])
			})], 2)])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticStyle: {
					height: "100vh"
				},
				style: {
					"background-color": e.couponInfo.color_value
				}
			}, [e.use ? e._e() : a("div", {
				staticClass: "coupon",
				style: {
					"background-color": e.couponInfo.color_value
				}
			}, [a("div", {
				staticClass: "coupon-before"
			}, [a("div", [a("div", {
				staticClass: "coupon-before-content coupon-info",
				staticStyle: {
					padding: "10px"
				}
			}, [a("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: e.couponInfo.logo_url,
					expression: "couponInfo.logo_url"
				}],
				staticClass: "avatar",
				attrs: {
					alt: ""
				}
			}), e._v(" "), a("div", {
				staticClass: "title"
			}, [e._v("\r\n\t\t\t\t\t\t" + e._s(e.couponInfo.title) + "\r\n\t\t\t\t\t")]), e._v(" "), a("div", {
				staticClass: "explain"
			}, [e._v("\r\n\t\t\t\t\t\t" + e._s(e.couponInfo.description) + "\r\n\t\t\t\t\t")]), e._v(" "), a("div", {
				staticClass: "hr"
			}), e._v(" "), a("div", {
				staticClass: "time"
			}, [a("p", {}, [e._v("\r\n\t\t\t\t\t\t\t有效期至：\r\n\t\t\t\t\t\t")]), e._v(" "), a("span", [e._v(e._s(e.couponInfo.detail_date_info))])]), e._v(" "), a("div", {
				staticClass: "price"
			}, [1 == e.couponInfo.type ? [a("div", {
				staticClass: "least-cost"
			}, [e._v("消费打" + e._s(e.couponInfo.extra.discount / 10) + "折")])] : e._e(), e._v(" "), 2 == e.couponInfo.type ? [a("div", {
				staticClass: "least-cost"
			}, [e._v("满" + e._s(e.couponInfo.extra.least_cost / 100) + "元")]), e._v(" "), a("div", {
				staticClass: "reduce-cost",
				style: {
					color: e.couponInfo.color_value
				}
			}, [e._v("立减" + e._s(e.couponInfo.extra.reduce_cost / 100) + "元")])] : e._e(), e._v(" "), a("a", {
				staticClass: "weui-btn",
				style: {
					"background-color": e.couponInfo.color_value
				},
				on: {
					click: function(t) {
						e.use = !0
					}
				}
			}, [e._v("立即使用")])], 2)])])]), e._v(" "), e._m(0), e._v(" "), a("div", {
				staticClass: "coupon-after"
			}, [a("div", {}, [a("div", {
				staticClass: "weui-cell vux-tap-active weui-cell_access",
				on: {
					click: function(t) {
						e.showDiscount = !e.showDiscount
					}
				}
			}, [a("div", {
				staticClass: "weui-cell__hd"
			}), e._v(" "), e._m(1), e._v(" "), a("div", {
				staticClass: "weui-cell__ft"
			})]), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showDiscount,
					expression: "showDiscount"
				}],
				staticClass: "coupon-discount",
				on: {
					click: function(t) {
						e.showDiscount = !1
					}
				}
			}, [a("div", {
				staticClass: "weui-form-preview__bd"
			}, [a("div", {
				staticClass: "weui-form-preview__item"
			}, [a("label", {
				staticClass: "weui-form-preview__label"
			}, [e._v("电话")]), e._v(" "), a("span", {
				staticClass: "weui-form-preview__value",
				staticStyle: {
					"text-align": "left"
				}
			}, [e._v(e._s(e.couponInfo.service_phone))])]), e._v(" "), a("div", {
				staticClass: "weui-form-preview__item"
			}, [a("label", {
				staticClass: "weui-form-preview__label"
			}, [e._v("优惠说明")]), e._v(" "), a("span", {
				staticClass: "weui-form-preview__value",
				staticStyle: {
					"text-align": "left"
				}
			}, [e._v(e._s(e.couponInfo.discount_info))])]), e._v(" "), a("div", {
				staticClass: "weui-form-preview__item"
			}, [a("label", {
				staticClass: "weui-form-preview__label"
			}, [e._v("使用须知")]), e._v(" "), a("span", {
				staticClass: "weui-form-preview__value",
				staticStyle: {
					"text-align": "left"
				}
			}, [a("p", [e._v(e._s(e.couponInfo.limit_info))]), e._v(" "), a("p", [e._v(e._s(e.couponInfo.store_info))])])])])])])])]), e._v(" "), e.use ? a("div", {
				staticClass: "coupon",
				style: {
					"background-color": e.couponInfo.color_value
				},
				on: {
					click: function(t) {
						e.use = !1
					}
				}
			}, [a("div", {
				staticClass: "coupon-before"
			}, [a("div", [a("div", {
				staticClass: "coupon-before-content coupon-use",
				staticStyle: {
					padding: "10px"
				}
			}, [a("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: e.couponInfo.logo_url,
					expression: "couponInfo.logo_url"
				}],
				staticClass: "avatar",
				attrs: {
					alt: ""
				}
			}), e._v(" "), a("div", {
				staticClass: "title"
			}, [e._v("\r\n\t\t\t\t\t\t" + e._s(e.couponInfo.description) + "\r\n\t\t\t\t\t")]), e._v(" "), a("div", {
				staticClass: "time"
			}, [e._v("\r\n\t\t\t\t\t\t有效期至" + e._s(e.couponInfo.detail_date_info) + "\r\n\t\t\t\t\t")]), e._v(" "), a("div", {
				staticClass: "hr"
			}), e._v(" "), a("div", {
				staticClass: "qrcode"
			}, [a("qrcode", {
				attrs: {
					value: e.couponInfo.code,
					type: "img"
				}
			})], 1)])])]), e._v(" "), a("div", {
				staticClass: "coupon-after"
			}, [a("div", {}, [a("div", {
				staticClass: "coupon-code"
			}, [e._v("\r\n\t\t\t\t\t店员可使用微信扫描上边二维码进行核销\r\n\t\t\t\t\t"), a("div", {}, [e._v("\r\n\t\t\t\t\t\tcode码：" + e._s(e.couponInfo.code) + "\r\n\t\t\t\t\t")])])])])]) : e._e(), e._v(" "), e.use ? a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !1,
					expression: "false"
				}],
				staticClass: "coupon-cancel"
			}, [a("group", [a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.pass,
					expression: "pass"
				}],
				attrs: {
					title: "店员密码",
					type: "password",
					placeholder: "请输入店员密码"
				},
				domProps: {
					value: e.pass
				},
				on: {
					input: function(t) {
						e.pass = t
					}
				}
			})], 1), e._v(" "), a("a", {
				staticClass: "weui-btn weui-btn_submit",
				style: {
					"background-color": e.couponInfo.color_value
				}
			}, [e._v("确定核销")])], 1) : e._e()])
		},
		staticRenderFns: [function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticStyle: {
					margin: "0 10px",
					"background-color": "#fff"
				}
			}, [a("div", {
				staticClass: "hr"
			})])
		}, function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "vux-cell-bd vux-cell-primary"
			}, [a("p", [e._v("\r\n\t\t\t\t\t\t\t详情说明\r\n\t\t\t\t\t\t")]), e._v(" "), a("span", {
				staticClass: "vux-label-desc"
			})])
		}]
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-tabbar"
			}, [e._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "store-detail"
			}, [a("swiper", {
				attrs: {
					loop: "",
					"dots-position": "center"
				}
			}, e._l(e.storeInfo.detail_thumbs, function(e) {
				return a("swiper-item", {
					staticClass: "slider"
				}, [a("img", {
					attrs: {
						src: e,
						alt: ""
					}
				})])
			})), e._v(" "), a("group", [a("cell", {
				attrs: {
					title: "用户评论",
					link: "/Comment/" + e.storeInfo.id
				}
			}), e._v(" "), e.storeInfo.address ? a("cell", {
				attrs: {
					title: e.storeInfo.address,
					"is-link": ""
				},
				nativeOn: {
					click: function(t) {
						e.openMap(t)
					}
				}
			}) : e._e()], 1), e._v(" "), a("div", {
				staticClass: "store-info"
			}, [a("div", {
				domProps: {
					innerHTML: e._s(e.storeInfo.store_info)
				}
			})]), e._v(" "), a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showMap,
					expression: "showMap"
				}],
				attrs: {
					height: "100%"
				},
				domProps: {
					value: e.showMap
				},
				on: {
					input: function(t) {
						e.showMap = t
					}
				}
			}, [a("x-header", {
				attrs: {
					"left-options": {
						showBack: !1
					}
				}
			}, [a("a", {
				on: {
					click: function(t) {
						e.showMap = !1
					}
				},
				slot: "left"
			}, [e._v("Close")]), e._v(e._s(e.storeInfo.name))]), e._v(" "), a("baidu-map", {
				staticClass: "map",
				attrs: {
					center: e.map
				}
			})], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t, a) {
	var n = a(0)(a(198), a(314), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(199), a(351), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(200), a(333), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(262);
	var n = a(0)(a(201), a(315), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(261);
	var n = a(0)(a(202), a(313), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(284);
	var n = a(0)(a(203), a(349), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(204), a(347), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(205), a(367), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(206), a(323), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(207), a(324), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(275);
	var n = a(0)(a(208), a(338), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(281);
	var n = a(0)(a(209), a(345), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(264);
	var n = a(0)(a(210), a(318), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(256);
	var n = a(0)(a(211), a(306), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(212), a(321), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(273);
	var n = a(0)(a(213), a(334), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(214), a(303), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(215), a(361), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(216), a(363), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(287);
	var n = a(0)(a(217), a(354), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(257);
	var n = a(0)(a(218), a(308), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(219), a(307), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(290);
	var n = a(0)(a(220), a(357), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(260);
	var n = a(0)(a(221), a(312), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(222), a(326), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(253);
	var n = a(0)(a(223), a(302), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(254);
	var n = a(0)(a(224), a(304), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(282);
	var n = a(0)(a(225), a(346), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(270);
	var n = a(0)(a(226), a(329), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(297);
	var n = a(0)(a(227), a(369), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(228), a(316), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(269);
	var n = a(0)(a(229), a(328), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(230), a(342), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(291);
	var n = a(0)(a(231), a(358), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(271);
	var n = a(0)(a(232), a(331), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(278);
	var n = a(0)(a(233), a(341), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(280);
	var n = a(0)(a(167), a(344), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(265);
	var n = a(0)(a(171), a(319), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(111);
	var n = a(0)(a(83), a(134), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(293);
	var n = a(0)(a(174), a(362), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(258);
	var n = a(0)(a(176), a(309), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(288);
	var n = a(0)(a(177), a(355), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(179), a(330), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(295);
	var n = a(0)(a(183), a(366), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(185), a(352), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(a(186), a(360), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(272);
	var n = a(0)(null, a(332), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(283);
	var n = a(0)(a(193), a(348), null, null);
	e.exports = n.exports
}, , function(e, t) {
	e.exports = {
		A: [{
			id: "152900",
			name: "阿拉善盟"
		}, {
			id: "210300",
			name: "鞍山市"
		}, {
			id: "340800",
			name: "安庆市"
		}, {
			id: "410500",
			name: "安阳市"
		}, {
			id: "513200",
			name: "阿坝藏族羌族自治州"
		}, {
			id: "520400",
			name: "安顺市"
		}, {
			id: "542500",
			name: "阿里地区"
		}, {
			id: "610900",
			name: "安康市"
		}, {
			id: "652900",
			name: "阿克苏地区"
		}, {
			id: "654300",
			name: "阿勒泰地区"
		}, {
			id: "820100",
			name: "澳门半岛"
		}, {
			id: "659002",
			name: "阿拉尔市"
		}],
		B: [{
			id: "110100",
			name: "北京市"
		}, {
			id: "130600",
			name: "保定市"
		}, {
			id: "150200",
			name: "包头市"
		}, {
			id: "150800",
			name: "巴彦淖尔市"
		}, {
			id: "210500",
			name: "本溪市"
		}, {
			id: "220600",
			name: "白山市"
		}, {
			id: "220800",
			name: "白城市"
		}, {
			id: "340300",
			name: "蚌埠市"
		}, {
			id: "341600",
			name: "亳州市"
		}, {
			id: "371600",
			name: "滨州市"
		}, {
			id: "450500",
			name: "北海市"
		}, {
			id: "451000",
			name: "百色市"
		}, {
			id: "511900",
			name: "巴中市"
		}, {
			id: "522400",
			name: "毕节地区"
		}, {
			id: "530500",
			name: "保山市"
		}, {
			id: "610300",
			name: "宝鸡市"
		}, {
			id: "620400",
			name: "白银市"
		}, {
			id: "652700",
			name: "博尔塔拉蒙古自治州"
		}, {
			id: "652800",
			name: "巴音郭楞蒙古自治州"
		}],
		C: [{
			id: "130800",
			name: "承德市"
		}, {
			id: "130900",
			name: "沧州市"
		}, {
			id: "140400",
			name: "长治市"
		}, {
			id: "150400",
			name: "赤峰市"
		}, {
			id: "220100",
			name: "长春市"
		}, {
			id: "320400",
			name: "常州市"
		}, {
			id: "341100",
			name: "滁州市"
		}, {
			id: "341400",
			name: "巢湖市"
		}, {
			id: "341700",
			name: "池州市"
		}, {
			id: "430100",
			name: "长沙市"
		}, {
			id: "430700",
			name: "常德市"
		}, {
			id: "431000",
			name: "郴州市"
		}, {
			id: "445100",
			name: "潮州市"
		}, {
			id: "451400",
			name: "崇左市"
		}, {
			id: "500100",
			name: "重庆市"
		}, {
			id: "510100",
			name: "成都市"
		}, {
			id: "532300",
			name: "楚雄彝族自治州"
		}, {
			id: "542100",
			name: "昌都地区"
		}, {
			id: "652300",
			name: "昌吉回族自治州"
		}],
		D: [{
			id: "140200",
			name: "大同市"
		}, {
			id: "210200",
			name: "大连市"
		}, {
			id: "210600",
			name: "丹东市"
		}, {
			id: "230600",
			name: "大庆市"
		}, {
			id: "232700",
			name: "大兴安岭地区"
		}, {
			id: "370500",
			name: "东营市"
		}, {
			id: "371400",
			name: "德州市"
		}, {
			id: "441900",
			name: "东莞市"
		}, {
			id: "510600",
			name: "德阳市"
		}, {
			id: "511700",
			name: "达州市"
		}, {
			id: "532900",
			name: "大理白族自治州"
		}, {
			id: "533100",
			name: "德宏傣族景颇族自治州"
		}, {
			id: "533400",
			name: "迪庆藏族自治州"
		}, {
			id: "621100",
			name: "定西市"
		}, {
			id: "469003",
			name: "儋州市"
		}],
		E: [{
			id: "150600",
			name: "鄂尔多斯市"
		}, {
			id: "420700",
			name: "鄂州市"
		}, {
			id: "422800",
			name: "恩施土家族苗族自治州"
		}],
		F: [{
			id: "210400",
			name: "抚顺市"
		}, {
			id: "210900",
			name: "阜新市"
		}, {
			id: "341200",
			name: "阜阳市"
		}, {
			id: "350100",
			name: "福州市"
		}, {
			id: "361000",
			name: "抚州市"
		}, {
			id: "440600",
			name: "佛山市"
		}, {
			id: "450600",
			name: "防城港市"
		}],
		G: [{
			id: "360700",
			name: "赣州市"
		}, {
			id: "440100",
			name: "广州市"
		}, {
			id: "450300",
			name: "桂林市"
		}, {
			id: "450800",
			name: "贵港市"
		}, {
			id: "510800",
			name: "广元市"
		}, {
			id: "511600",
			name: "广安市"
		}, {
			id: "513300",
			name: "甘孜藏族自治州"
		}, {
			id: "520100",
			name: "贵阳市"
		}, {
			id: "623000",
			name: "甘南藏族自治州"
		}, {
			id: "632600",
			name: "果洛藏族自治州"
		}, {
			id: "640400",
			name: "固原市"
		}, {
			id: "710200",
			name: "高雄市"
		}, {
			id: "712300",
			name: "高雄县"
		}],
		H: [{
			id: "130400",
			name: "邯郸市"
		}, {
			id: "131100",
			name: "衡水市"
		}, {
			id: "150100",
			name: "呼和浩特市"
		}, {
			id: "150700",
			name: "呼伦贝尔市"
		}, {
			id: "211400",
			name: "葫芦岛市"
		}, {
			id: "230100",
			name: "哈尔滨市"
		}, {
			id: "230400",
			name: "鹤岗市"
		}, {
			id: "231100",
			name: "黑河市"
		}, {
			id: "320800",
			name: "淮安市"
		}, {
			id: "330100",
			name: "杭州市"
		}, {
			id: "330500",
			name: "湖州市"
		}, {
			id: "340100",
			name: "合肥市"
		}, {
			id: "340400",
			name: "淮南市"
		}, {
			id: "340600",
			name: "淮北市"
		}, {
			id: "341000",
			name: "黄山市"
		}, {
			id: "371700",
			name: "菏泽市"
		}, {
			id: "410600",
			name: "鹤壁市"
		}, {
			id: "420200",
			name: "黄石市"
		}, {
			id: "421100",
			name: "黄冈市"
		}, {
			id: "430400",
			name: "衡阳市"
		}, {
			id: "431200",
			name: "怀化市"
		}, {
			id: "441300",
			name: "惠州市"
		}, {
			id: "441600",
			name: "河源市"
		}, {
			id: "451100",
			name: "贺州市"
		}, {
			id: "451200",
			name: "河池市"
		}, {
			id: "460100",
			name: "海口市"
		}, {
			id: "532500",
			name: "红河哈尼族彝族自治州"
		}, {
			id: "610700",
			name: "汉中市"
		}, {
			id: "632100",
			name: "海东地区"
		}, {
			id: "632200",
			name: "海北藏族自治州"
		}, {
			id: "632300",
			name: "黄南藏族自治州"
		}, {
			id: "632500",
			name: "海南藏族自治州"
		}, {
			id: "632800",
			name: "海西蒙古族藏族自治州"
		}, {
			id: "652200",
			name: "哈密地区"
		}, {
			id: "653200",
			name: "和田地区"
		}, {
			id: "712600",
			name: "花莲县"
		}],
		J: [{
			id: "140500",
			name: "晋城市"
		}, {
			id: "140700",
			name: "晋中市"
		}, {
			id: "210700",
			name: "锦州市"
		}, {
			id: "220200",
			name: "吉林市"
		}, {
			id: "230300",
			name: "鸡西市"
		}, {
			id: "230800",
			name: "佳木斯市"
		}, {
			id: "330400",
			name: "嘉兴市"
		}, {
			id: "330700",
			name: "金华市"
		}, {
			id: "360200",
			name: "景德镇市"
		}, {
			id: "360400",
			name: "九江市"
		}, {
			id: "360800",
			name: "吉安市"
		}, {
			id: "370100",
			name: "济南市"
		}, {
			id: "370800",
			name: "济宁市"
		}, {
			id: "410800",
			name: "焦作市"
		}, {
			id: "420800",
			name: "荆门市"
		}, {
			id: "421000",
			name: "荆州市"
		}, {
			id: "440700",
			name: "江门市"
		}, {
			id: "445200",
			name: "揭阳市"
		}, {
			id: "620200",
			name: "嘉峪关市"
		}, {
			id: "620300",
			name: "金昌市"
		}, {
			id: "620900",
			name: "酒泉市"
		}, {
			id: "710500",
			name: "金门县"
		}, {
			id: "710700",
			name: "基隆市"
		}, {
			id: "710900",
			name: "嘉义市"
		}, {
			id: "810200",
			name: "九龙"
		}, {
			id: "410881",
			name: "济源市"
		}, {
			id: "711900",
			name: "嘉义县"
		}],
		K: [{
			id: "410200",
			name: "开封市"
		}, {
			id: "530100",
			name: "昆明市"
		}, {
			id: "650200",
			name: "克拉玛依"
		}, {
			id: "653000",
			name: "克孜勒苏柯尔克孜自治州"
		}, {
			id: "653100",
			name: "喀什地区"
		}],
		L: [{
			id: "131000",
			name: "廊坊市"
		}, {
			id: "141000",
			name: "临汾市"
		}, {
			id: "141100",
			name: "吕梁市"
		}, {
			id: "211000",
			name: "辽阳市"
		}, {
			id: "220400",
			name: "辽源市"
		}, {
			id: "320700",
			name: "连云港市"
		}, {
			id: "331100",
			name: "丽水市"
		}, {
			id: "341500",
			name: "六安市"
		}, {
			id: "350800",
			name: "龙岩市"
		}, {
			id: "371200",
			name: "莱芜市"
		}, {
			id: "371300",
			name: "临沂市"
		}, {
			id: "371500",
			name: "聊城市"
		}, {
			id: "410300",
			name: "洛阳市"
		}, {
			id: "431300",
			name: "娄底市"
		}, {
			id: "450200",
			name: "柳州市"
		}, {
			id: "451300",
			name: "来宾市"
		}, {
			id: "510500",
			name: "泸州市"
		}, {
			id: "511100",
			name: "乐山市"
		}, {
			id: "513400",
			name: "凉山彝族自治州"
		}, {
			id: "520200",
			name: "六盘水市"
		}, {
			id: "530700",
			name: "丽江市"
		}, {
			id: "530900",
			name: "临沧市"
		}, {
			id: "540100",
			name: "拉萨市"
		}, {
			id: "542600",
			name: "林芝地区"
		}, {
			id: "620100",
			name: "兰州市"
		}, {
			id: "621200",
			name: "陇南市"
		}, {
			id: "622900",
			name: "临夏回族自治州"
		}, {
			id: "820200",
			name: "离岛"
		}],
		M: [{
			id: "231000",
			name: "牡丹江"
		}, {
			id: "340500",
			name: "马鞍山"
		}, {
			id: "440900",
			name: "茂名市"
		}, {
			id: "441400",
			name: "梅州市"
		}, {
			id: "510700",
			name: "绵阳市"
		}, {
			id: "511400",
			name: "眉山市"
		}, {
			id: "711500",
			name: "苗栗县"
		}],
		N: [{
			id: "320100",
			name: "南京市"
		}, {
			id: "320600",
			name: "南通市"
		}, {
			id: "330200",
			name: "宁波市"
		}, {
			id: "350700",
			name: "南平市"
		}, {
			id: "350900",
			name: "宁德市"
		}, {
			id: "360100",
			name: "南昌市"
		}, {
			id: "411300",
			name: "南阳市"
		}, {
			id: "450100",
			name: "南宁市"
		}, {
			id: "511000",
			name: "内江市"
		}, {
			id: "511300",
			name: "南充市"
		}, {
			id: "533300",
			name: "怒江傈僳族自治州"
		}, {
			id: "542400",
			name: "那曲地区"
		}, {
			id: "710600",
			name: "南投县"
		}],
		P: [{
			id: "211100",
			name: "盘锦市"
		}, {
			id: "350300",
			name: "莆田市"
		}, {
			id: "360300",
			name: "萍乡市"
		}, {
			id: "410400",
			name: "平顶山市"
		}, {
			id: "410900",
			name: "濮阳市"
		}, {
			id: "510400",
			name: "攀枝花市"
		}, {
			id: "530800",
			name: "普洱市"
		}, {
			id: "620800",
			name: "平凉市"
		}, {
			id: "712400",
			name: "屏东县"
		}, {
			id: "712700",
			name: "澎湖县"
		}],
		Q: [{
			id: "130300",
			name: "秦皇岛市"
		}, {
			id: "230200",
			name: "齐齐哈尔市"
		}, {
			id: "230900",
			name: "七台河市"
		}, {
			id: "330800",
			name: "衢州市"
		}, {
			id: "350500",
			name: "泉州市"
		}, {
			id: "370200",
			name: "青岛市"
		}, {
			id: "441800",
			name: "清远市"
		}, {
			id: "450700",
			name: "钦州市"
		}, {
			id: "522300",
			name: "黔西南布依族苗族自治州"
		}, {
			id: "522600",
			name: "黔东南苗族侗族自治州"
		}, {
			id: "522700",
			name: "黔南布依族苗族自治州"
		}, {
			id: "530300",
			name: "曲靖市"
		}, {
			id: "621000",
			name: "庆阳市"
		}, {
			id: "429005",
			name: "潜江市"
		}],
		R: [{
			id: "371100",
			name: "日照市"
		}, {
			id: "542300",
			name: "日喀则地区"
		}],
		S: [{
			id: "130100",
			name: "石家庄市"
		}, {
			id: "140600",
			name: "朔州市"
		}, {
			id: "210100",
			name: "沈阳市"
		}, {
			id: "220300",
			name: "四平市"
		}, {
			id: "220700",
			name: "松原市"
		}, {
			id: "230500",
			name: "双鸭山市"
		}, {
			id: "231200",
			name: "绥化市"
		}, {
			id: "310100",
			name: "上海市"
		}, {
			id: "320500",
			name: "苏州市"
		}, {
			id: "321300",
			name: "宿迁市"
		}, {
			id: "330600",
			name: "绍兴市"
		}, {
			id: "341300",
			name: "宿州市"
		}, {
			id: "350400",
			name: "三明市"
		}, {
			id: "361100",
			name: "上饶市"
		}, {
			id: "411200",
			name: "三门峡市"
		}, {
			id: "411400",
			name: "商丘市"
		}, {
			id: "420300",
			name: "十堰市"
		}, {
			id: "421300",
			name: "随州市"
		}, {
			id: "430500",
			name: "邵阳市"
		}, {
			id: "440200",
			name: "韶关市"
		}, {
			id: "440300",
			name: "深圳市"
		}, {
			id: "440500",
			name: "汕头市"
		}, {
			id: "441500",
			name: "汕尾市"
		}, {
			id: "460200",
			name: "三亚市"
		}, {
			id: "510900",
			name: "遂宁市"
		}, {
			id: "542200",
			name: "山南地区"
		}, {
			id: "611000",
			name: "商洛市"
		}, {
			id: "640200",
			name: "石嘴山市"
		}, {
			id: "429021",
			name: "神农架林区"
		}, {
			id: "659001",
			name: "石河子市"
		}, {
			id: "460300",
			name: "三沙市"
		}],
		T: [{
			id: "120100",
			name: "天津市"
		}, {
			id: "130200",
			name: "唐山市"
		}, {
			id: "140100",
			name: "太原市"
		}, {
			id: "150500",
			name: "通辽市"
		}, {
			id: "211200",
			name: "铁岭市"
		}, {
			id: "220500",
			name: "通化市"
		}, {
			id: "321200",
			name: "泰州市"
		}, {
			id: "331000",
			name: "台州市"
		}, {
			id: "340700",
			name: "铜陵市"
		}, {
			id: "370900",
			name: "泰安市"
		}, {
			id: "411100",
			name: "漯河市"
		}, {
			id: "522200",
			name: "铜仁地区"
		}, {
			id: "610200",
			name: "铜川市"
		}, {
			id: "620500",
			name: "天水市"
		}, {
			id: "652100",
			name: "吐鲁番地区"
		}, {
			id: "654200",
			name: "塔城地区"
		}, {
			id: "710100",
			name: "台北市"
		}, {
			id: "710300",
			name: "台南市"
		}, {
			id: "710400",
			name: "台中市"
		}, {
			id: "429006",
			name: "天门市"
		}, {
			id: "659003",
			name: "图木舒克市"
		}, {
			id: "711100",
			name: "台北县"
		}, {
			id: "711400",
			name: "桃园县"
		}, {
			id: "711600",
			name: "台中县"
		}, {
			id: "712200",
			name: "台南县"
		}, {
			id: "712500",
			name: "台东县"
		}],
		W: [{
			id: "150300",
			name: "乌海市"
		}, {
			id: "150900",
			name: "乌兰察布市"
		}, {
			id: "320200",
			name: "无锡市"
		}, {
			id: "330300",
			name: "温州市"
		}, {
			id: "340200",
			name: "芜湖市"
		}, {
			id: "370700",
			name: "潍坊市"
		}, {
			id: "371000",
			name: "威海市"
		}, {
			id: "420100",
			name: "武汉市"
		}, {
			id: "450400",
			name: "梧州市"
		}, {
			id: "532600",
			name: "文山壮族苗族自治州"
		}, {
			id: "610500",
			name: "渭南市"
		}, {
			id: "620600",
			name: "武威市"
		}, {
			id: "640300",
			name: "吴忠市"
		}, {
			id: "650100",
			name: "乌鲁木齐市"
		}, {
			id: "659004",
			name: "五家渠市"
		}],
		X: [{
			id: "130500",
			name: "邢台市"
		}, {
			id: "140900",
			name: "忻州市"
		}, {
			id: "152200",
			name: "兴安盟"
		}, {
			id: "152500",
			name: "锡林郭勒盟"
		}, {
			id: "320300",
			name: "徐州市"
		}, {
			id: "341800",
			name: "宣城市"
		}, {
			id: "350200",
			name: "厦门市"
		}, {
			id: "360500",
			name: "新余市"
		}, {
			id: "410700",
			name: "新乡市"
		}, {
			id: "411000",
			name: "许昌市"
		}, {
			id: "411500",
			name: "信阳市"
		}, {
			id: "420600",
			name: "襄樊市"
		}, {
			id: "420900",
			name: "孝感市"
		}, {
			id: "421200",
			name: "咸宁市"
		}, {
			id: "430300",
			name: "湘潭市"
		}, {
			id: "433100",
			name: "湘西土家族苗族自治州"
		}, {
			id: "532800",
			name: "西双版纳傣族自治州"
		}, {
			id: "610100",
			name: "西安市"
		}, {
			id: "610400",
			name: "咸阳市"
		}, {
			id: "630100",
			name: "西宁市"
		}, {
			id: "710800",
			name: "新竹市"
		}, {
			id: "810100",
			name: "香港岛"
		}, {
			id: "810300",
			name: "新界市"
		}, {
			id: "429004",
			name: "仙桃市"
		}, {
			id: "711300",
			name: "新竹县"
		}],
		Y: [{
			id: "140300",
			name: "阳泉市"
		}, {
			id: "140800",
			name: "运城市"
		}, {
			id: "210800",
			name: "营口市"
		}, {
			id: "222400",
			name: "延边朝鲜族自治州"
		}, {
			id: "230700",
			name: "伊春市"
		}, {
			id: "320900",
			name: "盐城市"
		}, {
			id: "321000",
			name: "扬州市"
		}, {
			id: "360600",
			name: "鹰潭市"
		}, {
			id: "360900",
			name: "宜春市"
		}, {
			id: "370600",
			name: "烟台市"
		}, {
			id: "420500",
			name: "宜昌市"
		}, {
			id: "430600",
			name: "岳阳市"
		}, {
			id: "430900",
			name: "益阳市"
		}, {
			id: "431100",
			name: "永州市"
		}, {
			id: "441700",
			name: "阳江市"
		}, {
			id: "445300",
			name: "云浮市"
		}, {
			id: "450900",
			name: "玉林市"
		}, {
			id: "511500",
			name: "宜宾市"
		}, {
			id: "511800",
			name: "雅安市"
		}, {
			id: "530400",
			name: "玉溪市"
		}, {
			id: "610600",
			name: "延安市"
		}, {
			id: "610800",
			name: "榆林市"
		}, {
			id: "632700",
			name: "玉树藏族自治州"
		}, {
			id: "640100",
			name: "银川市"
		}, {
			id: "654000",
			name: "伊犁哈萨克自治州"
		}, {
			id: "711200",
			name: "宜兰县"
		}, {
			id: "712100",
			name: "云林县"
		}],
		Z: [{
			id: "130700",
			name: "张家口"
		}, {
			id: "211300",
			name: "朝阳市"
		}, {
			id: "321100",
			name: "镇江市"
		}, {
			id: "330900",
			name: "舟山市"
		}, {
			id: "350600",
			name: "漳州市"
		}, {
			id: "370300",
			name: "淄博市"
		}, {
			id: "370400",
			name: "枣庄市"
		}, {
			id: "410100",
			name: "郑州市"
		}, {
			id: "411600",
			name: "周口市"
		}, {
			id: "411700",
			name: "驻马店市"
		}, {
			id: "430200",
			name: "株洲市"
		}, {
			id: "430800",
			name: "张家界市"
		}, {
			id: "440400",
			name: "珠海市"
		}, {
			id: "440800",
			name: "湛江市"
		}, {
			id: "441200",
			name: "肇庆市"
		}, {
			id: "442000",
			name: "中山市"
		}, {
			id: "510300",
			name: "自贡市"
		}, {
			id: "512000",
			name: "资阳市"
		}, {
			id: "520300",
			name: "遵义市"
		}, {
			id: "530600",
			name: "昭通市"
		}, {
			id: "620700",
			name: "张掖市"
		}, {
			id: "640500",
			name: "中卫市"
		}, {
			id: "711700",
			name: "彰化县"
		}]
	}
}, function(e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
	a(594);
	var n = a(0)(a(508), a(628), null, null);
	e.exports = n.exports
}, , , , , , , , , , function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(385),
		i = n(r),
		l = a(396),
		u = n(l),
		s = a(390),
		o = n(s),
		c = a(389),
		p = n(c),
		m = a(370),
		v = n(m),
		d = a(371),
		f = n(d),
		h = a(379),
		_ = n(h),
		g = a(384),
		x = n(g),
		w = a(392),
		b = n(w),
		y = a(393),
		C = n(y),
		k = a(394),
		S = n(k),
		M = a(395),
		I = n(M),
		$ = a(386),
		A = n($),
		O = a(387),
		V = n(O),
		T = a(391),
		R = n(T),
		P = a(643),
		N = n(P),
		L = a(401),
		D = n(L),
		E = a(400),
		B = n(E),
		F = a(399),
		j = n(F),
		H = a(397),
		z = n(H),
		Y = a(639),
		W = n(Y),
		G = a(640),
		X = n(G),
		U = a(642),
		q = n(U),
		Z = a(641),
		J = n(Z),
		Q = a(638),
		K = n(Q),
		ee = a(398),
		te = n(ee),
		ae = a(637),
		ne = n(ae),
		re = a(378),
		ie = n(re),
		le = a(377),
		ue = n(le),
		se = a(388),
		oe = n(se),
		ce = a(372),
		pe = n(ce),
		me = a(374),
		ve = n(me),
		de = a(373),
		fe = n(de),
		he = a(375),
		_e = n(he),
		ge = a(376),
		xe = n(ge),
		we = a(381),
		be = n(we),
		ye = a(382),
		Ce = n(ye),
		ke = a(383),
		Se = n(ke),
		Me = a(380),
		Ie = n(Me),
		$e = [{
			path: "/",
			component: N.
		default,
			children:
			[{
				path: "/Home/Index",
				component: i.
			default,
				name:
				"Home",
				meta: {
					pageTitle: "个人中心",
					hasTabbar: !0
				}
			}, {
				path: "/Home/UserInfo",
				name: "UserInfo",
				component: u.
			default,
				meta:
				{
					pageTitle: "个人信息",
					hasTabbar: !0
				}
			}, {
				path: "/Home/OrderList",
				name: "UserOrder",
				component: o.
			default,
				meta:
				{
					pageTitle: "订单列表",
					hasTabbar: !0
				}
			}, {
				path: "/Home/OrderInfo/:oid",
				name: "OrderInfo",
				component: p.
			default,
				meta:
				{
					pageTitle: "订单信息",
					hasTabbar: !0
				}
			}, {
				path: "/Home/Address",
				name: "Address",
				component: v.
			default,
				meta:
				{
					pageTitle: "地址信息",
					hasTabbar: !0
				}
			}, {
				path: "/Home/AddressEdit/:id",
				name: "AddressEdit",
				component: f.
			default,
				meta:
				{
					pageTitle: "编辑地址",
					hasTabbar: !0
				}
			}, {
				path: "/Home/CreditsRecord",
				name: "CreditsRecord",
				component: x.
			default,
				meta:
				{
					pageTitle: "余额记录",
					hasTabbar: !0
				}
			}, {
				path: "/Home/Credit",
				name: "Credit",
				component: _.
			default,
				meta:
				{
					pageTitle: "余额",
					hasTabbar: !0
				}
			}, {
				path: "/Home/Recharge",
				name: "Recharge",
				component: b.
			default,
				meta:
				{
					pageTitle: "充值",
					hasTabbar: !0
				}
			}, {
				path: "/Home/RechargePay/:id",
				name: "RechargePay",
				component: C.
			default,
				meta:
				{
					pageTitle: "充值支付",
					hasTabbar: !0
				}
			}, {
				path: "/Home/Sign",
				name: "Sign",
				component: S.
			default,
				meta:
				{
					pageTitle: "签到",
					hasTabbar: !0
				}
			}, {
				path: "/Home/SignList",
				name: "SignList",
				component: I.
			default,
				meta:
				{
					pageTitle: "签到列表",
					hasTabbar: !0
				}
			}, {
				path: "/Home/Message",
				name: "Message",
				component: A.
			default,
				meta:
				{
					pageTitle: "消息列表",
					hasTabbar: !0
				}
			}, {
				path: "/Home/MessageInfo/:id",
				name: "MessageInfo",
				component: V.
			default,
				meta:
				{
					pageTitle: "消息",
					hasTabbar: !0
				}
			}, {
				path: "/Home/ReceiveCard",
				name: "ReceiveCard",
				component: R.
			default,
				meta:
				{
					pageTitle: "领取会员卡"
				}
			}, {
				path: "",
				redirect: {
					path: "/wechat_redirect"
				}
			}, {
				path: "/:ss",
				name: "StoreList",
				component: D.
			default,
				meta:
				{
					pageTitle: "店铺列表"
				}
			}, {
				path: "StoreIndex/:storeid",
				name: "StoreIndex",
				component: B.
			default,
				meta:
				{
					pageTitle: "店铺首页",
					hasTabbar: !0
				}
			}, {
				path: "StoreDetail/:storeid",
				name: "StoreDetail",
				component: j.
			default,
				meta:
				{
					pageTitle: "店铺详情",
					hasTabbar: !0
				}
			}, {
				path: "Comment/:storeid",
				name: "Comment",
				component: z.
			default,
				meta:
				{
					pageTitle: "店铺评论"
				}
			}, {
				path: "Category/:storeid",
				name: "Category",
				component: W.
			default,
				meta:
				{
					pageTitle: "分类",
					hasTabbar: !0
				}
			}, {
				path: "Category/Child/:storeid/:id",
				name: "ChildCategory",
				component: X.
			default,
				meta:
				{
					pageTitle: "子分类",
					hasTabbar: !0
				}
			}, {
				path: "Category/GoodList/:storeid/:sub_id",
				name: "GoodList",
				component: q.
			default,
				meta:
				{
					pageTitle: "房源列表",
					hasTabbar: !0
				}
			}, {
				path: "GoodInfo/:storeid/:goodsid",
				name: "GoodInfo",
				component: J.
			default,
				meta:
				{
					pageTitle: "房源信息",
					hasTabbar: !0
				}
			}, {
				path: "Buy/:storeid/:goodsid",
				name: "Buy",
				component: K.
			default,
				meta:
				{
					pageTitle: "购买",
					hasTabbar: !0
				}
			}, {
				path: "Reserve/:storeid/:goodsid",
				name: "Reserve",
				component: K.
			default,
				meta:
				{
					pageTitle: "预订",
					hasTabbar: !0
				}
			}, {
				path: "Pay/:payid",
				name: "Pay",
				component: te.
			default,
				meta:
				{
					pageTitle: "支付"
				}
			}, {
				path: "/Home/CouponList",
				name: "CouponList",
				component: ie.
			default,
				meta:
				{
					pageTitle: "卡券中心",
					hasTabbar: !0
				}
			}, {
				path: "/Home/MyCouponList",
				name: "MyCouponList",
				component: oe.
			default,
				meta:
				{
					pageTitle: "我的优惠券列表",
					hasTabbar: !0
				}
			}, {
				path: "/Home/Coupon/:recid/:couponid",
				name: "Coupon",
				component: ue.
			default,
				meta:
				{
					pageTitle: "优惠券信息",
					hasTabbar: !1
				}
			}, {
				path: "/Home/Clerk/Index",
				name: "ClerkIndex",
				component: pe.
			default,
				meta:
				{
					pageTitle: "店员首页",
					hasTabbar: !1
				}
			}, {
				path: "/Home/Clerk/OrderList",
				name: "ClerkOrderList",
				component: ve.
			default,
				meta:
				{
					pageTitle: "店员订单管理",
					hasTabbar: !1
				}
			}, {
				path: "/Home/Clerk/OrderInfo/:oid",
				name: "ClerkOrderInfo",
				component: fe.
			default,
				meta:
				{
					pageTitle: "店员订单管理",
					hasTabbar: !1
				}
			}, {
				path: "/Home/Clerk/RoomList",
				name: "ClerkRoomList",
				component: xe.
			default,
				meta:
				{
					pageTitle: "店员店铺管理",
					hasTabbar: !1
				}
			}, {
				path: "/Home/Clerk/RoomInfo/:id",
				name: "ClerkRoomInfo",
				component: _e.
			default,
				meta:
				{
					pageTitle: "店员店铺管理",
					hasTabbar: !1
				}
			}, {
				path: "/Home/CreditStore",
				name: "CreditStore",
				component: be.
			default,
				meta:
				{
					pageTitle: "积分商城",
					hasTabbar: !1
				}
			}, {
				path: "/Home/CreditStoreDetail/:id",
				name: "CreditStoreDetail",
				component: Ce.
			default,
				meta:
				{
					pageTitle: "积分商城",
					hasTabbar: !1
				}
			}, {
				path: "/Home/CreditStoreMine",
				name: "CreditStoreMine",
				component: Se.
			default,
				meta:
				{
					pageTitle: "我的兑换",
					hasTabbar: !1
				}
			}, {
				path: "/Home/CreditMineDetail/:id/:tid",
				name: "CreditMineDetail",
				component: Ie.
			default,
				meta:
				{
					pageTitle: "我的兑换",
					hasTabbar: !1
				}
			}, {
				path: "*",
				component: ne.
			default,
				name:
				"404",
				meta: {
					pageTitle: "未知错误"
				}
			}]
		}];
	t.
default = $e
}, , , , function(e, t, a) {
	a(590), a(591);
	var n = a(0)(a(513), a(626), null, null);
	e.exports = n.exports
}, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(523),
		i = n(r),
		l = ["android", "ios", "ios-small", "bubbles", "circles", "crescent", "dots", "lines", "ripple", "spiral"];
	t.
default = {
		mounted: function() {
			var e = this;
			this.$nextTick(function() {
				(0, i.
			default)(e.$el, e.type)
			})
		},
		props: {
			type: {
				type: String,
			default:
				"ios"
			}
		},
		computed: {
			className: function() {
				for (var e = {}, t = 0; t < l.length; t++) e["vux-spinner-" + l[t]] = this.type === l[t];
				return e
			}
		}
	}
}, , , , , , , , function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(2);
	t.
default = {
		components: {},
		computed: (0, i.
	default)({}, (0, l.mapState)({
			msg: function(e) {
				return e.storex.error
			}
		}))
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(15),
		i = n(r),
		l = a(8),
		u = n(l),
		s = a(1),
		o = n(s),
		c = a(31),
		p = n(c),
		m = a(11),
		v = n(m),
		d = a(10),
		f = n(d),
		h = a(4),
		_ = n(h),
		g = a(5),
		x = n(g),
		w = a(14),
		b = n(w),
		y = a(413),
		C = n(y),
		k = a(34),
		S = n(k),
		M = a(33),
		I = n(M),
		$ = a(144),
		A = n($),
		O = a(38),
		V = n(O),
		T = a(47),
		R = n(T),
		P = a(7),
		N = n(P),
		L = a(16),
		D = n(L),
		E = a(26),
		B = n(E),
		F = a(6),
		j = n(F),
		H = a(39),
		z = n(H),
		Y = a(2);
	t.
default = {
		components: {
			Flexbox: v.
		default,
			FlexboxItem:
			f.
		default,
			Group:
			_.
		default,
			Cell:
			x.
		default,
			XInput:
			b.
		default,
			Selector:
			C.
		default,
			PopupPicker:
			S.
		default,
			XAddress:
			V.
		default,
			Datetime:
			I.
		default,
			XNumber:
			A.
		default,
			XTextarea:
			R.
		default,
			Popup:
			N.
		default,
			Scroller:
			D.
		default,
			Radio:
			B.
		default,
			XButton:
			j.
		default,
			XHeader:
			z.
		default
		},
		computed: (0, o.
	default)({}, (0, Y.mapState)({
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			day: function e() {
				var e = (Date.parse(this.hotel.etime) - Date.parse(this.hotel.btime)) / 86400 / 1e3;
				return e > 0 ? e : 0
			},
			orderCouponTitle: function() {
				return this.orderCoupon !== -2 ? this.orderCoupon === -1 ? "会员卡优惠" : this.orderCoupon.title : "使用优惠券"
			},
			subtotal: function() {
				return "1" === this.goodsInfo.is_house ? Number(this.nums).mul(Number(this.goodsInfo.cprice).add(Number(this.goodsInfo.service))).mul(Number(this.day)).toFixed(2) : Number(this.nums).mul(Number(this.goodsInfo.cprice)).toFixed(2)
			},
			total: function() {
				var e = this.subtotal,
					t = this.orderCoupon;
				return t === -1 ? this.card_disounts_info && Number(this.subtotal) >= Number(this.card_disounts_info.condition) ? "1" === this.card_disounts_info.discount_type || 1 === this.card_disounts_info.discount_type ? e = Number(e).sub(Number(this.card_disounts_info.discount)) : "2" !== this.card_disounts_info.discount_type && 2 !== this.card_disounts_info.discount_type || (e = Number(e).mul(Number(this.card_disounts_info.discount)).toFixed(2)) : this.orderCoupon = -2 : !t || 1 !== t.type && "1" !== t.type ? !t || 2 !== t.type && "2" !== t.type || (t.extra && Number(this.subtotal) >= Number(t.extra.least_cost / 100) ? e = Number(e).sub(Number(t.extra.reduce_cost / 100)) : this.orderCoupon = -2) : e = Number(e).mul(Number(t.extra.discount / 100)).toFixed(2), Number(e).toFixed(2)
			},
			startDate: function() {
				if (this.hotel.btime) {
					var e = Date.parse(this.hotel.btime) / 1e3 + 86400;
					return (0, p.
				default)(new Date(1e3 * e), "YYYY-MM-DD")
				}
				var t = Date.parse(this.startDate1) / 1e3 + 86400;
				return (0, p.
			default)(new Date(1e3 * t), "YYYY-MM-DD")
			},
			endDate: function() {
				if (this.hotel.etime) {
					var e = Date.parse(this.hotel.etime) / 1e3 - 86400;
					return (0, p.
				default)(new Date(1e3 * e), "YYYY-MM-DD")
				}
				return ""
			}
		}),
		methods: {
			showaddress: function() {
				this.showadd = !0
			},
			change: function(e) {
				if (e) {
					for (var t in this.address_info) this.address_info[t].key === e && (this.addressvalue = this.address_info[t].value);
					this.showadd = !1
				}
			},
			post: function() {
				var e = this,
					t = "",
					a = "";
				"1" === this.goodsInfo.store_type && "1" === this.goodsInfo.is_house ? (a = e.checkForm(e.$refs.hotel.$children), t = e.hotel) : (a = e.checkForm(e.$refs.order.$children), t = e.order), t.nums = e.nums, this.orderCoupon === -1 ? t.coupon = {
					type: 2,
					couponid: -2
				} : "object" === (0, u.
			default)(this.orderCoupon) ? t.coupon = {
					type: 3,
					recid: this.orderCoupon.recid,
					couponid: this.orderCoupon.id
				} : t.coupon = {
					type: 1
				}, t.total = this.total, a || (this.$vux.loading.show({
					text: "生成订单"
				}), this.$http.post(this.url + "do=goods&op=order&id=" + this.storeInfo.id + "&goodsid=" + this.goodsInfo.id + "&action=" + this.action, {
					order: t
				}).then(function(t) {
					t = t.data.message, t.errno ? (e.$vux.loading.hide(), e.$vux.alert.show({
						title: "出错啦",
						content: t.message
					})) : "buy" === e.action ? setTimeout(function() {
						e.$vux.loading.hide(), e.$router.push("/Pay/" + t.message)
					}, 2e3) : "reserve" === e.action && setTimeout(function() {
						e.$vux.loading.hide(), e.$router.push("/Home/OrderInfo/" + t.message)
					}, 2e3)
				}))
			}
		},
		data: function() {
			return {
				action: /Reserve/.test(this.$route.path) ? "reserve" : "buy",
				hotel: {
					btime: "",
					etime: "",
					remark: "",
					contact_name: "",
					mobile: ""
				},
				addressvalue: "",
				nums: 1,
				showadd: !1,
				goodsInfo: "",
				address_info: [],
				order: {
					mode_distribute: "2",
					order_time: "",
					addressid: "",
					contact_name: "",
					mobile: ""
				},
				address: "",
				startDate1: (0, p.
			default)(new Date, "YYYY-MM-DD"),
				showCoupon: !1,
				couponList: {},
				orderCoupon: -2,
				card_disounts_info: {}
			}
		},
		created: function() {
			var e = this;
			this.$http.get(this.url + "do=goods&op=info", {
				params: {
					id: e.$route.params.storeid,
					goodsid: e.$route.params.goodsid
				}
			}).then(function(t) {
				if (t = t.data.message, t.errno) e.$vux.alert.show({
					title: "出错啦",
					content: t.message
				});
				else if (e.hotel.contact_name = e.order.contact_name = t.message.info.contact_name, e.hotel.mobile = e.order.mobile = t.message.info.mobile, e.goodsInfo = t.message.goods_info, e.card_disounts_info = t.message.card_disounts_info, e.couponList = t.message.coupon_list, (0, i.
			default)(t.message.address).length) for (var a in t.message.address) e.address_info.push({
					key: t.message.address[a].id,
					value: t.message.address[a].province + t.message.address[a].city + t.message.address[a].district + t.message.address[a].address
				})
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(455),
		u = n(l),
		s = a(2);
	t.
default = {
		components: {
			TCategory: u.
		default
		},
		computed: (0, i.
	default)({}, (0, s.mapState)({
			name: function(e) {
				return e.storex.storeInfo.title
			},
			storeid: function(e) {
				return e.storex.storeInfo.id
			},
			version: function(e) {
				return e.storex.storeInfo.version
			},
			url: function(e) {
				return e.storex.url
			},
			displayurl: function(e) {
				return e.storex.displayurl
			}
		})),
		methods: {},
		data: function() {
			return {
				list: []
			}
		},
		created: function() {
			var e = this;
			e.$store.commit("hasTabbar", {
				tabbar: !0
			}), this.$route.params.storeid && "undefined" !== this.$route.params.storeid && this.ajax({
				url: "//category/class",
				data: {
					id: e.$route.params.storeid
				},
				success: function(t) {
					e.list = t
				},
				error: function(t) {
					e.$vux.toast.show({
						text: t,
						type: "warn"
					})
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(455),
		u = n(l),
		s = a(2);
	t.
default = {
		components: {
			TCategory: u.
		default
		},
		computed: (0, i.
	default)({}, (0, s.mapState)({
			name: function(e) {
				return e.storex.storeInfo.title
			},
			storeid: function(e) {
				return e.storex.storeInfo.id
			},
			version: function(e) {
				return e.storex.storeInfo.version
			},
			url: function(e) {
				return e.storex.url
			},
			displayurl: function(e) {
				return e.storex.displayurl
			}
		})),
		methods: {},
		data: function() {
			return {
				list: [],
				parent: {}
			}
		},
		created: function() {
			var e = this;
			e.$store.commit("hasTabbar", {
				tabbar: !0
			}), this.$route.params.storeid || "undefined" !== this.$route.params.storeid || this.$router.push("/"), this.ajax({
				url: "//category/sub_class",
				data: {
					id: e.$route.params.id
				},
				success: function(t) {
					e.list = t.list, e.parent = t.class
				}
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(61),
		u = n(l),
		s = a(60),
		o = n(s),
		c = a(11),
		p = n(c),
		m = a(163),
		v = n(m),
		d = a(162),
		f = n(d),
		h = a(10),
		_ = n(h),
		g = a(6),
		x = n(g),
		w = a(16),
		b = n(w),
		y = a(2);
	t.
default = {
		components: {
			Swiper: u.
		default,
			SwiperItem:
			o.
		default,
			Flexbox:
			p.
		default,
			FlexboxItem:
			_.
		default,
			XButton:
			x.
		default,
			Scroller:
			b.
		default,
			Tabbar:
			v.
		default,
			TabbarItem:
			f.
		default
		},
		computed: (0, i.
	default)({}, (0, y.mapState)({
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			url: function(e) {
				return e.storex.url
			}
		})),
		data: function() {
			return {
				goodsInfo: []
			}
		},
		created: function() {
			var e = this;
			this.$http.get(this.url + "&do=goods&op=goods_info", {
				params: {
					id: e.$route.params.storeid,
					goodsid: e.$route.params.goodsid
				}
			}).then(function(t) {
				t = t.data.message, t.errno ? e.$vux.alert.show({
					title: "出错啦",
					content: t.message
				}) : e.goodsInfo = t.message
			})
		},
		watch: {}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(161),
		u = n(l),
		s = a(16),
		o = n(s),
		c = a(12),
		p = n(c),
		m = a(647),
		v = n(m),
		d = a(6),
		f = n(d),
		h = a(2);
	t.
default = {
		components: {
			Search: u.
		default,
			Scroller:
			o.
		default,
			Divider:
			p.
		default,
			Spinner:
			v.
		default,
			XButton:
			f.
		default
		},
		computed: (0, i.
	default)({}, (0, h.mapState)({
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			reserve: function() {
				return /Reserve/.test(this.$route.path) ? "1" : "0"
			}
		}),
		methods: {
			update: function() {
				var e = this;
				this.page = this.page + 1, this.$http.get(this.url + "&do=category&op=more_goods", {
					params: {
						id: this.$route.params.storeid,
						sub_id: this.$route.params.sub_id ? this.$route.params.sub_id : 0,
						page: this.page,
						keyword: this.keyword,
						can_reserve: this.reserve
					}
				}).then(function(t) {
					t = t.data.message, t.errno ? e.$vux.alert.show({
						title: "出错啦",
						content: t.message
					}) : (e.goods_list = e.goods_list.concat(t.message.list), e.status.pullupStatus = "default", t.message.isshow || (e.status.pullupStatus = "disabled"), e.$nextTick(function() {
						setTimeout(function() {
							e.$refs.goodsscroller.reset()
						}, 3e3)
					}))
				})
			},
			searchGood: function() {
				this.page = 0, this.status.pullupStatus = "default";
				var e = this;
				this.$http.get(this.url + "&do=category&op=more_goods", {
					params: {
						id: this.$route.params.storeid,
						sub_id: this.$route.params.sub_id,
						keyword: this.keyword,
						page: 1,
						can_reserve: this.reserve
					}
				}).then(function(t) {
					t = t.data.message, t.errno ? e.$vux.alert.show({
						title: "出错啦",
						content: t.message
					}) : (e.goods_list = t.message.list, t.message.isshow || (e.status.pullupStatus = "disabled"), e.$nextTick(function() {
						setTimeout(function() {
							e.$refs.goodsscroller.reset()
						}, 3e3)
					}))
				})
			}
		},
		data: function() {
			return {
				storeid: this.$route.params.storeid,
				goods_list: [],
				page: 1,
				pullupConfigs: {
					content: "加载更多",
					pullUpHeight: 60,
					height: 40,
					autoRefresh: !1,
					downContent: "释放加载",
					upContent: "上拉加载更多",
					loadingContent: "正在加载....",
					clsPrefix: "xs-plugin-pullup-"
				},
				status: {
					pullupStatus: "default"
				},
				keyword: ""
			}
		},
		created: function() {
			var e = this;
			this.$route.params.storeid && this.$route.params.sub_id || this.$router.push("/"), this.$http.get(this.url + "&do=category&op=more_goods", {
				params: {
					id: this.$route.params.storeid,
					sub_id: this.$route.params.sub_id,
					page: 1,
					can_reserve: this.reserve
				}
			}).then(function(t) {
				t = t.data.message, t.errno ? e.$vux.alert.show({
					title: "出错啦",
					content: t.message
				}) : (e.goods_list = t.message.list, t.message.isshow || (e.status.pullupStatus = "disabled"), e.$nextTick(function() {
					setTimeout(function() {
						e.$refs.goodsscroller.reset()
					}, 3e3)
				}))
			})
		}
	}
}, function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(11),
		u = n(l),
		s = a(10),
		o = n(s),
		c = a(2);
	t.
default = {
		components: {
			Flexbox: u.
		default,
			FlexboxItem:
			o.
		default
		},
		computed: (0, i.
	default)({}, (0, c.mapState)({
			name: function(e) {
				return e.storex.storeInfo.title
			},
			storeid: function(e) {
				return e.storex.storeInfo.id
			},
			version: function(e) {
				return e.storex.storeInfo.version
			},
			url: function(e) {
				return e.storex.url
			}
		}), {
			type: function() {
				return /Reserve/.test(this.$route.path) ? "Reserve" : "Category"
			}
		}),
		methods: {
			link: function(e) {
				return "1" === e.is_child || 1 === e.is_child ? "/" + this.type + "/Child/" + this.$route.params.storeid + "/" + e.id : "/" + this.type + "/GoodList/" + this.$route.params.storeid + "/" + e.id
			}
		},
		props: {
			title: {
				type: String,
				dafault: "全部分类"
			},
			list: {
				type: Array,
				dafault: function() {
					return []
				}
			}
		}
	}
}, , , , , function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = a(1),
		i = n(r),
		l = a(71),
		u = n(l),
		s = a(163),
		o = n(s),
		c = a(162),
		p = n(c),
		m = a(70),
		v = n(m),
		d = a(25),
		f = n(d),
		h = a(2);
	t.
default = {
		name: "app",
		components: {
			ViewBox: u.
		default,
			Tabbar:
			o.
		default,
			TabbarItem:
			p.
		default,
			Loading:
			v.
		default
		},
		computed: (0, i.
	default)({}, (0, h.mapState)({
			route: function(e) {
				return e.route
			},
			path: function(e) {
				return e.route.path
			},
			isLoading: function(e) {
				return e.vux.isLoading
			},
			HasTabbar: function(e) {
				return e.vux.tabbar
			},
			storeInfo: function(e) {
				return e.storex.storeInfo
			},
			error: function(e) {
				return e.storex.error
			},
			noticeNum: function(e) {
				return e.storex.extend.notice_unread_num
			}
		}), {
			isIndex: function() {
				return /StoreIndex/.test(this.route.path)
			},
			isCategory: function() {
				return /Category/.test(this.route.path)
			},
			isHome: function() {
				return /Home/.test(this.route.path)
			},
			isReserve: function() {
				return /Reserve/.test(this.route.path)
			},
			id: function() {
				return f.
			default.parse().id
			}
		}),
		data: function() {
			return {
				type: ["", "分类", "房源"]
			}
		},
		created: function() {}
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, , function(e, t) {}, , , , , , , function(e, t) {}, , , , , function(e, t) {}, function(e, t) {}, , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, , , , , , , , , , , , function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "classify"
			}, [a("div", {
				staticClass: "weui-flex top-panel"
			}, [a("div", {
				staticClass: "weui-flex__item store-name"
			}, [a("span", {
				staticClass: "storex storex-shop"
			}), e._v(e._s(e.name) + "\r\n\t\t")]), e._v(" "), "1" === e.version ? a("div", {
				staticClass: "weui-flex__item text-right store-cut"
			}, [a("a", {
				attrs: {
					href: e.displayurl
				}
			}, [a("span", [e._v("切换店铺")]), e._v(" "), a("span", {
				staticClass: "storex storex-cut"
			})])]) : e._e()]), e._v(" "), a("TCategory", {
				attrs: {
					title: e.parent.name,
					list: e.list
				}
			})], 1)
		},
		staticRenderFns: []
	}
}, , function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "classify"
			}, [a("div", {
				staticClass: "weui-flex top-panel"
			}, [a("div", {
				staticClass: "weui-flex__item store-name"
			}, [a("span", {
				staticClass: "storex storex-shop"
			}), e._v(e._s(e.name) + "\r\n\t\t")]), e._v(" "), "1" === e.version ? a("div", {
				staticClass: "weui-flex__item text-right store-cut"
			}, [a("a", {
				attrs: {
					href: e.displayurl
				}
			}, [a("span", [e._v("切换店铺")]), e._v(" "), a("span", {
				staticClass: "storex storex-cut"
			})])]) : e._e()]), e._v(" "), a("TCategory", {
				attrs: {
					title: "全部分类",
					list: e.list
				}
			})], 1)
		},
		staticRenderFns: []
	}
}, , , , function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {}, [e._v("\n\t" + e._s(e.msg ? e.msg : "未知错误") + "\n")])
		},
		staticRenderFns: []
	}
}, , , function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("span", {
				staticClass: "vux-spinner",
				class: e.className
			})
		},
		staticRenderFns: []
	}
}, , , , , , function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "goods-detail weui-tab",
				staticStyle: {
					height: "100%",
					position: "relative"
				}
			}, [a("div", {
				staticClass: "weui-tab__panel vux-fix-safari-overflow-scrolling",
				staticStyle: {
					"padding-bottom": "50px"
				}
			}, ["" != e.goodsInfo.thumbs ? a("swiper", {
				attrs: {
					loop: "",
					"dots-position": "center"
				}
			}, e._l(e.goodsInfo.thumbs, function(e) {
				return a("swiper-item", {
					staticClass: "slider"
				}, [a("img", {
					staticClass: "goodsthumb",
					attrs: {
						src: e,
						alt: ""
					}
				})])
			})) : e._e(), e._v(" "), a("div", {
				staticClass: "weui-flex goods-info"
			}, [a("div", {
				staticClass: "weui-flex__item"
			}, [a("div", {
				staticClass: "name"
			}, [e._v(e._s(e.goodsInfo.title))]), e._v(" "), a("div", {
				staticClass: "desc"
			}, [e._v(e._s(e.goodsInfo.params))]), e._v(" "), a("div", {
				staticClass: "price"
			}, [a("span", {
				staticClass: "price-now"
			}, [e._v("￥" + e._s(e.goodsInfo.cprice))]), a("span", {
				staticClass: "price-origin"
			}, [e._v("￥" + e._s(e.goodsInfo.oprice))])])]), e._v(" "), a("div", {
				staticClass: "weui-flex__item"
			})]), e._v(" "), 1 == e.goodsInfo.can_reserve ? a("div", {
				staticClass: "book"
			}, [e._m(0), e._v(" "), a("div", {
				staticClass: "goodcon",
				domProps: {
					innerHTML: e._s(e.goodsInfo.reserve_device)
				}
			})]) : e._e(), e._v(" "), a("div", {
				staticClass: "book"
			}, [e._m(1), e._v(" "), a("div", {
				staticClass: "goodcon introduce",
				domProps: {
					innerHTML: e._s(e.goodsInfo.device)
				}
			})])], 1), e._v(" "), a("flexbox", {
				staticClass: "weui-tabbar tabbar-buy",
				staticStyle: {
					"padding-bottom": "60px"
				}
			}, [1 == e.goodsInfo.can_reserve ? a("flexbox-item", [a("router-link", {
				attrs: {
					to: "/Reserve/" + e.storeInfo.id + "/" + e.goodsInfo.id
				}
			}, [a("x-button", {
				attrs: {
					type: "reserve"
				}
			}, [e._v("预订")])], 1)], 1) : e._e(), e._v(" "), 1 == e.goodsInfo.can_buy ? a("flexbox-item", [a("router-link", {
				attrs: {
					to: "/Buy/" + e.storeInfo.id + "/" + e.goodsInfo.id
				}
			}, [a("x-button", {
				attrs: {
					type: "warn"
				}
			}, [e._v("立即购买")])], 1)], 1) : e._e()], 1)], 1)
		},
		staticRenderFns: [function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-media-box weui-media-box_small-appmsg"
			}, [a("div", {
				staticClass: "weui-cells"
			}, [a("div", {
				staticClass: "weui-cell"
			}, [a("div", {
				staticClass: "weui-cell__bd weui-cell_primary"
			}, [a("p", [e._v("预订说明")])]), e._v(" "), a("span", {
				staticClass: "weui-cell__ft"
			})])])])
		}, function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "weui-media-box weui-media-box_small-appmsg"
			}, [a("div", {
				staticClass: "weui-cells"
			}, [a("div", {
				staticClass: "weui-cell"
			}, [a("div", {
				staticClass: "weui-cell__bd weui-cell_primary"
			}, [a("p", [e._v("房源说明")])]), e._v(" "), a("span", {
				staticClass: "weui-cell__ft"
			})])])])
		}]
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "classify"
			}, [a("search", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.keyword,
					expression: "keyword"
				}],
				attrs: {
					"auto-fixed": !1
				},
				domProps: {
					value: e.keyword
				},
				on: {
					"on-submit": e.searchGood,
					input: function(t) {
						e.keyword = t
					}
				}
			}), e._v(" "), a("scroller", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.status,
					expression: "status"
				}],
				ref: "goodsscroller",
				attrs: {
					"lock-x": "",
					"scrollbar-y": "",
					bounce: "",
					"use-pullup": "",
					height: "-100",
					"pullup-config": e.pullupConfigs
				},
				domProps: {
					value: e.status
				},
				on: {
					"on-pullup-loading": e.update,
					input: function(t) {
						e.status = t
					}
				}
			}, [a("div", {
				staticClass: "weui-panel weui-panel_access goods-list"
			}, [a("div", {
				staticClass: "weui-panel__bd"
			}, e._l(e.goods_list, function(t) {
				return a("router-link", {
					key: t.id,
					staticClass: "weui-media-box weui-media-box_appmsg",
					attrs: {
						to: "/GoodInfo/" + e.storeid + "/" + t.id
					}
				}, [a("div", {
					staticClass: "weui-media-box__hd"
				}, [a("img", {
					staticClass: "weui-media-box__thumb",
					attrs: {
						src: t.thumb,
						alt: ""
					}
				})]), e._v(" "), a("div", {
					staticClass: "weui-media-box__bd"
				}, [a("h4", {
					staticClass: "weui-media-box__title"
				}, [e._v(e._s(t.title))]), e._v(" "), a("p", {
					staticClass: "weui-media-box__desc"
				}, [e._v(e._s(t.sales))]), e._v(" "), a("div", {
					staticClass: "price"
				}, [a("span", {
					staticClass: "price-now"
				}, [e._v("￥" + e._s(t.cprice))]), e._v(" "), a("span", {
					staticClass: "price-origin"
				}, [e._v("￥" + e._s(t.oprice))]), e._v(" "), a("span", {
					staticClass: "sell-num pull-right"
				}, [e._v("已售" + e._s(t.sold_num))])])])])
			}))]), e._v(" "), "disabled" === e.status.pullupStatus ? a("divider", [e._v("没有更多数据啦")]) : e._e()], 1)], 1)
		},
		staticRenderFns: []
	}
}, , , function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("router-view")
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "skin-display",
				staticStyle: {
					height: "100%"
				}
			}, [a("loading", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.isLoading,
					expression: "isLoading"
				}],
				attrs: {
					text: "加载中"
				},
				domProps: {
					value: e.isLoading
				},
				on: {
					input: function(t) {
						e.isLoading = t
					}
				}
			}), e._v(" "), a("view-box", {
				ref: "viewBox",
				attrs: {
					"body-padding-bottom": e.HasTabbar ? "60px" : "0"
				}
			}, [a("transition", [a("router-view", {
				staticClass: "router-view"
			})], 1), e._v(" "), "StoreList" != e.route.name ? a("tabbar", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.HasTabbar,
					expression: "HasTabbar"
				}],
				attrs: {
					"icon-class": "vux-center"
				},
				slot: "bottom"
			}, [a("tabbar-item", {
				attrs: {
					link: "/StoreIndex/" + e.id,
					selected: e.isIndex
				}
			}, [a("i", {
				class: e.isIndex ? "storex-home-selected" : "storex-home",
				slot: "icon"
			}), e._v(" "), a("span", {
				slot: "label"
			}, [e._v("首页")])]), e._v(" "), 2 != e.storeInfo.category_set ? a("tabbar-item", {
				attrs: {
					link: "/Category/" + e.id,
					selected: e.isCategory
				}
			}, [a("i", {
				class: e.isCategory ? "storex-category-selected" : "storex-category",
				slot: "icon"
			}), e._v(" "), a("span", {
				slot: "label"
			}, [e._v("分类")])]) : e._e(), e._v(" "), 2 == e.storeInfo.category_set ? a("tabbar-item", {
				attrs: {
					link: "/Category/GoodList/" + e.id + "/" + e.id,
					selected: e.isCategory
				}
			}, [a("i", {
				class: e.isCategory ? "storex-category-selected" : "storex-category",
				slot: "icon"
			}), e._v(" "), a("span", {
				slot: "label"
			}, [e._v(e._s(e.type[e.storeInfo.category_set]))])]) : e._e(), e._v(" "), a("tabbar-item", {
				attrs: {
					link: "/Home/Index",
					selected: e.isHome,
					badge: e.noticeNum
				}
			}, [a("i", {
				class: e.isHome ? "storex-user-selected" : "storex-user",
				slot: "icon"
			}), e._v(" "), a("span", {
				slot: "label"
			}, [e._v("我的")])])], 1) : e._e()], 1)], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "buy"
			}, [a("group", {
				staticClass: "storex-from",
				attrs: {
					"label-width": "4em",
					"label-margin-right": "2em",
					"label-align": "left"
				}
			}, [a("cell", {
				attrs: {
					title: e.goodsInfo.title,
					value: "￥" + e.goodsInfo.cprice
				}
			}), e._v(" "), a("x-number", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.nums,
					expression: "nums"
				}],
				attrs: {
					title: "数量",
					min: 1
				},
				domProps: {
					value: e.nums
				},
				on: {
					input: function(t) {
						e.nums = t
					}
				}
			}), e._v(" "), "1" === e.goodsInfo.is_house ? a("cell", {
				attrs: {
					title: "服务费"
				}
			}, [a("span", {
				slot: "default"
			}, [e._v(" ￥" + e._s(e.goodsInfo.service))])]) : e._e()], 1), e._v(" "), 1 == e.goodsInfo.store_type && 1 == e.goodsInfo.is_house ? a("group", {
				ref: "hotel",
				staticClass: "storex-from",
				attrs: {
					"label-width": "4em",
					"label-margin-right": "2em",
					"label-align": "left",
					title: "填写入住信息"
				}
			}, [a("datetime", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.hotel.btime,
					expression: "hotel.btime"
				}],
				attrs: {
					title: "入住时间",
					"start-date": e.startDate1,
					"end-date": e.endDate,
					"value-text-align": "right",
					required: ""
				},
				domProps: {
					value: e.hotel.btime
				},
				on: {
					input: function(t) {
						e.hotel.btime = t
					}
				}
			}), e._v(" "), a("datetime", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.hotel.etime,
					expression: "hotel.etime"
				}],
				attrs: {
					title: "离店时间",
					"start-date": e.startDate,
					"value-text-align": "right",
					required: ""
				},
				domProps: {
					value: e.hotel.etime
				},
				on: {
					input: function(t) {
						e.hotel.etime = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.day,
					expression: "day"
				}],
				attrs: {
					title: "天数",
					required: "",
					disabled: ""
				},
				domProps: {
					value: e.day
				},
				on: {
					input: function(t) {
						e.day = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.hotel.contact_name,
					expression: "hotel.contact_name"
				}],
				attrs: {
					title: "入住人",
					placeholder: "请输入入住人姓名",
					required: ""
				},
				domProps: {
					value: e.hotel.contact_name
				},
				on: {
					input: function(t) {
						e.hotel.contact_name = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.hotel.mobile,
					expression: "hotel.mobile"
				}],
				attrs: {
					title: "手机号",
					placeholder: "请输入手机号",
					"is-type": "china-mobile",
					required: ""
				},
				domProps: {
					value: e.hotel.mobile
				},
				on: {
					input: function(t) {
						e.hotel.mobile = t
					}
				}
			}), e._v(" "), a("x-textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.hotel.remark,
					expression: "hotel.remark"
				}],
				attrs: {
					title: "备注",
					placeholder: "请输入备注",
					required: ""
				},
				domProps: {
					value: e.hotel.remark
				},
				on: {
					input: function(t) {
						e.hotel.remark = t
					}
				}
			})], 1) : e._e(), e._v(" "), 0 == e.goodsInfo.store_type || 2 == e.goodsInfo.is_house ? a("group", {
				ref: "order",
				staticClass: "storex-from",
				attrs: {
					"label-width": "4em",
					"label-margin-right": "2em",
					"label-align": "left",
					title: ""
				}
			}, [a("selector", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.order.mode_distribute,
					expression: "order.mode_distribute"
				}],
				attrs: {
					title: "配送方式",
					options: [{
						key: "0",
						value: "请选择配送"
					}, {
						key: "1",
						value: "自提"
					}, {
						key: "2",
						value: "配送"
					}],
					placeholder: "请选择配送"
				},
				domProps: {
					value: e.order.mode_distribute
				},
				on: {
					input: function(t) {
						e.order.mode_distribute = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.order.contact_name,
					expression: "order.contact_name"
				}],
				attrs: {
					title: "联系人",
					placeholder: "联系人",
					required: ""
				},
				domProps: {
					value: e.order.contact_name
				},
				on: {
					input: function(t) {
						e.order.contact_name = t
					}
				}
			}), e._v(" "), a("x-input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.order.mobile,
					expression: "order.mobile"
				}],
				attrs: {
					title: "手机号",
					placeholder: "请输入手机号",
					"is-type": "china-mobile",
					required: ""
				},
				domProps: {
					value: e.order.mobile
				},
				on: {
					input: function(t) {
						e.order.mobile = t
					}
				}
			}), e._v(" "), a("datetime", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.order.order_time,
					expression: "order.order_time"
				}, {
					name: "show",
					rawName: "v-show",
					value: 1 == e.order.mode_distribute,
					expression: "order.mode_distribute==1"
				}],
				attrs: {
					title: "自提时间",
					required: ""
				},
				domProps: {
					value: e.order.order_time
				},
				on: {
					input: function(t) {
						e.order.order_time = t
					}
				}
			}), e._v(" "), a("datetime", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.order.order_time,
					expression: "order.order_time"
				}, {
					name: "show",
					rawName: "v-show",
					value: 2 == e.order.mode_distribute,
					expression: "order.mode_distribute==2"
				}],
				attrs: {
					title: "配送时间",
					required: ""
				},
				domProps: {
					value: e.order.order_time
				},
				on: {
					input: function(t) {
						e.order.order_time = t
					}
				}
			}), e._v(" "), a("cell", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: 2 == e.order.mode_distribute,
					expression: "order.mode_distribute==2"
				}],
				attrs: {
					title: "配送地址",
					value: e.addressvalue
				},
				nativeOn: {
					click: function(t) {
						e.showaddress(t)
					}
				}
			})], 1) : e._e(), e._v(" "), a("group", [a("cell", {
				attrs: {
					title: "优惠券",
					value: e.orderCouponTitle,
					"is-link": ""
				},
				nativeOn: {
					click: function(t) {
						e.showCoupon = !0
					}
				}
			}), e._v(" "), a("cell", {
				attrs: {
					title: "总价"
				}
			}, [a("span", {
				staticClass: "select-color",
				slot: "default"
			}, [e._v(" ￥" + e._s(e.total))])])], 1), e._v(" "), a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showCoupon,
					expression: "showCoupon"
				}],
				staticStyle: {
					"overflow-y": "auto"
				},
				attrs: {
					height: "100%"
				},
				domProps: {
					value: e.showCoupon
				},
				on: {
					input: function(t) {
						e.showCoupon = t
					}
				}
			}, [a("x-header", {
				staticStyle: {
					width: "100%",
					position: "fixed",
					left: "0",
					top: "0",
					"z-index": "100"
				},
				attrs: {
					"left-options": {
						showBack: !0,
						backText: "优惠券",
						preventGoBack: !0
					}
				},
				on: {
					"on-click-back": function(t) {
						e.showCoupon = !1
					}
				}
			}), e._v(" "), a("div", {
				staticStyle: {
					"min-height": "100%"
				}
			}, [a("div", {
				staticClass: "coupon-list",
				staticStyle: {
					"padding-top": "60px"
				}
			}, [a("a", {
				staticClass: "weui-btn weui-btn-coupon",
				on: {
					click: function(t) {
						e.orderCoupon = -2, e.showCoupon = !1
					}
				}
			}, [e._v(" 不使用优惠券")]), e._v(" "), a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.card_disounts_info && Number(e.subtotal) >= Number(e.card_disounts_info.condition),
					expression: "card_disounts_info && Number(subtotal) >= Number(card_disounts_info.condition)"
				}],
				staticClass: "coupon-item",
				class: {
					selected: e.orderCoupon == -1
				},
				on: {
					click: function(t) {
						e.orderCoupon = -1, e.showCoupon = !1
					}
				}
			}, [a("div", {
				staticClass: "info card"
			}, [a("div", {
				staticClass: "content"
			}, [a("h4", {
				staticClass: "title"
			}, [e._v("会员专享")]), e._v(" "), a("div", {
				staticClass: "explain active"
			}, [1 == e.card_disounts_info.discount_type ? [e._v("\n\t\t\t\t\t\t\t\t\t满" + e._s(e.card_disounts_info.condition) + "减" + e._s(e.card_disounts_info.discount) + "\n\t\t\t\t\t\t\t\t")] : e._e(), e._v(" "), 2 == e.card_disounts_info.discount_type ? [e._v("\n\t\t\t\t\t\t\t\t\t满" + e._s(e.card_disounts_info.condition) + "打" + e._s(e.card_disounts_info.discount) + "折\n\t\t\t\t\t\t\t\t")] : e._e()], 2)])])]), e._v(" "), e._l(e.couponList, function(t) {
				return a("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: 1 == t.type || Number(e.subtotal) >= Number(t.extra.least_cost / 100),
						expression: "coupon.type == 1 || Number(subtotal) >= Number(coupon.extra.least_cost / 100)"
					}],
					staticClass: "coupon-item",
					class: {
						selected: t.recid == e.orderCoupon.recid
					},
					on: {
						click: function(a) {
							e.orderCoupon = t, e.showCoupon = !1
						}
					}
				}, [a("div", {
					staticClass: "info"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.logo_url,
						expression: "coupon.logo_url"
					}],
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("div", {
					staticClass: "content"
				}, [a("h4", {
					staticClass: "title"
				}, [e._v(e._s(t.title))]), e._v(" "), a("div", {
					staticClass: "explain active"
				}, [e._v("\n\t\t\t\t\t\t\t\t" + e._s(t.description) + "\n\t\t\t\t\t\t\t")])])]), e._v(" "), a("div", {
					staticClass: "time"
				}, [e._v("\n\t\t\t\t\t\t" + e._s(t.extra_date_info) + "\n\t\t\t\t\t")])])
			}), e._v(" "), e._l(e.couponList, function(t) {
				return a("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: 2 == t.type && Number(e.subtotal) < Number(t.extra.least_cost / 100),
						expression: "coupon.type == 2 && Number(subtotal) < Number(coupon.extra.least_cost / 100)"
					}],
					staticClass: "coupon-item",
					staticStyle: {
						opacity: ".6"
					}
				}, [a("div", {
					staticClass: "info"
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: t.logo_url,
						expression: "coupon.logo_url"
					}],
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("div", {
					staticClass: "content"
				}, [a("h4", {
					staticClass: "title"
				}, [e._v(e._s(t.title))]), e._v(" "), a("div", {
					staticClass: "explain active"
				}, [e._v("\n\t\t\t\t\t\t\t\t" + e._s(t.description) + "\n\t\t\t\t\t\t\t")])])]), e._v(" "), a("div", {
					staticClass: "time"
				}, [e._v("\n\t\t\t\t\t\t" + e._s(t.extra_date_info) + "\n\t\t\t\t\t")])])
			})], 2)])], 1), e._v(" "), a("popup", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.showadd,
					expression: "showadd"
				}],
				attrs: {
					height: "100%"
				},
				domProps: {
					value: e.showadd
				},
				on: {
					input: function(t) {
						e.showadd = t
					}
				}
			}, [a("x-header", {
				staticStyle: {
					width: "100%",
					position: "fixed",
					left: "0",
					top: "0",
					"z-index": "100"
				},
				attrs: {
					"left-options": {
						showBack: !0,
						backText: "地址列表",
						preventGoBack: !0
					}
				},
				on: {
					"on-click-back": function(t) {
						e.showadd = !1
					}
				}
			}), e._v(" "), a("div", {
				staticClass: "address-list",
				staticStyle: {
					"padding-top": "40px",
					"min-height": "100%"
				}
			}, [a("group", [a("radio", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.order.addressid,
					expression: "order.addressid"
				}],
				attrs: {
					options: e.address_info
				},
				domProps: {
					value: e.order.addressid
				},
				on: {
					"on-change": e.change,
					input: function(t) {
						e.order.addressid = t
					}
				},
				nativeOn: {
					click: function(t) {
						e.change(t)
					}
				}
			})], 1), e._v(" "), a("router-link", {
				attrs: {
					to: "/Home/AddressEdit/new/"
				}
			}, [a("x-button", {
				attrs: {
					type: "warn"
				}
			}, [e._v("+新增收货地址")])], 1)], 1)], 1), e._v(" "), a("div", {
				staticClass: "weui-btn-area"
			}, [a("a", {
				staticClass: "weui-btn weui-btn_warn",
				attrs: {
					to: ""
				},
				on: {
					click: e.post
				}
			}, [e._v("提交订单")])])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "t-classify"
			}, [a("h2", {
				staticClass: "title"
			}, [e._v(e._s(e.title))]), e._v(" "), a("div", {
				staticClass: "list"
			}, [a("flexbox", {
				attrs: {
					wrap: "wrap",
					gutter: 0
				}
			}, e._l(e.list, function(t, n) {
				return a("flexbox-item", {
					staticClass: "item",
					attrs: {
						span: .25
					}
				}, [a("router-link", {
					attrs: {
						to: e.link(t)
					}
				}, [a("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy:background-image",
						value: t.thumb,
						expression: "item.thumb",
						arg: "background-image"
					}],
					attrs: {
						alt: ""
					}
				}), e._v(" "), a("p", {
					staticClass: "name"
				}, [e._v(e._s(t.name))])])], 1)
			}))], 1)])
		},
		staticRenderFns: []
	}
}, , , , , , , , , function(e, t, a) {
	var n = a(0)(a(502), a(612), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(592), a(593);
	var n = a(0)(a(503), a(627), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(573);
	var n = a(0)(a(504), a(608), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(571);
	var n = a(0)(a(505), a(606), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(585);
	var n = a(0)(a(506), a(621), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	a(586);
	var n = a(0)(a(507), a(622), null, null);
	e.exports = n.exports
}, function(e, t, a) {
	var n = a(0)(null, a(625), null, null);
	e.exports = n.exports
}, , , , function(e, t, a) {
	a(580);
	var n = a(0)(a(494), a(615), null, null);
	e.exports = n.exports
}, , , , , , , , , , function(e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e) {
		var t, a, n, i, l, u, s, o = "";
		for (t in e) if (a = e[t], a instanceof Array) for (s = 0; s < a.length; ++s) l = a[s], n = t + "[" + s + "]", u = {}, u[n] = l, o += r(u) + "&";
		else if (a instanceof Object) for (i in a) l = a[i], n = t + "[" + i + "]", u = {}, u[n] = l, o += r(u) + "&";
		else void 0 !== a && null !== a && (o += encodeURIComponent(t) + "=" + encodeURIComponent(a) + "&");
		return o.length ? o.substr(0, o.length - 1) : o
	}
	function i(e) {
		var t = E.
	default.state.storex.url;
		return e && (e = e.split("/"), e[0] && (t += "c=" + e[0] + "&"), e[1] && (t += "a=" + e[1] + "&"), e[2] && (t += "do=" + e[2] + "&"), e[3] && (t += "op=" + e[3] + "&")), t
	}
	var l = a(15),
		u = n(l),
		s = a(8),
		o = n(s),
		c = a(42),
		p = n(c),
		m = a(77),
		v = n(m),
		d = a(78),
		f = n(d),
		h = a(469),
		_ = n(h),
		g = a(164),
		x = n(g),
		w = a(79),
		b = a(72),
		y = n(b),
		C = a(40),
		k = n(C),
		S = a(73),
		M = n(S),
		I = a(76),
		$ = n(I),
		A = a(74),
		O = n(A),
		V = a(75),
		T = n(V),
		R = a(25),
		P = n(R),
		N = a(147),
		L = n(N),
		D = a(48),
		E = n(D),
		B = a(465),
		F = n(B),
		j = a(3);
	y.
default.config({
		cdn: "//s.url.cn/qqun/qun/qqweb/m/qun/confession/js/vconsole.min.js"
	}), k.
default.$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8", k.
default.$http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", k.
default.$http.defaults.transformRequest = [function(e) {
		return r(e)
	}], a(41).polyfill(), p.
default.use(k.
default), p.
default.use(M.
default), p.
default.use($.
default), p.
default.use(O.
default), p.
default.use(T.
default), p.
default.use(x.
default, {
		preLoad: 1.3,
		error: "http://p1.bpimg.com/4851/5d608f17d3c4284c.png",
		loading: "./assets/loading.gif",
		attempt: 1
	}), p.
default.use(L.
default), p.
default.use(f.
default);
	var H = new f.
default ({
		routes: F.
	default
	});
	(0, w.sync)(E.
default, H), v.
default.attach(document.body), H.beforeEach(function(e, t, a) {
		E.
	default.commit("hasTabbar", {
			tabbar: e.meta.hasTabbar
		}), E.
	default.commit("updateLoadingStatus", {
			isLoading: !0
		}), (0, j.extend)({
			success: function(e) {
				E.
			default.commit("setExtend", e)
			}
		}), "StoreList" !== e.name ? (0, j.storeDetail)({
			data: {
				store_id: P.
			default.parse().id
			},
			success: function(t) {
				E.
			default.commit("setStoreInfo", t), /Home/.test(e.path) ? (0, j.getUserInfo)({
					data: {
						store_id: e.params.storeid
					},
					success: function(e) {
						E.
					default.commit("setUserInfo", e), a()
					},
					error: function(e) {
						p.
					default.$vux.alert.show({
							title: "出错了",
							content: e,
							onHide: function() {
								window.location.href = E.
							default.state.storex.displayurl
							}
						})
					}
				}):
				a()
			},
			error: function(e) {
				p.
			default.$vux.alert.show({
					title: "出错了",
					content: e,
					onHide: function() {
						window.location.href = E.
					default.state.storex.displayurl
					}
				})
			}
		}):
		a()
	}), H.afterEach(function(e) {
		setTimeout(function() {
			E.
		default.commit("updateLoadingStatus", {
				isLoading: !1
			})
		}), void 0 !== (0, o.
	default)(e.meta.pageTitle) && z(e.meta.pageTitle)
	});
	var z = function(e) {
			document.title = e;
			var t = navigator.userAgent;
			if (t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
				var a = document.createElement("iframe");
				a.src = "/favicon.ico", a.style.display = "none", a.onload = function() {
					setTimeout(function() {
						a.remove()
					}, 9)
				}, document.body.appendChild(a)
			}
		};
	p.
default.prototype.ajax = function(e) {
		var t = this;
		this.$vux.loading.show({
			text: "加载中"
		});
		var a = e.url;
		a.indexOf("http://") === -1 && a.indexOf("https://") === -1 && (a = i(a));
		var n = {};
		n.method = e.method ? e.method : "get", n.url = a, "get" === n.method ? n.params = e.data : n.data = e.data, k.
	default.$http(n).then(function(a) {
			t.$vux.loading.hide(), a = a.data.message, a.errno || 0 === a.errno ? 0 !== a.errno ? e.error && "function" == typeof e.error && e.error(a.message) : e.success && "function" == typeof e.success && e.success(a.message) : (t.$router.push("/404"), E.
		default.commit("haveError", "未知错误"))
		})
	}, p.
default.prototype.checkForm = function(e) {
		for (var t in e) if (e[t].errors && (0, u.
	default)(e[t].errors).length > 0) return this.$vux.alert.show({
			title: "错误",
			content: "请正确填写表单"
		}), 1;
		return 0
	}, new p.
default ({
		store: E.
	default,
		router:
		H,
		render: function(e) {
			return e(_.
		default)
		}
	}).$mount("#app-box")
}], [657]);
var Polling = {
	DeleteMsgInput: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.setConversationId = function(t) {
			e.conversationId = t
		}, this.setMsgs = function(t) {
			e.msgs = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	DeleteMsg: function() {
		var e = {};
		this.setMsgId = function(t) {
			e.msgId = t
		}, this.setMsgDataTime = function(t) {
			e.msgDataTime = t
		}, this.setDirect = function(t) {
			e.direct = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	DeleteMsgOutput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	SearchMpInput: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.setId = function(t) {
			e.id = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	SearchMpOutput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.setInfo = function(t) {
			e.info = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	MpInfo: function() {
		var e = {};
		this.setMpid = function(t) {
			e.mpid = t
		}, this.setName = function(t) {
			e.name = t
		}, this.setType = function(t) {
			e.type = t
		}, this.setTime = function(t) {
			e.time = t
		}, this.setPortraitUri = function(t) {
			e.portraitUrl = t
		}, this.setExtra = function(t) {
			e.extra = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	PullMpInput: function() {
		var e = {};
		this.setMpid = function(t) {
			e.mpid = t
		}, this.setTime = function(t) {
			e.time = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	PullMpOutput: function() {
		var e = {};
		this.setStatus = function(t) {
			e.status = t
		}, this.setInfo = function(t) {
			e.info = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	MPFollowInput: function() {
		var e = {};
		this.setId = function(t) {
			e.id = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	MPFollowOutput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.setInfo = function(t) {
			e.info = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	NotifyMsg: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.setTime = function(t) {
			e.time = t
		}, this.setChrmId = function(t) {
			e.chrmId = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	SyncRequestMsg: function() {
		var e = {};
		this.setSyncTime =  this.setIspolling = function(t) {
			e.ispolling = !!t
		}, this.setIsweb = function(t) {
			e.isweb = !!t
		}, this.setIsPullSend =  this.toArrayBuffer = function() {
			return e
		}
	},
	UpStreamMessage: function() {
		var e = {};
		this.setSessionId = function(t) {
			e.sessionId = t
		}, this.setClassname = function(t) {
			e.classname = t
		}, this.setContent = function(t) {
			t && (e.content = t)
		}, this.setPushText = function(t) {
			e.pushText = t
		}, this.setUserId = function(t) {
			e.userId = t
		}, this.setAppData = function(t) {
			e.appData = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	DownStreamMessages: function() {
		var e = {};
		this.setList = function(t) {
			e.list = t
		}, this.setSyncTime = function(t) {
			e.syncTime = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	DownStreamMessage: function() {
		var e = {};
		this.setFromUserId = function(t) {
			e.fromUserId = t
		}, this.setType = function(t) {
			e.type = t
		}, this.setGroupId = function(t) {
			e.groupId = t
		}, this.setClassname = function(t) {
			e.classname = t
		}, this.setContent =  this.setDataTime = function(t) {
			e.dataTime = t
		}, this.setStatus = function(t) {
			e.status = t
		}, this.setMsgId = function(t) {
			e.msgId = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	CreateDiscussionInput: function() {
		var e = {};
		this.setName = function(t) {
			e.name = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	CreateDiscussionOutput: function() {
		var e = {};
		this.setId = function(t) {
			e.id = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChannelInvitationInput: function() {
		var e = {};
		this.setUsers = function(t) {
			e.users = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	LeaveChannelInput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	QueryChatroomInfoInput: function() {
		var e = {};
		this.setCount = function(t) {
			e.count = t
		}, this.setOrder = function(t) {
			e.order = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	QueryChatroomInfoOutput: function() {
		var e = {};
		this.setUserTotalNums = function(t) {
			e.userTotalNums = t
		}, this.setUserInfos = function(t) {
			e.userInfos = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChannelEvictionInput: function() {
		var e = {};
		this.setUser = function(t) {
			e.user = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	RenameChannelInput: function() {
		var e = {};
		this.setName = function(t) {
			e.name = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChannelInfoInput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChannelInfoOutput: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.setChannelId = function(t) {
			e.channelId = t
		}, this.setChannelName = function(t) {
			e.channelName = t
		}, this.setAdminUserId = function(t) {
			e.adminUserId = t
		}, this.setFirstTenUserIds = function(t) {
			e.firstTenUserIds = t
		}, this.setOpenStatus = function(t) {
			e.openStatus = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChannelInfosInput: function() {
		var e = {};
		this.setPage = function(t) {
			e.page = t
		}, this.setNumber = function(t) {
			e.number = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChannelInfosOutput: function() {
		var e = {};
		this.setChannels = function(t) {
			e.channels = t
		}, this.setTotal = function(t) {
			e.total = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	MemberInfo: function() {
		var e = {};
		this.setUserId = function(t) {
			e.userId = t
		}, this.setUserName = function(t) {
			e.userName = t
		}, this.setUserPortrait = function(t) {
			e.userPortrait = t
		}, this.setExtension = function(t) {
			e.extension = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GroupMembersInput: function() {
		var e = {};
		this.setPage = function(t) {
			e.page = t
		}, this.setNumber = function(t) {
			e.number = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GroupMembersOutput: function() {
		var e = {};
		this.setMembers = function(t) {
			e.members = t
		}, this.setTotal = function(t) {
			e.total = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetUserInfoInput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetUserInfoOutput: function() {
		var e = {};
		this.setUserId = function(t) {
			e.userId = t
		}, this.setUserName = function(t) {
			e.userName = t
		}, this.setUserPortrait = function(t) {
			e.userPortrait = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetSessionIdInput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetSessionIdOutput: function() {
		var e = {};
		this.setSessionId = function(t) {
			e.sessionId = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetQNupTokenInput: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetQNupTokenOutput: function() {
		var e = {};
		this.setDeadline = function(t) {
			e.deadline = t
		}, this.setToken = function(t) {
			e.token = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetQNdownloadUrlInput: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.setKey = function(t) {
			e.key = t
		}, this.setFileName = function(t) {
			e.fileName = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GetQNdownloadUrlOutput: function() {
		var e = {};
		this.setDownloadUrl = function(t) {
			e.downloadUrl = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	Add2BlackListInput: function() {
		var e = {};
		this.setUserId = function(t) {
			e.userId = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	RemoveFromBlackListInput: function() {
		var e = {};
		this.setUserId = function(t) {
			e.userId = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	QueryBlackListInput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	QueryBlackListOutput: function() {
		var e = {};
		this.setUserIds = function(t) {
			e.userIds = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	BlackListStatusInput: function() {
		var e = {};
		this.setUserId = function(t) {
			e.userId = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	BlockPushInput: function() {
		var e = {};
		this.setBlockeeId = function(t) {
			e.blockeeId = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ModifyPermissionInput: function() {
		var e = {};
		this.setOpenStatus = function(t) {
			e.openStatus = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GroupInput: function() {
		var e = {};
		this.setGroupInfo = function(t) {
			for (var n = 0, o = []; n < t.length; n++) o.push({
				id: t[n].getContent()
					.id,
				name: t[n].getContent()
					.name
			});
			e.groupInfo = o
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GroupOutput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GroupInfo: function() {
		var e = {};
		this.setId = function(t) {
			e.id = t
		}, this.setName = function(t) {
			e.name = t
		}, this.getContent = function() {
			return e
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GroupHashInput: function() {
		var e = {};
		this.setUserId = function(t) {
			e.userId = t
		}, this.setGroupHashCode = function(t) {
			e.groupHashCode = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	GroupHashOutput: function() {
		var e = {};
		this.setResult = function(t) {
			e.result = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChrmInput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChrmOutput: function() {
		var e = {};
		this.setNothing = function(t) {
			e.nothing = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	ChrmPullMsg: function() {
		var e = {};
		this.setSyncTime = function(t) {
			e.syncTime = t
		}, this.setCount = function(t) {
			e.count = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	RelationsInput: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.setMsg = function(t) {
			e.msg = t
		}, this.setCount = function(t) {
			e.count = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	RelationsOutput: function() {
		var e = {};
		this.setInfo = function(t) {
			e.info = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	RelationInfo: function() {
		var e = {};
		this.setType = function(t) {
			e.type = t
		}, this.setUserId = function(t) {
			e.userId = t
		}, this.setMsg = function(t) {
			e.msg = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	HistoryMessageInput: function() {
		var e = {};
		this.setTargetId = function(t) {
			e.targetId = t
		}, this.setDataTime = function(t) {
			e.dataTime = t
		}, this.setSize = function(t) {
			e.size = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	HistoryMessagesOuput: function() {
		var e = {};
		this.setList = function(t) {
			e.list = t
		}, this.setSyncTime = function(t) {
			e.syncTime = t
		}, this.setHasMsg = function(t) {
			e.hasMsg = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	HistoryMsgInput: function() {
		var e = {};
		this.setTargetId = function(t) {
			e.targetId = t
		}, this.setTime = function(t) {
			e.time = t
		}, this.setCount = function(t) {
			e.count = t
		}, this.setOrder = function(t) {
			e.order = t
		}, this.toArrayBuffer = function() {
			return e
		}
	},
	HistoryMsgOuput: function() {
		var e = {};
		this.setList = function(t) {
			e.list = t
		}, this.setSyncTime = function(t) {
			e.syncTime = t
		}, this.setHasMsg =  this.toArrayBuffer = function() {
			return e
		}
	}
};
for (var f in Polling) Polling[f].decode = function(b) {
	var back = {},
		val = JSON.parse(b) || eval("(" + b + ")");
	for (var i in val) back[i] = val[i], back["get" + i.charAt(0)
		.toUpperCase() + i.slice(1)] = 
	return back
};
! function(e) {
	"use strict";

	
	
	
	
	
	
	
	
	
	
	
	
	
	function f(e) {
		return unescape(encodeURIComponent(e))
	}

	function m(e) {
		return d(f(e))
	}

	
	
	
		e.md5 = y, "function" == typeof define && define.amd ? define("md5", function() {
		return y
	}) : "object" == typeof module && module.exports ? module.exports = y : e.md5 = y
}(this);
var __extends = this && this.__extends || 
	RongIMLib;
! function(e) {
	! function(e) {
		e[e.ALL = 1] = "ALL", e[e.PART = 2] = "PART"
	}(e.MentionedType || (e.MentionedType = {}));
	e.MentionedType;
	! function(e) {
		e[e.CUSTOMER_SERVICE = 1] = "CUSTOMER_SERVICE", e[e.RECALL = 2] = "RECALL"
	}(e.MethodType || (e.MethodType = {}));
	e.MethodType;
	! function(e) {
		e[e.IN_BLACK_LIST = 0] = "IN_BLACK_LIST", e[e.NOT_IN_BLACK_LIST = 1] = "NOT_IN_BLACK_LIST"
	}(e.BlacklistStatus || (e.BlacklistStatus = {}));
	e.BlacklistStatus;
	! function(e) {
		e[e.XHR_POLLING = 0] = "XHR_POLLING", e[e.WEBSOCKET = 1] = "WEBSOCKET", e[e.HTTP = 0] = "HTTP", e[e.HTTPS = 1] = "HTTPS"
	}(e.ConnectionChannel || (e.ConnectionChannel = {}));
	e.ConnectionChannel;
	! function(e) {
		e[e.ONLY_ROBOT = 1] = "ONLY_ROBOT", e[e.ONLY_HUMAN = 2] = "ONLY_HUMAN", e[e.ROBOT_FIRST = 3] = "ROBOT_FIRST", e[e.HUMAN_FIRST = 4] = "HUMAN_FIRST"
	}(e.CustomerType || (e.CustomerType = {}));
	e.CustomerType;
	! e.GetChatRoomType || (e.GetChatRoomType = {}));
	e.GetChatRoomType;
	! e.ConnectionStatus || (e.ConnectionStatus = {}));
	e.ConnectionStatus;
	! function(e) {
		e[e.DO_NOT_DISTURB = 0] = "DO_NOT_DISTURB", e[e.NOTIFY = 1] = "NOTIFY"
	}(e.ConversationNotificationStatus || (e.ConversationNotificationStatus = {}));
	e.ConversationNotificationStatus;
	! e.ConversationType || (e.ConversationType = {}));
	e.ConversationType;
	! function(e) {
		e[e.OPENED = 0] = "OPENED", e[e.CLOSED = 1] = "CLOSED"
	}(e.DiscussionInviteStatus || (e.DiscussionInviteStatus = {}));
	e.DiscussionInviteStatus;
	! function(e) {
		e[e.SEND_FREQUENCY_TOO_FAST = 20604] = "SEND_FREQUENCY_TOO_FAST", e[e.RC_MSG_UNAUTHORIZED = 20406] = "RC_MSG_UNAUTHORIZED", e[e.RC_DISCUSSION_GROUP_ID_INVALID = 20407] = "RC_DISCUSSION_GROUP_ID_INVALID", e[e.FORBIDDEN_IN_GROUP = 22408] = "FORBIDDEN_IN_GROUP", e[e.NOT_IN_DISCUSSION = 21406] = "NOT_IN_DISCUSSION", e[e.NOT_IN_GROUP = 22406] = "NOT_IN_GROUP", e[e.NOT_IN_CHATROOM = 23406] = "NOT_IN_CHATROOM", e[e.FORBIDDEN_IN_CHATROOM = 23408] = "FORBIDDEN_IN_CHATROOM", e[e.RC_CHATROOM_USER_KICKED = 23409] = "RC_CHATROOM_USER_KICKED", e[e.RC_CHATROOM_NOT_EXIST = 23410] = "RC_CHATROOM_NOT_EXIST", e[e.RC_CHATROOM_IS_FULL = 23411] = "RC_CHATROOM_IS_FULL", e[e.RC_CHATROOM_PATAMETER_INVALID = 23412] = "RC_CHATROOM_PATAMETER_INVALID", e[e.CHATROOM_GET_HISTORYMSG_ERROR = 23413] = "CHATROOM_GET_HISTORYMSG_ERROR", e[e.CHATROOM_NOT_OPEN_HISTORYMSG_STORE = 23414] = "CHATROOM_NOT_OPEN_HISTORYMSG_STORE", e[e.TIMEOUT = -1] = "TIMEOUT", e[e.UNKNOWN = -2] = "UNKNOWN", e[e.JOIN_IN_DISCUSSION = 21407] = "JOIN_IN_DISCUSSION", e[e.CREATE_DISCUSSION = 21408] = "CREATE_DISCUSSION", e[e.INVITE_DICUSSION = 21409] = "INVITE_DICUSSION", e[e.GET_USERINFO_ERROR = 23407] = "GET_USERINFO_ERROR", e[e.REJECTED_BY_BLACKLIST = 405] = "REJECTED_BY_BLACKLIST", e[e.RC_NET_CHANNEL_INVALID = 30001] = "RC_NET_CHANNEL_INVALID", e[e.RC_NET_UNAVAILABLE = 30002] = "RC_NET_UNAVAILABLE", e[e.RC_MSG_RESP_TIMEOUT = 30003] = "RC_MSG_RESP_TIMEOUT", e[e.RC_HTTP_SEND_FAIL = 30004] = "RC_HTTP_SEND_FAIL", e[e.RC_HTTP_REQ_TIMEOUT = 30005] = "RC_HTTP_REQ_TIMEOUT", e[e.RC_HTTP_RECV_FAIL = 30006] = "RC_HTTP_RECV_FAIL", e[e.RC_NAVI_RESOURCE_ERROR = 30007] = "RC_NAVI_RESOURCE_ERROR", e[e.RC_NODE_NOT_FOUND = 30008] = "RC_NODE_NOT_FOUND", e[e.RC_DOMAIN_NOT_RESOLVE = 30009] = "RC_DOMAIN_NOT_RESOLVE", e[e.RC_SOCKET_NOT_CREATED = 30010] = "RC_SOCKET_NOT_CREATED", e[e.RC_SOCKET_DISCONNECTED = 30011] = "RC_SOCKET_DISCONNECTED", e[e.RC_PING_SEND_FAIL = 30012] = "RC_PING_SEND_FAIL", e[e.RC_PONG_RECV_FAIL = 30013] = "RC_PONG_RECV_FAIL", e[e.RC_MSG_SEND_FAIL = 30014] = "RC_MSG_SEND_FAIL", e[e.RC_CONN_ACK_TIMEOUT = 31e3] = "RC_CONN_ACK_TIMEOUT", e[e.RC_CONN_PROTO_VERSION_ERROR = 31001] = "RC_CONN_PROTO_VERSION_ERROR", e[e.RC_CONN_ID_REJECT = 31002] = "RC_CONN_ID_REJECT", e[e.RC_CONN_SERVER_UNAVAILABLE = 31003] = "RC_CONN_SERVER_UNAVAILABLE", e[e.RC_CONN_USER_OR_PASSWD_ERROR = 31004] = "RC_CONN_USER_OR_PASSWD_ERROR", e[e.RC_CONN_NOT_AUTHRORIZED = 31005] = "RC_CONN_NOT_AUTHRORIZED", e[e.RC_CONN_REDIRECTED = 31006] = "RC_CONN_REDIRECTED", e[e.RC_CONN_PACKAGE_NAME_INVALID = 31007] = "RC_CONN_PACKAGE_NAME_INVALID", e[e.RC_CONN_APP_BLOCKED_OR_DELETED = 31008] = "RC_CONN_APP_BLOCKED_OR_DELETED", e[e.RC_CONN_USER_BLOCKED = 31009] = "RC_CONN_USER_BLOCKED", e[e.RC_DISCONN_KICK = 31010] = "RC_DISCONN_KICK", e[e.RC_DISCONN_EXCEPTION = 31011] = "RC_DISCONN_EXCEPTION", e[e.RC_QUERY_ACK_NO_DATA = 32001] = "RC_QUERY_ACK_NO_DATA", e[e.RC_MSG_DATA_INCOMPLETE = 32002] = "RC_MSG_DATA_INCOMPLETE", e[e.BIZ_ERROR_CLIENT_NOT_INIT = 33001] = "BIZ_ERROR_CLIENT_NOT_INIT", e[e.BIZ_ERROR_DATABASE_ERROR = 33002] = "BIZ_ERROR_DATABASE_ERROR", e[e.BIZ_ERROR_INVALID_PARAMETER = 33003] = "BIZ_ERROR_INVALID_PARAMETER", e[e.BIZ_ERROR_NO_CHANNEL = 33004] = "BIZ_ERROR_NO_CHANNEL", e[e.BIZ_ERROR_RECONNECT_SUCCESS = 33005] = "BIZ_ERROR_RECONNECT_SUCCESS", e[e.BIZ_ERROR_CONNECTING = 33006] = "BIZ_ERROR_CONNECTING", e[e.MSG_ROAMING_SERVICE_UNAVAILABLE = 33007] = "MSG_ROAMING_SERVICE_UNAVAILABLE", e[e.MSG_INSERT_ERROR = 33008] = "MSG_INSERT_ERROR", e[e.MSG_DEL_ERROR = 33009] = "MSG_DEL_ERROR", e[e.CONVER_REMOVE_ERROR = 34001] = "CONVER_REMOVE_ERROR", e[e.CONVER_GETLIST_ERROR = 34002] = "CONVER_GETLIST_ERROR", e[e.CONVER_SETOP_ERROR = 34003] = "CONVER_SETOP_ERROR", e[e.CONVER_TOTAL_UNREAD_ERROR = 34004] = "CONVER_TOTAL_UNREAD_ERROR", e[e.CONVER_TYPE_UNREAD_ERROR = 34005] = "CONVER_TYPE_UNREAD_ERROR", e[e.CONVER_ID_TYPE_UNREAD_ERROR = 34006] = "CONVER_ID_TYPE_UNREAD_ERROR", e[e.CONVER_CLEAR_ERROR = 34007] = "CONVER_CLEAR_ERROR", e[e.CONVER_GET_ERROR = 34008] = "CONVER_GET_ERROR", e[e.GROUP_SYNC_ERROR = 35001] = "GROUP_SYNC_ERROR", e[e.GROUP_MATCH_ERROR = 35002] = "GROUP_MATCH_ERROR", e[e.CHATROOM_ID_ISNULL = 36001] = "CHATROOM_ID_ISNULL", e[e.CHARTOOM_JOIN_ERROR = 36002] = "CHARTOOM_JOIN_ERROR", e[e.CHATROOM_HISMESSAGE_ERROR = 36003] = "CHATROOM_HISMESSAGE_ERROR", e[e.BLACK_ADD_ERROR = 37001] = "BLACK_ADD_ERROR", e[e.BLACK_GETSTATUS_ERROR = 37002] = "BLACK_GETSTATUS_ERROR", e[e.BLACK_REMOVE_ERROR = 37003] = "BLACK_REMOVE_ERROR", e[e.DRAF_GET_ERROR = 38001] = "DRAF_GET_ERROR", e[e.DRAF_SAVE_ERROR = 38002] = "DRAF_SAVE_ERROR", e[e.DRAF_REMOVE_ERROR = 38003] = "DRAF_REMOVE_ERROR", e[e.SUBSCRIBE_ERROR = 39001] = "SUBSCRIBE_ERROR", e[e.QNTKN_FILETYPE_ERROR = 41001] = "QNTKN_FILETYPE_ERROR", e[e.QNTKN_GET_ERROR = 41002] = "QNTKN_GET_ERROR", e[e.COOKIE_ENABLE = 51001] = "COOKIE_ENABLE", e[e.GET_MESSAGE_BY_ID_ERROR = 61001] = "GET_MESSAGE_BY_ID_ERROR", e[e.HAVNODEVICEID = 24001] = "HAVNODEVICEID", e[e.DEVICEIDISHAVE = 24002] = "DEVICEIDISHAVE", e[e.SUCCESS = 0] = "SUCCESS", e[e.FEILD = 24009] = "FEILD", e[e.VOIPISNULL = 24013] = "VOIPISNULL", e[e.NOENGINETYPE = 24010] = "NOENGINETYPE", e[e.NULLCHANNELNAME = 24011] = "NULLCHANNELNAME", e[e.VOIPDYANMICERROR = 24012] = "VOIPDYANMICERROR", e[e.NOVOIP = 24014] = "NOVOIP", e[e.INTERNALERRROR = 24015] = "INTERNALERRROR", e[e.VOIPCLOSE = 24016] = "VOIPCLOSE", e[e.CLOSE_BEFORE_OPEN = 51001] = "CLOSE_BEFORE_OPEN", e[e.ALREADY_IN_USE = 51002] = "ALREADY_IN_USE", e[e.INVALID_CHANNEL_NAME = 51003] = "INVALID_CHANNEL_NAME", e[e.VIDEO_CONTAINER_IS_NULL = 51004] = "VIDEO_CONTAINER_IS_NULL", e[e.DELETE_MESSAGE_ID_IS_NULL = 61001] = "DELETE_MESSAGE_ID_IS_NULL", e[e.CANCEL = 1] = "CANCEL", e[e.REJECT = 2] = "REJECT", e[e.HANGUP = 3] = "HANGUP", e[e.BUSYLINE = 4] = "BUSYLINE", e[e.NO_RESPONSE = 5] = "NO_RESPONSE", e[e.ENGINE_UN_SUPPORTED = 6] = "ENGINE_UN_SUPPORTED", e[e.NETWORK_ERROR = 7] = "NETWORK_ERROR", e[e.REMOTE_CANCEL = 11] = "REMOTE_CANCEL", e[e.REMOTE_REJECT = 12] = "REMOTE_REJECT", e[e.REMOTE_HANGUP = 13] = "REMOTE_HANGUP", e[e.REMOTE_BUSYLINE = 14] = "REMOTE_BUSYLINE", e[e.REMOTE_NO_RESPONSE = 15] = "REMOTE_NO_RESPONSE", e[e.REMOTE_ENGINE_UN_SUPPORTED = 16] = "REMOTE_ENGINE_UN_SUPPORTED", e[e.REMOTE_NETWORK_ERROR = 17] = "REMOTE_NETWORK_ERROR", e[e.VOIP_NOT_AVALIABLE = 18] = "VOIP_NOT_AVALIABLE"
	}(e.ErrorCode || (e.ErrorCode = {}));
	e.ErrorCode;
	! function(e) {
		e[e.MEDIA_AUDIO = 1] = "MEDIA_AUDIO", e[e.MEDIA_VEDIO = 2] = "MEDIA_VEDIO"
	}(e.VoIPMediaType || (e.VoIPMediaType = {}));
	e.VoIPMediaType;
	! function(e) {
		e[e.IMAGE = 1] = "IMAGE", e[e.AUDIO = 2] = "AUDIO", e[e.VIDEO = 3] = "VIDEO", e[e.FILE = 100] = "FILE"
	}(e.MediaType || (e.MediaType = {}));
	e.MediaType;
	! function(e) {
		e[e.SEND = 1] = "SEND", e[e.RECEIVE = 2] = "RECEIVE"
	}(e.MessageDirection || (e.MessageDirection = {}));
	e.MessageDirection;
	! function(e) {
		e[e.IMAGE = 1] = "IMAGE", e[e.AUDIO = 2] = "AUDIO", e[e.VIDEO = 3] = "VIDEO", e[e.FILE = 4] = "FILE"
	}(e.FileType || (e.FileType = {}));
	e.FileType;
	! e.RealTimeLocationErrorCode || (e.RealTimeLocationErrorCode = {}));
	e.RealTimeLocationErrorCode;
	! function(e) {
		e[e.RC_REAL_TIME_LOCATION_STATUS_IDLE = 0] = "RC_REAL_TIME_LOCATION_STATUS_IDLE", e[e.RC_REAL_TIME_LOCATION_STATUS_INCOMING = 1] = "RC_REAL_TIME_LOCATION_STATUS_INCOMING", e[e.RC_REAL_TIME_LOCATION_STATUS_OUTGOING = 2] = "RC_REAL_TIME_LOCATION_STATUS_OUTGOING", e[e.RC_REAL_TIME_LOCATION_STATUS_CONNECTED = 3] = "RC_REAL_TIME_LOCATION_STATUS_CONNECTED"
	}(e.RealTimeLocationStatus || (e.RealTimeLocationStatus = {}));
	e.RealTimeLocationStatus;
	! e.ReceivedStatus || (e.ReceivedStatus = {}));
	e.ReceivedStatus;
	! e.SearchType || (e.SearchType = {}));
	e.SearchType;
	! e.SentStatus || (e.SentStatus = {}));
	e.SentStatus;
	! e.ConnectionState || (e.ConnectionState = {}));
	e.ConnectionState
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t() {}
		return t.getInstance =  t.init = function(n, o, s) {
			t._instance || (t._instance = new t);
			var r = "//",
				i = "ws://";
			"file:" == document.location.protocol && (r = "http://"), "https:" == document.location.protocol && (i = "wss://");
			var a = !1;
			"function" != typeof WebSocket && (a = !0);
			var c = navigator.appVersion.split(";"),
				u = 0;
			c.length > 1 && (u = parseInt(c[1].replace(/[ ]/g, "")
				.replace(/MSIE/g, ""))), t._storageProvider = "object" == typeof localStorage ? new e.LocalStorageProvider : u > 4 && u < 8 ? new e.UserDataProvider : new e.MemeoryProvider;
			var g = e.ObjectTools.buildOptions(s, {
				protobuf: r + "cdn.ronghub.com/protobuf-2.1.6.min.js",
				long: r + "cdn.ronghub.com/Long.js",
				byteBuffer: r + "cdn.ronghub.com/byteBuffer.js",
				navi: r + "nav2-cn.ronghub.com",
				api: r + "api.cn.ronghub.com",
				emojiImage: r + "cdn.ronghub.com/css-sprite_bg-2.1.10.png",
				voiceLibamr: r + "cdn.ronghub.com/libamr-2.0.12.min.js",
				voicePCMdata: r + "cdn.ronghub.com/pcmdata-2.0.0.min.js",
				voiceSwfobjct: r + "cdn.ronghub.com/swfobject-2.0.0.min.js",
				voicePlaySwf: r + "cdn.ronghub.com/player-2.0.2.swf",
				callFile: r + "",
				isPolling: a,
				wsScheme: i,
				cookieValidity: 1,
				protocol: r,
				openMp: !0,
				isPrivate: !1,
				postImageUrl: r + "upload.qiniu.com/putb64/-1",
				fileServer: r + "upload.qiniu.com",
				fileUploadURL: r + "cdn.ronghub.com/plupload.min.js",
				fileQNURL: r + "cdn.ronghub.com/qiniu2.2.4.js"
			}, r);
			"https:" == document.location.protocol ? (g.fileServer = "https://" + (s && s.fileServer || "upload.qiniu.com"), g.postImageUrl = "https://" + (s && s.postImageUrl || "upload.qiniu.com/putb64/-1")) : (g.fileServer = "http://" + (s && s.fileServer || "upload.qiniu.com"), g.postImageUrl = "https://" + (s && s.postImageUrl || "upload.qiniu.com/putb64/-1")), (new e.FeaturePatcher)
				.patchAll();
			var d = {
				token: "",
				callback: null,
				hasModules: !0,
				global: window,
				lastReadTime: new e.LimitableMap,
				conversationList: [],
				appKey: n,
				publicServiceMap: new e.PublicServiceMap,
				providerType: 1,
				deltaTime: 0,
				filterMessages: [],
				isSyncRemoteConverList: !1,
				isUseWebSQLProvider: !1,
				otherDevice: !1,
				custStore: {},
				converStore: {
					latestMessage: {}
				},
				connectAckTime: 0,
				voipStategy: 0,
				isFirstPingMsg: !0,
				depend: g,
				listenerList: t._memoryStore.listenerList
			};
			t._memoryStore = d, (t._dataAccessProvider = o && "[object Object]" == Object.prototype.toString.call(o) ? o : new e.ServerDataProvider)
				.init(n), t._dataAccessProvider.setServerInfo({
					navi: location.protocol + g.navi + "/navi.xml"
				}), (t.MessageParams = {
					TextMessage: {
						objectName: "RC:TxtMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					ImageMessage: {
						objectName: "RC:ImgMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					DiscussionNotificationMessage: {
						objectName: "RC:DizNtf",
						msgTag: new e.MessageTag(!0, !0)
					},
					VoiceMessage: {
						objectName: "RC:VcMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					RichContentMessage: {
						objectName: "RC:ImgTextMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					FileMessage: {
						objectName: "RC:FileMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					UnknownMessage: {
						objectName: "",
						msgTag: new e.MessageTag(!0, !0)
					},
					LocationMessage: {
						objectName: "RC:LBSMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					InformationNotificationMessage: {
						objectName: "RC:InfoNtf",
						msgTag: new e.MessageTag(!0, !0)
					},
					ContactNotificationMessage: {
						objectName: "RC:ContactNtf",
						msgTag: new e.MessageTag(!0, !0)
					},
					ProfileNotificationMessage: {
						objectName: "RC:ProfileNtf",
						msgTag: new e.MessageTag(!0, !0)
					},
					CommandNotificationMessage: {
						objectName: "RC:CmdNtf",
						msgTag: new e.MessageTag(!0, !0)
					},
					PublicServiceRichContentMessage: {
						objectName: "RC:PSImgTxtMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					PublicServiceMultiRichContentMessage: {
						objectName: "RC:PSMultiImgTxtMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					JrmfReadPacketMessage: {
						objectName: "RCJrmf:RpMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					JrmfReadPacketOpenedMessage: {
						objectName: "RCJrmf:RpOpendMsg",
						msgTag: new e.MessageTag(!0, !0)
					},
					GroupNotificationMessage: {
						objectName: "RC:GrpNtf",
						msgTag: new e.MessageTag(!0, !0)
					},
					CommandMessage: {
						objectName: "RC:CmdMsg",
						msgTag: new e.MessageTag(!1, !1)
					},
					TypingStatusMessage: {
						objectName: "RC:TypSts",
						msgTag: new e.MessageTag(!1, !1)
					},
					PublicServiceCommandMessage: {
						objectName: "RC:PSCmd",
						msgTag: new e.MessageTag(!1, !1)
					},
					RecallCommandMessage: {
						objectName: "RC:RcCmd",
						msgTag: new e.MessageTag(!1, !0)
					},
					SyncReadStatusMessage: {
						objectName: "RC:SRSMsg",
						msgTag: new e.MessageTag(!1, !1)
					},
					ReadReceiptRequestMessage: {
						objectName: "RC:RRReqMsg",
						msgTag: new e.MessageTag(!1, !1)
					},
					ReadReceiptResponseMessage: {
						objectName: "RC:RRRspMsg",
						msgTag: new e.MessageTag(!1, !1)
					},
					ChangeModeResponseMessage: {
						objectName: "RC:CsChaR",
						msgTag: new e.MessageTag(!1, !1)
					},
					ChangeModeMessage: {
						objectName: "RC:CsCha",
						msgTag: new e.MessageTag(!1, !1)
					},
					EvaluateMessage: {
						objectName: "RC:CsEva",
						msgTag: new e.MessageTag(!1, !1)
					},
					CustomerContact: {
						objectName: "RC:CsContact",
						msgTag: new e.MessageTag(!1, !1)
					},
					HandShakeMessage: {
						objectName: "RC:CsHs",
						msgTag: new e.MessageTag(!1, !1)
					},
					HandShakeResponseMessage: {
						objectName: "RC:CsHsR",
						msgTag: new e.MessageTag(!1, !1)
					},
					SuspendMessage: {
						objectName: "RC:CsSp",
						msgTag: new e.MessageTag(!1, !1)
					},
					TerminateMessage: {
						objectName: "RC:CsEnd",
						msgTag: new e.MessageTag(!1, !1)
					},
					CustomerStatusUpdateMessage: {
						objectName: "RC:CsUpdate",
						msgTag: new e.MessageTag(!1, !1)
					},
					ReadReceiptMessage: {
						objectName: "RC:ReadNtf",
						msgTag: new e.MessageTag(!1, !1)
					}
				})
				.AcceptMessage = {
					objectName: "RC:VCAccept",
					msgTag: new e.MessageTag(!1, !1)
				}, t.MessageParams.RingingMessage = {
					objectName: "RC:VCRinging",
					msgTag: new e.MessageTag(!1, !1)
				}, t.MessageParams.SummaryMessage = {
					objectName: "RC:VCSummary",
					msgTag: new e.MessageTag(!1, !1)
				}, t.MessageParams.HungupMessage = {
					objectName: "RC:VCHangup",
					msgTag: new e.MessageTag(!1, !1)
				}, t.MessageParams.InviteMessage = {
					objectName: "RC:VCInvite",
					msgTag: new e.MessageTag(!1, !1)
				}, t.MessageParams.MediaModifyMessage = {
					objectName: "RC:VCModifyMedia",
					msgTag: new e.MessageTag(!1, !1)
				}, t.MessageParams.MemberModifyMessage = {
					objectName: "RC:VCModifyMem",
					msgTag: new e.MessageTag(!1, !1)
				}, t.MessageType = {
					TextMessage: "TextMessage",
					ImageMessage: "ImageMessage",
					DiscussionNotificationMessage: "DiscussionNotificationMessage",
					VoiceMessage: "VoiceMessage",
					RichContentMessage: "RichContentMessage",
					HandshakeMessage: "HandshakeMessage",
					UnknownMessage: "UnknownMessage",
					LocationMessage: "LocationMessage",
					InformationNotificationMessage: "InformationNotificationMessage",
					ContactNotificationMessage: "ContactNotificationMessage",
					ProfileNotificationMessage: "ProfileNotificationMessage",
					CommandNotificationMessage: "CommandNotificationMessage",
					CommandMessage: "CommandMessage",
					TypingStatusMessage: "TypingStatusMessage",
					ChangeModeResponseMessage: "ChangeModeResponseMessage",
					ChangeModeMessage: "ChangeModeMessage",
					EvaluateMessage: "EvaluateMessage",
					HandShakeMessage: "HandShakeMessage",
					HandShakeResponseMessage: "HandShakeResponseMessage",
					SuspendMessage: "SuspendMessage",
					TerminateMessage: "TerminateMessage",
					CustomerContact: "CustomerContact",
					CustomerStatusUpdateMessage: "CustomerStatusUpdateMessage",
					SyncReadStatusMessage: "SyncReadStatusMessage",
					ReadReceiptRequestMessage: "ReadReceiptRequestMessage",
					ReadReceiptResponseMessage: "ReadReceiptResponseMessage",
					FileMessage: "FileMessage",
					AcceptMessage: "AcceptMessage",
					RingingMessage: "RingingMessage",
					SummaryMessage: "SummaryMessage",
					HungupMessage: "HungupMessage",
					InviteMessage: "InviteMessage",
					MediaModifyMessage: "MediaModifyMessage",
					MemberModifyMessage: "MemberModifyMessage",
					JrmfReadPacketMessage: "JrmfReadPacketMessage",
					JrmfReadPacketOpenedMessage: "JrmfReadPacketOpenedMessage"
				}
		}, t.connect = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "object", "string|null|object|global|undefined"], "connect", !0), t._dataAccessProvider.connect(n, o, s)
		}, t.initApp = function(e, n) {
			t.init(e.appkey, e.dataAccessProvider, e.opts), t.connect(e.token, {
				onSuccess: 
				onTokenIncorrect: function() {
					throw new Error("token expired")
				},
				onError: function(e) {}
			})
		}, t.reconnect = function(e) {
			t._dataAccessProvider.reconnect(e)
		}, t.registerMessageType = function(e, n, o, s) {
			t._dataAccessProvider.registerMessageType(e, n, o, s), t.RegisterMessage[e].messageName = e, t.MessageType[e] = e, t.MessageParams[e] = {
				objectName: n,
				msgTag: o
			}
		}, t.setConnectionStatusListener = function(e) {
			t._dataAccessProvider ? t._dataAccessProvider.setConnectionStatusListener(e) : t._memoryStore.listenerList.push(e)
		}, t.setOnReceiveMessageListener = function(e) {
			t._dataAccessProvider ? t._dataAccessProvider.setOnReceiveMessageListener(e) : t._memoryStore.listenerList.push(e)
		}, t.prototype.logout = function() {
			t._dataAccessProvider.logout()
		}, t.prototype.disconnect = function() {
			t._dataAccessProvider.disconnect()
		}, t.prototype.startCustomService = function(n, o, s) {
			if (n && o) {
				var r = new e.HandShakeMessage(s),
					i = this;
				e.RongIMClient._memoryStore.custStore.isInit = !0, t.getInstance()
					.sendMessage(e.ConversationType.CUSTOMER_SERVICE, n, r, {
						onSuccess: function(e) {
							e.isBlack ? (o.onError(), i.stopCustomeService(n, {
								onSuccess: function() {},
								onError: function() {}
							})) : o.onSuccess()
						},
						onError: function() {
							o.onError()
						}
					})
			}
		}, t.prototype.stopCustomeService = function(n, o) {
			if (n && o) {
				var s = t._memoryStore.custStore[n];
				if (s) {
					var r = new e.SuspendMessage({
						sid: s.sid,
						uid: s.uid,
						pid: s.pid
					});
					this.sendCustMessage(n, r, {
						onSuccess: function() {
							setTimeout(function() {
								o.onSuccess()
							})
						},
						onError: function() {
							setTimeout(function() {
								o.onError()
							})
						}
					})
				}
			}
		}, t.prototype.switchToHumanMode = function(n, o) {
			if (n && o) {
				var s = t._memoryStore.custStore[n];
				if (s) {
					var r = new e.ChangeModeMessage({
						sid: s.sid,
						uid: s.uid,
						pid: s.pid
					});
					this.sendCustMessage(n, r, o)
				}
			}
		}, t.prototype.evaluateRebotCustomService = function(n, o, s, r) {
			if (n && r) {
				var i = t._memoryStore.custStore[n];
				if (i) {
					var a = new e.EvaluateMessage({
						sid: i.sid,
						uid: i.uid,
						pid: i.pid,
						isRobotResolved: o,
						sugest: s,
						type: 0
					});
					this.sendCustMessage(n, a, r)
				}
			}
		}, t.prototype.evaluateHumanCustomService = function(n, o, s, r) {
			if (n && r) {
				var i = t._memoryStore.custStore[n];
				if (i) {
					var a = new e.EvaluateMessage({
						sid: i.sid,
						uid: i.uid,
						pid: i.pid,
						humanValue: o,
						sugest: s,
						type: 1
					});
					this.sendCustMessage(n, a, r)
				}
			}
		}, t.prototype.sendCustMessage = function(n, o, s) {
			t.getInstance()
				.sendMessage(e.ConversationType.CUSTOMER_SERVICE, n, o, {
					onSuccess: 
					onError: function() {
						s.onError()
					}
				})
		}, t.prototype.getCurrentConnectionStatus =  t.prototype.getConnectionChannel = function() {
			return e.Transportations._TransportType == e.Socket.XHR_POLLING ? e.ConnectionChannel.XHR_POLLING : e.Transportations._TransportType == e.Socket.WEBSOCKET ? e.ConnectionChannel.WEBSOCKET : void 0
		}, t.prototype.getStorageProvider =  t.prototype.setFilterMessages = function(e) {
			"[object Array]" == Object.prototype.toString.call(e) && (t._memoryStore.filterMessages = e)
		}, t.prototype.getRongCloudDynamicKey = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["number", "string", "object"], "getRongCloudDynamicKey");
			var r = new Modules.VoipDynamicInput;
			r.setEngineType(n), r.setChannelName(o), t.bridge.queryMsg(32, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, s, "VoipDynamicOutput")
		}, t.prototype.getCurrentUserId =  t.prototype.getDeltaTime =  t.prototype.getMessage = function(e, n) {
			t._dataAccessProvider.getMessage(e, n)
		}, t.prototype.deleteLocalMessages = function(e, n, o, s) {
			t._dataAccessProvider.removeLocalMessage(e, n, o, s)
		}, t.prototype.updateMessage = function(e, n) {
			t._dataAccessProvider.updateMessage(e, n)
		}, t.prototype.clearMessages = function(e, n, o) {
			t._dataAccessProvider.clearMessages(e, n, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						o.onError(e)
					})
				}
			})
		}, t.prototype.clearMessagesUnreadStatus = function(e, n, o) {
			t._dataAccessProvider.updateMessages(e, n, "readStatus", null, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						o.onError(e)
					})
				}
			})
		}, t.prototype.deleteRemoteMessages = function(t, n, o, s) {
			e.CheckParam.getInstance()
				.check(["number", "string", "array", "object"], "deleteRemoteMessages"), 0 != o.length ? (o.length > 100 && (o.length = 100), s.onSuccess(!0)) : s.onError(e.ErrorCode.DELETE_MESSAGE_ID_IS_NULL)
		}, t.prototype.deleteMessages = function(e, n, o, s) {
			t._dataAccessProvider.removeMessage(e, n, o, {
				onSuccess: function(e) {
					setTimeout(function() {
						s.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						s.onError(e)
					})
				}
			})
		}, t.prototype.sendLocalMessage = function(n, o) {
			e.CheckParam.getInstance()
				.check(["object", "object"], "sendLocalMessage"), t._dataAccessProvider.updateMessage(n), this.sendMessage(n.conversationType, n.targetId, n.content, o)
		}, t.prototype.sendMessage = function(n, o, s, r, i, a, c, u) {
			e.CheckParam.getInstance()
				.check(["number", "string", "object", "object", "undefined|object|null|global|boolean", "undefined|object|null|global|string", "undefined|object|null|global|string", "undefined|object|null|global|number"], "sendMessage"), t._dataAccessProvider.sendMessage(n, o, s, r, i, a, c, u)
		}, t.prototype.sendReceiptResponse = function(e, n, o) {
			t._dataAccessProvider.sendReceiptResponse(e, n, o)
		}, t.prototype.sendTypingStatusMessage = function(e, n, o, s) {
			t._dataAccessProvider.sendTypingStatusMessage(e, n, o, s)
		}, t.prototype.sendStatusMessage = function(e, t, n) {
			throw new Error("Not implemented yet")
		}, t.prototype.sendTextMessage = function(e, n, o, s) {
			t._dataAccessProvider.sendTextMessage(e, n, o, s)
		}, t.prototype.sendRecallMessage = function(e, n) {
			t._dataAccessProvider.sendRecallMessage(e, n)
		}, t.prototype.insertMessage = function(n, o, s, r, i) {
			var a = new e.Message;
			a.conversationType = n, a.targetId = o, a.senderUserId = s, a.content = r, a.sentTime = +new Date, a.messageType = r.messageName, a.objectName = t.MessageParams[r.messageName].objectName, t._dataAccessProvider.addMessage(n, o, a, i)
		}, t.prototype.getHistoryMessages = function(n, o, s, r, i, a) {
			if (e.CheckParam.getInstance()
				.check(["number", "string", "number|null|global|object", "number", "object", "undefined|object|null|global|string"], "getHistoryMessages"), r > 20) throw new Error("HistroyMessage count must be less than or equal to 20!");
			if (n.valueOf() < 0) throw new Error("ConversationType must be greater than -1");
			t._dataAccessProvider.getHistoryMessages(n, o, s, r, i, a)
		}, t.prototype.getRemoteHistoryMessages = function(n, o, s, r, i) {
			e.CheckParam.getInstance()
				.check(["number", "string", "number|null|global|object", "number", "object"], "getRemoteHistoryMessages"), r > 20 ? i.onError(e.ErrorCode.RC_CONN_PROTO_VERSION_ERROR) : n.valueOf() < 0 ? i.onError(e.ErrorCode.RC_CONN_PROTO_VERSION_ERROR) : t._dataAccessProvider.getRemoteHistoryMessages(n, o, s, r, i)
		}, t.prototype.hasRemoteUnreadMessages = function(e, n) {
			t._dataAccessProvider.hasRemoteUnreadMessages(e, n)
		}, t.prototype.getTotalUnreadCount = function(e, n) {
			t._dataAccessProvider.getTotalUnreadCount({
				onSuccess: function(t) {
					setTimeout(function() {
						e.onSuccess(t)
					})
				},
				onError: function(t) {
					setTimeout(function() {
						e.onError(t)
					})
				}
			}, n)
		}, t.prototype.getConversationUnreadCount = function(e, n) {
			t._dataAccessProvider.getConversationUnreadCount(e, {
				onSuccess: function(e) {
					setTimeout(function() {
						n.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						n.onError(e)
					})
				}
			})
		}, t.prototype.getUnreadCount = function(e, n, o) {
			t._dataAccessProvider.getUnreadCount(e, n, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						o.onError(e)
					})
				}
			})
		}, t.prototype.clearUnreadCountByTimestamp =  t.prototype.clearUnreadCount = function(e, n, o) {
			t._dataAccessProvider.clearUnreadCount(e, n, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						o.onError(e)
					})
				}
			})
		}, t.prototype.clearLocalStorage =  t.prototype.setMessageExtra = function(e, n, o) {
			t._dataAccessProvider.setMessageExtra(e, n, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						o.onError(e)
					})
				}
			})
		}, t.prototype.setMessageReceivedStatus = function(e, n, o) {
			t._dataAccessProvider.setMessageReceivedStatus(e, n, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						o.onError(e)
					})
				}
			})
		}, t.prototype.setMessageSentStatus = function(e, n, o) {
			t._dataAccessProvider.setMessageSentStatus(e, n, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						o.onError(e)
					})
				}
			})
		}, t.prototype.clearTextMessageDraft = function(n, o) {
			e.CheckParam.getInstance()
				.check(["number", "string", "object"], "clearTextMessageDraft");
			var s = "darf_" + n + "_" + o;
			return delete t._memoryStore[s], !0
		}, t.prototype.getTextMessageDraft = function(n, o) {
			if (e.CheckParam.getInstance()
				.check(["number", "string", "object"], "getTextMessageDraft"), "" == o || n < 0) throw new Error("params error : " + e.ErrorCode.DRAF_GET_ERROR);
			var s = "darf_" + n + "_" + o;
			return t._memoryStore[s]
		}, t.prototype.saveTextMessageDraft = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["number", "string", "string", "object"], "saveTextMessageDraft");
			var r = "darf_" + n + "_" + o;
			return t._memoryStore[r] = s, !0
		}, t.prototype.searchConversationByContent =  t.prototype.searchMessageByContent = function(e, n, o, s, r, i, a) {
			t._dataAccessProvider.searchMessageByContent(e, n, o, s, r, i, a)
		}, t.prototype.clearConversations = function(n) {
			for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
			0 == o.length && (o = [e.ConversationType.CHATROOM, e.ConversationType.CUSTOMER_SERVICE, e.ConversationType.DISCUSSION, e.ConversationType.GROUP, e.ConversationType.PRIVATE, e.ConversationType.SYSTEM, e.ConversationType.PUBLIC_SERVICE, e.ConversationType.APP_PUBLIC_SERVICE]), t._dataAccessProvider.clearConversations(o, {
				onSuccess: function(e) {
					setTimeout(function() {
						n.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						n.onError(e)
					})
				}
			})
		}, t.prototype.getConversation = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["number", "string", "object"], "getConversation"), t._dataAccessProvider.getConversation(n, o, {
					onSuccess: function(e) {
						setTimeout(function() {
							s.onSuccess(e)
						})
					},
					onError: function(e) {
						setTimeout(function() {
							s.onError(e)
						})
					}
				})
		}, t.prototype.pottingConversation = function(n) {
			var o = this,
				s = !1;
			t._dataAccessProvider.getConversation(n.type, n.userId, {
				onSuccess: function(r) {
					r ? s = !0 : r = new e.Conversation, r.conversationType = n.type, r.targetId = n.userId, r.latestMessage = e.MessageUtil.messageParser(n.msg), r.latestMessageId = r.latestMessage.messageId, r.objectName = r.latestMessage.objectName, r.receivedStatus = r.latestMessage.receivedStatus, r.receivedTime = r.latestMessage.receiveTime, r.sentStatus = r.latestMessage.sentStatus, r.sentTime = r.latestMessage.sentTime;
					var i = t._storageProvider.getItem("mentioneds_" + e.Bridge._client.userId + "_" + r.conversationType + "_" + r.targetId);
					if (i) {
						var a = JSON.parse(i);
						r.mentionedMsg = a[n.type + "_" + n.userId]
					}
					if (!s)
						if (e.MessageUtil.supportLargeStorage()) {
							var c = t._storageProvider.getItem("cu" + e.Bridge._client.userId + n.type + n.userId);
							r.unreadMessageCount = Number(c)
						} else r.unreadMessageCount = 0;
					r.conversationType == e.ConversationType.DISCUSSION && o.getDiscussion(n.userId, {
						onSuccess: 
						onError: function(e) {}
					}), t._dataAccessProvider.addConversation(r, {
						onSuccess: function(e) {}
					})
				},
				onError: function(e) {}
			})
		}, t.prototype.sortConversationList = function(e) {
			for (var n = [], o = 0, s = e.length; o < s; o++)
				if (e[o])
					if (e[o].isTop) n.push(e[o]), e.splice(o, 1);
					else
						for (var r = 0; r < s - o - 1; r++)
							if (e[r].sentTime < e[r + 1].sentTime) {
								var i = e[r];
								e[r] = e[r + 1], e[r + 1] = i
							} return t._memoryStore.conversationList = n.concat(e)
		}, t.prototype.getConversationList = function(n, o, s, r) {
			e.CheckParam.getInstance()
				.check(["object", "null|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getConversationList");
			t._dataAccessProvider.getConversationList({
				onSuccess: function(e) {
					o || t._dataAccessProvider ? setTimeout(function() {
						n.onSuccess(e)
					}) : setTimeout(function() {
						n.onSuccess(t._memoryStore.conversationList)
					})
				},
				onError: function(t) {
					t === e.ErrorCode.TIMEOUT ? n.onError(t) : n.onSuccess([])
				}
			}, o, s, r)
		}, t.prototype.getRemoteConversationList = function(n, o, s, r) {
			e.CheckParam.getInstance()
				.check(["object", "null|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getRemoteConversationList"), t._dataAccessProvider.getRemoteConversationList(n, o, s, r)
		}, t.prototype.updateConversation =  t.prototype.createConversation = function(t, n, o) {
			e.CheckParam.getInstance()
				.check(["number", "string", "string"], "createConversation");
			var s = new e.Conversation;
			return s.targetId = n, s.conversationType = t, s.conversationTitle = o, s.latestMessage = {}, s.unreadMessageCount = 0, s
		}, t.prototype.removeConversation = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["number", "string", "object"], "removeConversation"), t._dataAccessProvider.removeConversation(n, o, s)
		}, t.prototype.setConversationHidden = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["number", "string", "boolean"], "setConversationHidden"), t._dataAccessProvider.setConversationHidden(n, o, s)
		}, t.prototype.setConversationToTop = function(n, o, s, r) {
			e.CheckParam.getInstance()
				.check(["number", "string", "boolean", "object"], "setConversationToTop"), t._dataAccessProvider.setConversationToTop(n, o, s, {
					onSuccess: function(e) {
						setTimeout(function() {
							r.onSuccess(e)
						})
					},
					onError: function(e) {
						setTimeout(function() {
							r.onError(e)
						})
					}
				})
		}, t.prototype.getConversationNotificationStatus = function(e, t, n) {
			throw new Error("Not implemented yet")
		}, t.prototype.setConversationNotificationStatus = function(e, t, n, o) {
			throw new Error("Not implemented yet")
		}, t.prototype.getNotificationQuietHours = function(e) {
			throw new Error("Not implemented yet")
		}, t.prototype.removeNotificationQuietHours =  t.prototype.setNotificationQuietHours = function(e, t, n) {
			throw new Error("Not implemented yet")
		}, t.prototype.addMemberToDiscussion = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "array", "object"], "addMemberToDiscussion"), t._dataAccessProvider.addMemberToDiscussion(n, o, s)
		}, t.prototype.createDiscussion = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "array", "object"], "createDiscussion"), t._dataAccessProvider.createDiscussion(n, o, s)
		}, t.prototype.getDiscussion = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "object"], "getDiscussion"), t._dataAccessProvider.getDiscussion(n, o)
		}, t.prototype.quitDiscussion = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "object"], "quitDiscussion"), t._dataAccessProvider.quitDiscussion(n, o)
		}, t.prototype.removeMemberFromDiscussion = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "string", "object"], "removeMemberFromDiscussion"), t._dataAccessProvider.removeMemberFromDiscussion(n, o, s)
		}, t.prototype.setDiscussionInviteStatus = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "number", "object"], "setDiscussionInviteStatus"), t._dataAccessProvider.setDiscussionInviteStatus(n, o, s)
		}, t.prototype.setDiscussionName = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "string", "object"], "setDiscussionName"), t._dataAccessProvider.setDiscussionName(n, o, s)
		}, t.prototype.joinGroup = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "string", "object"], "joinGroup"), t._dataAccessProvider.joinGroup(n, o, s)
		}, t.prototype.quitGroup = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "object"], "quitGroup"), t._dataAccessProvider.quitGroup(n, o)
		}, t.prototype.syncGroup = function(n, o) {
			e.CheckParam.getInstance()
				.check(["array", "object"], "syncGroup"), t._dataAccessProvider.syncGroup(n, o)
		}, t.prototype.joinChatRoom = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["string", "number", "object"], "joinChatRoom"), "" != n ? t._dataAccessProvider.joinChatRoom(n, o, s) : setTimeout(function() {
					s.onError(e.ErrorCode.CHATROOM_ID_ISNULL)
				})
		}, t.prototype.setChatroomHisMessageTimestamp = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "number"], "setChatroomHisMessageTimestamp"), t._dataAccessProvider.setChatroomHisMessageTimestamp(n, o)
		}, t.prototype.getChatRoomHistoryMessages = function(n, o, s, r) {
			e.CheckParam.getInstance()
				.check(["string", "number", "number", "object"], "getChatRoomHistoryMessages"), t._dataAccessProvider.getChatRoomHistoryMessages(n, o, s, r)
		}, t.prototype.getChatRoomInfo = function(n, o, s, r) {
			e.CheckParam.getInstance()
				.check(["string", "number", "number", "object"], "getChatRoomInfo"), t._dataAccessProvider.getChatRoomInfo(n, o, s, r)
		}, t.prototype.quitChatRoom = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "object"], "quitChatRoom"), t._dataAccessProvider.quitChatRoom(n, o)
		}, t.prototype.getRemotePublicServiceList = function(n, o) {
			if (t._memoryStore.depend.openMp) {
				var s = new Modules.PullMpInput;
				o ? s.setTime(o) : s.setTime(0), s.setMpid(""), t.bridge.queryMsg(28, e.MessageUtil.ArrayForm(s.toArrayBuffer()), e.Bridge._client.userId, {
					onSuccess: function(e) {
						t._memoryStore.publicServiceMap.publicServiceList.length = 0, t._memoryStore.publicServiceMap.publicServiceList = e, n.onSuccess(e)
					},
					onError: function(e) {
						n.onError(e)
					}
				}, "PullMpOutput")
			}
		}, t.prototype.getPublicServiceList = function(n) {
			t._memoryStore.depend.openMp && (e.CheckParam.getInstance()
				.check(["object"], "getPublicServiceList"), this.getRemotePublicServiceList(n))
		}, t.prototype.getPublicServiceProfile = function(n, o, s) {
			if (t._memoryStore.depend.openMp) {
				e.CheckParam.getInstance()
					.check(["number", "string", "object"], "getPublicServiceProfile");
				var r = t._memoryStore.publicServiceMap.get(n, o);
				s.onSuccess(r)
			}
		}, t.prototype.pottingPublicSearchType = function(e, n) {
			if (t._memoryStore.depend.openMp) {
				var o = 0;
				return 0 == e ? (o |= 3, o |= 0 == n ? 12 : 48) : 1 == e ? (o |= 1, o |= 0 == n ? 8 : 32) : (o |= 2, o |= 0 == e ? 4 : 16), o
			}
		}, t.prototype.searchPublicService = function(n, o, s) {
			if (t._memoryStore.depend.openMp) {
				e.CheckParam.getInstance()
					.check(["number", "string", "object"], "searchPublicService");
				var r = new Modules.SearchMpInput;
				r.setType(this.pottingPublicSearchType(0, n)), r.setId(o), t.bridge.queryMsg(29, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, s, "SearchMpOutput")
			}
		}, t.prototype.searchPublicServiceByType = function(n, o, s, r) {
			if (t._memoryStore.depend.openMp) {
				e.CheckParam.getInstance()
					.check(["number", "number", "string", "object"], "searchPublicServiceByType");
				var i = n == e.ConversationType.APP_PUBLIC_SERVICE ? 2 : 1,
					a = new Modules.SearchMpInput;
				a.setType(this.pottingPublicSearchType(i, o)), a.setId(s), t.bridge.queryMsg(29, e.MessageUtil.ArrayForm(a.toArrayBuffer()), e.Bridge._client.userId, r, "SearchMpOutput")
			}
		}, t.prototype.subscribePublicService = function(n, o, s) {
			if (t._memoryStore.depend.openMp) {
				e.CheckParam.getInstance()
					.check(["number", "string", "object"], "subscribePublicService");
				var r = new Modules.MPFollowInput,
					i = this,
					a = n == e.ConversationType.APP_PUBLIC_SERVICE ? "mcFollow" : "mpFollow";
				r.setId(o), t.bridge.queryMsg(a, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, {
					onSuccess: function() {
						i.getRemotePublicServiceList({
							onSuccess: function() {},
							onError: function() {}
						}), s.onSuccess()
					},
					onError: 				}, "MPFollowOutput")
			}
		}, t.prototype.unsubscribePublicService = function(n, o, s) {
			if (t._memoryStore.depend.openMp) {
				e.CheckParam.getInstance()
					.check(["number", "string", "object"], "unsubscribePublicService");
				var r = new Modules.MPFollowInput,
					i = n == e.ConversationType.APP_PUBLIC_SERVICE ? "mcUnFollow" : "mpUnFollow";
				r.setId(o), t.bridge.queryMsg(i, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, {
					onSuccess: function() {
						t._memoryStore.publicServiceMap.remove(n, o), s.onSuccess()
					},
					onError: 				}, "MPFollowOutput")
			}
		}, t.prototype.addToBlacklist = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "object"], "addToBlacklist"), t._dataAccessProvider.addToBlacklist(n, o)
		}, t.prototype.getBlacklist = function(n) {
			e.CheckParam.getInstance()
				.check(["object"], "getBlacklist"), t._dataAccessProvider.getBlacklist(n)
		}, t.prototype.getBlacklistStatus = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "object"], "getBlacklistStatus"), t._dataAccessProvider.getBlacklistStatus(n, o)
		}, t.prototype.removeFromBlacklist = function(n, o) {
			e.CheckParam.getInstance()
				.check(["string", "object"], "removeFromBlacklist"), t._dataAccessProvider.removeFromBlacklist(n, o)
		}, t.prototype.getFileToken = function(n, o) {
			e.CheckParam.getInstance()
				.check(["number", "object"], "getQnTkn"), t._dataAccessProvider.getFileToken(n, o)
		}, t.prototype.getFileUrl = function(n, o, s, r) {
			e.CheckParam.getInstance()
				.check(["number", "string", "string|global|object|null", "object"], "getQnTkn"), t._dataAccessProvider.getFileUrl(n, o, s, r)
		}, t.prototype.addRealTimeLocationListener =  t.prototype.getRealTimeLocation = function(e, t) {
			throw new Error("Not implemented yet")
		}, t.prototype.getRealTimeLocationCurrentState = function(e, t) {
			throw new Error("Not implemented yet")
		}, t.prototype.getRealTimeLocationParticipants = function(e, t) {
			throw new Error("Not implemented yet")
		}, t.prototype.joinRealTimeLocation = function(e, t) {
			throw new Error("Not implemented yet")
		}, t.prototype.quitRealTimeLocation = function(e, t) {
			throw new Error("Not implemented yet")
		}, t.prototype.startRealTimeLocation =  t.prototype.updateRealTimeLocationStatus =  t.prototype.startCall = function(n, o, s, r, i, a) {
			e.CheckParam.getInstance()
				.check(["number", "string", "array", "number", "string", "object"], "startCall"), t._memoryStore.voipStategy ? t._voipProvider.startCall(n, o, s, r, i, a) : a.onError(e.ErrorCode.VOIP_NOT_AVALIABLE)
		}, t.prototype.joinCall = function(n, o) {
			e.CheckParam.getInstance()
				.check(["number", "object"], "joinCall"), t._memoryStore.voipStategy ? t._voipProvider.joinCall(n, o) : o.onError(e.ErrorCode.VOIP_NOT_AVALIABLE)
		}, t.prototype.hungupCall = function(n, o, s) {
			e.CheckParam.getInstance()
				.check(["number", "string", "number"], "hungupCall"), t._memoryStore.voipStategy && t._voipProvider.hungupCall(n, o, s)
		}, t.prototype.changeMediaType = function(n, o, s, r) {
			e.CheckParam.getInstance()
				.check(["number", "string", "number", "object"], "changeMediaType"), t._memoryStore.voipStategy ? t._voipProvider.changeMediaType(n, o, s, r) : r.onError(e.ErrorCode.VOIP_NOT_AVALIABLE)
		}, t.prototype.getUnreadMentionedMessages =  t.prototype.clearListeners =  t.prototype.getUserStatus = function(e, n) {
			t._dataAccessProvider.getUserStatus(e, n)
		}, t.prototype.setUserStatus = function(e, n) {
			t._dataAccessProvider.setUserStatus(e, n)
		}, t.prototype.subscribeUserStatus =  t.prototype.setOnReceiveStatusListener =  t.MessageType = {}, t.RegisterMessage = {}, t._memoryStore = {
			listenerList: []
		}, t.isNotPullMsg = !1, t
	}();
	if (e.RongIMClient = t, "function" == typeof require && "object" == typeof module && module && module.id && "object" == typeof exports && exports) module.exports = e;
	else if ("function" == typeof define && define.amd) {
		navigator.appName;
		var n = navigator.appVersion.split(";");
		n.length > 1 && parseInt(n[1].replace(/[ ]/g, "")
			.replace(/MSIE/g, "")) < 10 && !0, define("RongIMLib", ["md5"], 
	} else window.RongIMClient = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	! e.Qos || (e.Qos = {}));
	var t = e.Qos;
	! e.Type || (e.Type = {}));
	e.Type;
	var n = ["invtDiz", "crDiz", "qnUrl", "userInf", "dizInf", "userInf", "joinGrp", "quitDiz", "exitGrp", "evctDiz", ["", "ppMsgP", "pdMsgP", "pgMsgP", "chatMsg", "pcMsgP", "", "pmcMsgN", "pmpMsgN"], "pdOpen", "rename", "uGcmpr", "qnTkn", "destroyChrm", "createChrm", "exitChrm", "queryChrm", "joinChrm", "pGrps", "addBlack", "rmBlack", "getBlack", "blackStat", "addRelation", "qryRelation", "delRelation", "pullMp", "schMp", "qnTkn", "qnUrl", "qryVoipK", "delMsg", "qryCHMsg"],
		o = function() {
			function t(n, o, r) {
				if (this.connectionStatus = -1, this.delOnChangedCount = 0, this.url = n.host + "/websocket?appId=" + r.appId + "&token=" + encodeURIComponent(r.token) + "&sdkVer=" + r.sdkVer + "&apiVer=" + r.apiVer, this.self = r, this.socket = s.getInstance()
					.createServer(), this.socket.connect(this.url, o), !("object" == typeof t._ConnectionStatusListener && "onChanged" in t._ConnectionStatusListener)) throw new Error("setConnectStatusListener:Parameter format is incorrect");
				var a = this;
				a.socket.on("StatusChanged", function(n) {
					if (a.connectionStatus = n, n === e.ConnectionStatus.NETWORK_UNAVAILABLE) {
						var o = e.RongIMClient._storageProvider.getItemKey("navi"),
							s = e.RongIMClient._storageProvider.getItem(o)
							.split(",")[0].split(":")[1];
						if (s && s.length < 4 || e.RongIMClient._storageProvider.setItem("rongSDK", ""), !e.RongIMClient._memoryStore.depend.isPolling && s && s.length < 4) {
							i._client.handler.connectCallback.pauseTimer();
							var o = e.RongIMClient._storageProvider.getItemKey("navi"),
								c = e.RongIMClient._storageProvider.getItem("RongBackupServer");
							if (c) {
								var u = c.split(",");
								if (u.length < 2) throw new Error("navi server is empty,postion:StatusChanged");
								e.RongIMClient._storageProvider.setItem(o, e.RongIMClient._storageProvider.getItem("RongBackupServer"));
								var g = e.Bridge._client.channel.socket.currentURL;
								i._client.channel.socket.currentURL = u[0] + g.substring(g.indexOf("/"), g.length), i._client.channel && i._client.channel.connectionStatus != e.ConnectionStatus.CONNECTED && i._client.channel.connectionStatus != e.ConnectionStatus.CONNECTING && e.RongIMClient.connect(e.RongIMClient._memoryStore.token, e.RongIMClient._memoryStore.callback)
							}
						}
					}
					if (n === e.ConnectionStatus.DISCONNECTED && !e.RongIMClient._memoryStore.otherDevice) return t._ConnectionStatusListener.onChanged(e.ConnectionStatus.DISCONNECTED), void r.clearHeartbeat();
					n === e.ConnectionStatus.DISCONNECTED && e.RongIMClient._memoryStore.otherDevice || (t._ConnectionStatusListener.onChanged(n), e.RongIMClient._memoryStore.otherDevice && (a.delOnChangedCount > 5 && delete t._ConnectionStatusListener.onChanged, a.delOnChangedCount++))
				}), this.socket.on("message", r.handler.handleMessage), this.socket.on("disconnect", function(e) {
					r.channel.socket.fire("StatusChanged", e || 2)
				})
			}
			return t.prototype.writeAndFlush = function(e) {
				this.socket.send(e)
			}, t.prototype.reconnect = function(t) {
				e.MessageIdHandler.clearMessageId(), this.socket = this.socket.reconnect(), t && (this.self.reconnectObj = t)
			}, t.prototype.disconnect = function(e) {
				this.socket.disconnect(e)
			}, t
		}();
	e.Channel = o;
	var s = function() {
				return t.getInstance = function() {
			return new t
		}, t.prototype.connect = function(t, n) {
			return this.socket && (t && (e.RongIMClient._storageProvider.setItem("rongSDK", this.checkTransport()), this.on("connect", n || new Function)), t && (this.currentURL = t), this.socket.createTransport(t)), this
		}, t.prototype.createServer = function() {
			var e = this.getTransport(this.checkTransport());
			if (null === e) throw new Error("the channel was not supported");
			return e
		}, t.prototype.getTransport = function(n) {
			return n == t.XHR_POLLING ? this.socket = new e.PollingTransportation(this) : n == t.WEBSOCKET && (this.socket = new e.SocketTransportation(this)), this
		}, t.prototype.send = function(e) {
			this.socket && (this.checkTransport() == t.WEBSOCKET ? this.socket.send(e) : this.socket.send(this._encode(e)))
		}, t.prototype.onMessage =  t.prototype.disconnect = function(t) {
			return e.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT === t && (e.RongIMClient._memoryStore.otherDevice = !0), this.socket.disconnect(t), this.fire("disconnect", t), this
		}, t.prototype.reconnect = function() {
			if (this.currentURL && e.RongIMClient._storageProvider.getItem("rongSDK")) return this.connect(this.currentURL, null);
			throw new Error("reconnect:no have URL")
		}, t.prototype.checkTransport = function() {
			return e.RongIMClient._memoryStore.depend.isPolling && (e.Transportations._TransportType = t.XHR_POLLING), e.Transportations._TransportType
		}, t.prototype.fire = function(e, t) {
			if (e in this._events)
				for (var n = 0, o = this._events[e].length; n < o; n++) this._events[e][n](t);
			return this
		}, t.prototype.on = function(t, n) {
			return "function" == typeof n && t ? (t in this._events ? -1 == e.MessageUtil.indexOf(this._events, n) && this._events[t].push(n) : this._events[t] = [n], this) : this
		}, t.prototype.removeEvent = function(e, t) {
			if (e in this._events)
				for (var n = 0, o = this._events[e].length; n < o; n++) this._events[e][n] == t && this._events[e].splice(n, 1);
			return this
		}, t.prototype._encode = function(t) {
			var n = "?messageid=" + t.getMessageId() + "&header=" + t.getHeaderFlag() + "&sessionid=" + e.RongIMClient._storageProvider.getItem("sId" + e.Navigation.Endpoint.userId);
			return /(PubAckMessage|QueryConMessage)/.test(t._name) || (n += "&topic=" + t.getTopic() + "&targetid=" + (t.getTargetId() || "")), {
				url: n,
				data: "getData" in t ? t.getData() : ""
			}
		}, t.XHR_POLLING = "xhr-polling", t.WEBSOCKET = "websocket", t
	}();
	e.Socket = s;
	var r = function() {
		function n(e, t) {
			this.timeoutMillis = 1e5, this.timeout_ = 0, this.sdkVer = "2.2.5", this.apiVer = Math.floor(1e6 * Math.random()), this.channel = null, this.handler = null, this.userId = "", this.reconnectObj = {}, this.heartbeat = 0, this.pullMsgHearbeat = 0, this.chatroomId = "", this.SyncTimeQueue = [], this.cacheMessageIds = [], this.token = e, this.appId = t, this.SyncTimeQueue.state = "complete"
		}
		return n.prototype.resumeTimer = function() {
			this.timeout_ || (this.timeout_ = setTimeout(function() {
				if (this.timeout_) {
					try {
						this.channel.disconnect()
					} catch (e) {
						throw new Error(e)
					}
					clearTimeout(this.timeout_), this.timeout_ = 0, this.channel.reconnect(), this.channel.socket.fire("StatusChanged", 5)
				}
			}, this.timeoutMillis))
		}, n.prototype.pauseTimer = function() {
			this.timeout_ && (clearTimeout(this.timeout_), this.timeout_ = 0)
		}, n.prototype.connect = function(t) {
			if (e.Navigation.Endpoint.host) {
				if (e.Transportations._TransportType == s.WEBSOCKET && !window.WebSocket) return void t.onError(e.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION);
				this.handler = new a(this), this.handler.setConnectCallback(t);
				var n = this;
				this.channel = new o(e.Navigation.Endpoint, function() {
					e.Transportations._TransportType == s.WEBSOCKET && n.keepLive()
				}, this), this.channel.socket.fire("StatusChanged", 1)
			} else t.onError(e.ConnectionState.NOT_AUTHORIZED)
		}, n.prototype.checkSocket = function(t) {
			this.channel.writeAndFlush(new e.PingReqMessage);
			var n = setInterval(function() {
					e.RongIMClient._memoryStore.isFirstPingMsg ? o > 15 && (clearInterval(n), t.onError()) : (t.onSuccess(), clearInterval(n)), o++
				}, 200),
				o = 0
		}, n.prototype.keepLive = function() {
			this.heartbeat > 0 && clearInterval(this.heartbeat);
			var t = this;
			t.heartbeat = setInterval(function() {
				t.resumeTimer(), t.channel.writeAndFlush(new e.PingReqMessage)
			}, 3e4), t.pullMsgHearbeat > 0 && clearInterval(t.pullMsgHearbeat), t.pullMsgHearbeat = setInterval(function() {
				t.syncTime(!0, void 0, void 0, !1)
			}, 18e4)
		}, n.prototype.clearHeartbeat = function() {
			clearInterval(this.heartbeat), this.heartbeat = 0, this.pauseTimer(), clearInterval(this.pullMsgHearbeat), this.pullMsgHearbeat = 0
		}, n.prototype.publishMessage = function(n, o, s, r, i) {
			var a = e.MessageIdHandler.messageIdPlus(this.channel.reconnect);
			if (a) {
				var c = new e.PublishMessage(n, o, s);
				c.setMessageId(a), r ? (c.setQos(t.AT_LEAST_ONCE), this.handler.putCallback(new e.PublishCallback(r.onSuccess, r.onError), c.getMessageId(), i)) : c.setQos(t.AT_MOST_ONCE), this.channel.writeAndFlush(c)
			}
		}, n.prototype.queryMessage = function(t, o, s, r, i, a) {
			if ("userInf" == t && n.userInfoMapping[s]) i.onSuccess(n.userInfoMapping[s]);
			else {
				var c = e.MessageIdHandler.messageIdPlus(this.channel.reconnect);
				if (c) {
					var u = new e.QueryMessage(t, o, s);
					u.setMessageId(c), u.setQos(r), this.handler.putCallback(new e.QueryCallback(i.onSuccess, i.onError), u.getMessageId(), a), this.channel.writeAndFlush(u)
				}
			}
		}, n.prototype.invoke = function(n, o, s) {
			var r, a, c, u, g = this,
				d = this.SyncTimeQueue.shift();
			if (void 0 != d) {
				if (this.SyncTimeQueue.state = "pending", 2 != d.type) r = e.RongIMClient._storageProvider.getItem(this.userId) || "0", (a = new Modules.SyncRequestMsg)
					.setIspolling(!1), c = "pullMsg", u = this.userId;
				else if (u = o || g.chatroomId, r = e.RongIMClient._memoryStore.lastReadTime.get(u + i._client.userId + "CST") || 0, (a = new Modules.ChrmPullMsg)
					.setCount(0), c = "chrmPull", !u) throw new Error("syncTime:Received messages of chatroom but was not init");
				if (d.pulltime <= r) return this.SyncTimeQueue.state = "complete", void this.invoke(n, u);
				n && "setIsPullSend" in a && a.setIsPullSend(!0), a.setSyncTime(r), this.queryMessage(c, e.MessageUtil.ArrayForm(a.toArrayBuffer()), u, t.AT_LEAST_ONCE, {
					onSuccess: function(t) {
						var o = e.MessageUtil.int64ToTimestamp(t.syncTime),
							r = u;
						if ("chrmPull" == c) r += i._client.userId + "CST", e.RongIMClient._memoryStore.lastReadTime.set(r, o);
						else {
							var a = e.RongIMClient._storageProvider;
							o > a.getItem(r) && a.setItem(r, o)
						}
						s && (e.RongIMClient._memoryStore.isSyncRemoteConverList = !0), g.SyncTimeQueue.state = "complete", g.invoke(n, u);
						for (var d = t.list, p = 0, l = d.length, f = l; p < l; p++) d[p].msgId in g.cacheMessageIds || (i._client.handler.onReceived(d[p], void 0, s, --f), g.cacheMessageIds.unshift(d[p].msgId) > 20 && (g.cacheMessageIds.length = 20))
					},
					onError: 				}, "DownStreamMessages")
			}
		}, n.prototype.syncTime = function(e, t, n, o) {
			this.SyncTimeQueue.push({
				type: e,
				pulltime: t
			}), 1 == this.SyncTimeQueue.length && "complete" == this.SyncTimeQueue.state && this.invoke(!e, n, o)
		}, n.prototype.__init = function(t) {
			this.channel = new o(e.Navigation.Endpoint, t, this)
		}, n.userInfoMapping = {}, n
	}();
	e.Client = r;
	var i = function() {
		function s() {}
		return s.getInstance = function() {
			return new s
		}, s.prototype.connect = function(t, n, o) {
			if (window.Modules) return s._client = (new e.Navigation)
				.connect(t, n, o);
			e.RongIMClient._memoryStore.hasModules = !1
		}, s.prototype.setListener = function(e) {
			"object" == typeof e && ("function" == typeof e.onChanged ? o._ConnectionStatusListener = e : "function" == typeof e.onReceived && (o._ReceiveMessageListener = e))
		}, s.prototype.reconnect =  s.prototype.disconnect =  s.prototype.queryMsg = function(e, o, r, i, a) {
			"string" != typeof e && (e = n[e]), s._client.queryMessage(e, o, r, t.AT_MOST_ONCE, i, a)
		}, s.prototype.pubMsg = function(t, o, r, i, a, c) {
			"number" == typeof c ? c == e.MethodType.CUSTOMER_SERVICE ? s._client.publishMessage("pcuMsgP", o, r, i, a) : c == e.MethodType.RECALL && s._client.publishMessage("recallMsg", o, r, i, a) : s._client.publishMessage(n[10][t], o, r, i, a)
		}, s
	}();
	e.Bridge = i;
	var a = function() {
		function t(e) {
			if (this.map = {}, this.connectCallback = null, !o._ReceiveMessageListener) throw new Error("please set onReceiveMessageListener");
			this._onReceived = o._ReceiveMessageListener.onReceived, this._client = e, this.syncMsgMap = new Object
		}
		return t.prototype.putCallback = function(e, t, n) {
			var o = {
				Callback: e,
				Message: n
			};
			o.Callback.resumeTimer(), this.map[t] = o
		}, t.prototype.setConnectCallback = function(t) {
			t && (this.connectCallback = new e.ConnectAck(t.onSuccess, t.onError, this._client), this.connectCallback.resumeTimer())
		}, t.prototype.onReceived = function(t, n, o, s) {
			var r, a;
			if ("PublishMessage" != t._name) r = t, e.RongIMClient._storageProvider.setItem(this._client.userId, e.MessageUtil.int64ToTimestamp(r.dataTime));
			else {
				if ("s_ntf" == t.getTopic()) return r = Modules.NotifyMsg.decode(t.getData()), void this._client.syncTime(r.type, e.MessageUtil.int64ToTimestamp(r.time), r.chrmId);
				if ("s_msg" == t.getTopic()) {
					r = Modules.DownStreamMessage.decode(t.getData());
					var c = e.MessageUtil.int64ToTimestamp(r.dataTime);
					e.RongIMClient._storageProvider.setItem(this._client.userId, c), e.RongIMClient._memoryStore.lastReadTime.get(this._client.userId, c)
				} else {
					if (i._client.sdkVer && "1.0.0" == i._client.sdkVer) return;
					r = Modules.UpStreamMessage.decode(t.getData());
					var u = t.getTopic()
						.substr(0, 2);
					"pp" == u ? r.type = 1 : "pd" == u ? r.type = 2 : "pg" == u ? r.type = 3 : "ch" == u ? r.type = 4 : "pc" == u && (r.type = 5), r.groupId = t.getTargetId(), r.fromUserId = this._client.userId, r.dataTime = Date.parse((new Date)
						.toString())
				}
				if (!r) return
			}
			if (a = e.MessageUtil.messageParser(r, this._onReceived, o), n && (a.messageUId = n.getMessageUId(), a.sentTime = n.getTimestamp()), null !== a) {
				var g = "converST_" + i._client.userId + a.conversationType + a.targetId,
					d = e.RongIMClient._memoryStore.lastReadTime.get(g);
				if (d) {
					if (!(a.sentTime > d)) return;
					e.RongIMClient._memoryStore.lastReadTime.set(g, a.sentTime)
				} else e.RongIMClient._memoryStore.lastReadTime.set(g, a.sentTime);
				if (3 == e.RongIMClient.MessageParams[a.messageType].msgTag.getMessageTag() && e.RongIMClient._dataAccessProvider.getConversation(a.conversationType, a.targetId, {
					onSuccess: function(t) {
						if (t || (t = e.RongIMClient.getInstance()
							.createConversation(a.conversationType, a.targetId, "")), a.messageDirection == e.MessageDirection.RECEIVE && 64 == (64 & r.status)) {
							var n = e.RongIMClient._storageProvider.getItem("mentioneds_" + i._client.userId + "_" + a.conversationType + "_" + a.targetId),
								o = a.conversationType + "_" + a.targetId,
								s = {};
							if (a.content && a.content.mentionedInfo && (s[o] = {
								uid: a.messageUId,
								time: a.sentTime,
								mentionedInfo: a.content.mentionedInfo
							}, e.RongIMClient._storageProvider.setItem("mentioneds_" + i._client.userId + "_" + a.conversationType + "_" + a.targetId, JSON.stringify(s)), n = JSON.stringify(s)), n) {
								s = JSON.parse(n);
								t.mentionedMsg = s[o]
							}
						}
						if (0 != t.conversationType && a.senderUserId != i._client.userId && a.receivedStatus != e.ReceivedStatus.RETRIEVED && a.messageType != e.RongIMClient.MessageType.ReadReceiptRequestMessage && a.messageType != e.RongIMClient.MessageType.ReadReceiptResponseMessage && (t.unreadMessageCount = t.unreadMessageCount + 1, e.MessageUtil.supportLargeStorage())) {
							var c = e.RongIMClient._storageProvider.getItem("cu" + i._client.userId + t.conversationType + t.targetId);
							e.RongIMClient._storageProvider.setItem("cu" + i._client.userId + t.conversationType + a.targetId, Number(c) + 1)
						}
						t.receivedTime = (new Date)
							.getTime(), t.receivedStatus = e.ReceivedStatus.UNREAD, a.receivedStatus = e.ReceivedStatus.UNREAD, t.senderUserId = a.sendUserId, t.notificationStatus = e.ConversationNotificationStatus.DO_NOT_DISTURB, t.latestMessageId = a.messageId, t.latestMessage = a, t.sentTime = a.sentTime, e.RongIMClient._dataAccessProvider.addConversation(t, {
								onSuccess: function(e) {},
								onError: function() {}
							})
					},
					onError: function(e) {}
				}), (a.conversationType != e.ConversationType.CUSTOMER_SERVICE || "ChangeModeResponseMessage" != a.messageType && "SuspendMessage" != a.messageType && "HandShakeResponseMessage" != a.messageType && "TerminateMessage" != a.messageType && "CustomerStatusUpdateMessage" != a.messageType && "TextMessage" != a.messageType && "InformationNotificationMessage" != a.messageType || e.RongIMClient._memoryStore.custStore.isInit) && (a.conversationType != e.ConversationType.CUSTOMER_SERVICE || "HandShakeResponseMessage" == a.messageType || e.RongIMClient._memoryStore.custStore[a.targetId])) {
					if (a.messageType === e.RongIMClient.MessageType.HandShakeResponseMessage) {
						var p = a.content.data;
						e.RongIMClient._memoryStore.custStore[a.targetId] = p, p.serviceType != e.CustomerType.ONLY_HUMAN && p.serviceType != e.CustomerType.HUMAN_FIRST || "1" == p.notAutoCha && e.RongIMClient.getInstance()
							.switchToHumanMode(a.targetId, {
								onSuccess: function() {},
								onError: function() {}
							})
					}
					var l = new Date,
						f = l.getMonth() + 1,
						m = l.getFullYear() + "/" + (1 == f.toString()
							.length ? "0" + f : f) + "/" + l.getDate(),
						h = new Date(m)
						.getTime() - a.sentTime < 0;
					if (e.MessageUtil.supportLargeStorage() && a.messageType === e.RongIMClient.MessageType.ReadReceiptRequestMessage && h && a.messageDirection == e.MessageDirection.SEND) {
						v = i._client.userId + a.content.messageUId + "SENT";
						e.RongIMClient._storageProvider.setItem(v, JSON.stringify({
							count: 0,
							dealtime: a.sentTime,
							userIds: {}
						}))
					} else if (e.MessageUtil.supportLargeStorage() && a.messageType === e.RongIMClient.MessageType.ReadReceiptRequestMessage && h) {
						var M = i._client.userId + a.conversationType + a.targetId + "RECEIVED",
							I = JSON.parse(e.RongIMClient._storageProvider.getItem(M));
						if (I)
							if (a.senderUserId in I) {
								if (!I[a.senderUserId].uIds || !I[a.senderUserId].uIds || -1 != I[a.senderUserId].uIds.indexOf(a.content.messageUId)) return;
								new Date(m)
									.getTime() - I[a.senderUserId].dealtime < 0 || (I[a.senderUserId].uIds.length = 0), I[a.senderUserId].uIds.push(a.content.messageUId), I[a.senderUserId].dealtime = a.sentTime, I[a.senderUserId].isResponse = !1, e.RongIMClient._storageProvider.setItem(M, JSON.stringify(I))
							} else {
								var y = {
									uIds: [a.content.messageUId],
									dealtime: a.sentTime,
									isResponse: !1
								};
								I[a.senderUserId] = y, e.RongIMClient._storageProvider.setItem(M, JSON.stringify(I))
							}
						else {
							var C = {};
							C[a.senderUserId] = {
								uIds: [a.content.messageUId],
								dealtime: a.sentTime,
								isResponse: !1
							}, e.RongIMClient._storageProvider.setItem(M, JSON.stringify(C))
						}
					}
					if (e.MessageUtil.supportLargeStorage() && a.messageType === e.RongIMClient.MessageType.ReadReceiptResponseMessage && h) {
						var R, S = a.content,
							T = S.receiptMessageDic[i._client.userId],
							v = "";
						if (a.receiptResponse || (a.receiptResponse = {}), T) {
							for (var _ = [], E = 0, N = T.length; E < N; E++) v = i._client.userId + T[E] + "SENT", !(R = JSON.parse(e.RongIMClient._storageProvider.getItem(v))) || a.senderUserId in R.userIds || (new Date(m)
								.getTime() - R.dealtime > 0 ? e.RongIMClient._storageProvider.removeItem(v) : (_.push(T[E]), R.count += 1, R.userIds[a.senderUserId] = a.sentTime, a.receiptResponse[T[E]] = R.count, e.RongIMClient._storageProvider.setItem(v, JSON.stringify(R))));
							S.receiptMessageDic[i._client.userId] = _, a.content = S
						}
					}
					var O = this;
					if (e.RongIMClient._voipProvider && ["AcceptMessage", "RingingMessage", "HungupMessage", "InviteMessage", "MediaModifyMessage", "MemberModifyMessage"].indexOf(a.messageType) > -1) e.RongIMClient._voipProvider.onReceived(a);
					else {
						var b = s || 0;
						e.RongIMClient._dataAccessProvider.addMessage(a.conversationType, a.targetId, a, {
							onSuccess: function(e) {
								O._onReceived(e, b)
							},
							onError: 						})
					}
				}
			}
		}, t.prototype.handleMessage = function(t) {
			if (t) switch (t._name) {
				case "ConnAckMessage":
					i._client.handler.connectCallback.process(t.getStatus(), t.getUserId(), t.getTimestamp());
					break;
				case "PublishMessage":
					t.getSyncMsg() || 0 == t.getQos() || i._client.channel.writeAndFlush(new e.PubAckMessage(t.getMessageId())), t.getSyncMsg() && !e.RongIMClient._memoryStore.depend.isPolling ? i._client.handler.syncMsgMap[t.getMessageId()] = t : i._client.handler.onReceived(t);
					break;
				case "QueryAckMessage":
					0 != t.getQos() && i._client.channel.writeAndFlush(new e.QueryConMessage(t.getMessageId()));
					var n = i._client.handler.map[t.getMessageId()];
					n && (n.Callback.process(t.getStatus(), t.getData(), t.getDate(), n.Message), delete i._client.handler.map[t.getMessageId()]);
					break;
				case "PubAckMessage":
					var o = i._client.handler.map[t.getMessageId()];
					o ? (o.Callback.process(t.getStatus() || 0, t.getMessageUId(), t.getTimestamp(), o.Message, t.getMessageId()), delete i._client.handler.map[t.getMessageId()]) : (i._client.handler.onReceived(i._client.handler.syncMsgMap[t.messageId], t), delete i._client.handler.syncMsgMap[t.getMessageId()]);
					break;
				case "PingRespMessage":
					e.RongIMClient._memoryStore.isFirstPingMsg ? e.RongIMClient._memoryStore.isFirstPingMsg = !1 : i._client.pauseTimer();
					break;
				case "DisconnectMessage":
					i._client.channel.disconnect(t.getStatus())
			}
		}, t
	}();
	e.MessageHandler = a
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(e) {
			this.timeout = null, this.onError = null, e && "number" == typeof e ? this.timeoutMillis = e : (this.timeoutMillis = 3e4, this.onError = e)
		}
		return t.prototype.resumeTimer = function() {
			var e = this;
			this.timeoutMillis > 0 && !this.timeout && (this.timeout = setTimeout( this.timeoutMillis))
		}, t.prototype.pauseTimer =  t.prototype.readTimeOut = function(t) {
			t && this.onError ? this.onError(e.ErrorCode.TIMEOUT) : this.pauseTimer()
		}, t
	}();
	e.MessageCallback = t;
	var n = function() {
		function t() {
			this.publicServiceList = []
		}
		return t.getInstance =  t.prototype.pottingProfile = function(t) {
			var n;
			this.profile = new e.PublicServiceProfile, n = JSON.parse(t.extra), this.profile.isGlobal = n.isGlobal, this.profile.introduction = n.introduction, this.profile.menu = n.menu, this.profile.hasFollowed = n.follow, this.profile.publicServiceId = t.mpid, this.profile.name = t.name, this.profile.portraitUri = t.portraitUrl, this.profile.conversationType = "mc" == t.type ? e.ConversationType.APP_PUBLIC_SERVICE : e.ConversationType.PUBLIC_SERVICE, this.publicServiceList.push(this.profile)
		}, t.prototype.mapping = function(t, n) {
			switch (n) {
				case "GetUserInfoOutput":
					return new e.UserInfo(t.userId, t.userName, t.userPortrait);
				case "GetQNupTokenOutput":
					return {
						deadline: e.MessageUtil.int64ToTimestamp(t.deadline),
						token: t.token
					};
				case "GetQNdownloadUrlOutput":
					return {
						downloadUrl: t.downloadUrl
					};
				case "CreateDiscussionOutput":
					return t.id;
				case "ChannelInfoOutput":
					var o = new e.Discussion;
					return o.creatorId = t.adminUserId, o.id = t.channelId, o.memberIdList = t.firstTenUserIds, o.name = t.channelName, o.isOpen = t.openStatus, o;
				case "GroupHashOutput":
					return t.result;
				case "QueryBlackListOutput":
					return t.userIds;
				case "SearchMpOutput":
				case "PullMpOutput":
					if (t.info) {
						var s = this;
						Array.forEach(t.info, 
					}
					return this.publicServiceList;
				default:
					return t
			}
		}, t
	}();
	e.CallbackMapping = n;
	var o = function(n) {
		function o(e, t) {
			n.call(this, t), this._cb = e, this._timeout = t
		}
		return __extends(o, n), o.prototype.process = function(t, n, o, s, r) {
			this.readTimeOut(), 0 == t ? (s && (s.setSentStatus = t), e.RongIMClient._storageProvider.setItem(e.Bridge._client.userId, o), e.RongIMClient._memoryStore.lastReadTime.get(e.Bridge._client.userId, o), this._cb({
				messageUId: n,
				timestamp: o,
				messageId: r
			})) : this._timeout(t)
		}, o.prototype.readTimeOut = function(e) {
			t.prototype.readTimeOut.call(this, e)
		}, o
	}(t);
	e.PublishCallback = o;
	var s = function(o) {
				return __extends(s, o), s.prototype.process = function(t, o, s, r) {
			if (this.readTimeOut(), r && o && 0 == t) {
				try {
					o = n.getInstance()
						.mapping(Modules[r].decode(o), r)
				} catch (t) {
					return void this._timeout(e.ErrorCode.UNKNOWN)
				}
				"GetUserInfoOutput" == r && (e.Client.userInfoMapping[o.userId] = o), this._cb(o)
			} else t > 0 ? this._timeout(t) : this._cb(t)
		}, s.prototype.readTimeOut = function(e) {
			t.prototype.readTimeOut.call(this, e)
		}, s
	}(t);
	e.QueryCallback = s;
	var r = function(n) {
				return __extends(o, n), o.prototype.process = function(t, n, o) {
			if (this.readTimeOut(), 0 == t) {
				if (e.RongIMClient._memoryStore.depend.isPrivate) {
					var s, r = new Date,
						i = r.getFullYear() + "" + (r.getMonth() + 1) + r.getDate();
					if (!(s = (e.MessageUtil.supportLargeStorage(), e.RongIMClient._storageProvider.getItem("RongQryOpt" + i)))) {
						var a = new Modules.GetUserInfoInput;
						a.setNothing(0), e.RongIMClient.bridge.queryMsg("qryCfg", e.MessageUtil.ArrayForm(a.toArrayBuffer()), n, {
							onSuccess: function(t) {
								if (t) {
									var n = e.RongIMClient._memoryStore.depend.navi.split("//");
									new e.RongAjax({
											url: "https://stats.cn.ronghub.com/active.json",
											appKey: e.RongIMClient._memoryStore.appKey,
											deviceId: Math.floor(1e4 * Math.random()),
											timestamp: (new Date)
												.getTime(),
											deviceInfo: "",
											type: 1,
											privateInfo: {
												code: encodeURIComponent(t.name),
												ip: e.RongIMClient._storageProvider._host,
												customId: t.id,
												nip: n.length > 1 ? n[1] : ""
											}
										})
										.send(function() {
											s = (e.MessageUtil.supportLargeStorage(), e.RongIMClient._storageProvider.setItem("RongQryOpt" + i, i))
										})
								}
							},
							onError: function() {}
						}, "GroupInfo")
					}
				}
				var c = e.RongIMClient._storageProvider.getItem(e.RongIMClient._storageProvider.getItemKey("navi")),
					u = e.RongIMClient._storageProvider.getItemKey("navi");
				decodeURIComponent(c)
					.split(",")[1] || (c = encodeURIComponent(c) + n, e.RongIMClient._storageProvider.setItem(u, c)), e.RongIMClient._memoryStore.isUseWebSQLProvider && e.RongIMClient._dataAccessProvider.database.init(n), this._client.userId = n;
				var g = this,
					d = e.RongIMClient._storageProvider.getItemKey("navi"),
					p = e.RongIMClient._storageProvider.getItem(d)
					.split(",")[0].split(":")[1];
				if (!e.RongIMClient._memoryStore.depend.isPolling && e.RongIMClient._memoryStore.isFirstPingMsg && p.length < 4 ? e.Bridge._client.checkSocket({
					onSuccess: function() {
						e.RongIMClient.isNotPullMsg || g._client.syncTime(void 0, void 0, void 0, !0)
					},
					onError: function() {
						e.RongIMClient._memoryStore.isFirstPingMsg = !1, e.RongIMClient.getInstance()
							.disconnect();
						var t = e.RongIMClient._storageProvider.getItemKey("navi"),
							n = e.RongIMClient._storageProvider.getItem("RongBackupServer")
							.split(",");
						if (n.length < 2) throw new Error("navi server is empty");
						e.RongIMClient._storageProvider.setItem(t, e.RongIMClient._storageProvider.getItem("RongBackupServer"));
						var o = e.Bridge._client.channel.socket.currentURL;
						e.Bridge._client.channel.socket.currentURL = n[0] + o.substring(o.indexOf("/"), o.length), e.RongIMClient.connect(e.RongIMClient._memoryStore.token, e.RongIMClient._memoryStore.callback)
					}
				}) : e.RongIMClient.isNotPullMsg || g._client.syncTime(void 0, void 0, void 0, !0), this._client.reconnectObj.onSuccess) this._client.reconnectObj.onSuccess(n), delete this._client.reconnectObj.onSuccess;
				else {
					f = this;
					setTimeout(function() {
						f._cb(n)
					}, 500)
				}
				e.Bridge._client.channel.socket.fire("StatusChanged", 0), e.RongIMClient._memoryStore.connectAckTime = o, (new Date)
					.getTime() - o ? e.RongIMClient._memoryStore.deltaTime = (new Date)
					.getTime() - o : e.RongIMClient._memoryStore.deltaTime = 0
			} else if (6 == t) {
				var l = {},
					f = this;
				(new e.Navigation)
				.getServerEndpoint(this._client.token, this._client.appId, function() {
					f._client.clearHeartbeat(), new e.Client(f._client.token, f._client.appId)
						.__init.call(l, function() {
							"websocket" == e.Transportations._TransportType && f._client.keepLive()
						}), f._client.channel.socket.fire("StatusChanged", 2)
				}, f._timeout, !1)
			} else e.Bridge._client.channel.socket.socket._status = t, this._client.reconnectObj.onError ? (this._client.reconnectObj.onError(t), delete this._client.reconnectObj.onError) : this._timeout(t)
		}, o.prototype.readTimeOut =  o
	}(t);
	e.ConnectAck = r
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t() {
			window.getServerEndpoint = function(n) {
				if (e.RongIMClient._storageProvider._host = t.Endpoint.host = n.server, e.RongIMClient._storageProvider.setItem("RongBackupServer", n.backupServer + "," + (n.userId || "")), t.Endpoint.userId = n.userId, n.voipCallInfo) {
					var o = JSON.parse(n.voipCallInfo);
					e.RongIMClient._memoryStore.voipStategy = o.strategy, e.RongIMClient._storageProvider.setItem("voipStrategy", o.strategy)
				}
				var s = md5(e.Bridge._client.token)
					.slice(8, 16),
					r = 0 == n.openMp ? 0 : 1;
				e.RongIMClient._storageProvider.setItem("navi" + s, n.server + "," + (n.userId || "")), e.RongIMClient._storageProvider.setItem("openMp" + s, r), r || (e.RongIMClient._memoryStore.depend.openMp = !1)
			}
		}
		return t.prototype.connect = function(t, n, o) {
			var s = e.RongIMClient._storageProvider.getItem("appId");
			s && s != t && (e.RongIMClient._storageProvider.clearItem(), e.RongIMClient._storageProvider.setItem("appId", t)), s || e.RongIMClient._storageProvider.setItem("appId", t);
			var r = new e.Client(n, t);
			return this.getServerEndpoint(n, t,  o.onError, !0), r
		}, t.prototype.getServerEndpoint = function(n, o, s, r, i) {
			if (i) {
				var a = md5(n)
					.slice(8, 16),
					c = e.RongIMClient._storageProvider.getItem(e.RongIMClient._storageProvider.getItemKey("navi")),
					u = e.RongIMClient._storageProvider.getItem("navi" + a);
				if (c == u && null !== u && e.RongIMClient._storageProvider.getItem("rongSDK") == e.Transportations._TransportType) {
					var g = decodeURIComponent(c)
						.split(",");
					return void setTimeout(function() {
						e.RongIMClient._storageProvider._host = t.Endpoint.host = g[0], e.RongIMClient._memoryStore.voipStategy = e.RongIMClient._storageProvider.getItem("voipStrategy"), e.RongIMClient._storageProvider.getItem("openMp" + a) || (e.RongIMClient._memoryStore.depend.openMp = !1), t.Endpoint.userId = g[1], s()
					}, 500)
				}
			}
			var d = document.createElement("script");
			d.src = e.RongIMClient._memoryStore.depend.navi + (e.RongIMClient._memoryStore.depend.isPolling ? "/cometnavi.js" : "/navi.js") + "?appId=" + o + "&token=" + encodeURIComponent(n) + "&callBack=getServerEndpoint&t=" + (new Date)
				.getTime(), document.body.appendChild(d), d.onerror =  "onload" in d ? d.onload = s : d.onreadystatechange = 		}, t.Endpoint = new Object, t
	}();
	e.Navigation = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(t) {
			this._name = "BaseMessage", this.lengthSize = 0, t instanceof e.Header ? this._header = t : this._header = new e.Header(t, !1, e.Qos.AT_MOST_ONCE, !1)
		}
		return t.prototype.read =  t.prototype.write = function(t) {
			var n = (new e.BinaryHelper)
				.convertStream(t);
			return this._headerCode = this.getHeaderFlag(), n.write(this._headerCode), this.writeMessage(n), n
		}, t.prototype.getHeaderFlag =  t.prototype.getLengthSize = function() {
			return this.lengthSize
		}, t.prototype.toBytes = function() {
			return this.write([])
				.getBytesArray()
		}, t.prototype.isRetained = function() {
			return this._header.retain
		}, t.prototype.setRetained = function(e) {
			this._header.retain = e
		}, t.prototype.setQos = function(t) {
			this._header.qos = "[object Object]" == Object.prototype.toString.call(t) ? t : e.Qos[t]
		}, t.prototype.setDup =  t.prototype.isDup = function() {
			return this._header.dup
		}, t.prototype.getType = function() {
			return this._header.type
		}, t.prototype.getQos =  t.prototype.messageLength = function() {
			return 0
		}, t.prototype.writeMessage = function(e) {}, t.prototype.readMessage =  t.prototype.init = function(e) {
			var t, n, o = this;
			for (n in e) e.hasOwnProperty(n) && (t = n.replace(/^\w/, function(e) {
				var t = e.charCodeAt(0);
				return "set" + (t >= 97 ? String.fromCharCode(-33 & t) : e)
			})) in o && ("status" == n ? o[t](disconnectStatus[e[n]] ? disconnectStatus[e[n]] : e[n]) : o[t](e[n]))
		}, t
	}();
	e.BaseMessage = t;
	var n = function(t) {
		function n(n) {
			switch (t.call(this, 0 == arguments.length || 3 == arguments.length ? e.Type.CONNECT : arguments[0]), this._name = "ConnectMessage", this.CONNECT_HEADER_SIZE = 12, this.protocolId = "RCloud", this.binaryHelper = new e.BinaryHelper, this.protocolVersion = 3, arguments.length) {
				case 0:
				case 1:
				case 3:
					if (!arguments[0] || arguments[0].length > 64) throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: " + arguments[0]);
					this.clientId = arguments[0], this.cleanSession = arguments[1], this.keepAlive = arguments[2]
			}
		}
		return __extends(n, t), n.prototype.messageLength = function() {
			var e = this.binaryHelper.toMQttString(this.clientId)
				.length;
			return e += this.binaryHelper.toMQttString(this.willTopic)
				.length, e += this.binaryHelper.toMQttString(this.will)
				.length, e += this.binaryHelper.toMQttString(this.appId)
				.length, (e += this.binaryHelper.toMQttString(this.token)
					.length) + this.CONNECT_HEADER_SIZE
		}, n.prototype.readMessage = function(e) {
			this.protocolId = e.readUTF(), this.protocolVersion = e.readByte();
			var t = e.readByte();
			if (this.hasAppId = (128 & t) > 0, this.hasToken = (64 & t) > 0, this.retainWill = (32 & t) > 0, this.willQos = t >> 3 & 3, this.hasWill = (4 & t) > 0, this.cleanSession = (32 & t) > 0, this.keepAlive = 256 * e.read() + e.read(), this.clientId = e.readUTF(), this.hasWill && (this.willTopic = e.readUTF(), this.will = e.readUTF()), this.hasAppId) try {
				this.appId = e.readUTF()
			} catch (e) {
				throw new Error(e)
			}
			if (this.hasToken) try {
				this.token = e.readUTF()
			} catch (e) {
				throw new Error(e)
			}
			return e
		}, n.prototype.writeMessage = function(e) {
			var t = this.binaryHelper.convertStream(e);
			t.writeUTF(this.protocolId), t.write(this.protocolVersion);
			var n = this.cleanSession ? 2 : 0;
			return n |= this.hasWill ? 4 : 0, n |= this.willQos ? this.willQos >> 3 : 0, n |= this.retainWill ? 32 : 0, n |= this.hasToken ? 64 : 0, n |= this.hasAppId ? 128 : 0, t.write(n), t.writeChar(this.keepAlive), t.writeUTF(this.clientId), this.hasWill && (t.writeUTF(this.willTopic), t.writeUTF(this.will)), this.hasAppId && t.writeUTF(this.appId), this.hasToken && t.writeUTF(this.token), t
		}, n
	}(t);
	e.ConnectMessage = n;
	var o = function(t) {
		function n(n) {
			t.call(this, 0 == arguments.length ? e.Type.CONNACK : 1 == arguments.length ? arguments[0] instanceof e.Header ? arguments[0] : e.Type.CONNACK : null), this._name = "ConnAckMessage", this.MESSAGE_LENGTH = 2, this.binaryHelper = new e.BinaryHelper;
			var o = this;
			switch (arguments.length) {
				case 0:
				case 1:
					if (!(arguments[0] instanceof e.Header) && arguments[0] in e.ConnectionState) {
						if (null == arguments[0]) throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null");
						o.setStatus(arguments[0])
					}
			}
		}
		return __extends(n, t), n.prototype.messageLength = function() {
			var e = this.MESSAGE_LENGTH;
			return this.userId && (e += this.binaryHelper.toMQttString(this.userId)
				.length), e
		}, n.prototype.readMessage = function(e, t) {
			e.read();
			var n = +e.read();
			if (!(n >= 0 && n <= 12)) throw new Error("Unsupported CONNACK code:" + n);
			if (this.setStatus(n), t > this.MESSAGE_LENGTH) {
				this.setUserId(e.readUTF());
				e.readUTF();
				var o = e.readLong();
				this.setTimestamp(o)
			}
		}, n.prototype.writeMessage = function(e) {
			var t = this.binaryHelper.convertStream(e);
			switch (t.write(128), +status) {
				case 0:
				case 1:
				case 2:
				case 5:
				case 6:
					t.write(+status);
					break;
				case 3:
				case 4:
					t.write(3);
					break;
				default:
					throw new Error("Unsupported CONNACK code:" + status)
			}
			return this.userId && t.writeUTF(this.userId), t
		}, n.prototype.setStatus = function(e) {
			this.status = e
		}, n.prototype.setUserId = function(e) {
			this.userId = e
		}, n.prototype.getStatus = function() {
			return this.status
		}, n.prototype.getUserId = function() {
			return this.userId
		}, n.prototype.setTimestamp = function(e) {
			this.timestrap = e
		}, n.prototype.getTimestamp = function() {
			return this.timestrap
		}, n
	}(t);
	e.ConnAckMessage = o;
	var s = function(t) {
		function n(n) {
			t.call(this, n instanceof e.Header ? n : e.Type.DISCONNECT), this._name = "DisconnectMessage", this.MESSAGE_LENGTH = 2, this.binaryHelper = new e.BinaryHelper, n instanceof e.Header || n in e.ConnectionStatus && (this.status = n)
		}
		return __extends(n, t), n.prototype.messageLength = function() {
			return this.MESSAGE_LENGTH
		}, n.prototype.readMessage = function(e) {
			e.read();
			var t = +e.read();
			if (!(t >= 0 && t <= 5)) throw new Error("Unsupported CONNACK code:" + t);
			this.setStatus(disconnectStatus[t] ? disconnectStatus[t] : t)
		}, n.prototype.writeMessage = function(e) {
			var t = this.binaryHelper.convertStream(e);
			if (t.write(0), !(+status >= 1 && +status <= 3)) throw new Error("Unsupported CONNACK code:" + status);
			t.write(+status - 1)
		}, n.prototype.setStatus = function(e) {
			this.status = e
		}, n.prototype.getStatus = function() {
			return this.status
		}, n
	}(t);
	e.DisconnectMessage = s;
	var r = function(t) {
		function n(n) {
			t.call(this, n && n instanceof e.Header ? n : e.Type.PINGREQ), this._name = "PingReqMessage"
		}
		return __extends(n, t), n
	}(t);
	e.PingReqMessage = r;
	var i = function(t) {
		function n(n) {
			t.call(this, n && n instanceof e.Header ? n : e.Type.PINGRESP), this._name = "PingRespMessage"
		}
		return __extends(n, t), n
	}(t);
	e.PingRespMessage = i;
	var a = function(t) {
		function n(n) {
			t.call(this, n), this._name = "RetryableMessage", this.binaryHelper = new e.BinaryHelper
		}
		return __extends(n, t), n.prototype.messageLength = function() {
			return 2
		}, n.prototype.writeMessage = function(e) {
			var t = this.binaryHelper.convertStream(e),
				n = this.getMessageId(),
				o = 255 & n,
				s = (65280 & n) >> 8;
			return t.write(s), t.write(o), t
		}, n.prototype.readMessage = function(e, t) {
			var n = 256 * e.read() + e.read();
			this.setMessageId(parseInt(n, 10))
		}, n.prototype.setMessageId = function(e) {
			this.messageId = e
		}, n.prototype.getMessageId = function() {
			return this.messageId
		}, n
	}(t);
	e.RetryableMessage = a;
	var c = function(t) {
		function n(n) {
			t.call(this, n instanceof e.Header ? n : e.Type.PUBACK), this.msgLen = 2, this.date = 0, this.millisecond = 0, this.timestamp = 0, this.binaryHelper = new e.BinaryHelper, this._name = "PubAckMessage", n instanceof e.Header || t.prototype.setMessageId.call(this, n)
		}
		return __extends(n, t), n.prototype.messageLength = function() {
			return this.msgLen
		}, n.prototype.writeMessage = function(e) {
			var t = this.binaryHelper.convertStream(e);
			a.prototype.writeMessage.call(this, t)
		}, n.prototype.readMessage = function(e, t) {
			a.prototype.readMessage.call(this, e), this.date = e.readInt(), this.status = 256 * e.read() + e.read(), this.millisecond = 256 * e.read() + e.read(), this.timestamp = 1e3 * this.date + this.millisecond, this.messageUId = e.readUTF()
		}, n.prototype.setStatus = function(e) {
			this.status = e
		}, n.prototype.setTimestamp = function(e) {
			this.timestamp = e
		}, n.prototype.setMessageUId = function(e) {
			this.messageUId = e
		}, n.prototype.getStatus = function() {
			return this.status
		}, n.prototype.getDate = function() {
			return this.date
		}, n.prototype.getTimestamp = function() {
			return this.timestamp
		}, n.prototype.getMessageUId = function() {
			return this.messageUId
		}, n
	}(a);
	e.PubAckMessage = c;
	var u = function(t) {
		function n(n, o, s) {
			t.call(this, 1 == arguments.length && n instanceof e.Header ? n : 3 == arguments.length ? e.Type.PUBLISH : 0), this._name = "PublishMessage", this.binaryHelper = new e.BinaryHelper, this.syncMsg = !1, 3 == arguments.length && (this.topic = n, this.targetId = s, this.data = "string" == typeof o ? this.binaryHelper.toMQttString(o) : o)
		}
		return __extends(n, t), n.prototype.messageLength = function() {
			var e = 10;
			return e += this.binaryHelper.toMQttString(this.topic)
				.length, e += this.binaryHelper.toMQttString(this.targetId)
				.length, e += this.data.length
		}, n.prototype.writeMessage = function(e) {
			var t = this.binaryHelper.convertStream(e);
			t.writeUTF(this.topic), t.writeUTF(this.targetId), a.prototype.writeMessage.apply(this, arguments), t.write(this.data)
		}, n.prototype.readMessage = function(e, t) {
			var n = 6;
			this.date = e.readInt(), this.topic = e.readUTF(), n += this.binaryHelper.toMQttString(this.topic)
				.length, this.targetId = e.readUTF(), n += this.binaryHelper.toMQttString(this.targetId)
				.length, a.prototype.readMessage.apply(this, arguments), this.data = new Array(t - n), this.data = e.read(this.data)
		}, n.prototype.setTopic = function(e) {
			this.topic = e
		}, n.prototype.setData = function(e) {
			this.data = e
		}, n.prototype.setTargetId = function(e) {
			this.targetId = e
		}, n.prototype.setDate = function(e) {
			this.date = e
		}, n.prototype.setSyncMsg = function(e) {
			this.syncMsg = e
		}, n.prototype.getSyncMsg = function() {
			return this.syncMsg
		}, n.prototype.getTopic = function() {
			return this.topic
		}, n.prototype.getData = function() {
			return this.data
		}, n.prototype.getTargetId = function() {
			return this.targetId
		}, n.prototype.getDate = function() {
			return this.date
		}, n
	}(a);
	e.PublishMessage = u;
	var g = function(t) {
		function n(n, o, s) {
			t.call(this, n instanceof e.Header ? n : 3 == arguments.length ? e.Type.QUERY : null), this.binaryHelper = new e.BinaryHelper, this._name = "QueryMessage", 3 == arguments.length && (this.data = "string" == typeof o ? this.binaryHelper.toMQttString(o) : o, this.topic = n, this.targetId = s)
		}
		return __extends(n, t), n.prototype.messageLength = function() {
			var e = 0;
			return e += this.binaryHelper.toMQttString(this.topic)
				.length, e += this.binaryHelper.toMQttString(this.targetId)
				.length, e += 2, e += this.data.length
		}, n.prototype.writeMessage = function(e) {
			var t = this.binaryHelper.convertStream(e);
			t.writeUTF(this.topic), t.writeUTF(this.targetId), a.prototype.writeMessage.call(this, t), t.write(this.data)
		}, n.prototype.readMessage = function(e, t) {
			var n = 0;
			this.topic = e.readUTF(), this.targetId = e.readUTF(), n += this.binaryHelper.toMQttString(this.topic)
				.length, n += this.binaryHelper.toMQttString(this.targetId)
				.length, this.readMessage.apply(this, arguments), n += 2, this.data = new Array(t - n), e.read(this.data)
		}, n.prototype.setTopic = function(e) {
			this.topic = e
		}, n.prototype.setData = function(e) {
			this.data = e
		}, n.prototype.setTargetId = function(e) {
			this.targetId = e
		}, n.prototype.getTopic = function() {
			return this.topic
		}, n.prototype.getData = function() {
			return this.data
		}, n.prototype.getTargetId = function() {
			return this.targetId
		}, n
	}(a);
	e.QueryMessage = g;
	var d = function(t) {
		function n(n) {
			t.call(this, n instanceof e.Header ? n : e.Type.QUERYCON), this._name = "QueryConMessage", n instanceof e.Header || t.prototype.setMessageId.call(this, n)
		}
		return __extends(n, t), n
	}(a);
	e.QueryConMessage = d;
	var p = function(t) {
		function n(n) {
			t.call(this, n), this._name = "QueryAckMessage", this.binaryHelper = new e.BinaryHelper
		}
		return __extends(n, t), n.prototype.readMessage = function(e, t) {
			a.prototype.readMessage.call(this, e), this.date = e.readInt(), this.setStatus(256 * e.read() + e.read()), t > 0 && (this.data = new Array(t - 8), this.data = e.read(this.data))
		}, n.prototype.getData = function() {
			return this.data
		}, n.prototype.getStatus = function() {
			return this.status
		}, n.prototype.getDate = function() {
			return this.date
		}, n.prototype.setDate = function(e) {
			this.date = e
		}, n.prototype.setStatus = function(e) {
			this.status = e
		}, n.prototype.setData =  n
	}(a);
	e.QueryAckMessage = p
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(t) {
			var n = new e.BinaryHelper;
			this.out = n.convertStream(t)
		}
		return t.prototype.writeMessage = function(t) {
			t instanceof e.BaseMessage && t.write(this.out)
		}, t
	}();
	e.MessageOutputStream = t;
	var n = function() {
		function t(t, n) {
			if (n) this.flags = t.headerCode;
			else {
				var o = (new e.BinaryHelper)
					.convertStream(t);
				this.flags = o.readByte(), this._in = o
			}
			this.header = new e.Header(this.flags), this.isPolling = n, this.In = t
		}
		return t.prototype.readMessage = function() {
			switch (this.header.getType()) {
				case 1:
					this.msg = new e.ConnectMessage(this.header);
					break;
				case 2:
					this.msg = new e.ConnAckMessage(this.header);
					break;
				case 3:
					this.msg = new e.PublishMessage(this.header), this.msg.setSyncMsg(this.header.getSyncMsg());
					break;
				case 4:
					this.msg = new e.PubAckMessage(this.header);
					break;
				case 5:
					this.msg = new e.QueryMessage(this.header);
					break;
				case 6:
					this.msg = new e.QueryAckMessage(this.header);
					break;
				case 7:
					this.msg = new e.QueryConMessage(this.header);
					break;
				case 9:
				case 11:
				case 13:
					this.msg = new e.PingRespMessage(this.header);
					break;
				case 8:
				case 10:
				case 12:
					this.msg = new e.PingReqMessage(this.header);
					break;
				case 14:
					this.msg = new e.DisconnectMessage(this.header);
					break;
				default:
					throw new Error("No support for deserializing " + this.header.getType() + " messages")
			}
			return this.isPolling ? this.msg.init(this.In) : this.msg.read(this._in, this.In.length - 1), this.msg
		}, t
	}();
	e.MessageInputStream = n;
	var o = function() {
		function t(t, n, o, s) {
			this.retain = !1, this.qos = e.Qos.AT_LEAST_ONCE, this.dup = !1, this.syncMsg = !1, t && +t == t && 1 == arguments.length ? (this.retain = (1 & t) > 0, this.qos = (6 & t) >> 1, this.dup = (8 & t) > 0, this.type = t >> 4 & 15, this.syncMsg = 8 == (8 & t)) : (this.type = t, this.retain = n, this.qos = o, this.dup = s)
		}
		return t.prototype.getSyncMsg = function() {
			return this.syncMsg
		}, t.prototype.getType =  t.prototype.encode = function() {
			var t = this;
			switch (this.qos) {
				case e.Qos[0]:
					t.qos = e.Qos.AT_MOST_ONCE;
					break;
				case e.Qos[1]:
					t.qos = e.Qos.AT_LEAST_ONCE;
					break;
				case e.Qos[2]:
					t.qos = e.Qos.EXACTLY_ONCE;
					break;
				case e.Qos[3]:
					t.qos = e.Qos.DEFAULT
			}
			var n = this.type << 4;
			return n |= this.retain ? 1 : 0, n |= this.qos << 1, n |= this.dup ? 8 : 0
		}, t.prototype.toString =  t
	}();
	e.Header = o;
	var s = function() {
		function e() {}
		return e.prototype.writeUTF = function(e, t) {
			for (var n = [], o = 0, s = 0, r = e.length; s < r; s++) {
				var i = e.charCodeAt(s);
				i >= 0 && i <= 127 ? (o += 1, n.push(i)) : i >= 128 && i <= 2047 ? (o += 2, n.push(192 | 31 & i >> 6), n.push(128 | 63 & i)) : i >= 2048 && i <= 65535 && (o += 3, n.push(224 | 15 & i >> 12), n.push(128 | 63 & i >> 6), n.push(128 | 63 & i))
			}
			for (var s = 0, r = n.length; s < r; s++) n[s] > 255 && (n[s] &= 255);
			return t ? n : o <= 255 ? [0, o].concat(n) : [o >> 8, 255 & o].concat(n)
		}, e.prototype.readUTF = function(e) {
			if ("[object String]" == Object.prototype.toString.call(e)) return e;
			for (var t = "", n = e, o = 0, s = n.length; o < s; o++) {
				n[o] < 0 && (n[o] += 256);
				var r = n[o].toString(2),
					i = r.match(/^1+?(?=0)/);
				if (i && 8 == r.length) {
					for (var a = i[0].length, c = "", u = 0; u < a; u++) c += n[u + o].toString(2)
						.slice(2);
					t += String.fromCharCode(parseInt(c, 2)), o += a - 1
				} else t += String.fromCharCode(n[o])
			}
			return t
		}, e.prototype.convertStream =  e.prototype.toMQttString =  e
	}();
	e.BinaryHelper = s;
	var r = function() {
		function e(e) {
			this.position = 0, this.writen = 0, this.poolLen = 0, this.binaryHelper = new s, this.pool = e, this.poolLen = e.length
		}
		return e.prototype.check =  e.prototype.readInt = function() {
			if (this.check()) return -1;
			for (var e = "", t = 0; t < 4; t++) {
				var n = this.pool[this.position++].toString(16);
				1 == n.length && (n = "0" + n), e += n.toString(16)
			}
			return parseInt(e, 16)
		}, e.prototype.readLong = function() {
			if (this.check()) return -1;
			for (var e = "", t = 0; t < 8; t++) {
				var n = this.pool[this.position++].toString(16);
				1 == n.length && (n = "0" + n), e += n
			}
			return parseInt(e, 16)
		}, e.prototype.readTimestamp = function() {
			if (this.check()) return -1;
			for (var e = "", t = 0; t < 8; t++) e += this.pool[this.position++].toString(16);
			return e = e.substring(2, 8), parseInt(e, 16)
		}, e.prototype.readUTF = function() {
			if (this.check()) return -1;
			var e = this.readByte() << 8 | this.readByte();
			return this.binaryHelper.readUTF(this.pool.subarray(this.position, this.position += e))
		}, e.prototype.readByte = function() {
			if (this.check()) return -1;
			var e = this.pool[this.position++];
			return e > 255 && (e &= 255), e
		}, e.prototype.read = function(e) {
			return e ? this.pool.subarray(this.position, this.poolLen) : this.readByte()
		}, e.prototype.write = function(e) {
			var t = e;
			return "[object array]" == Object.prototype.toString.call(t)
				.toLowerCase() ? [].push.apply(this.pool, t) : +t == t && (t > 255 && (t &= 255), this.pool.push(t), this.writen++), t
		}, e.prototype.writeChar = function(e) {
			if (+e != e) throw new Error("writeChar:arguments type is error");
			this.write(e >> 8 & 255), this.write(255 & e), this.writen += 2
		}, e.prototype.writeUTF = function(e) {
			var t = this.binaryHelper.writeUTF(e);
			[].push.apply(this.pool, t), this.writen += t.length
		}, e.prototype.toComplements = function() {
			for (var e = this.pool, t = 0; t < this.poolLen; t++) e[t] > 128 && (e[t] -= 256);
			return e
		}, e.prototype.getBytesArray = function(e) {
			return e ? this.toComplements() : this.pool
		}, e
	}();
	e.RongIMStream = r
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(e) {
			return this.connected = !1, this.isClose = !1, this.queue = [], this.empty = new Function, this._socket = e, this
		}
		return t.prototype.createTransport = function(t, n) {
			if (!t) throw new Error("URL can't be empty");
			return this.url = t, this.socket = new WebSocket(e.RongIMClient._memoryStore.depend.wsScheme + t), this.socket.binaryType = "arraybuffer", this.addEvent(), this.socket
		}, t.prototype.send = function(t) {
			if (this.connected || this.isClose) {
				if (!this.isClose) {
					var n = new e.RongIMStream([]);
					new e.MessageOutputStream(n)
						.writeMessage(t);
					var o = n.getBytesArray(!0),
						s = new Int8Array(o);
					return this.socket.send(s.buffer), this
				}
				this._socket.fire("StatusChanged", e.ConnectionStatus.CONNECTION_CLOSED)
			} else this.queue.push(t)
		}, t.prototype.onData = function(t) {
			return e.MessageUtil.isArray(t) ? this._socket.onMessage(new e.MessageInputStream(t)
				.readMessage()) : this._socket.onMessage(new e.MessageInputStream(e.MessageUtil.ArrayFormInput(t))
				.readMessage()), ""
		}, t.prototype.onClose = function(t) {
			var n = this;
			n.isClose = !0, n.socket = this.empty, e.Bridge._client.clearHeartbeat(), 1006 != t.code || this._status ? n._status = 0 : n._socket.fire("StatusChanged", e.ConnectionStatus.NETWORK_UNAVAILABLE)
		}, t.prototype.onError =  t.prototype.addEvent = function() {
			var e = this;
			e.socket.onopen = function() {
				e.connected = !0, e.isClose = !1, e.doQueue(), e._socket.fire("connect")
			}, e.socket.onmessage = function(t) {
				"string" == typeof t.data ? e.onData(t.data.split(",")) : e.onData(t.data)
			}, e.socket.onerror = function(t) {
				e.onError(t)
			}, e.socket.onclose = 		}, t.prototype.doQueue = function() {
			for (var e = this, t = 0, n = e.queue.length; t < n; t++) e.send(e.queue[t])
		}, t.prototype.disconnect = function(e) {
			var t = this;
			t.socket.readyState && (t.isClose = !0, e && (t._status = e), this.socket.close())
		}, t.prototype.reconnect = function() {
			this.disconnect(), this.createTransport(this.url)
		}, t
	}();
	e.SocketTransportation = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(e) {
			return this.empty = new Function, this.connected = !1, this.pid = +new Date + Math.random() + "", this.queue = [], this.socket = e, this
		}
		return t.prototype.createTransport = function(t, n) {
			if (!t) throw new Error("Url is empty,Please check it!");
			this.url = t;
			var o = e.RongIMClient._storageProvider.getItem("sId" + e.Navigation.Endpoint.userId),
				s = this;
			return o ? (setTimeout(function() {
				s.onSuccess('{"status":0,"userId":"' + e.Navigation.Endpoint.userId + '","headerCode":32,"messageId":0,"sessionid":"' + o + '"}'), s.connected = !0
			}, 500), this) : (this.getRequest(t, !0), this)
		}, t.prototype.requestFactory = function(t, n, o) {
			var s = this.XmlHttpRequest();
			return o && (s.multipart = !0), s.timeout = 6e4, s.open(n || "GET", e.RongIMClient._memoryStore.depend.protocol + t), "POST" == n && "setRequestHeader" in s && s.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"), s
		}, t.prototype.getRequest = function(e, t) {
			var n = this;
			n.xhr = this.requestFactory(e + "&pid=" + encodeURIComponent(n.pid), "GET"), "onload" in n.xhr ? (n.xhr.onload = function() {
				n.xhr.onload = n.empty, "lost params" == this.responseText ? n.onError() : n.onSuccess(this.responseText, t)
			}, n.xhr.onerror =  : n.xhr.onreadystatechange = function() {
				4 == n.xhr.readyState && (n.xhr.onreadystatechange = n.empty, /^(200|202)$/.test(n.xhr.status) ? n.onSuccess(n.xhr.responseText, t) : /^(400|403)$/.test(n.xhr.status) ? n.onError() : n.disconnect())
			}, n.xhr.send()
		}, t.prototype.send = function(t) {
			var n = this,
				o = n.sendxhr = this.requestFactory(e.Navigation.Endpoint.host + "/websocket" + t.url + "&pid=" + encodeURIComponent(n.pid), "POST");
			"onload" in o ? (o.onload =  o.onerror =  : o.onreadystatechange = function() {
				4 == o.readyState && (this.onreadystatechange = this.empty, /^(202|200)$/.test(o.status) && n.onData(o.responseText))
			}, o.send(JSON.stringify(t.data))
		}, t.prototype.onData = function(t, n) {
			if (t && "lost params" != t) {
				var o = this,
					s = JSON.parse(t);
				return s.userId && (e.Navigation.Endpoint.userId = s.userId), n && e.RongIMClient._storageProvider.setItem("sId" + e.Navigation.Endpoint.userId, n), e.MessageUtil.isArray(s) || (s = [s]), Array.forEach(s, function(t) {
					o.socket.fire("message", new e.MessageInputStream(t, !0)
						.readMessage())
				}), ""
			}
		}, t.prototype.XmlHttpRequest = function() {
			var e = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
			return "undefined" != typeof XMLHttpRequest && e ? new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : new ActiveXObject("Microsoft.XMLHTTP")
		}, t.prototype.onClose = function() {
			this.xhr && (this.xhr.onload ? this.xhr.onreadystatechange = this.xhr.onload = this.empty : this.xhr.onreadystatechange = this.empty, this.xhr.abort(), this.xhr = null), this.sendxhr && (this.sendxhr.onload ? this.sendxhr.onreadystatechange = this.sendxhr.onload = this.empty : this.sendxhr.onreadystatechange = this.empty, this.sendxhr.abort(), this.sendxhr = null)
		}, t.prototype.disconnect = function() {
			e.RongIMClient._storageProvider.removeItem("sId" + e.Navigation.Endpoint.userId), e.RongIMClient._storageProvider.removeItem(e.Navigation.Endpoint.userId + "msgId"), this.onClose()
		}, t.prototype.reconnect =  t.prototype.onSuccess = function(t, n) {
			var o = t.match(/"sessionid":"\S+?(?=")/);
			if (this.onData(t, o ? o[0].slice(13) : 0), /"headerCode":-32,/.test(t)) return e.RongIMClient._storageProvider.removeItem("sId" + e.Navigation.Endpoint.userId), void e.RongIMClient._storageProvider.removeItem(e.Navigation.Endpoint.userId + "msgId");
			this.getRequest(e.Navigation.Endpoint.host + "/pullmsg.js?sessionid=" + e.RongIMClient._storageProvider.getItem("sId" + e.Navigation.Endpoint.userId) + "&timestrap=" + encodeURIComponent((new Date)
				.getTime() + Math.random() + "")), this.connected = !0, n && this.socket.fire("connect")
		}, t.prototype.onError = function() {
			e.RongIMClient._storageProvider.removeItem("sId" + e.Navigation.Endpoint.userId), e.RongIMClient._storageProvider.removeItem(e.Navigation.Endpoint.userId + "msgId"), this.onClose(), this.connected = !1, this.socket.fire("disconnect")
		}, t
	}();
	e.PollingTransportation = t
}(RongIMLib || (RongIMLib = {}));
var typeMapping = {
		"RC:TxtMsg": "TextMessage",
		"RC:ImgMsg": "ImageMessage",
		"RC:VcMsg": "VoiceMessage",
		"RC:ImgTextMsg": "RichContentMessage",
		"RC:FileMsg": "FileMessage",
		"RC:LBSMsg": "LocationMessage",
		"RC:InfoNtf": "InformationNotificationMessage",
		"RC:ContactNtf": "ContactNotificationMessage",
		"RC:ProfileNtf": "ProfileNotificationMessage",
		"RC:CmdNtf": "CommandNotificationMessage",
		"RC:DizNtf": "DiscussionNotificationMessage",
		"RC:CmdMsg": "CommandMessage",
		"RC:TypSts": "TypingStatusMessage",
		"RC:CsChaR": "ChangeModeResponseMessage",
		"RC:CsHsR": "HandShakeResponseMessage",
		"RC:CsEnd": "TerminateMessage",
		"RC:CsSp": "SuspendMessage",
		"RC:CsUpdate": "CustomerStatusUpdateMessage",
		"RC:ReadNtf": "ReadReceiptMessage",
		"RC:VCAccept": "AcceptMessage",
		"RC:VCRinging": "RingingMessage",
		"RC:VCSummary": "SummaryMessage",
		"RC:VCHangup": "HungupMessage",
		"RC:VCInvite": "InviteMessage",
		"RC:VCModifyMedia": "MediaModifyMessage",
		"RC:VCModifyMem": "MemberModifyMessage",
		"RC:CsContact": "CustomerContact",
		"RC:PSImgTxtMsg": "PublicServiceRichContentMessage",
		"RC:PSMultiImgTxtMsg": "PublicServiceMultiRichContentMessage",
		"RC:GrpNtf": "GroupNotificationMessage",
		"RC:PSCmd": "PublicServiceCommandMessage",
		"RC:RcCmd": "RecallCommandMessage",
		"RC:SRSMsg": "SyncReadStatusMessage",
		"RC:RRReqMsg": "ReadReceiptRequestMessage",
		"RC:RRRspMsg": "ReadReceiptResponseMessage",
		"RCJrmf:RpMsg": "JrmfReadPacketMessage",
		"RCJrmf:RpOpendMsg": "JrmfReadPacketOpenedMessage"
	},
	registerMessageTypeMapping = {},
	HistoryMsgType = {
		4: "qryCMsg",
		2: "qryDMsg",
		3: "qryGMsg",
		1: "qryPMsg",
		6: "qrySMsg",
		7: "qryPMsg",
		8: "qryPMsg",
		5: "qryCMsg"
	},
	disconnectStatus = {
		1: 6
	},
	RongIMLib;
! function(RongIMLib) {
	var Transportations = function() {
		function e() {}
		return e._TransportType = RongIMLib.Socket.WEBSOCKET, e
	}();
	RongIMLib.Transportations = Transportations;
	var MessageUtil = function() {
		function MessageUtil() {}
		return MessageUtil.supportLargeStorage =  MessageUtil.checkStorageSize = function() {
			return JSON.stringify(localStorage)
				.length < 468e4
		}, MessageUtil.getFirstKey = function(e) {
			var t = "";
			for (var n in e) {
				t = n;
				break
			}
			return t
		}, MessageUtil.isEmpty = function(e) {
			var t = !0;
			for (var n in e) {
				t = !1;
				break
			}
			return t
		}, MessageUtil.ArrayForm = function(e) {
			if ("[object ArrayBuffer]" == Object.prototype.toString.call(e)) {
				var t = new Int8Array(e);
				return [].slice.call(t)
			}
			return e
		}, MessageUtil.ArrayFormInput = function(e) {
			return "[object ArrayBuffer]" == Object.prototype.toString.call(e) ? new Uint8Array(e) : e
		}, MessageUtil.indexOf = function(e, t, n) {
			for (var o = e.length, s = n < 0 ? Math.max(0, +n) : n || 0; s < o; s++)
				if (e[s] == t) return s;
			return -1
		}, MessageUtil.isArray =  MessageUtil.forEach = function(e, t) {
			return [].forEach ? function(e, t) {
				[].forEach.call(e, t)
			} : function(e, t) {
				for (var n = 0; n < e.length; n++) t.call(e, e[n], n, e)
			}
		}, MessageUtil.remove = function(e, t) {
			for (var n = 0, o = e.length; n < o; n++)
				if (t(e[n])) return e.splice(n, 1)[0];
			return null
		}, MessageUtil.int64ToTimestamp = function(e, t) {
			if (void 0 === e.low) return e;
			var n = e.low;
			n < 0 && (n += 4294967296), n = n.toString(16);
			var o = parseInt(e.high.toString(16) + "00000000".replace(new RegExp("0{" + n.length + "}$"), n), 16);
			return t ? new Date(o) : o
		}, MessageUtil.messageParser = function(entity, onReceived, offlineMsg) {
			var message = new RongIMLib.Message,
				content = entity.content,
				de, objectName = entity.classname,
				val, isUseDef = !1;
			try {
				RongIMLib.RongIMClient._memoryStore.depend.isPolling ? (val = (new RongIMLib.BinaryHelper)
					.readUTF(content.offset ? MessageUtil.ArrayForm(content.buffer)
						.slice(content.offset, content.limit) : content), de = JSON.parse(val)) : (val = (new RongIMLib.BinaryHelper)
					.readUTF(content.offset ? MessageUtil.ArrayFormInput(content.buffer)
						.subarray(content.offset, content.limit) : content), de = JSON.parse(val))
			} catch (e) {
				de = val, isUseDef = !0
			}
			if (objectName in typeMapping) {
				var str = "new RongIMLib." + typeMapping[objectName] + "(de)";
				message.content = eval(str), message.messageType = typeMapping[objectName]
			} else if (objectName in registerMessageTypeMapping) {
				var str = "new RongIMLib.RongIMClient.RegisterMessage." + registerMessageTypeMapping[objectName] + "(de)";
				message.content = isUseDef ? eval(str)
					.decode(de) : eval(str), message.messageType = registerMessageTypeMapping[objectName]
			} else message.content = new RongIMLib.UnknownMessage({
				content: de,
				objectName: objectName
			}), message.messageType = "UnknownMessage";
			var dateTime = MessageUtil.int64ToTimestamp(entity.dataTime);
			return message.sentTime = dateTime > 0 ? dateTime : +new Date, message.senderUserId = entity.fromUserId, message.conversationType = entity.type, entity.fromUserId == RongIMLib.Bridge._client.userId ? message.targetId = entity.groupId : message.targetId = /^[234]$/.test(entity.type || entity.getType()) ? entity.groupId : message.senderUserId, 1 == entity.direction ? (message.messageDirection = RongIMLib.MessageDirection.SEND, message.senderUserId = RongIMLib.Bridge._client.userId) : message.senderUserId == RongIMLib.Bridge._client.userId ? message.messageDirection = RongIMLib.MessageDirection.SEND : message.messageDirection = RongIMLib.MessageDirection.RECEIVE, 2 == (2 & entity.status) && (message.receivedStatus = RongIMLib.ReceivedStatus.RETRIEVED), message.messageUId = entity.msgId, message.receivedTime = (new Date)
				.getTime(), message.messageId = message.conversationType + "_" + ~~(16777215 * Math.random()), message.objectName = objectName, message.receivedStatus = RongIMLib.ReceivedStatus.READ, message.offLineMessage = !!offlineMsg, offlineMsg || RongIMLib.RongIMClient._memoryStore.connectAckTime > message.sentTime && (message.offLineMessage = !0), message
		}, MessageUtil.sign = {
			converNum: 1,
			msgNum: 1,
			isMsgStart: !0,
			isConvStart: !0
		}, MessageUtil
	}();
	RongIMLib.MessageUtil = MessageUtil;
	var MessageIdHandler = function() {
		function e() {}
		return e.init = function() {
			this.messageId = +(RongIMLib.RongIMClient._storageProvider.getItem(RongIMLib.Navigation.Endpoint.userId + "msgId") || RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", 0) || 0)
		}, e.messageIdPlus = function(e) {
			return RongIMLib.RongIMClient._memoryStore.depend.isPolling && this.init(), this.messageId >= 65535 ? (e(), !1) : (this.messageId++, RongIMLib.RongIMClient._memoryStore.depend.isPolling && RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId), this.messageId)
		}, e.clearMessageId = function() {
			this.messageId = 0, RongIMLib.RongIMClient._memoryStore.depend.isPolling && RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId)
		}, e.getMessageId = function() {
			return RongIMLib.RongIMClient._memoryStore.depend.isPolling && this.init(), this.messageId
		}, e.messageId = 0, e
	}();
	RongIMLib.MessageIdHandler = MessageIdHandler
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
				return e.obtain =  e
	}();
	e.MessageContent = t;
	var n = function(e) {
		function t() {
			e.apply(this, arguments)
		}
		return __extends(t, e), t
	}(t);
	e.NotificationMessage = n;
	var o = t);
	e.StatusMessage = o;
	var s = function() {
				return t.modelClone = function(e) {
			var t = {};
			for (var n in e) "messageName" != n && "encode" != n && (t[n] = e[n]);
			return t
		}, t.modleCreate = function(t, n) {
			if (t.length < 1) throw new Error("Array is empty  -> registerMessageType.modleCreate");
			var o = function(s) {
				var r = this;
				for (var i in t) r[t[i]] = s[t[i]];
				o.prototype.messageName = n, o.prototype.encode = function() {
					return JSON.stringify(e.ModelUtil.modelClone(this))
				}
			};
			return o
		}, t
	}();
	e.ModelUtil = s
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(e) {
			this.messageName = "CustomerStatusMessage", this.status = e.status
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.CustomerStatusMessage = t;
	var n = function() {
		function t(e) {
			this.messageName = "ChangeModeResponseMessage", this.code = e.code, this.data = e.data, this.msg = e.msg
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.ChangeModeResponseMessage = n;
	var o = function() {
		function t(e) {
			this.messageName = "ChangeModeMessage", this.uid = e.uid, this.sid = e.sid, this.pid = e.pid
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.ChangeModeMessage = o;
	var s = function() {
		function t(e) {
			this.messageName = "CustomerStatusUpdateMessage", this.serviceStatus = e.serviceStatus, this.sid = e.sid
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.CustomerStatusUpdateMessage = s;
	var r = function() {
		function t(e) {
			if (this.messageName = "HandShakeMessage", e)
				for (var t in e) this[t] = e[t]
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.HandShakeMessage = r;
	var i = function() {
		function t(e) {
			this.messageName = "CustomerContact", this.page = e.page, this.nickName = e.nickName, this.routingInfo = e.routingInfo, this.info = e.info, this.requestInfo = e.requestInfo
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.CustomerContact = i;
	var a = function() {
		function t(e) {
			this.messageName = "EvaluateMessage", this.uid = e.uid, this.sid = e.sid, this.pid = e.pid, this.source = e.source, this.suggest = e.suggest, this.isresolve = e.isresolve, this.type = e.type
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.EvaluateMessage = a;
	var c = function() {
		function t(e) {
			this.messageName = "HandShakeResponseMessage", this.msg = e.msg, this.status = e.status, this.data = e.data
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.HandShakeResponseMessage = c;
	var u = function() {
		function t(e) {
			this.messageName = "SuspendMessage", this.uid = e.uid, this.sid = e.sid, this.pid = e.pid
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.SuspendMessage = u;
	var g = function() {
		function t(e) {
			this.messageName = "TerminateMessage", this.code = e.code, this.msg = e.msg, this.sid = e.sid
		}
		return t.obtain = function() {
			return null
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.TerminateMessage = g
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
				return e.prototype.encode =  e.prototype.getMessage = function() {
			return null
		}, e
	}();
	e.IsTypingStatusMessage = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(e) {
			if (this.messageName = "InformationNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> InformationNotificationMessage.");
			this.message = e.message, this.extra = e.extra, e.user && (this.user = e.user)
		}
		return t.obtain = function(e) {
			return new t({
				message: e,
				extra: ""
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.InformationNotificationMessage = t;
	var n = function() {
		function t(e) {
			if (this.messageName = "CommandMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> CommandMessage.");
			try {
				"[object String]" == Object.prototype.toString.call(e.data) ? this.data = JSON.parse(e.data) : this.data = e.data
			} catch (t) {
				this.data = e.data
			}
			this.name = e.name, this.extra = e.extra
		}
		return t.obtain =  t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.CommandMessage = n;
	var o = function() {
		function n(e) {
			if (this.messageName = "ContactNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ContactNotificationMessage.");
			this.operation = e.operation, this.targetUserId = e.targetUserId, this.message = e.message, this.extra = e.extra, this.sourceUserId = e.sourceUserId, e.user && (this.user = e.user)
		}
		return n.obtain =  n.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, n.CONTACT_OPERATION_ACCEPT_RESPONSE = "ContactOperationAcceptResponse", n.CONTACT_OPERATION_REJECT_RESPONSE = "ContactOperationRejectResponse", n.CONTACT_OPERATION_REQUEST = "ContactOperationRequest", n
	}();
	e.ContactNotificationMessage = o;
	var s = function() {
		function t(e) {
			if (this.messageName = "ProfileNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
			this.operation = e.operation;
			try {
				"[object String]" == Object.prototype.toString.call(e.data) ? this.data = JSON.parse(e.data) : this.data = e.data
			} catch (t) {
				this.data = e.data
			}
			this.extra = e.extra, e.user && (this.user = e.user)
		}
		return t.obtain = function(e, n) {
			return new t({
				operation: e,
				data: n
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.ProfileNotificationMessage = s;
	var r = function() {
		function t(e) {
			if (this.messageName = "CommandNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
			try {
				"[object String]" == Object.prototype.toString.call(e.data) ? this.data = JSON.parse(e.data) : this.data = e.data
			} catch (t) {
				this.data = e.data
			}
			this.name = e.name, this.extra = e.extra, e.user && (this.user = e.user)
		}
		return t.obtain = function(e, n) {
			return new t({
				name: e,
				data: n,
				extra: ""
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.CommandNotificationMessage = r;
	var i = function() {
		function t(e) {
			if (this.messageName = "DiscussionNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> DiscussionNotificationMessage.");
			this.extra = e.extra, this.extension = e.extension, this.type = e.type, this.isHasReceived = e.isHasReceived, this.operation = e.operation, this.user = e.user, e.user && (this.user = e.user)
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.DiscussionNotificationMessage = i;
	var a = function() {
		function t(e) {
			if (this.messageName = "GroupNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> GroupNotificationMessage.");
			e.operatorUserId && (this.operatorUserId = e.operatorUserId), e.operation && (this.operation = e.operation), e.data && (this.data = e.data), e.message && (this.message = e.message)
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.GroupNotificationMessage = a
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t(e) {
			if (this.messageName = "TextMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TextMessage.");
			this.content = e.content, this.extra = e.extra, e.user && (this.user = e.user), e.mentionedInfo && (this.mentionedInfo = e.mentionedInfo)
		}
		return t.obtain =  t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.TextMessage = t;
	var n = function() {
		function t(e) {
			if (this.messageName = "TypingStatusMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TypingStatusMessage.");
			this.typingContentType = e.typingContentType, this.data = e.data
		}
		return t.obtain =  t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.TypingStatusMessage = n;
	var o = function() {
		function t(e) {
			if (this.messageName = "ReadReceiptMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ReadReceiptMessage.");
			this.lastMessageSendTime = e.lastMessageSendTime, this.messageUId = e.messageUId, this.type = e.type
		}
		return t.obtain =  t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.ReadReceiptMessage = o;
	var s = function() {
		function t(e) {
			if (this.messageName = "VoiceMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> VoiceMessage.");
			this.content = e.content, this.duration = e.duration, this.extra = e.extra, e.user && (this.user = e.user), e.mentionedInfo && (this.mentionedInfo = e.mentionedInfo)
		}
		return t.obtain = function(e, n) {
			return new t({
				content: e,
				duration: n,
				extra: ""
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.VoiceMessage = s;
	var r = function() {
		function t(e) {
			this.messageName = "RecallCommandMessage", this.messageUId = e.messageUId, this.conversationType = e.conversationType, this.targetId = e.targetId, this.sentTime = e.sentTime, e.extra && (this.extra = e.extra), e.user && (this.user = e.user)
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.RecallCommandMessage = r;
	var i = function() {
		function t(e) {
			if (this.messageName = "ImageMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ImageMessage.");
			this.content = e.content, this.imageUri = e.imageUri, e.extra && (this.extra = e.extra), e.user && (this.user = e.user), e.mentionedInfo && (this.mentionedInfo = e.mentionedInfo)
		}
		return t.obtain = function(e, n) {
			return new t({
				content: e,
				imageUri: n,
				extra: ""
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.ImageMessage = i;
	var a = function() {
		function t(e) {
			if (this.messageName = "LocationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> LocationMessage.");
			this.latitude = e.latitude, this.longitude = e.longitude, this.poi = e.poi, this.content = e.content, this.extra = e.extra, e.user && (this.user = e.user), e.mentionedInfo && (this.mentionedInfo = e.mentionedInfo)
		}
		return t.obtain = function(e, n, o, s) {
			return new t({
				latitude: e,
				longitude: n,
				poi: o,
				content: s,
				extra: ""
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.LocationMessage = a;
	var c = function() {
		function t(e) {
			if (this.messageName = "RichContentMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> RichContentMessage.");
			this.title = e.title, this.content = e.content, this.imageUri = e.imageUri, this.extra = e.extra, this.url = e.url, e.user && (this.user = e.user)
		}
		return t.obtain = function(e, n, o, s) {
			return new t({
				title: e,
				content: n,
				imageUri: o,
				url: s,
				extra: ""
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.RichContentMessage = c;
	var u = function() {
		function e(e) {
			this.messageName = "JrmfReadPacketMessage", e && (this.message = e)
		}
		return e.prototype.encode = function() {
			return ""
		}, e
	}();
	e.JrmfReadPacketMessage = u;
	var g = function() {
		function e(e) {
			this.messageName = "JrmfReadPacketOpenedMessage", e && (this.message = e)
		}
		return e.prototype.encode = function() {
			return ""
		}, e
	}();
	e.JrmfReadPacketOpenedMessage = g;
	var d = function() {
		function e(e) {
			if (this.messageName = "UnknownMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> UnknownMessage.");
			this.message = e
		}
		return e.prototype.encode = function() {
			return ""
		}, e
	}();
	e.UnknownMessage = d;
	var p = function() {
		function t(e) {
			if (this.messageName = "PublicServiceCommandMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> PublicServiceCommandMessage.");
			this.content = e.content, this.extra = e.extra, this.menuItem = e.menuItem, e.user && (this.user = e.user), e.mentionedInfo && (this.mentionedInfo = e.mentionedInfo)
		}
		return t.obtain = function(e) {
			return new t({
				content: "",
				command: "",
				menuItem: e,
				extra: ""
			})
		}, t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.PublicServiceCommandMessage = p;
	var l = function() {
		function e(e) {
			this.messageName = "PublicServiceMultiRichContentMessage", this.richContentMessages = e
		}
		return e.prototype.encode =  e
	}();
	e.PublicServiceMultiRichContentMessage = l;
	var f = function() {
		function t(e) {
			this.messageName = "SyncReadStatusMessage", e.lastMessageSendTime && (this.lastMessageSendTime = e.lastMessageSendTime)
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.SyncReadStatusMessage = f;
	var m = function() {
		function t(e) {
			this.messageName = "ReadReceiptRequestMessage", e.messageUId && (this.messageUId = e.messageUId)
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.ReadReceiptRequestMessage = m;
	var h = function() {
		function t(e) {
			this.messageName = "ReadReceiptResponseMessage", e.receiptMessageDic && (this.receiptMessageDic = e.receiptMessageDic)
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.ReadReceiptResponseMessage = h;
	var M = function() {
				return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.PublicServiceRichContentMessage = M;
	var I = function() {
		function t(e) {
			this.messageName = "FileMessage", e.name && (this.name = e.name), e.size && (this.size = e.size), e.type && (this.type = e.type), e.fileUrl && (this.fileUrl = e.fileUrl), e.extra && (this.extra = e.extra), e.user && (this.user = e.user)
		}
		return t.obtain =  t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.FileMessage = I;
	var y = );
	e.ChannelInfo = y;
	var C = function() {
		function t(e) {
			this.messageName = "AcceptMessage", this.callId = e.callId, this.mediaType = e.mediaType
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.AcceptMessage = C;
	var R = function() {
				return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.RingingMessage = R;
	var S = function() {
		function t(e) {
			this.messageName = "SummaryMessage", this.caller = e.caller, this.inviter = e.inviter, this.mediaType = e.mediaType, this.memberIdList = e.memberIdList, this.startTime = e.startTime, this.connectedTime = e.connectedTime, this.duration = e.duration, this.status = e.status
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.SummaryMessage = S;
	var T = function() {
		function t(e) {
			this.messageName = "HungupMessage", this.callId = e.callId, this.reason = e.reason
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.HungupMessage = T;
	var v = function() {
		function t(e) {
			this.messageName = "InviteMessage", this.callId = e.callId, this.engineType = e.engineType, this.channelInfo = e.channelInfo, this.mediaType = e.mediaType, this.extra = e.extra, this.inviteUserIds = e.inviteUserIds
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.InviteMessage = v;
	var _ = function() {
		function t(e) {
			this.messageName = "MediaModifyMessage", this.callId = e.callId, this.mediaType = e.mediaType
		}
		return t.prototype.encode = function() {
			return JSON.stringify(e.ModelUtil.modelClone(this))
		}, t
	}();
	e.MediaModifyMessage = _;
	var E = function() {
		function t(e) {
			this.messageName = "MemberModifyMessage", this.modifyMemType = e.modifyMemType, this.callId = e.callId, this.caller = e.caller, this.engineType = e.engineType, this.channelInfo = e.channelInfo, this.mediaType = e.mediaType, this.extra = e.extra, this.inviteUserIds = e.inviteUserIds, this.existedMemberStatusList = e.existedMemberStatusList
		}
		return t.prototype.encode =  t
	}();
	e.MemberModifyMessage = E
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		return function(e, t, n) {
			this.platform = e, this.online = t, this.status = n
		}
	}();
	e.UserStatus = t;
	var n = function() {
		return function(e, t, n) {}
	}();
	e.MentionedInfo = n;
	var o = );
	e.DeleteMessage = o;
	var s = );
	e.CustomServiceConfig = s;
	var r = function() {
		return 	}();
	e.CustomServiceSession = r;
	var i = function() {
		function t(e, t, n, o, s, r, i, a, c, u, g, d, p, l, f, m, h, M, I, y) {
			this.conversationTitle = e, this.conversationType = t, this.draft = n, this.isTop = o, this.latestMessage = s, this.latestMessageId = r, this.notificationStatus = i, this.objectName = a, this.receivedStatus = c, this.receivedTime = u, this.senderUserId = g, this.senderUserName = d, this.sentStatus = p, this.sentTime = l, this.targetId = f, this.unreadMessageCount = m, this.senderPortraitUri = h, this.isHidden = M, this.mentionedMsg = I, this.hasUnreadMention = y
		}
		return t.prototype.setTop = function() {
			e.RongIMClient._dataAccessProvider.addConversation(this, {
				onSuccess: 			})
		}, t
	}();
	e.Conversation = i;
	var a = );
	e.Discussion = a;
	var c = function() {
		return function(e, t, n) {
			this.id = e, this.name = t, this.portraitUri = n
		}
	}();
	e.Group = c;
	var u = function() {
		return 	}();
	e.Message = u;
	var g = function() {
				return e.prototype.getMessageTag = function() {
			return this.isCounted && this.isPersited ? 3 : this.isCounted || !this.isPersited ? 2 : !this.isCounted || this.isPersited ? 1 : this.isCounted || this.isPersited ? void 0 : 0
		}, e
	}();
	e.MessageTag = g;
	var d = function() {
		return 	}();
	e.PublicServiceMenuItem = d;
	var p = function() {
		return 	}();
	e.PublicServiceProfile = p;
	var l = function() {
		return function(e, t, n) {
			this.id = e, this.name = t, this.portraitUri = n
		}
	}();
	e.UserInfo = l
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t() {
			this.database = new e.DBUtil
		}
		return t.prototype.init =  t.prototype.connect = function(t, n) {
			if (e.RongIMClient.bridge = e.Bridge.getInstance(), e.RongIMClient._memoryStore.token = t, e.RongIMClient._memoryStore.callback = n, !e.Bridge._client || !e.Bridge._client.channel || e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTED || e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTING) {
				for (var o = 0, s = e.RongIMClient._memoryStore.listenerList.length; o < s; o++) e.RongIMClient.bridge.setListener(e.RongIMClient._memoryStore.listenerList[o]);
				e.RongIMClient._memoryStore.listenerList.length = 0, e.RongIMClient.bridge.connect(e.RongIMClient._memoryStore.appKey, t, {
					onSuccess: function(e) {
						setTimeout(function() {
							n.onSuccess(e)
						})
					},
					onError: function(t) {
						t != e.ConnectionState.TOKEN_INCORRECT && t ? setTimeout(function() {
							n.onError(t)
						}) : setTimeout(function() {
							n.onTokenIncorrect()
						})
					}
				})
			}
		}, t.prototype.reconnect = function(t) {
			e.Bridge._client && e.Bridge._client.channel && e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTED && e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTING && e.RongIMClient.bridge.reconnect(t)
		}, t.prototype.logout = function() {
			e.RongIMClient.bridge.disconnect(), e.RongIMClient.bridge = null
		}, t.prototype.disconnect = function() {
			e.RongIMClient.bridge.disconnect()
		}, t.prototype.sendReceiptResponse = function(t, n, o) {
			var s = e.Bridge._client.userId + t + n + "RECEIVED",
				r = this;
			if (e.MessageUtil.supportLargeStorage()) {
				var i = JSON.parse(e.RongIMClient._storageProvider.getItem(s));
				if (i) {
					var a = [];
					for (var c in i) {
						var u = {};
						u[c] = i[c].uIds, i[c].isResponse || a.push(u)
					}
					if (0 == a.length) return void o.onSuccess();
					var g = setInterval(function() {
						1 == a.length && clearInterval(g);
						var c = a.splice(0, 1)[0],
							u = new e.ReadReceiptResponseMessage({
								receiptMessageDic: c
							});
						r.sendMessage(t, n, u, {
							onSuccess: function(t) {
								var n = e.MessageUtil.getFirstKey(c);
								i[n].isResponse = !0, e.RongIMClient._storageProvider.setItem(s, JSON.stringify(i)), o.onSuccess(t)
							},
							onError: function(e, t) {
								o.onError(e, t)
							}
						})
					}, 200)
				} else o.onSuccess()
			} else o.onSuccess()
		}, t.prototype.sendTypingStatusMessage = function(t, n, o, s) {
			var r = this;
			o in e.RongIMClient.MessageParams && r.sendMessage(t, n, e.TypingStatusMessage.obtain(e.RongIMClient.MessageParams[o].objectName, ""), {
				onSuccess: function() {
					setTimeout(function() {
						s.onSuccess()
					})
				},
				onError: function(e) {
					setTimeout(function() {
						s.onError(e, null)
					})
				}
			})
		}, t.prototype.sendRecallMessage = function(t, n) {
			var o = new e.RecallCommandMessage({
				conversationType: t.conversationType,
				targetId: t.targetId,
				sentTime: t.sentTime,
				messageUId: t.messageUId,
				extra: t.extra,
				user: t.user
			});
			this.sendMessage(t.conversationType, t.senderUserId, o, n, !1, null, null, 2)
		}, t.prototype.sendTextMessage = function(t, n, o, s) {
			var r = e.TextMessage.obtain(o);
			this.sendMessage(t, n, r, s)
		}, t.prototype.getRemoteHistoryMessages = function(t, n, o, s, r) {
			if (s <= 1) throw new Error("the count must be greater than 1.");
			var i = new Modules.HistoryMessageInput;
			i.setTargetId(n), 0 === o || o > 0 ? i.setDataTime(o) : i.setDataTime(e.RongIMClient._memoryStore.lastReadTime.get(t + n)), i.setSize(s), e.RongIMClient.bridge.queryMsg(HistoryMsgType[t], e.MessageUtil.ArrayForm(i.toArrayBuffer()), n, {
				onSuccess: function(o) {
					e.RongIMClient._memoryStore.lastReadTime.set(t + n, e.MessageUtil.int64ToTimestamp(o.syncTime));
					var s, i = o.list.reverse(),
						a = null;
					if (e.MessageUtil.supportLargeStorage())
						for (var c = 0, u = i.length; c < u; c++) a = e.MessageUtil.messageParser(i[c]), (s = JSON.parse(e.RongIMClient._storageProvider.getItem(e.Bridge._client.userId + a.messageUId + "SENT"))) && (a.receiptResponse || (a.receiptResponse = {}), a.receiptResponse[a.messageUId] = s.count), i[c] = a;
					else
						for (var c = 0, u = i.length; c < u; c++) i[c] = e.MessageUtil.messageParser(i[c]);
					setTimeout(function() {
						r.onSuccess(i, !!o.hasMsg)
					})
				},
				onError: function(t) {
					setTimeout(function() {
						t === e.ErrorCode.TIMEOUT ? r.onError(t) : r.onSuccess([], !1)
					})
				}
			}, "HistoryMessagesOuput")
		}, t.prototype.hasRemoteUnreadMessages = function(t, n) {
			var o = null;
			window.RCCallback = function(e) {
					setTimeout(function() {
						n.onSuccess(!!+e.status)
					}), o.parentNode.removeChild(o)
				}, (o = document.createElement("script"))
				.src = e.RongIMClient._memoryStore.depend.api + "/message/exist.js?appKey=" + encodeURIComponent(e.RongIMClient._memoryStore.appKey) + "&token=" + encodeURIComponent(t) + "&callBack=RCCallback&_=" + Date.now(), document.body.appendChild(o), o.onerror = function() {
					setTimeout(function() {
						n.onError(e.ErrorCode.UNKNOWN)
					}), o.parentNode.removeChild(o)
				}
		}, t.prototype.getRemoteConversationList = function(t, n, o) {
			var s = new Modules.RelationsInput;
			s.setType(1), void 0 === o ? s.setCount(0) : s.setCount(o), e.RongIMClient.bridge.queryMsg(26, e.MessageUtil.ArrayForm(s.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(o) {
					if (o.info) {
						o.info = o.info.reverse();
						for (var s = 0, r = o.info.length; s < r; s++) e.RongIMClient.getInstance()
							.pottingConversation(o.info[s])
					}
					if (n) {
						var i = [];
						Array.forEach(n, function(t) {
							Array.forEach(e.RongIMClient._memoryStore.conversationList, function(e) {
								e.conversationType == t && i.push(e)
							})
						}), t.onSuccess(i)
					} else t.onSuccess(e.RongIMClient._memoryStore.conversationList)
				},
				onError: function(n) {
					n === e.ErrorCode.TIMEOUT ? t.onError(n) : t.onSuccess([])
				}
			}, "RelationsOutput")
		}, t.prototype.addMemberToDiscussion = function(t, n, o) {
			var s = new Modules.ChannelInvitationInput;
			s.setUsers(n), e.RongIMClient.bridge.queryMsg(0, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						o.onSuccess()
					})
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.JOIN_IN_DISCUSSION)
					})
				}
			})
		}, t.prototype.createDiscussion = function(t, n, o) {
			var s = new Modules.CreateDiscussionInput,
				r = this;
			s.setName(t), e.RongIMClient.bridge.queryMsg(1, e.MessageUtil.ArrayForm(s.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(e) {
					n.length > 0 && r.addMemberToDiscussion(e, n, {
						onSuccess: function() {},
						onError: function(e) {
							setTimeout(function() {
								o.onError(e)
							})
						}
					}), setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.CREATE_DISCUSSION)
					})
				}
			}, "CreateDiscussionOutput")
		}, t.prototype.getDiscussion = function(t, n) {
			var o = new Modules.ChannelInfoInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(4, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function(e) {
					setTimeout(function() {
						n.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						n.onError(e)
					})
				}
			}, "ChannelInfoOutput")
		}, t.prototype.quitDiscussion = function(t, n) {
			var o = new Modules.LeaveChannelInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(7, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, n)
		}, t.prototype.removeMemberFromDiscussion = function(t, n, o) {
			var s = new Modules.ChannelEvictionInput;
			s.setUser(n), e.RongIMClient.bridge.queryMsg(9, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, o)
		}, t.prototype.setDiscussionInviteStatus = function(t, n, o) {
			var s = new Modules.ModifyPermissionInput;
			s.setOpenStatus(n.valueOf()), e.RongIMClient.bridge.queryMsg(11, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: function(e) {
					setTimeout(function() {
						o.onSuccess()
					})
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.INVITE_DICUSSION)
					})
				}
			})
		}, t.prototype.setDiscussionName = function(t, n, o) {
			var s = new Modules.RenameChannelInput;
			s.setName(n), e.RongIMClient.bridge.queryMsg(12, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						o.onSuccess()
					})
				},
				onError: function(e) {
					o.onError(e)
				}
			})
		}, t.prototype.joinGroup = function(t, n, o) {
			var s = new Modules.GroupInfo;
			s.setId(t), s.setName(n);
			var r = new Modules.GroupInput;
			r.setGroupInfo([s]), e.RongIMClient.bridge.queryMsg(6, e.MessageUtil.ArrayForm(r.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						o.onSuccess()
					})
				},
				onError: function(e) {
					o.onError(e)
				}
			}, "GroupOutput")
		}, t.prototype.quitGroup = function(t, n) {
			var o = new Modules.LeaveChannelInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(8, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						n.onSuccess()
					})
				},
				onError: function(e) {
					n.onError(e)
				}
			})
		}, t.prototype.syncGroup = function(t, n) {
			for (var o = 0, s = [], r = [], i = t.length; o < i; o++)
				if (0 === s.length || !(t[o].id in s)) {
					s.push(t[o].id);
					var a = new Modules.GroupInfo;
					a.setId(t[o].id), a.setName(t[o].name), r.push(a)
				} var c = new Modules.GroupHashInput;
			c.setUserId(e.Bridge._client.userId), c.setGroupHashCode(md5(s.sort()
				.join(""))), e.RongIMClient.bridge.queryMsg(13, e.MessageUtil.ArrayForm(c.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(t) {
					if (1 === t) {
						var o = new Modules.GroupInput;
						o.setGroupInfo(r), e.RongIMClient.bridge.queryMsg(20, e.MessageUtil.ArrayForm(o.toArrayBuffer()), e.Bridge._client.userId, {
							onSuccess: function() {
								setTimeout(function() {
									n.onSuccess()
								})
							},
							onError: function() {
								setTimeout(function() {
									n.onError(e.ErrorCode.GROUP_MATCH_ERROR)
								})
							}
						}, "GroupOutput")
					} else setTimeout(function() {
						n.onSuccess()
					})
				},
				onError: function() {
					setTimeout(function() {
						n.onError(e.ErrorCode.GROUP_SYNC_ERROR)
					})
				}
			}, "GroupHashOutput")
		}, t.prototype.joinChatRoom = function(t, n, o) {
			var s = new Modules.ChrmInput;
			s.setNothing(1), e.Bridge._client.chatroomId = t, e.RongIMClient.bridge.queryMsg(19, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: function() {
					o.onSuccess();
					var s = new Modules.ChrmPullMsg;
					0 == n && (n = -1), s.setCount(n), s.setSyncTime(0), e.Bridge._client.queryMessage("chrmPull", e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, 1, {
						onSuccess: function(n) {
							var o = e.MessageUtil.int64ToTimestamp(n.syncTime);
							e.RongIMClient._memoryStore.lastReadTime.set(t + e.Bridge._client.userId + "CST", o);
							var s = n.list;
							if (e.RongIMClient._memoryStore.filterMessages.length > 0)
								for (var r = 0, i = s.length; r < i; r++)
									for (var a = 0, c = e.RongIMClient._memoryStore.filterMessages.length; a < c; a++) e.RongIMClient.MessageParams[e.RongIMClient._memoryStore.filterMessages[a]].objectName != s[r].classname && e.Bridge._client.handler.onReceived(s[r]);
							else
								for (var r = 0, u = s.length; r < u; r++) e.Bridge._client.handler.onReceived(s[r])
						},
						onError: function(t) {
							setTimeout(function() {
								o.onError(e.ErrorCode.CHATROOM_HISMESSAGE_ERROR)
							})
						}
					}, "DownStreamMessages")
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.CHARTOOM_JOIN_ERROR)
					})
				}
			}, "ChrmOutput")
		}, t.prototype.getChatRoomInfo = function(t, n, o, s) {
			var r = new Modules.QueryChatroomInfoInput;
			r.setCount(n), r.setOrder(o), e.RongIMClient.bridge.queryMsg("queryChrmI", e.MessageUtil.ArrayForm(r.toArrayBuffer()), t, {
				onSuccess: function(e) {
					setTimeout(function() {
						s.onSuccess(e)
					})
				},
				onError: function(e) {
					s.onError(e)
				}
			}, "QueryChatroomInfoOutput")
		}, t.prototype.quitChatRoom = function(t, n) {
			var o = new Modules.ChrmInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(17, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						n.onSuccess()
					})
				},
				onError: function(e) {
					n.onError(e)
				}
			}, "ChrmOutput")
		}, t.prototype.setChatroomHisMessageTimestamp = function(t, n) {
			e.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + t, n)
		}, t.prototype.getChatRoomHistoryMessages = function(t, n, o, s) {
			var r = new Modules.HistoryMsgInput;
			r.setTargetId(t);
			var i = e.RongIMClient._memoryStore.lastReadTime.get("chrhis_" + t) || 0;
			r.setTime(i), r.setCount(n), r.setOrder(o), e.RongIMClient.bridge.queryMsg(34, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(n) {
					e.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + t, e.MessageUtil.int64ToTimestamp(n.syncTime));
					for (var o = n.list.reverse(), r = 0, i = o.length; r < i; r++) o[r] = e.MessageUtil.messageParser(o[r]);
					setTimeout(function() {
						s.onSuccess(o, !!n.hasMsg)
					})
				},
				onError: function(t) {
					setTimeout(function() {
						t === e.ErrorCode.TIMEOUT ? s.onError(t) : s.onSuccess([], !1)
					})
				}
			}, "HistoryMsgOuput")
		}, t.prototype.addToBlacklist = function(t, n) {
			var o = new Modules.Add2BlackListInput;
			o.setUserId(t), e.RongIMClient.bridge.queryMsg(21, e.MessageUtil.ArrayForm(o.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function() {
					n.onSuccess()
				},
				onError: function() {
					n.onError(e.ErrorCode.BLACK_ADD_ERROR)
				}
			})
		}, t.prototype.getBlacklist = function(t) {
			var n = new Modules.QueryBlackListInput;
			n.setNothing(1), e.RongIMClient.bridge.queryMsg(23, e.MessageUtil.ArrayForm(n.toArrayBuffer()), e.Bridge._client.userId, t, "QueryBlackListOutput")
		}, t.prototype.getBlacklistStatus = function(t, n) {
			var o = new Modules.BlackListStatusInput;
			o.setUserId(t), e.RongIMClient.bridge.queryMsg(24, e.MessageUtil.ArrayForm(o.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(t) {
					setTimeout(function() {
						n.onSuccess(e.BlacklistStatus[t])
					})
				},
				onError: function() {
					setTimeout(function() {
						n.onError(e.ErrorCode.BLACK_GETSTATUS_ERROR)
					})
				}
			})
		}, t.prototype.removeFromBlacklist = function(t, n) {
			var o = new Modules.RemoveFromBlackListInput;
			o.setUserId(t), e.RongIMClient.bridge.queryMsg(22, e.MessageUtil.ArrayForm(o.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function() {
					n.onSuccess()
				},
				onError: function() {
					n.onError(e.ErrorCode.BLACK_REMOVE_ERROR)
				}
			})
		}, t.prototype.getFileToken = function(t, n) {
			if (/(1|2|3|4)/.test(t.toString())) {
				var o = new Modules.GetQNupTokenInput;
				o.setType(t), e.RongIMClient.bridge.queryMsg(30, e.MessageUtil.ArrayForm(o.toArrayBuffer()), e.Bridge._client.userId, {
					onSuccess: function(e) {
						setTimeout(function() {
							n.onSuccess(e)
						})
					},
					onError: function(e) {
						n.onError(e)
					}
				}, "GetQNupTokenOutput")
			} else n.onError(e.ErrorCode.QNTKN_FILETYPE_ERROR)
		}, t.prototype.getFileUrl = function(t, n, o, s) {
			if (/(1|2|3|4)/.test(t.toString())) {
				var r = new Modules.GetQNdownloadUrlInput;
				r.setType(t), r.setKey(n), o && r.setFileName(o), e.RongIMClient.bridge.queryMsg(31, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, {
					onSuccess: function(e) {
						setTimeout(function() {
							s.onSuccess(e)
						})
					},
					onError: function(e) {
						s.onError(e)
					}
				}, "GetQNdownloadUrlOutput")
			} else setTimeout(function() {
				s.onError(e.ErrorCode.QNTKN_FILETYPE_ERROR)
			})
		}, t.prototype.sendMessage = function(t, n, o, s, r, i, a, c) {
			if (e.Bridge._client.channel) {
				if (!e.Bridge._client.channel.socket.socket.connected) throw s.onError(e.ErrorCode.TIMEOUT, null), new Error("connect is timeout! postion:sendMessage");
				var u = new Modules.UpStreamMessage;
				if (!r || t != e.ConversationType.DISCUSSION && t != e.ConversationType.GROUP ? u.setSessionId(e.RongIMClient.MessageParams[o.messageName].msgTag.getMessageTag()) : u.setSessionId(7), i && u.setPushText(i), a && u.setAppData(a), (t == e.ConversationType.DISCUSSION || t == e.ConversationType.GROUP) && o.messageName == e.RongIMClient.MessageType.ReadReceiptResponseMessage) {
					var g = o;
					if (g.receiptMessageDic) {
						var d = [];
						for (var p in g.receiptMessageDic) d.push(p);
						u.setUserId(d)
					}
				}
				t != e.ConversationType.DISCUSSION && t != e.ConversationType.GROUP || o.messageName != e.RongIMClient.MessageType.SyncReadStatusMessage || u.setUserId(e.Bridge._client.userId), u.setClassname(e.RongIMClient.MessageParams[o.messageName].objectName), u.setContent(o.encode());
				var l = u.toArrayBuffer();
				"[object ArrayBuffer]" == Object.prototype.toString.call(l) && (l = [].slice.call(new Int8Array(l)));
				var f = null,
					m = new e.Message;
				this.getConversation(t, n, {
						onSuccess: function(s) {
							f = s, 3 == e.RongIMClient.MessageParams[o.messageName].msgTag.getMessageTag() && (f || (f = e.RongIMClient.getInstance()
									.createConversation(t, n, "")), f.sentTime = (new Date)
								.getTime(), f.sentStatus = e.SentStatus.SENDING, f.senderUserName = "", f.senderUserId = e.Bridge._client.userId, f.notificationStatus = e.ConversationNotificationStatus.DO_NOT_DISTURB, f.latestMessage = m, f.unreadMessageCount = 0, e.RongIMClient._dataAccessProvider.addConversation(f, {
									onSuccess: function(e) {}
								})), e.RongIMClient._memoryStore.converStore = f
						}
					}), m.content = o, m.conversationType = t, m.senderUserId = e.Bridge._client.userId, m.objectName = e.RongIMClient.MessageParams[o.messageName].objectName, m.targetId = n, m.sentTime = (new Date)
					.getTime(), m.messageDirection = e.MessageDirection.SEND, m.sentStatus = e.SentStatus.SENT, m.messageType = o.messageName, e.RongIMClient.bridge.pubMsg(t.valueOf(), l, n, {
						onSuccess: function(r) {
							if (r && r.timestamp && e.RongIMClient._memoryStore.lastReadTime.set("converST_" + e.Bridge._client.userId + t + n, r.timestamp), (t == e.ConversationType.DISCUSSION || t == e.ConversationType.GROUP) && o.messageName == e.RongIMClient.MessageType.ReadReceiptRequestMessage) {
								var i = m.content,
									a = e.Bridge._client.userId + i.messageUId + "SENT";
								e.RongIMClient._storageProvider.setItem(a, JSON.stringify({
									count: 0,
									dealtime: r.timestamp,
									userIds: {}
								}))
							}
							3 == e.RongIMClient.MessageParams[m.messageType].msgTag.getMessageTag() && (e.RongIMClient._memoryStore.converStore.latestMessage = m, e.RongIMClient._dataAccessProvider.addMessage(t, n, m, {
								onSuccess: function(t) {
									(m = t)
									.messageUId = r.messageUId, m.sentTime = r.timestamp, m.sentStatus = e.SentStatus.SENT, m.messageId = r.messageId, e.RongIMClient._dataAccessProvider.updateMessage(m)
								},
								onError: function() {}
							})), setTimeout(function() {
								m.sentTime = r.timestamp, s.onSuccess(m)
							})
						},
						onError: function(o) {
							m.sentStatus = e.SentStatus.FAILED, 3 == e.RongIMClient.MessageParams[m.messageType].msgTag.getMessageTag() && (e.RongIMClient._memoryStore.converStore.latestMessage = m), e.RongIMClient._dataAccessProvider.addMessage(t, n, m, {
								onSuccess: function(t) {
									m.messageId = t.messageId, e.RongIMClient._dataAccessProvider.updateMessage(m)
								},
								onError: function() {}
							}), setTimeout(function() {
								s.onError(o, m)
							})
						}
					}, null, c), m.messageId = e.MessageIdHandler.messageId + ""
			} else s.onError(e.ErrorCode.RC_NET_UNAVAILABLE, null)
		}, t.prototype.setConnectionStatusListener = function(t) {
			e.RongIMClient.bridge ? e.RongIMClient.bridge.setListener(t) : e.RongIMClient._memoryStore.listenerList.push(t)
		}, t.prototype.setOnReceiveMessageListener = function(t) {
			e.RongIMClient.bridge ? e.RongIMClient.bridge.setListener(t) : e.RongIMClient._memoryStore.listenerList.push(t)
		}, t.prototype.registerMessageType = function(t, n, o, s) {
			if (!t) throw new Error("messageType can't be empty,postion -> registerMessageType");
			if (!n) throw new Error("objectName can't be empty,postion -> registerMessageType");
			if ("[object Array]" == Object.prototype.toString.call(s)) {
				var r = e.ModelUtil.modleCreate(s, t);
				e.RongIMClient.RegisterMessage[t] = r
			} else {
				if ("[object Function]" != Object.prototype.toString.call(s) && "[object Object]" != Object.prototype.toString.call(s)) throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");
				if (!s.encode) throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");
				if (!s.decode) throw new Error("decode method has not realized -> registerMessageType")
			}
			registerMessageTypeMapping[n] = t
		}, t.prototype.addConversation = function(t, n) {
			for (var o = !0, s = 0, r = e.RongIMClient._memoryStore.conversationList.length; s < r; s++)
				if (e.RongIMClient._memoryStore.conversationList[s].conversationType === t.conversationType && e.RongIMClient._memoryStore.conversationList[s].targetId === t.targetId) {
					e.RongIMClient._memoryStore.conversationList.unshift(e.RongIMClient._memoryStore.conversationList.splice(s, 1)[0]), o = !1;
					break
				} o && e.RongIMClient._memoryStore.conversationList.unshift(t), n.onSuccess(!0)
		}, t.prototype.updateConversation = function(t) {
			for (var n = 0, o = e.RongIMClient._memoryStore.conversationList.length; n < o; n++)
				if (t.conversationType === e.RongIMClient._memoryStore.conversationList[n].conversationType && t.targetId === e.RongIMClient._memoryStore.conversationList[n].targetId) {
					t.conversationTitle && (e.RongIMClient._memoryStore.conversationList[n].conversationTitle = t.conversationTitle), t.senderUserName && (e.RongIMClient._memoryStore.conversationList[n].senderUserName = t.senderUserName), t.senderPortraitUri && (e.RongIMClient._memoryStore.conversationList[n].senderPortraitUri = t.senderPortraitUri), t.latestMessage && (e.RongIMClient._memoryStore.conversationList[n].latestMessage = t.latestMessage);
					break
				}
		}, t.prototype.removeConversation = function(t, n, o) {
			var s = new Modules.RelationsInput;
			s.setType(t), e.RongIMClient.bridge.queryMsg(27, e.MessageUtil.ArrayForm(s.toArrayBuffer()), n, {
				onSuccess: function() {
					o.onSuccess(!0)
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.CONVER_REMOVE_ERROR)
					})
				}
			})
		}, t.prototype.getMessage = function(t, n) {
			n.onSuccess(new e.Message)
		}, t.prototype.addMessage =  t.prototype.removeMessage = function(t, n, o, s) {
			e.RongIMClient.getInstance()
				.deleteRemoteMessages(t, n, o, s)
		}, t.prototype.removeLocalMessage = function(e, t, n, o) {
			o.onSuccess(!0)
		}, t.prototype.updateMessage =  t.prototype.clearMessages = function(e, t, n) {
			n.onSuccess(!0)
		}, t.prototype.updateMessages = function(t, n, o, s, r) {
			var i = this;
			"readStatus" == o && e.RongIMClient._memoryStore.conversationList.length > 0 && i.getConversationList({
				onSuccess: function(e) {
					Array.forEach(e, function(e) {
						e.conversationType == t && e.targetId == n && (e.unreadMessageCount = 0)
					})
				},
				onError: function(e) {
					r.onError(e)
				}
			}, null), r.onSuccess(!0)
		}, t.prototype.getConversation = function(t, n, o) {
			for (var s = null, r = 0, i = e.RongIMClient._memoryStore.conversationList.length; r < i; r++)
				if (e.RongIMClient._memoryStore.conversationList[r].conversationType == t && e.RongIMClient._memoryStore.conversationList[r].targetId == n && (s = e.RongIMClient._memoryStore.conversationList[r], e.MessageUtil.supportLargeStorage())) {
					var a = e.RongIMClient._storageProvider.getItem("cu" + e.Bridge._client.userId + t + n);
					0 == s.unreadMessageCount && (s.unreadMessageCount = Number(a))
				} o.onSuccess(s)
		}, t.prototype.getConversationList = function(t, n, o, s) {
			e.RongIMClient.getInstance()
				.getRemoteConversationList({
					onSuccess: function(n) {
						e.MessageUtil.supportLargeStorage() && Array.forEach(e.RongIMClient._memoryStore.conversationList, function(t) {
							var n = e.RongIMClient._storageProvider.getItem("cu" + e.Bridge._client.userId + t.conversationType + t.targetId);
							0 == t.unreadMessageCount && (t.unreadMessageCount = Number(n))
						}), e.RongIMClient._memoryStore.isSyncRemoteConverList = !1, t.onSuccess(n)
					},
					onError: function(e) {
						t.onSuccess([])
					}
				}, n, o, s)
		}, t.prototype.clearConversations = function(t, n) {
			Array.forEach(t, function(t) {
				Array.forEach(e.RongIMClient._memoryStore.conversationList, function(n) {
					t == n.conversationType && e.RongIMClient.getInstance()
						.removeConversation(n.conversationType, n.targetId, {
							onSuccess: function() {},
							onError: function() {}
						})
				})
			}), n.onSuccess(!0)
		}, t.prototype.getHistoryMessages = function(t, n, o, s, r) {
			e.RongIMClient.getInstance()
				.getRemoteHistoryMessages(t, n, o, s, r)
		}, t.prototype.getTotalUnreadCount = function(t, n) {
			var o = 0;
			if (n)
				for (var s = 0, r = n.length; s < r; s++) Array.forEach(e.RongIMClient._memoryStore.conversationList, function(e) {
					e.conversationType == n[s] && (o += e.unreadMessageCount)
				});
			else Array.forEach(e.RongIMClient._memoryStore.conversationList, ;
			t.onSuccess(o)
		}, t.prototype.getConversationUnreadCount = function(t, n) {
			var o = 0;
			Array.forEach(t, function(t) {
				Array.forEach(e.RongIMClient._memoryStore.conversationList, function(e) {
					e.conversationType == t && (o += e.unreadMessageCount)
				})
			}), n.onSuccess(o)
		}, t.prototype.getUnreadCount = function(e, t, n) {
			this.getConversation(e, t, {
				onSuccess: 
				onError: function(e) {
					n.onError(e)
				}
			})
		}, t.prototype.clearUnreadCountByTimestamp = function(e, t, n, o) {
			o.onSuccess(!0)
		}, t.prototype.clearUnreadCount = function(t, n, o) {
			this.getConversation(t, n, {
				onSuccess: function(s) {
					if (s) {
						e.MessageUtil.supportLargeStorage() && e.RongIMClient._storageProvider.removeItem("cu" + e.Bridge._client.userId + t + n), s.unreadMessageCount = 0, s.mentionedMsg = null;
						var r = e.RongIMClient._storageProvider.getItem("mentioneds_" + e.Bridge._client.userId + "_" + t + "_" + n);
						if (r) {
							var i = JSON.parse(r);
							delete i[t + "_" + n], e.MessageUtil.isEmpty(i) ? e.RongIMClient._storageProvider.removeItem("mentioneds_" + e.Bridge._client.userId + "_" + t + "_" + n) : e.RongIMClient._storageProvider.setItem("mentioneds_" + e.Bridge._client.userId + "_" + t + "_" + n, JSON.stringify(i))
						}
					}
					o.onSuccess(!0)
				},
				onError: function(e) {
					o.onError(e)
				}
			})
		}, t.prototype.setConversationToTop = function(e, t, n, o) {
			var s = this;
			this.getConversation(e, t, {
				onSuccess: function(e) {
					e.isTop = n, s.addConversation(e, o), o.onSuccess(!0)
				},
				onError: function(e) {
					o.onError(e)
				}
			})
		}, t.prototype.clearListeners = function() {}, t.prototype.setServerInfo = function(e) {}, t.prototype.getUnreadMentionedMessages = function(e, t) {
			return null
		}, t.prototype.setConversationHidden = function(e, t, n) {}, t.prototype.setMessageExtra = function(e, t, n) {
			n.onSuccess(!0)
		}, t.prototype.setMessageReceivedStatus = function(e, t, n) {
			n.onSuccess(!0)
		}, t.prototype.setMessageSentStatus = function(e, t, n) {
			n.onSuccess(!0)
		}, t.prototype.getAllConversations =  t.prototype.getConversationByContent = function(e, t) {
			t.onSuccess([])
		}, t.prototype.getMessagesFromConversation = function(e, t, n, o) {
			o.onSuccess([])
		}, t.prototype.searchConversationByContent = function(e, t, n) {
			t.onSuccess([])
		}, t.prototype.searchMessageByContent = function(e, t, n, o, s, r, i) {
			i.onSuccess([])
		}, t.prototype.getDelaTime = function() {
			return e.RongIMClient._memoryStore.deltaTime
		}, t.prototype.getUserStatus = function(t, n) {
			n.onSuccess(new e.UserStatus)
		}, t.prototype.setUserStatus = function(e, t) {
			t.onSuccess(!0)
		}, t.prototype.subscribeUserStatus = function(e, t) {
			t.onSuccess(!0)
		}, t.prototype.setOnReceiveStatusListener = function(e) {
			e()
		}, t
	}();
	e.ServerDataProvider = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
				return t.prototype.init = function(e) {
			this.useConsole && console.log("init"), this.addon.initWithAppkey(e), this.addon.registerMessageType("RC:VcMsg", 3), this.addon.registerMessageType("RC:ImgTextMsg", 3), this.addon.registerMessageType("RC:FileMsg", 3), this.addon.registerMessageType("RC:LBSMsg", 3), this.addon.registerMessageType("RC:PSImgTxtMsg", 3), this.addon.registerMessageType("RC:PSMultiImgTxtMsg", 3), this.addon.registerMessageType("RCJrmf:RpMsg", 3), this.addon.registerMessageType("RCJrmf:RpOpendMsg", 1), this.addon.registerMessageType("RC:GrpNtf", 1), this.addon.registerMessageType("RC:DizNtf", 0), this.addon.registerMessageType("RC:InfoNtf", 0), this.addon.registerMessageType("RC:ContactNtf", 0), this.addon.registerMessageType("RC:ProfileNtf", 0), this.addon.registerMessageType("RC:CmdNtf", 0), this.addon.registerMessageType("RC:CmdMsg", 0), this.addon.registerMessageType("RC:TypSts", 0), this.addon.registerMessageType("RC:CsChaR", 0), this.addon.registerMessageType("RC:CsHsR", 0), this.addon.registerMessageType("RC:CsEnd", 0), this.addon.registerMessageType("RC:CsSp", 0), this.addon.registerMessageType("RC:CsUpdate", 0), this.addon.registerMessageType("RC:CsContact", 0), this.addon.registerMessageType("RC:ReadNtf", 0), this.addon.registerMessageType("RC:VCAccept", 0), this.addon.registerMessageType("RC:VCRinging", 0), this.addon.registerMessageType("RC:VCSummary", 0), this.addon.registerMessageType("RC:VCHangup", 0), this.addon.registerMessageType("RC:VCInvite", 0), this.addon.registerMessageType("RC:VCModifyMedia", 0), this.addon.registerMessageType("RC:VCModifyMem", 0), this.addon.registerMessageType("RC:PSCmd", 0), this.addon.registerMessageType("RC:RcCmd", 0), this.addon.registerMessageType("RC:SRSMsg", 0), this.addon.registerMessageType("RC:RRReqMsg", 0), this.addon.registerMessageType("RC:RRRspMsg", 0)
		}, t.prototype.connect = function(e, t, n) {
			this.useConsole && console.log("connect"), this.userId = n, this.connectCallback = t, this.addon.connectWithToken(e, n)
		}, t.prototype.setServerInfo = function(e) {
			"setServerInfo" in this.addon && this.addon.setServerInfo(e.navi)
		}, t.prototype.logout = function() {
			this.useConsole && console.log("logout"), this.disconnect()
		}, t.prototype.disconnect = function() {
			this.useConsole && console.log("disconnect"), this.addon.disconnect(!0)
		}, t.prototype.clearListeners =  t.prototype.setConnectionStatusListener = function(t) {
			var n = this;
			n.connectListener = t, this.useConsole && console.log("setConnectionStatusListener"), n.addon.setConnectionStatusListener(function(o) {
				switch (o) {
					case 10:
						t.onChanged(e.ConnectionStatus.CONNECTING);
						break;
					case 31004:
						n.connectCallback.onTokenIncorrect();
						break;
					case 1:
					case 8:
					case 9:
					case 11:
					case 12:
					case 31011:
					case 3e4:
					case 30002:
					case 30004:
					case 30005:
					case 30006:
					case 30007:
					case 30008:
					case 30009:
						t.onChanged(e.ConnectionStatus.DISCONNECTED);
						break;
					case 0:
					case 33005:
						n.connectCallback.onSuccess(n.userId), t.onChanged(e.ConnectionStatus.CONNECTED);
						break;
					case 6:
						t.onChanged(e.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT)
				}
			})
		}, t.prototype.setOnReceiveMessageListener = function(e) {
			var t = this,
				n = 0;
			t.messageListener = e, this.useConsole && console.log("setOnReceiveMessageListener"), t.addon.setOnReceiveMessageListener(function(o, s) {
				var r = t.buildMessage(o);
				r.offLineMessage = 0 == s && 1 == n || s > 0, n = s, e.onReceived(r, s)
			})
		}, t.prototype.sendTypingStatusMessage = function(t, n, o, s) {
			var r = this;
			this.useConsole && console.log("sendTypingStatusMessage"), o in e.RongIMClient.MessageParams && r.sendMessage(t, n, e.TypingStatusMessage.obtain(e.RongIMClient.MessageParams[o].objectName, ""), {
				onSuccess: function() {
					setTimeout(function() {
						s.onSuccess()
					})
				},
				onError: function(e) {
					setTimeout(function() {
						s.onError(e, null)
					})
				}
			})
		}, t.prototype.sendTextMessage = function(t, n, o, s) {
			var r = e.TextMessage.obtain(o);
			this.useConsole && console.log("sendTextMessage"), this.sendMessage(t, n, r, s)
		}, t.prototype.getRemoteHistoryMessages = function(t, n, o, s, r) {
			try {
				this.useConsole && console.log("getRemoteHistoryMessages"), this.addon.getRemoteHistoryMessages(t, n, o || 0, s, function(e, t) {
					var n = e ? JSON.parse(e)
						.list : [],
						o = [],
						s = this;
					n.reverse();
					for (var i = 0, a = n.length; i < a; i++) o[i] = s.buildMessage(n[i].obj);
					r.onSuccess(o, !!t)
				}, function(e) {
					r.onError(e)
				})
			} catch (t) {
				r.onError(e.ErrorCode.TIMEOUT)
			}
		}, t.prototype.getRemoteConversationList = function(t, n, o, s) {
			try {
				this.useConsole && console.log("getRemoteConversationList");
				var r = n || [1, 2, 3, 4, 5, 6, 7, 8],
					i = this.addon.getConversationList(r),
					a = JSON.parse(i)
					.list,
					c = [],
					u = this,
					g = 0;
				a.reverse(), s = "boolean" == typeof s && s;
				for (var d = 0, p = a.length; d < p; d++) {
					var l = a[d].obj;
					1 == JSON.parse(l)
						.isHidden && s || (c[g] = u.buildConversation(l), g++)
				}
				c.reverse(), t.onSuccess(c)
			} catch (n) {
				t.onError(e.ErrorCode.CONVER_GETLIST_ERROR)
			}
		}, t.prototype.removeConversation = function(t, n, o) {
			try {
				this.useConsole && console.log("removeConversation"), this.addon.removeConversation(t, n), o.onSuccess(!0)
			} catch (t) {
				o.onError(e.ErrorCode.CONVER_REMOVE_ERROR)
			}
		}, t.prototype.joinChatRoom = function(e, t, n) {
			this.useConsole && console.log("joinChatRoom"), this.addon.joinChatRoom(e, t, function() {
				n.onSuccess()
			}, function(e) {
				n.onError(e)
			})
		}, t.prototype.quitChatRoom = function(e, t) {
			this.useConsole && console.log("quitChatRoom"), this.addon.quitChatRoom(e, function() {
				t.onSuccess()
			}, function(e) {
				t.onError(e)
			})
		}, t.prototype.addToBlacklist = function(e, t) {
			this.useConsole && console.log("addToBlacklist"), this.addon.addToBlacklist(e, function() {
				t.onSuccess()
			}, function(e) {
				t.onError(e)
			})
		}, t.prototype.getBlacklist = function(e) {
			this.useConsole && console.log("getBlacklist"), this.addon.getBlacklist(function(t) {
				e.onSuccess(t)
			}, function(t) {
				e.onError(t)
			})
		}, t.prototype.getBlacklistStatus = function(e, t) {
			this.useConsole && console.log("getBlacklistStatus"), this.addon.getBlacklistStatus(e, function(e) {
				t.onSuccess(e)
			}, function(e) {
				t.onError(e)
			})
		}, t.prototype.removeFromBlacklist = function(e, t) {
			this.useConsole && console.log("removeFromBlacklist"), this.addon.removeFromBlacklist(e, function() {
				t.onSuccess()
			}, function(e) {
				t.onError(e)
			})
		}, t.prototype.sendMessage = function(t, n, o, s, r, i, a) {
			var c = this,
				u = [];
			if (c.useConsole && console.log("sendMessage"), (t == e.ConversationType.DISCUSSION || t == e.ConversationType.GROUP) && o.messageName == e.RongIMClient.MessageType.ReadReceiptResponseMessage) {
				var g = o;
				if (g.receiptMessageDic) {
					var d = [];
					for (var p in g.receiptMessageDic) d.push(p);
					u = d
				}
			}
			t != e.ConversationType.DISCUSSION && t != e.ConversationType.GROUP || o.messageName != e.RongIMClient.MessageType.SyncReadStatusMessage || u.push(c.userId);
			var l = c.addon.sendMessage(t, n, e.RongIMClient.MessageParams[o.messageName].objectName, o.encode(), i || "", a || "", function(e) {}, function(e) {
					s.onSuccess(c.buildMessage(e))
				},  u),
				f = JSON.parse(l);
			e.MessageIdHandler.messageId = f.messageId
		}, t.prototype.registerMessageType = function(e, t, n, o) {
			this.useConsole && console.log("registerMessageType"), this.addon.registerMessageType(t, n.getMessageTag())
		}, t.prototype.addMessage = function(t, n, o, s) {
			this.useConsole && console.log("addMessage");
			var r = this.addon.insertMessage(t, n, o.senderUserId, o.objectName, o.content.encode(),  function() {
					s.onError(e.ErrorCode.MSG_INSERT_ERROR)
				}),
				i = this
		}, t.prototype.removeMessage = function(e, t, n, o) {}, t.prototype.removeLocalMessage = function(t, n, o, s) {
			try {
				this.useConsole && console.log("removeLocalMessage"), this.addon.deleteMessages(o), s.onSuccess(!0)
			} catch (t) {
				s.onError(e.ErrorCode.MSG_DEL_ERROR)
			}
		}, t.prototype.getMessage = function(t, n) {
			try {
				this.useConsole && console.log("getMessage");
				var o = this.addon.getMessage(t);
				n.onSuccess(o)
			} catch (t) {
				n.onError(e.ErrorCode.GET_MESSAGE_BY_ID_ERROR)
			}
		}, t.prototype.clearMessages = function(t, n, o) {
			try {
				this.useConsole && console.log("clearMessages"), this.addon.clearMessages(t, n), o.onSuccess(!0)
			} catch (t) {
				o.onError(e.ErrorCode.CONVER_GET_ERROR)
			}
		}, t.prototype.getConversation = function(t, n, o) {
			try {
				this.useConsole && console.log("getConversation");
				var s = this.addon.getConversation(t, n);
				o.onSuccess(this.buildConversation(s))
			} catch (t) {
				o.onError(e.ErrorCode.CONVER_GET_ERROR)
			}
		}, t.prototype.getConversationList = function(e, t, n, o) {
			this.useConsole && console.log("getConversationList"), this.getRemoteConversationList(e, t, n, o)
		}, t.prototype.clearConversations = function(t, n) {
			try {
				this.useConsole && console.log("clearConversations"), this.addon.clearConversations(), n.onSuccess(!0)
			} catch (t) {
				n.onError(e.ErrorCode.CONVER_CLEAR_ERROR)
			}
		}, t.prototype.getHistoryMessages = function(t, n, o, s, r, i) {
			if (this.useConsole && console.log("getHistoryMessages"), s <= 0) r.onError(e.ErrorCode.TIMEOUT);
			else {
				i = i || "";
				try {
					var a = this.addon.getHistoryMessages(t, n, o || 0, s, i),
						c = a ? JSON.parse(a)
						.list : [],
						u = [],
						g = this;
					c.reverse();
					for (var d = 0, p = c.length; d < p; d++) u[d] = g.buildMessage(c[d].obj);
					r.onSuccess(u, p == s)
				} catch (t) {
					r.onError(e.ErrorCode.TIMEOUT)
				}
			}
		}, t.prototype.getTotalUnreadCount = function(t, n) {
			try {
				var o;
				this.useConsole && console.log("getTotalUnreadCount"), o = n ? this.addon.getTotalUnreadCount(n) : this.addon.getTotalUnreadCount(), t.onSuccess(o)
			} catch (n) {
				t.onError(e.ErrorCode.CONVER_TOTAL_UNREAD_ERROR)
			}
		}, t.prototype.getConversationUnreadCount = function(e, t) {
			this.useConsole && console.log("getConversationUnreadCount"), this.getTotalUnreadCount(t, e)
		}, t.prototype.getUnreadCount = function(t, n, o) {
			try {
				this.useConsole && console.log("getUnreadCount");
				var s = this.addon.getUnreadCount(t, n);
				o.onSuccess(s)
			} catch (t) {
				o.onError(e.ErrorCode.CONVER_TYPE_UNREAD_ERROR)
			}
		}, t.prototype.clearUnreadCount = function(t, n, o) {
			try {
				this.useConsole && console.log("clearUnreadCount");
				this.addon.clearUnreadCount(t, n);
				o.onSuccess(!0)
			} catch (t) {
				o.onError(e.ErrorCode.CONVER_CLEAR_ERROR)
			}
		}, t.prototype.clearUnreadCountByTimestamp = function(t, n, o, s) {
			try {
				this.useConsole && console.log("clearUnreadCountByTimestamp");
				this.addon.clearUnreadCountByTimestamp(t, n, o);
				s.onSuccess(!0)
			} catch (t) {
				s.onError(e.ErrorCode.CONVER_CLEAR_ERROR)
			}
		}, t.prototype.setConversationToTop = function(t, n, o, s) {
			try {
				this.useConsole && console.log("setConversationToTop"), this.addon.setConversationToTop(t, n, o), s.onSuccess(!0)
			} catch (t) {
				s.onError(e.ErrorCode.CONVER_SETOP_ERROR)
			}
		}, t.prototype.setConversationHidden =  t.prototype.setMessageReceivedStatus = function(t, n, o) {
			try {
				this.useConsole && console.log("setMessageReceivedStatus"), this.addon.setMessageReceivedStatus(t, n), o.onSuccess(!0)
			} catch (t) {
				o.onError(e.ErrorCode.TIMEOUT)
			}
		}, t.prototype.setMessageSentStatus = function(t, n, o) {
			try {
				this.useConsole && console.log("setMessageSentStatus"), this.addon.setMessageSentStatus(t, n), o.onSuccess(!0)
			} catch (t) {
				o.onError(e.ErrorCode.TIMEOUT)
			}
		}, t.prototype.getFileToken = function(e, t) {
			this.useConsole && console.log("getFileToken"), this.addon.getUploadToken(e, function(e) {
				t.onSuccess({
					token: e
				})
			}, function(e) {
				t.onError(e)
			})
		}, t.prototype.getFileUrl = function(e, t, n, o) {
			this.useConsole && console.log("getFileUrl"), this.addon.getDownloadUrl(e, t, n,  function(e) {
				o.onError(e)
			})
		}, t.prototype.searchConversationByContent = function(t, n, o) {
			var s = [];
			s = void 0 === o ? [1, 2, 3, 4, 5, 6, 7] : o;
			try {
				this.useConsole && console.log("searchConversationByContent");
				var r = this.addon.searchConversationByContent(s, t),
					i = JSON.parse(r)
					.list,
					a = [],
					c = this;
				i.reverse();
				for (var u = 0, g = i.length; u < g; u++) a[u] = c.buildConversation(i[u].obj);
				n.onSuccess(a)
			} catch (t) {
				n.onError(e.ErrorCode.CONVER_GETLIST_ERROR)
			}
		}, t.prototype.searchMessageByContent = function(t, n, o, s, r, i, a) {
			var c = this;
			try {
				this.useConsole && console.log("searchMessageByContent"), this.addon.searchMessageByContent(t, n, o, s, r, i, function(e, t) {
					var n = e ? JSON.parse(e)
						.list : [],
						o = [];
					n.reverse();
					for (var s = 0, r = n.length; s < r; s++) o[s] = c.buildMessage(n[s].obj);
					a.onSuccess(o, t)
				})
			} catch (t) {
				a.onError(e.ErrorCode.TIMEOUT)
			}
		}, t.prototype.getChatRoomInfo = function(e, t, n, o) {
			this.useConsole && console.log("getChatRoomInfo"), this.addon.getChatroomInfo(e, t, n, function(e, t) {
				var n = e ? JSON.parse(e)
					.list : [],
					s = {
						userInfos: [],
						userTotalNums: t
					};
				if (n.length > 0)
					for (var r = 0, i = n.length; r < i; r++) s.userInfos.push(JSON.parse(n[r].obj));
				o.onSuccess(s)
			}, function(e) {
				o.onError(e)
			})
		}, t.prototype.setChatroomHisMessageTimestamp = function(e, t) {}, t.prototype.getChatRoomHistoryMessages =  t.prototype.getDelaTime = function() {
			return this.addon.getDeltaTime()
		}, t.prototype.getUserStatus = function(e, t) {
			var n = this;
			this.addon.getUserStatus(e,  function(e) {
				t.onError(e)
			})
		}, t.prototype.setUserStatus = function(e, t) {
			this.addon.setUserStatus(e, function() {
				t.onSuccess(!0)
			}, function(e) {
				t.onError(e)
			})
		}, t.prototype.subscribeUserStatus = function(e, t) {
			this.addon.subscribeUserStatus(e, function() {
				t.onSuccess(!0)
			}, function(e) {
				t.onError(e)
			})
		}, t.prototype.setOnReceiveStatusListener = function(e) {
			var t = this;
			this.addon.setOnReceiveStatusListener(
		}, t.prototype.getUnreadMentionedMessages = function(e, t) {
			for (var n = this, o = JSON.parse(n.addon.getUnreadMentionedMessages(e, t))
				.list, s = 0, r = o.length; s < r; s++) {
				var i = JSON.parse(o[s].obj);
				i.content = JSON.parse(i.content), o[s] = i
			}
			return o
		}, t.prototype.hasRemoteUnreadMessages = function(e, t) {
			t.onSuccess(!1)
		}, t.prototype.sendRecallMessage = function(e, t) {}, t.prototype.updateMessage = function(e, t) {}, t.prototype.updateMessages =  t.prototype.reconnect = function(e) {}, t.prototype.sendReceiptResponse = function(e, t, n) {}, t.prototype.setMessageExtra = function(e, t, n) {}, t.prototype.addMemberToDiscussion = function(e, t, n) {}, t.prototype.createDiscussion = function(e, t, n) {}, t.prototype.getDiscussion = function(e, t) {}, t.prototype.quitDiscussion = function(e, t) {}, t.prototype.removeMemberFromDiscussion = function(e, t, n) {}, t.prototype.setDiscussionInviteStatus = function(e, t, n) {}, t.prototype.setDiscussionName = function(e, t, n) {}, t.prototype.joinGroup = function(e, t, n) {}, t.prototype.quitGroup = function(e, t) {}, t.prototype.syncGroup = function(e, t) {}, t.prototype.addConversation = function(e, t) {}, t.prototype.updateConversation =  t.prototype.buildUserStatus = function(t) {
			var n = new e.UserStatus,
				o = JSON.parse(t);
			return o.us && o.us[0] && (n.platform = o.us[0].p, n.online = !!o.us[0].o, n.status = o.us[0].s), n
		}, t.prototype.buildMessage = function(t) {
			var n = new e.Message,
				o = JSON.parse(t);
			return n.conversationType = o.conversationType, n.targetId = o.targetId, n.messageDirection = o.direction, n.senderUserId = o.senderUserId, o.direction == e.MessageDirection.RECEIVE ? n.receivedStatus = o.status : o.direction == e.MessageDirection.SEND && (n.sentStatus = o.status), n.sentTime = o.sentTime, n.objectName = o.objectName, n.content = o.content ? JSON.parse(o.content) : o.content, n.messageId = o.messageId, n.messageUId = o.messageUid, n.messageType = typeMapping[o.objectName], n
		}, t.prototype.buildConversation = function(t) {
			var n = new e.Conversation,
				o = JSON.parse(t),
				s = o.lastestMsg ? this.buildMessage(o.lastestMsg) : {};
			return n.conversationTitle = o.title, n.conversationType = o.conversationType, n.draft = o.draft, n.isTop = o.isTop, n.isHidden = o.isHidden, s.conversationType = o.conversationType, s.targetId = o.targetId, n.latestMessage = s, n.latestMessageId = s.messageId, n.latestMessage.messageType = typeMapping[s.objectName], n.objectName = s.objectName, n.receivedStatus = e.ReceivedStatus.READ, n.sentTime = s.sentTime, n.senderUserId = s.senderUserId, n.sentStatus = s.status, n.targetId = o.targetId, n.unreadMessageCount = o.unreadCount, n.hasUnreadMention = o.m_hasUnreadMention, s.content && s.content.mentionedInfo && (n.mentionedMsg = {
				uid: s.messageUId,
				time: s.sentTime,
				mentionedInfo: s.content.mentionedInfo
			}), n
		}, t
	}();
	e.VCDataProvider = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function e() {}
		return e.prototype.init = function(e) {
			var t = this,
				n = !1;
			if (t.userId = e, t.db = openDatabase("RongIMLibDB", "1.0", "RongIMLibDB", 10485760), t.db) {
				n = !0;
				var o = "create table if not exists t_conversation_" + e + " (conversationType,targetId,content,sentTime,isTop)",
					s = "create table if not exists t_message_" + e + " (id integer not null primary key autoincrement,messageType,messageUId,conversationType,targetId,sentTime,content,localMsg)";
				t.execUpdate(o), t.execUpdate(s)
			}
			return n
		}, e.prototype.execSearchByParams = function(e, t, n) {
			this.db.transaction(function(o) {
				o.executeSql(e, t, function(e, t) {
					n(t.rows, t.rowsAffected)
				}, function(e, t) {
					throw new Error("{errorCode:" + t.code + ",content:" + t.message + "}")
				})
			})
		}, e.prototype.execSearch = function(e, t) {
			this.db.transaction(function(n) {
				n.executeSql(e, [],  function(e, t) {
					throw new Error("{errorCode:" + t.code + ",content:" + t.message + "}")
				})
			})
		}, e.prototype.execUpdateByParams = function(e, t) {
			this.db.transaction(function(n) {
				n.executeSql(e, t)
			}, function(e, t) {
				throw new Error("{errorCode:" + e.code + ",content:" + e.message + "}")
			})
		}, e.prototype.execUpdate = function(e) {
			this.db.transaction(function(t) {
				t.executeSql(e)
			}, function(e, t) {
				throw new Error("{errorCode:" + e.code + ",content:" + e.message + "}")
			})
		}, e
	}();
	e.DBUtil = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
				return t.prototype.init = function(e) {}, t.prototype.connect = function(t, n) {
			if (e.RongIMClient.bridge = e.Bridge.getInstance(), e.RongIMClient._memoryStore.token = t, e.RongIMClient._memoryStore.callback = n, !e.Bridge._client || !e.Bridge._client.channel || e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTED || e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTING) {
				e.RongIMClient.bridge.connect(e.RongIMClient._memoryStore.appKey, t, {
					onSuccess: function(e) {
						setTimeout(function() {
							n.onSuccess(e)
						})
					},
					onError: function(t) {
						t != e.ConnectionState.TOKEN_INCORRECT && t ? setTimeout(function() {
							n.onError(t)
						}) : setTimeout(function() {
							n.onTokenIncorrect()
						})
					}
				});
				for (var o = 0, s = e.RongIMClient._memoryStore.listenerList.length; o < s; o++) e.RongIMClient.bridge.setListener(e.RongIMClient._memoryStore.listenerList[o]);
				e.RongIMClient._memoryStore.listenerList.length = 0
			}
		}, t.prototype.reconnect = function(t) {
			e.Bridge._client && e.Bridge._client.channel && e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTED && e.Bridge._client.channel.connectionStatus != e.ConnectionStatus.CONNECTING && e.RongIMClient.bridge.reconnect(t)
		}, t.prototype.logout = function() {
			e.RongIMClient.bridge.disconnect(), e.RongIMClient.bridge = null
		}, t.prototype.disconnect =  t.prototype.sendReceiptResponse = function(t, n, o) {
			var s = e.Bridge._client.userId + t + n + "RECEIVED",
				r = this;
			if (e.MessageUtil.supportLargeStorage()) {
				var i = JSON.parse(e.RongIMClient._storageProvider.getItem(s));
				if (i) {
					var a = [];
					for (var c in i) {
						var u = {};
						u[c] = i[c].uIds, i[c].isResponse || a.push(u)
					}
					if (0 == a.length) return void o.onSuccess();
					var g = setInterval(function() {
						1 == a.length && clearInterval(g);
						var c = a.splice(0, 1)[0],
							u = new e.ReadReceiptResponseMessage({
								receiptMessageDic: c
							});
						r.sendMessage(t, n, u, {
							onSuccess: function(t) {
								var n = e.MessageUtil.getFirstKey(c);
								i[n].isResponse = !0, e.RongIMClient._storageProvider.setItem(s, JSON.stringify(i)), o.onSuccess(t)
							},
							onError: 						})
					}, 200)
				} else o.onSuccess()
			} else o.onSuccess()
		}, t.prototype.sendTypingStatusMessage = function(t, n, o, s) {
			var r = this;
			o in e.RongIMClient.MessageParams && r.sendMessage(t, n, e.TypingStatusMessage.obtain(e.RongIMClient.MessageParams[o].objectName, ""), {
				onSuccess: function() {
					setTimeout(function() {
						s.onSuccess()
					})
				},
				onError: function(e) {
					setTimeout(
				}
			})
		}, t.prototype.sendTextMessage = function(t, n, o, s) {
			var r = e.TextMessage.obtain(o);
			this.sendMessage(t, n, r, s)
		}, t.prototype.sendRecallMessage = function(t, n, o) {
			var s = new e.RecallCommandMessage({
				conversationType: t.conversationType,
				targetId: t.targetId,
				sentTime: t.sentTime,
				messageUId: t.messageUId,
				extra: t.extra,
				user: t.user
			});
			this.sendMessage(t.conversationType, t.targetId, s, n, !1, null, null, 2)
		}, t.prototype.getRemoteHistoryMessages = function(t, n, o, s, r) {
			var i = new Modules.HistoryMessageInput;
			i.setTargetId(n), 0 === o || o > 0 ? i.setDataTime(o) : i.setDataTime(e.RongIMClient._memoryStore.lastReadTime.get(t + n)), i.setSize(s), e.RongIMClient.bridge.queryMsg(HistoryMsgType[t], e.MessageUtil.ArrayForm(i.toArrayBuffer()), n, {
				onSuccess: function(o) {
					e.RongIMClient._memoryStore.lastReadTime.set(t + n, e.MessageUtil.int64ToTimestamp(o.syncTime));
					var s, i = o.list.reverse(),
						a = null;
					if (e.MessageUtil.supportLargeStorage())
						for (var c = 0, u = i.length; c < u; c++) a = e.MessageUtil.messageParser(i[c]), (s = JSON.parse(e.RongIMClient._storageProvider.getItem(e.Bridge._client.userId + a.messageUId + "SENT"))) && (a.receiptResponse || (a.receiptResponse = {}), a.receiptResponse[a.messageUId] = s.count), i[c] = a;
					else
						for (var c = 0, u = i.length; c < u; c++) i[c] = e.MessageUtil.messageParser(i[c]);
					setTimeout(function() {
						r.onSuccess(i, !!o.hasMsg)
					})
				},
				onError: function(t) {
					setTimeout(function() {
						t === e.ErrorCode.TIMEOUT ? r.onError(t) : r.onSuccess([], !1)
					})
				}
			}, "HistoryMessagesOuput")
		}, t.prototype.hasRemoteUnreadMessages = function(t, n) {
			var o = null;
			window.RCCallback = function(e) {
					setTimeout(function() {
						n.onSuccess(!!+e.status)
					}), o.parentNode.removeChild(o)
				}, (o = document.createElement("script"))
				.src = e.RongIMClient._memoryStore.depend.api + "/message/exist.js?appKey=" + encodeURIComponent(e.RongIMClient._memoryStore.appKey) + "&token=" + encodeURIComponent(t) + "&callBack=RCCallback&_=" + Date.now(), document.body.appendChild(o), o.onerror = function() {
					setTimeout(function() {
						n.onError(e.ErrorCode.UNKNOWN)
					}), o.parentNode.removeChild(o)
				}
		}, t.prototype.getRemoteConversationList = function(t, n, o) {
			var s = new Modules.RelationsInput;
			s.setType(1), void 0 === o ? s.setCount(0) : s.setCount(o), e.RongIMClient.bridge.queryMsg(26, e.MessageUtil.ArrayForm(s.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(o) {
					if (e.RongIMClient._memoryStore.conversationList.length = 0, o.info) {
						o.info = o.info.reverse();
						for (var s = 0, r = o.info.length; s < r; s++) e.RongIMClient.getInstance()
							.pottingConversation(o.info[s])
					}
					if (n) {
						var i = [];
						Array.forEach(n, function(t) {
							Array.forEach(e.RongIMClient._memoryStore.conversationList, 
						}), t.onSuccess(i)
					} else t.onSuccess(e.RongIMClient._memoryStore.conversationList)
				},
				onError: function(n) {
					n === e.ErrorCode.TIMEOUT ? t.onError(n) : t.onSuccess([])
				}
			}, "RelationsOutput")
		}, t.prototype.addMemberToDiscussion = function(t, n, o) {
			var s = new Modules.ChannelInvitationInput;
			s.setUsers(n), e.RongIMClient.bridge.queryMsg(0, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						o.onSuccess()
					})
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.JOIN_IN_DISCUSSION)
					})
				}
			})
		}, t.prototype.createDiscussion = function(t, n, o) {
			var s = new Modules.CreateDiscussionInput,
				r = this;
			s.setName(t), e.RongIMClient.bridge.queryMsg(1, e.MessageUtil.ArrayForm(s.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(e) {
					n.length > 0 && r.addMemberToDiscussion(e, n, {
						onSuccess: function() {},
						onError: function(e) {
							setTimeout(function() {
								o.onError(e)
							})
						}
					}), setTimeout(function() {
						o.onSuccess(e)
					})
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.CREATE_DISCUSSION)
					})
				}
			}, "CreateDiscussionOutput")
		}, t.prototype.getDiscussion = function(t, n) {
			var o = new Modules.ChannelInfoInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(4, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function(e) {
					setTimeout(function() {
						n.onSuccess(e)
					})
				},
				onError: function(e) {
					setTimeout(function() {
						n.onError(e)
					})
				}
			}, "ChannelInfoOutput")
		}, t.prototype.quitDiscussion = function(t, n) {
			var o = new Modules.LeaveChannelInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(7, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, n)
		}, t.prototype.removeMemberFromDiscussion = function(t, n, o) {
			var s = new Modules.ChannelEvictionInput;
			s.setUser(n), e.RongIMClient.bridge.queryMsg(9, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, o)
		}, t.prototype.setDiscussionInviteStatus = function(t, n, o) {
			var s = new Modules.ModifyPermissionInput;
			s.setOpenStatus(n.valueOf()), e.RongIMClient.bridge.queryMsg(11, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: 
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.INVITE_DICUSSION)
					})
				}
			})
		}, t.prototype.setDiscussionName = function(t, n, o) {
			var s = new Modules.RenameChannelInput;
			s.setName(n), e.RongIMClient.bridge.queryMsg(12, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						o.onSuccess()
					})
				},
				onError: function(e) {
					o.onError(e)
				}
			})
		}, t.prototype.joinGroup = function(t, n, o) {
			var s = new Modules.GroupInfo;
			s.setId(t), s.setName(n);
			var r = new Modules.GroupInput;
			r.setGroupInfo([s]), e.RongIMClient.bridge.queryMsg(6, e.MessageUtil.ArrayForm(r.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						o.onSuccess()
					})
				},
				onError: function(e) {
					o.onError(e)
				}
			}, "GroupOutput")
		}, t.prototype.quitGroup = function(t, n) {
			var o = new Modules.LeaveChannelInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(8, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function() {
					setTimeout(function() {
						n.onSuccess()
					})
				},
				onError: function(e) {
					n.onError(e)
				}
			})
		}, t.prototype.syncGroup = function(t, n) {
			for (var o = 0, s = [], r = [], i = t.length; o < i; o++)
				if (0 === s.length || !(t[o].id in s)) {
					s.push(t[o].id);
					var a = new Modules.GroupInfo;
					a.setId(t[o].id), a.setName(t[o].name), r.push(a)
				} var c = new Modules.GroupHashInput;
			c.setUserId(e.Bridge._client.userId), c.setGroupHashCode(md5(s.sort()
				.join(""))), e.RongIMClient.bridge.queryMsg(13, e.MessageUtil.ArrayForm(c.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(t) {
					if (1 === t) {
						var o = new Modules.GroupInput;
						o.setGroupInfo(r), e.RongIMClient.bridge.queryMsg(20, e.MessageUtil.ArrayForm(o.toArrayBuffer()), e.Bridge._client.userId, {
							onSuccess: function() {
								setTimeout(function() {
									n.onSuccess()
								})
							},
							onError: function() {
								setTimeout(function() {
									n.onError(e.ErrorCode.GROUP_MATCH_ERROR)
								})
							}
						}, "GroupOutput")
					} else setTimeout(function() {
						n.onSuccess()
					})
				},
				onError: function() {
					setTimeout(function() {
						n.onError(e.ErrorCode.GROUP_SYNC_ERROR)
					})
				}
			}, "GroupHashOutput")
		}, t.prototype.joinChatRoom = function(t, n, o) {
			var s = new Modules.ChrmInput;
			s.setNothing(1), e.Bridge._client.chatroomId = t, e.RongIMClient.bridge.queryMsg(19, e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, {
				onSuccess: function() {
					o.onSuccess();
					var s = new Modules.ChrmPullMsg;
					0 == n && (n = -1), s.setCount(n), s.setSyncTime(0), e.Bridge._client.queryMessage("chrmPull", e.MessageUtil.ArrayForm(s.toArrayBuffer()), t, 1, {
						onSuccess: function(n) {
							var o = e.MessageUtil.int64ToTimestamp(n.syncTime);
							e.RongIMClient._storageProvider.setItem(t + e.Bridge._client.userId + "CST", o);
							var s = n.list;
							if (e.RongIMClient._memoryStore.filterMessages.length > 0)
								for (var r = 0, i = s.length; r < i; r++)
									for (var a = 0, c = e.RongIMClient._memoryStore.filterMessages.length; a < c; a++) e.RongIMClient.MessageParams[e.RongIMClient._memoryStore.filterMessages[a]].objectName != s[r].classname && e.Bridge._client.handler.onReceived(s[r]);
							else
								for (var r = 0, u = s.length; r < u; r++) e.Bridge._client.handler.onReceived(s[r])
						},
						onError: function(t) {
							setTimeout(function() {
								o.onError(e.ErrorCode.CHATROOM_HISMESSAGE_ERROR)
							})
						}
					}, "DownStreamMessages")
				},
				onError: function() {
					setTimeout(function() {
						o.onError(e.ErrorCode.CHARTOOM_JOIN_ERROR)
					})
				}
			}, "ChrmOutput")
		}, t.prototype.getChatRoomInfo = function(t, n, o, s) {
			var r = new Modules.QueryChatroomInfoInput;
			r.setCount(n), r.setOrder(o), e.RongIMClient.bridge.queryMsg("queryChrmI", e.MessageUtil.ArrayForm(r.toArrayBuffer()), t, {
				onSuccess: function(e) {
					setTimeout(function() {
						s.onSuccess(e)
					})
				},
				onError: function(e) {
					s.onError(e)
				}
			}, "QueryChatroomInfoOutput")
		}, t.prototype.quitChatRoom = function(t, n) {
			var o = new Modules.ChrmInput;
			o.setNothing(1), e.RongIMClient.bridge.queryMsg(17, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: 
				onError: function(e) {
					n.onError(e)
				}
			}, "ChrmOutput")
		}, t.prototype.setChatroomHisMessageTimestamp = function(t, n) {
			e.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + t, n)
		}, t.prototype.getChatRoomHistoryMessages = function(t, n, o, s) {
			var r = new Modules.HistoryMsgInput;
			r.setTargetId(t);
			var i = e.RongIMClient._memoryStore.lastReadTime.get("chrhis_" + t) || 0;
			r.setTime(i), r.setCount(n), r.setOrder(o), e.RongIMClient.bridge.queryMsg(34, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, {
				onSuccess: function(n) {
					e.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + t, e.MessageUtil.int64ToTimestamp(n.syncTime));
					for (var o = n.list.reverse(), r = 0, i = o.length; r < i; r++) o[r] = e.MessageUtil.messageParser(o[r]);
					setTimeout(function() {
						s.onSuccess(o, !!n.hasMsg)
					})
				},
				onError: function(t) {
					setTimeout(function() {
						t === e.ErrorCode.TIMEOUT ? s.onError(t) : s.onSuccess([], !1)
					})
				}
			}, "HistoryMsgOuput")
		}, t.prototype.addToBlacklist = function(t, n) {
			var o = new Modules.Add2BlackListInput;
			o.setUserId(t), e.RongIMClient.bridge.queryMsg(21, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function() {
					n.onSuccess()
				},
				onError: function() {
					n.onError(e.ErrorCode.BLACK_ADD_ERROR)
				}
			})
		}, t.prototype.getBlacklist = function(t) {
			var n = new Modules.QueryBlackListInput;
			n.setNothing(1), e.RongIMClient.bridge.queryMsg(23, e.MessageUtil.ArrayForm(n.toArrayBuffer()), e.Bridge._client.userId, t, "QueryBlackListOutput")
		}, t.prototype.getBlacklistStatus = function(t, n) {
			var o = new Modules.BlackListStatusInput;
			o.setUserId(t), e.RongIMClient.bridge.queryMsg(24, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function(t) {
					setTimeout(function() {
						n.onSuccess(e.BlacklistStatus[t])
					})
				},
				onError: function() {
					setTimeout(function() {
						n.onError(e.ErrorCode.BLACK_GETSTATUS_ERROR)
					})
				}
			})
		}, t.prototype.removeFromBlacklist = function(t, n) {
			var o = new Modules.RemoveFromBlackListInput;
			o.setUserId(t), e.RongIMClient.bridge.queryMsg(22, e.MessageUtil.ArrayForm(o.toArrayBuffer()), t, {
				onSuccess: function() {
					n.onSuccess()
				},
				onError: function() {
					n.onError(e.ErrorCode.BLACK_REMOVE_ERROR)
				}
			})
		}, t.prototype.getFileToken = function(t, n) {
			if (/(1|2|3|4)/.test(t.toString())) {
				var o = new Modules.GetQNupTokenInput;
				o.setType(t), e.RongIMClient.bridge.queryMsg(30, e.MessageUtil.ArrayForm(o.toArrayBuffer()), e.Bridge._client.userId, {
					onSuccess: function(e) {
						setTimeout(function() {
							n.onSuccess(e)
						})
					},
					onError: function(e) {
						n.onError(e)
					}
				}, "GetQNupTokenOutput")
			} else n.onError(e.ErrorCode.QNTKN_FILETYPE_ERROR)
		}, t.prototype.getFileUrl = function(t, n, o, s) {
			if (/(1|2|3|4)/.test(t.toString())) {
				var r = new Modules.GetQNdownloadUrlInput;
				r.setType(t), r.setKey(n), o && r.setFileName(o), e.RongIMClient.bridge.queryMsg(31, e.MessageUtil.ArrayForm(r.toArrayBuffer()), e.Bridge._client.userId, {
					onSuccess: 
					onError: function(e) {
						s.onError(e)
					}
				}, "GetQNdownloadUrlOutput")
			} else setTimeout(function() {
				s.onError(e.ErrorCode.QNTKN_FILETYPE_ERROR)
			})
		}, t.prototype.sendMessage = function(t, n, o, s, r, i, a, c) {
			if (e.Bridge._client.channel) {
				if (!e.Bridge._client.channel.socket.socket.connected) throw s.onError(e.ErrorCode.TIMEOUT, null), new Error("connect is timeout! postion:sendMessage");
				var u = new Modules.UpStreamMessage;
				if (!r || t != e.ConversationType.DISCUSSION && t != e.ConversationType.GROUP ? u.setSessionId(e.RongIMClient.MessageParams[o.messageName].msgTag.getMessageTag()) : u.setSessionId(7), i && u.setPushText(i), a && u.setAppData(a), (t == e.ConversationType.DISCUSSION || t == e.ConversationType.GROUP) && o.messageName == e.RongIMClient.MessageType.ReadReceiptResponseMessage) {
					var g = o;
					if (g.receiptMessageDic) {
						var d = [];
						for (var p in g.receiptMessageDic) d.push(p);
						u.setUserId(d)
					}
				}
				t != e.ConversationType.DISCUSSION && t != e.ConversationType.GROUP || o.messageName != e.RongIMClient.MessageType.SyncReadStatusMessage || u.setUserId(e.Bridge._client.userId), u.setClassname(e.RongIMClient.MessageParams[o.messageName].objectName), u.setContent(o.encode());
				var l = u.toArrayBuffer();
				"[object ArrayBuffer]" == Object.prototype.toString.call(l) && (l = [].slice.call(new Int8Array(l)));
				var f = null,
					m = new e.Message;
				this.getConversation(t, n, {
						onSuccess: function(s) {
							f = s, 3 == e.RongIMClient.MessageParams[o.messageName].msgTag.getMessageTag() && (f || (f = e.RongIMClient.getInstance()
									.createConversation(t, n, "")), f.sentTime = (new Date)
								.getTime(), f.sentStatus = e.SentStatus.SENDING, f.senderUserName = "", f.senderUserId = e.Bridge._client.userId, f.notificationStatus = e.ConversationNotificationStatus.DO_NOT_DISTURB, f.latestMessage = m, f.unreadMessageCount = 0, e.RongIMClient._dataAccessProvider.addConversation(f, {
									onSuccess: function(e) {}
								})), e.RongIMClient._memoryStore.converStore = f
						}
					}), m.content = o, m.conversationType = t, m.senderUserId = e.Bridge._client.userId, m.objectName = e.RongIMClient.MessageParams[o.messageName].objectName, m.targetId = n, m.sentTime = (new Date)
					.getTime(), m.messageDirection = e.MessageDirection.SEND, m.sentStatus = e.SentStatus.SENT, m.messageType = o.messageName, e.RongIMClient.bridge.pubMsg(t.valueOf(), l, n, {
						onSuccess: function(r) {
							if (r && r.timestamp && e.RongIMClient._storageProvider.setItem("converST_" + e.Bridge._client.userId + t + n, r.timestamp), (t == e.ConversationType.DISCUSSION || t == e.ConversationType.GROUP) && o.messageName == e.RongIMClient.MessageType.ReadReceiptRequestMessage) {
								var i = m.content,
									a = e.Bridge._client.userId + i.messageUId + "SENT";
								e.RongIMClient._storageProvider.setItem(a, JSON.stringify({
									count: 0,
									dealtime: r.timestamp,
									userIds: {}
								}))
							}
							3 == e.RongIMClient.MessageParams[m.messageType].msgTag.getMessageTag() && (e.RongIMClient._memoryStore.converStore.latestMessage = m, e.RongIMClient._dataAccessProvider.addMessage(t, n, m, {
								onSuccess: function(t) {
									(m = t)
									.messageUId = r.messageUId, m.sentTime = r.timestamp, m.sentStatus = e.SentStatus.SENT, m.messageId = r.messageId, e.RongIMClient._dataAccessProvider.updateMessage(m)
								},
								onError: function() {}
							})), setTimeout(
						},
						onError: function(o) {
							m.sentStatus = e.SentStatus.FAILED, 3 == e.RongIMClient.MessageParams[m.messageType].msgTag.getMessageTag() && (e.RongIMClient._memoryStore.converStore.latestMessage = m), e.RongIMClient._dataAccessProvider.addMessage(t, n, m, {
								onSuccess: function(t) {
									m.messageId = t.messageId, e.RongIMClient._dataAccessProvider.updateMessage(m)
								},
								onError: function() {}
							}), setTimeout(
						}
					}, null, c)
			} else s.onError(e.ErrorCode.RC_NET_UNAVAILABLE, null)
		}, t.prototype.setConnectionStatusListener = function(t) {
			e.RongIMClient.bridge ? e.RongIMClient.bridge.setListener(t) : e.RongIMClient._memoryStore.listenerList.push(t)
		}, t.prototype.setOnReceiveMessageListener = function(t) {
			e.RongIMClient.bridge ? e.RongIMClient.bridge.setListener(t) : e.RongIMClient._memoryStore.listenerList.push(t)
		}, t.prototype.registerMessageType = function(t, n, o, s) {
			if (!t) throw new Error("messageType can't be empty,postion -> registerMessageType");
			if (!n) throw new Error("objectName can't be empty,postion -> registerMessageType");
			if ("[object Array]" == Object.prototype.toString.call(s)) {
				var r = e.ModelUtil.modleCreate(s, t);
				e.RongIMClient.RegisterMessage[t] = r
			} else {
				if ("[object Function]" != Object.prototype.toString.call(s) && "[object Object]" != Object.prototype.toString.call(s)) throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");
				if (!s.encode) throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");
				if (!s.decode) throw new Error("decode method has not realized -> registerMessageType")
			}
			registerMessageTypeMapping[n] = t
		}, t.prototype.updateConversation = function(e) {
			var t = "update t_conversation_" + this.database.userId + " set content = ?,sentTime = ?,istop = ? where conversationType = ? and targetId = ?";
			return this.database.execUpdateByParams(t, [JSON.stringify(e), e.sentTime, e.isTop, e.conversationType, e.targetId]), e
		}, t.prototype.addConversation = function(e, t) {
			var n = this,
				o = "select * from t_conversation_" + n.database.userId + " t where t.conversationType = ? and t.targetId = ?";
			n.database.execSearchByParams(o, [Number(e.conversationType), e.targetId], function(o, s) {
				if (o.length > 0 && s) n.updateConversation(e);
				else {
					var r = "insert into t_conversation_" + n.database.userId + "(conversationType,targetId,content,sentTime,isTop) values(?,?,?,?,?)";
					n.database.execUpdateByParams(r, [e.conversationType, e.targetId, JSON.stringify(e), e.sentTime, e.isTop])
				}
				t.onSuccess(!0)
			})
		}, t.prototype.removeConversation = function(e, t, n) {
			var o = "delete from t_conversation_" + this.database.userId + "  where conversationType = ? and targetId = ?";
			this.database.execUpdateByParams(o, [e, t]), n.onSuccess(!0)
		}, t.prototype.getConversation = function(e, t, n) {
			var o = "select t.content from t_conversation_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ?";
			this.database.execSearchByParams(o, [Number(e), t], function(e, t) {
				var o;
				e.length > 0 && t && (o = JSON.parse(e[0].content)), n.onSuccess(o)
			})
		}, t.prototype.getConversationList = function(t, n, o, s) {
			e.RongIMClient._memoryStore.isSyncRemoteConverList && e.RongIMClient.getInstance()
				.getRemoteConversationList({
					onSuccess: function(t) {
						e.RongIMClient._memoryStore.conversationList = t;
						for (var n = 0, o = t.length; n < o; n++) a.addConversation(t[n], {
							onSuccess: function() {},
							onError: function() {}
						});
						e.RongIMClient._memoryStore.isSyncRemoteConverList = !1
					},
					onError: function(e) {
						t.onError(e)
					}
				}, n, o, s);
			var r = "select * from t_conversation_" + this.database.userId + " t where t.isTop = 1 ",
				i = "select * from t_conversation_" + this.database.userId + " c where c.isTop != 1 order by c.sentTime ",
				a = this;
			n && (r += " and t.conversationType in (" + n.join(",") + ")", i += " and c.conversationType in (" + n.join(",") + ")"), r += " union " + i, this.database.execSearch(r, function(n) {
				if (n.length > 0) {
					for (var o = [], s = 0, r = n.length; s < r; s++) o.push(JSON.parse(n[s].content));
					e.RongIMClient._memoryStore.conversationList = o
				}
				t.onSuccess(e.RongIMClient._memoryStore.conversationList)
			})
		}, t.prototype.clearConversations = function(t, n) {
			var o = "delete from t_conversation_" + this.database.userId + " where conversationType in (?)";
			this.database.execUpdateByParams(o, [t.join(",")]), Array.forEach(t, function(t) {
				Array.forEach(e.RongIMClient._memoryStore.conversationList, function(n) {
					t == n.conversationType && e.RongIMClient.getInstance()
						.removeConversation(n.conversationType, n.targetId, {
							onSuccess: function() {},
							onError: function() {}
						})
				})
			}), n.onSuccess(!0)
		}, t.prototype.getMessage = function(e, t) {
			var n = "select * from t_message_" + this.database.userId + " t where t.messageUId = ?";
			this.database.execSearchByParams(n, [e], function(e, n) {
				if (e.length > 0 && n) {
					var o = JSON.parse(e[0].content);
					t.onSuccess(o)
				} else t.onSuccess(null)
			})
		}, t.prototype.addMessage = function(e, t, n, o) {
			var s = "insert into t_message_" + this.database.userId + " (messageType,messageUId,conversationType,targetId,sentTime,content,localMsg)values(?,?,?,?,?,?,?)",
				r = n.messageUId ? 0 : 1;
			if (this.database.execUpdateByParams(s, [n.messageType, n.messageUId, n.conversationType, n.targetId, n.sentTime, JSON.stringify(n), r]), o) {
				var i = "select t.id from t_message_" + this.database.userId + " t where t.sentTime = ? and t.conversationType = ? and t.targetId = ?";
				this.database.execSearchByParams(i, [n.sentTime, e, t], function(e, t) {
					t && (n.messageId = e[0].id), o.onSuccess(n)
				})
			}
		}, t.prototype.removeMessage = function(e, t, n, o) {
			if (0 != n.length) {
				for (var s = [], r = 0, i = n.length; r < i; r++) s.push(n[r].msgId);
				var a = "delete from t_message_" + this.database.userId + " where messageUId in (?)";
				this.database.execUpdateByParams(a, s.join(","))
			}
		}, t.prototype.removeLocalMessage = function(e, t, n, o) {
			if (0 != n.length) {
				var s = "delete from t_message_" + this.database.userId + " where id in (" + n.join(",") + ") and conversationType = ? and targetId = ? and localMsg = 1";
				this.database.execUpdateByParams(s, [e, t]), o.onSuccess(!0)
			}
		}, t.prototype.updateMessage = function(e, t) {
			var n = "update t_message_" + this.database.userId + " set messageUId = ?,sentTime = ?,content = ?,localMsg = ? where id = ?";
			this.database.execUpdateByParams(n, [e.messageUId, e.sentTime, JSON.stringify(e), e.isLocalMessage, e.messageId])
		}, t.prototype.updateMessages =  t.prototype.clearMessages = function(e, t, n) {
			var o = "delete from t_message_" + this.database.userId + " where conversationType = ? and targetId = ? ";
			this.database.execUpdateByParams(o, [e, t]), n.onSuccess(!0)
		}, t.prototype.getHistoryMessages = function(t, n, o, s, r) {
			var i = "select * from (select * from t_message_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ? ",
				a = [t, n],
				c = [],
				u = this;
			if (0 !== o) {
				var g = e.RongIMClient._memoryStore.lastReadTime.get(t + n);
				0 != g && (i += "and t.sentTime < ? ", a.push(g), o = g)
			}
			i += "order by t.sentTime desc limit ?) order by sentTime ", a.push(s), u.database.execSearchByParams(i, a, function(g, d) {
				for (var p = 0, l = g.length; p < l; p++) c.push(JSON.parse(g[p].content));
				l < s ? e.RongIMClient.getInstance()
					.getRemoteHistoryMessages(t, n, o, s - g.length, {
						onSuccess: function(t, o) {
							for (var s = 0, c = t.length; s < c; s++) t[s].targetId || (t[s].targetId = n), e.RongIMClient._dataAccessProvider.addMessage(t[s].conversationType, t[s].targetId, t[s], {
								onSuccess: function(e) {},
								onError: function() {}
							});
							u.database.execSearchByParams(i, a, function(e) {
								for (var t = [], n = 0, s = e.length; n < s; n++) t.push(JSON.parse(e[n].content));
								r.onSuccess(t, o)
							})
						},
						onError: function(e) {}
					}) : (r.onSuccess(c, !0), e.RongIMClient._memoryStore.lastReadTime.set(t + n, g[l - 1].sentTime))
			})
		}, t.prototype.getTotalUnreadCount = function(e, t) {
			var n = "select t.content from t_conversation_" + this.database.userId + " t";
			this.database.execSearch(n, function(n) {
				var o = 0;
				if (t)
					for (var s = 0, r = t.length; s < r; s++)
						for (var i = 0, a = n.length; i < a; i++)(c = JSON.parse(n[i].content))
							.conversationType == t[s] && (o += c.unreadMessageCount);
				else
					for (var i = 0, r = n.length; i < r; i++) {
						var c = JSON.parse(n[i].content);
						o += c.unreadMessageCount
					}
				e.onSuccess(o)
			})
		}, t.prototype.getConversationUnreadCount = function(e, t) {
			if (0 != e.length) {
				var n = "select t.content from t_conversation_" + this.database.userId + " t where t.conversationType in (" + e.join(",") + ")";
				this.database.execSearchByParams(n, [], function(e) {
					for (var n = 0, o = 0, s = e.length; o < s; o++) n += JSON.parse(e[o].content)
						.unreadMessageCount;
					t.onSuccess(n)
				})
			} else t.onSuccess(0)
		}, t.prototype.getUnreadCount = function(e, t, n) {
			var o = "select t.content from t_conversation_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ?";
			this.database.execSearchByParams(o, [e, t], function(e) {
				for (var t = 0, o = 0, s = e.length; o < s; o++) t += JSON.parse(e[o].content)
					.unreadMessageCount;
				n.onSuccess(t)
			})
		}, t.prototype.clearUnreadCountByTimestamp = function(e, t, n, o) {
			o.onSuccess(!0)
		}, t.prototype.clearUnreadCount = function(t, n, o) {
			var s = "select * from t_conversation_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ?",
				r = "update t_conversation_" + this.database.userId + " set content = ? where conversationType = ? and targetId = ?",
				i = this;
			this.database.execSearchByParams(s, [t, n], function(s, a) {
				var c = e.RongIMClient._storageProvider.getItem("mentioneds_" + e.Bridge._client.userId + "_" + t + "_" + n);
				if (c) {
					var u = JSON.parse(c);
					delete u[t + "_" + n], e.MessageUtil.isEmpty(u) ? e.RongIMClient._storageProvider.removeItem("mentioneds_" + e.Bridge._client.userId + "_" + t + "_" + n) : e.RongIMClient._storageProvider.setItem("mentioneds_" + e.Bridge._client.userId + "_" + t + "_" + n, JSON.stringify(u))
				}
				if (0 != s.length || a) {
					var g = JSON.parse(s[0].content);
					g.unreadMessageCount = 0, g.mentionedMsg = null, i.database.execUpdateByParams(r, [JSON.stringify(g), t, n]), o.onSuccess(!0)
				} else o.onSuccess(!1)
			})
		}, t.prototype.setConversationToTop = function(e, t, n, o) {
			var s = "update t_conversation_" + this.database.userId + " set isTop = ? where conversationType = ? and targetId = ?";
			this.database.execUpdateByParams(s, [e, n, t]), o.onSuccess(!0)
		}, t.prototype.setConversationHidden = function(e, t, n) {}, t.prototype.setMessageExtra = function(e, t, n) {
			var o = "select t.content from t_message_" + this.database.userId + " t where t.messageUId = ?",
				s = "UPADTE t_message_" + this.database.userId + " t SET t.content = ? where t.messageUId = ?";
			this.database.execSearchByParams(o, [e], function(o, r) {
				if (0 != o.length || r) {
					var i = JSON.parse(o[0].content);
					i.extra = t, this.database.execUpdateByParams(s, [JSON.stringify(i), e])
				} else n.onSuccess(!1)
			})
		}, t.prototype.setMessageReceivedStatus = function(e, t, n) {
			var o = "select t.content from t_message_" + this.database.userId + " t where t.messageUId = ?",
				s = "update t_message_" + this.database.userId + " set content = ? where messageUId = ?",
				r = this;
			this.database.execSearchByParams(o, [e], function(o, i) {
				if (0 != o.length || i) {
					var a = JSON.parse(o[0].content);
					a.receivedStatus = t, r.database.execUpdateByParams(s, [JSON.stringify(a), e]), n.onSuccess(!0)
				} else n.onSuccess(!1)
			})
		}, t.prototype.dropTable =  t.prototype.setServerInfo = function(e) {}, t.prototype.setMessageSentStatus = function(e, t, n) {
			var o = "select t.content from t_message_" + this.database.userId + " t where t.messageUId = ?",
				s = "update t_message_" + this.database.userId + " set content = ? where messageUId = ?";
			this.database.execSearchByParams(o, [e], function(o, r) {
				if (0 != o.length || r) {
					var i = JSON.parse(o[0].content);
					i.sentStatus = t, this.database.execUpdateByParams(s, [JSON.stringify(i), e]), n.onSuccess(!0)
				} else n.onSuccess(!1)
			})
		}, t.prototype.getUnreadMentionedMessages =  t.prototype.searchConversationByContent = function(e, t, n) {
			t.onSuccess([])
		}, t.prototype.searchMessageByContent = function(e, t, n, o, s, r, i) {
			i.onSuccess([])
		}, t.prototype.getDelaTime = function() {
			return 0
		}, t.prototype.getUserStatus = function(t, n) {
			n.onSuccess(new e.UserStatus)
		}, t.prototype.setUserStatus = function(e, t) {
			t.onSuccess(!0)
		}, t.prototype.subscribeUserStatus =  t.prototype.clearListeners = function() {}, t.prototype.setOnReceiveStatusListener =  t
	}();
	e.WebSQLDataProvider = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
				return t.prototype.setItem = function(t, n, o) {
			if (-1 == t.indexOf(this.prefix) && (t = this.prefix + t), o) {
				var s = new Date;
				s.setTime(s.getTime() + 24 * e.RongIMClient._memoryStore.depend.cookieValidity * 3600 * 1e3), document.cookie = t + "=" + decodeURIComponent(n) + ";path=/;expires=" + s.toGMTString()
			} else document.cookie = t + "=" + decodeURIComponent(n) + ";path=/;"
		}, t.prototype.getItem = function(e) {
			e && (-1 == e.indexOf(this.prefix) && (e = this.prefix + e), e = e.replace(/\|/, "\\|"));
			var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
			return null != t ? t[2] : null
		}, t.prototype.removeItem = function(e) {
			-1 == e.indexOf(this.prefix) && (e = this.prefix + e), this.getItem(e) && (document.cookie = e + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT")
		}, t.prototype.getItemKey = function(e) {
			var t = document.cookie.match(new RegExp("(^| )rong_navi\\w+?=([^;]*)(;|$)")),
				n = "";
			if (t)
				for (var o = 0, s = t.length; o < s; o++)
					if (t[o].indexOf(e) > -1) {
						n = t[o];
						break
					} return n ? n.split("=")[0].replace(/^\s/, "") : null
		}, t.prototype.clearItem = function() {
			var e = document.cookie.match(/[^ =;]+(?=\=)/g),
				t = this;
			if (e)
				for (var n = e.length; n--;) e[n].indexOf(t.prefix) > -1 && (document.cookie = e[n] + "=0;path=/;expires=" + new Date(0)
					.toUTCString())
		}, t.prototype.onOutOfQuota = function() {
			return 4096
		}, t
	}();
	e.CookieProvider = t;
	var n = function() {
				return e.prototype.setItem =  e.prototype.getItem =  e.prototype.removeItem =  e.prototype.getItemKey = function(e) {
			var t = this,
				n = null,
				o = new RegExp(e + "\\w+");
			for (var s in t._memeoryStore) s.match(o) && (n = s);
			return n
		}, e.prototype.clearItem = function() {
			var e = this;
			for (var t in e._memeoryStore) delete e._memeoryStore[t]
		}, e.prototype.onOutOfQuota = function() {
			return 4096
		}, e
	}();
	e.MemeoryProvider = n
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function t() {
			this.prefix = "rong_", this._host = "";
			var t = new Date,
				n = t.getMonth() + 1,
				o = t.getFullYear() + "/" + (1 == n.toString()
					.length ? "0" + n : n) + "/" + t.getDate(),
				s = new Date(o)
				.getTime();
			for (var r in localStorage) {
				if (r.lastIndexOf("RECEIVED") > -1) {
					var i = JSON.parse(localStorage.getItem(r));
					for (var a in i) s - i[a].dealtime > 0 && delete i[a];
					e.ObjectTools.isEmpty(i) ? localStorage.removeItem(r) : localStorage.setItem(r, JSON.stringify(i))
				}
				r.lastIndexOf("SENT") > -1 && s - JSON.parse(localStorage.getItem(r))
					.dealtime > 0 && localStorage.removeItem(r)
			}
		}
		return t.prototype.setItem = function(e, t) {
			e && (-1 == e.indexOf(this.prefix) && (e = this.prefix + e), localStorage.setItem(e, t))
		}, t.prototype.getItem = function(e) {
			return e ? (-1 == e.indexOf(this.prefix) && (e = this.prefix + e), localStorage.getItem(e || "")) : ""
		}, t.prototype.getItemKey = function(e) {
			var t = "";
			for (var n in localStorage)
				if (n.indexOf(e) > -1) {
					t = n;
					break
				} return t
		}, t.prototype.removeItem = function(e) {
			e && (-1 == e.indexOf(this.prefix) && (e = this.prefix + e), localStorage.removeItem(e.toString()))
		}, t.prototype.clearItem = function() {
			var e = this;
			for (var t in localStorage) t.indexOf(e.prefix) > -1 && e.removeItem(t)
		}, t.prototype.onOutOfQuota =  t
	}();
	e.LocalStorageProvider = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function e() {
			this.opersistName = "RongIMLib", this.keyManager = "RongUserDataKeyManager", this._host = "", this.prefix = "rong_", this.oPersist = document.createElement("div"), this.oPersist.style.display = "none", this.oPersist.style.behavior = "url('#default#userData')", document.body.appendChild(this.oPersist), this.oPersist.load(this.opersistName)
		}
		return e.prototype.setItem = function(e, t) {
			e && -1 == e.indexOf(this.prefix) && (e = this.prefix + e), this.oPersist.setAttribute(e, t);
			var n = this.getItem(this.keyManager);
			n ? -1 == n.indexOf(e) && (n += "," + e) : n = e, this.oPersist.setAttribute(this.prefix + this.keyManager, n), this.oPersist.save(this.opersistName)
		}, e.prototype.getItem = function(e) {
			return e && -1 == e.indexOf(this.prefix) && (e = this.prefix + e), e ? this.oPersist.getAttribute(e) : e
		}, e.prototype.removeItem = function(e) {
			e && -1 == e.indexOf(this.prefix) && (e = this.prefix + e), this.oPersist.removeAttribute(e), this.oPersist.save(this.opersistName);
			for (var t = this.getItem(this.keyManager), n = t && t.split(",") || [], o = 0, s = n.length; o < s; o++) n[o] == e && n.splice(o, 1);
			this.oPersist.setAttribute(this.prefix + this.keyManager, n.join(",")), this.oPersist.save(this.opersistName)
		}, e.prototype.getItemKey = function(e) {
			var t = null,
				n = this.getItem(this.keyManager),
				o = n && n.split(",") || [];
			if (o.length)
				for (var s = 0, r = o.length; s < r; s++)
					if (o[s] && o[s].indexOf(e) > -1) {
						t = o[s];
						break
					} return t
		}, e.prototype.clearItem = function() {
			var e = this.getItem(this.keyManager),
				t = [],
				n = this;
			if (e && (t = e.split(",")), t.length) {
				for (var o = 0, s = t.length; o < s; o++) t[o] && n.removeItem(t[o]);
				n.removeItem(n.keyManager)
			}
		}, e.prototype.onOutOfQuota = function() {
			return 10485760
		}, e
	}();
	e.UserDataProvider = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		return function() {
			if (this.script = document.createElement("script"), this.head = document.getElementsByTagName("head")[0], e.Transportations._TransportType = e.Socket.WEBSOCKET, "WebSocket" in window && "ArrayBuffer" in window && 3 === WebSocket.prototype.CLOSED && !e.RongIMClient._memoryStore.depend.isPolling) {
				var t = e.RongIMClient._memoryStore.depend.protobuf;
				this.script.src = t, this.head.appendChild(this.script)
			} else e.Transportations._TransportType = "xhr-polling", window.Modules = Polling
		}
	}();
	e.FeatureDectector = t
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(RongIMLib) {
	var FeaturePatcher = function() {
		function FeaturePatcher() {}
		return FeaturePatcher.prototype.patchAll =  FeaturePatcher.prototype.patchForEach = function() {
			Array.forEach || (Array.forEach = function(e, t) {
				for (var n = 0; n < e.length; n++) t.call(e, e[n], n, e)
			})
		}, FeaturePatcher.prototype.patchJSON = function() {
			window.JSON || (window.JSON = function() {
				function JSON() {}
				return JSON.parse =  JSON.stringify = function(e) {
					return this.str("", {
						"": e
					})
				}, JSON.str = function(e, t) {
					var n, o, s, r, i, a = t[e],
						c = this;
					switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(e)), typeof a) {
						case "string":
							return c.quote(a);
						case "number":
							return isFinite(a) ? String(a) : "null";
						case "boolean":
						case "null":
							return String(a);
						case "object":
							if (!a) return "null";
							if (i = [], "[object Array]" === Object.prototype.toString.apply(a)) {
								for (r = a.length, n = 0; n < r; n += 1) i[n] = c.str(n, a) || "null";
								return s = 0 === i.length ? "[]" : "[" + i.join(",") + "]"
							}
							for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (s = c.str(o, a)) && i.push(c.quote(o) + ":" + s);
							return s = 0 === i.length ? "{}" : "{" + i.join(",") + "}"
					}
				}, JSON.quote = function(e) {
					var t = this;
					return t.rx_escapable.lastIndex = 0, t.rx_escapable.test(e) ? '"' + e.replace(t.rx_escapable, function(e) {
						var n = t.meta[e];
						return "string" == typeof n ? n : "\\u" + ("0000" + e.charCodeAt(0)
								.toString(16))
							.slice(-4)
					}) + '"' : '"' + e + '"'
				}, JSON.rx_escapable = new RegExp('[\\"\\\\"\0--­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯\ufeff￰-￿]', "g"), JSON.meta = {
					"\b": "\\b",
					"   ": "\\t",
					"\n": "\\n",
					"\f": "\\f",
					"\r": "\\r",
					'"': '\\"',
					"''": "\\''",
					"\\": "\\\\"
				}, JSON
			}())
		}, FeaturePatcher
	}();
	RongIMLib.FeaturePatcher = FeaturePatcher
}(RongIMLib || (RongIMLib = {}));
var RongIMLib;
! function(e) {
	var t = function() {
		function e() {}
		return e.isEmpty = function(e) {
			var t = !0;
			for (var n in e) {
				t = !1;
				break
			}
			return t
		}, e.buildOptions = function(e, t, n) {
			if ("object" == typeof e)
				for (var o in t) "fileUploadURL" == o || "fileQNURL" == o || "protobuf" == o || "long" == o || "byteBuffer" == o || "navi" == o || "api" == o || "emojiImage" == o || "voiceLibamr" == o || "voicePCMdata" == o || "voiceSwfobjct" == o || "voicePlaySwf" == o || "callFile" == o ? e[o] && (t[o] = n + e[o]) : e[o] && (t[o] = e[o]);
			return t
		}, e
	}();
	e.ObjectTools = t;
	var n = function() {
		function e() {
			this.publicServiceList = []
		}
		return e.prototype.get = function(e, t) {
			for (var n = 0, o = this.publicServiceList.length; n < o; n++)
				if (this.publicServiceList[n].conversationType == e && t == this.publicServiceList[n].publicServiceId) return this.publicServiceList[n]
		}, e.prototype.add = function(e) {
			for (var t = !0, n = this, o = 0, s = this.publicServiceList.length; o < s; o++)
				if (n.publicServiceList[o].conversationType == e.conversationType && e.publicServiceId == n.publicServiceList[o].publicServiceId) {
					this.publicServiceList.unshift(this.publicServiceList.splice(o, 1)[0]), t = !1;
					break
				} t && this.publicServiceList.unshift(e)
		}, e.prototype.replace = function(e) {
			for (var t = this, n = 0, o = this.publicServiceList.length; n < o; n++)
				if (t.publicServiceList[n].conversationType == e.conversationType && e.publicServiceId == t.publicServiceList[n].publicServiceId) {
					t.publicServiceList.splice(n, 1, e);
					break
				}
		}, e.prototype.remove = function(e, t) {
			for (var n = this, o = 0, s = this.publicServiceList.length; o < s; o++)
				if (n.publicServiceList[o].conversationType == e && t == n.publicServiceList[o].publicServiceId) {
					this.publicServiceList.splice(o, 1);
					break
				}
		}, e
	}();
	e.PublicServiceMap = n;
	versationList = []
		}
		return e.prototype.get = function(e, t) {
			for (var n = 0, o = this.conversationList.length; n < o; n++)
				if (this.conversationList[n].conversationType == e && this.conversationList[n].targetId == t) return this.conversationList[n];
			return null
		}, e.prototype.add = function(e) {
			for (var t = !0, n = 0, o = this.conversationList.length; n < o; n++)
				if (this.conversationList[n].conversationType === e.conversationType && this.conversationList[n].targetId === e.targetId) {
					this.conversationList.unshift(this.conversationList.splice(n, 1)[0]), t = !1;
					break
				} t && this.conversationList.unshift(e)
		}, e.prototype.replace = function(e) {
			for (var t = 0, n = this.conversationList.length; t < n; t++)
				if (this.conversationList[t].conversationType === e.conversationType && this.conversationList[t].targetId === e.targetId) {
					this.conversationList.splice(t, 1, e);
					break
				}
		}, e.prototype.remove = function(e) {
			for (var t = 0, n = this.conversationList.length; t < n; t++)
				if (this.conversationList[t].conversationType === e.conversationType && this.conversationList[t].targetId === e.targetId) {
					this.conversationList.splice(t, 1);
					break
				}
		}, e
	}();
	e.ConversationMap = o;
	var s = function() {
		function t() {}
		ew t), t._instance
		}, t.prototype.check = function(t, n, o) {
			var s = arguments.callee.caller;
			if (!e.RongIMClient._dataAccessProvider && !o) throw new Error("The parameter is incorrect or was not yet instantiated RongIMClient -> position:" + n);
			for (var r = 0, i = s.arguments.length; r < i; r++)
				if (!new RegExp(this.getType(s.arguments[r]))
					.test(t[r])) throw new Error("The index of " + r + " parameter was wrong type " + this.getType(s.arguments[r]) + " [" + t[r] + "] -> position:" + n)
		}, t.prototype.getType = function(e) {
			var t = Object.prototype.toString.call(e)
				.toLowerCase();
			return t.slice(8, t.length - 1)
		}, t.prototype.checkCookieDisable = function() {
			document.cookie = "checkCookie=1";
			var e = !1;
			return document.cookie.match(new RegExp("(^| )checkCookie=([^;]*)(;|$)")) || (e = !0), document.cookie = "checkCookie=1;expires=Thu, 01-Jan-1970 00:00:01 GMT", e
		}, t
	}();
	e.CheckParam = s;
	var r = function() {
		function e(e) {
			this.map = {}, this.keys = [], this.limit = e || 10
		}
		return e.prototype.set = function(e, t) {
			if (this.map.hasOwnProperty(e)) {
				if (this.keys.length === this.limit) {
					var n = this.keys.shift();
					delete this.map[n]
				}
				this.keys.push(e)
			}
			this.map[e] = t
n this.map[e] || 0
		}delete this.map[e]
		}, e
	}();
	e.LimitableMap = r;
	var i = function() {
		function e(e) {
			var t = this;
			t.xmlhttp = null, t.options = e;
			var n = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
			"undefined" != typeof XMLHttpRequest && n ? t.xmlhttp = new XMLHttpRequest : "undefined" != typeof XDomainRequest ? t.xmlhttp = new XDomainRequest : t.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
		}
		return e.prototype.send = function(e) {
			var t = this;
			t.options.url || (t.options.url = "http://upload.qiniu.com/putb64/-1"), t.xmlhttp.onreadystatechange = function() {
				4 == t.xmlhttp.readyState && (t.options.type ? e() : e(JSON.parse(t.xmlhttp.responseText.replace(/'/g, '"'))))
			}, t.xmlhttp.open("POST", t.options.url, !0), t.xmlhttp.withCredentials = !1, "setRequestHeader" in t.xmlhttp && (t.options.type ? t.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8") : (t.xmlhttp.setRequestHeader("Content-type", "application/octet-stream"), t.xmlhttp.setRequestHeader("Authorization", "UpToken " + t.options.token))), t.xmlhttp.send(t.options.type ? "appKey=" + t.options.appKey + "&deviceId=" + t.options.deviceId + "&timestamp=" + t.options.timestamp + "&deviceInfo=" + t.options.deviceInfo + "&privateInfo=" + JSON.stringify(t.options.privateInfo) : t.options.base64)
		}, e
	}();
	e.RongAjax = i
}(RongIMLib || (RongIMLib = {}));
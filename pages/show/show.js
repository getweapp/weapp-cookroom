// 拿到全局应用程序实例

const app = getApp()

var  API_URL = 'https://api.getweapp.com/vendor/tngou/api/cook/show'

const  API_IMG = 'http://tnfs.tngou.net/image'


// 创建一个页面对象用于控制页面逻辑

Page({

	data: {
		title: '菜单详情',
		img: API_IMG,
		show: [],
		loading: true,
		help: 'API里面有HTML标签,小程序又不支持,我也很无奈啊!'
	},
	parse(message) {
		return message.replace(new RegExp(/<h2>/g), '')
			.replace(new RegExp(/<\/h2>/g),'\r\n')
			.replace(new RegExp(/<hr>/g),'\r\n')
			.replace(new RegExp(/<p>/g),'')
			.replace(new RegExp(/<\/p>/g),'\r\n')
	},
	onLoad: function (options) {

		console.log("options:"+options.id)

		var FULL_URL = API_URL + '?id=' + options.id

		console.log(API_URL)

		app.fetchApi(FULL_URL,(err, data) => {
			data.message = this.parse(data.message)
			this.setData({ show:data, loading: false})
		})

	}

})
import axios from "axios"
export default{
	getDp(obj){
		return axios({
			method:"get",
			url:"/api/getDp",
			params:obj
		})
	},
	getTypeList(obj){
		return axios({
			method:"get",
			url:"/api/getTypeList",
			params:obj
		})
	},
}

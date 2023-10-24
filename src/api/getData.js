import axios from "axios";

export const getData = () => {
	return axios.get("https://api.coincap.io/v2/assets?limit=35").then(res => res.data);
};

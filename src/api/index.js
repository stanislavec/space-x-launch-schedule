import axios from 'axios';

export const requestApi = REQUEST_URL => {
	return axios.get(`https://api.spacexdata.com/v3/launches/${REQUEST_URL}`);
};

import data from 'axios';

export const DOMAIN = 'http://192.168.0.107:8000';
data.defaults.baseURL = `${DOMAIN}/api/v1`;

export default class ApiService {
  getHeaders = (headers = null) => {
    return {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    };
  };

  async getResource(url, headers = this.getHeaders()) {
    return await data.get(url, headers);
  }

  async addResource(url, dataObj = null, headers = this.getHeaders()) {
    return await data.post(url, dataObj, headers);
  }

  async updateResource(url, dataObj = null, headers = this.getHeaders()) {
    return await data.put(url, dataObj, headers);
  }

  async deleteResource(url, dataObj = null, headers = this.getHeaders()) {
    return await data.delete(url, dataObj, headers);
  }
}

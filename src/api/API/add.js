import Api from '../index.js';

export default class Add {

    api = new Api();

    async addNewPost(type, data){
        const post = await this.api.addResource(`/${type}`, data);
        return post.data
    }
}
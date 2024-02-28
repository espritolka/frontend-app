import Api from '../index.js';

export default class Add {

    api = new Api();

    async sendMessage(type, id, data){
        const message = await this.api.updateResource(`/${type}/${id}`, data);
        return message.data
    }

}
import Api from '../index';

export default class Get {
  api = new Api();
  async getSubMenuByType(type) {
    const directory = await this.api.getResource(
        `/${type}`,
    );
    return directory.data;
  }

  async getChat(type, id) {
    const chat = await this.api.getResource(
        `/${type}/${id}`,
    );
    return chat.data;
  }
}

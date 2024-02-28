import {NEW_CHAT_PATH} from '../constants/routing';

export const getPath = (tabId, chatId) => {
  if (!chatId) {
    return `/tab/${tabId}/`;
  }

  return `/tab/${tabId}/chat/${chatId}`;
};

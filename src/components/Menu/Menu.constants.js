import {MENU_AUDIO_ID, MENU_SEO_ID, MENU_TELEGRAM_ID} from '../../constants/api';

export const DEFAULT_MENU = [
  {name: 'SEO статья', short_name: 'SEO', id: MENU_SEO_ID, icon: 'article'},
  {name: 'Telegram пост', short_name: 'Telegram', id: MENU_TELEGRAM_ID, icon: 'telegram'},
  {name: 'Войсы', short_name: 'Audio', id: MENU_AUDIO_ID, icon: 'audio'},
];

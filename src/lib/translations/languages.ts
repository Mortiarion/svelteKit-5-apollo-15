import en from './en';
import ru from './ru';
import ukr from './ukr';

export enum ELocales {
	EN = 'en',
	RU = 'ru',
	UKR = 'ukr'
}

export const translations: Record<ELocales, Record<string, string>> = {
    [ELocales.EN]: en,
    [ELocales.RU]: ru, 
    [ELocales.UKR]: ukr
};

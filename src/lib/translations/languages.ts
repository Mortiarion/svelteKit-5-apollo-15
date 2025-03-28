// translations/languages.ts
import en from './en';
import ru from './ru';
import uk from './uk';

export enum ELocales {
	EN = 'en',
	RU = 'ru',
	UK = 'uk'
}

export const translations: Record<ELocales, Record<string, string>> = {
    [ELocales.EN]: en,
    [ELocales.RU]: ru, 
    [ELocales.UK]: uk
};

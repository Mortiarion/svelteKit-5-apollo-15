import { derived, writable } from 'svelte/store';
import { translations } from '$lib/translations/index';

export const locale = writable<string>('uk');
export const locales: string[] = Object.keys(translations);

type Translations = Record<string, Record<string, string>>;

type Vars = {
	[key: string]: string;
};

function translate(locale: string, key: string, vars: Vars = {}): string {
	if (!key) throw new Error('no key provided to $t()');
	if (!translations[locale]) throw new Error(`no translation for key "${locale}"`);

	let text = (translations as Translations)[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	Object.keys(vars).forEach((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale: string) =>
		(key: string, vars: Vars = {}): string =>
			translate($locale, key, vars)
);

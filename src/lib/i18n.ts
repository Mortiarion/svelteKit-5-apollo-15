// i18n.ts

import { derived, writable } from 'svelte/store';
import { ELocales, translations } from '$lib/translations/languages';

export const locale = writable<ELocales>(ELocales.UK);
export const locales: string[] = Object.keys(translations);

type Translations = {
	[key: string]: {
		[key: string]: string;
	};
};

type Vars = {
	[key: string]: string;
};

function translate(locale: string, key: string, vars: Vars): string {
	if (!key) throw new Error(`no key provided to ${key}`);
	if (!locale) throw new Error(`locale not found: ${locale}`);

	let text = (translations as Translations)[locale]?.[key];

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

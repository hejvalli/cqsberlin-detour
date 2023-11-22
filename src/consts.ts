// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://cqs.berlin";
export const SITE_TITLE: string = "CQS - Critical Queer Solidarity";
export const SITE_DESCRIPTION: string = "A intersectional queer activist group organizing international exchange projects, art and political discussions around topics such as drag and gender expression, dating and relationships and sexual health";

// Repo info
export const REPO: string = "hejvalli/cqsberlin-detour"; // TODO: Update dynamically
export const DEFAULT_BRANCH: string = "main"; // TODO: Update dynamically

// SEO metadata
export const TWITTER_CREATOR: string = "@cqsberlin";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "projects & upcoming",
		href: "/projects",
	},
	{
		title: "about",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	de: "de",
};

// Hosting
export const HOSTING_SERVICE: "cloudflare" | "netlify" | "none" = "cloudflare";

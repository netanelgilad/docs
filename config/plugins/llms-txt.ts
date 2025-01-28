import starlightLlmsTxt from 'starlight-llms-txt';

/** Starlight plugin that sets up `starlight-llms-txt` with configuration for the Astro docs. */
export const starlightPluginLlmsTxt = () =>
	starlightLlmsTxt({
		// Basic information about the docs and Astro to display in the main `llms.txt` entry file.
		projectName: 'Astro',
		description: 'Astro is an all-in-one web framework for building websites. ',
		details: [
			'- Astro uses island architecture and server-first design to reduce client-side JavaScript overhead and ship high performance websites.',
			'- Astro’s friendly content-focused features like content collections and built-in Markdown support make it an excellent choice for blogs, marketing, and e-commerce sites amongst others.',
			'- The `.astro` templating syntax provides powerful server rendering in a format that follows HTML standards and will feel very familiar to anyone who has used JSX.',
			'- Astro supports popular UI frameworks like React, Vue, Svelte, Preact, and Solid through official integrations.',
			'- Astro is powered by Vite, comes with a fast development server, bundles your JavaScript and CSS for you, and makes building websites feel fun.',
		].join('\n'),
		optionalLinks: [
			{
				label: 'The Astro blog',
				url: 'https://astro.build/blog/',
				description: 'the latest news about Astro development',
			},
		],

		// Control the order of pages in the `llms-full.txt` and `llms-small.txt` output files.
		promote: [
			'en/concepts/why-astro',
			'en/concepts/islands',
			'en/install-and-setup',
			'en/basics/project-structure',
			'en/develop-and-build',
			'en/guides/configuring-astro',
		],

		// Exclude pages from the abridged `llms-small.txt` file designed for smaller context windows.
		exclude: [
			'en/getting-started',
			'en/contribute',
			'en/guides/backend/**',
			'en/guides/cms/**',
			'en/guides/deploy/**',
			'en/guides/ecommerce',
			'en/guides/media/**',
			'en/guides/migrate-to-astro/**',
			'en/reference/legacy-flags',
			'en/tutorial/**',
			'en/upgrade-to/v{1,2,3,4}',
		],
	});

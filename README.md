# Jekyll Author Site (Hydejack)

Clean author website powered by Jekyll using the Hydejack theme. Code and filenames are in English; content is in Serbian (Latin/Cyrillic) with a user-toggle.

## Edit Content
- Collections:
	- `_radio/` — title, year, role, description, link, featured (true/false), order, image
	- `_acting/` — title, year, role, description, link, featured, order, image
	- `_writing/` — title, year, role, description, link, featured, order, image
	- `_press/` — title, year, role, description, link, featured, order, image
- Pages live in `pages/` (Bio, Radio, Acting, Writing, Press/Media, Contact)
- Homepage highlights featured items from the collections

## Run Locally
```powershell
bundle install
bundle exec jekyll serve --config _config.yml,_config_dev.yml --livereload
```
Open http://localhost:4000

## Deploy on GitHub Pages
- Push to GitHub; enable Pages with source: `main` and `/ (root)`
- Project site URL: `https://<username>.github.io/<repo>/`
- Update `_config.yml` `url` and `baseurl` accordingly

## Custom Domain (later)
- Add `CNAME` file with your domain name
- Configure DNS (A/ALIAS to GitHub Pages), enable HTTPS in repo settings

## SEO Checklist
- Check `<title>`, meta description, OpenGraph/Twitter cards
- Verify `sitemap.xml` and `robots.txt`
- `jekyll-seo-tag` handles canonical/meta; set `url` + `baseurl`

## Images
- Recommended sizes: 1200×630 for social, 800×600 for cards
- Always set `image:` in front matter if available
- Use optimized JPEG/WEBP where possible

## Accessibility & Performance
- Script toggle button (Latin/Ћир) is fixed bottom-right
- Minimal JS; optimize images to reduce CLS

## Serbian Script Toggle
- Button inserted automatically; persists via localStorage
- Default: Latin; toggling converts to Cyrillic and back
- Scope: main content; excludes code/pre/inputs

## Notes
- No e-commerce implemented; placeholders are clearly marked to replace with real credits and links.

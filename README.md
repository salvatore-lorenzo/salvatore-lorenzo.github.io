# Salvatore Lorenzo — personal website

A static academic homepage for GitHub Pages: **https://salvatore-lorenzo.github.io/**

Plain HTML, CSS, and JavaScript. No package installation, build step, analytics, or external runtime dependencies. The portrait and fonts are served locally. All content remains readable with JavaScript disabled.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Stop the server with Ctrl+C.

## Publish on GitHub Pages

Commit and push the site files to the repository's `main` branch. In the repository on GitHub, open **Settings → Pages**, choose **Deploy from a branch**, and select **main / (root)**. GitHub will show the deployment status and public URL. If these settings are already active, pushing to `main` updates the site automatically.

The `.nojekyll` file makes GitHub Pages serve the files directly. `_config.yml` retains the site's basic metadata but no Jekyll theme is needed. See [GitHub's publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for more details.

## Update the content

- **Biography, publications, projects, and links:** edit `index.html`.
- **Colors, typography, and responsive layout:** edit `assets/styles.css`.
- **Publication filters and mobile navigation:** edit `assets/site.js`.
- **Portrait:** replace `assets/images/salvatore-lorenzo.jpg`.

For each publication, keep its `data-topic` value consistent with a filter (`learning`, `open`, or `thermodynamics`). Update the number in the **All work** button when adding or removing entries. Mark preprints explicitly.

## Content sources

Content was checked against the [Quantum Palermo profile](https://quantum.unipa.it/author/salvatore-lorenzo/), the linked project pages, and publisher/arXiv publication records in October 2026. Publication links lead directly to the original papers. The university profile, ORCID, Google Scholar, arXiv, and LinkedIn links come from the group profile. The portrait is the original image from that profile.

DM Sans and Instrument Serif are included under the SIL Open Font License. Their license files are in `assets/fonts/`.

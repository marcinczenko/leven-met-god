# Confluenza Solo Template

This is a template that allows the user to quickly start with a new repo with [Confluenza-based](https://confluenza.online) landing page and documentation browser.

If you are new to confluenza visit [Confluenza Homepage](https://confluenza.online). To learn more about the content of this repository, see `CONTRIBUTING.md`.

The content of this Markdown document can be used at your
top-level url.

To use it as the content of your landing page change the frontmatter in `src/pages/index.md` from:

```bash
---
path: /
title: Confluenza Solo
---
```

to

```bash
---
path: /
title: Confluenza Solo
content: ../../README.md
---
```

I am from top level `README.md`.

This site is deployed at https://solo.confluenza.online.

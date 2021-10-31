---
path: /developers/when-things-do-not-work
title: When Things Do Not Work
tag: developer
---

If you get stuck and you get errors that do not make sense to you, try first the following:

```bash
# stop the development server if currently running and then
» rm -rf .cache
» yarn dev
```

Also, make sure that you source tree contains at least one Markdown document (Markdown, no MDX) with a proper frontmatter (with `path`, `title`, and `tag`, and `content`).

> Requiring to have at least one document with external content is not something that should be required. In the future release we will make it right.

If this does not help, [open and issue](https://github.com/confluenza/solo-template/issues/new/choose) or start a [new discussion](https://github.com/confluenza/solo-template/discussions/new).

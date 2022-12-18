---
path: /troubleshooting
title: Troubleshooting
tag: site-info
sortIndex: 50
---

After running:

```bash
yarn gatsby clean
```

and then:

```bash
yarn dev
```

it may happen that the development server gets stuck after writing:

```bash
success write out requires - 0.001s
```

We do not know exactly what triggers the issue. As a workaround, please try running

```bash
yarn build
```

If it does not succeed, try again (and again - a couple of times). Then try `yarn dev` again.

If all this does not help, try to rename the `content/home.mdx` and try the above steps again.

To our best knowledge the problem is with MDX, or maybe the way it is integrated with Gatsby. In the future we do plan to make Confluenza Gatsby-free, maybe MDX-free.

Please get in touch if you still face problems.

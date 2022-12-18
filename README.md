# Leven met God

This site is created using [Confluenza Documentation Browser](https://confluenza.online) (the author of this site is also the creator of Confluenza).

If you are new to Confluenza visit [Confluenza Homepage](https://confluenza.online). To learn more about the content of this repository, and to learn how to contribute see `CONTRIBUTING.md`.

## Troubleshooting

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

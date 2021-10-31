# Contributing

> Working on your first Pull Request? You can learn how from this *free* series
> [How to Contribute to an Open Source Project on
> GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Quick start

After you clone your forked repo, follow the following steps to bootstrap your
local environment:

```bash
# if you use nvm
» nvm use
Found '.nvmrc' with version <lts/*>
Now using node v14.17.5 (npm v6.14.13)
» yarn --version
3.1.0
» yarn
» yarn dev
```

## Code organization

This is a Gatsby site that uses [gatsby-theme-confluenza](https://www.npmjs.com/package/@confluenza/gatsby-theme-confluenza). gatsby-theme-confluenza makes it easy to detect Markdown and MDX content in your project source tree and present in a flexible documentation browser.

## Staying in sync with upstream

You can follow the steps described in [Syncing a
fork](https://help.github.com/articles/syncing-a-fork/). We recommend that you
keep your local master branch pointing to the upstream master branch. Remaining
in sync then becomes really easy:

```bash
git remote add upstream https://github.com/confluenza/solo-template.git
git fetch upstream
git branch --set-upstream-to=upstream/master master
```

Now, when you do `git pull` from your local `master` branch git will 
fetch changes from the `upstream` remote. Then you can make all of 
your pull request branches based on this `master` branch.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if 
somebody else is already working on it, we use `someone working on it` 
label to mark such issues.

When you rebase, please use `--force-with-lease` instead of bare `--force`.

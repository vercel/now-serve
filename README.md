# now-serve

[![Build Status](https://travis-ci.org/zeit/now-serve.svg?branch=master)](https://travis-ci.org/zeit/now-serve)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Slack Channel](https://zeit-slackin.now.sh/badge.svg)](https://zeit.chat/)

> This packages makes it very easy to [share directories](https://zeit.co/blog/serve-it-now) using [now](https://zeit.co/now)!

## How it works

When running the `ns` command, a temporary directory gets created. Within that directory, now-serve will insert a brand new `package.json` that conforms to [now's requirements](https://zeit.co/now#get-started) and therefore contains a start script that runs a new instance of [list](https://github.com/zeit/list) when being executed on our servers.

All of this happens completely automatically. So after running the command, the only thing you need to do is wait a few seconds until your files have been deployed and share the link! :boom:

## Usage

Install it (needs at least node v6)

```bash
$ npm install now-serve -g
```

Run it

```bash
$ ns <file | dir> [options] 
```

You can find a list of all options [below](#options).

### Options

| Usage                          | Description |
| ------------------------------ | ----------- |
| -h, --help                     | Output all available options |
| -V, --version                  | The version tag of the now-serve instance on your device |
| &#8209;c,&nbsp;&#8209;&#8209;cmd&nbsp;[command]            | The command that should be run when starting |
| -n, --name [name]              | The name for your deployment |
| &#8209;p,&nbsp;&#8209;&#8209;packages&nbsp;&#60;names&#62; | Custom packages to add to dependencies: `"gulp, koa"` |
| -a, --arguments <handles>      | A string containing arguments that will be passed on to now: `"force, debug"` (basically the names of the flags but without dashes) |
| -s, --single                   | Serve single page apps with only one `index.html` in the root directory |

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall now-serve if it's already installed: `npm uninstall now-serve -g`
3. Link it to the global module directory: `npm link`
4. Transpile the source code and watch for changes: `npm start`

Yeeha! Now can use the `ns` command everywhere.

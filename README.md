# now-serve

This packages makes it very easy to [share directories](https://zeit.co/blog/serve-it-now) using [now](https://zeit.co/now)!

## How it works

When running the `ns` command, a temporary directory gets created. Within that directory, now-serve will insert a brand new `package.json` that conforms to [now's requirements](https://zeit.co/now#get-started) and therefore contains a start script that runs a new instance of [micro-list](https://github.com/zeit/micro-list) when being executed on our servers.

All of this happens completely automatically. So after running the command, the only thing you need to do is wait a few seconds until your files have been deployed and share the link! :boom:

## Usage

Install it

```bash
▲ npm install now-serve -g
```

Run it

```bash
▲ ns [options] <file | dir>
```

You can find a list of all options [below](#options).

### Options

| Usage                  | Description |
| ---------------------- | ----------- |
| -h, --help             | Output all available options |
| -V, --version          | The version tag of the now-serve instance on your device |
| -c, --cmd [command]    | The command that should be run when starting |
| -p, --packages &#60;names&#62; | A list of custom packages to add to dependencies (comma-separated) |

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall now-serve if it's already installed: `npm uninstall now-serve -g`
3. Link it to the global module directory: `npm link`
4. Transpile the source code and watch for changes: `gulp`

Yeeha! Now can use the `ns` command everywhere.

## Credits

- Copyright © 2016 Zeit, Inc and project authors.
- Licensed under MIT.
- ▲

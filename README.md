# now-serve

Quickly share directories using now

## Usage

Install it

```bash
npm install now-serve -g
```

Run it

```bash
ns [options]
```

You can find a list of all options below:

### Options

| Usage                  | Description |
| ---------------------- | ----------- |
| -h, --help             | Output all available options |
| -V, --version          | The version tag of the now-serve instance on your device |
| -c, --cmd [command]    | The command that should be run when starting |
| -p, --packages &#60;names&#62; | A list of custom packages to add to dependencies |

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall now-serve if it's already installed: `npm uninstall now-serve -g`
3. Link it to the global module directory: `npm link`
4. Transpile the source code and watch for changes: `gulp`

Yeeha! Now can use the `ns` command everywhere.

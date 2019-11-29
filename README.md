# template-ts-library

A template repository showcasing the desired file structure for a TypeScript
library.

### All templates

| [TypeScript library](https://github.com/NickKaramoff/template-ts-library)
|

## What's Inside

- [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html),
  battle-tested for best results.
- [Rollup](https://rollupjs.org) for bundling files, with modular config and
  useful plugins:
  - [strip](https://github.com/rollup/plugins/tree/master/packages/strip) plugin
    will remove `debugger`, `console.log` and `console.debug`
  - [terser](https://github.com/TrySound/rollup-plugin-terser) will minify the
    bundle
  - [typescript2](https://github.com/ezolenko/rollup-plugin-typescript2) as the
    better TypeScript plugin for Rollup ;)
- [Jest](https://jestjs.io) with [ts-jest](https://github.com/kulshekhar/ts-jest)
  for testing
- [ESLint](https://eslint.org) for linting with a custom config
- [size-limit](https://github.com/ai/size-limit) for checking the bundle size
- [browserslist](https://github.com/browserslist/browserslist) config that
  [covers 91% of the world](https://browsersl.ist/?q=%3E%3D.5%25+or+last+2+versions+and+not+dead)
  without compromising on features.
- [Travis CI](https://travis-ci.com) config file for testing and deploying
  (tags only!) to NPM and GitHub releases
- [npm-run-all](https://github.com/mysticatea/npm-run-all) as a finishing touch
  to simplify NPM script running

## Usage

1. Click "Use this template" and create a repo.
   - consult [GitHub help](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
     for more info
2. Replace everything contained in blocks like `~this~` with applicable
   information. Use a "Find All" function with `~([a-z\-])+~` in Regex mode to
   find everything you need to replace. You can also replace these values one
   by one:
   - `~library-name~` — name of your library. Please only use small Latin letters,
     numbers and dashes (-).
   - `~library-description~` — description of your library.
   - `~library-keyword~` — one keyword for your library (add more manually).
   - `~your-name~` — your name.
   - `~your-email~` — your email address.
   - `~repo-path~` — path to your repo on GitHub in format `%user_name%/%repo_name%`.
     If your repo is not on GitHub, you'll have to setup the paths manually.
   - `~repo-desired-size~` — how big you want your final bundle size to be after
     minification and gzip.
   - `~github-api-key~` — GitHub token to be able to publish on GH Releases.
   - `~npm-api-key~` — NPM API key to be able to publish on NPM.
3. You're good to go. Don't forget to replace this README with your own ;)

## Why not Cookiecutter?

I don't like that it's Python based. I don't like how Python packages are
installed globally. Perhaps I'll create my own Go-based solution or something.

## Contributing

This template is really just my vision of how a JavaScript/TypeScript library
should be stored and built. This is the reason why I probably won't accept pull
requests to this repo, unless they fix the flaws in intended functionality.

If you still want to submit a PR, go ahead, I won't ignore it, just don't expect
me to rebuild every single of my projects according to what you think is the
best way :)

----

Distributed under the MIT License.

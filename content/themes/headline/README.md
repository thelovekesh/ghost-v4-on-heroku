# Headline

Headline is a [Ghost](https://github.com/TryGhost/Ghost) theme built from the ground up for local news. While it can be used for any purpose, the theme takes a thoughtful approach to displaying large amounts of content across various areas of coverage. Headline adapts to your content by showcasing your most written about topics or by giving you the control to decide which topics are front and center.

**Demo: https://headline.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Headline/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/headline.zip`, which you can then upload to your site.

```bash
yarn zip
```

# Contribution

This repo is synced automatically with [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

## Copyright & License

Copyright (c) 2013-2022 Ghost Foundation - Released under the [MIT license](LICENSE).

<img src="https://user-images.githubusercontent.com/347490/104764662-b5358980-5735-11eb-8ef8-7058b6be43da.png" width="89" height="32">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Storybook Addon Web Vitals

Storybook Addon Web Vitals can be used for instant feedback on loading, interactivity, and layout shift metric for each story.

This is an alpha release. We currently only report CLS statuses.

![React Storybook Screenshot](https://user-images.githubusercontent.com/347490/104764861-f9288e80-5735-11eb-9198-14de8a066a40.png)

## Getting Started

Requires Storybook 6.1 or later. Install the latest with `npx sb upgrade --prerelease`

First, install the addon

```sh
npm i -D @washingtonpost/storybook-addon-web-vitals
```

Then, add following content to [`.storybook/main.js`](https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project):

```js
module.exports = {
  addons: ["storybook/web-vitals"],
};
```

### Usage

See toolbar for feedback

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
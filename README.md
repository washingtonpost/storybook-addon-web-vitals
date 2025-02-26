<img src="https://user-images.githubusercontent.com/347490/104764662-b5358980-5735-11eb-8ef8-7058b6be43da.png" width="89" height="32">

# Storybook Addon Web Vitals

Storybook Addon Web Vitals can be used for instant feedback on loading, interactivity, and layout shift metric for each story. We use the [web-vitals](https://github.com/GoogleChrome/web-vitals).

We report on INP, CLS, and LCP.

![React Storybook Screenshot](https://user-images.githubusercontent.com/347490/104764861-f9288e80-5735-11eb-9198-14de8a066a40.png)

## Getting Started

Requires Storybook 8

First, install the addon

```sh
npm i -D @washingtonpost/storybook-addon-web-vitals
```

Then, add following content to [`.storybook/main.js`](https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project):

```js
module.exports = {
  addons: ["@washingtonpost/storybook-addon-web-vitals"],
};
```

### Usage

See toolbar for feedback on INP, CLS and LCP

CLS changes will highlight offending elements based on results from web-vitals

New results are logged to the console as they come in to provide the full data object from web-vitals

# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./src/assets/Screenshot%202024-02-11%20at%2012-39-18%20Countries.png)

### Links

- Solution URL: [My solution]([https://your-solution-url.com](https://github.com/Tam-BobManuel/Countries-api))
- Live Site URL: [Live solution]([https://your-live-site-url.com](https://countries-api-nine-orpin.vercel.app/))

## My process

### Built with

- TypeScript
- CSS custom properties
- Flexbox
- React routers
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - React framework
- [Chakra](https://chakra-ui.com/) - For styles

### What I learned

I learnt how to use typescript and react routers
To see how you can add code snippets, see below:

```ts
const filteredCountries = data.filter((country) => {
  if (selectedContinent !== "All" && country.region !== selectedContinent) {
    return false;
  }
  if (!searchQuery) {
    return true;
  }
  return country.name.toLowerCase().includes(searchQuery.toLowerCase());
});
```

### Continued development

In the future I'll try to convert the JSON file to a MongoDB database and also let users or an admin add and remove countries or perhaps a section for countries that never came to be as well as fictional ones

### Useful resources

- [Reactflux on discrod](https://discord.com/invite/reactiflux) - This helped me understand typeScript erros and they helped debug my code. I really like this group and will love to contribute to the community going forward.

## Author

- Frontend Mentor - [@Tam](https://www.frontendmentor.io/profile/Tam-BobManuel)
- Twitter - [@tamwebdev](https://twitter.com/tam_webdev)

## Acknowledgments

I acknowledge the reactflux discord channel for their help.

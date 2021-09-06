# breakfast-shop-website

- [breakfast-shop-website](#breakfast-shop-website)
  - [Features](#features)
  - [File Structure](#file-structure)
  - [Usage](#usage)
  - [Difficulties Encountered](#difficulties-encountered)
  - [Further Improvement in the Future](#further-improvement-in-the-future)

## Features

- Typescript
- React
- Prisma
- Material-UI
- Next.js
  - Code splitting and prefetching
  - Static Generation
  - CSS Module
  - Global Styles
  - Image Optimization
- Fade in Content as It Scrolls Into View
- RWD
- Open Graph Protocol

## File Structure

```text
component
    appBar.tsx
    backToTop.tsx
    carousel.tsx
    fadeInSection.tsx
    feedbackIconButton.tsx
    footer.tsx
    footerSnsIcon.tsx
    head.tsx
    imgTitleDescription.tsx
    resizeRotatePrompt.tsx
lib
    prisma.ts
    targetCategoryContext.ts
pages
    _app.tsx
    _document.js
    index.tsx
    menu.tsx
prisma
    schema.prisma
public
    images
        food-icons.jpg
        ogimg.png
styles
    global.scss
package.json
tsconfig.json
yarn.lock
```

## Usage

```shell
yarn            # install dependencies
yarn run dev    # start nextjs dev server
                # Open http://localhost:3000 from browser
```

## Difficulties Encountered

- prisma type error. Solution: upgrade the typescript version.
- open graph protocol. Solution: a sharing debugger tool in facebook for developer.
- shring a variable for pages. Solution: react context.
- NodeJS.Global property. Solution: @ts-expect-error.
- diagonal layout, SVG, CSS-Clip-Path, Trigonometric function. Solution: Grid, skew.
- parallax. Solution: react-parallax.
- carousel. Solution: react-material-ui-carousel.
- fade in content as it scrolls into view. Solution: a article, IntersectionObserver.

## Further Improvement in the Future

- user account. Solution: next-auth
- edit menu. Solution: nextjs api route and prisma
- menu item independent page. Solution: nextjs dynamic route

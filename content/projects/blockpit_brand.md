---
title: Blockpit Rebranding
subtitle: Explore any website through a lightweight and centralized navigation system
cta: Case Study coming soon
img: blockpit.svg
alt: Article 2
color: 1B1F23
author: 
  name: Choi
  bio: All about Choi and where he works and what he does
  img: https://images.unsplash.com/photo-1534471770828-9bde524ee634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
tags: 
  - nuxtjs
  - web development
---

I had an idea for caching SVG paths. Not the usual kind of async request caching of remote SVGs, but local re-use of DOM elements that have already rendered.

SVG's `<use>` element allows re-use of an existing DOM element, without manually duplicating the node. It works like this:

```html{1,3-5}
<span class="badge-group">
  <span class="badge">⌘</span>
  <span class="badge">k</span>
</span>
```

### Setup

When using an icon set like Feather in React, I prefer to use a <a>higher-order component (HOC)</a> and a generic `Icon` component to render each icon with consistent properties. We'll use this HOC to demonstrate SVG caching:

Each icon is simply the SVG contents wrapped with the HOC:

```js{1,3-5}
const ArrowLeft = withIcon('<path d="M21 12H3m0 0l6.146-6M3 12l6.146 6" />')
```

### Caching

We'll use React context to add an icon cache. First, create a new context and the appropriate hook to access it:

```js{1,3-5}
export const IconCache = React.createContext(null)
export const useIconCache = () => React.useContext(IconCache)
```

Setup the provider at the application root. The cache will be a plain, empty object where each key is the icon string and each value is the cached id.

```js{1,3-5}
const App = () => (
  <IconCache.Provider value={{}}>{/* ... */}</IconCache.Provider>
)
```

Inside of `Icon`, read the cache from context and check if this icon has a cached id. If not, generate the new id and add it to the cache:

Generate a stable id by hashing the icon using the fnv1a 1 algorithm (commonly used in CSS-in-JS libraries) and then converting it to hexadecimal for a smaller string:

```js{1,3-5}
import hash from 'fnv1a'
```

If we have a cached id, we can render the <use> tag instead of inserting the entire icon again. If this icon has not rendered before, wrap it in a group tag and attach the unique id.

### Conclusion

Here's our new `withIcon` HOC with caching:

```js{1,3-5}
import { memo } from 'react'
import hash from 'fnv1a'
export const IconCache = React.createContext({})
export const useIconCache = () => React.useContext(IconCache)
const withIcon = icon => {
  const Icon = props => {
    const { size = 24, color = 'currentColor' } = props
    const cache = useIconCache()
    const cachedId = cache[icon]
    let id
    if (!cachedId) {
      id = 'icon-' + hash(icon).toString(16)
      cache[icon] = id
    }
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke="currentColor"
        style={{
          color
        }}
        dangerouslySetInnerHTML={{
          __html: cachedId
            ? `<use href="#${cachedId}" />`
            : `<g id="${id}">${icon}</g>`
        }}
      />
    )
  }
  return memo(Icon)
}
export default withIcon
```

Rendering the same icon multiple times will reuse existing DOM elements, decreasing the size of your HTML:

```jsx{1,3-5}
/* React */
<IconCache.Provider value={{}}>
  <ArrowLeft />
  <ArrowLeft />
  <ArrowLeft />
</IconCache.Provider>
/* HTML Output:
  <svg>
    <g id="icon-dacb5a47"><path d="M21 12H3m0 0l6.146-6M3 12l6.146 6" /></g>
  </svg>
  <svg>
    <use href="#icon-dacb5a47" />
  </svg>
  <svg>
    <use href="#icon-dacb5a47" />
  </svg>
*/
```

In this example, the cached <span class="badge-group"><span class="badge">⌘</span><span class="badge">k</span></span> version is about 40% fewer characters!

Here's a live demo and the demo source code.
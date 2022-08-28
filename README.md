# front-end_react-js
Practicing in react js
A JavaScript library for building user interfaces

# Server Components
We announced an experimental demo of React Server Components (RSC) in December 2020. Since then we’ve been finishing up its dependencies in React 18, and working on changes inspired by experimental feedback.

In particular, we’re abandoning the idea of having forked I/O libraries (eg react-fetch), and instead adopting an async/await model for better compatibility. This doesn’t technically block RSC’s release because you can also use routers for data fetching. Another change is that we’re also moving away from the file extension approach in favor of annotating boundaries.

We’re working together with Vercel and Shopify to unify bundler support for shared semantics in both Webpack and Vite. Before launch, we want to make sure that the semantics of RSCs are the same across the whole React ecosystem. This is the major blocker for reaching stable.

# Asset Loading
Currently, assets like scripts, external styles, fonts, and images are typically preloaded and loaded using external systems. This can make it tricky to coordinate across new environments like streaming, server components, and more. We’re looking at adding APIs to preload and load deduplicated external assets through React APIs that work in all React environments.

We’re also looking at having these support Suspense so you can have images, CSS, and fonts that block display until they’re loaded but don’t block streaming and concurrent rendering. This can help avoid “popcorning“ as the visuals pop and layout shifts.

# Static Server Rendering Optimizations
Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are great ways to get performance for cacheable pages, but we think we can add features to improve performance of dynamic Server Side Rendering (SSR) – especially when most but not all of the content is cacheable. We’re exploring ways to optimize server rendering utilizing compilation and static passes.

#React Optimizing Compiler
We gave an early preview of React Forget at React Conf 2021. It’s a compiler that automatically generates the equivalent of useMemo and useCallback calls to minimize the cost of re-rendering, while retaining React’s programming model.

Recently, we finished a rewrite of the compiler to make it more reliable and capable. This new architecture allows us to analyze and memoize more complex patterns such as the use of local mutations, and opens up many new compile-time optimization opportunities beyond just being on par with memoization hooks.

We’re also working on a playground for exploring many aspects of the compiler. While the goal of the playground is to make development of the compiler easier, we think that it will make it easier to try it out and build intuition for what the compiler does. It reveals various insights into how it works under the hood, and live renders the compiler’s outputs as you type. This will be shipped together with the compiler when it’s released.

# Offscreen
Today, if you want to hide and show a component, you have two options. One is to add or remove it from the tree completely. The problem with this approach is that the state of your UI is lost each time you unmount, including state stored in the DOM, like scroll position.

The other option is to keep the component mounted and toggle the appearance visually using CSS. This preserves the state of your UI, but it comes at a performance cost, because React must keep rendering the hidden component and all of its children whenever it receives new updates.

Offscreen introduces a third option: hide the UI visually, but deprioritize its content. The idea is similar in spirit to the content-visibility CSS property: when content is hidden, it doesn’t need to stay in sync with the rest of the UI. React can defer the rendering work until the rest of the app is idle, or until the content becomes visible again.

Offscreen is a low level capability that unlocks high level features. Similar to React’s other concurrent features like startTransition, in most cases you won’t interact with the Offscreen API directly, but instead via an opinionated framework to implement patterns like:

Instant transitions. Some routing frameworks already prefetch data to speed up subsequent navigations, like when hovering over a link. With Offscreen, they’ll also be able to prerender the next screen in the background.
Reusable state. Similarly, when navigating between routes or tabs, you can use Offscreen to preserve the state of the previous screen so you can switch back and pick up where you left off.
Virtualized list rendering. When displaying large lists of items, virtualized list frameworks will prerender more rows than are currently visible. You can use Offscreen to prerender the hidden rows at a lower priority than the visible items in the list.
Backgrounded content. We’re also exploring a related feature for deprioritizing content in the background without hiding it, like when displaying a modal overlay.
![React-icon svg](https://user-images.githubusercontent.com/110424000/187058686-eb79329b-ea06-4e0a-add2-17388f72798b.png)

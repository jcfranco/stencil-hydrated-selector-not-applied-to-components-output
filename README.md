### Description

This repo demonstrates a bug where custom hydration styles will not work with the `dist-custom-elements` output target

#### Background

We need an alternative mechanism to apply our custom prehydration styles to avoid flash of unstyled content.

Our current solution consists in disabling the `invisiblePrehydration` Stencil config option and generating a list of selectors that hide components that haven't been hydrated (e.g., `my-button:not([hydrated])`) that get added to the global stylesheet.

#### Fix ideas

* apply the hydrated attribute regardless of output target
* provide a separate mechanism for components to know and style when hydrated or ready

### Steps

#### Working (`dist`) ✅

1. run `npm run working`
2. Notice how `my-component-a` is displayed because the `hydrated` attribute is applied in this case. 

#### Not working (`dist-custom-elements`) ❌

1. run `npm run not-working`
2. Notice how `my-component-a` is not displayed because its hydration style (see `global.css`) depends on the `hydrated` attribute being applied.    

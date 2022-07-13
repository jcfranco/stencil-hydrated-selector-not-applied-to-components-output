### Description

This repo demonstrates a bug where custom hydration styles will not work with the `dist-custom-elements` output target 

### Steps

#### Working (`dist`) ✅

1. run `npm run working`
2. Notice how `my-component-a` is not displayed because its hydration style depends on the `hydrated` attribute being applied.    

#### Not working (`dist-custom-elements`) ❌

1. run `npm run not-working`
2. Notice how `my-component-a` is displayed because the `hydrated` attribute is applied in this case. 

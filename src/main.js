import { setAssetPath } from '../dist/components';
import "../dist/components/my-component-a";
import "../dist/test-stencil-components/test-stencil-components.css";


// assume components have assets
setAssetPath(document.currentScript.src);

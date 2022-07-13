import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-a',
  shadow: true,
})
export class MyComponentA {

  render() {
    return (
      <Host>
        😃
      </Host>
    );
  }

}

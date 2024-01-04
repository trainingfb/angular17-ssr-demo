import { JsonPipe } from '@angular/common';
import { afterNextRender, Component, signal } from '@angular/core';

// DOC:
// https://angular.dev/guide/components/lifecycle#afterrender-and-afternextrender

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1>Demo 3: afterNextRender</h1>
    
    <pre>BETTER APPROACH: use afterNextRender to run code on client</pre>

    <pre>width: {{width() }}</pre>
    
    <em>PROBLEM :  * ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '0'. Current value: '960'. Expression location: _Demo3Component component. Find more at https://angular.io/errors/NG0100</em>
  `,
})
export default class Demo3Component {
  width = signal<number | undefined>(0)
  w = 0;

  constructor() {
    afterNextRender(() => {
      console.log('--------------DEMO3---------------')
      console.log(window.innerWidth)
      console.log('after render - rendered client only')
      this.width.set(window.innerWidth)
    })

    /*
    afterRender(() => {
      console.log('render ')
    })
    */
  }
}

/**
 * PROBLEM
 *
 * ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '0'. Current value: '960'. Expression location: _Demo3Component component. Find more at https://angular.io/errors/NG0100
 */

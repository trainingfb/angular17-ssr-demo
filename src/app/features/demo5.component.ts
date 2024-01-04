import { JsonPipe } from '@angular/common';
import { afterNextRender, Component, inject, signal } from '@angular/core';
import { LocalstorageService } from '../core/localstorage.service';

// DOC
// https://github.com/angular/universal/blob/main/docs/gotchas.md

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1>Demo 5</h1>
    <pre>Use Guards and multiple services</pre>
    
    <pre>{{value() | json}}</pre>
  `,
})
export default class Demo5Component {
  localStorageService = inject(LocalstorageService)
  value = signal<any>(null)

  constructor() {
    console.log('demo5: ', this.localStorageService.getItem('token'))
    this.value.set(this.localStorageService.getItem('token'))

    /*
    afterRender(() => {
      console.log('render ')
    })
    */
  }
}

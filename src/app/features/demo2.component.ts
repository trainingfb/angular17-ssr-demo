import { isPlatformBrowser, JsonPipe } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
   <h1>Demo 2: isPlatformBrowser</h1>

   <pre> use 'isPlatformBrowser' to distingue client and server lifecycle</pre>
   
   <pre>WRONG APPROACH! since creating platform-specific code branches increase the size and the complexity</pre>

   <pre>width: {{width() | json}}</pre>

  `,
})
export default class Demo2Component  {
  platformId = inject(PLATFORM_ID);
  width = signal<number | undefined>(0)

  constructor() {
    // CLIENT ONLY
    if(isPlatformBrowser(this.platformId)) {
      console.log('--------------DEMO2---------------')
      console.log('printed client only')
      console.log(window.innerWidth)
      this.width.set(window.innerWidth)
    }

    // SERVER and CLIENT
    // ❌ WRONG: cannot be done
    // this.width.set(window.innerWidth)
    console.log('printed on server and client')

  }
}

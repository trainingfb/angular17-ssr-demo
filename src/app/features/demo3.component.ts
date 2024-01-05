import { JsonPipe } from '@angular/common';
import {
  afterNextRender,
  AfterRenderPhase,
  Component,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';

// DOC:
// https://angular.dev/guide/components/lifecycle#afterrender-and-afternextrender

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h1>Demo 3: afterNextRender</h1>

    <pre>BETTER APPROACH: use afterNextRender to run code on client</pre>

    <pre>width: {{ width() }}</pre>

    <div #myDiv style="background-color: white;">Initially i have white bg</div>

    <!-- <em
      >PROBLEM : * ERROR Error: NG0100:
      ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after
      it was checked. Previous value: '0'. Current value: '960'. Expression
      location: _Demo3Component component. Find more at
      https://angular.io/errors/NG0100</em
    > -->
  `,
})
export default class Demo3Component {
  @ViewChild('myDiv') myDiv!: ElementRef<HTMLDivElement>;
  width = signal<number | undefined>(0);
  w = 0;

  constructor() {
    // https://angular.io/guide/lifecycle-hooks#reading-and-writing-the-dom
    // le callback dei due cicli di vita girano dopo il prossimo ciclo di CD, quindi settare un valore di una proprietà
    // triggherera l'errore NG0100 poichè Angular ha già fatto il check tramite CD.
    // Gli unici modi per settare e far "ritriggherare" la CD sono i seguenti:
    // - setTimeout()
    // - queueMicrotask()
    // - iniettarsi il ChangeDetectorRef e triggherare a mano la CD (this.cd.detectChanges())
    // questi due cicli di vita non dovrebbero essere usati per settare stati del componente, ma leggere/scrivere direttamente sul DOM
    afterNextRender(() => {
      console.log('--------------DEMO3---------------');
      console.log(window.innerWidth);
      console.log('after render - rendered client only');
      // TODO eventualmente si può pensare di far vedere come evitare quell'errore con questo "trick", ma non viene usato
      // correttamente il ciclo di vita
      queueMicrotask(() => this.width.set(window.innerWidth));
      // TODO hai fini del video/spiegazione scommentare la riga sotto per vedere cosa avviene sul client ed il "corretto" uso
      // pensato per questi cicli di vita
      // debugger
      this.myDiv.nativeElement.style.backgroundColor = 'red';
      this.myDiv.nativeElement.innerText = 'Now i have red bg';
    });
    //
  }
}

/**
 * PROBLEM
 *
 * ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '0'. Current value: '960'. Expression location: _Demo3Component component. Find more at https://angular.io/errors/NG0100
 */

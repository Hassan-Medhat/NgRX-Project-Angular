import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectCount  , selectDoubleCount  } from '../store/counter.selectors';
// import { counterSelector  , counterDoubleSelector} from '../store/counter.selectors';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
// import { StoreInterface } from '../store/counter.actions';


@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {

  count$ : Observable<number> ;
  doubleCount$ : Observable<number> ;
  // count :number;
  // doubleCount :number;

  constructor(private store:Store<{counter: number}>) {

    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);


    // private store:Store<StoreInterface>
    // this.store.select(counterSelector).subscribe(data => this.count = data)
    // this.store.select(counterDoubleSelector).subscribe(data => this.doubleCount = data)
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment , decrement } from '../store/counter.actions';
// import { IncrementAction , DecrementAction } from '../store/counter.actions';



@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css'
})
export class CounterControlsComponent {

  constructor(private store:Store) {}

  increment() {
    this.store.dispatch(increment({value: 1}))


    // this.store.dispatch(new IncrementAction(1))
  }

  decrement() {
    this.store.dispatch(decrement({value: 1}))

    
    // this.store.dispatch(new DecrementAction(1))
  }

}

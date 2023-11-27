import { createAction , props } from "@ngrx/store";
// import { Counter } from "./counter.reducer";

// This is the modren approach

export const increment = createAction(
    '[Counter] Increment' , 
    props<{value :number}>()
)

export const decrement = createAction(
    '[Counter] Decrement' , 
    props<{value :number}>()
)




// This is the old approach


// export interface CustomAction {
//     type :string;
//     payload :number;
// }


// export interface StoreInterface { counter: Counter}


// export const INCREMENT = '[Counter] Increment';

// export const DECREMENT = '[Counter] Decrement';

// export class IncrementAction {
//     type :string = INCREMENT ;
//     payload :number ;

//     constructor(payload :number) {
//         this.payload = payload;
//     }
// }

// export class DecrementAction {
//     type :string = DECREMENT ;
//     payload :number ;

//     constructor(payload :number) {
//         this.payload = payload;
//     }
// }




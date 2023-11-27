import { createReducer, on } from "@ngrx/store";
import { increment  , decrement } from "./counter.actions";
// import { CustomAction , INCREMENT , DECREMENT } from "./counter.actions";

const initialState = 0 ;

export const counterReducer = createReducer(
    initialState,
    on(increment , (state , action) => state + action.value),
    on(decrement , (state , action) => state - action.value)
);




// const initialState =  { n: 0} ;

// export interface Counter { n: number}

// export function counterReducer (state = initialState , action :CustomAction) {
//     switch (action.type) {
//         case INCREMENT :
//             return {n: state.n + action.payload}

//         case DECREMENT :
//             return {n: state.n - action.payload}
        
//         default :
//             return state
//     }
// }

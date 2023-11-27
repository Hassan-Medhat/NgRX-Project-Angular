import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { Counter } from "./counter.reducer";


export const selectCount = (state: {counter:number}) => state.counter

export const selectDoubleCount = createSelector(
    selectCount,
    (state) => state * 2 
)






//  const counterFeatureSelector = createFeatureSelector<Counter>('counter')

//  export const counterSelector = createSelector(
//     counterFeatureSelector , 
//     state => state.n
//  )

//  export const counterDoubleSelector = createSelector(
//     counterFeatureSelector , 
//     state => state.n * 2
//  )


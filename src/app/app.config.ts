import { ApplicationConfig } from '@angular/core';


import { provideClientHydration } from '@angular/platform-browser';
import { provideStore , provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from './store/counter.reducer';
import { CounterEffect } from './store/counter.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideStore(),
    provideState({name: 'counter' , reducer : counterReducer}),
    provideEffects([CounterEffect])
    ]
};

import { Injectable } from "@angular/core";
import { createEffect , Actions, ofType } from "@ngrx/effects";
import { decrement, increment} from "./counter.actions";
import { Store } from "@ngrx/store";
import { tap, withLatestFrom  } from "rxjs";
import { selectCount } from "./counter.selectors";


@Injectable()
export class CounterEffect {
    constructor(private action$:Actions , private store:Store<{counter :number}>) {}

    saveCount = createEffect(
        () => this.action$.pipe(
            ofType(increment , decrement),
            withLatestFrom(this.store.select(selectCount)),
            tap(([counter , action]) => {
                console.log(action);
                localStorage.setItem('count', counter.toString());
            })
        ),
        {dispatch : false}
    )

}


import { Injectable, inject } from '@angular/core';
import { ScreenService } from '../../service/screen.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getAll, getAllFail, getAllSuccess } from './screen.action';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable()
export class ScreenEffect {
  private api = inject(ScreenService);
  action$ = inject(Actions);

  getAll$ = createEffect(() =>
    this.action$.pipe(
      ofType(getAll),
      switchMap((action) =>
        this.api.getAll(action.url).pipe(
          map((res) => getAllSuccess({ screens: res })),
          catchError((error: { message: string }) =>
            of(getAllFail({ errorMessage: 'Fail to load data' + error }))
          )
        )
      )
    )
  );
}

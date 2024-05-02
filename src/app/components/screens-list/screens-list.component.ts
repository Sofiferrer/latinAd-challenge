import { Component, OnInit } from '@angular/core';
import {
  NzTableModule,
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { Screen } from '../../store/model/screen.model';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAll } from '../../store/screen/screen.action';
import { query } from 'express';

export interface QueryParam {
  pageSize: number;
  offset: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-screens-list',
  standalone: true,
  imports: [NzTableModule, NzDropDownModule, FormsModule],
  templateUrl: './screens-list.component.html',
  styleUrl: './screens-list.component.css',
})
export class ScreensListComponent implements OnInit {
  screens$!: Observable<Screen[]>;
  queryParams: QueryParam = {
    pageSize: 0,
    offset: 0,
    name: 'nombre',
    type: 'outdoor',
  };
  constructor(private store: Store) {
    this.store.dispatch(
      getAll({
        url: 'https://challenge-front-7fw1.onrender.com/display?pageSize=10&offset=0',
      })
    );
  }

  ngOnInit(): void {}

  // name: string;
  // description: string;
  // picture_url: string;
  // user_id: number;
  // price_per_day: number;
  // resolution_height: number;
  // resolution_width: number;
  // type: string;
}

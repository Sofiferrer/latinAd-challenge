import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  baseURL = 'https://challenge-front-7fw1.onrender.com/';
  constructor(private http: HttpClient) {}

  getAll(url: string) {
    return this.http.get<Screen[]>(url);
  }

  getById(id: string) {
    return this.http.get(`${this.baseURL}display/${id}`);
  }
}

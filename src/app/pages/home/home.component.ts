import { Component } from '@angular/core';
import { ScreensListComponent } from '../../components/screens-list/screens-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScreensListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

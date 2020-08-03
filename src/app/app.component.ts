import { Component, OnInit } from '@angular/core';
import * as fromRoot from './store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit(): void {

  }

}

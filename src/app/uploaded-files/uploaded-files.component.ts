import { Component, OnInit } from '@angular/core';
import * as rootReducer from '../store/app.reducer';
import * as fromRoot from '../store';
import * as actions from '../store/app.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.scss']
})
export class UploadedFilesComponent implements OnInit {

  files: rootReducer.JSONFileModel[];
  selectedFile$: Observable<rootReducer.JSONFileModel>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(fromRoot.getFiles)).subscribe(files => {
      this.files = files;
    });

    this.selectedFile$ = this.store.pipe(select(fromRoot.getSelectedFile));
  }

  changeSelectedLanguage(file: rootReducer.JSONFileModel) {
    this.store.dispatch(actions.setSelectedFile({file}));
  }

}

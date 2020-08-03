import { Component, OnInit } from '@angular/core';
import * as actions from '../store/app.actions';
import * as rootReducer from '../store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  constructor(private store: Store<rootReducer.State>) {}

  ngOnInit(): void { }

  handleFileInput(files: FileList) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsText(files.item(i));
      fileReader.onloadend = () => {
        this.dispatchAdd(files.item(i).name, fileReader.result);
      };

    }
  }

  dispatchAdd(name: string, content: any) {
    this.store.dispatch(
      actions.addFile({
        file: {
          name,
          content: content as rootReducer.JSONContentModel
        },
      })
    );
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UploadedFilesComponent } from './uploaded-files/uploaded-files.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
  declarations: [
    AppComponent,
    JsonEditorComponent,
    FileUploadComponent,
    UploadedFilesComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    StoreModule.forRoot(fromRoot.reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

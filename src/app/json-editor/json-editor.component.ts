import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent implements OnInit {

  fileContent: string;
  editorOptions = {theme: 'vs-dark', language: 'json'};

  @Input()
  set code(code: string) {
    this.fileContent = code;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

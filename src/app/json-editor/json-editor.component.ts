import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent implements OnInit {

  @Output() jsonEmitter = new EventEmitter<string>();
  str: string;

  constructor() { }

  ngOnInit(): void {
    this.str = JSON.stringify({
      key: 'value',
      foo: 'bar'
    }, null, '\t');
    this.emitValue();
  }

  emitValue() {
    console.log(this.str);
    this.jsonEmitter.emit(this.str);
  }

}

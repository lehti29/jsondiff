import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  leftJSON: string;
  rightJSON: string;
  comparisonMade: boolean;
  noMatches: INoMatches[];

  saveJSON(jsonString: string, txtArea: string) {
    if (txtArea === 'left') {
      this.leftJSON = jsonString;
    } else {
      this.rightJSON = jsonString;
    }
  }

  compare() {
    this.noMatches = [];
    const leftKeys = Object.keys(JSON.parse(this.leftJSON));
    const rightKeys = Object.keys(JSON.parse(this.rightJSON));

    console.log('starting...');
    console.log(leftKeys, rightKeys);

    leftKeys.forEach(key => {
      if (!rightKeys.includes(key)) {
        this.noMatches.push({ key, existsIn: JsonFile.Left });
      }
    });

    rightKeys.forEach(key => {
      if (!leftKeys.includes(key)) {
        this.noMatches.push({ key, existsIn: JsonFile.Right });
      }
    });
  }
}

interface INoMatches {
  key: string;
  existsIn: JsonFile.Left | JsonFile.Right;
}

enum JsonFile {
  Left = 'left',
  Right = 'right'
}

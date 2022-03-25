import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-change-font-size';
  // Truyền dữ liệu từ cha xuống con
  Counter = 5;

  increment() {
    if (this.Counter < 10){
      this.Counter++
    }
  }

  decrement() {
    if (this.Counter > 0) {
      this.Counter--;
    }
  }

  // Truyền dữ liệu từ con lên cha

  countParent: number | undefined;
  countChange(count: number) {
    this.countParent = count;
  }
}

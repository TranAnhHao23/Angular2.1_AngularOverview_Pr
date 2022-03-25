import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Truyền dữ liệu từ cha xuống con
  @Input()
  count: any; // ở đây có thể tạo kiểu dữ liệu any - hoặc number | undefined
  constructor() {
  }

  // Truyền dữ liệu từ con lên cha

  count2 = 5;

  @Output()
  countParent: EventEmitter<number> = new EventEmitter<number>();

  addOne() {
    if (this.count2 < 10) {
      this.count2++;
      this.countParent.emit(this.count2);
    }
  }

  minusOne() {
    if (this.count2>0){
      this.count2--;
      // @ts-ignore
      this.countParent.emit(this.count2);
    }
  }

  ngOnInit(): void {
  }

}

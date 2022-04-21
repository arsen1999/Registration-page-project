import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'app-select-drop-down',
  templateUrl: './select-drop-down.component.html',
  styleUrls: ['./select-drop-down.component.scss']
})
export class SelectDropDownComponent implements OnInit {

  @Input('data') dropData: Array<any>;
  @Input('TitleDrop') DropTitle: string;
  @Input('statusSearch') statusSearch = true;
  public open = false;
  public searchText = '';

  @ViewChild('drop') dropDown: ElementRef<HTMLDivElement>;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  public onClick(event: Event) {
    if (event.target === this.dropDown.nativeElement) {
      this.open = !this.open;
    } else {
      this.open = this.elRef.nativeElement.contains(event.target) ? this.open : false;
    }
  }

}

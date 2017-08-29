import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  selector: 'app-prime-table-select',
  templateUrl: './prime-table-select.component.html',
  styleUrls: ['./prime-table-select.component.scss']
})
export class PrimeTableSelectComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onChange() {
    this.rowData.selected = !this.rowData.selected;
    this.save.emit(this.rowData);
  }
}

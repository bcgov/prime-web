import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  constructor() { }

  // The Ides of March!
  public demoDate = {year: 2018, month: 3, day: 15}

  ngOnInit() {
  }

  ngOnChanges(ev){
    console.log('DemoPage, ngOnChanges', ev);
  }



  // ngDoCheck(ev){
  //   console.log('DemoPage, ngDoCheck', ev, this.demoDate);
  // }

}

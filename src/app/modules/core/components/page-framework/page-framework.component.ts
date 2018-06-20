import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'prime-page-framework',
  templateUrl: './page-framework.component.html',
  styleUrls: ['./page-framework.component.scss']
})
export class PageFrameworkComponent implements OnInit {

  titles: Title[];

  constructor(private elem: ElementRef) { }

  ngOnInit(){
    let elements = this.elem.nativeElement.querySelectorAll('.prime-title');
    this.titles = this.processTitlesFromElements(elements);
  }

  processTitlesFromElements(elements): Title[]{
    return Array.from(elements).map((el: any) => {
      return {
        href: el.id,
        name: el.innerText
      }
    })
  }

  scrollTo(id: string){
    return document.getElementById(id).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

}

interface Title {
  href: string;
  name: string;
}

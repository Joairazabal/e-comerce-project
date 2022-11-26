import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-genre',
  templateUrl: './section-genre.component.html',
})
export class SectionGenreComponent implements OnInit {

  @Input()
  title!: string;
  @Input() subtitle!:string;
  @Input() img!:string;
  @Input() router!:string;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}

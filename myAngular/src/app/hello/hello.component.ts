import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnInit {

  constructor() { }

  name = 'qy';
  date: Date = new Date();
  box = 'div-dom';
  itemClass = 'item-p';
  h3Dom = true;
  h3MuDom = 'h3-dom font-w string';
  isActive = true;
  isMax = true;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less'],
})
export class HelloComponent implements OnInit {
  constructor() {}

  name = 'qy';
  date: Date = new Date();
  box = 'div-dom';
  itemClass = 'item-p';
  h3Dom = true;
  h3MuDom = 'h3-dom font-w string';
  isActive = true;
  isMax = true;
  colors = ['red', 'blue', 'yellow', 'green'];
  type = 3;
  title = '';
  age = new FormControl('');
  loginForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
  });

  ngOnInit(): void {}

  clickFun(e: Event) {
    console.log(e);
    alert('你点击了按钮');
  }

  inputChange(e: any) {
    console.log(e.target.value);
  }

  getUserName(v: string) {
    console.log(v);
  }

  ageChangeFun() {
    this.age.setValue(18);
  }

  subFormFun() {
    console.log(this.loginForm.value);
  }
}

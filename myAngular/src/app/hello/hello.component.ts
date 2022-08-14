import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less'],
})
export class HelloComponent implements OnInit {
  // 构造函数中注入FormBuilder
  constructor(private formBuilder: FormBuilder) {
  }

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
  formData = {
    name: '',
    password: ''
  };

  // 错误提醒数据
  formErrors = {
    tittle: '',
    content: ''
  };

  ngOnInit(): void {
  }

  clickFun = (e: Event) => {
    console.log(e);
    alert('你点击了按钮');
  }

  inputChange = (e: any) => {
    console.log(e.target.value);
  }

  getUserName = (v: string) => {
    console.log(v);
  }

  ageChangeFun = () => {
    this.age.setValue(18);
  }

  subFormFun = () => {
    console.log(this.loginForm.value);
  }

  subBtnFun = (obj: any) => {
    console.log(obj);
  }
}

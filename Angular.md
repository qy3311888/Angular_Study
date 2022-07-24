# Angular

## 1. Angular CLI

​		Angular框架的脚手架（一行命令构建框架）

​		Angular CLI依赖于 NodeJs 和 npm

```
// 安装脚手架
npm install -g angular-cli
// 创建项目
ng new project_name
// 启动项目
cd project_name
ng serve --open
```



### 主要特性

1. 快速搭建框架
2. webpack，代码分割，按需加载



## 2. 主要文件结构

### /src

​		项目目录

### /src/app

- app-routing.module.ts  项目路由配置文件
- app.component.html  app组件的模板文件
- app.component.less  app组件的样式文件
- app.component.spec.ts  app组件的测试文件
- app.component.ts  app组件核心文件，写js的地方
- app.moudule.ts  项目中所有组件的入口

### index.html

​		项目中只会有一个，因为Angular最终只会构建成一个页面

### main.ts

​		项目的入口文件

### style.less

​		项目默认的样式文件



## 3. 架构

### 3.1 模块

​		模块组件的特征在于可以用于执行单个任务的代码块；

### 3.2 创建组件

```shell
ng generate component <component-name>
// 快速创建
ng g c name
```

```typescript
// Component：装饰器，声明这是一个组件
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
```

### 3.3 插值语法

```html
<p>{{ name + '，你好'}}</p>
<p>{{ 1 + 1 }}</p>
<p>{{ name ? 1 + 1 : name}}</p>
```



### 3.4 属性绑定

#### 3.4.1 Attribute绑定

```html
<div [id]="'box'">
    属性绑定
</div>
<div [id]="box">
    属性绑定-变量
</div>
```



#### 3.4.2 类绑定

```html
<p [class] = "'item'">class绑定</p>
<p [class] = "itemClass">class绑定</p>
<h3 [ngClass]="{'active': isActive}">ngClass绑定</h3>
```



#### 3.4.3 样式绑定

```html
<h3 [style.color]="'red'">单一样式绑定</h3>
<h3 [style]="'background: red; color: #fff'">多样式绑定</h3>
<h3 [ngStyle]="{'color': 'blue'}">ngStyle样式绑定</h3>
```



#### 3.4.4 条件判断

​		***ngIf** 直接影响元素是否被渲染，而非控制元素的显示和隐藏

```html
<div *ngIf="isMax">
    isMax == true
</div>
<div *ngIf="!isMax">
    isMax == false
</div>
```



#### 3.4.5 循环语句

##### 		***ngFor** 

```html
<div *ngFor="let item of colors; let i = index; let isOdd = odd">
  {{ odd }}
  {{ i }}
  {{ color }}
</div>
```

##### 		***ngSwitch**

```html
<div [ngSwitch]="type">
  <p *ngSwitchCase="1">
    type = 1
  </p>
  <p *ngSwitchCase="2">
    type = 2
  </p>
  <p *ngSwitchDefault>
    type != 1 && type != 2
  </p>
</div>
```



#### 3.4.6 事件绑定

​		Angular的事件绑定语法由等号**左侧括号内的目标事件**和**右侧引号内的模板语句**组成；目标事件名是`click`，模板语句是`onSave()`

​		事件对象通过`$event`传递

```html
<button (click)="onSave($event)">
    Save
</button>

<input type="text" (input)="inputChange($event)" />
```



#### 3.4.7 模板引用变量

​		用 **#** 来标记

```html
<div #box>
  <input #userName type="text" name="" id="">
</div>
<button (click)="getUserName(userName.value)">获取UserName</button>
```



#### 3.4.8 双向绑定

​		双向绑定是应用中的组件共享数据的一种方式；使用双向绑定来侦听事件并再父组件和子组件之间同步更新值；

​		***ngModel**只对**表单元素**有效，所以使用之前需要导入`FormsModule`模块

```html
<input [(ngModel)]="title" type="text">
<p>标题 : {{ title }}</p>
```

```typescript
title = '';
```



#### 3.4.9 表单控件

```html
<input type="text" [formControl]="age" />
<br />
<p>年龄 : {{ age.value }}</p>
<button (click)="ageChangeFun()">长大</button>
```

```typescript
import { FormControl } from '@angular/forms';

age = new FormControl('');

ageChangeFun() {
    this.age.setValue(18)
}
```



#### 3.4.10 表单控制分组

```html
<form [formGroup]="loginForm">
  <label>
    账号：
    <input type="text" formControlName="userName" />
  </label>
  <label>
    密码：
    <input type="text" formControlName="passWord" />
  </label>

  <button (click)="subFormFun()">提交</button>
</form>
```

```typescript
import { FormControl, FormGroup } from '@angular/forms';

loginForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
});

subFormFun() {
    console.log(this.loginForm.value);
}
```


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  // 声明组件内用到的视图
  declarations: [
    AppComponent,
    HelloComponent
  ],
  // 声明组件需要用到的类
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // 全局服务
  providers: [],
  // 根组件
  bootstrap: [AppComponent]
})
export class AppModule { }

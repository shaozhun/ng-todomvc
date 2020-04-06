import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  // 组装模块资源： 组件，指令，服务
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //指定启动组件，指定哪个模块为入口
})
export class AppModule { }

import { Component } from '@angular/core';

const todos = [{
  id: 1,
  title: '吃饭',
  done: true
}, {
  id: 2,
  title: '睡觉',
  done: true
}, {
  id: 3,
  title: '写代码',
  done: true
}]
// 在angular中，组件就是一个类

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '',
  styleUrls: ['./app.component.css']
})

// 在vue中，组件有自己的data和methods等选项
export class AppComponent {
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = todos;
  addTodo(e): void {
    const titleText = e.target.value
    if (!titleText.length) {
      return
    }
    const last = this.todos[this.todos.length - 1]
    this.todos.push({
      id: last ? last.id + 1 : 1,
      title: titleText,
      done: false
    })
    e.target.value = ''  //清除文本框
  }
}

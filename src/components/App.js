import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: '',
    todos: [
      { id: 0, text: '첫번째 일정 입니다.', done: true },
      { id: 1, text: '두번째 일정 입니다.', done: false }
    ]
  };

  onChangeHandler = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  id = 1;
  getId = () => ++this.id;

  dataInsertHandler = () => {
    const { todos, input } = this.state;

    if (input) {
      const newTodos = [
        ...todos,
        {
          id: this.getId(),
          text: input,
          done: false
        }
      ];

      this.setState({
        todos: newTodos,
        input: ''
      });
    }
  };

  render() {
    const { input, todos } = this.state;
    const { onChangeHandler, dataInsertHandler } = this;

    return (
      <PageTemplate>
        <InputTodo
          onChange={onChangeHandler}
          value={input}
          onInsert={dataInsertHandler}
        />
        <TodoList todos={todos} />
      </PageTemplate>
    );
  }
}

export default App;

import logo from './logo.svg';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import './App.css'
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm/>
      <DisplayTodos/>
    </div>
  );
}

export default App;

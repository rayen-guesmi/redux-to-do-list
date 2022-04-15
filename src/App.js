
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todolist from './components/Todolist/Todolist';

function App() {
  return (
    <div  className="app">
      <header className="app-header">
     <AddTodo/>
     <Todolist/>
     </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AddTodo from './components/addTodo';
import Todos from './components/Todo';
import { BioProvider } from './ContextApi';
import { Home } from './ContextApi/Home';
function App() {
  return (
   <>
   <h1>Maaz KAmran</h1>
   <AddTodo/>
   <Todos/>
   <BioProvider>
    <Home/>
   </BioProvider>
   </>
  );
}

export default App;

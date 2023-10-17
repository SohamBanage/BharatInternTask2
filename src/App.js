import logo from './logo.svg';
import './App.css';

import SocialMediaFeed from './components/SocialMediaFeed';
import TaskAssignment from './components/TaskAssignment';
function App() {
  return (
    <div className="App">
      <h1>PROJECT MANAGEMENT SYSTEM </h1>
      <SocialMediaFeed/>
      <TaskAssignment/>
    </div>
  );
}

export default App;

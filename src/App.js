import './App.css';
import MessageCard from './components/MessageCard.jsx';

import MessageList from './components/MessageList.jsx';
import MessagePost from './components/MessagePost.jsx';

function App() {
  return (
    <div className="App">
      <>
      <p>Title</p>
      <MessageList />
      <MessagePost />
      </>
    </div>
  );
}

export default App;

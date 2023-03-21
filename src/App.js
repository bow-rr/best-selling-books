import logo from './logo.svg';
import './App.css';
import BookList from './BookList';

function App() {
  return (
    <div className='App'>
      <h1>Top 3 Best Selling Books in March 2023</h1>
      <BookList />
    </div>
  );
}

export default App;

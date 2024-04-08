import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Todo from './Todo';
import Animal from './Animal';
import Friend from './practice/과제1_Friends';
import Person2 from './practice/과제2_Person';
import Book from './practice/과제3_Book';
import Animal2 from './practice/과제4_Animal';

function App() {
  return (
    <div className="App">
      {/* <Person name="syleemomo" age="3"></Person>
      <Todo user="syleemomo" age="37" name="cleaning" done={false} discription="cleaning my room"></Todo>
      <Animal></Animal> */}
      {/* <Friend name = 'victoria' age = '13' city = 'seoul'></Friend>
      <Friend name = 'sun' age = '34' city = 'busan'></Friend>
      <Friend name = 'johseb' age = '25' city = 'busan'></Friend>
      <Friend name = 'syleemomo' age = '9' city = 'seoul'></Friend>
      <Friend name = 'hannah' age = '41' city = 'daegu'></Friend>
      <Friend name = 'shara' age = '37' city = 'seoul'></Friend>
      <Friend name = 'martin' age = '28' city = 'daegu'></Friend>
      <Friend name = 'gorgia' age = '39' city = 'seoul'></Friend>
      <Friend name = 'nana' age = '24' city = 'busan'></Friend>
      <Friend name = 'dannel' age = '19' city = 'seoul'></Friend> */}
      {/* <Person2></Person2> */}
      {/* <Book></Book> */}
      <Animal2 type = 'cat'
      name = 'meyow'
      size = 'small'
      sound = 'low'
      appearence = 'cute'></Animal2>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navcheck';
import { Book } from './Card';
import { BIO } from './Myself';
import { City } from './MyCity';
import { FamousP } from './Person';
import { FavouriteBook } from './MyBook';
import { FavouriteGroup } from './MusicGroup';
import { Recipes } from './Recipe';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Book></Book>
      <BIO></BIO>
      <City></City>
      <FamousP></FamousP>
      <FavouriteBook></FavouriteBook>
      <FavouriteGroup></FavouriteGroup>
      <Recipes></Recipes>
    </div>
  );
}

export default App;

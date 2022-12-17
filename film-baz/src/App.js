import "./App.css";
import { BrowserRouter, json, Link, Outlet, Route, Routes } from "react-router-dom";
import { useContext, useEffect , useId, useState} from "react";
import HomePage from "./components/HomePage/HomePage";
import Movie from "./components/HomePage/Movie";
import NotFound from "./components/NotFound";
import Register from "./components/Register/Register";

import { DbContex } from "./components/Context/Contex";
import Login from "./components/Register/Login";
import Layout from "./components/Layout/Layout";

import About from "./components/About";
import Profile from "./components/Profile";
import Panel from "./components/PanelComponents/Panel";
import Singin from "./components/Register/Singin";
import PanelLayout from "./components/PanelLayout/PanelLayout";
import AddFilms from "./components/PanelComponents/AddFilms";
import Users from "./components/PanelComponents/Users";
import Categories from "./components/PanelComponents/Categories";
import Films from "./components/PanelComponents/Films";
import Contact  from "./components/Contact";
import Edit from './components/PanelComponents/Edit'
import { dblClick } from "@testing-library/user-event/dist/click";
// import Login1 from "./components/Register/Login1";
// import singin1 from "./components/Register/singin1";
const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3,9)}`;
// console.log(UID());
const defaultValueDb ={ movies: [
  {
    movie: "Harry Potter and the Sorcerer's Stone",
    id: 1,
    isSelected: true,
    movieImag: "/MovieImage/hp1.jpg",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieDetail: `A boy with magical powers
      `,
    trailer: "/MovieTrailer/hp-1.mp4",
    movieStory:
      "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.",
      genre:'Mysterious, fantasy',
  },
  {
    movie: "Harry Potter and the Chamber of Secrets",
    id: 2,
    isSelected: true,
    movieImag: "/MovieImage/hp2.jpg",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieDetail: "A boy with magical powers",
    movieStory: `
    Harry Potter is starting his second year at Hogwarts School of Witchcraft and Wizardry, but there is a mysterious creature waiting for him at school, when evil voices are heard from the walls, and terrible accidents are happening at Hogwarts`,
    trailer: "/MovieTrailer/hp2.mp4",
    genre:'Mysterious, fantasy',

  },
  {
    movie: "Harry Potter and the Prisoner of Azkaban",
    id: 3,
    isSelected: true,
    movieImag: "/MovieImage/hp3.jpg",
    movieDetail: "A boy with magical powers",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieStory:
      "So the strange events of the last few years have brought about a new danger to the world of witches, a dangerous magician's escape from Azkaban",
    trailer: "/MovieTrailer/hp3.mp4",
    genre:'Mysterious, fantasy',

  },
  {
    movie: "Harry Potter and the Goblet of Fire",
    id: 4,
    isSelected: true,
    movieImag: "/MovieImage/hp4.jpg",
    movieDetail: "A boy with magical powers",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieStory:
      "Harry, in his fourth year of the school, had mysteriously been selected for a most dangerous race among the three wizarding schools",
    trailer: "/MovieTrailer/hp4.mp4",
    genre:'Mysterious, fantasy',

  },
  {
    movie: "Harry Potter and the Order of the Phoenix",
    id: 5,
    isSelected: true,
    movieImag: "/MovieImage/hp5.jpg",
    movieDetail: "A boy with magical powers",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieStory:
      "Now, the fifth year at Hogwarts is over, and he is preparing for a preliminary witch exam, while the Minister of Magic insists that Lord Voldemort's return is still behind.",
    trailer: "/MovieTrailer/hp5.mp4",
    genre:'Mysterious, fantasy',
    
  },
  {
    movie: "Harry Potter and the Half-Blood Prince",
    id: 6,
    isSelected: true,
    movieImag: "/MovieImage/hp6.jpg",
    movieDetail: "A boy with magical powers",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieStory:
      "Harry Potter is studying at Hogwarts in the sixth year, he finds the second - hand Potions book, its previous owner, the Prince of Wales's, the only one Harry has ever had in his life, devoted to Dumbledore, who has been studying Lord Voldemort's diary.",
    trailer: "/MovieTrailer/hp6.mp4",
    genre:'Mysterious, fantasy',

  },
  {
    movie: `Harry Potter and the Deathly Hallows(Part1)`,
    id: 7,
    isSelected: true,
    movieImag: "/MovieImage/hp7.jpg",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieDetail: "A boy with magical powers",
    movieStory:
      "Voldemort is stronger, his power is growing, the Ministry of Magic and Hogwarts is currently in control of him. but for these three, and the rest of the wizarding world, there is little hope left.",
    trailer: "/MovieTrailer/hp7.mp4",
    genre:'Mysterious, fantasy',

  },
  {
    movie: `Harry Potter and the Deathly Hallows(Part2)`,
    id: 8,
    isSelected: true,
    movieImag: "/MovieImage/hp7.jpg",
    actors: "Emma Watson,Ben Borowiecki, Daniel Radcliffe, Derek Deadman",
    director: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
    movieDetail: "A boy with magical powers",
    movieStory:
      "The last of Harry Potter's movies to reach the spot where Harry, Ron, and Hermione had set off in search of and destroy three remaining Horcruxes, Master of the Dark Side, the magical charm that had given him an eternity of his life. But by the appearance of the matches making their lives known to Lord Voldemort, he had no idea of their ultimate goal.",
    trailer: "/MovieTrailer/hp8.mp4",
    genre:'Mysterious, fantasy',

  },
  {
    movie: "Fantastic Beast",
    id: 9,
    isSelected: true,
    movieImag: "/MovieImage/fantastic.jpg",
    movieDetail: "newt scamander 1Protecting scarce animals",
    movieStory:
      "In mid-1920s New York, Newt Scamander, a British young activist wizard, arrives in the city, holding a mysterious leather suitcase sheltering diverse and magical creatures. Then, in the face of a fragile equilibrium of secrecy and the increasing disasters ascribed to the dark wizard Gellert Grindelwald, Newt's precious suitcase suddenly goes missing. And before long, this unforeseen complication catches Senior Auror Percival Graves' attention. Now, Newt is his target as an invisible, devastating, and unpredictable menace still wreaks havoc on 5th Avenue. In the end, is there a hidden agenda behind Graves' intentions? What will happen to the remaining fantastic beasts still on the loose?",
    actors: ` Eddie Redmayne,Katherine Waterston,Dan Fogler,Alison Sudol,Ezra Miller,Samantha Morton,Jon Voight,Carmen Ejogo,Ron Perlman`,
    director: "David Yates",
    trailer: "/MovieTrailer/FantasticBeast.mp4",
    genre:'Mysterious, fantasy',

  },
  {
    movie: "Van Helsing ",
    
    id: 10,
    isSelected: true,
    movieImag: "/MovieImage/van.jpg",
    movieDetail:
      "The famed monster hunter is sent to Transylvania to stop Dracula",
    actors: `	
    Hugh Jackman,Kate Beckinsale,Richard Roxburgh,David Wenham,Will Kemp,Kevin J. O'Connor,Shuler Hensley`,

    director: "Stephen Sommers",
    movieStory: `The film is a homage and tribute to the Universal Horror Monster films from the 1930s and 1940s (also produced by Universal Pictures which were in turn partially based on novels by Bram Stoker and Mary Shelley), of which Sommers is a fan.
    The eponymous character was inspired by the Dutch vampire hunter Abraham Van Helsing from Irish author Bram Stoker's novel Dracula. Distributed by Universal Pictures, the film includes a number of monsters such as Count Dracula (and other vampires), Frankenstein's monster, Duergar, Mr. Hyde and werewolves in a way similar to the multi-monster movies that Universal produced in the 1940s, such as Frankenstein Meets the Wolf Man, House of Frankenstein and House of Dracula.`,
    trailer: "/MovieTrailer/vanhelsing.mp4",
    genre:'Mysterious, horror',

  },
  {
    movie:'Fantastic Beasts: The Secrets of Dumbledore',
    id:11,
    isSelected:true,
    movieImag:'/MovieImage/fantastic2.jpg',
    movieDetail: "newt scamander 1Protecting scarce animals",
    actors:'Alison Sudol، Callum Turner، Cara Mahoney',
    director:'David Yates',
    movieStory:`In Fantastic Beasts 3 Dumbledore's Mysteries: Several years after the events of the second film, Professor Albus Dumbledore learns that Gellert Grindelwald, the powerful dark wizard, is out to dominate the wizarding world. Unable to stop him on his own, he entrusts magical zoologist Newt Scamander to lead a daring group of wizards, witches and a muggle pastry chef on a dangerous mission to`,
    trailer:'/movieTrailer/fantastic2.mp4',
    genre:'Mysterious, fantasy',

  },
],
Users:[{
firstName: 'abolfazl', 
password: '1231',
email:'abolfazl@gmail.com',
isAdmin:true,
phone:'09192269770',
id:UID(),
}
],
currentUser:[],
  //data ha inja biad
}
console.log(defaultValueDb)
function App() {
  const Db = useContext(DbContex);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const x = localStorage.getItem('dataBase');
    const y = x ? JSON.parse(x): defaultValueDb;
    Db.setList(y)
    setLoading(false)

  }, []);


  if (loading) return <h1> loading ... </h1>




  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Profile/:id" element={<Profile />} />
          </Route>

          <Route exact path="/Register" element={<Layout />}>
            <Route path="/Register" element={<Register />} />
            <Route path="/Register/log-in" element={<Login />} />
            <Route path="/Register/sing-in" element={<Singin />} />
          </Route>

          <Route exact path="admin" element={<PanelLayout />}>
            <Route path="/admin/Panel" element={<Panel />} />
            <Route path="/admin/AddFilms" element={<AddFilms />} />  
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/Categories" element={<Categories />} />
            <Route path="/admin/edit/:id" element={<Edit/>} />
            <Route path="/admin/Films" element={<Films />} />
            {/*  factor <Route /> */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
// for dynamic link api ==> <Link to="/movie/:id">Movie</Link>;

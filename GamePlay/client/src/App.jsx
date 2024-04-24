import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import GameList from "./components/gameList/GameList.jsx";
import GameCreate from "./components/gameCreate/gameCreate.jsx";



function App() {

  return (
      <div id="box">
          <Header/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/games' element={<GameList />} />
            <Route path='/games/create' element={<GameCreate />}/>
        </Routes>

      </div>
  )
}

export default App

import React ,{ useState } from 'react'
import './App.css'
import Movie from './components/Movie';
import Header from './components/Header';
import { AnimatePresence, motion } from "framer-motion";


function App() {
  const [popular, setPopular] = useState([])
  const [filterList, setFilterList] = useState([])
  const [active, setActive] = useState(0)

  React.useEffect(()=>{
fetchPopular();
  },[])

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBiNTljMjMzNTM1YWUzMWNiN2RjZWMwMWJhMDM2ZCIsInN1YiI6IjVmYzRiMmRiM2EzNDBiMDAzZWUwMTRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uxGhDBUh82zz4wcD5Td_hMosU4-QIM68KSFQEfMjQqE",
    },
  };

  const fetchPopular = async()=>{
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {setPopular(response?.results);setFilterList(response?.results);})
      .catch((err) => console.error(err));
  }

  return (
    <motion.div animate className="App">
      <Header
        popular={popular}
        setFilterList={setFilterList}
        setActive={setActive} 
        active={active}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
        {filterList?.map((movie) => (
          <Movie key={movie?.id} movie={movie} />
        ))}

        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default App

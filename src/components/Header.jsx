import React,{useEffect} from 'react'


const Header = (props) => {
    const {popular,
setFilterList,active,
setActive} =props;

useEffect(() => {
  if(active== 0){
    setFilterList(popular)
    return
  }else{
    console.log(popular,"test22")
      const filteredValue = popular.filter((movie) =>
        movie?.genre_ids?.includes(active)
      );
      console.log(filteredValue,"test")
    
     setFilterList(filteredValue)

  }

}, [active])


console.log(active,"test")

useEffect
  return (
    <div className="filter-container">
      <button onClick={() => setActive(0)}>Popular</button>
      <button onClick={() => setActive(12)}>Adventure</button>
      <button onClick={() => setActive(28)}>Action</button>
    </div>
  );
}

export default Header
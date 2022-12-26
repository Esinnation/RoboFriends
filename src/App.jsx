import { useState,useEffect } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import "./app.css"
import Scroll from './Scroll'

function App(props) {
  const [search,setSearch]= useState({
    robots:[],
    searchField:'' 
  })

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data => setSearch(prevSearch=>{
    return {
      ...prevSearch,
      robots:data
    }
  }))

},[])
function onSearchChange(event){
  setSearch(pevState=> {
    return {
      ...pevState,
      searchField:event.target.value
    }
  } ) 
  
}
const filteredRobot=search.robots.filter(robot=> {
  const nam= robot.name.toLowerCase().includes(search.searchField.toLowerCase())
  const mail=robot.email.toLowerCase().includes(search.searchField.toLowerCase())
  return (nam || mail)
})
if (search.robots.length===0){
  return <h1 className='text-center font-200 text-[#0ccac4] text-4x'>Loading....</h1>
}else{
  
  return (
    <div className="text-center ">
      <h1 className='font-200 text-[#0ccac4] text-4xl'>RoboFriends</h1>
      <SearchBox onChange={onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobot}/> 
      </Scroll>
    </div>
  )
}
}
export default App
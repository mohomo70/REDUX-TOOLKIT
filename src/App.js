import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import {getPosts} from './postsSlice'

function App() {
 const {posts,error,loading} = useSelector((state)=>(state.posts))
 const [psts,setPsts] = useState([])
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(getPosts())
  setPsts(posts)
 },[dispatch])
 console.log(psts)
 return(
  <>
    {loading && <div>loading</div>}
    {psts.map(p => <button style={{display:'flex'}}>{p.id}{p.title}</button>)}
  </>
 )
}

export default App;

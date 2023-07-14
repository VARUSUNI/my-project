import { Profile } from "./Profile"

export default function Gallery(props){
    // console.log(props)
  const detailes={
    name:'Darshan',
    age:25,
    city:'DVG'
  }


    return(
       <>

       <h1>Gallery design</h1>
       <Profile detail={detailes} {...props}/>
       
       </> 
    )
}
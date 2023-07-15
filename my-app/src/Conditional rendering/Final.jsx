import Cad2 from "./Cad2"
import Card1 from "./Card1"


export default function Final(props){
// console.log(props.one)
return(
    <>
    <Card1 two={props.one}/>
    <Cad2 three={props.one}/>

    </>
)
}
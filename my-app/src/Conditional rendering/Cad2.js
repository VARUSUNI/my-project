export default function Cad2(props){
    let value=props.three[1]
    console.log(value)
    return(
        <div>
         <img src={value.img} height={value.height} width={value.width}/>
         <div>{value.name}</div>
         <div>{value.city}</div>
            <div>{value.profession}</div>
        </div>
    )
}
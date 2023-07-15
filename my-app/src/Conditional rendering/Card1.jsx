export default function Card1(props){
    // console.log(props.two)
    let value = props.two[0]
    // console.log(value)
    // let avn = props
    // console.log(props.one.one)
    return(
        <div>
            <img src={value.img} height={value.height} width={value.width} alt={value.name}/>
            <div>{value.name}</div>
            <div>{value.city}</div>
            <div>{value.profession}</div>
        </div>
    )
}
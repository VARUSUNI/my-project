let details={
    name:"Varalakshmi",
    theme:{
        backgroundColor:"Yellow",
        color:"Blue"
    },
    place:"Tumkur"
}

export default function JSXinMup(){
    return(
        <div style={details.theme}>
        <h1>My name is {details.name}</h1>
        <p>I accomplished my 10<sup>th</sup> in my native(Davanagere)</p>
        <p>I completed my B.E in {details.place}</p>
        </div>
    )
}
// function Playing({moviename}){
//     function handlePlay(){
//         alert(`Playing ${moviename}`)
//     }
//     return(
//         <div>
//             <button onClick={handlePlay}>Play {moviename}</button>
//         </div>
//     )
// }

// function Img(){
//     return(
//         <div><button onClick={()=>alert('Uploading')}>Upload Image</button></div>
//     )
// }






// export default function Event(){
//     return(
//         <div className="mt-20">
//             <Playing moviename={'gandaberunda'}/>
//             <Img />
//             {/* <button className="border border-red-600">Upload img</button> */}
//         </div>
//     )
// }




// function Button2(){
//     return(
//         <Button onSmash={()=>alert('You clicked me')} >Click me</Button>
//     )
// }
// export default function Event({onSmash}){
//     return (
//         <button onClick={onSmash}></button>
//     )
// }












export default function Event(){
    return(
        <Button onKick={()=>alert('Clicked')}>click Me</Button>
    )
}  

function Button({onKick,children}){
    return(
        <button onClick={onKick}>{children}</button>
    )
}



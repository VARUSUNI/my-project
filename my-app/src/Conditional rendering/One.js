function Item ({name,isPacked}){
    let itemContent = name
    // if(isPacked){
    //     return <li>{name } ✔</li>
    // }else{
    //     return <li>{name} ❌</li>
    // }
    // return <li>{isPacked?itemContent+'✔':itemContent+'❌'}</li>

    // return <li>{name} {isPacked && '✔'}</li>
}

export default function List(){
return(
    <>
    <Item name='Mobile' isPacked={true}/>
    <Item name='Pen' isPacked={false}/>
    <Item name='Book' isPacked={true}/>
    </>
)
}
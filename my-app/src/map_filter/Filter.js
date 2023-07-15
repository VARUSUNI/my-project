export default function Filter(){
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, 
      {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
    //   console.log(people)
    let detail = people.filter((x)=>x.profession === 'chemist')
    console.log(detail)
return(
    <>
    {detail.map(x=>
        <li>{x.name}</li>
        )}  
    
    </>
)
}
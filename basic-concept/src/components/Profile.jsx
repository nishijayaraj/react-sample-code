
import {getImageUrl} from '../utils'


export function Avatar({person, size}){  // This is object destructuring
   return(
    <>
        <img  src={getImageUrl(person)} width={size} height={size} alt={person.name} />
    </>
   );
}

export  function Card({children}){
    return(
    <>
      <Avatar person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }} size={100}/>
      
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }} />

      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }} />
    </> 
    )
}


export default function Profile(){
    return(
        <><Card/>
        </Card</>
        /*
    <>
      Avatar person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }} size={100}/>
      
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }} />

      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }} /> 
    </> 
    */
    )
}
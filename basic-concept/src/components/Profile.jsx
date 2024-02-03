
import {getImageUrl} from '../utils'


export function Avatar({person, size}){
   return(
    <>
        <img  src={getImageUrl(person)} width={size} height={size} alt={person.name} />
    </>
   );
}

export default function Profile(){
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
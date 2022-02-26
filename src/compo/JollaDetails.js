import {useContext} from 'react'
import {JollasContext} from '../context/jollas'
import {useParams} from 'react-router-dom'

const JollaDetails = () => {
    const jollas = useContext(JollasContext)
    console.log(jollas)
    const {id} = useParams()
   
    const single = jollas.find(item => item.id === id)
    console.log('single',single)
    const { image: url, title, description, author, price } = single;
  return (
    <div>
      details
     
      {id}
      <h1>{single.description}</h1>
    </div>
  );
}

export default JollaDetails;

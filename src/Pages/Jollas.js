import{useContext} from 'react';
import {Link} from 'react-router-dom'
import {JollasContext} from '../context/jollas'
const Jollas = () => {
    const All = useContext(JollasContext);
   
  return (
    <div className="dad">
      {All.map((item,i)=>{
       return(
           <Link to={`/jollas/${item.id}`} key={i} className ='jollas'>
             <div className='categoria'>
             {item.author}
             </div>
               
           </Link>
       )
      })}
    </div>
  );
}

export default Jollas;

import{useContext} from 'react';
import {JollasContext} from '../context/jollas'
const Jollas = () => {
    const All = useContext(JollasContext);
    console.log("All", All)
  return (
    <div>
      {All.map((item,i)=>{
       return(
           <div key={i}>
               {item.author}
           </div>
       )
      })}
    </div>
  );
}

export default Jollas;

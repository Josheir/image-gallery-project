import { useNavigate } from 'react-router-dom';
import { PhotoContainer, DropDown} from "./photoimages-styles";
import  Panel  from "../panel/panel-component";

import { createPortalcreate } from 'react-dom';
import { usePortal } from "react-dom";
import { createPortal } from 'react-dom'



//react onclick event in functional coomponent

const PhotoImages1 = ({ category }) => {
  console.log("!", category);
  const { id, imageUrl, name} = category;
    const navigate = useNavigate();

    
  
  //const onNavigateHandler = () => navigate(route);

    //alert(imageUrl);
    
  //const Portal = usePortal(document.querySelector(".photo"));
  //************************************ */
  //<DropDown id="id1" >test11</DropDown> on line 35
  
    return (
        
        <div>
      <div id='drop'>

          hhh{id}
      
        
        </div>
        
        
      
        

        
        <div>
          jj
        <h2>{name}</h2>
          <div className="images">
            

            re
          <img src={imageUrl} alt={``} width={90} />
          
        </div>
          
        
        
          
        
        
        </div>
        

        
        
          </div>
     
      
      
                
          
            
            


            
        
    );



}

export default PhotoImages1;
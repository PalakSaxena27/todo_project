import { GoCheck } from "react-icons/go";

function Add_element ()
{
    return(
        <div class="container text-center">
        <div class="row">
        <div class="col-4">
          <input type="text" placeholder="Enter task here"/>
        </div>
        
        <div class="col-4">
          <input type="Date" placeholder="Enter Date here"/>
        </div>
        
        <div class="col-3">
          <button type="button" class="btn btn-success"><GoCheck /></button>
        </div>
        </div>
      </div>
    );
}
export default Add_element;

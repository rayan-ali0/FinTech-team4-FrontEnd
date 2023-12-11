import axios from "axios";

export const handleOnlyNumbers = (event, setInputValue, setError)=>{
    let value = event.target.value;
    
      if (/^\d*$/.test(value)) {
        setInputValue(value);
        setError(false);
      } else {
        setError(true);
      }
      return;
}

export const handleSubmit = async (e, formInfo, error)=>{
    e.preventDefault();

    // console.log(amount);
    if(formInfo.amount && formInfo.type && formInfo.address && formInfo.description){
        if(error)  {
            console.log("invalid Amount!")
        } else {
            try{
            await axios.post(`${process.env.REACT_APP_PATH}/create/transaction`, {formInfo});
            } catch (error) {
                console.log(error.message);
            }
        }
    } else {
        console.log("incomplete!")
    }
}
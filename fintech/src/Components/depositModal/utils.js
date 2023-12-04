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

export const handleSubmit = (e, formInfo, error)=>{
    e.preventDefault();

    // console.log(amount);
    if(formInfo.amount && formInfo.type && formInfo.address && formInfo.description){
        if(error)  {
            console.log("invalid Amount!")
        } else {
            console.log(formInfo);
        }
    } else {
        console.log("incomplete!")
    }
}
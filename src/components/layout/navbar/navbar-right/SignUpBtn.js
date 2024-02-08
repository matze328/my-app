import { useEffect, useState } from "react";



export default function SignUpBtn() {
function handleClick() {
    window.location.href = 'http://localhost:3000/SignUp';
  }  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    setTimeout(() => { 
      
      setIsLoading(false);
    }, 5000);
  }, []);
if(isLoading)
return(<div>Loading </div>)
 return (
    <button type="button" onClick={handleClick}>
      SignUp
    </button>
  );

 }

import './App.css';

const App = () => {

  let show=()=>{
    let eyeicon=document.getElementsByClassName('eye_icon');
    let password=document.getElementsByClassName('input');

    if(password[0].type=='password'){
    password[0].type='text';
    eyeicon[0].src='eye-open.png';
    }
    else{
    password[0].type='password';
    eyeicon[0].src='eye-close.png';
    }
  }
  
  return (
   <>
   <div className="input_box">
   <input type="password"   className='input' placeholder="Enter password" />
   <img src="eye-close.png" onClick={show} className='eye_icon'/>
   </div>
   </>
  )
}

export default App
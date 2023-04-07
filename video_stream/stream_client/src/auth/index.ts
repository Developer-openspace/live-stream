import { auth, provider, signInWithPopup, signOut} from '../firebase/index.js';
import { showSignInNotification, showSignInNotificationErr, showSignOutNotification } from '../notifications/index.js';
import { Err, ResultType } from "../types/types.js";

 //signin
function signInWithGoogle():void{
  signInWithPopup(auth, provider).then((result:ResultType)=>{
    const name=result.user.displayName;
    const email= result.user.email;
    const pic=result.user.photoURL;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("pic",pic)
    showSignInNotification();
    window.location.reload();
  }).catch((err:Err)=>{
    showSignInNotificationErr(err)
  })
}

//logOut
function signout():void{
  signOut(auth).then((message:any)=>{
    showSignOutNotification(message)
  }).catch((err:Err)=>{
    showSignOutNotification(err.message)
  })
}

  
//sign in
const signup=document.querySelectorAll('#bn-signup');
signup.forEach(i=>{
  i.addEventListener('click',()=>{
    signInWithGoogle();
  });
})


//logout
const logout=document.querySelectorAll('#logout');
logout.forEach(i=>{
  i.addEventListener('click',()=>{
    signout();
  })
})

//setupUI for logged in and logged out users
const loggedinLink=document.querySelectorAll('.logged-in')
const loggedoutLink=document.querySelectorAll('.logged-out')
function setupUI(user: any):void{
  if(user){
    loggedinLink.forEach(item=>item.style.display='block')
    loggedoutLink.forEach(item=>item.style.display='none')
  }else{
    loggedinLink.forEach(item=>item.style.display='none')
    loggedoutLink.forEach(item=>item.style.display='block')
  }
}

//listening to user auth status change 
auth.onAuthStateChanged((user: any)=>{
  if(user){
    //acount details
    const account =document.querySelector('.account-details');
      const li =`
        <h4>
        <p>${localStorage.getItem('name')}</p>
        <p>${localStorage.getItem('email')}</p>
        <img src='${localStorage.getItem('pic')}' />
        </h4>
      `
    account.innerHTML+= li;
    setupUI(user)
  } else {
    const account =document.querySelector('.account-details');
    account.innerHTML = [];
    setupUI(null)
  }
})
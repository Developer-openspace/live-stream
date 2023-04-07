import { Err } from "../types/types";

//signin notification
export function showSignInNotification(){
    const notification= new Notification('Successfull Sign in',{
        body:localStorage.getItem("name")||"Successfull sign in",
        icon:localStorage.getItem("pic")||"./img/icons/icon-72x72.png",
  });
    notification.onclick=function(){
      window.parent.focus();
      this.close();
    };
}  

//signin notification error
export function showSignInNotificationErr(err:Err){
  const notification=new Notification('Unsuccessfull Sign in',{
    body:`${err.message}`,
    icon:'./img/icons/icon-72x72.png',
  });
  notification.onclick=function(){
    window.parent.focus();
    this.close();
  }
} 

//signout notification
export function showSignOutNotification(message:any){
  const notification =new Notification('You have Log out',{
    body:`${message}`,
    icon:'./img/icons/icon-72x72.png',
  });
  notification.onclick=function(){
    window.parent.focus();
    this.close();
  }
}
import { addDoc, collection, db, getDocs } from "../firebase/index.js";
import { Err } from "../types/types.js";

//firestore collectionref and getting docs
const collRef= collection(db,'notifications')
getDocs(collRef).then((snapshot:any)=>{
  const noticelist=(snapshot.docs)
  noticelist.forEach((doc:any) => {
     const notice=doc.data();
     const title=notice.title
     const body=notice.body
     localStorage.setItem("title",title);
     localStorage.setItem("body",body)
  });
}).catch((err:Err)=>console.log(err));



//firestore adding doc
const joinGroup=document.querySelector('#group-form');
joinGroup.addEventListener('submit',(e)=>{
  e.preventDefault()
  const collRefgroup= collection(db, 'group');
  addDoc(collRefgroup,{
    userdata:[
      localStorage.getItem('name'),
      localStorage.getItem('email'),
      localStorage.getItem('pic')
    ],
    name: joinGroup.username.value,
    number: joinGroup.number.value
      }).then(()=>{
      joinGroup.reset();
  })
})
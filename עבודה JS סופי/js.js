'use strict'
//מערך ראשוני
let users=[
    {
        firstname: "adiel",
        lastname: "mendelson",
        email: "adiel@gmail.com",
        homeaddress: "hadekel 32 tirat carmel",
        phonenum: "054-4777627"
    },
    {
      firstname: "liel",
      lastname: "levi",
      email: "lielb07@gmail",
      homeaddress: "hduchifat 15 tszeelim",
      phonenum: "050-6449512"
    },
    {
        firstname: "max",
        lastname: "cohen",
        email: "maxc23@gnail.com",
        homeaddress: "narkisio 8",
        phonenum: "052-4630548"
    },
    {
      firstname: "ben",
      lastname: "shaikin",
      email: "bens@gmail.com",
      homeaddress: "carmel",
      phonenum: "053-5533553"
  }
    ]


    const person=document.getElementById('wrapperPop');
    const inPop=document.getElementById('popUp');
    person.style.display="none";


    //טקסט קבוע לשורה
    const liText=`<li class="search" id="categories" onclick="showUser">
        <span class="pic"></span>
        <span class="fname">First name</span>
        <span class="lname">Last name</span>
        <span class="mail">Email address</span>
        <span class="home">Home address</span>
        <span class="phonenum">Phone number</span>
        <span class="btnDelet"><button class="btnD" type="button" onclick="deleteAll()">Delete All</button></span>
        <span class="btnEdit"></span>
        </li>`

  let ul=document.querySelector('ul');
  //ממיין ומציג את המערך
  function showusers(){
    users.sort((a,b)=>a.firstname.localeCompare(b.firstname));
    console.log(users);
    ul.textContent=" ";
    ul.innerHTML=liText;
    //console.log(users);
    const newList = users.forEach((elem, ind) =>{
        const item = document.createElement('li')
        item.className="item";
        
        item.onmouseover=function(){
            item.style.background="rgb(114, 171, 203)";
        }
        item.onmouseout=function(){
            item.style.background="none";
        }
        item.innerHTML=
        `<span class="pic"><img src="images/gamer.png" alt="user" title="user" onclick="showPersonPopUp(${ind})"></span>
          <span class="fname">${elem.firstname}</span>
          <span class="lname">${elem.lastname}</span>
          <span class="mail">${elem.email}</span>
          <span class="home">${elem.homeaddress}</span>
          <span class="phonenum">${elem.phonenum}</span>
          <span class="btnDelet"><button class="btnD" type="button" id="delete" onclick="deleteUser(${ind})">Delete</button></span>
          <span class="btnEdit"><button class="btnE" type="button" id="edit" onclick="editUser(${ind})" >edit</button></span>`
        
        ul.append(item);
    })
}


showusers();

//מציג את כל המידע של המשתמש כשלוצחים על התמונה
function showPersonPopUp(ind){
         
    inPop.innerHTML=`<button><img src="images/close.png" id="closeBton"></button>
    <p>first name: ${users[ind].firstname}</p>
    <p>last name: ${users[ind].lastname}</p> 
    <p>email address: ${users[ind].email}</p>
    <p>home address: ${users[ind].homeaddress}</p>
    <p>phone number:${users[ind].phonenum}</p>`;

    person.style.display="block";
    inPop.style.display="block";
       


}
//מחיקת איש קשר
function deleteUser(ind){
    let ans=confirm(`are you sure you want to delet user num ${users[ind].firstname} ?`)
    if(ans){
      console.log(ind);
        users.splice(ind,1);
        person.style.display="none";
                inPop.style.display="none";
        
        if(users.length===0){
          ul.innerHTML="<span>no users<span>";
          ul.style.textAlign='center';
          
        }
        else{
          ul.innerHTML=liText;
        showusers();
        }
      
    }
  }

//סגירה של popUp הצגת איש קשר
function closeModal(event) {
    if (event.target === document.getElementById('wrapperPop') || event.target === document.getElementById('closeBton') ) {
        document.getElementById('wrapperPop').style.display = 'none';
        
    }
  }
  //סגירה של popUp טופס הוספת איש קשר
  function closeModal2(event) {
    if (event.target === document.getElementById('wrapperAdd') || event.target === document.getElementById('closeBtn') ) {
        document.getElementById('wrapperAdd').style.display = 'none';
    }
  }

//מחיקת כל אנשי הקשר
  function deleteAll(){
    let ans=confirm("are you sure you want to delet")
    if(ans){
      users.length=0;
      console.log(users);
    
        ul.innerHTML="<span>no users<span>";
        ul.style.textAlign='center';
    }  
  }

    const addPop=document.getElementById('wrapperAdd');
    addPop.style.display="none";
  //פתיחת הפופאפ
  function openPopUp(){
    document.getElementById('firsName').value=null;
    document.getElementById('firsName').placeholder="Enter your first name";
    document.getElementById('lastName').value=null;
    document.getElementById('lastName').placeholder="Enter your last name";
    document.getElementById('Email').value=null;
    document.getElementById('Email').placeholder="Enter Email";
    document.getElementById('homeAddress').value=null;
    document.getElementById('homeAddress').placeholder="Enter your home address";
    document.getElementById('phone').value=null;
    document.getElementById('phone').placeholder="Enter your phone number";
    addPop.style.display="block";

  }
//סגירת הפופאפ
  function closeForm(){
    addPop.style.display="none";
  }

//הוספת איש קשר
  function add(){

    console.log("adiel");
    let person={
      firstname:document.getElementById('firsName').value.trim(),
      lastname:document.getElementById('lastName').value.trim(),
      email:document.getElementById('Email').value.trim(),
      homeaddress:document.getElementById('homeAddress').value.trim(),
      phonenum:document.getElementById('phone').value.trim()
      
 
    };
    let flag=false;
    let flag2=false;
    if(document.getElementById('firsName').value===""||document.getElementById('lastName').value===""
        ||document.getElementById('phone').value===""){
          flag2=true;
            }

    
    users.forEach((elem, ind) =>{
      if(person.firstname===elem.firstname&&person.lastname===elem.lastname||person.email===elem.email
        ||person.homeaddress===elem.homeaddress||person.phonenum===elem.phonenum){
          flag=true;
      }
    })

    if(flag2){
      alert("can't enter a new person without first name/ last name or phone num ");
      closeForm();
    }
    else if(flag) alert("this person already exist");
    else{
      if(isNaN(person.phonenum)||person.phonenum.length!==10){
        alert("error: not a valid phone number")
      }
      else{
        let newPhone=person.phonenum.slice(0,3)+'-'+person.phonenum.slice(3);
        person.phonenum=newPhone;
      users.push(person);  
      showusers();

      document.getElementById("wrapperAdd").style.display = "none";
      }
     
    }
    
  }

//עריכת איש קשר
  function editUser(ind){

    document.getElementById('firsName').value=users[ind].firstname;
    document.getElementById('lastName').value=users[ind].lastname;
    document.getElementById('Email').value=users[ind].email;
    document.getElementById('homeAddress').value=users[ind].homeaddress;
    document.getElementById('phone').value=users[ind].phonenum;
    document.getElementById("wrapperAdd").style.display = "block";
    
    document.getElementById('change').onclick=function(){
      console.log("adiel");
      users[ind].firstname=document.getElementById('firsName').value;
      users[ind].lastname=document.getElementById('lastName').value;
      users[ind].email=document.getElementById('Email').value;
      users[ind].homeaddress=document.getElementById('homeAddress').value;
      users[ind].phonenum=document.getElementById('phone').value;
      
      
        document.getElementById("wrapperAdd").style.display = "none";
        console.log(users[ind]);
        showusers();
        document.getElementById('change').onclick=function(){
           console.log("adiel");
            let person={
              firstname:document.getElementById('firsName').value.trim(),
              lastname:document.getElementById('lastName').value.trim(),
              email:document.getElementById('Email').value.trim(),
              homeaddress:document.getElementById('homeAddress').value.trim(),
              phonenum:document.getElementById('phone').value.trim()
              
        
            };
            let flag=false;
            let flag2=false;
            if(document.getElementById('firsName').value===""||document.getElementById('lastName').value===""
                ||document.getElementById('phone').value===""){
                  flag2=true;
                    }

            
            users.forEach((elem, ind) =>{
              if(person.firstname===elem.firstname&&person.lastname===elem.lastname||person.email===elem.email
                ||person.homeaddress===elem.homeaddress||person.phonenum===elem.phonenum){
                  flag=true;
              }
            })

            if(flag2){
              alert("can't enter a new person without first name/ last name or phone num ");
              closeForm();
            }
            else if(flag) alert("this person already exist");
            else{
              if(isNaN(person.phonenum)||person.phonenum.length!==10){
                alert("error: not a valid phone number")
              }
              else{
                let newPhone=person.phonenum.slice(0,3)+'-'+person.phonenum.slice(3);
                person.phonenum=newPhone;
              users.push(person);  
              showusers();

              document.getElementById("wrapperAdd").style.display = "none";
              }
            
            }
        }

        console.log(document.getElementById('change').onclick);

    }
  }


//חיפוש דינמי
  function serchSome(){
    document.getElementById('search').addEventListener('input' ,filterList );
    let li = document.createElement('li')

    function filterList(){
      let filterUsers=users;
      const searchInput=document.getElementById('search'); 
      let sInput=searchInput.value.toLowerCase();
      ul.innerHTML="";
      ul.innerHTML=liText;
      users.forEach((item,ind)=>{
        let name=item.firstname.toLowerCase();
        

        if(name.includes(sInput)){
          
          let li = document.createElement('li')
          li.innerHTML=
          `<span class="pic"><img src="images/gamer.png" alt="user" title="user"></span>
            <span class="fname">${item.firstname}</span>
            <span class="lname">${item.lastname}</span>
            <span class="mail">${item.email}</span>
            <span class="home">${item.homeaddress}</span>
            <span class="phonenum">${item.phonenum}</span>
            <span class="btnDelet"><button class="btnD" type="button" id="delete" onclick="deleteUser(${ind})">Delete</button></span>
            <span class="btnEdit"><button class="btnE" type="button" id="edit" onclick="editUser(${ind})" >edit</button></span>`
          
          ul.append(li);


        }
        
      })
    }
 
}
  
serchSome();

function changeWebColor(){
  document.body.classList.toggle('changePage');
  document.querySelector('ulChangeStyle').classList.toggle('changePage');
}







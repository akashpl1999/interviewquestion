

/// this is example of shallow copy where, it create new objects ,

/// but value inside the newobject , having some reference pointing in meomary  as that of original abject

/// the value change in newobject effects the  orginal array are object


//Object.assign({}, arraydata)// it converts array into  object data  [1,2,3,4] ==>>{0:1,1:2,2:3,3:3}

///...spred operter








// let originalObject = {

//     name: 'John',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'Anytown',
//       state: 'CA'
//     }
//   };


// const newobject={...originalObject}


//    newobject.address.city ="shivamoga"


//    console.log(originalObject, newobject)



//    const arrdata = [[1,2,3],[4,5,6]]


//    const  newarr=  [...arrdata]

//    newarr[0][0]='A'

//    console.log(arrdata , newarr )


////

//deep  copy


// let originalObject = {

//     name: 'John',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'Anytown',
//       state: 'CA'
//     }
//   };



//   const deepobj=JSON.parse(JSON.stringify(originalObject))
//   const shaobj=  Object.assign({}, originalObject)


//    deepobj.address.city="shivamoga"
//    //shaobj.address.city="davangere"

//    console.log(originalObject)
//    console.log(originalObject,deepobj)  // it not changes the value in orginal array
//   // console.log(originalObject,shaobj) /// it changes the value in orginal array




//   ///////////////////

//     function outer(msg1){


//         function inner(msg2) {

//             console.log(msg1+msg2)




//         }
//         return inner
//     }

//     const newfun=outer("hello")    /// its also can be ourt("hello")("world")
//     newfun("world")


//     ////

//     function counter(intialstate){

//         let value=intialstate;

//         return function (){
//             value++;
//             console.log(value)

//         }

//     }

//     const newcounter=counter(0)
//       newcounter() //1
//       newcounter() //2





////////////////////////////////////////////




//throttling: 
//    it is functinality of javascript inwhich, 
// we can limit number of times a function called  with in specific period of time 

// here we can set the throtling event handlers such that it can trigger  for 200 milisecand insted of 
// triggering event continouly , throttling is used limit the number of times the function called over specific periode of time 



//debonceing,

//this is the technic which is used to limits the number of times the function called, but there some differece  with thorllteling,
//let consider user  typeing on inputfiled, we can set event handle such that it can trigger input filed event   ,
// once the user stoped typing over 500 miliseconds





///propogation is proccess in which it gives the idea that how the events moves or events are triggerd , from dom tree to ancester components


// there are two types 


//1  event Bubbling:
// it is default event propogation used in javascript, here event is first triggerd on targetted element then it moves to ancester element,
// for example  if click event is triggered it first handle by button event handlers, then it moves to buuton parent event handlers then so on to dome tree


//2 Capturing :'
//it is event propagation technic in which ,where ever the event accures , event is triggerd on a ancerster or parent elemnt first  then it move to targeted  elements
//this are not used widly ,but , if we want the particular event should handled from parent first the handle by target elemnts  we can use  this 



///promises:
///promises are used to handle the asynchronous operation in javascipt application,
//promises are the objects  which retuns resove and reject based on task, we can access the resolve by .then and resolve is handle by the 
//this  having 




//highorder  function , this are function with takes component as arguments and retuns new arrgengments with add functionality

// reuse the  common  facntility of components  with other componets in react we us  this,



// import React from 'react'


//  const mainfunction=(comp)=>{
//     const mainfunction=(pros)=>{

//         const [ishover, setishover] =useState(false)

//         return(
//             <div ishover={ishover}>

//                 <Comp></Comp>

//             </div>
//         )





//     }




//  }




// const withThrottle = (fn, delay) => {


//     let lastExecution = 0;

//     return function (...args) {
//       const now = Date.now();
//       if (now - lastExecution > delay) {
//         lastExecution = now;
//         return fn(...args);
//       }
//     }
//   }


//   const handlefunction=()=>{


//        console.log("button clicked")
//      }

// const newfun= withThrottle(handlefunction, 1000)

//   newfun()




// import React from 'react'


//  const Withtoggel=(Comp)=>{


//     const subtoggle=(props)=>{


//         const [isopen,setisopen]=useState(false)

//         const toggel=()=>{
//             setisopen(!isopen)

//         }

//         return(
//             <div>
//                 <Comp   {...props}  isopen={isopen} toggel={toggel}/>
//             </div>
//         )
//     }


//     return subtoggle


//  }

//  const mycomp=({isopen, toggel})=>{


//        return(

//            <div>


//             <button onClick={toggel} >click on button to see the content </button>

//             {
//                 isopen && (<div>
//                     <h4>your contents put here</h4>
//                     </div>)
//             }
//            </div>

//        )
//  }


//   const Supermain= Withtoggel(mycomp)

//   export default  Supermain;




// import React from 'react'

// const maincomp = (Comp) => {

//     function submain=(props) => {

//         const [isloading, setisloading] = useState(true)

//         const handlefunction=()=>{

//               setisloading(false)
//         }


//         return (

//             <div>


//                 <Comp {...props} isloading={isloading} text="submit"  handlefunction={handlefunction} ></Comp>


//             </div>
//         )






//     }

//     return submain






// }





// const mycomp = ({isloading, text, handlefunction}) => {

//     const buutonstyle = {
//         backgroundColor: "red",
//         width: '100px',
//         height: '200px'

//     }

//   const  comphandle=()=>{
//     handlefunction(true)
//   }

 

//     return (
//         <div>


//             <button style={buutonstyle} onClick={comphandle}> {text}   </button>

//             {isloading ? (<h1>loading</h1>) : (<div>see your contents</div>)}


//         </div>
//     )



// }

// const newfun = maincomp(mycomp)


// export default newfun



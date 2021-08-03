import React, { Component } from 'react';
      
const Ninjas = ({ninjas}) => {
  return (

  <div className= "ninjas" Key=(ninja.id)>
    <div>Name: {ninja.name }</div>
    <div>Age: {ninja.age }</div>

     <div>Belt: {ninja.belt }</div>


</div>


   )
  
 } 
  
 return(
   <div className "ninja-list" >

ninja.map(ninja => {
  return ninja.age > 20 ? (
    <Div className= "ninja" Keys={ninja.id} >
      

      <div>Name {ninja.name}</div>
      <div>Age {ninja.age}</div>
      <div>Belt {ninja.belt}</div>
    </Div>
  )  : null;
})



   </div>
 ) 
 
 





class AddNinjas extends Component {
  state = {
  name: null,
   age: null,
    belt: null,
  }
}
handelChange = (e) => {

this.setState({
  [e.target.id]
})

handelSubmit = (e) => {
  e.pregventDefault ();
counsole.log(this.state)
}




   

  render(){
  return(
    <div>
      <form>
        <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={}  />
      <label htmlFor="name">Nmae</label>
      <input type="text" id= "name" onChange={}  />
      <label htmlFor="name">name</label>
      <input type="text" id="name" onchange={} />
      
      </form>
    </div>
  )  
  }

}
















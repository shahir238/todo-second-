import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,ListGroup,Container,FormControl,InputGroup,Button} from 'react-bootstrap';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
      checkedItem:[],
      check:"",
     
    };
  }

  //this is for the onChange (updates state) - everytime the user types something, the updateInput function will run
  //with two inputs (key and value which corresponds to newItem object and the string (which is event.target.value))
  //updateInput then updates the newItem state.
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create the new item with unique id
    //so a state object itself can be assigned new objects to it
    const newItem = {
      id:  Math.floor(Math.random()*1000),
      value: this.state.newItem,
      check:false
    };

    //copy current list of items
    const list = [...this.state.list];

    //add new item to the list
    list.push(newItem);

    //update state with new list and reset new item
    this.setState({
      list,
      newItem: ""
    });
    
  }
  
checkList(id){
 
  this.setState({
    list: this.state.list.map(item => {
      console.log("ITEM",item)
      if(id === item.id) {
        return {...item, check: true}
      }
      return item;
    }),
    
  })
  //    const list=[...this.state.list];
  //    var check = list.filter(item => item.id ===id);
  //    var checked=[...this.state.checkedItem];
    
  //    checked.unshift(...check);
  //    this.setState({checkedItem:check});
  
  

  //  console.log("helloooo",check);
  
 
  }
  deleteItem(id) {
    console.log(id);
    //copy list
    const list = [...this.state.list];

    //filter out deleted object
    //remember that the list (each object) gets assigned a value and id when its added to list
    const updatedList = list.filter(item => item.id !== id);

    //update state
    this.setState({ list: updatedList });
  }

  render() {console.log(this.state.list);
    return (
      <div className="App" style={{width:"100%",paddingTop:'40px'}} >
         
  <Container style={{display:"center", height:"auto",}} className="container">
        <Card style={{ width: '340px',display:'block',margin:'auto',border:'red',minHeight:'400px',maxHeight:'100%'}} className="card">
        
        <h2 className="head">TO-DO LIST</h2>
        <InputGroup className="mb-3" className="group" style={{backgroundColor:"white"}}>
    <input type="text" style={{borderColor:'white',borderBlockStyle:'none'}}
      
      aria-label="Recipient's username"
      aria-describedby="basic-addon2" placeholder="new task" value={this.state.newItem}
      onChange={e => this.updateInput("newItem", e.target.value)} className="inpu"/>
    <InputGroup.Append >
      <button  className="button" onClick={() => this.addItem()} style={{border:'white 0px none', color:'#22cae0',width:'61px'}}>ADD</button>
    </InputGroup.Append>
  </InputGroup>
  
  {/* <ProgressBar  style={{backgroundColor:'red'}} now={100} /> */}
        {this.state.list.filter(i => i.check !== true).map(item => {
          return (
           
            <ListGroup className="list" style={{background:"gradient-color:(red)", display:'block',margin:'auto',width:'260px',}} variant="flush">
<ListGroup.Item key={item.id} style={{borderStyle:'solid',borderColor:'skyblue white skyblue white',borderStyle:'8px 0px 8px 0px'}}><span >
              <button onClick={() => this.deleteItem(item.id)}style={{color:"white", background:"#fc032c",border:"red",width:'20px',height:'24px',marginLeft:'-18px'}}>X</button>
               <input type="checkBox" className="style"   onClick={() => this.checkList(item.id)} />
               <label   style={{paddingLeft:'2px',marginTop:'3px' }} >{item.value}</label></span></ListGroup.Item>
</ListGroup>
 );
        })}
          
  
         
          
          
</Card>
<Card style={{display:"",margin:'auto', minHeight:"340px",width:'340px',marginTop:'10px',position:'relative',paddingTop:'20px',paddingBottom:'20px' }}>
<div>
          <h5 style={{color:'red', paddingLeft:'15px'}}>Completed Task</h5>
          
          {this.state.list.filter(i => i.check === true).map(id=>
            <ul style={{listStyle:'none'}}><li>
             <input type="checkBox" id="check" value="check" checked /><label for="check"> {id.value}</label>
              </li></ul>
          )}
          </div> 
          </Card>
      
        </Container>
      
        
      </div>
    );
  }
}

export default App;
import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

const flexStyle ={
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
}
const borderStyle = {
  border: '2px solid yellow',
  margin: '10px',
  padding: '10px',
  borderRadius: '10px'
}

const allProducts =[
  {name: 'Photoshope', price: '$99.89'},
  {name: 'Illustrator', price: '$49.49'},
  {name: 'PDF Reader', price: '$9.89'},
  {name: 'Adobe XD', price: '$69.89'},
  {name: 'Adobe Primere', price: '$159.89'},
]
function App() {
  const user ={
    name: 'ashikur rahman',
    age: 24
  }
  const style = {
    backgroundColor: 'yellow',
    color: 'red'
  }
  const style2 = {
    color: '#fafafa',
    backgroundColor: 'red',
    padding: '20px',
    borderRadius: '1000px'
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p style={style2}>My name is {user.name} and i am {user.age} years old.</p>
        <h1 style={style}>Hey, I am practicing react!</h1>
        <div style={flexStyle}>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        </div>
        <div style={flexStyle}>
          <Students name="Ashikur Rahman" department='Zoology' batch='46th' hall='MBH' district='Rajbari'></Students>
          <Students name="Munna" department='GP' batch='46th' hall='MBH' district='Rongpur'></Students>
          <Students name="Alam" department='Zoology' batch='46th' hall='MBH' district='Rajbari'></Students>
          <Students name="Kamal" department='Zoology' batch='45th' hall='SSB' district='Kustia'></Students>
        </div>
        <div style={flexStyle}>
          {
            allProducts.map(pd => <Products product={pd}></Products>)
          }
        </div>
        <Count></Count>
        <div style={flexStyle}>
          {
            users.map(user => <Users user={user}></Users>)
          }
        </div>
      </header>
    </div>
  );
}

function Person() {
  return (
    <div style={borderStyle}>
      <h1>Name: <span style={{color: 'tomato'}}>Sakib Al Hasan</span></h1>
      <h2>Number 1 All-rounder.</h2>
    </div>
  );
}

function Students(props) {
  return (
    <div style={borderStyle}>
      <h1>Students Info</h1>
      <h4>Name: {props.name} </h4>
      <h4>Department: {props.department} </h4>
      <h4>Batch: {props.batch} </h4>
      <h4>Hall: {props.hall} </h4>
      <h4>District: {props.district} </h4>
    </div>
  )
}
const productStyle = {
  border: '1px solid greenyellow',
  borderRadius: '10px',
  color: 'tomato',
  margin: '10px',
  padding: '10px'
}
const buttonStyle ={
  backgroundColor: 'tomato',
  color: 'white',
  padding: '15px 30px',
  borderRadius: '1000px',
  fontSize: '18px'
}

function Products (props){
  const {name, price}=props.product;
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}


function Count (){
  const [count, setCount]= useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={buttonStyle} onClick={() => count > 0 ? setCount(count-1) : count === 0}>Decrease</button>
      <button style={buttonStyle} onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users (props){
  const {name, email, phone} = props.user;
  return (
    <div style={borderStyle}>
      <h4>Name: <span style={{color: 'tomato'}}>{name}</span></h4>
      <h4>Email: <span style={{color: 'tomato'}}>{email}</span></h4>
      <h4>Phone: <span style={{color: 'tomato'}}>{phone}</span></h4>
    </div>
  )
}

export default App;

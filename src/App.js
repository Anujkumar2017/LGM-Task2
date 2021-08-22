import React from 'react';
import Card from './card';
import Header from './header';


function App(){
  const [users, setUsers]=React.useState([]);
  
  async function getData(){
    const response = await fetch ("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
  }

  return(
        <> 
        <Header btnClicked={getData}/>
        {users.map((data)=>{
          return <Card key={data.id} name={data.login} img={data.avatar_url}/>
        })}
        
        </>
  )
}

export default App;
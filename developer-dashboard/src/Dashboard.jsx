import React from "react";
import Card from "./components/Card";     
import Counter from "./components/Counter"; 
import Todo from "./components/To-do"
import UserList from "./components/UserList"
import { lazy, Suspense } from "react";


const UserListt = lazy(() =>
  import("./components/UserList").then((m) => ({ default: m.default }))
);

 
  
function Dashboard() {

  return (
    <>
      
      <h1 style={{marginBottom:'90px'}}>Developers Dashboard</h1>
      <div className="dashboard">
      
         <Card title="Counter">
          <Counter />
        </Card>
        </div>
        <div className="features">
         <Card title="Todo">
          <Todo />
        </Card>
      <Card 
  title="UserList" 
  style={{ marginLeft: '80px' }}  
>
  <Suspense fallback={<div>Loading </div>}>
    <UserListt />
  </Suspense>
</Card>


      </div>
      
    </>
  );
}

export default Dashboard;



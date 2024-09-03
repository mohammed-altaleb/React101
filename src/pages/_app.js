//{ Component, pageProps }

import Child from "./components/Child";
import Header from "./components/Header";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import StateComponent from "./components/StateComponent";
import Todo from "./Todo";
//<Component {...pageProps} />

export default function App() {
  // const info = {
  //   name: 'Mohammed',
  //   age: 23
  // }

  // const arr = ['Mohammed', 'saud'];

  const MyInfo = {
    name: 'Mohammed',
    age: 20
  }

  const names = ["Mohammed", "Saud"];

  

  return (
    <>
      <Header/>
      {/* <Child personalInfo={info} names={arr}/>
      <Child personalInfo={{name:"Saud", age:30}} names={arr}/>
      <Child names={arr} personalInfo={{name:"Saud", age:30}}/> */}

      <Child2 myInfo={{name:"Mohammed", age: 30}} />
      <Child2 myInfo={MyInfo}/>
      <Child3 names={names}/>
      <StateComponent/>
      <Todo/>
    </>
  );
}


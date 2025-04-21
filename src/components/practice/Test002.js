import React,{useState} from "react";
import StudentTable from "./StudentInformation";

const Test002 = (props) => {


  // Sample JSON Data
const studentData = [
  { name: "Alice", schoolName: "Greenwood High", class: "10", section: "A", rollNo: 101 },
  { name: "Bob", schoolName: "Greenwood High", class: "10", section: "B", rollNo: 102 },
  { name: "Charlie", schoolName: "Greenwood High", class: "11", section: "A", rollNo: 201 }
];

const [title, setTitle] = useState(props.value22);

const newTitle=()=>{
  //alert("jello ddd");
  setTitle("Hey Man!! you clicked me ...");
};



  return (
    <div>

      <h1> hello dear:{title}</h1>
      <button onClick={newTitle}>click me.....</button>
      <StudentTable data={studentData}/>
      
    </div>

  );

  

}






export default Test002;
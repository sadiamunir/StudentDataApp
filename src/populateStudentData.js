import React, { useEffect, useState } from 'react';
import StudentCard from './card';
import CustomizedDialogs from './studentDataPopup';


const GetStudentData = () => {

  const [items, setItems] = useState([]); 
  const [showModal, setModal] = useState(false); 
  const [data, setData] = useState({}); 

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/students?limit=20')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [])

  function populateData(data) {
    setModal(true);
    setData(data);
  }
  function handleClose() {
    setModal(false);
  }
  return (
    <>
    <CustomizedDialogs open={showModal} userData={data} onClose={handleClose} />
    { items.map((el,index) => {
      return (
        <StudentCard el={el} populateData={populateData}/>
      );
    })}

    </>

  );
  

}
export default GetStudentData;


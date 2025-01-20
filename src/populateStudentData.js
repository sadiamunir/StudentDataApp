import React, { useEffect, useState } from 'react';
import StudentCard from './card';
import CustomizedDialogs from './studentDataPopup';

const GetStudentData = () => {

  const [items, setItems] = useState([]);
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState({});

  // Fetch students data on component mount
  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students');
      const data = await response.json(); 
      setItems(data);  // Set the fetched data to state 
      console.log(data); // Log data to verify
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchStudents();  // Call fetchStudents when the component mounts
  }, []);  // Empty array means it only runs once on mount

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
      {items.map((el, index) => {
        return (
          <StudentCard
            key={index} // Adding key to each StudentCard for optimal rendering
            el={el}
            populateData={populateData}
          />
        );
      })}
    </>
  );
}

export default GetStudentData;

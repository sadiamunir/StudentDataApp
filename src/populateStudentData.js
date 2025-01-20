import React, { useEffect, useState } from 'react';
import StudentCard from './card';
import CustomizedDialogs from './studentDataPopup';

const GetStudentData = () => {

  const [items, setItems] = useState([]);
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState({});

  // Fetch students data on component mount
  const fetchStudents = async () => {
    const url = "https://www.freetestapi.com/api/v1/students?limit=20";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setItems(json);
    } catch (error) {
      console.error(error.message);
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

import React, { useState } from 'react';

import CardComponents from './Components/CardComponents';
import sudhagarPic from './Assests/images/sudhagarpic.png';
import manojPic from './Assests/images/manoj.png';
import vijayPic from './Assests/images/vijaypic.png';
import eniyavanPic from './Assests/images/eniyavan.png';
import thirumalaiPic from './Assests/images/thirumalai.png';

const App = () => {
  const [activetext, setActiveText] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);  // Fixed missing comma

  const Heading = "Employee Details Using Props & mapping Using DynamicCard";

  const cardDetails = [
    {
      name: "Sudhagar M",
      age: 27,
      occupation: "Reactjs Developer + DevOps",
      image: sudhagarPic,
      description: "I am a software developer with 2 years of experience in developing web applications ",
      experience: "2.3 years",
    },
    {
      name: "Manoj Prabhakaran",
      age: 28,
      occupation: "Software Developer + DevOps",
      image: manojPic,
      description: "I am a software developer with 3 years of experience in developing web applications ",
      experience: "3 years",
    },
    {
      name: "Vijay",
      age: 27,
      occupation: "Web Developer ScrumMaster",
      image: vijayPic,
      description: "I am a software developer with 5 years of experience in developing web applications ",
      experience: "5 years",
    },
    {
      name: "Eniyavan",
      age: 27,
      occupation: "React Developer",
      image: eniyavanPic,
      description: "I am a software developer with 8 years of experience in developing web applications ",
      experience: "8 years",
    },
    {
      name: "Thirumalai",
      age: 25,
      occupation: "Backend Developer",
      image: thirumalaiPic,
      description: "I am a software developer with 9 years of experience in developing web applications ",
      experience: "9 years",
    },
  ];

  const HandleClick = (items, index) => {
    setActiveText(`${items.name} => ${items.occupation}`);
    setActiveIndex(index);  // Setting the active index when a card is clicked
  };

  return (
    <div className="App">
      <h1 className="text-center mt-5 mb-5">{Heading}</h1>
      <div className="container">
        <h3 className="text-center fw-bold text-danger">{activetext}</h3>
        <div className="row">
          {cardDetails.map((items, index) => (
            <CardComponents
              key={index}
              name={items.name}
              age={items.age}
              occupation={items.occupation}
              image={items.image}
              description={items.description}
              experience={items.experience}
              onButtonClick={() => HandleClick(items, index)}  // Pass index and handle click
              activeIndex={activeIndex}  // Pass the activeIndex
              index={index}  // Pass index to compare
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

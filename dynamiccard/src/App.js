import React from 'react'
import "./App.css"
import CardComponents from './Components/CardComponents'
import sudhagarPic from './Assests/images/sudhagarpic.png';
import manojPic from './Assests/images/manoj.png';
import vijayPic from './Assests/images/vijaypic.png';
import eniyavanPic from './Assests/images/eniyavan.png';
import thirumalaiPic from './Assests/images/thirumalai.png';

const App = () => {

  const cardDetails = [
    {
      name : "sudhagar",
      age : 27,
      occupation : "Reactjs Developer + DevOps Engineer",
      image : sudhagarPic,
      description : "I am a software developer with 2 years of experience in developing web applications ",
      experience:"2.3years"
    },
    {
      name : "Manoj",
      age : 28,
      occupation : "Software Developer DevOps Engineer",
      image : manojPic,
      description : "I am a software developer with 3 years of experience in developing web applications ",
      experience:"3years"
    },
    {
      name : "Vijay",
      age : 27,
      occupation : "Web Developer ScrumMaster",
      image : vijayPic,
      description : "I am a software developer with 5 years of experience in developing web applications ",
      experience:"5years"
    },
    {
      name : "Eniyavan",
      age : 27,
      occupation : "MernStack Developer",
      image : eniyavanPic,
      description : "I am a software developer with 8 years of experience in developing web applications ",
      experience:"8years"
    },
    {
      name : "Thirumalai",
      age : 25,
      occupation : "Backend Developer",
      image : thirumalaiPic,
      description : "I am a software developer with 9 years of experience in developing web applications ",
      experience:"9years"
    },
  ]

 



  return (
    <>

<h1 className="text-center">Employee Details</h1>
     <div className='container'>
      <div className="row">
      
        {
        cardDetails.map((items, index)=>(
          <CardComponents key={index} 
          name={items.name}
          age={items.age}
          occupation={items.occupation}
          image={items.image}
          description={items.description}
          experience={items.experience}
         

           
          
          
          />
        ))
      }
      
     

      </div>

     



    
     </div>
     
    </>
  )
}

export default App

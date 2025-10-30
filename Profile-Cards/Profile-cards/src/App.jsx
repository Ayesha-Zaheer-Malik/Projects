import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
function App() {
const profiles = [
  {
    user: 'Sara',
    designation: 'Web Dev',
    img: 'https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=2048x2048&w=is&k=20&c=I0PwxlEfdM-kcZwIXKH9GJrPmGL5ZNHpi9KZ1zxXeG4='
  },
  {
    user: 'John',
    designation: 'Web Designer',
    img: 'https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_1280.jpg'
  },
  {
    user: 'Smith',
    designation: 'QA Eng',
    img: 'https://cdn.pixabay.com/photo/2025/04/29/11/47/ai-generated-9567007_1280.jpg'
  },
  {
    user: 'Jennie',
    designation: 'Project Manager',
    img: 'https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=2048x2048&w=is&k=20&c=DwdvdTOzngjSfwKLDDPqKbuBd3hYoCm9Oy93-lvO6Vc='
  },
  {
    user: 'Ceilo',
    designation: 'Business Dev',
    img: 'https://cdn.pixabay.com/photo/2024/02/24/23/36/man-8594933_1280.png'
  },
  {
    user: 'Kathrine',
    designation: 'IT Supp',
    img: 'https://cdn.pixabay.com/photo/2020/10/09/04/56/woman-5639513_1280.jpg'
  },
  {
    user: 'Parkh',
    designation: 'HR Manager',
    img: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
  },
  {
    user: 'Mamdani',
    designation: 'Team Lead',
    img: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw='
  }
];

  return (
    <>
      <div className="page-title">
        <h1>Profile Cards</h1>
      </div>

      <div className="parent">
        {profiles.map((profile, index) => (
          <Card
            key={index}
            user={profile.user}
            designation={profile.designation}
            img={profile.img}
          />
        ))}
      </div>
    </>
  );
}

export default App

import React from 'react';
import './style.css';
import Resume from './components/Resume';

export default function App() {
  const resumeData = {
    experience:[{year:2021, company:"cognizant", role:"Developer"}],
    education:[{Graduation:"B.Tech",college:"DIT University" ,intermediate:"Pinewood School" }],
    skill:["react js", "javascript","Git/GitHub"]
  }


  return (
    <>
      <Resume title={'Resume'} data={resumeData}></Resume>
    </>
  );
}

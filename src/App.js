import React from 'react';
import './style.css';
import Resume from './components/Resume';
import resumeData from './data';

export default function App() {
  return (
    <>
      <Resume title={'Resume'} data={resumeData}></Resume>
    </>
  );
}

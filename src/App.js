import React, { useState } from 'react';
import './index.css'; 

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const words = inputText.split(/\s+/);
    let correctionMessage = '';

    for (let i = 0; i < words.length; i++) {
      const originalWord = words[i].toLowerCase(); 
      if (customDictionary.hasOwnProperty(originalWord)) {
        const correctedWord = customDictionary[originalWord];
        correctionMessage = `Did you mean: ${correctedWord}?`;
        setText(inputText); 
        setCorrection(correctionMessage); 
        return; 
      }
    }
    
    setCorrection('');
    setText(inputText); 
  }; 
  return (
    <div className="centered-container">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Enter Text..." 
      />
      {correction && <div>{correction}</div>}
    </div>
  );
};

export default XSpellCheck;

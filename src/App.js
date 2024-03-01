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
    const inputText = event.target.value.toLowerCase();
    const words = inputText.split(/\s+/);
    let correctedText = inputText;
    let correctionMessage = '';
  
    for (let i = 0; i < words.length; i++) {
      if (customDictionary.hasOwnProperty(words[i])) {
        correctedText = correctedText.replace(new RegExp(words[i], 'gi'), customDictionary[words[i]]);
        correctionMessage += `Did you mean: ${customDictionary[words[i]]}? `;
      }
    }
  
    setText(correctedText);
    setCorrection(correctionMessage);
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

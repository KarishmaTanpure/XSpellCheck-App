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
    const inputText = event.target.value; // Preserve original case
    const lowerCaseInputText = inputText.toLowerCase(); // Convert to lowercase for comparison
    const words = lowerCaseInputText.split(/\s+/);
    let correctedText = inputText; // Preserve original case
    let correctionMessage = '';
    
    for (let i = 0; i < words.length; i++) {
      if (customDictionary.hasOwnProperty(words[i])) {
        const correctedWord = customDictionary[words[i]];
        const originalWordRegExp = new RegExp(`\\b${words[i]}\\b`, 'gi');
        correctedText = correctedText.replace(originalWordRegExp, correctedWord); // Replace with corrected word while preserving original case
        correctionMessage += `Did you mean: ${correctedWord}?`;
      }
    }
    
    setText(correctedText);
    setCorrection(correctionMessage.trim());
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

import React, { useState } from 'react';

const Tags = () => {
  const [textInput, setTextInput] = useState('');
  const [skills, setSkills] = useState([]);

  // function to add skills
  const addSkills = (event) => {
    if (event.key === 'Enter') {
      if (textInput) {
        if (skills.length < 5) {
          setSkills([...skills, textInput]);
        } else {
          alert("Sorry, you can't add more than 5 skills.");
        }
        setTextInput('');
      } else {
        // Reset the textInput if it's empty
        setTextInput('');
      }
    }
  };

  // function to remove skill
  const handleRemoveSkill = (i) => {
    const newSkills = skills.filter((skill, index) => index !== i);
    setSkills(newSkills);
  };

  return (
    <div className='wrapper'>
      <div className='skills-wrapper'>
        <h5 className='skill-title'>Skills</h5>
        <p className='skill-subtitle'>Press Enter to add new skills</p>

        {/* text input */}
        <input
          type='text'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={addSkills}
        />

        {/* skills tags */}
        <div className='skills-tags-wrapper'>
          {skills?.map((skill, index) => (
            <main className='skills' key={index}>
              <div
                className='remove-skill'
                onClick={() => handleRemoveSkill(index)}
              >
                X
              </div>
              <div className='skill-tag'>{skill}</div>
            </main>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;

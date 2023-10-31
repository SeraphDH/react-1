import React, { useState } from 'react';

function Madlibs() {
  const [noun, setNoun] = useState('');
  const [adjective, setAdjective] = useState('');
  const [verb, setVerb] = useState('');
  const [adverb, setAdverb] = useState('');
  const [story, setStory] = useState('');
  const [selectedStory, setSelectedStory] = useState('story1'); // Default story option

  const stories = {
    story1: 'Once upon a time, there was a ${adjective} ${noun}. It loved to ${adverb} ${verb} every day. The end.',
    story2: 'In a land far, far away, there lived a ${adjective} ${noun}. It had a peculiar habit of ${adverb} ${verb} under the moonlight. The end.',
    // Add more story options as needed
  };

  const generateStory = (e) => {
    e.preventDefault();

    if (noun && adjective && verb && adverb) {
      const madlibsStory = stories[selectedStory]
        .replace('${adjective}', adjective)
        .replace('${noun}', noun)
        .replace('${verb}', verb)
        .replace('${adverb}', adverb);

      setStory(madlibsStory);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  const restartGame = () => {
    setNoun('');
    setAdjective('');
    setVerb('');
    setAdverb('');
    setStory('');
  };

  return (
    <div>
      <h1>Madlibs Game</h1>
      <label>
        Select a Story:
        <select value={selectedStory} onChange={(e) => setSelectedStory(e.target.value)}>
          <option value="story1">Story 1</option>
          <option value="story2">Story 2</option>
          {/* Add more story options as needed */}
        </select>
      </label>
      {story ? (
        <div>
          <h2>Madlibs Story</h2>
          <p>{story}</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <form onSubmit={generateStory}>
          <label>
            Noun:
            <input type="text" value={noun} onChange={(e) => setNoun(e.target.value)} />
          </label>
          <br />
          <label>
            Adjective:
            <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
          </label>
          <br />
          <label>
            Verb:
            <input type="text" value={verb} onChange={(e) => setVerb(e.target.value)} />
          </label>
          <br />
          <label>
            Adverb:
            <input type="text" value={adverb} onChange={(e) => setAdverb(e.target.value)} />
          </label>
          <br />
          <button type="submit">Generate Story</button>
        </form>
      )}
    </div>
  );
}

export default Madlibs;

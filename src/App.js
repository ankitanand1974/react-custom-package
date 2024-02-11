// src/App.js
import React from 'react';
import { Button } from 'my-react-library'; 

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <p>Click the button below:</p>
      <Button onClick={() => console.log('Button clicked')}>Click me</Button> {/* Using the Button component */}
    </div>
  );
}

export default App;

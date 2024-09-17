import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleItemClick = (item, message) => {
    setDescription(prevDescription => `${prevDescription} ${message}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit_ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: description,
          description: description,
        }),
      });
      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error(error);
      alert('Failed to submit the ticket. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/ntechbot.png" alt="N-Tech Bot" className="logo" id="ntechbot" />
        <h1>N-Tech Help Portal</h1>
      </div>
      <p>Enter your email:</p>
      <div className="form-group">
        <input
          type="email"
          id="user-email"
          name="user-email"
          placeholder="Your email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <p>Select what you need help with:</p>
      <div className="button-container">
        <div className="column">
          <Button item="Headphones" icon="fas fa-headphones" message="I am requesting headphones." onClick={handleItemClick} />
          <Button item="iPhone Charger" icon="fas fa-charging-station" message="I am requesting an iPhone charger." onClick={handleItemClick} />
          <Button item="Loaner Laptop" icon="fas fa-laptop" message="I am requesting a loaner laptop." onClick={handleItemClick} />
          <Button item="Help with Printing" icon="fas fa-print" message="I need help with printing." onClick={handleItemClick} />
        </div>
        <div className="column">
          <Button item="Network Issues" icon="fas fa-network-wired" message="I have network issues." onClick={handleItemClick} />
          <Button item="Software Installation" icon="fas fa-cogs" message="I need software installation." onClick={handleItemClick} />
          <Button item="Hardware Issues" icon="fas fa-tools" message="I have hardware issues." onClick={handleItemClick} />
          <Button item="Password Issue" icon="fas fa-key" message="I have a password issue." onClick={handleItemClick} />
        </div>
        <div className="column">
          <Button item="Monitor Issue" icon="fas fa-desktop" message="I have a monitor issue." onClick={handleItemClick} />
          <Button item="Keyboard Issue" icon="fas fa-keyboard" message="I have a keyboard issue." onClick={handleItemClick} />
          <Button item="Mouse Issue" icon="fas fa-mouse" message="I have a mouse issue." onClick={handleItemClick} />
          <Button item="Software Update" icon="fas fa-sync-alt" message="I need a software update." onClick={handleItemClick} />
        </div>
      </div>
      <div className="something-else">
        <h2>Something Else?</h2>
        <form id="helpdesk-form" onSubmit={handleSubmit}>
          <input type="hidden" id="hidden-email" name="email" value={email} />
          <input type="hidden" id="hidden-subject" name="subject" value={description} />
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
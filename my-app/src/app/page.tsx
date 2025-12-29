'use client'
 import { useState } from 'react'

 export default function ContactPage(){
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(' https://7xdemml3qk.execute-api.us-east-1.amazonaws.com/default/handlecontactform/handleContactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Contact Us</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
 } 
function writeCards(names, event) {
    const messages = []; // Create an empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); // Add the message to the array
    }
  
    return messages; // Return the array of messages
  }
  
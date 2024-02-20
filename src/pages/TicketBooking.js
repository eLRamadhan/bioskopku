import React, { useState } from 'react';

function TicketBooking() {
  const [seats, setSeats] = useState(new Array(50).fill(false)); // Array untuk menyimpan status kursi (true = terisi, false = kosong)

  const handleClick = (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index]; // Mengubah status kursi saat diklik
    setSeats(newSeats);
  };

  return (
    <div>
      <h2>Seat Booking</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {seats.map((isOccupied, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: isOccupied ? 'red' : (seats[index] ? 'yellow' : 'green'),
              margin: '5px',
              border: '1px solid black',
              cursor: 'pointer'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default TicketBooking;
/* src/App.js */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Site Navigation</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/dashboard'>Invoices</Link> | <Link to='/todo'>Invoices</Link>
      </nav>
    </div>
  );
};

export default App;

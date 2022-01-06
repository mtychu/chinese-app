import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import NavigationBar from '../Navbar/NavigationBar.js';
import '../../index.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const DisplayWord = () => {
  return (
    <div>
      <NavigationBar title={'Display Word'}></NavigationBar>
    </div>
  );
};

export default DisplayWord;

import './App.css';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {Route, Routes} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import React from 'react';
import Layout from './components/Layout';

function App() {
  const theme = extendTheme({
    colors: {
      brand: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/*' element={<Layout/>}/>
        {/* <Route path="/character/:id" element={< />} /> */}
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import './css/bootstrap.min.css';

const queryClient = new QueryClient(); //Objeto queryClient gobal para toda la aplicacion

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}> 
  {/* <React.StrictMode> */}
    
      <App />
      <script src='./js/bootstrap.min.js'></script>
  {/* </React.StrictMode> */}
  </QueryClientProvider>
);



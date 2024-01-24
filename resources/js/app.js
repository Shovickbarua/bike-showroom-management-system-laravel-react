import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './router/app';
import Auth from './router/auth';


// const MyApp = () =>(
//     <App />
// )

const rootElement = document.getElementById('app')

ReactDOM.createRoot(rootElement).render(<Auth />);
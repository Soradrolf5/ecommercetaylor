import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYnhGKRfPs6O72X-e1dcUF6f8eSn-9vrs",
  authDomain: "proyectocoderreact23.firebaseapp.com",
  projectId: "proyectocoderreact23",
  storageBucket: "proyectocoderreact23.appspot.com",
  messagingSenderId: "938751840555",
  appId: "1:938751840555:web:70ab212e456b97e0baf56e"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)

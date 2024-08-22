// import {createRoot} from "react-dom/client"
// import App from "./App"


//  const root = createRoot(document.querySelector("#root"))
 
//  root.render(<App/>)
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure the case and path are correct

const rootElement = document.getElementById('root'); // Changed to getElementById
const root = createRoot(rootElement);

root.render(<App />);

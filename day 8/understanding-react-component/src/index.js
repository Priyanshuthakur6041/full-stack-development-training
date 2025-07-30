//importing reactdom module
//react  
import { MyComponent } from './MyComponent';
import ReactDOM from 'react-dom/client';
//getting division tag by id 'root' 
const divTag = document.getElementById('root');
//creating a root dom (document object model)
const myDom = ReactDOM.createRoot(divTag);
//rendering component
myDom.render(<MyComponent/>)
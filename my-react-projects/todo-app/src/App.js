import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import AddTodoPage from './AddTodoPage';
import Show from './Show';
import Done from './Done';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
    return (
     <BrowserRouter>
            <Header />

            {/* Routes component used to group route */}
            <Routes>
                {/* Route component defines path with our page component */}
                <Route path="/Add" element={<AddTodoPage />} />
                <Route path="/Show" element={<Show />} />
                <Route path="/Done" element={<Done />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;

          
    
  
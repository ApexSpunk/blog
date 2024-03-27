import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Create from '../Pages/Create';
import Blog from '../Pages/Blog';

function Allroutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Blog />} />
            <Route path='/create' element={<Create />} />
        </Routes >
    );
}

export default Allroutes;
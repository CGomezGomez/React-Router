import { Route, Routes } from "react-router-dom";
import Title from "../components/title/Title";


const Router = () => {
    return (

        <Routes>
            <Route path='/' element={<Title title='Home' />} />
            <Route path='/about' element={<Title title='About' />} />
            <Route path='/contact' element={<Title title='Contact' />} />
        </Routes>

    );

    
};

export default Router
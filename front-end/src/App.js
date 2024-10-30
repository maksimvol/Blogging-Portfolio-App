import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import EnterPage from "./pages/EnterPage";
import NotFound from "./components/NotFound";
import Layout from './components/Layout';

const App = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<EnterPage onNavigate={handleNavigate} />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
};

export default App;

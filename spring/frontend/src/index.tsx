import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import FinalExport from './components/main';
import Post from "./pages/post";
import Status from "./pages/status";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFinal from './components/loginForm';
import RegisterFinal from "./components/register";
import Admin from './components/adminpage';

// @ts-ignore
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='admin1' element={<Admin />} />
                <Route path='/' element={<FinalExport />} />
                <Route path='post' element={<Post />} />
                <Route path='status' element={<Status />} />
                <Route path='login' element={<LoginFinal />} />
                <Route path='register' element={<RegisterFinal />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
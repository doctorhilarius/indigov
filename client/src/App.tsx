import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import './App.css'
import DownloadConsitituentsForm from './constituents/DownloadConstituentsForm'
import SaveConstituentForm from './constituents/SaveConstituentForm'
import Home from './home/Home'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/constituents/save'
                        element={<SaveConstituentForm />}
                    />
                    <Route
                        path='/constituents/download'
                        element={<DownloadConsitituentsForm />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

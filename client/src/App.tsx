import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import DownloadConsitituentsForm from './constituents/DownloadConstituentsForm'
import SaveConstituentForm from './constituents/SaveConstituentForm'
import Home from './home/Home'
import ListConstiuents from './constituents/ListConstituents'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/constituents/download'
                        element={<DownloadConsitituentsForm />}
                    />
                    <Route
                        path='/constituents/list'
                        element={<ListConstiuents />}
                    />
                    <Route
                        path='/constituents/save'
                        element={<SaveConstituentForm />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

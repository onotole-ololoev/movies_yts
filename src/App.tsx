import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Films} from "./components/films/films";
import {useAppDispatch} from "./store/store";
import {getFilmsTC} from "./store/films-reducer";
import {setLoadingAC} from "./store/app-reducer";

function App() {


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFilmsTC())
    }, [])

    return (
        <div>
            <Header/>
            <Films/>
        </div>
    );
}

export default App;

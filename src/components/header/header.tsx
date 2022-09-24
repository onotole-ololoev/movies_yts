import React from 'react';
import s from './header.module.css'
import {SearchFilm} from "./search-film/search-film";


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}></div>
            <SearchFilm />
            <div className={s.logo}></div>
        </div>
    );
};

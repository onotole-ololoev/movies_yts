import React from 'react';
import s from './film.module.css'

type FilmPropsType = {
    id: number
    title: string
    slug: string
    year: number
    rating: number
    runtime: number
    summary: string
    small_cover_image: string
    medium_cover_image: string
    large_cover_image: string
}

export const Film = (props: FilmPropsType) => {
    return (
        <div className={s.film}>
            <h3>{props.title} / {props.year} / {props.rating}</h3>
            <img src={props.small_cover_image} alt="img"/>
            <div></div>
            <div>{props.summary}</div>
        </div>
    )
};

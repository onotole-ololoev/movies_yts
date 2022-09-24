import React from 'react';
import {Film} from "./film/film";
import {useAppSelector} from "../../store/store";
import s from './films.module.css'


export const Films = () => {

    const films = useAppSelector(state => state.films)
    const isLoading = useAppSelector(state => state.isLoading.isLoading)


    return (
        <div className={s.films}>
            { isLoading
                ?
                'please, wait.....'
                :
                films.movies.map(el => {
                    return (
                        <Film key={el.id} id={el.id} title={el.title}
                              slug={el.slug} year={el.year} rating={el.rating}
                              runtime={el.runtime} summary={el.summary}
                              small_cover_image={el.small_cover_image}
                              medium_cover_image={el.medium_cover_image}
                              large_cover_image={el.large_cover_image}/>
                    )
                })
            }
        </div>
    );
};

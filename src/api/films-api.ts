import {instance} from "./base-instance";


export const filmsAPI =  {
    getFilms() {
        return instance.get('list_movies.json')
    }
}
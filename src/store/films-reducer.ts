import {AppThunk} from "./store";
import {filmsAPI} from "../api/films-api";
import {setLoadingAC} from "./app-reducer";

const initialState: InitialStateType = {
    movies: []
    // id:0,
    // url:"",
    // imdb_code:"",
    // title:"",
    // title_english:"",
    // title_long:"",
    // slug:"",
    // year:0,
    // rating:0,
    // runtime:0,
    // genres:[""],
    // summary:"",
    // description_full:"",
    // synopsis:"",
    // yt_trailer_code:"",
    // language:"",
    // mpa_rating:"",
    // background_image:"",
    // background_image_original:"",
    // small_cover_image:"",
    // medium_cover_image:"",
    // large_cover_image:"",
    // state:""
}
type InitialStateType = {
    movies: FilmType[]
}
type FilmType = {
    id: number
    url: string
    imdb_code: string
    title: string
    title_english: string
    title_long: string
    slug: string
    year: number
    rating: number
    runtime: number
    genres: string[]
    summary: string
    description_full: string
    synopsis: string
    yt_trailer_code: string
    language: string
    mpa_rating: string
    background_image: string
    background_image_original: string
    small_cover_image: string
    medium_cover_image: string
    large_cover_image: string
    state: string
}
type ActionType = GetFilmsACType

export const filmsReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "GET-FILMS":
            return {...state, movies: action.films}
        default:
            return state
    }
}

export const getFilmsAC = (films: FilmType[]) => {
    return {type: 'GET-FILMS', films} as const
}
type GetFilmsACType = ReturnType<typeof getFilmsAC>

export const getFilmsTC = (): AppThunk => async dispatch => {
    try {
        dispatch(setLoadingAC(true))
        const res = await filmsAPI.getFilms()
        console.log(res.data.data.movies)
        dispatch(getFilmsAC(res.data.data.movies))
    } catch (e) {
        alert(e)
    } finally {
        dispatch(setLoadingAC(false))
        console.log(setLoadingAC(false))
    }
}

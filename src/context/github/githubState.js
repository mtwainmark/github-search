import React, {useReducer} from 'react'
import axios from 'axios'

import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({children}) =>{
    const initialState = {
        user:{},
        users:[],
        loading: false,
        repos:[]
    }
    const [state, dispath] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()
        
        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        dispath({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name =>{
        setLoading()
       
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        )
        
        dispath({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name =>{
        setLoading()
        
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )

        dispath({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clearUsers = () => dispath({type: CLEAR_USERS})

    const setLoading = () => dispath({type: SET_LOADING})

    const {user, users, repos, loading} = state

    return(
        <GithubContext.Provider value={{
            search, setLoading, getUser, getRepos, clearUsers,
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}
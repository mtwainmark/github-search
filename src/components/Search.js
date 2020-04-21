import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
    const [value, setValue] = useState()
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmitButton = () =>{
        if(value.trim()){
            alert.hide()
           github.search(value.trim())
        }
        else{
            alert.show('Введите данные пользователя')
        }
    }

    const  onSubmit = event =>{
        if(event.key !== 'Enter'){
            return
        }

        github.clearUsers()

        if(value.trim()){
            alert.hide()
           github.search(value.trim())
        }
        else{
            alert.show('Введите данные пользователя')
        }
    }
    return(
        <div className="form-inline my-2 my-lg-1">
            <input 
            style={{width: '93%'}}
            type="text" 
            value={value}
            onChange={event => setValue(event.target.value)}
            className="form-control" 
            placeholder="Введите ник пользователя..."  
            onKeyPress={onSubmit}/>
            <button type="submit" style={{marginLeft: '5px'}} className="btn btn-secondary " onClick={onSubmitButton}>Найти</button>
        </div>
    )
}
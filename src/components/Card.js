import React from 'react'
import {Link} from 'react-router-dom'

export const Card = ({user}) => (
    <div style={{marginTop: '10px'}} className="card">
        <img src={user.avatar_url} alt={user.login} className="card-image-top"/>
        <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <Link to={'/profile/' + user.login} className="btn btn-secondary">Открыть</Link>
        </div>
    </div>
)
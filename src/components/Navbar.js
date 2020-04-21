import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-secondary  navbar-expand-lg">
        <div className="navbar-brand">
            Github Поиск
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">Информация</NavLink>
            </li>
        </ul>
    </nav>
)
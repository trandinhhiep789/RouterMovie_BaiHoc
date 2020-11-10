import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    let userLogin = useSelector(state => state.QuanLyNguoiDungReducer)
    return (
        // b4-navbar-default
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">ELTR_SC</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeStyle={{ color: 'red' }} to="/trangchu">Trang Chu <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="bg-dark text-white" to="/lienhe">Lien He</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/gioithieu">Gioi Thieu</NavLink>
                    </li>
                    <li className="nav-item">
                        {userLogin.taiKhoan ? <NavLink to="/">{userLogin.taiKhoan}</NavLink> : <NavLink to="/dangnhap">dang nhap</NavLink>}
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="bg-dark text-white" to="/dangnhap">Dang nhap</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

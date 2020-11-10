import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { layDanhSachPhimApi, layDanhSachPhimApiAction } from '../reudux/actions/QuanLyPhimAction'

export default function TrangChu(props) {

    // const [dsPhim, setDSPhim] = useState([])
    const dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim)

    const dispatch = useDispatch()

    useEffect(() => {
        // var promise = Axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // })

        // //thành công
        // promise.then((res) => {
        //     dispatch(layDanhSachPhimApi(res.data))
        //     // setDSPhim(res.data)
        // })

        // //Thất bại
        // promise.catch((error) => {
        //     console.log(error.response.data)
        // })
        dispatch(layDanhSachPhimApiAction())
    }, [])

    const renderPhim = () => {
        return dsPhim.map((phim, i) => {
            return <div className="col-4" key={i}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh}
                        onError={(e) => { e.target.onError = null; e.target.src = "https://picsum.photos/300/300" }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <NavLink className="w-100 btn bg-dark text-light" to={'/chitietphim/' + phim.maPhim}>Dat ve</NavLink>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <h3 className="text-center display-4">Danh sach phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

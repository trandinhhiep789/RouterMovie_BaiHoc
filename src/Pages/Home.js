import React, { Component } from 'react'
import axios from 'axios' // thư viện kết nối backend

export default class Home extends Component {

    state = {
        dsPhim: []
    }

    renderPhim = () => {
        return this.state.dsPhim.map((phim, i) => {

            return <div className="col-4 card text-left">
                <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh}
                    onError={(e) => { e.target.onError = null; e.target.src = "https://picsum.photos/300/300" }} />
                <div className="card-body">
                    <h4 className="card-title">{phim.tenPhim}</h4>
                </div>
            </div>
        })
    }

    //lấy dữ liệu từ API về
    getFilms = () => {
        let promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        })
        //xử lý thành công
        promise.then(res => {
            console.log(res.data)
            this.setState({
                dsPhim: res.data
            })
        })

        //xử lý thất bại
        promise.catch(err => {
            console.log(err.response.data)
        })
    }

    render() {
        return (
            <div className="container">
                <h3>danh sach phim</h3>
                <button onClick={() => {
                    this.getFilms()
                }}>render phim</button>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }

    //trải nghiệm người dùng, ko cần bấm nút cũng render ra!
    componentDidMount() {
        //hàm chạy sau html được render
        this.getFilms()
    }
}

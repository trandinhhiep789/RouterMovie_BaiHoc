import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dangNhapAction } from '../reudux/actions/QuanLyNguoiDungAction'

export default function DangNhap(props) {

    const dispatch = useDispatch()

    const [userLogin, setUserLogin] = useState({ taiKhoan: '', matKhau: '' })
    console.log('props trang danh nhap', props)
    console.log(userLogin)
    const handleChange = (e) => {
        let { value, name } = e.target
        //ghi vầy cũng dc
        // setUserLogin({
        //     ...userLogin,
        //     [name]:value
        // })
        let newUserLogin = { ...userLogin, [name]: value }
        setUserLogin(newUserLogin) // mỗi lần chạy hoook render lại toàn bộ
    }
    const handleSubmit = (e) => {
        e.preventDefault()// chặn sự kiện reload brower
        // if (userLogin.taiKhoan === 'ELTR' && userLogin.matKhau === '13') {
        //     alert('ok')
        //     props.history.push('/home')
        //     //replace về thử lại
        // }
        dispatch(dangNhapAction(userLogin))
    }

    return (
        <form className="container">
            <h3 className="display-4">Dang nhap</h3>
            <div className="form-group">
                <p>
                    tai khoan
                </p>
                <input className="form-control" onChange={handleChange} name="taiKhoan" />
            </div>
            <div className="form-group">
                <p>
                    mat khau
                </p>
                <input className="form-control" onChange={handleChange} name="matKhau" />
            </div>
            <div className="form-group">
                <button type="button" onClick={handleSubmit} >
                    dang nhap
                </button>
            </div>
        </form>
    )
}

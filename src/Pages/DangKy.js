import React from 'react'

export default function DangKy() {
    return (
        <div className="container">
            <h3>Đăng ký</h3>
            <div className="form-group">
                <p>tai khoan</p>
                <input className="form-control" name="taiKhoan" />
            </div>
            <div className="form-group">
                <p>mat khau</p>
                <input className="form-control" name="matKhau" />
            </div>
            <div className="form-group">
                <p>email</p>
                <input className="form-control" name="email" />
            </div>
            <div className="form-group">
                <p>so dien thoai</p>
                <input className="form-control" name="soDienTHoai" />
            </div>
            <div className="form-group">
                <button className="btn btn-success">dang ky</button>
            </div>
        </div>
    )
}

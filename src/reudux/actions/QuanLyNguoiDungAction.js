import Axios from "axios";
import { useState } from "react";
import { ACCESSTOKEN, USER_LOGIN, DOMAIN } from "../../Util/Config";
import axios from 'axios'
import swal from 'sweetalert2'
import { history } from '../../Util/history'


export const dangNhapAction = (userLogin) => {
    return dispatch => {
        const promise = axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method: 'POST',
            data: userLogin
        })

        promise.then(result => {
            //đăng nhập thành công lưu thông tin người dùng vào localstore
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
            //lưu token vào local storage
            localStorage.setItem(ACCESSTOKEN, result.data.accessToken);

            swal.fire('Thong bao', 'Dang nhap thanh cong', 'sucess');
            dispatch({
                type: 'DANG_NHAP',
                userLogin: result.data
            })
            history.push('/trangchu');

        })
        promise.catch(error => {
            console.log(error.response.data);
        })
    }
}
import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst"
import Axios from 'axios'

//------------------action gọi API  (khong dispatch dữ liệu trực tiếp lên reducer)------------------

export const layDanhSachPhimApiAction = () => {
    return dispatch => {
        //action trả về hàm có tham số dispatch
        var promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        })

        //thành công
        promise.then((res) => {
            dispatch(layDanhSachPhimApi(res.data))
            // setDSPhim(res.data)
        })

        //Thất bại
        promise.catch((error) => {
            console.log(error.response.data)
        })

    }
}

//viết api lấy chi tiết phim về
//async chạy tuần tự, dễ quản lý code cách 2 của các viết promise
export const layChiTietPhimApiAction = async (maPhim) => {

    return async (dispatch) => {

        try {
            //gọi API lấy dữ liệu về
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET',
            })
            console.log(result.data)
            dispatch({
                type: 'LAY_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (err) {
            console.log(err)
        }

    }

    //sau khi lấy dữ liệu dispatch lên reducer rồi cập nhật cho chi tiết phim

}


export const layThongTinPhongVeAPIAction = async (maLichChieu) => {
    return async (dispatch) => {
        try {
            //gọi API lấy dữ liệu về
            const { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET',
            })

            console.log(data)

            //thành công lấy dữ liệu cập nhật thông tin phòng vé
            if (status === 200) {

                dispatch({
                    type: 'THONG_TIN_PHONG_VE',
                    thongTinPhongVe: data
                })
            }

        } catch (err) {
            console.log(err)
        }
    }
}



//------------------action dispatch reducer------------------
export const layDanhSachPhimApi = (dataphim) => {
    return {
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: dataphim
    }
}



// vd: mình chỉ cần dispatch 1 lần bên trang chủ, còn lại mình dispatch bên đây

// export const getHome = () =>{
//     return dispatch => {
//         
//         // dispatch(carousel())
//         // dispatch(getFilm())
//     }
// }
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layThongTinPhongVeAPIAction } from '../reudux/actions/QuanLyPhimAction'

export default function PhongVe(props) {

    const thongTinPhongVe = useSelector(state => state.QuanLyPhimReducer.thongTinPhongVe)
    const dispatch = useDispatch()

    useEffect(async () => {
        //lấy tham số lịch chiếu từ url
        let maLichChieu = props.match.params.maLichChieu
        //gọi action kết nối api lấy dữ liệu lịch chiếu về
        dispatch(await layThongTinPhongVeAPIAction(maLichChieu))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {/* thông tin phòng vé */}
                </div>
                <div className="col-4">
                    {/* thông tin phim  */}

                </div>
            </div>
        </div>
    )
}

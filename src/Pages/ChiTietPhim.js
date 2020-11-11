import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layChiTietPhimApiAction } from '../reudux/actions/QuanLyPhimAction'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

export default function ChiTietPhim(props) {

    //useSelector lấy chi tiết phim trên reduxHook về
    const chiTietPhim = useSelector(state => state.QuanLyPhimReducer.chiTietPhim)

    console.log("88888888888888888888888888888888888888888")
    console.log(chiTietPhim)

    const dispatch = useDispatch()

    // useEffect dạng emptylist
    useEffect(async () => {
        //lấy tham số từ url
        let maPhim = props.match.params.maPhim
        //gọi action API từ redux
        dispatch(await layChiTietPhimApiAction(maPhim))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img className="mt-5" style={{ width: 300, height: 150 }} src={chiTietPhim.hinhAnh} />
                </div>
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ten phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>mo ta</th>
                                <th>{chiTietPhim.moTa}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <span className="display-4">thong tin lich chieu</span>

                    <div className="row">
                        <div className="nav flex-column nav-pills col-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">

    {/* dấu "?" là kiểu đợi chạy xong khi nào trong chi tiết phim có hệ thống rạp chiếu mới chạy map( chứ ko lỗi) */}
                            {chiTietPhim.heThongRapChieu?.map((heThongRap, i) => {

                                //có lưu ý là cái cụm rạp dầu tiên bấm ko ra nên làm cái active này
                                //bằng cách cái className="nav-link" phải đổi thành className={'nav-link' + active}
                                let active = i === 0 ? 'active' : ''

                                return <a key={i} className={'nav-link' + active} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true"><img src={heThongRap.logo} style={{ width: 50, height: 50 }} />{heThongRap.tenHeThongRap}</a>
                            })}


                        </div>
                        <div className="tab-content " id="v-pills-tabContent col-10">

                            {chiTietPhim.heThongRapChieu?.map((heThongRap, i) => {

                                //cái dầu tiên bấm ko ra nên làm cái active này
                                let active = i === 0 ? 'active' : '';

                                return <div key={i} className={'tab-pane fade show' + active} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">{heThongRap.cumRapChieu?.map((cumRap, i) => {
                                    return <div key={i}>
                                        <span>{cumRap.tenCumRap}</span>

                                        <div className="row">
                                            {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, i) => {
                                                return <NavLink key={i} to={'/chitietphongve' + lichChieu.maLichChieu}>
                                                    <div className="col-2">
                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </div>
                                                </NavLink>
                                            })}
                                        </div>

                                    </div>
                                })}</div>
                            })}

                            {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">home</div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">profile</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">mes</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">ELTR</div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

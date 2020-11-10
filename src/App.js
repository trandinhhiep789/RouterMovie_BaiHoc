import logo from './logo.svg';
import './App.css';
import TrangChu from './Pages/TrangChu';
import { Route, Switch } from 'react-router-dom'
import LienHe from './Pages/LienHe';
import GioiThieu from './Pages/GioiThieu';
import Header from './Components/Header';
import DangNhap from './Pages/DangNhap';
import Home from './Pages/Home';
import DangKy from './Pages/DangKy';
import DemoHOC from './HOC/DemoHOC';
import { HomeTemplate } from './Templates/HomeTemplate';
import { UserTemplate } from './Templates/UserTemplate';
import { AdminTemplate } from './Templates/AdminTemplate';
import QuanLyPhim from './Pages/QuanLyPhim';
import QuanLyNguoiDung from './Pages/QuanLyNguoiDung';
import ChiTietPhim from './Pages/ChiTietPhim';
import PhongVe from './Pages/PhongVe';

function App() {
  return (
    <>
      {/* <Header /> */}

      {/* Route đúng đương dẫn mới hiển thị, nếu để <h1>abc</h1> thì sẽ luôn được hiển thị */}
      {/* Switch: nhập chính xác đường dẫn mới hiển thị vd: /lienhe */}
      <Switch>
        <HomeTemplate exact path='/trangchu' Component={TrangChu} />
        <UserTemplate exact path='/lienhe' Component={LienHe} />
        <AdminTemplate exact path='/gioithieu' Component={GioiThieu} />

        <HomeTemplate exact path='/chitietphim/:maPhim' Component={ChiTietPhim} />
        <HomeTemplate exact path='/chitietphongve/:maLichChieu' Component={PhongVe} />

        <Route exact path='/dangnhap' component={DangNhap} />
        <Route exact path='/dangky' component={DangKy} />
        <Route exact path='/demohoc' component={DemoHOC} />

        <AdminTemplate exact path='/admin/quanlyphim' Component={QuanLyPhim} />
        <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />
        <Route exact path='/home' component={Home} />
        {/* route mặc định*/}
        <Route exact path='/' component={TrangChu} />
      </Switch>


      {/* phiên bản mới
      <Route path='/lienhe'>
        <LienHe />
      </Route> */}
    </>
  );
}

export default App;

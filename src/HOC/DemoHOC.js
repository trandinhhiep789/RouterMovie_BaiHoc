import React, { useState } from 'react'
import DangKy from '../Pages/DangKy'
import DangNhap from '../Pages/DangNhap'
import GioiThieu from '../Pages/GioiThieu'
import LienHe from '../Pages/LienHe'
import Modal from './Modal'

const DangKyWithModal = new Modal('Đăng Ký', DangKy)
const DangNhapWithModal = new Modal('Đăng nhap', DangNhap)

export default function DemoHOC(props) {

    // const [ModalComponent, setModalComponent] = useState(DangKy)
    // const [title, setTitle] = useState('dangky')

    // const moFormDangKy = () => {

    // }

    // const moFormDangNhap = () => {

    // }

    const [state, setState] = useState('DK')

    const renderModal = () => {
        if (state === 'DK') {
            return DangKyWithModal
        }
        else {
            return DangNhapWithModal
        }
    }



    // const renderModal = () => {
    //     const ComponentWithModal = new Modal(title, ModalComponent)
    //     return ComponentWithModal
    // }
    return (
        <div>
            <button data-toggle="modal" data-target="#modelId" onClick={() => {
                setState('DK')
            }}>mo form dang KY</button>
            <button data-toggle="modal" data-target="#modelId" onClick={() => {
                setState('DN')
            }}>mo form dang NHAP</button>
            {renderModal()}
        </div>
    )
}

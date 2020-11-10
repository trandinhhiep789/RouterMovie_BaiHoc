const { USER_LOGIN } = require("../../Util/Config")

let userLogin = {}
if (localStorage.getItem(USER_LOGIN)) {
    // lay userLogin trong storage gan cho state
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
    userLogin
}
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            console.log("ok");
            state.userLogin = action.userLogin
            return { ...state }
        }
        default: return { ...state }
    }
}
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

export const UserTemplate = (props) => {

    const [height, setHeight] = useState(window.innerHeight)

    //sau khi render xong useEffect được gọi ra theo dạng empty list, chạy 1 lần set cái Height
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight)
        }
    }, [])

    const { Component, ...restParams } = props
    return <Route {...restParams} render={(...propsRoute) => {
        return <div className="row" style={{ height }}>
            <div className="col-6">
                <img src="https://picsum.photos/2000/1000" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="col-6">
                <Component {...propsRoute} />
            </div>
        </div>
    }} />
}
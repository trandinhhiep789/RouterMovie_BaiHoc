
import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Header'


export const HomeTemplate = (props) => {
    let { Component, ...restParam } = props
    //route not router
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <Header />
            <Component {...propsRoute} />
        </>
    }} />
}

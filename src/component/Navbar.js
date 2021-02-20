import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="">
                    <div className="navbar-brand text-wrap">CGPI/CGPA TO PERCENTAGE CONVERTER <i>(Engineering Under-Graduate)</i> </div>
                </div>
            </nav>

            <div className="">
                <div className=" bg-mu pt-2 right d-flex justify-content-around">
                   
                    <NavLink to="/PuneUniversity" className='bColor' activeClassName='borderColor' ><img src='https://tse1.mm.bing.net/th?id=OIP.DnnLRyVw3TCxbqjRQy55JgAAAA&pid=Api&P=0&w=300&h=300' className="img-fluid img-thumbnail" alt="Pune University" title='Pune University' /></NavLink>
                    <NavLink exact to="/" className='bColor' activeClassName='borderColor' ><img src='https://tse4.mm.bing.net/th?id=OIP.48qcyGzE0M-IGVUSLto1EAAAAA&pid=Api&P=0&w=300&h=300' className="img-fluid img-thumbnail" alt="Mumbai University" title='Mumbai University' /></NavLink>
                    <NavLink to="/ShivajiUniversity" className='bColor' activeClassName='borderColor' ><img src='https://tse2.mm.bing.net/th?id=OIP.ZwA6U6SDUwBZUx7AW6EWBAHaHY&pid=Api&P=0&w=300&h=300' className="img-fluid img-thumbnail" alt="Shivaji University" title='Shivaji University' /></NavLink>
                    <NavLink to="/NagpurUniversity" className='bColor' activeClassName='borderColor' ><img src='https://tse2.mm.bing.net/th?id=OIP.RQYetuiPs29_pTTKWOieKwAAAA&pid=Api&P=0&w=300&h=300' className="img-fluid img-thumbnail" alt="Nagpur University" title='Nagpur University' /></NavLink>
                    <NavLink to="/NorthMaharashtraUniversity" className='bColor' activeClassName='borderColor' ><img src='https://tse2.mm.bing.net/th?id=OIP.Nn7KRdtK02cXBFRyKQJsBgAAAA&pid=Api&P=0&w=300&h=300' className="img-fluid img-thumbnail" alt="North Maharashtra University" title='North Maharashtra University' /></NavLink>
                </div>
            </div>

        </>
    )
}

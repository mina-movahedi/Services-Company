import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/SideMenu.css'


export default class SideMenu extends Component {
    render() {
        return (
            <div className='mainMenu'>
                <ul>
                    <li className='subMenu'>
                        <Link to={{pathname: 'HomeServices'}}>خدمات منزل</Link>
                    </li>
                    <li className='subMenu'>
                        <Link to={{pathname: 'MaintenanceServices'}}>تاسیسات</Link>
                    </li>
                    <li className='subMenu'>
                        <Link to={{pathname: 'CarServices'}}>تعمیر خودرو</Link>
                    </li>

                </ul>

            </div>
        )
    }


}


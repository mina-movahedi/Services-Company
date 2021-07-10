import React, {Component} from "react";
import SideMenu from "./SideMenu";
import Table from './Table';

export default class SearchView extends Component {

    render() {
        return (
            <div>
                <a>خروج</a>
                <div style={{
                    border: '5px',
                    borderColor: 'blue',
                    textAlign: 'right',
                }}><p>سفارشات شما</p></div>
                <SideMenu/>
                <Table orderId/>
            </div>
        )
    }

}

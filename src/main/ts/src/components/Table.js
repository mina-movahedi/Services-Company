import React, {Component} from 'react';
import '../css/Table.css';


export default class Table extends Component {

    state = {
        students: [
            {id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com'},
            {id: 2, name: 'Ali', age: 19, email: 'ali@email.com'},
            {id: 3, name: 'Saad', age: 16, email: 'saad@email.com'},
            {id: 4, name: 'Asad', age: 25, email: 'asad@email.com'}
        ]
    }

    componentDidMount() {

    }


    renderTableData() {
        return this.state.students.map((student, index) => {
            const {id, name, age, email} = student;
            return (
                <>
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{email}</td>
                    </tr>
                </>
            )


        })
    }

    renderTableHeader() {

        // let header = Object.keys(this.state.students[0])

        // return header.map((key, index) => {
        // <th key ={index}>{key.toUpperCase()}</th>
        // })
    }

    render() {
        return (
            <div>
                <h1 id='title'>سفارشات شما</h1>
                <table id='students'>
                    <tbody>
                    {/* {this.renderTableHeader()} */}
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>email</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

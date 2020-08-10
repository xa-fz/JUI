import React, { Component } from 'react';
import './table.less'

export default class Table extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (
            <table style={{border: '1px solid #000'}} className="">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Tom</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Lucy</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
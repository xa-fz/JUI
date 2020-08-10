import React, { Component } from 'react';
import RESOURCE from '../../resource';
import Table from '../../Components/Table';

export default class TableContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: <span></span>
        }
    }

    componentDidMount () {
        let currentComponent;
        RESOURCE.TABLE_INFO_ARR.forEach(item => {
            switch(item.type) {
                case 'tab-basic':
                    currentComponent = 
                    <Table>

                    </Table>
                break;
                default:
                break;
            }
        })
        this.setState({
            currentComponent
        })
    }

    render() {
        const { currentComponent } = this.state;
        return (
            <div className="contentCommonStyle tableContent">
                <div className='header'>
                    <h1>Table 表格</h1>
                </div>
                <div className="tableComponent mt-20">
                    {currentComponent}
                </div>
            </div>
        )
    }
}
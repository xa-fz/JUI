import React, { Component } from 'react';

export default class CodeBtnNormal extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <span>import</span>
                &nbsp;
                <span>React</span>
                <span>,</span>
                <span>{` { `}</span>
                <span>Component</span>
                <span>{` } `}</span>
                <span>from</span>
                &nbsp;
                <span>'</span>
                <span>react</span>
                <span>'</span>
                <span>;</span>
                <br />
                <span>import</span>
                <span>{` { `}</span>
                <span>Button</span>
                <span>{` } `}</span>
                <span>from</span>
                &nbsp;
                <span>'</span>
                <span>JUI</span>
                <span>'</span>
                <span>;</span>
                <br/><br/>
                <span>export</span>
                &nbsp;
                <span>default</span>
                &nbsp;
                <span>class</span>
                &nbsp;
                <span>ButtonContent</span>
                &nbsp;
                <span>extends</span>
                &nbsp;
                <span>Component</span>
                <br/>
                <span>{`{`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>handleClick</span>
                &nbsp;&nbsp;
                <span>{`=`}</span>
                &nbsp;&nbsp;
                <span>{`()`}</span>
                &nbsp;&nbsp;
                <span>{`=>`}</span>
                &nbsp;&nbsp;
                <span>{`{`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`console.log`}</span>
                <span>{`(`}</span>
                <span>'</span>
                <span>点击按钮</span>
                <span>'</span>
                <span>{`)`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`}`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>render</span>
                <span>{`()`}</span>
                <span>{`{`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>return</span>
                &nbsp;&nbsp;
                <span>{`(`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`<`}</span>
                <span>div</span>
                <span>{`>`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`<`}</span>
                <span>Button</span>
                &nbsp;&nbsp;
                <span>type</span>
                <span>{`=`}</span>
                <span>'</span>
                <span>Primary</span>
                <span>'</span>
                &nbsp;&nbsp;
                <span>handleClick</span>
                <span>{`=`}</span>
                <span>{`{`}</span>
                <span>this.handleClick</span>
                <span>{`}`}</span>
                &nbsp;
                <span>{`/`}</span>
                <span>{`>`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`<`}</span>
                <span>Button</span>
                &nbsp;&nbsp;
                <span>type</span>
                <span>{`=`}</span>
                <span>'</span>
                <span>Default</span>
                <span>'</span>
                <span>{`/`}</span>
                <span>{`>`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`<`}</span>
                <span>Button</span>
                &nbsp;&nbsp;
                <span>type</span>
                <span>{`=`}</span>
                <span>'</span>
                <span>Danger</span>
                <span>'</span>
                <span>{`/`}</span>
                <span>{`>`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`<`}</span>
                <span>div</span>
                <span>{`/`}</span>
                <span>{`>`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`)`}</span>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{`}`}</span>
                <br/>
                <span>{`}`}</span>
            </div>
        )
    }
}


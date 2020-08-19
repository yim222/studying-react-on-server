import React, {useState} from 'react';


export function GeneralCompsHooks(){
    return(
        <div>
            <h2>General Hooks Components</h2>
            <SimpleSquareHooks/>
        </div>
    )
}

export function SimpleSquareHooks(props){

    const [color, setColor] = useState('red');
    const [border, setBorder] = useState('yellow');
    const [width, setWidth] = useState('50');
    const [height, setHeight] = useState('50');
    const [style, setStyle] = useState({
        backgroundColor: color,
        border: '2px solid ' + border,
        width: width+'px',
        height: height+ 'px'
    });
    return(
        <div>
            <h3>Simple Square by hook</h3>

            <div style={style}>

            </div>
            Change width:
            <input name = 'width' type = 'number' onChange={(e) => {setWidth(e.target.value)}} value={width}/>
        </div>

    );
}
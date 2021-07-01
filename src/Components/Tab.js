import '../default.css'
import React from 'react';

function Tab(props) {
    const add_style = () =>{

        if(props.out.title === "Home" && props.out.id === props.active_tab) {
            return {color: "#f0f0e8", backgroundColor: "#405c3d", width: "20%"};
        }
        else if (props.out.title === "Home" && props.out.id !== props.active_tab) {
            return {width: "20%"};
        }
        else if(props.out.id === props.active_tab) {
            return {color: "#f0f0e8", backgroundColor: "#405c3d"}
        } else {
            return {}
        }
    };

    return (
        <div className="button" style={add_style()} onClick ={props.ctab.bind(this, props.out.id)}>
            <a>{props.out.title}</a>
        </div>
    );

}

export default Tab;
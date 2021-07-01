import React, {Component} from 'react';

import Tab from './Tab'

class TabList extends Component {
  render() {
        return (
            <div>
            <div className= "content-line">
            <Tab out={this.props.tabs[0]} active_tab={this.props.active_tab} ctab={
                    this.props.ctab} />
            </div>
            {delete this.props.tabs[0]}
            {console.log(this.props.tabs)}
            <div className="content-line">
                {this.props.tabs.map(
                    (tab)=>
                    <Tab out={tab} active_tab={this.props.active_tab} ctab={
                    this.props.ctab}/>
                )}
            </div>
            </div>
        );
    }
}

export default TabList;
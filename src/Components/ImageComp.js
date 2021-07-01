import React from "react";
import "../default.css";
export default class ImageComp extends React.Component {

  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)
    var comp=this.props.src;
    var expand = comp.substr(comp.lastIndexOf('/') + 1);
    expand = process.env.PUBLIC_URL + '/assets/' + expand;
    return (
      <div>
        <div style={{height: this.props.height}}>
        <img
          className="small"
          src= {comp}
          onClick={this.handleShowDialog}
          alt=""
        />
        </div>
        {this.state.isOpen && !isMobile &&(
          <div id="Lightbox" className="modal" style={{display : 'block'}} onClick={this.handleShowDialog}>
			      <img id="sick" src={expand} className="zoom" alt=""  />
		      </div>
        )}
         
      </div>
    );
  }
}
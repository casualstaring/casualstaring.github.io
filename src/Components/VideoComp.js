import React from "react";
import "../default.css";

export default class YTVideoComp extends React.Component {

  state = { isOpen: false };

  thumbnail_style="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto; cursor:pointer;}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>"

  thumb = "https://img.youtube.com/vi/" + this.props.src.substr(this.props.src.lastIndexOf('/') + 1) + "/0.jpg";
  thumb_src = this.thumbnail_style + '<img src=' + this.thumb + '><span>▶</span>';

  handleShowDialog = () => {
    console.log("cliked");
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <div className="content-atom"  onClick={this.handleShowDialog}>
            <iframe title="Thumbnail" width={this.props.width} height={this.props.height}
                srcDoc={this.thumb_src}>
            </iframe>
            <div class="content-iframe"></div>
            <figcaption>{this.props.caption}</figcaption>

        </div>
        {this.state.isOpen && (
          <div id="Lightbox" class="modal" style={{display : 'block'}} onClick={this.handleShowDialog}>
          <div className="content-atom" >
              <iframe title="Expanded Thumbnail" className="thumb" id="sick" src={this.props.src} frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
          </div>
          </div>
        )}
      </div>
    );
  }
}
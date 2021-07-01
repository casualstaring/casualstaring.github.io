import React, {Component} from 'react';
import {HomeBody, HomeTitle} from './pages/Home';
import {TextBody, TextTitle} from './pages/Text';
import {ImageBody, ImageTitle} from './pages/Image';
import {VideoBody, VideoTitle} from './pages/Video';
import {StimBody, StimTitle} from './pages/Stim';
import './default.css';

class Body extends Component {

    render() {
        var display_content = ()=> {
            var active_tab = this.props.active_tab;
            if( active_tab === 1) {
                return <TextBody/>
            } else if( active_tab === 2) {
                return <ImageBody/>
            } else if (active_tab === 3) {
                return <VideoBody/>
            } else if (active_tab === 4) {
                return <StimBody/>
            } else  {
                return <HomeBody/>
            } 
        }

        return (display_content());
    }
}

class BodyTitle extends Component {

    render() {
        var display_content = ()=> {
            var active_tab = this.props.active_tab;
            if( active_tab === 1) {
                return <TextTitle/>
            } else if( active_tab === 2) {
                return <ImageTitle/>
            } else if (active_tab === 3) {
                return <VideoTitle/>
            } else if (active_tab === 4) {
                return <StimTitle/>
            } else  {
                return <HomeTitle/>
            } 
            
        }

        return (display_content());
    }
}

export {
    BodyTitle, 
    Body,
}
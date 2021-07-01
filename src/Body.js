import React, {Component} from 'react';
import {HomeBody, HomeTitle} from './pages/Home';
import {TextBody, TextTitle} from './pages/Text';
import {ImageBody, ImageTitle} from './pages/Image';
import {VideoBody, VideoTitle} from './pages/Video';
import {TableBody, TableTitle} from './pages/Table';
import {EmailBody, EmailTitle} from './pages/Email';
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
                return <TableBody/>
            } else if (active_tab === 5) {
                return <EmailBody/>
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
                return <TableTitle/>
            } else if (active_tab === 5) {
                return <EmailTitle/>
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
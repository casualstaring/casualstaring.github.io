import React from 'react'
import '../default.css'
import YTVideoComp from '../Components/VideoComp'

function VideoTitle() {
    return (
        <div>
             <h1 align="center" className="title">Casual Stare (Video)</h1>
        </div>
    );
}

function VideoBody() {
    var width=320;
    var height=240;
    return (
    <div>

        <div className="content-line">
            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/iWxzv_yWtPM" width={width} height={height} caption="15.responseTo0068and0069"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/jHo0Uyes5Po" width={width} height={height} caption="14.0069"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/xCvJ5G3G6S8" width={width} height={height} caption="13.0068"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/ATIZVr5cpUo" width={width} height={height} caption="12.neg"/>
            </div>
        </div>

        <div className="content-line">
            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/S8MFKT-Yj_o" width={width} height={height} caption="11.missi0n"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/fc4EWgGBRik" width={width} height={height} caption="10.quality_is_important_but_there_are_consequences"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/Q8CKjevb_JE" width={width} height={height} caption="9.doyou"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/2Y1GUU8v_oQ" width={width} height={height} caption="8.my_lightingOff"/>
            </div>
        </div>

        <div className="content-line">
            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/IR6OFxFHTjg" width={width} height={height} caption="7.near_misses_via_socks"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/pv0JfDF4giM" width={width} height={height} caption="6.llllllwall"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/2BVP1sTesdQ" width={width} height={height} caption="5.flutterRun"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/Emz5Iob3PgQ" width={width} height={height} caption="4.heavyStart"/>
            </div>
        </div>

        <div className="content-line">
            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/LJkysl8aM1E" width={width} height={height} caption="3.syncRoof"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/7X1hRigGXi0" width={width} height={height} caption="2.moth_0"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/l857GoGftsQ" width={width} height={height} caption="1.waterCup"/>
            </div>

            <div className="content-atom">
                <YTVideoComp src="https://www.youtube-nocookie.com/embed/XDm2MTW1Z5A" width={width} height={height} caption="0.theMorningShock"/>
            </div>
        </div>	
	</div>
    );
}
export {
    VideoTitle, 
    VideoBody,
}
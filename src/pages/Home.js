import React from 'react'
import '../default.css'

function HomeTitle() {
    return (
    <div>
        <h1 className="title" align="center">
        <span className="small">...no...</span>
        <span className="mistake">Luasca Rates</span>
        <span className="small">...no...</span>
        <span className="emphasis">Casual Star</span><span className="tweek">e</span>
        <span className="small">...no...</span>
        <span className="mistake">Aacslu Erast</span>
        <span className="small">...no...</span>
    </h1>
    </div>
    );
}

function HomeBody() {
    return (
        <div>
        <div id="no_margins">
            <img className="title_img" src={process.env.PUBLIC_URL + "/assets/snake-sketch.jpg"} height="95%" alt="None" />
        </div>
        <p className="cover" style={{marginTop: '-10px'}}>
            <b>An Intimate Collection of Casual AV Pairings. </b><br></br>
            On an individual level, lacks narrative structure. <br></br>
            The aggregate becomes a narrative.<br></br>
            Some vague guidelines:
        </p>
        <p className="cover" style={{paddingLeft: '10%', textAlign: 'left'}}>
            <b>1)</b> Notice moments; analogous to a walk.
        </p>
        <p className="cover" style={{paddingLeft: '50%'}}>
            <b>2)</b> Casual documentation of moments through some language.
        </p>
        <p className="cover" style={{paddingLeft: '30%'}}>
            <b>3)</b> Communicatation of those documents (internet).
        </p>
        <p className="cover" style={{paddingLeft: '0%'}}>
            <b>4)</b> Connect and build new documents of moments though creation with others.<br></br>
        </p>
        <p className="cover" style={{paddingLeft: '0%'}}>
            <b>5)</b> Repeat steps 1 - 4 till a desire for overarching narrative becomes overwhelming.<br></br>
        </p>

        <p className="cover" style={{paddingLeft: '0%', textAlign: 'left'}}>
            <b>6)</b> Take previous collaborations and edit/splice them to build a cohesive collage of what has been
            documented.
        </p>

        <p className="cover" style={{paddingLeft: '10%' }}>
            <b>
                This is where its okay to be critical yet reflective on what has been documented.<br></br>
                Use this self-reflection as a means to build projects more traditionally organized.<br></br>
            </b>
        </p>
        </div>
    );
}

export {
    HomeTitle, 
    HomeBody,
}
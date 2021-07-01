import React from 'react'
import '../default.css'
import ImageComp from '../Components/ImageComp'

function ImageTitle() {
    return (
        <div>
           <h1 align="center" className="title">Casual Stare (Image)</h1>
        </div>
    );
}


function ImageBody() {
    return (
        <div>
        <div id="content">
		{/* <!---The Lights---> */}
		<h2 align="center" className="title">012021 - the lights (near montrose)</h2>

		<div className="content-line">
			<div className="content-atom">
                <ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_5.jpg"} height="300px"/>
			</div>
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_7.jpg"} height="300px"/>
			</div>
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_3.jpg"} height="300px"/>
			</div>
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_2.jpg"} height="300px"/>
			</div>
		</div>
		<div className="content-line">
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_1.jpg"} height="300px"/>
			</div>
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_6.jpg"} height="300px"/>
			</div>
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_8.jpg"} height="300px"/>
			</div>
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/the-lights_4.jpg"} height="300px"/>

			</div>
		</div>
        <h2 align="center" className="title">032020 - ye goodie ole days (isla vista)</h2>
		<div className="content-line">
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032020_good-ole-days_3.jpg"} height="300px"/>

			</div>
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032020_good-ole-days_5.jpg"} height="300px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032020_good-ole-days_4.jpg"} height="300px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032020_good-ole-days_2.jpg"} height="300px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032020_good-ole-days_1.jpg"} height="300px"/>
			</div>
		</div>

		<h2 align="center" className="title">022020 - alex gets his plane stuck (camino corto field)</h2>
		<div className="content-line">

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/022020_alex-plane-stuck_2.jpg"} height="250px"/>
				<figcaption>plane stuck</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/022020_alex-plane-stuck_4.jpg"} height="250px"/>
				<figcaption>alex first tries poking it with pvc pipes</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/022020_alex-plane-stuck_1.jpg"} height="250px"/>
				<figcaption>alex explains his situation to the crossing guard</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/022020_alex-plane-stuck_3.jpg"} height="250px"/>
				<figcaption>alex uses a pulley system succesfully</figcaption>
			</div>

		</div>

		<h2 align="center" className="title">012020 - marisa gets close (UCSB west campus)</h2>
		<div className="content-line">

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/012020_marisa-gets-close_2.jpg"} height="250px"/>
				<figcaption>far</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/012020_marisa-gets-close_1.jpg"} height="250px"/>
				<figcaption>closer</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/012020_marisa-gets-close_3.jpg"} height="250px"/>
				<figcaption>closerrrr</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/012020_marisa-gets-close_4.jpg"} height="250px"/>
				<figcaption>close (its been got)</figcaption>
			</div>

		</div>

		<h2 align="center" className="title">002019 - live sound focus (coaxial, LA)</h2>
		<div className="content-line">

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/002019_misc-sound-focus_1.jpg"} height="300px"/>
				<figcaption>spencervh</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/002019_misc-sound-focus_2.jpg"} height="300px"/>
				<figcaption>patrick shiroishi</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/002019_misc-sound-focus_3.jpg"} height="300px"/>
				<figcaption>jackilgore</figcaption>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/002019_misc-sound-focus_4.jpg"} height="300px"/>
				<figcaption>interracial s*expletive*x</figcaption>
			</div>

		</div>

		<h2 align="center" className="title">092019 - lights fall (unknown UCLA classNameroom)</h2>
		<div className="content-line">

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/092019_lights-fall_2.jpg"} height="300px"/>

			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/092019_lights-fall_1.jpg"} height="300px"/>

			</div>
		</div>

		<h2 align="center" className="title">062019 - domestics fall (isla vista)</h2>
		<div className="content-line">

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_2.jpg"} height="300px"/>

			</div>
			
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_1.jpg"} height="300px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_7.jpg"} height="300px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_3.jpg"} height="300px"/>
			</div>

			
		</div>

		<div className="content-line">
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_4.jpg"} height="250px"/>

			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_6.jpg"} height="250px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_5.jpg"} height="250px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/062019_domestics-fall_8.jpg"} height="250px"/>
			</div>
		</div>

		<h2 align="center" className="title">032019 - in a dam (near JPL)</h2>
		<div className="content-line">
			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032019_in-a-dam_4.jpg"} height="280px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032019_in-a-dam_2.jpg"} height="280px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032019_in-a-dam_1.jpg"} height="280px"/>
			</div>

			<div className="content-atom">
				<ImageComp src={process.env.PUBLIC_URL + "/assets/compress/032019_in-a-dam_3.jpg"} height="280px"/>
			</div>
		</div>
        </div>
        </div>
    );
}

export {
    ImageTitle, 
    ImageBody,
}
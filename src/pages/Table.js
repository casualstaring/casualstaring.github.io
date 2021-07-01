import React from 'react'
import '../default.css'

function TableTitle() {
    return (
        <div>
             <h1 align="center" className="title">Casual Staring Stimulation (Table)</h1>
        </div>
    );
}

function TableBody() {
    return (
        <div id="Table Content">
		<table className="center">
			<tr>
				<th>Name</th>
				<th>Details</th>
			</tr>
			<tr>
				<td>
					<a href="https://www.youtube.com/channel/UCProRXaHaf2jfQsPlLpMI1w">casual staring</a>
				</td>
				<td>
					"this one is the full casual staring channel" --mjm
				</td>
			</tr>
			<tr>
				<td>
					<a href="https://michaelseh.xyz/">michaelseh</a>
				</td>
				<td>
					"Dang, humans are amazing." -- anonymous
				</td>
			</tr>
			<tr>
				<td>
					<a href="https://b0gl6dy.com/">b0gl6dy</a>
				</td>
				<td>
					"thinking about : the aquatic worm that absorbs its brain when it finds a spot to anchor for the duration of
					its
					life." -- bogs</td>
			</tr>
			<tr>
				<td>
					<a href="https://jackilgore.com/">jackilgore</a>
				</td>
				<td>
					"k-pockets, n-stones: uniform stone sucky algorithm" -- malloy
				</td>
			</tr>
			<tr>
				<td>
					<a href="https://alexmeinhof.bandcamp.com/">alexmeinhof</a>
				</td>
				<td>
					"i just want to put this on the record. I think this is a bad idea" -- ameinhof
				</td>
			</tr>
			<tr>
				<td>
					<a href="https://www.sagejenson.com/">sagejenson</a>
				</td>
				<td>
					"let's finish up this A/V work :(" -- jack
				</td>
			</tr>
			<tr>
				<td>
					<a href="https://rateyourmusic.com/~Jackalaka">music catalog</a>
				</td>
				<td>
					"SOUNDDDDDDD it is the sense for me. WIKOOOchuqWOWpqitskitskitskFFFOOOOFHHUT" -- bach
				</td>
			</tr>
			<tr>
				<td>
					<a href="https://github.com/EmissionControl2/EmissionControl2">EmissionControl2</a>
				</td>
				<td>
					"thinly slice those" -- siturc doars
				</td>
			</tr>
		</table>        
        </div>
    );
}

export {
    TableTitle, 
    TableBody,
}
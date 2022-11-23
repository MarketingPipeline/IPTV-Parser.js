/**!
 * @license IPTV-Parser.js - A JavaScript library for easily parsing M3U from text or URL. 
 * LICENSED UNDER MIT LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/IPTV-Parser.js
 */


import parser from "https://cdn.skypack.dev/iptv-playlist-parser@0.12.1"


export async function ParseM3U(url, isURL) {

	/// CORE FUNCTION(s) FOR IPTV-Parser.js ///


	// Fetch and Parse IPTV / M3U 
	async function fetchAndParse(url_or_string, isURL) {

		
		
		/// NO VALUE WAS PROVIDED TO PARSE... 
		if (!url_or_string) {
			if (isURL) {
				throw {
					iptv_parser_error: "URL to fetch is required"
				}
			} else {
				throw {
					iptv_parser_error: "Text to parse is required"
				}
			}
		}



		let playlist = null;

		if (isURL) {
			/// FETCH & PARSE M3U FROM URL
			const url = url_or_string
			const rsp = await fetch(url),
				data = await rsp.text();
			if (rsp.status != 200) {
				// HTTP STATUS ERROR
				throw {
					iptv_parser_error: `HTTP ${rsp.status} error`
				}
			}
			playlist = data
		} else {
			// PARSE M3U FROM FILE
			playlist = url_or_string
		}





		let foundData;

		// CHECK IF PLAYLIST / M3U is valid...
		try {
			const m3uFile = await CheckIfValidPlayList(playlist)
			// playlist was valid - return it!
			return m3uFile
		} catch (err) {
			// return any errors if invalid!
			return err
		}





		async function CheckIfValidPlayList(playlist) {
			const content = playlist

			let lines = content.split('\n').map(parseLine)
			let firstLine = lines.find(l => l.index === 0)

			if (!firstLine || !/^#EXTM3U/.test(firstLine.raw)) {
				// PLAYLIST / M3U file is not valid :(
				throw {
					iptv_parser_error: "Playlist is not valid"
				}

			} else {
				// Playlist was valid! 
				const result = parser.parse(playlist)
				/// return the data
				return await result

			}

			function parseLine(line, index) {
				return {
					index,
					raw: line
				}
			}
		}

	}
	/// END OF CORE FUNCTION(s) for IPTV-Parser.js ///



	/// CALL THE IPTV-Parser.JS //
	try {
		if (isURL) {
			// FETCH & PARSE M3U  LINKS 
			let result = await fetchAndParse(url, "url");
			return result
		} else {
			// PARSE M3U FROM STRING
			let result = await fetchAndParse(url);
			return result
		}

	} catch (err) {

		// return any errors! 
		return err

	}
}

# IPTV-Parser.js

<div align="center">
<a href="https://github.com/MarketingPipeline/IPTV-Parser.js"> 
<img height=350 alt="Repo Banner for IPTV-Parser.js" src="https://capsule-render.vercel.app/api?type=waving&color=539bf5&height=300&section=header&text=IPTV-Parser.js&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Easily%20parse%20M3U%20from%20text%20or%20URL&descAlignY=60&descAlign=50"></img></a>

</div>  
    
<p align="center">
  <b>A easy to use, pure vanilla JavaScript M3U / IPTV parser</b>

  <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/IPTV-Parser.js">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/IPTV-Parser.js.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/IPTV-Parser.js/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/IPTV-Parser.js.svg?style=social&label=Fork">
  </a>
   </p>  



This is a basic JavaScript library for fetching & parsing M3U files from a URL or path to file. It uses [iptv-list-parser](https://github.com/freearhey/iptv-playlist-parser) under the hood with some extra functionallity & improved error handling. 



## Example usage


> Note: Any errors will be returned in a JSON key called <code>iptv_parser_error</code>


### Parse M3U8 from URL

```js
import {ParseM3U} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/IPTV-Parser.js/dist/iptv-parser.min.js';

async function Fetch_IPTV_Links() {
  try {
     let IPTV_Results = ParseM3U(`https://raw.githubusercontent.com/iptv-org/iptv/master/streams/us_pluto.m3u`, "URL")
     console.log(await IPTV_Results)
  } catch (err) {
  //  console.error(err);
  }
}
Fetch_IPTV_Links()
```
will return a JSON object of parsed results. 


### Parse M3U8 from string

```js
import {ParseM3U} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/IPTV-Parser.js/dist/iptv-parser.min.js';

async function Parse_M3U_String() {
  try {
     let IPTV_Results = ParseM3U(`#EXTM3U x-tvg-url="http://example.com/epg.xml.gz"
#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-url="http://195.154.221.171/epg/guide.xml.gz" timeshift="3" catchup="shift" catchup-days="3" catchup-source="https://m3u-server/hls-apple-s4-c494-abcdef.m3u8?utc=325234234&lutc=3123125324" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)
#EXTGRP:News
#EXTVLCOPT:http-referrer=http://example.com/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)
http://example.com/stream.m3u8`)
     console.log(await IPTV_Results)
  } catch (err) {
    console.log(err)
  }
}

Parse_M3U_String()
```

will return a JSON object of parsed results. 

<br> 


## CDN

### URL

    https://cdn.jsdelivr.net/gh/MarketingPipeline/IPTV-Parser.js/dist/iptv-parser.min.js

### Import 

    import {ParseM3U} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/IPTV-Parser.js/dist/iptv-parser.min.js';
     






## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/IPTV-Parser.js)

Want to improve this project? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/IPTV-Parser.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/IPTV-Parser.js)

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/MarketingPipeline/IPTV-Parser.js/blob/main/LICENSE) file for
details.

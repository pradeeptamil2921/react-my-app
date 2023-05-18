//import ig from 'http://surya.ac.in/wp-content/uploads/2020/09/suryaslider3.png'
export default function Image(){
    return(
        < >
        <div className="container d-flex justify-content-between">
        <div className="container">            
            <img src={'https://www.itcilo.org/sites/default/files/courses/cover-images/AdobeStock_352717716.jpeg'} width={500} height={300}></img>
        </div>
        <div className="container">
            <video controls autoPlay loop muted src={'https://vod-progressive.akamaized.net/exp=1682411618~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F337%2F9%2F226689484%2F796814659.mp4~hmac=148c19df8f16137578db3af6cbd5de292d6047c28867c6df944d4f78923b8a24/vimeo-prod-skyfire-std-us/01/337/9/226689484/796814659.mp4'} width={500} height={300}></video>
        </div>

        </div>
        
        </>
    )
}
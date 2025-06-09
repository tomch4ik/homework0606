import './MyCity.css'
export function City()
{
    const MyCity = {
    City:'Odesa',
    Country:'Ukraine',
    Year:'1794',
    Image1: '/1od.jpg',
    Image2: '/2od.jpg'
    };  
    return(
        <div id="ct">
            <img src= {MyCity.Image1} id='cityimg'/>
            <img src= {MyCity.Image2} id='cityimg'/>
            <p>{MyCity.City}</p>
            <p>{MyCity.Country}</p>
            <p>{MyCity.Year}</p>
         </div>   
    );
}
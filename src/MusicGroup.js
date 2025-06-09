import './MusicGroup.css'
export function FavouriteGroup()
{
    const MusicGroup = {
        Name:'Linkin Park',
        Participants:'Честер Беннингтон, Майк Шинода, Брэд Делсон, Дэйв Фаррелл, Роб Бурдон, Джо Хан',
        Albom1:'Hybrid Theory',
        Albom2:'Meteora',
        Albom3:'A Thousand Suns',
        Image1: '/albom1.jpg',
        Image2: '/albom2.jpg',
        Image3: '/albom3.jpg'
    };
    return(
        <div id='mg'>
            <div>
                <p>{MusicGroup.Name}</p>
                <p>{MusicGroup.Participants}</p>
            </div>   
            <div>
            <img src= {MusicGroup.Image1} id='imgalb'/>
            </div>   
            <div>
                <p>{MusicGroup.Albom1}</p>
            </div>      
            <div>
            <img src= {MusicGroup.Image2} id='imgalb'/>
            </div>   
            <div>
                <p>{MusicGroup.Albom2}</p>
            </div>   
            <div>
            <img src= {MusicGroup.Image3} id='imgalb'/>
            </div>   
            <div>
                <p>{MusicGroup.Albom3}</p>
            </div>   
        </div>    
    );
}
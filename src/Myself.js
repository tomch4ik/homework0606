import './Myself.css'
export function BIO()
{
    const Profile = {
    Name:'Самофатов Григорій Ігорович',
    Telephone:'0639121671',
    Email:'samofatov.grisha@gmail.com'
    };
    return(
        <div id="prof">
            <p>{Profile.Name}</p>
            <p>{Profile.Telephone}</p>
            <p>{Profile.Email}</p>
         </div>   
    );
}
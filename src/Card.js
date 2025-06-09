import './Card.css'
export function Book()
{
    const book =
    {
        name: 'CLR Via',
        author: 'Jefry Richter',
        pages: 900,
        image: '/1.jpg'

    }
    return(

        <div>   
            <p>Book</p>
            <img src={book.image} alt={book.name} />
            <p>{book.name}</p>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    );
}
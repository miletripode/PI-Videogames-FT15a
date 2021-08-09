import './Page.css'

export default function Page ({videogamesPerPage, allVideoGames,paginado}) {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(allVideoGames / videogamesPerPage); i++){
        pageNumbers.push(i);
    }
    
    return(
        <div className='paginado'>
            {pageNumbers &&
                pageNumbers.map(number => (
                <button className='number' onClick={() => paginado(number)}>{number}</button>        
                ))
            }     

        </div>
    )
}
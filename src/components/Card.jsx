import './card.css';

const Card = ({ children, className, onClick }) => {
    return (
        <article className='card'>
            {children}
        </article>
    )
}

export default Card
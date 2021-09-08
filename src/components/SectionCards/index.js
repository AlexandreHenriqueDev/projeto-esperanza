import Card from '../Card';
import './index.scss';

export default function SectionCards(props) {

    const cards = props.cards || [];

    function renderCards(cards) {
        return (
            <>
                {cards.map(card => <Card img={card.img} text={card.text} tags={card.tags}></Card>)}
            </>
        )
    }
    return (
        <div className="cards">
            {renderCards(cards)}
        </div>
    )
}
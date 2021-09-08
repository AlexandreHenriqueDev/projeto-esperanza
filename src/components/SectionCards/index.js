import Card from '../Card';
import './index.scss';

export default function SectionCards(props) {

    const cards = props.cards || [];

    function renderCards(cards) {
        return (
            <>
                {cards.map((card, id) => <Card key={id} img={card.img} text={card.text} tags={card.tags} categoryTags={card.categoryTags} author={card.author}></Card>)}
            </>
        )
    }
    return (
        <div className="cards">
            {renderCards(cards)}
        </div>
    )
}
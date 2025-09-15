import "./Speakers.scss";

const SpeakersCard = ({ card, onHandleSelectSpeakers, descSpeaker }) => {

    return (
        <div onClick={() => onHandleSelectSpeakers(card)} key={card.id} className={`${descSpeaker.isActive === card.id ? "speakers__circle-image active" : 'speakers__circle-image'} ${card.addClass}`}>
            <img src={card.image} alt='speaker'/>
        </div>
    )
}

export default SpeakersCard;
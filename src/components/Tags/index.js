import Tag from '../Tag';
import './index.scss';

export default function Tags(props) {

    const tags = props.tags;

    function renderTags(tags) {
        return (
            <>{tags.map((tag, id) => <Tag text={tag.text} right={tag.right} key={id}></Tag>)}</>
        )
    }

    return (        
        <div className="tags">
            {tags ? renderTags(tags) : <></>}
        </div>
    )
}
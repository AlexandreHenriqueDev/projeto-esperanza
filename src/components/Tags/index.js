import Tag from '../Tag';
import './index.scss';

export default function Tags(props) {

    const tags = props.tags;

    function renderTags(tags) {
        return (
            <>{tags.map(tag => <Tag text={tag.text} right={tag.right}></Tag>)}</>
        )
    }

    return (        
        <div className="tags">
            {tags ? renderTags(tags) : <></>}
        </div>
    )
}
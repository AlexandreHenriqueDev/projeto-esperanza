import './index.scss';

export default function Tag(props) {

    const styleTag = {
        right: props.right,
        backgroundColor: props.backgroundColor || "#3c5c8f",
        color: "#fff",
        paddingTop: "3px",
        paddingBottom: "3px",
        paddingLeft: "7px",
        paddingRight: "7px",
        borderRadius: "10px",
        fontSize: "13px",
        fontWeight: "bold"
    }

    return (
        <div className="tag" style={styleTag}>
            <span>{props.text}</span>
        </div>
    )
}
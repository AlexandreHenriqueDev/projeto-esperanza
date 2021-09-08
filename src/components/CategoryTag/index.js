import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    categoryTag: {
        position: 'absolute',
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 2,
        paddingBottom: 2,
        opacity: 0.8,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        cursor: 'default'
    }
});

export default function CategoryTag(props) {
    const classes = useStyles();

    const allTags = props.tags ? props.tags: [];

    const style = {
        borderBottomRightRadius: props.author ? 0 : 8,
        borderBottomLeftRadius: props.author ? 8 : 0,
        left: props.author ? null : 0,
        right: props.author ? 0 : null,
        backgroundColor: props.author ? '#2B2F34' : '#2FB3C8'
    }

    const text = allTags.length > 0 ? allTags.join('/') : props.author;

    return (
        <div className={classes.categoryTag} style={style}>
            {text}
        </div>
    );

}
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import Tags from '../Tags';
import './index.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 285,
    minWidth: 285,
    borderRadius: 5,
    margin: 10
  },
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundColor: orange[500],
        '&:hover': {
          backgroundColor: orange[600],
        },
        borderRadius: 10,
        minWidth: 200
    },
}))(Button);


const CardActionsSection = withStyles((theme) => ({
    root: {
        border: 10,
        borderColor: '#000',
        disableSpacing: false,
        justifyContent: "center"
    }
}))(CardActions);

export default function BaseCard(props) {
    const classes = useStyles();

    const styleContentCard = {minHeight:"150px", maxHeight:"150px", overflow:"auto", textAlign: "justify"};
    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt={props.img && props.img.alt}
                height={props.img && props.img.height}
                image={props.img && props.img.path}
                title={props.img && props.img.title}
            />
            <CardContent style={styleContentCard}>
                <Tags tags={props.tags}></Tags>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActionsSection>
                <ColorButton size="medium" href="https://www.instagram.com/" target="_blank">
                    Quero conhecer
                </ColorButton>
            </CardActionsSection>
        </Card>
    );
}
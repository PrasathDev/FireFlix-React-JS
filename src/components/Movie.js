import React, { useContext } from 'react'
import { Card, Badge } from 'react-bootstrap'
import "./Movie.css";
import { HiArrowUp } from "react-icons/hi";
import { Context } from '../Context/Context';

const Movie = (props) => {
    //Theme
    console.log(props);
    const {theme} = useContext(Context);
    let card_bg = "light";
    let card_text = "dark";

    //Theme-Logic
    if(theme === "light"){
        card_bg = "light";
        card_text = "dark";
    }
    if(theme === "dark"){
        card_bg = "dark";
        card_text = "light";
    }
    
    const img_path = `https://image.tmdb.org/t/p/w500`;
    let movieTitle = props.mov.show.name;
    if(!movieTitle){
        movieTitle = props.mov.show.name;
    }
    let imgg =""
    if(props.mov.show["image"] !=undefined && props.mov.show.image["original"]!=undefined)
        imgg = props.mov.show.image.original;
    
    const desc = props.mov.show.summary.slice(0,80);
    const pop = props.mov.show.weight;
    const upvotes= props.mov.show.rating.average;
    
    console.log("image1 "+movieTitle+" "+imgg["original"]);
    return (
        <Card className = "movie-card" bg={card_bg} text={card_text} style={{ width: '18rem'}}>
            <Card.Img variant="top" src={imgg} />
            <Card.Body>
                <Card.Title style={{height : "4vw"}}>{movieTitle?movieTitle:"Dummy Title"}</Card.Title>
                <Card.Text style={{height : "6vw"}}>
                    {desc}.
                </Card.Text>
                <Card.Text>
                <span className="mx-1">Popularity :<Badge bg={card_bg}><span className="text-primary">{pop}</span></Badge></span>
                <HiArrowUp /> : {upvotes}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Movie

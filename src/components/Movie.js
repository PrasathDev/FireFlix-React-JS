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
    let movieTitle = props.mov.original_name;
    if(!movieTitle){
        movieTitle = props.mov.original_title;
    }
    const desc = props.mov.overview.slice(0,80);
    const pop = props.mov.popularity;
    const upvotes= props.mov.vote_count;
    
    let imgg =img_path + props.mov.backdrop_path; 
    //if(props.mov.show["image"] !=undefined && props.mov.show.image["original"]!=undefined)
        //imgg = props.mov.show.image.original;
    
    
    console.log("image1 "+movieTitle+" "+imgg["original"]);
    return (
        <Card className = "movie-card" bg={card_bg} text={card_text} style={{ width: '18rem'}}>
            <Card.Img variant="top" src={imgg} />
            <Card.Body>
                <Card.Title style={{height : "4vw"}}>{movieTitle?movieTitle:"Dummy Title"}</Card.Title>
                
                
            </Card.Body>
        </Card>
    )
}

export default Movie

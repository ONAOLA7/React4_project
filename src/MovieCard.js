import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = ({ id, title, Description, PosterURL, Rating }) => {
  return (
    <Card
      style={{
        width: "18rem",
        gap: "20px",
        margin: "25px",
        backgroundColor: "black",
        color: "whitesmoke",
      }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{Description}</Card.Text>
        <Card.Text>{PosterURL}</Card.Text>
        <Card.Text>{Rating}</Card.Text>
        {!!id && (
          <Card.Link as={Link} to={`/${id}`}>
            See more info
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};
export default MovieCard;

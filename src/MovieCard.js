import { Card } from "react-bootstrap";
const MovieCard = ({ title, Description, PosterURL, Rating }) => {
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
      </Card.Body>
    </Card>
  );
};
export default MovieCard;

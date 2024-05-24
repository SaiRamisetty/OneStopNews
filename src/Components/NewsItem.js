import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date ,source} = this.props;
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>
              {title}...
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left : '85%',zIndex : '1'}}>
                {source}
              </span>
            </Card.Title>
            <Card.Text>{description}...</Card.Text>
            <Card.Text className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </Card.Text>
            <Button variant="primary" href={url} target="blank">
              Read more
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

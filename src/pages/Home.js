import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  const movieImages = [
    {
      url: 'https://cdn0-production-images-kly.akamaized.net/e-aIKF5Bzgk2OXBUgrbWa2XZNeQ=/1280x1706/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4714326/original/017238100_1705060605-BCL_0.jpg',
      filmname: 'Pasutri Gaje'
    },
    {
      url: 'https://cdn.medcom.id/dynamic/content/2023/11/28/1635105/ErkxbCNVK1.jpg?w=1024',
      filmname: 'Agak Laen'
    },
    {
      url: 'https://cdn.rri.co.id/berita/11/images/1705138271260-F/z4emuio1m9m9icg.jpeg',
      filmname: 'Munkar'
    }
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Welcome to Bioskopku</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {movieImages.map((movie, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Link to={`/movie/${index + 1}`} className="text-decoration-none">
              <Card>
                <Card.Img variant="top" src={movie.url} />
                <Card.Body>
                  <Card.Title>{movie.filmname}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
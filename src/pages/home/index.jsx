// src/pages/home/index.jsx
import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import "./StylesHome.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [images, setImages] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            if (searchQuery.trim() === "") {
                setImages([]);
                return;
            }
            const response = await axios.get(
                `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=xRjTOZYB5Pa6O2Gfz8ZQ5CcpcmFyo75W8m4l0T3UNj4`
            );
            setImages(response.data.results);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    return (
        <Container className="Main-class mb-3">
            <Card className="text-center ">
                <Card.Header style={{textAlign:"center", color:"white"}} as="h1">Blink Pic - Photo Search</Card.Header>
                <Card.Body>
                    <Form className="search-bar" onSubmit={handleSearch}>
                        <Form.Control type="text" placeholder="Search for images..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <Button style={{width:300, alignSelf:"center", color:"tan"}} variant="primary" size="lg" block type="submit">Go</Button>
                    </Form>
                    <div className="images">
                        {images.length > 0 ? (
                            images.map((image) => (
                                <div>
                                    <Card.Img variant="top" src={image.urls.small} />
                                </div>
                            ))
                        ) : (
                            <p>{searchQuery.trim() !== "" ? `No images found for "${searchQuery}"` : "Enter a search term to find images"}</p>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );


}

export default Home;

import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for skeleton
import LoadingScreen from "./Components/LoadingScreen";
import NewsList from "./Components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(true); 
  const [loading, setLoading] = useState(true); 

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault(); 
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      {!loading && (
        <>
          <Navbar
            bg={darkMode ? "dark" : "light"}
            variant={darkMode ? "dark" : "light"}
            expand="lg"
            className="mb-0"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <Container>
              <Navbar.Brand
                href="/"
                className={`fw-bold fs-4 ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                News App
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbar-nav" />

              <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant={darkMode ? "outline-light" : "outline-primary"}
                      style={{ fontWeight: "bold" }}
                    >
                      Categories
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        backgroundColor: darkMode ? "#333" : "#fff",
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => handleCategoryClick("world")}
                        style={{
                          backgroundColor: darkMode ? "#333" : "#fff",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        World
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCategoryClick("business")}
                        style={{
                          backgroundColor: darkMode ? "#333" : "#fff",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Business
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCategoryClick("technology")}
                        style={{
                          backgroundColor: darkMode ? "#333" : "#fff",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Technology
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCategoryClick("sports")}
                        style={{
                          backgroundColor: darkMode ? "#333" : "#fff",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Sports
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCategoryClick("entertainment")}
                        style={{
                          backgroundColor: darkMode ? "#333" : "#fff",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Entertainment
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>

                <Form onSubmit={handleSearch} className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    name="search"
                    style={{
                      borderRadius: "50px", // Make input circular
                      backgroundColor: darkMode ? "#555" : "#fff",
                      color: darkMode ? "#fff" : "#000",
                      border: "none",
                    }}
                  />

                  <Button
                    variant={darkMode ? "outline-light" : "outline-primary"}
                    type="submit"
                    style={{
                      borderRadius: "50%",
                      padding: "0.5rem",
                      marginLeft: "-50px", // Slightly position search button over input field
                      border: "none",
                    }}
                  >
                    <FaSearch /> {/* Search icon */}
                  </Button>
                </Form>
              </Navbar.Collapse>

              <Button
                variant={darkMode ? "outline-light" : "outline-primary"}
                className="ms-auto"
                onClick={toggleDarkMode}
                style={{
                  borderRadius: "50%",
                  padding: "0.5rem",
                  border: "none",
                  marginLeft: "10px",
                }}
              >
                {darkMode ? <FaSun /> : <FaMoon />} {/* Dark mode icon */}
              </Button>
            </Container>
          </Navbar>

          <div
            className="main-container"
            style={{
              backgroundColor: darkMode ? "#111" : "#fff",
              color: darkMode ? "#fff" : "#000",
              minHeight: "100vh",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <Container>
              <Row>
                <Col
                  xs={12}
                  md={3}
                  style={{
                    padding: "20px",
                    backgroundColor: darkMode ? "#333" : "#f8f9fa",
                    borderRadius: "0.25rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    color: darkMode ? "#fff" : "#000",
                  }}
                >
                  <h3>Topics</h3>
                  <Nav className="flex-column">
                    <Nav.Link
                      onClick={() => handleCategoryClick("world")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      World
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("business")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Business
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("technology")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Technology
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("sports")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Sports
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("entertainment")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Entertainment
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("politics")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Politics
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("cricket")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Cricket
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("education")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Education
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleCategoryClick("latest")}
                      style={{
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      Latest
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col xs={12} md={9}>
                  <NewsList
                    category={category}
                    searchTerm={searchTerm}
                    darkMode={darkMode}
                  />
                </Col>
              </Row>
            </Container>
          </div>

          <a
            href="https://github.com/your-repo" // Replace with your actual GitHub repo link
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            <FaGithub size={30} />
          </a>
        </>
      )}
    </>
  );
}

export default App;

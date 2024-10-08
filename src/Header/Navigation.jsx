import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { currencies } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCurrency } from "../services/store";

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.selectedCurrency);

  const handleSubmit = (event) => {
    event.preventDefault();

    const q = event.target.q.value;

    if (q) navigate("/search/" + q);

    console.log(q);
  };

  return (
    <Navbar
      expand="lg"
      className="navbar"
      style={{ backgroundColor: "rgba(15, 30, 50, 0.9)", color: "#FFD700" }}
    >
      <Container fluid>
        <Navbar.Brand className="navbar-brand" style={{ color: "#FFD700" }}>
          CRYPTO EXCHANGE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/exchanges" className="nav-link">
              Exchanges
            </Link>
            <Link to="/compare" className="nav-link">
              Compare
            </Link>
            <NavDropdown
              title={`${selectedCurrency.name}`}
              id="navbarScrollingDropdown"
              className="dropdown-manu"
            >
              {currencies.map((currency) => (
                <NavDropdown.Item
                  className="dropdown-item"
                  active={selectedCurrency.name === currency.name}
                  key={currency.name}
                  onClick={() => dispatch(setSelectedCurrency(currency))}
                >
                  {currency.name} {currency.symbol}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="q"
            />
            <Button type="submit" variant="outline-warning">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

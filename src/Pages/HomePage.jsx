import { Button, Card } from "react-bootstrap";
import Homeimage from "../Images/homepage2.1.jpg";
import Card1 from "../Images/card1.webp";
import Card2 from "../Images/card2.webp";
import Card3 from "../Images/card3.webp";
function HomePage() {
  return (
    <>
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="col-sm-12 col-md-12 d-flex justify-content-center">
          <img
            style={{
              objectFit: "fill",
              width: "1400px",
              position: "relative",
            }}
            src={Homeimage}
            alt=""
          />
        </div>
        <div
          style={{ position: "absolute", marginRight: "800px" }}
          className="col-sm-6 col-md-3 bg-light p-4 mt-5 me-5 shadow"
        >
          <h3 className="mt-4 mb-5 text-center">Find your right car</h3>
          <select className="form-control mb-2" name="budget" id="">
            <option value="b0">Select Budget</option>
            <option value="b1">1 - 5 Lakh</option>
            <option value="b1">10 - 15 Lakh</option>
            <option value="b1">15 - 20 Lakh</option>
            <option value="b1">20 - 35 Lakh</option>
          </select>
          <select className="form-control" name="budget" id="">
            <option value="b0">Select Type</option>
            <option value="b1">Hatchback</option>
            <option value="b1">Sedan</option>
            <option value="b1">SUV</option>
            <option value="b1">MUV</option>
            <option value="b1">Luxury</option>
            <option value="b1">Super Luxury</option>
            <option value="b1">Convertible</option>
            <option value="b1">Hybrid</option>
            <option value="b1">Coupe</option>
            <option value="b1">Pickup Truck</option>
            <option value="b1">Minivan</option>
            <option value="b1">Wagon</option>
          </select>
          <button className="form-control mt-4 mb-3 bg-danger text-light shadow">
            Search
          </button>
        </div>
      </div>
      <div className="container vh-100 mt-5">
        <section className="w-100">
          <div className="row w-100 mt-5 justify-content-center">
            <div className="col-sm-12 col-md-4 w-100 mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Text className="fs-5">Hyundai Exter</Card.Text>
                  <Card.Title>&#x20B9; 6 - 10.10 Lakh*</Card.Title>
                  <Button className="form-control" variant="outline-danger">
                    Check
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4 w-100 mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Text className="fs-5">Hyundai Exter</Card.Text>
                  <Card.Title>&#x20B9; 6 - 10.10 Lakh*</Card.Title>
                  <Button className="form-control" variant="outline-danger">
                    Check
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4 mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Card3} />
                <Card.Body>
                  <Card.Text className="fs-5">Hyundai Exter</Card.Text>
                  <Card.Title>&#x20B9; 6 - 10.10 Lakh*</Card.Title>
                  <Button className="form-control" variant="outline-danger">
                   Check
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Text className="fs-5">Hyundai Exter</Card.Text>
                  <Card.Title>&#x20B9; 6 - 10.10 Lakh*</Card.Title>
                  <Button className="form-control" variant="outline-danger">
                   Check
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default HomePage;

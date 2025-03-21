import '../assets/styles/testimonial.scss'
import { Carousel, Container, Row, Col } from "react-bootstrap";
import ReactStars from 'react-stars'

export default function Testimonial() {
  const quotes = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9Yfk5l9vJOi2tHDW7ROt2cbDWXJONs-MWw&s",
      name: "John D.",
      designation: "Operations Manager",
      text: "This platform has completely transformed how we manage our team. Everything from availability sharing to hiring is easier and more efficient.",
      bgColor: "rgba(0,0,0,.2)"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIHO2EJxxpo-peIOwbvKxttdnV9Lbqi6VHg&s",
      name: "Sarah P.",
      designation: "HR Director",
      text: "The CV builder has been a lifesaver for our HR team. We can now generate and review professional resumes quickly and effortlessly.",
      bgColor: "rgba(77,5,51,.2)"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&s",
      name: "Emma K.",
      designation: "Payroll Manager",
      text: "Payslips sharing is seamless, and our employees love how easy it is to access their payment history.",
      bgColor: "rgba(145,169,216,.2)"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhObwH3IBSJGPl5qBCWnsFJDwtF2ABk09n-w&s",
      name: "Michael T.",
      designation: "Recruitment Lead",
      text: "The automated hiring workflow has significantly reduced our time-to-hire. Managing candidates has never been this smooth and efficient.",
      bgColor: "rgba(34,139,34,.2)"
    }
  ];

  return (
    <section id="carousel" className="bg-[#222232]" style={{ paddingTop: "100px", paddingBottom: "150px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="quote text-center mb-4" style={{ color: "rgba(0,0,0,.1)" }}>
              <i className="fa fa-quote-left fa-4x"></i>
            </div>
            <Carousel fade interval={3000} indicators className="bg-white p-3" style={{borderRadius: '10px'}}>
              {quotes.map((quote, index) => (
                <Carousel.Item key={index}>
                  <div className="profile-circle mx-auto" style={{
                    backgroundColor: quote.bgColor,
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img
                      src={quote?.img}
                      alt="testimonial-avatar"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%"
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <ReactStars className="testimonial-rating-star" count={5} value={5} size={35} color2={'#ffd700'}
                                edit={false} />
                  </div>
                  <h4 className="text-center">{quote?.name}</h4>
                  <h6 className="text-center">{quote?.designation}</h6>
                  <blockquote className="text-center border-0">
                    <p>{quote.text}</p>
                  </blockquote>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
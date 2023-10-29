import React from "react";

// reactstrap components

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  UncontrolledTooltip,
} from "reactstrap";

import { useForm, ValidationError } from "@formspree/react";

function EmailForm() {
  const [state, handleSubmit] = useForm("xpzgbewl");
  if (state.succeeded) {
    return <p>Thanks for signing up!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="10">
          <FormGroup>
            <Input
              defaultValue=""
              placeholder="Enter your email to get a link"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormGroup>
        </Col>
        <Col md="2">
          <Button
            block
            color="danger"
            type="submit"
            disabled={state.submitting}
          >
            <i className="fa fa-send" />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

// core components
const items = [
  {
    src: "url(" + require("assets/img/background1.png") + ")",
    content: (
      <Container>
        <Row>
          <Col className="text-left" md="6">
            <h1 className="title">Genlabs Search™ Search</h1>
            <h5>
              Now you can add generative AI search and filters to your
              e-commerce website in under 10 minutes.
            </h5>
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <Card className="card-raised card-form-horizontal no-transition">
                  <CardBody>
                    <EmailForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <div className="buttons">
              <h5>Supported Platforms:</h5>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                onClick={(e) => e.preventDefault()}
                id="icon-wordpress"
              >
                <i className="fa fa-wordpress" />
              </Button>
              <UncontrolledTooltip placement="bottom" target="icon-wordpress">
                Wordpress
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-just-icon p-0"
                color="link"
                onClick={(e) => e.preventDefault()}
                id="icon-shopify"
              >
                <img
                  style={{ width: "18px", height: "18px" }}
                  src={require("assets/img/shopify_logo.png")}
                  alt="Shopify"
                />
              </Button>
              <UncontrolledTooltip placement="bottom" target="icon-shopify">
                Shopify
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-just-icon p-0"
                color="link"
                onClick={(e) => e.preventDefault()}
                id="icon-custom"
              >
                <i className="fa fa-rocket" />
              </Button>
              <UncontrolledTooltip placement="bottom" target="icon-custom">
                Your own custom platform
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
];

function SectionHeader() {
  // carousel - header 3
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      {/* ********* HEADER 3 ********* */}
      <div className="header-3">
        <div className="page-carousel">
          <div className="filter" />
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div
                    className="page-header"
                    style={{ backgroundImage: item.src }}
                  >
                    <div className="filter" />
                    <div className="content-center">{item.content}</div>
                  </div>
                </CarouselItem>
              );
            })}
            {items.length > 1 && (
              <>
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </a>
              </>
            )}
          </Carousel>
        </div>
      </div>
      {/* ********* END HEADER 3 ********* */}
    </>
  );
}

export default SectionHeader;

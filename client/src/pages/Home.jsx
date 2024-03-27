//code a page that welcomes users to the website. it should contain a title of "DebateBros" , with a brief description of what we do. Include a button that says "Login" and another button that says "Signup". These will link to the login and sign up pages once clicked as i have those already created, include that code as well if you can.

function Home() {
  return (
    <div>
      <div className="header-content">
        <div className="header-content-inner">
          <h1> Welcome to DebateBros</h1>
          <p>
            We are a community of individuals who love to debate. We provide a
            platform for users to engage in friendly debates on a variety of
            topics
          </p>
        </div>
        <a
          href="http://localhost:3000/Dashboard"
          className="btn btn-primary btn-lg"
        >
          DEBATE NOW
        </a>
      </div>
      <section className="hero">
        <div className="hero-inner">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h1>Test</h1>
              <h2 className="section-heading">Debate Testing</h2>
              <a href="https://example.com/" className="btn"></a>
            </div>
          </div>
        </div>
      </section>

      <div className="row promo">
        <a href="#">
          <div className="col-md-4 promo-item item-1">
            <h3> Active Debate List </h3>
          </div>
        </a>
        <a href="#"></a>
        <div className="col-md-4 promo-item item-2">
          <h3> Open Debate Challenges </h3>
        </div>
        <a href="#"></a>
        <div className="col-md-4 promo-item item-3">
          <h3> Concluded Debates List </h3>
        </div>
      </div>
      <section className="content content-3">
        <div className="container">
          <h2 className="section-header">Donate Here!</h2>
          <p className="lead text-muted">
            Testing for more details stay tune later
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Donate Test Button
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

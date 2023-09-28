import "./about.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-coverImage"></div>

      <div className="about-mainContent">
        <div className="am-header">
          <h1 className="heading-medium">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-normal-black">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-action">
          <p className="heading-small">
            Your destination is waiting.<br/>Your van is ready.
          </p>
          <button className="button-text about-button">Explore our vans</button>
        </div>
      </div>
    </div>
  );
}

export default About;

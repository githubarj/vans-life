import "./home.css"
function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="heading-large">
          You got the travel plans, we got the travel vans.
        </h1>
        <h2 className="text-normal">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h2>
      </div>
      <button className="button-text home-button ">Find your van</button>
    </div>
  );
}

export default Home
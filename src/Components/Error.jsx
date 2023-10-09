import { useRouteError } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function Error() {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "560px",
    margin: "auto",
    background: "#fff7ed",
    minHeight: "100vh",
    borderLeft: "1px solid grey",
    borderRight: "1px solid grey",
  };

  const error = useRouteError()
  console.log(error)


  return (
    <div style={style}>
      <Navbar />
      <h1 style={{ flex: "1", padding: "0px 26px" }}>
        There was an Error in loading this page:{error.message}
      </h1>
      <Footer />
    </div>
  );
}

export default Error;

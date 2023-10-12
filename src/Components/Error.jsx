import { useRouteError } from "react-router-dom";

function Error() {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "auto",
    background: "#fff7ed",
    minHeight: "100vh",
  };

  const error = useRouteError();
  console.log(error);

  return (
    <div style={style}>
      <h1 style={{ flex: "1", padding: "0px 26px" }}>
        There was an error in loading this page: {error.message}
      </h1>
    </div>
  );
}

export default Error;

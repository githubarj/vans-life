import "./listing.css"
import { useOutletContext } from "react-router-dom"

function Details() {

  const { vanInfo } = useOutletContext()

  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span>{vanInfo.name}</span>
      </h4>
      <h4>
        Category: <span>{vanInfo.type}</span>
      </h4>
      <h4>
        Description: <span>{vanInfo.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}

export default Details
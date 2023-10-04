import "./listing.css"

import { useOutletContext } from "react-router-dom"
function Pricing() {
  const { vanInfo } = useOutletContext()
  return (
    <h3 className="host-van-price">
      ${vanInfo.price}
      <span>/day</span>
    </h3>
  );
}

export default Pricing
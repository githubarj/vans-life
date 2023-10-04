import "./listing.css"
import { useOutletContext } from "react-router-dom"
function Photos() {

  const {vanInfo} = useOutletContext()

  return <img src={vanInfo.imageUrl} className="host-van-detail-image" />;
}

export default Photos
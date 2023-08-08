import { useRouteError } from "react-router-dom";
import Nav from "../fixedContent/Nav";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <Nav></Nav>
        <div className="row m-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center text-danger">
            <h3 className="text-danger mb-5">Page Not Found!!!</h3>
            <img src="/44-incredible-404-error-pages@3x-1560x760.png" alt="" className="img-fluid" />
            
            </div>
            <div className="col-md-2"></div>
        </div>
      
      
    </div>
  );
}
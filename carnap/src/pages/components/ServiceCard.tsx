import { Grid } from "react-bootstrap-icons";
import CardPage from "./cardPage";
import {Link} from 'react-router-dom'
interface ServiceCardProps {
  caption: string;
  url: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ caption, url, imageUrl }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-between p-1 shadow" 
      style={{ 
        width: '160px', 
        height: '180px', 
        backgroundColor: '#002e4d', // Фирменный темно-синий цвет
        color: 'white',
        textAlign: 'center',
        
        

      }}
    > 
      {/* Иконка (Лупа с шестеренкой) */}
      <div className="mt-3">
        <img 
          src={imageUrl} 
          alt="Diagnostic Icon" 
          style={{ width: '47px', /*filter: 'brightness(1) invert(1)' */}} 
        />
      </div>

      {/* Разделительная линия */}
      <hr style={{ width: '80%', borderTop: '2px solid white', opacity: 1 }} />

      {/* Текстовый блок в рамке */}
      <Link to={`/page?id=${url}`}>
      <div 
        className="d-flex align-items-center justify-content-center p-3 mb-3" 
        style={{ 
          border: '2px solid white', 
          width: '100%',
          minHeight: '80px',
          maxHeight: '90px', 
        }}
      >
        
        <h5 className="fw-bold m-0 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px', paddingLeft: '3px' , paddingRight: '3px'}} >
          {caption}
        </h5>
        
      </div>
      </Link>
    </div>
  );
};
export default ServiceCard;
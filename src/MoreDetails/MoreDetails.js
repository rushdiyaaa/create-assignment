import CarImage from '../assests/Car and Driver puts BMW X7 against Mercedes-Benz GLS-Class.jpeg'
import './MoreDetails.css'
import { useNavigate } from 'react-router-dom';

function MoreDetails() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };
    

    return (
        <>
            <div className="d-flex row ">
                <div className='col-md-6 bg-clr px-4'>
                    <h4>Overview</h4>
                    <p>The car manufacturing project aims to develop and launch a new vehicle model that meets the evolving needs and preferences of consumers.</p>
                    <h4>Highlights</h4>
                    <ul>
                        <li>Incorporation of advanced technologies for enhanced safety and performance.</li>
                        <li>Integration of innovative features to improve user experience and convenience.</li>
                        <li>Collaboration with suppliers and partners to ensure high-quality components and materials.</li>
                        <li>Focus on sustainability and eco-friendliness in both design and manufacturing processes.</li>
                    </ul>
                    <h4>Goals</h4>
                    <ul>
                        <li>To conduct comprehensive market research to understand consumer preferences and market trends.</li>
                        <li>To develop a detailed project plan outlining timelines, budgets, and resource requirements.</li>
                        <li>To create a unique and appealing vehicle design that sets it apart from competitors.</li>
                        <li>To launch the new vehicle successfully in targeted markets and achieve strong sales performance.</li>
                    </ul>
                </div>
              <div className='col-md-6  mx-0 my-0 px-0 my-0'>
                <img src={CarImage} alt='Car'/>
                <button className="btn btn-primary position-absolute top-0 end-0 m-3" onClick={handleButtonClick}>Back</button>

              </div>
            </div>  
        </>
    )
}

export default MoreDetails;
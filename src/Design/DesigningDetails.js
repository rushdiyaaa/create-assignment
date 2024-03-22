import { useNavigate } from 'react-router-dom';
import designing from '../assests/_Ride the Thrill_ A Guide to Hot Rods and Muscle Cars_.jpeg'

const DesigningDetails = () =>{

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='row d-flex flex-wrap ' style={{background: '#ffd357'}}>
        <div className=" col-md-6 px-4" >
        <h1 className="py-2" style={{ textDecoration: 'underline'}}>Designing</h1>
        <h3>Objective</h3>
        <p>Develop the vehicle's conceptual and technical design.</p>
        <h3>Activities</h3>
        <ul>
            <li>Conceptual design sketches and renderings.</li>
            <li>Detailed engineering design and analysis.</li>
            <li>Prototyping and testing.</li>
        </ul>
        <h3>Resources Required</h3>
        <ul>
            <li>Design software and tools.</li>
            <li>Engineering expertise.</li>
            <li>Prototyping materials and equipment.</li>
        </ul>
        <h3>Deliverables</h3>
        <ul>
            <li>Vehicle design specifications.</li>
            <li>Prototypes for aerodynamic, safety, and performance testing.</li>
            <li>Design validation report.</li>
        </ul>

       </div>
       <div className='col-md-6 px-0 mx-0'>
        <img src={designing} alt='Desiging'/>
        <button className="btn btn-primary position-absolute top-0 end-0 m-3" onClick={handleButtonClick}>Back</button>

       </div>
       </div>
    )
}
export default DesigningDetails;

import { useNavigate } from 'react-router-dom';
import manufacturing from '../assests/Car Fluids.jpeg'

const ManufacturingDetails = () =>{

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='row d-flex flex-wrap ' style={{ background: '#FFB5DA'}}>
        <div className=" col-md-6 px-4" >
        <h1 className="py-2" style={{ textDecoration: 'underline'}}>Manufacturing</h1>
        <h3>Objective</h3>
        <p>Transform the design into a physical vehicle.</p>
        <h3>Activities</h3>
        <ul>
            <li>Procure raw materials and components.</li>
            <li>Setup manufacturing processes and assembly lines.</li>
            <li>Quality control and assurance.</li>
        </ul>
        <h3>Resources Required</h3>
        <ul>
            <li>Manufacturing facilities.</li>
            <li>Raw materials and suppliers.</li>
            <li>Quality control equipment.</li>
        </ul>
        <h3>Deliverables</h3>
        <ul>
            <li>Production-ready vehicles.</li>
            <li>Quality inspection reports.</li>
            <li>Manufacturing process documentation.</li>
        </ul>

       </div>
       <div className='col-md-6 px-0 mx-0'>
        <img src={manufacturing} alt='Manufacturing'/>
        <button className="btn btn-primary position-absolute top-0 end-0 m-3" onClick={handleButtonClick}>Back</button>

       </div>
       </div>
    )
}
export default ManufacturingDetails;
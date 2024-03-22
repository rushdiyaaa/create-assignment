import { useNavigate } from 'react-router-dom';
import sales from '../assests/Car LED Strip Lights, Multicolor RGB Car Interior Lights, 16 Million Colors 5 in 1.jpeg'

const SalesDetails = () =>{

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='row d-flex flex-wrap ' style={{ background: '#C8DF52'}}>
        <div className=" col-md-6 px-4" >
        <h1 className="py-2" style={{ textDecoration: 'underline'}}>Sales/Marketing</h1>
        <h3>Objective</h3>
        <p>Market and sell the manufactured vehicles.</p>
        <h3>Activities</h3>
        <ul>
            <li>Develop marketing campaigns and sales strategies.</li>
            <li>Establish distribution channels.</li>
            <li>Provide after-sales support and services.</li>
        </ul>
        <h3>Resources Required</h3>
        <ul>
            <li>Marketing and advertising budget.</li>
            <li>Sales team and distribution network.</li>
            <li>Customer service infrastructure.</li>
        </ul>
        <h3>Deliverables</h3>
        <ul>
            <li>Sales forecasts and targets.</li>
            <li>Marketing materials (brochures, advertisements).</li>
            <li>Sales revenue reports.</li>
        </ul>

       </div>
       <div className='col-md-6 px-0 mx-0'>
        <img src={sales} alt='Sales/Marketing'/>
        <button className="btn btn-primary position-absolute top-0 end-0 m-3" onClick={handleButtonClick}>Back</button>

       </div>
       </div>
    )
}
export default SalesDetails;
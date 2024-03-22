import './ResearchDetails.css'
import { useNavigate } from 'react-router-dom';
import research from '../assests/G Wagon_ The Ultimate SUV for Those Who Demand More in Style and Performance.jpeg'

const ResearchDetails = () =>{

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='row d-flex flex-wrap ' style={{background: "#EEB5EB"}}>
        <div className=" col-md-6 px-4" >
        <h1 className="py-2" style={{ textDecoration: 'underline'}}>Market Research</h1>
        <h3>Objective</h3>
        <p>Understand customer needs, preferences, and market trends.</p>
        <h3>Activities</h3>
        <ul>
            <li>Conduct surveys, interviews, and focus groups.</li>
            <li>Analyze market data and trends.</li>
            <li>Identify competitors and their offerings.</li>
        </ul>
        <h3>Resources Required</h3>
        <ul>
            <li>Market research tools and software.</li>
            <li>Research team and analysts.</li>
            <li>Budget for research activities.</li>
        </ul>
        <h3>Deliverables</h3>
        <ul>
            <li>Market analysis report.</li>
            <li>Customer segmentation and targeting strategy.</li>
            <li>Competitor analysis report.</li>
        </ul>

       </div>
       <div className='col-md-6 px-0 mx-0'>
        <img src={research} alt='Market Research'/>
        <button className="btn btn-primary position-absolute top-0 end-0 m-3" onClick={handleButtonClick}>Back</button>

       </div>
       </div>
    )
}
export default ResearchDetails;
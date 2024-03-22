// import './ResearchDetails.css'
import { useNavigate } from 'react-router-dom';
import planning from "../assests/BMW's New And Not-That-Weird-Anymore 6-Series GT In 60 Shots _ Carscoops.jpeg"

const PlanningDetails = () =>{

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='row d-flex flex-wrap ' style={{background: "#65DFF6"}}>
        <div className=" col-md-6 px-4" >
        <h1 className="py-2" style={{ textDecoration: 'underline'}}>Planning</h1>
        <h3>Objective</h3>
        <p>Develop a comprehensive plan for the vehicle development process.</p>
        <h3>Activities</h3>
        <ul>
            <li>Define project scope, goals, and timelines.</li>
            <li>llocate resources (budget, manpower, materials).</li>
            <li>Create a detailed project schedule.</li>
        </ul>
        <h3>Resources Required</h3>
        <ul>
            <li>Project management tools</li>
            <li>Expertise in project planning..</li>
            <li>Budget allocation for resources.</li>
        </ul>
        <h3>Deliverables</h3>
        <ul>
            <li>Project plan document.</li>
            <li>Resource allocation plan.</li>
            <li>Risk management plan.</li>
        </ul>

       </div>
       <div className='col-md-6 px-0 mx-0'>
        <img src={planning} alt='Planning'/>
        <button className="btn btn-primary position-absolute top-0 end-0 m-3" onClick={handleButtonClick}>Back</button>

       </div>
       </div>
    )
}
export default PlanningDetails;
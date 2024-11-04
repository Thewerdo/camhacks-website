import aiden from "./teamIcons/aiden.jpg"
import manvi from "./teamIcons/manvi.jpg"
import jeevithan from "./teamIcons/jeevithan.jpg"
import kevin from "./teamIcons/kevin.jpg"

const Team = () => {
    return (  
      <div className="flex-container" id="team-area">
        <div><img src={jeevithan} className="teamMember"></img>&nbsp;<img src={kevin} className="teamMember"></img></div>
        <div><a href="https://www.linkedin.com/in/jeevithan-muhunthan-2aa910291/">Jeevithan</a> <a href="">Kevin</a></div> 
        <br />
        <div><img src={manvi} className="teamMember"></img>&nbsp;<img src={aiden} className="teamMember"></img></div>
        <div><a href="https://www.linkedin.com/in/m4nvi-sharma/">Manvi</a> <a href="https://www.linkedin.com/in/aiden-wang-3478b5293/">Aiden</a></div>
      </div>
    );
}
 
export default Team;
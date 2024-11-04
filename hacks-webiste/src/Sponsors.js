const Sponsors = () => {
    const sponsorLink = () => {
        console.log("Sponsor us!")
    }

    return (  
      <div className="flex-container" id="sponsors-area"> 
        <div>Interested in sponsoring us?</div>
        <button onClick={sponsorLink}>Sponsor us!</button>
      </div>
    );
}

export default Sponsors;
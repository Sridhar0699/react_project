export const CandidateProfile = ()=>{
     const name = "Sridhar Reddy";
        const role = "Developer";
        const yearsOfExperience = 2;
        const isAvailable = true;
    return (       
        <>
            <h2>{name}</h2>
            <p>{role} with {yearsOfExperience} years of experience</p>
            <p>Started in {2026 - yearsOfExperience}</p>
            <p>Status : {isAvailable ? "Available":"Resigned"}</p>
            <p>Contact {name.toLowerCase().replace(" ",".")}@gmail.com</p>
        </>
    );
}
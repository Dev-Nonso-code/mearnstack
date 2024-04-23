const getLandngPage = (req, res) =>{
    
        res.send(
            [
            {firstname: "Nonso", Lastname: "Obasi"},
            {Firstname: "Godwin", Lastname: "Izu"},
            {Firstname: "SQI", Lastname: "TECH"},
            {Firstname: "SQI", Lastname: "TECH"},
        ]
        );
    
}
module.exports = {getLandngPage}
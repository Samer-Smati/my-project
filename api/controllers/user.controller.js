exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
exports.teacherBoard = (req, res) => {
    res.status(200).send("Teacher Content.");
  };  

exports.gestionaireBoard = (req, res) => {
    res.status(200).send("Gestionaire Content.");
  };
  
exports.studentBoard = (req, res) => {
    res.status(200).send("Student Content.");
  }; 
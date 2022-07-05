function emailValidation(email,res) {
    let domain=email.split('@')[1];
    let atpos = email.indexOf("@");
    if (email == null || email == "") {
        res.status(400).json("Please provide email");
    }                                           // First test checks for atleast one character before @
    else if (atpos < 1 || domain != "edyoda.com"){ // Second test checks if the user entered a edyoda.com domain after @
        res.status(400).json("Not a valid e-mail address. Please write your email address like this: username@edyoda.com.");  
    } 
return email;
}

module.exports={emailValidation};

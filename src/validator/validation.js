const checkData = (object) => {
    if (Object.keys(object).length > 0) {
      return false
    }else {
      return true;
    }
  };
  
  const validTitle = (Title) => {
    let correctTitle = ["Mr", "Mrs", "Miss"];
    if (correctTitle.includes(Title)) {
      return false
    }else {
      return true;
    };
  };
  
  const validString = (String) => {
    if (/\d/.test(String)) {
      return true
    }else {
      return false;
    };
  };
  
  const validMobileNum = (Mobile) => {
    if (/^[6-9]\d{9}$/.test(Mobile)) {
      return false
    }else {
      return true;
    };
  };
  
  const validEmail = (Email) => {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(Email)){
      return false
    }else {
      return true;
    }
      
  };
  
  const validPwd = (Password) => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(Password)){
      return false
    }else {
      return true;
    }
  };
  
  module.exports = { checkData, validTitle, validString, validMobileNum, validEmail, validPwd };
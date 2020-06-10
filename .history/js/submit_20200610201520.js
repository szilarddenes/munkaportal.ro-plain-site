//const form = document.getElementById('gsheetForm');
const email = document.getElementById('email');
const JobCategory = document.getElementById('JobCategory');
const JobType = document.getElementById('JobType');
const joblocation = document.getElementById('joblocation');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const deadline = document.getElementById('deadline');
var JobAnnouncement = document.getElementById('JobAnnouncement').value 
// if ((JobAnnouncement = null)) {
//   JobAnnouncementValue = 'empty';
// }

const TermsConditions = document.getElementById('TermsConditions');

//form-check inputs
//const chkFacebook = document.getElementById('chkFacebook').value;
// const CheckInstagram = document.getElementById('CheckInstagram');
// const CheckWebSearch = document.getElementById('CheckWebSearch');
// const CheckElse = document.getElementById('CheckElse');

let checker = 0;
//const subValid = checker === 0 ? false : true;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const emailValue = email.value;
  const JobCategoryValue = JobCategory.value;
  const JobTypeValue = JobType.value;
  const joblocationValue = joblocation.value;
  const companyValue = company.value;
  const phoneValue = phone.value;
  const deadlineValue = deadline.value;
  const JobAnnouncementValue = JobAnnouncement;

  //const formCheck = [chkFacebook.value, CheckInstagram.value]

  //const findUSValue = findUS.chkFacebook.value; //have to checked

  //const TermsConditionsValue = TermsConditions.value;

  //email
  if (emailValue === '') {
    //show error
    //add error class
    setErrorFor(email, 'E-mail cannot be blank.');
  } else if (!isEmail(emailValue)) {
    //add success class
    setErrorFor(email, 'Not a valid e-mail.');
  } else {
    setSuccessFor(email);
  }

  // jobcategory
  if (JobCategoryValue === 'select a job category') {
    //show error
    //add error class
    setErrorFor(JobCategory, 'You must select a category.');
  } else {
    setSuccessFor(JobCategory);
  }

  // jobtype
  if (JobTypeValue === 'select job type') {
    //show error
    //add error class
    setErrorFor(JobType, 'You must select a job type.');
  } else {
    setSuccessFor(JobType);
  }

  // job location

  if (joblocationValue === '') {
    //show error
    //add error class
    setErrorFor(joblocation, `Please fill the job's location.`);
  } else {
    setSuccessFor(joblocation);
  }

  //company name

  if (companyValue === '') {
    //show error
    //add error class
    setErrorFor(company, `Add your organization.`);
  } else {
    setSuccessFor(company);
  }

  //phone number

  if (phoneValue === '' || phoneValue.length < 8) {
    //show error
    //add error class
    setErrorFor(phone, `Enter a valid phone number.`);
  } else {
    setSuccessFor(phone);
  }

  //deadline
  if (deadlineValue === '' || deadlineValue <= '<?php echo $today; ?>') {
    //show error
    //add error class
    setErrorFor(deadline, `Enter a valid date.`);
  } else {
    setSuccessFor(deadline);
  } 

//   FindUS
const chkFacebook = document.getElementById('chkFacebook');
const CheckInstagram = document.getElementById('CheckInstagram');
const CheckWebSearch = document.getElementById('CheckWebSearch');
const CheckElse = document.getElementById('CheckElse');
if((chkFacebook==='yes')||(chkFacebook==='yes')(chkFacebook==='yes')(chkFacebook==='yes'))


  //JObAnnonunacemt

  const jobAdiv= document.getElementById('jobAdiv') 
    //JobAnnouncement
    if(document.getElementById("JobAnnouncement").value == ''){  
        //show error
        //add error class
//        jobAdiv.classList.add('error')
        setErrorFor(jobAdiv, `Please describe the job opportunity.`);
        
    } else{
        setSuccessFor(jobAdiv);
    }
  





  //end checkInputs functions
}

//----------------------------------//
//add success or
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  formGroup.className = 'form-group error';
  small.innerText = message;
  // document.getElementById("input").removeAttribute("placeholder");
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

function trimfield(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

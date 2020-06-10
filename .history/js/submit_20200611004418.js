// function validations() {
//variables
const form = document.getElementById('gsheetForm');
const email = document.getElementById('email');
const JobCategory = document.getElementById('JobCategory');
const JobType = document.getElementById('JobType');
const joblocation = document.getElementById('joblocation');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const deadline = document.getElementById('deadline');
const TermsConditions = document.getElementById('TermsConditions');
let messages = [];

form.addEventListener('submit', (e) => {
  messages = [];

  e.preventDefault();

  checkInputs();
  console.log(messages);
  if (messages.length > 0) {
    console.log('Too many messages.');
    return false;
  } else {
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
  }
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
  const TermsConditionsValue = TermsConditions.value;

  //email
  if (emailValue === '') {
    //show error
    //add error class
    setErrorFor(email, 'E-mail cannot be blank.');
  } else if (!isEmail(emailValue)) {
    //add success class
    setErrorFor(email, 'Not a valid e-mail.');
    checker = checker + 1;
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
    setErrorFor(company, `Add your organization name or website.`);
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
  const checkFacebook = document.getElementById('chkFacebook').value;
  const CheckInstagram = document.getElementById('CheckInstagram').value;
  const CheckWebSearch = document.getElementById('CheckWebSearch').value;
  const CheckElse = document.getElementById('CheckElse').value;
  if (
    checkFacebook === 'true' ||
    CheckInstagram === 'true' ||
    CheckInstagram === 'true' ||
    CheckInstagram === 'true'
  ) {
    setSuccessFor(findUS);
  } else {
    setErrorFor(findUS, `Please select at least one option.`);
  }

  //jobannouncement

  const jobAdiv = document.getElementById('jobAdiv'); //JobAnnouncement
  if (document.getElementById('JobAnnouncement').value == '') {
    //show error
    //add error class
    //        jobAdiv.classList.add('error')
    setErrorFor(jobAdiv, `Please describe the job opportunity.`);
  } else {
    setSuccessFor(jobAdiv);
  }

  //Terms And Conditions
  console.log('checkbox TermsConditions is ', form.TermsConditions.checked);
  if (!form.TermsConditions.checked) {
    document.getElementById('chkMessage').style.visibility = 'visible';
    messages.push('Terms and Conditions not accepted');
    return false;
  } else {
    document.getElementById('chkMessage').style.visibility = 'hidden';
    return true;
  }
  //end checkInputs functions

  console.log(chkFacebook.value);
  console.log(deadline.value);
}

//----------------------------------//
//add success or
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  formGroup.className = 'form-group error';
  small.innerText = message;
  messages.push('common error');
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

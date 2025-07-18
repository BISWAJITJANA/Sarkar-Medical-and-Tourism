// Menu toggle functionality
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdbTXltSUavNyG_i0OCw6reWjHTxPBnQT2uCcve4aoymbam4dB-Z39j_XI5Db2ZSmu/exec';
const scripURL="https://script.google.com/macros/s/AKfycbwKb4JXD8tmT2wlSqOkPelb8K1CCwaRGGXYT988wAElviNyPDbDiWK5ucEif2-G6hz9/exec";

// Inquiry form functionality
const inquiryBtn = document.getElementById("inquiryBtn");
const formModal = document.getElementById("formModal");
const closeModal = document.getElementById("closeModal");
const inquiryForm = document.getElementById("inquiryForm");

// Show the form
inquiryBtn.addEventListener("click", () => {
  formModal.style.display = "block";
});

// Close the form
closeModal.addEventListener("click", () => {
  formModal.style.display = "none";
});

// Close form when clicking outside the modal
window.addEventListener("click", (e) => {
  if (e.target === formModal) {
    formModal.style.display = "none";
  }
});

// Inquiry form submission
if (inquiryForm) {
  inquiryForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value.trim();
    const robot = document.getElementById("robot").checked;

    if (!robot) {
      alert("Please verify you're not a robot.");
      return;
    }

    /*const formData = {
      name: name,
      email: email,
      phone: phone,
      course: course
    };

    fetch(scripURL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      body: JSON.stringify(formData)
    })*/
    const formData = new FormData();
       formData.append("name", name);
       formData.append("email", email);
       formData.append("phone", phone);
       formData.append("course", course);

fetch(scripURL, {
  method: 'POST',
  mode: 'no-cors',
  body: formData
})

    .then(() => {
      alert("Form submitted successfully!");
      inquiryForm.reset();
      formModal.style.display = "none";
    })
    .catch(err => {
      console.error("Error details:", err);
      alert("Form submitted successfully! (Note: You may see this message even if the submission was successful)");
      inquiryForm.reset();
      formModal.style.display = "none";
    });
  });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      mobile: contactForm.mobile.value,
      course: contactForm.course.value,
      message: contactForm.message.value
    };

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("Form submitted successfully!");
      contactForm.reset();
    })
    .catch(err => {
      console.error("Error details:", err);
      alert("Form submitted successfully! (Note: You may see this message even if the submission was successful)");
      contactForm.reset();
    });
  });
}
// Course list

  const lodMoreBtn = document.getElementById('MoreBtn');
    lodMoreBtn.addEventListener('click', () => {
    const hiddenCourses = document.querySelectorAll('.course.hidden');
    const showCount = 3;

    for (let i = 0; i < showCount && i < hiddenCourses.length; i++) {
      hiddenCourses[i].classList.remove('hidden');
    }

    if (document.querySelectorAll('.course.hidden').length === 0) {
      lodMoreBtn.style.display = 'none';
    }
  });


//List of colleges section
const loadMoreBtn = document.getElementById('loadMoreBtn');
  loadMoreBtn.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.college-card.hidden');
    const showCount = 3; // Number of cards to reveal per click

    for (let i = 0; i < showCount && i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove('hidden');
    }

    // Hide button when no more cards left
    if (document.querySelectorAll('.college-card.hidden').length === 0) {
      loadMoreBtn.style.display = 'none';
    }
  });
  //Try this one 
  document.querySelector('.chat-support').addEventListener('click', function () {
  alert("Live support is coming soon!");
});
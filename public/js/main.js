document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData.entries());
  
        try {
          const response = await fetch('/submit-contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObject),
          });
  
          const result = await response.json();
  
          if (response.ok) {
            alert(result.message);
            contactForm.reset();
          } else {
            throw new Error(result.message);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while submitting the form. Please try again.');
        }
      });
    }
  });
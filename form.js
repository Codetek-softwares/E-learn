document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validate form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const address = document.getElementById('address').value.trim();
  
      if (!name || !email || !phone || !address) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Assuming Razorpay integration for payment
      const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: 500000, // INR 5000 in paisa
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Registration Fee',
        image: 'path_to_your_logo.png',
        handler: function(response) {
          // Payment success, you can handle further actions (e.g., email verification)
          const paymentId = response.razorpay_payment_id;
          alert('Payment successful!');
  
          // Generate and send OTP via email
          sendOTP(email);
        },
        prefill: {
          name: name,
          email: email,
          contact: phone,
          address: address
        },
        theme: {
          color: '#4CAF50'
        }
      };
  
      const rzp = new Razorpay(options);
      rzp.open();
    });
  
    // Function to send OTP via email
    function sendOTP(email) {
      // Simulate backend API call to send OTP via email
      // In a real scenario, this would be handled server-side
      const otp = generateOTP();
      console.log('Sending OTP:', otp);
  
      // Simulate successful OTP sending alert
      alert(`OTP sent to ${email}. Please check your email.`);
  
      // Prompt user to enter OTP (for demonstration purposes)
      const userOTP = prompt('Please enter the OTP sent to your email:');
      if (userOTP === otp) {
        alert('OTP verification successful! You are registered.');
        // Here you can redirect to a success page or perform further actions
      } else {
        alert('Invalid OTP. Registration failed.');
      }
    }
  
    // Function to generate a random 6-digit OTP
    function generateOTP() {
      const digits = '0123456789';
      let otp = '';
      for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
      }
      return otp;
    }
  });
  
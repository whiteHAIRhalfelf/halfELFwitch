// JavaScript to handle form submission and interaction

document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const paragraph = document.getElementById('paragraph').value;

    // Validation check: Ensure all fields are filled
    if (name === '' || dob === '' || paragraph === '') {
        alert('Please fill in all the fields!');
    } else {
        alert(`Form Submitted!\n\nName: ${name}\nDOB: ${dob}\nParagraph: ${paragraph.substring(0, 100)}...`);
    }
});

// Optional: Add input events to change placeholder on focus
document.getElementById('name').addEventListener('focus', function() {
    this.placeholder = '';
});

document.getElementById('name').addEventListener('blur', function() {
    this.placeholder = 'Type your name here';
});

document.getElementById('paragraph').addEventListener('focus', function() {
    this.placeholder = '';
});

document.getElementById('paragraph').addEventListener('blur', function() {
    this.placeholder = 'Type your paragraph here (Max 10,000 characters)';
});

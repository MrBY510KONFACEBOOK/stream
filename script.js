// Display the modal on page load
window.onload = function() {
    document.getElementById('myModal').style.display = 'flex';
};

// Close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Show an alert with a custom message
function showAlert(message) {
    alert(message);
}

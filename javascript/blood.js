// JavaScript code to handle form submission
document.getElementById("donorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch form data
    let formData = new FormData(event.target);

    // Construct donor object
    let donor = {
        name: formData.get("name"),
        email: formData.get("email"),
        bloodType: formData.get("bloodType"),
        contact: formData.get("contact")
    };

    // Here you can process the donor object as needed, such as sending it to a server or displaying a thank you message
    console.log("Donor Information:", donor);

    // Example: Display a thank you message
    alert("Thank you for donating blood, " + donor.name + "!");

    // Optional: Clear the form after submission
    event.target.reset();
});

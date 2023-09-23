document.addEventListener("DOMContentLoaded", function () {
    // Simulated data (replace with real data)
    const userLocationData = "123 Main Street, City";
    const nearestToiletData = "Toilet A, Park";
    const toiletStatusData = "Online"; // Change to "Offline" as needed

    // Update HTML elements with data
    document.getElementById("userLocation").textContent = userLocationData;
    document.getElementById("nearestToilet").textContent = nearestToiletData;
    document.getElementById("toiletStatus").textContent = toiletStatusData;
});

// Function to get the user's location
function getUserLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Display the user's location on the webpage
            const userLocation = `Latitude: ${latitude}, Longitude: ${longitude}`;
            document.getElementById("userLocation").textContent = userLocation;
        }, function (error) {
            // Handle any errors that occur during geolocation
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
            }
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Call the function to get the user's location
getUserLocation();

// Function to show a tab
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');

    // Hide all tabs (but do NOT pause audio)
    tabs.forEach(tab => {
        tab.classList.remove('active');  // Remove animation class
        tab.style.display = 'none';
    });

    // Show the clicked tab
    const currentTab = document.getElementById(tabId);
    currentTab.style.display = 'block';

    // Trigger fade + slide animation
    setTimeout(() => currentTab.classList.add('active'), 10);
}

// Show Home tab by default when page loads
document.addEventListener("DOMContentLoaded", function() {
    showTab('home'); // Replace 'home' with the ID of your default tab
});
function showSurprise() {
    const message = document.getElementById('hiddenMessage');

    if (message.style.display === 'block') {
        message.style.display = 'none';
    } else {
        message.style.display = 'block';
    }
}

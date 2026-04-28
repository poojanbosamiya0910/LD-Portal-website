function showPortal(portalId) {
    // Hide all sections
    document.querySelectorAll('.portal-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show target section and activate button
    document.getElementById(portalId).classList.add('active');
    document.getElementById('btn-' + portalId).classList.add('active');
}

// Generate Student Data
document.addEventListener('DOMContentLoaded', () => {
    const studentTableBody = document.querySelector('.student-table tbody');
    
    const baseNames = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur", "Adipiscing", "Elit", "Nulla", "Facilisi", "Aenean", "Pellentesque"];
    
    let html = '';
    let startEnrollment = 23000000001;
    
    // Generate 150 student rows
    for(let i=0; i<150; i++) {
        const randomName = baseNames[Math.floor(Math.random()*baseNames.length)] + " " + baseNames[Math.floor(Math.random()*baseNames.length)];
        html += `
            <tr>
                <td>${startEnrollment + i}</td>
                <td contenteditable="true">Student ${i+1} (${randomName})</td>
                <td>Computer Engineering</td>
                <td contenteditable="true">${Math.floor(Math.random() * 41) + 60}</td>
            </tr>
        `;
    }
    
    studentTableBody.innerHTML = html;
});

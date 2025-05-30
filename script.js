// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Resume download handler
function handleDownload(event) {
    event.preventDefault();
    
    // Create blob with dummy PDF content (replace with actual PDF)
    const pdfContent = new Uint8Array([/* your PDF binary data here */]);
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    
    // Create download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'resume_DianaKarim.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Tech Stack Details Toggle
document.addEventListener('DOMContentLoaded', function() {
    const expandButton = document.getElementById('expandButton');
    const techDetails = document.getElementById('techDetails');
    
    if (expandButton && techDetails) {
        expandButton.addEventListener('click', function() {
            techDetails.classList.toggle('active');
            expandButton.classList.toggle('active');
            
            if (techDetails.classList.contains('active')) {
                expandButton.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                expandButton.innerHTML = 'Learn More <i class="fas fa-chevron-down"></i>';
            }
        });
    }
});
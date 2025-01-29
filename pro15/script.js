const openModalBtn = document.querySelector('.open-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const cancelBtn = document.querySelector('.cancel-btn');

// Open modal
openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// Close modal functions
function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close buttons
closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Close when clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Hover effect for open button
openModalBtn.addEventListener('mouseenter', () => {
    openModalBtn.style.transform = 'translateY(-2px) scale(1.02)';
});

openModalBtn.addEventListener('mouseleave', () => {
    openModalBtn.style.transform = 'translateY(0) scale(1)';
});
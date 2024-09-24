var typed = new Typed(".typing",{
    strings:["KIT-KalaignarKarunanidhi Institute Of Technology"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:100,
    loop:true
}
);
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Clear form fields
    this.reset();
});
const circles = document.querySelectorAll('.skillcir4');
const counters = [0, 0, 0, 0]; 
const percentages = [80, 75, 95, 90]; 
const intervalId = setInterval(() => {
  let allDone = true;
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < percentages[i]) {
      counters[i] += 1;
      circles[i].textContent = `${counters[i]}%`;
      allDone = false;
    }
  }
  if (allDone) {
    clearInterval(intervalId);
  }
}, 30);

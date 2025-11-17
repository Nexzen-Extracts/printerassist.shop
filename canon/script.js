
const installBtn = document.getElementById('installBtn');
const modal = document.getElementById('installModal');
const closeBtn = document.getElementById('closeModal');
const tabButtons = document.querySelectorAll('.tab-btn');
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

let currentStep = 0;
installBtn.addEventListener('click', () => modal.style.display='flex');

closeBtn.addEventListener('click', () => modal.style.display='none');
window.addEventListener('click', e => {if(e.target === modal) modal.style.display='none';});


function showStep(index){
  steps.forEach((s,i)=> s.classList.toggle('active', i===index));
  tabButtons.forEach((b,i)=> b.classList.toggle('active', i===index));
  backBtn.disabled = index === 0;
  nextBtn.textContent = index === steps.length-1 ? 'Finish' : 'Next';
}


tabButtons.forEach((btn,i)=> btn.addEventListener('click', ()=> { currentStep=i; showStep(i); }));


nextBtn.addEventListener('click', ()=>{
  if(currentStep < steps.length-1){
    currentStep++;
    showStep(currentStep);
  } else {
    window.location.href = 'downloading.html';
  }
});
backBtn.addEventListener('click', ()=>{
  if(currentStep>0){
    currentStep--;
    showStep(currentStep);
  }
});




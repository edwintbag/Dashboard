


        // Update current date
        const updateDate = () => {
         const date = new Date();
         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
         document.getElementById('current-date').textContent = `Today is ${date.toLocaleDateString('en-US', options)}`;
     };
     updateDate();

     // Add click handlers for navigation items
     document.querySelectorAll('.nav-item').forEach(item => {
         item.addEventListener('click', () => {
             document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
             item.classList.add('active');
         });
     });

     // Modal functionality
     const modal = document.getElementById('add-project-modal');
     const btn = document.getElementById('add-project-btn');
     const span = document.getElementsByClassName('close')[0];

     btn.onclick = () => modal.style.display = 'block';
     span.onclick = () => modal.style.display = 'none';
     window.onclick = (event) => {
         if (event.target == modal) {
             modal.style.display = 'none';
         }
     };

     // Function to add new project
     const addProject = (name, tasks, progress) => {
         const projectCards = document.getElementById('project-cards');
         const newCard = document.createElement('div');
         newCard.className = 'project-card green';
         newCard.innerHTML = `
             <h3>${name}</h3>
             <p>${tasks} tasks • ${progress}%</p>
         `;
         projectCards.appendChild(newCard);
     };

     // Handle form submission
     document.getElementById('add-project-form').addEventListener('submit', (e) => {
         e.preventDefault();
         const name = document.getElementById('project-name').value;
         const tasks = document.getElementById('project-tasks').value;
         const progress = document.getElementById('project-progress').value;
         addProject(name, tasks, progress);
         modal.style.display = 'none';
         e.target.reset();
     });

     
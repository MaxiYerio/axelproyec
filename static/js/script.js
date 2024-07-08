document.addEventListener('DOMContentLoaded', function () {
    const courseHeaders = document.querySelectorAll('.course-container');

    courseHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const courseItem = this.parentElement;
            courseItem.classList.toggle('active');
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    fetch('https://cursos-45efb-default-rtdb.firebaseio.com/cursos.json')
        .then(response => response.json())
        .then(data => {
            const coursesContainer = document.getElementById('courses-container');
            Object.values(data).forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('col-md-4');

                courseItem.innerHTML = `
                    <div class="course-item rounded">
                        <img src="${course.img}" alt="${course.nombre}" class="img-fluid mb-3">
                        <h3 class="course-container text-white">${course.nombre}</h3>
                        <div class="course-info">
                            <p>${course.info}</p>
                            <p><strong>Duración:</strong> ${course.duracion}</p>
                            <p><strong>Precio:</strong> $${course.precio}</p>
                        </div>
                    </div>
                `;

                coursesContainer.appendChild(courseItem);
            });

            const courseHeaders = document.querySelectorAll('.course-container');

            courseHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const courseItem = this.parentElement;
                    courseItem.classList.toggle('active');
                });
            });
        })
        .catch(error => console.error('Error fetching course data:', error));
});
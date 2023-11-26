document.getElementById('pronunciationBtn').addEventListener('click', function () {
    // Add logic to play the pronunciation audio (you might use an audio library)
    alert('Playing pronunciation...');
});

document.getElementById('quizBtn').addEventListener('click', function () {
    // Redirect to the quiz page or load the quiz dynamically
    alert('Redirecting to quiz...');
});

// Sample navigation logic
document.getElementById('homeBtn').addEventListener('click', function () {
    document.getElementById('lessonTitle').innerText = 'Lesson 1: Greetings';
    // Add logic to load home content dynamically
});

document.getElementById('lessonsBtn').addEventListener('click', function () {
    document.getElementById('lessonTitle').innerText = 'Lessons';
    // Add logic to load lessons dynamically
});

document.getElementById('progressBtn').addEventListener('click', function () {
    document.getElementById('lessonTitle').innerText = 'Progress';
    // Add logic to load user progress dynamically
});

document.getElementById('logoutBtn').addEventListener('click', function () {
    // Add logic to log the user out
    alert('Logging out...');
});

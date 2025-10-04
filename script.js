//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', () => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = 'DOM load success';
    messageDiv.className = 'text-4xl font-extrabold text-white bg-green-500 p-8 rounded-xl shadow-2xl transition duration-300 transform hover:scale-105 tracking-wider text-center';
    document.body.appendChild(messageDiv);
});
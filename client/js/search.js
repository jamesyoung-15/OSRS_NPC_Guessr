const searchInput = document.getElementById('npcNameInput');



searchInput.addEventListener('input', (e) => {
    const value = e.target.value;
    console.log(value);
});
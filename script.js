function addVerse() {
    const verseInput = document.getElementById('verse');
    const verseList = document.getElementById('verse-list');

    if (verseInput.value) {
        const newVerse = document.createElement('p');
        newVerse.textContent = verseInput.value;
        verseList.appendChild(newVerse);
        verseInput.value = ''; // Clear input field
    } else {
        alert("Please enter a verse!");
    }
}

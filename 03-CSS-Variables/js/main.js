// Select all input elements -> Node List
const inputs = document.querySelectorAll('.container input');

function handleUpdate(){
    // Adds px suffix
    const suffix = this.dataset.sizing || '';
    // Sets Property 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// On change triggers handleUpdate
inputs.forEach(input => input.addEventListener('change', handleUpdate));

reveal = document.getElementById('reveal-block'),
hiddenBlock = document.getElementById('hidden-block')

function revealButton() {
    hiddenBlock.classList.remove('hidden-block');
    reveal.classList.add('hidden-block');
}

reveal.onclick = () => revealButton();
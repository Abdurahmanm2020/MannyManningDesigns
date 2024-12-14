reveal = document.getElementById('reveal-block'),
hiddenBlock = document.getElementById('hidden-block')

function revealButton() {
    hiddenBlock.classList.remove('hidden-block');
    reveal.classList.add('hidden-block');
}

reveal.onclick = () => revealButton();

// Changing text

var skills = ['UI/UX', 'Graphics', 'Apps', 'Logo', 'Product', 'Webflow'];
            
textSequence(0);
function textSequence(i) {

    if (skills.length > i) {
        setTimeout(function() {
            document.getElementById("swap-text").innerHTML = skills[i];
            textSequence(++i);
        }, 1000); 

    } else if (skills.length == i) { 
        textSequence(0);
    }

}

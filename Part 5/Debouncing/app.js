function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        timeoutId = setTimeout(() => {
            func.call(this, ...args);
        }, delay);
    }
};

const myInput = document.getElementById("input-event");

function findSuggestion(e) {
    console.log("Suggestions for ", e.target.value);
}

const decoratedFunc = debounce(findSuggestion, 5000);

myInput.addEventListener("input", decoratedFunc);

const Validation = {
    input: document.querySelector('#github-username-input'),

    inputIsEmpty() {
        return this.input.value.trim() == "" ? true : false
    }
}
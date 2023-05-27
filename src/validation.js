const Validation = {
    input: document.querySelector('#github-username-input'),

    inputIsEmpty() {
        return this.input.value == "" ? true : false
    }
}
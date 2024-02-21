function showSection(number) {
    const sections = document.getElementsByTagName('section');
    for (let index = 0; index < sections.length; index++) {
        if (index == number) {
            sections[index].classList.remove("d-none");
            continue;
        }
        sections[index].classList.add("d-none");
    }
}

// adds syntax highlighting for html in pokemon-table.js template

export default function html(strings, ...values) {
    let htmlString = String.raw(strings, ...values);
    var template = document.createElement('template');
    template.innerHTML = htmlString;


    let dom = template.content;

    return dom;
}
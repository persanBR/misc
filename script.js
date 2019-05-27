function submitFunction() {
    var newDiv = document.createElement('div');
    var name = document.getElementById('forminfo__username').value;
    var textName = document.createTextNode(name);
    var comment = document.getElementById('forminfo__textarea').value;
    var textComment = document.createTextNode(comment);
    var head = document.createElement('h4');

    newDiv.className = 'newDiv__content';
    
    document.getElementsByTagName('section')[0].appendChild(newDiv);
    
    newDiv.appendChild(head);
    head.appendChild(textName);
    newDiv.appendChild(textComment);
}
    
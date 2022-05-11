var items = ['milk', 'bread', 'sugar'];
function available(item){
    if (items.indexOf(item) === -1) {
    console.log('does not exist');
} else {
    console.log('exist');
}
}
available('milk');

// let name = "my name";
// let value = "John Smith";

// document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
// alert(document.cookie);
// console.log(document.cookie);

localStorage.setItem('test', 1);
localStorage.setItem('my', 2);
localStorage.setItem('learn', 3);

// console.log(localStorage.getItem('my'));

// for (let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)}`)
// }


// for (let key in localStorage) {
//     console.log(key);
// }

for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
        continue;
    }
    console.log(key);
}

sessionStorage.setItem('one', 1);
sessionStorage.setItem('two', 2);
sessionStorage.setItem('three', 3);

console.log(sessionStorage.two);

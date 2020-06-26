const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

let flag = true; // dark blue

// Break on attribute modifications
function makeGreen() {
    const p = document.querySelector('p');
    if (flag)
        p.style.color = 'red';
    else
        p.style.color = '#1b11e4';
    flag = !flag;
}

// Regular
console.log('Hello!');

// Interpolated
console.log('I am %s. Thankyou for checking out the console.', 'Satvik Chachra');

// Styled
console.log('%c You are awesome! 🤩 ', 'color: #000000; font-size: 18px; font-style: italic; background-color: #f2f3f6');

// warning!
console.warn('WARNING: THIS CONSOLE IS TOO HOT TO HANDLE!')

// Error :|
console.error("TOLD YA IT'S HOT");

// Info
console.info('FUN FACT: If you eat enough carrots—about three large carrots a day for several weeks—it increases the beta-carotene in your blood and could turn your skin orange.')

// Testing
console.assert(1 === 2, 'The above stated fact was fun. Oh Come on!');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p.innerHTML);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name} 🐶`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);

});

// counting
console.count('Satvik');
console.count('Vaibhav');
console.count('Vaibhav');
console.count('Vaibhav');
console.count('Satvik');

// timing
console.time('Fetching data from GitHub');
fetch('https://api.github.com/users/satvikchachra')
    .then(blob => blob.json())
    .then(data => {
        console.timeEnd('Fetched Data of Satvik Chachra');
        console.log(data);
    });

// table
const satvikData = [
    { profile: 'GitHub', link: 'https://github.com/satvikchachra' },
    { profile: 'LinkedIn', link: 'https://www.linkedin.com/in/satvikchachra/' },
    { profile: 'Twitter', link: 'https://twitter.com/satvik_codes' }]

console.table(satvikData);
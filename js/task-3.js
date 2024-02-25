let content = '50px';
console.log(Number.parseFloat(content));
let padding = '8px';
console.log(Number.parseFloat(padding));
let border = '4px';
console.log(Number.parseFloat(border));

function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) +
    Number.parseFloat(padding) +
    Number.parseFloat(padding) +
    Number.parseFloat(border) +
    Number.parseFloat(border)
  );
}

console.log(getElementWidth('50px', '8px', '4px')); // 74 ;

getElementWidth('50px', '8px', '4px'); // 74 ;
getElementWidth('60px', '12px', '8.5px'); // 101 ;
getElementWidth('200px', '0px', '0px'); // 200 ;

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

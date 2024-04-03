// 1
// let elem = document.querySelector('#elem');
// elem.style.color = 'red';
// console.log(elem.style.color); // выведет 'red';

// 2
// document.getElementById('myButton').addEventListener('click', function() {
//     var div = document.getElementById('myDiv');
//     div.style.width = '400px';
//     div.style.height = '300px';
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var fontSize = window.getComputedStyle(elem).getPropertyValue('font-size');
//     fontSize = fontSize.replace('px', '');
//     alert(fontSize);
// });

// 4
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let border = window.getComputedStyle(elem).getPropertyValue('border');
//     let borderWidth = border.match(/[0-9]+/)[0];
//     let borderStyle = border.match(/[a-zA-Z]+/)[0];
//     let borderColor = border.match(/[a-zA-Z]+/)[1];
//     alert('Толщина границы: ' + borderWidth + 'px\nТип границы: ' + borderStyle + '\nЦвет границы: ' + borderColor);
// });

// 5
// document.getElementById('hideButton').addEventListener('click', function() {
//     let div = document.getElementById('myDiv');
//     div.style.display = 'none';
// });

// document.getElementById('showButton').addEventListener('click', function() {
//     let div = document.getElementById('myDiv');
//     div.style.display = 'block';
// });

// let div = document.getElementById('myDiv');
// let redButton = document.getElementById('redButton');
// let resetButton = document.getElementById('resetButton');

// let originalColor = div.style.backgroundColor;

// redButton.addEventListener('click', function() {
//     div.style.backgroundColor = 'red';
// });

// resetButton.addEventListener('click', function() {
//     div.style.backgroundColor = originalColor;
// });


// 6
// elem.style.cssText = `
//   width: 100px;
//   height: 100px;
//   display: block;
//   margin: 10px auto;
//   color: red;
// `;

// 7
// let elem = document.querySelector('#elem');
// console.log(elem.style.color);

// 8
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let width = window.getComputedStyle(elem).getPropertyValue('width');
//     let height = window.getComputedStyle(elem).getPropertyValue('height');
//     alert('Ширина: ' + width + '\nВысота: ' + height);
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let width = window.getComputedStyle(elem).getPropertyValue('width');
//     let height = window.getComputedStyle(elem).getPropertyValue('height');
//     let newWidth = parseFloat(width)  *  2;
//     let newHeight = parseFloat(height)  *  2;
//     elem.style.width = newWidth + 'px';
//     elem.style.height = newHeight + 'px';
// });

// 9
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let fontSize = window.getComputedStyle(elem).getPropertyValue('font-size');
//     alert(fontSize);
// });

// 10
// let paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function(paragraph) {
//     let number = parseInt(paragraph.innerText);
//     if (number % 2 === 0) {
//         paragraph.classList.add('even');
//     } else {
//         paragraph.classList.add('odd');
//     }
// });

// 11
// let paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function(paragraph) {
//     paragraph.addEventListener('click', function() {
//         if (paragraph.classList.contains('active')) {
//             paragraph.classList.remove('active');
//         } else {
//             paragraph.classList.add('active');
//         }
//     });
// });

// 12
// document.getElementById('input').addEventListener('blur', function() {
//     if (this.value.length <= 9) {
//         this.style.borderColor = 'green';
//     } else {
//         this.style.borderColor = 'red';
//     }
// });

// 13
// document.getElementById('input').addEventListener('blur', function() {
//     let value = this.value;
//     if (value.length === 0) {
//         this.style.borderColor = 'red';
//     } else {
//         let number = parseInt(value);
//         if (number < 10) {
//             this.style.borderColor = 'green';
//         } else if (number < 20) {
//             this.style.borderColor = 'yellow';
//         } else {
//             this.style.borderColor = 'red';
//         }
//     }
// });

// 15
// let elem = document.querySelector('#elem');

// 16
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let width = window.getComputedStyle(elem).getPropertyValue('width');
//     let height = window.getComputedStyle(elem).getPropertyValue('height');
//     console.log('Ширина: ' + width + '\nВысота: ' + height);
// });

// 17
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let width = elem.clientWidth;
//     let height = elem.clientHeight;
//     console.log('Ширина: ' + width + '\nВысота: ' + height);
// });

// 18
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let scrollWidth = elem.scrollWidth;
//     let scrollHeight = elem.scrollHeight;
//     console.log('Ширина с прокруткой: ' + scrollWidth + '\nВысота с прокруткой: ' + scrollHeight);
// });

//19
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let scrollTop = elem.scrollTop;
//     console.log('Прокрутка по вертикали: ' + scrollTop);
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let scrollTop = elem.scrollTop;
//     if (scrollTop > 0) {
//         console.log('Элемент прокручен по вертикали');
//     } else {
//         console.log('Элемент не прокручен по вертикали');
//     }
// });


// document.getElementById('elem').scrollTop = document.getElementById('elem').scrollHeight;

// document.getElementById('myButton').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var scrollTop = elem.scrollTop;
//     var scrollHeight = elem.scrollHeight;
//     console.log('Прокрутка: ' + scrollTop + ' из ' + scrollHeight);
// });

// 20
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = 100;
//     elem.scrollLeft = 50;
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let currentScrollTop = elem.scrollTop;
//     let newScrollTop = currentScrollTop + 50;
//     elem.scrollTop = newScrollTop;
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = 0;
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = elem.scrollHeight;
// });

// 21
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     if (elem.scrollTop + elem.clientHeight === elem.scrollHeight) {
//         console.log('Элемент прокручен до конца по вертикали');
//     } else {
//         console.log('Элемент не прокручен до конца по вертикали');
//     }
// });

// 22
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.style.height = '100%';
// });

// 23
// document.getElementById('myButton').addEventListener('click', function() {
//     let div = document.createElement('div');
//     div.style.overflowY = 'scroll';
//     div.style.width = '50px';
//     div.style.height = '50px';
//     document.body.append(div);
//     let scrollWidth = div.offsetWidth - div.clientWidth;
//     div.remove();
//     console.log('Ширина полосы прокрутки: ' + scrollWidth);
// });

// 24
// document.getElementById('myButton').addEventListener('click', function() {
//     let w = window.innerWidth;  // ширина
//     let h = window.innerHeight; // высота
//     console.log('Ширина окна: ' + w + '\nВысота окна: ' + h);
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     if (window.innerWidth > document.documentElement.clientWidth) {
//         console.log('Имеется горизонтальная прокрутка');
//     } else {
//         console.log('Горизонтальная прокрутка отсутствует');
//     }
//     if (window.innerHeight > document.documentElement.clientHeight) {
//         console.log('Имеется вертикальная прокрутка');
//     } else {
//         console.log('Вертикальная прокрутка отсутствует');
//     }
// });

// 25
// document.getElementById('myButton').addEventListener('click', function() {
//     let scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//     );
  
//     console.log(scrollHeight);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     let scrollWidth = Math.max(
//       document.body.scrollWidth, document.documentElement.scrollWidth,
//       document.body.offsetWidth, document.documentElement.offsetWidth,
//       document.body.clientWidth, document.documentElement.clientWidth
//     );
  
//     console.log(scrollWidth);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     let hiddenHeight = document.documentElement.clientHeight - scrollHeight;
  
//     console.log(hiddenHeight);
//   });

// 26
// document.getElementById('myButton').addEventListener('click', function() {
//     let x = window.pageXOffset; // слева
//     let y = window.pageYOffset; // сверху
  
//     console.log(y);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let remainingHeight = totalHeight - y;
  
//     console.log(remainingHeight);
//   });
  
// 27
// document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = 300;
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - 100;
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = 0;
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight;
//   });
  
// 28
// document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollTo(0, 300);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
//   });
  
// 29
// document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy(0, 100);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy(0, -100);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy({ top: 300, behavior: 'smooth' });
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy({ top: -300, behavior: 'smooth' });
//   });
  
// 30
// document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView(true);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView(false);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView({ behavior: 'smooth' });
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'end',
//     });
//   });
  
// 31
// let isAtBottom = false;

// window.addEventListener('scroll', function() {
//   if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
//     isAtBottom = true;
//   }
// });

// window.addEventListener('scroll', function() {
//   if (isAtBottom) {
//     console.log('Вы достигли конца страницы');
//   }
// });

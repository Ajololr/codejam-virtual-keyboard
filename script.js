const keyArr = [
  {
    valueRu: 'ё',
    valueEng: '`',
    specialValueEng: '~',
    keyCode: 'Backquote',
  },
  {
    value: '1',
    specialValue: '!',
    keyCode: 'Digit1',
  },
  {
    value: '2',
    specialValueRu: '"',
    specialValueEng: '@',
    keyCode: 'Digit2',
  },
  {
    value: '3',
    specialValueRu: '№',
    specialValueEng: '#',
    keyCode: 'Digit3',
  },
  {
    value: '4',
    specialValueRu: ';',
    specialValueEng: '$',
    keyCode: 'Digit4',
  },
  {
    value: '5',
    specialValue: '%',
    keyCode: 'Digit5',
  },
  {
    value: '6',
    specialValueRu: ':',
    specialValueEng: '^',
    keyCode: 'Digit6',
  },
  {
    value: '7',
    specialValueRu: '?',
    specialValueEng: '&',
    keyCode: 'Digit7',
  },
  {
    value: '8',
    specialValue: '*',
    keyCode: 'Digit8',
  },
  {
    value: '9',
    specialValue: '(',
    keyCode: 'Digit9',
  },
  {
    value: '0',
    specialValue: ')',
    keyCode: 'Digit0',
  },
  {
    value: '-',
    specialValue: '_',
    keyCode: 'Minus',
  },
  {
    value: '=',
    specialValue: '+',
    keyCode: 'Equal',
  },
  {
    value: 'Backspace',
    keyCode: 'Backspace',
    keyValue: '\b',
  },
  {
    value: 'Tab',
    keyCode: 'Tab',
    keyValue: '\t',
  },
  {
    valueRu: 'й',
    valueEng: 'q',
    keyCode: 'KeyQ',
  },
  {
    valueRu: 'ц',
    valueEng: 'w',
    keyCode: 'KeyW',
  },
  {
    valueRu: 'у',
    valueEng: 'e',
    keyCode: 'KeyE',
  },
  {
    valueRu: 'к',
    valueEng: 'r',
    keyCode: 'KeyR',
  },
  {
    valueRu: 'е',
    valueEng: 't',
    keyCode: 'KeyT',
  },
  {
    valueRu: 'н',
    valueEng: 'y',
    keyCode: 'KeyY',
  },
  {
    valueRu: 'г',
    valueEng: 'u',
    keyCode: 'KeyU',
  },
  {
    valueRu: 'ш',
    valueEng: 'i',
    keyCode: 'KeyI',
  },
  {
    valueRu: 'щ',
    valueEng: 'o',
    keyCode: 'KeyO',
  },
  {
    valueRu: 'з',
    valueEng: 'p',
    keyCode: 'KeyP',
  },
  {
    valueRu: 'х',
    valueEng: '[',
    specialValueEng: '{',
    keyCode: 'BracketLeft',
  },
  {
    valueRu: 'ъ',
    valueEng: ']',
    specialValueEng: '}',
    keyCode: 'BracketRight',
  },
  {
    value: '\\',
    specialValueEng: '|',
    specialValueRu: '/',
    keyCode: 'Backslash',
  },
  {
    value: 'Caps lock',
    keyCode: 'CapsLock',
  },
  {
    valueRu: 'ф',
    valueEng: 'a',
    keyCode: 'KeyA',
  },
  {
    valueRu: 'ы',
    valueEng: 's',
    keyCode: 'KeyS',
  },
  {
    valueRu: 'в',
    valueEng: 'd',
    keyCode: 'KeyD',
  },
  {
    valueRu: 'а',
    valueEng: 'f',
    keyCode: 'KeyF',
  },
  {
    valueRu: 'п',
    valueEng: 'g',
    keyCode: 'KeyG',
  },
  {
    valueRu: 'р',
    valueEng: 'h',
    keyCode: 'KeyH',
  },
  {
    valueRu: 'о',
    valueEng: 'j',
    keyCode: 'KeyJ',
  },
  {
    valueRu: 'л',
    valueEng: 'k',
    keyCode: 'KeyK',
  },
  {
    valueRu: 'д',
    valueEng: 'l',
    keyCode: 'KeyL',
  },
  {
    valueRu: 'ж',
    valueEng: ';',
    specialValueEng: ':',
    keyCode: 'Semicolon',
  },
  {
    valueRu: 'э',
    valueEng: '\'',
    specialValueEng: '"',
    keyCode: 'Quote',
  },
  {
    value: 'Enter',
    keyCode: 'Enter',
    keyValue: '\n',
  },
  {
    value: 'Shift',
    keyCode: 'ShiftLeft',
  },
  {
    valueRu: 'я',
    valueEng: 'z',
    keyCode: 'KeyZ',
  },
  {
    valueRu: 'ч',
    valueEng: 'x',
    keyCode: 'KeyX',
  },
  {
    valueRu: 'c',
    valueEng: 'с',
    keyCode: 'KeyC',
  },
  {
    valueRu: 'м',
    valueEng: 'v',
    keyCode: 'KeyV',
  },
  {
    valueRu: 'и',
    valueEng: 'b',
    keyCode: 'KeyB',
  },
  {
    valueRu: 'т',
    valueEng: 'n',
    keyCode: 'KeyN',
  },
  {
    valueRu: 'ь',
    valueEng: 'm',
    keyCode: 'KeyM',
  },
  {
    valueRu: 'б',
    valueEng: ',',
    specialValueEng: '<',
    keyCode: 'Comma',
  },
  {
    valueRu: 'ю',
    valueEng: '.',
    specialValueEng: '>',
    keyCode: 'Period',
  },
  {
    valueRu: '.',
    valueEng: '/',
    specialValueEng: '?',
    specialValueRu: ',',
    keyCode: 'Slash',
  },
  {
    value: 'Shift',
    keyCode: 'ShiftRight',
  },
  {
    value: 'Ctrl',
    keyCode: 'ControlLeft',
  },
  {
    value: 'Alt',
    keyCode: 'AltLeft',
  },
  {
    value: 'Space',
    keyCode: 'Space',
  },
  {
    value: 'Alt',
    keyCode: 'AltRight',
  },
  {
    value: 'Ctrl',
    keyCode: 'ControlRight',
  },
];

let isEnglish = false;
let isCapsLock = false;

function toggleCapsLock() {
  isCapsLock = !isCapsLock;

  if (isCapsLock) {
    keyArr.forEach((key) => {
      const keyElement = document.getElementById(key.keyCode);
      
      if (key.specialValue || key.specialValueRu || key.specialValueEng) {
        keyElement.textContent = (isEnglish ? key.specialValueEng : key.specialValueRu) || key.specialValue || keyElement.textContent.toUpperCase();
      } else if (key.valueRu) {
        keyElement.textContent = keyElement.textContent.toUpperCase();
      }
    });
  } else {
    keyArr.forEach((key) => {
      const keyElement = document.getElementById(key.keyCode);

      if (key.specialValue || key.specialValueRu || key.specialValueEng) {
        keyElement.textContent = (isEnglish ? key.valueEng : key.valueRu) || key.value;
      } else if (key.valueRu) {
        keyElement.textContent = keyElement.textContent.toLowerCase();
      }
    });
  }
}

function triggerButton(keyCode) {
  const button = document.getElementById(keyCode);
  let text = document.getElementById('textarea-input').value;

  document.getElementById('textarea-input').focus();

  switch (keyCode) {
    case 'Enter':
      text += '\n';
      break;

    case 'Backspace':
      text = text.substring(0, text.length - 1);
      break;

    case 'Space':
      text += ' ';
      break;

    case 'Tab':
      text += '\t';
      break;

    case 'AltLeft':
    case 'AltRight':
    case 'ControlLeft':
    case 'ControlRight':
      break;

    case 'CapsLock':
      if (button.classList.contains('pressed')) {
        button.classList.remove('pressed');
      } else {
        button.classList.add('pressed');
      }
      toggleCapsLock();
      break;

    case 'ShiftLeft':
    case 'ShiftRight':
      if (isCapsLock) {
        keyArr.forEach((key) => {
          const keyElement = document.getElementById(key.keyCode);

          if (key.specialValue || key.specialValueRu || key.specialValueEng) {
            keyElement.textContent = (isEnglish ? key.valueEng : key.valueRu) || key.value;
          } else if (key.valueRu) {
            keyElement.textContent = keyElement.textContent.toLowerCase();
          }
        });
      } else {
        keyArr.forEach((key) => {
          const keyElement = document.getElementById(key.keyCode);

          if (key.specialValue || key.specialValueRu || key.specialValueEng) {
            keyElement.textContent = (isEnglish ? key.specialValueEng : key.specialValueRu) || key.specialValue || keyElement.textContent.toUpperCase();
          } else if (key.valueRu) {
            keyElement.textContent = keyElement.textContent.toUpperCase();
          }
        });
      }
      break;

    default:
      text += button.textContent;
  }
  document.getElementById('textarea-input').value = text;
  if (keyCode !== 'CapsLock') button.classList.add('pressed');
}

document.addEventListener('keydown', (event) => {
  triggerButton(event.code);

  if (document.getElementById('ShiftLeft').classList.contains('pressed') && document.getElementById('AltLeft').classList.contains('pressed')) {
    keyArr.forEach((key) => {
      const elem = document.getElementById(key.keyCode);

      if (isEnglish) {
        elem.textContent = key.valueRu || key.value || key.specialValueRu;
      } else {
        elem.textContent = key.valueEng || key.value || key.specialValueEng;
      }
    });

    isEnglish = !isEnglish;
    localStorage.setItem('keyboardLanguage', isEnglish);

    setTimeout(() => {
      document.getElementById('AltLeft').classList.remove('pressed');
    }, 300);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') document.getElementById(event.code).classList.remove('pressed');

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (isCapsLock) {
      keyArr.forEach((key) => {
        const keyElement = document.getElementById(key.keyCode);
      
        if (key.specialValue || key.specialValueRu || key.specialValueEng) {
          keyElement.textContent = (isEnglish ? key.specialValueEng : key.specialValueRu) || key.specialValue || keyElement.textContent.toUpperCase();
        } else if (key.valueRu) {
          keyElement.textContent = keyElement.textContent.toUpperCase();
        }
      });
    } else {
      keyArr.forEach((key) => {
        const keyElement = document.getElementById(key.keyCode);

        if (key.specialValue || key.specialValueRu || key.specialValueEng) {
          keyElement.textContent = (isEnglish ? key.valueEng : key.valueRu) || key.value;
        } else if (key.valueRu) {
          keyElement.textContent = keyElement.textContent.toLowerCase();
        }
      });
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const input = document.createElement('textarea');
  const keyboard = document.createElement('div');
  isEnglish = localStorage.getItem('keyboardLanguage') !== 'false';

  input.setAttribute('id', 'textarea-input');
  keyboard.classList.add('keyboard-container');

  input.addEventListener('keydown', (event) => {
    event.preventDefault();
  });

  keyArr.forEach((key) => {
    const keyElement = document.createElement('button');

    keyElement.classList.add('keyboard-container__key');
    keyElement.setAttribute('id', key.keyCode);

    keyElement.addEventListener('click', () => {
      triggerButton(key.keyCode);
      setTimeout(() => {
        if (key.keyCode !== 'CapsLock') keyElement.classList.remove('pressed');
      }, 300);
    });

    if (isEnglish) {
      keyElement.textContent = key.valueEng || key.value;
    } else {
      keyElement.textContent = key.valueRu || key.value;
    }

    keyboard.appendChild(keyElement);
  });

  document.body.appendChild(input);
  document.body.appendChild(keyboard);
});

// 1)
function isSymmetrical(number) {
    const numberStr = String(number);
    const reversedStr = numberStr.split('').reverse().join('');
    return numberStr === reversedStr;
  }
  
  console.log(isSymmetrical(7227));       // true
  console.log(isSymmetrical(12567));      // false
  console.log(isSymmetrical(44444444));   // true
  console.log(isSymmetrical(9939));       // false
  console.log(isSymmetrical(1112111));    // true

// 2)
function hashPlusCount(str) {
    let hashCount = 0;
    let plusCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        hashCount++;
      } else if (str[i] === '+') {
        plusCount++;
      }
    }
  
    return [hashCount, plusCount];
  }
  
  console.log(hashPlusCount("### +"));            // [3, 1]
  console.log(hashPlusCount("## +++ #"));         // [3, 3]
  console.log(hashPlusCount("# +++ # ++ #"));     // [4, 6]
  console.log(hashPlusCount(""));                 // [0, 0]

  
// 3)

function societyName(names) {
    const initials = names.map(name => name[0].toUpperCase());
    return initials.sort().join('');
  }
  
  console.log(societyName(["Адам", "Сара", "Малкольм"]));  // "АСМ"
  console.log(societyName(["Гарри", "Ньют", "Луна", "Чо"]));  // "ГНЛЧ"
  console.log(societyName(["Фиби", "Чендлер", "Рэйчел", "Росс", "Моника", "Джоуи"]));  // "ФЧРРМД"


// 4)

function reverseCase(str) {
    let reversedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === char.toUpperCase()) {
        reversedStr += char.toLowerCase();
      } else {
        reversedStr += char.toUpperCase();
      }
    }
  
    return reversedStr;
  }
  
  console.log(reverseCase("Happy Birthday"));   // "hAPPY bIRTHDAY"
  console.log(reverseCase("MANY THANKS"));      // "many thanks"
  console.log(reverseCase("sPoNtAnEoUs"));     // "SpOnTaNeOuS"

  
// 5)

function isValid(postalCode) {
    // Проверка длины почтового индекса
    if (postalCode.length !== 5) {
      return false;
    }
  
    // Проверка наличия только цифр
    if (!/^\d+$/.test(postalCode)) {
      return false;
    }
  
    return true;
  }
  
  console.log(isValid("59001"));   // true
  console.log(isValid("853a7"));   // false
  console.log(isValid("732 32"));  // false
  console.log(isValid("393939"));  // false
  
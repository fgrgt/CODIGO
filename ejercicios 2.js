
    let num1, num2, num3;

    // Asignar valores a las variables
    num1 = 10;
    num2 = 5;
    num3 = 15;
    
    // Comparación y ordenación
    if (num1 >= num2) {
      if (num1 >= num3) {
        console.log(num1, num2, num3);
      } else {
        console.log(num3, num1, num2);
      }
    } else {
      if (num2 >= num3) {
        console.log(num2, num3, num1);
      } else {
        console.log(num3, num2, num1);
      }
    }
    let radio;

    // Asignar valor a la variable
    radio = 5;
    
    // Cálculo del área
    const area = Math.PI * Math.pow(radio, 2);
    
    // Mostrar resultado
    console.log("El área es:", area);
    // 1 2 3 4 5 6 7 8 9 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 5 6 7 8 9 10 11 12 13 14 15
  for (let i = 5; i <= 15; i++) {
    console.log(i);
  }
  
  // 15 14 13 12 ... 1
  for (let i = 15; i >= 1; i--) {
    console.log(i);
  }
  
  // 11 13 15 17 19 21 ... 51
  for (let i = 11; i <= 51; i += 2) {
    console.log(i);
  }
  
  // 50 47 44 41 38 35 ... mientras sea positivo
  for (let i = 50; i >= 0; i -= 3) {
    console.log(i);
  }
  
  // -6 -5 -4 -3 -2 -1 0 1 2 3
  for (let i = -6; i <= 3; i++) {
    console.log(i);
  }
  
  // a b c d e f g
  const abc = "abcdefg";
  for (const letter of abc) {
    console.log(letter);
  }
  
  // m e n s a j e
  const message = "mensaje";
  for (const letter of message) {
    console.log(letter);
  }
  function drawDiamond(size) {
    for (let i = 0; i < size; i++) {
      let spaces = " ".repeat(size - i - 1);
      let stars = "*".repeat(2 * i + 1);
      console.log(spaces + stars);
    }
    for (let i = size - 2; i >= 0; i--) {
      let spaces = " ".repeat(size - i - 1);
      let stars = "*".repeat(2 * i + 1);
      console.log(spaces + stars);
    }
  }
  //rombo hueco
  function printDiamond(n) {
    let space = " ";
    let asterisk = "*";
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n - i; j++) {
        row += space;
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1) {
          row += asterisk;
        } else {
          row += space;
        }
      }
      console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= n - i; j++) {
        row += space;
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1) {
          row += asterisk;
        } else {
          row += space;
        }
      }
      console.log(row);
    }
  }
  
  printDiamond(4);  
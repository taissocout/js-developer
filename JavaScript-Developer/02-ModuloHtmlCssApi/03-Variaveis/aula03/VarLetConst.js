    // Var, Let e Const são as formas de declarar variáveis em JavaScript. Cada uma tem suas próprias características e usos específicos.

    // Var é a forma mais antiga de declarar variáveis. Ela tem escopo global ou de função, o que pode levar a problemas de escopo e hoisting. Variáveis declaradas com var podem ser redeclaradas e reatribuídas.

    // Let é a forma mais moderna de declarar variáveis. Ela tem escopo de bloco, o que significa que só existe dentro do bloco onde foi declarada. Variáveis declaradas com let podem ser reatribuídas, mas não podem ser redeclaradas no mesmo escopo.

    // Const é usada para declarar constantes, ou seja, valores que não podem ser reatribuídos. Ela também tem escopo de bloco. Variáveis declaradas com const não podem ser redeclaradas nem reatribuídas, mas se o valor for um objeto ou array, suas propriedades ou elementos podem ser modificados.

    // Exemplo de var:
    var x = 10;
    console.log(x); // 10
    var x = 20; // redeclaração permitida
    console.log(x); // 20     

    // Exemplo de let:
    let y = 10;
    console.log(y);
    // let y = 20; // SyntaxError: Identifier 'y' has already been declared

    // Exemplo de const:
    const z = 10;
    // z = 20; // TypeError: Assignment to constant variable.
    console.log(z); 
    // z = 20; // TypeError: Assignment to constant variable.   

    // Em resumo, var é a forma mais antiga e tem escopo global ou de função, let é a forma mais moderna e tem escopo de bloco, e const é usada para declarar constantes que não podem ser reatribuídas. É recomendado usar let e const em vez de var para evitar problemas de escopo e hoisting. 


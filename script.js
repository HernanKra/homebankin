alert("Bienvenido a su HomeBanking, vamos a comenzar con el registro");

let nombreUsuario = (prompt("Cual es su nombre?"))
let newUser = (prompt("Cree su nombre de usuario"));
let newPassword = (prompt("Ingrese una contraseña"));

alert("Usuario creado con exito, Ingrese a su HomeBanking");

let user;
let password;

do {
    user = prompt("Ingrese su nombre de usuario");
    password = prompt("Ingrese su contraseña");
} while (user !== newUser && password !== newPassword);


let cuentaCorriente = 0;
let cajaAhorro = 0;
let menu;
let depositoCtaCorriente;
let depositoCjaAhorro;

const cjaAhorro = () => {
    depositoCjaAhorro = Number(prompt(`Deposite dinero en su caja de ahorro`))
    cajaAhorro = cajaAhorro + depositoCjaAhorro;
    if (depositoCjaAhorro > 0) {
        alert(`El depósito de $${cajaAhorro} , se efectuó correctamente`)
    } else {
        alert(`El monto ingresado no es correcto, por favor intente de nuevo con otro monto.`)
    }
};

const ctaCorriente = () => {
    depositoCtaCorriente = Number(prompt(`Deposite dinero en su cuenta corriente`))
    cuentaCorriente = cuentaCorriente + depositoCtaCorriente;
    if (depositoCtaCorriente > 0) {
        alert(`El depósito de $${cuentaCorriente} , se efectuó correctamente`)
    } else {
        alert(`El monto ingresado no es correcto, por favor intente de nuevo con otro monto.`)
    }
}

const conSaldo = () => {
    alert(`El saldo de sus cuentas es de: 
    ## Caja de ahorro = $ ${cajaAhorro}
    ## Cuenta corriente = $ ${cuentaCorriente}
    `)
}

const cvu = () => {
    alert(`
    CBU: 8400039482739485769
    ALIAS: banana.pez.raton`)
}

do {
    menu = Number(prompt(`Hola ${nombreUsuario} ,Bienvenido a tu HomeBanking.
    1 - Ingresar dinero en Caja de ahorro
    2 - Ingresar dinero en Cuenta corriente
    3 - Consulta de saldo 
    4 - Mi Alias / CVU
    5 - Salir
    `))

    switch (menu) {
        case 1: {
            cjaAhorro();
            break;
        }
        case 2: {
            ctaCorriente();
            break;
        }
        case 3: {
            conSaldo();
            break;
        }
        case 4: {
            cvu();
            break;
        }
        case 5: {
            alert("Sesión finalizada, gracias por utilizar nuestros servicios")
            break;
        }
        default: {
            alert("El dato ingresado no es valido")
            break;
        };

    }
} while (menu !== 5)











para//map filter & reduce.
//-----------------------------------------------------------------------------

const maca ={
    value: 3,
}

const orange = {
    value: 5,
}


function mapComThis(arr, thisArg){
        return arr.map(function(item){
           return item * this.value;
        }, thisArg);
}

const nums = [1,2];

console.log( 'this -> maçã',mapComThis(nums, maca));
console.log( 'this -> orange',mapComThis(nums, orange));

//-----------------------------------------------------------------------------
// Utilizando da mesma situação só que agora, sem o This.

function mapSemThis(arr){
    arr.map(function(item){
        return item * 2;
    });

    const nums = [3,6,9,12];

    console.log(mapSemThis(nums));

    console.log(nums);
}

//-----------------------------------------------------------------------------

function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const paresArray = [1,23,44,55,2,6,8,10,11,125];

console.log(filtraPares(paresArray));

//------------------------------------------------------------------------------------

function somaNumeros(arr){
    return arr.reduce(function(prev, current){
          console.log({prev});
          console.log({current});
          return prev + current;
      },0);
  }
  
  const arr = [1,2];
  
  console.log( ' o numero das somas é : ' , somaNumeros(arr));


//------------------------------------------------------------------------------------

const  lista = [

    {
        name: 'sabão em pó',
        preco: 30,
    },
    {
        name:'cereal',
        preco:12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
            console.log('rodada' , index + 1);
            console.log({prev})
            console.log({current})
        return prev - current.preco;
    }, saldoDisponivel);   
}

console.log( ' o meu saldo ficou : ' , calculaSaldo( saldoDisponivel,lista));

//------------------------------------------------------------------------------------



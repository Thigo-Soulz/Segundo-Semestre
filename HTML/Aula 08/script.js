const data = require('./data.json')

const pessoas = Array.isArray(data) ? data : data.users || data.pessoas || []

const totalSalarios = pessoas.reduce((acc,p)=> acc + (p.salary || 0),0)

const mediaSalario =
pessoas.length ? totalSalarios / pessoas.length : 0

const mediaIdade =
pessoas.length
? pessoas.reduce((acc,p)=> acc + (p.age || 0),0) / pessoas.length
: 0

const ativos =
pessoas.filter(p=> p.active).length

const inativos =
pessoas.filter(p=> !p.active).length

const maiorSalario =
Math.max(...pessoas.map(p=>p.salary || 0))

const menorSalario =
Math.min(...pessoas.map(p=>p.salary || 0))

const salariosAtivos =
pessoas
.filter(p=>p.active)
.reduce((acc,p)=> acc + (p.salary || 0),0)

const usuariosPorCargo =
pessoas.reduce((acc,p)=>{
acc[p.role] = (acc[p.role] || 0) + 1
return acc
},{})

const listaMaior5000 =
pessoas
.filter(p=>p.salary > 5000)
.map(p=>({name:p.name, role:p.role}))

console.log("Total salários:", totalSalarios)
console.log("Média salarial:", mediaSalario)
console.log("Média idade:", mediaIdade)
console.log("Usuários ativos:", ativos)
console.log("Usuários inativos:", inativos)
console.log("Maior salário:", maiorSalario)
console.log("Menor salário:", menorSalario)
console.log("Salários dos ativos:", salariosAtivos)
console.log("Usuários por cargo:", usuariosPorCargo)
console.log("Lista salário > 5000:", listaMaior5000)
const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
    ]
    
    const ativos = users.filter(u => u.active)
    const inativos = users.filter(u => !u.active)
    
    const devs = users.filter(u => u.role === "dev")
    const designers = users.filter(u => u.role === "designer")
    const managers = users.filter(u => u.role === "manager")
    const analysts = users.filter(u => u.role === "data_analyst")
    
    const somaSalarios = users.reduce((acc,u)=> acc + u.salary,0)
    const mediaSalarios = somaSalarios / users.length
    
    const mediaIdade = users.reduce((acc,u)=> acc + u.age,0) / users.length
    
    const usuariosAtivos = ativos.length
    const usuariosInativos = inativos.length
    
    const maiorSalario = Math.max(...users.map(u=>u.salary))
    const menorSalario = Math.min(...users.map(u=>u.salary))
    
    const somaSalariosAtivos = ativos.reduce((acc,u)=> acc + u.salary,0)
    
    const mediaSalarioAtivos =
    ativos.reduce((acc,u)=> acc + u.salary,0) / ativos.length
    
    const totalFolha = somaSalarios
    
    const usuariosPorCargo = users.reduce((acc,u)=>{
    acc[u.role] = (acc[u.role] || 0) + 1
    return acc
    },{})
    
    const lista5000 = users
    .filter(u=>u.salary > 5000)
    .map(u=>({name:u.name, role:u.role}))
    
    const managersAtivos =
    users.filter(u=>u.role === "manager" && u.active)
    
    const mediaIdadeManagers =
    managersAtivos.reduce((acc,u)=>acc + u.age,0) / managersAtivos.length
    
    const somaPorCargo = users.reduce((acc,u)=>{
    acc[u.role] = (acc[u.role] || 0) + u.salary
    return acc
    },{})
    
    const cargoMaiorSalario =
    Object.keys(somaPorCargo)
    .reduce((a,b)=> somaPorCargo[a] > somaPorCargo[b] ? a : b)
    
    const maiorSalarioAtivo =
    ativos.reduce((maior,u)=> u.salary > maior.salary ? u : maior)
    
    const container = document.getElementById("container")
    
    function createCard(user){
    const div = document.createElement("div")
    div.innerHTML = `${user.name} - ${user.age}`
    return div
    }
    
    ativos.forEach(user=>{
    container.appendChild(createCard(user))
    })
    
    container.innerHTML += `
    <hr>
    <p>Média salarial dos ativos: ${mediaSalarioAtivos.toFixed(2)}</p>
    <p>Total da folha salarial: ${totalFolha}</p>
    <p>Usuários por cargo: ${JSON.stringify(usuariosPorCargo)}</p>
    <p>Lista salário > 5000: ${JSON.stringify(lista5000)}</p>
    <p>Média idade managers ativos: ${mediaIdadeManagers.toFixed(2)}</p>
    <p>Cargo com maior soma salarial: ${cargoMaiorSalario}</p>
    <p>Maior salário entre ativos: ${maiorSalarioAtivo.name}</p>
    `
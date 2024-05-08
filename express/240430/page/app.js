const BASE_URL = 'http://127.0.0.1:3000'
const userId = 'admin'
const password = '1234'
const graphType = 'bar'
const field = 'category'

async function login(userId, password){
    const userJSON = await fetch(`${BASE_URL}/api/users/login`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            userId, password
        })
    })
    const user = await userJSON.json()
    return user
}
async function getGroups(field, user){
    console.log(user)
    let base_url = `${BASE_URL}/api/todos/group`
    if(!user.isAdmin){
        base_url += '/mine'
    }
    if(field === 'createdAt'  || field === 'lastModifiedAt' || field === 'finishedAt'){
        base_url += '/date'
    }
    const groupJSON = await fetch(`${base_url}/${field}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })
    const group = await groupJSON.json()
    return group.docs
}
async function fetchData(userId, password, field){
    const user = await login(userId, password)
    const group = await getGroups(field, user)
    return group
}
function displayChart(type, group){
    // 차트 그리기
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type,
        data: {
        labels: group.filter(item => item._id !== null && item._id !== undefined && item._id !== '').map(item => item._id.year ? `${item._id.year}년 ${item._id.month}월` 
                            : typeof item._id === 'boolean' ? (item._id === true ? "종료": "진행중") 
                            : item._id),
        datasets: [{
            label: '# of Todos',
            data: group.filter(item => item._id !== null && item._id !== undefined && item._id !== '').map(item => item.count),
            borderWidth: 1,
            backgroundColor: '#FFD700',
            borderColor: '#FFD700',
        }]
        },
        options: {
            indexAxis: 'y',
        scales: {
            y: {
            beginAtZero: true
            }
        },
        plugins: {
            colors: {
            enabled: true
            }
        }
        }
    });
}

fetchData(userId, password, field)
.then(group => {
    console.log(group)
    displayChart(graphType, group)
})
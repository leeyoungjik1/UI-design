const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
const companiesReversed = []

// 구현하기
while(companies.length !== 0){
    companiesReversed.push(companies.pop())
}
console.log(companiesReversed)
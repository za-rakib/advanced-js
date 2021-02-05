const students =[
    {id:101, name:'Rakib'},
    {id:102, name:'Dip'},
    {id:103,name:'Raj'},
    {id:104, name:'Nitu'}
];
// const stuName=[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//    stuName.push(element);
// }
const names= students.map (x=>x.name);
console.log(names);
const bigger = students.filter(s=>s.id>102);
const bigger1 = students.find(s=>s.id>102);
console.log(bigger);
console.log(bigger1);
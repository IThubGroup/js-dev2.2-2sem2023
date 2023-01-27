/*
document.body
childNodes

firstChild => firstElementChild
lastChild =>
nextSibling =>
previousSibling =>
parentNode => parentElement

nodeName
nodeValue
nodeType

textContent - получение или изменение текста внутри узла
*/

document.body.firstElementChild.textContent += "\nHello!";
console.log(document.body.textContent);
console.log(document.body.innerText);

// document.body.innerText += " Text here";

/*
.innerText не работает для текстовых узлов - только для узла элемента (тега)
.innerHTML позволяет получить внутреннее содержимое узла с html-тегами в виде строки
*/

document.body.innerHTML += "<ins>Text here...</ins>"
document.body.innerHTML = "";

const text = "Несмотря на то, что у Никколо были законные дети, в качестве своего преемника он предпочёл Лионелло. Уровень образования и способность к управлению, популярность среди подданных, а также официальное признание Лионелло папой сделали его наиболее подходящим наследником. Уже с 1434 года он был соправителем своего отца и показал себя на этом поприще успешным администратором. Лионелло не имел сильного влияния на политические дела Италии и аристократию Феррары. Его краткое правление не отмечено сколько-нибудь серьёзными внешними и внутренними конфликтами. В отличие от других представителей семьи д’Эсте: Аццо VII, Никколо III и Изабеллы д’Эсте, которые стремились к доминированию на политической сцене, он известен главным образом тем, что при нём сформировался один из самых блестящих итальянских ренессансных дворов, где покровительствовали искусству, литературе и культуре. По мнению исследователей, в годы правления Лионелло начался процесс преобразования Феррары из средневековой синьории в ренессансное государство. Лионелло сделал Феррару одним из значительных европейских центров образования. С одобрения коммуны и, возможно, под влиянием своего учителя-гуманиста Гуарино да Вероны он реформировал Университет Феррары, в котором учились студенты и работали преподаватели как из Италии, так и из других стран. Учебный центр успешно конкурировал с рядом расположенными знаменитыми университетами Падуи и Болоньи.";

const sentence = text.split(". ");
let lastSent = sentence.pop();
lastSent = lastSent.slice(0, lastSent.length - 1);
sentence.push(lastSent);
// console.log(sentence)

// https://fakerapi.it/api/v1/custom?_quantity=20&name=name&birth=date

let persons = [{"name":"Lenora Auer","birth":"1999-08-20"},{"name":"Lorine Ryan","birth":"2009-03-14"},{"name":"Viviane Walker","birth":"1986-08-10"},{"name":"Tremayne Bogan","birth":"2002-08-05"},{"name":"Kellie Zemlak","birth":"1980-03-01"},{"name":"Anais Kris","birth":"1987-09-21"},{"name":"Odessa Johns","birth":"2005-01-28"},{"name":"Quinton Ledner","birth":"1990-01-24"},{"name":"Sincere Tremblay","birth":"1980-06-05"},{"name":"Burley Steuber","birth":"2021-12-28"},{"name":"Darien Schoen","birth":"1971-04-06"},{"name":"Eino Hodkiewicz","birth":"1994-07-28"},{"name":"Nora Flatley","birth":"2010-03-22"},{"name":"Immanuel Gutmann","birth":"2019-03-23"},{"name":"Danny Feil","birth":"1970-09-18"},{"name":"Eleanore Cummerata","birth":"1986-04-27"},{"name":"Alexandrine Gutkowski","birth":"2017-05-06"},{"name":"Destini White","birth":"2012-11-05"},{"name":"Coleman Corwin","birth":"1978-06-02"},{"name":"Barton Connelly","birth":"1991-03-11"}]

/*
    {
        name: "..."
        age: (today - birth) 20
        text: "..."
        bg: color
    }
*/

class Person {
    constructor(obj, txt) {
        this.name = obj.name;
        this.age = new Date().getFullYear() - new Date(obj.birth).getFullYear();
        this.text = txt;
        this.bg = getColor(30);
    }
}

const data = [];
let cnt = 9;
while (cnt--) {
    let txt = sentence[getNumber(sentence.length)];
    let ppl = persons[getNumber(persons.length)];
    data.push(new Person(ppl, txt));
}

console.log(data);

let html = "";
for (let val of data) {
    html += `<div class="card" style="background-color: ${val.bg}">
        <h3>${val.name}</h3>
        <p>${val.text}</p>
        <div class="age">${val.age} y.o.</div>
    </div>`
}
document.body.innerHTML += html;
function sayhello()
{
    var x =document.getElementById('txt1').value;
    location.reload();
    alert("Hello"+" "+x);
}
var people={namee:'ali',family:'amini',age:20,location:'Thran'}
function PersonInfo(Name,Family,Age,Location)
{
    this.Name=namee,
    this.Family=family,
    this.Age=age,
    this.Location=location,
    this.fullName=function()
    {
        return this.Name+" "+this.Family;
    }
}
var reza=new PersonInfo('reza','rezayi',23,'shiraz');
var hadi=new PersonInfo('hadi','hedayat',24,'tehran');
var person=[];
person.push(new PersonInfo('saeed','nimayi',24,'tehran'));
var text="";
for(var x in person)
{
    text+=person[x].fullName()+"</br>"
}

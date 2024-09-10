function  myFunction1(){
    var se1= parseInt(document.getElementById('se1').value);
    var se2= parseInt(document.getElementById('se2').value);
    var years = document.getElementById('year');
    var value = years.options[years.selectedIndex].value;
    
    if (isNaN(se1)) {
        alert("Enter Again Semester 1!");
        return;
    }
    else if (isNaN(se2)) {
        alert("Enter Again Semester 2!");
        return;
    }
    else if (!value){
        alert("Select Years, Please");
        return;
    }
    var total;
    switch (parseInt(value)) {
        case 1:
            total = (se1 + se2*2) / 3;
            break;
        case 2:
            total = (se1*2 + se2*2)/4;
            break;
        case 3:
            total = (se1*2 + se2*3)/5
            break;
    }
    document.getElementById('result').value= total.toFixed(2);


var Classification;
if (total >=9){
    Classification ='Excellent Student';
    display.style.color= 'red';
    display.style.fontSize = '24px';
    display.style.margin = '24px';
}
else if ( total >= 7 && total < 9){
    Classification = 'Good Student';
    display.style.fontSize = '24px';
    display.style.color = 'yellow';
    display.style.margin = '24px';
}
else{
    Classification ='Bad Student';
    display.style.fontSize = '24px';
    display.style.color = 'Green';
    display.style.margin = '24px';
}
document.getElementById('display').innerText= Classification;
        }
        function myFunction2() {
            document.getElementById('se1').value = '';
            document.getElementById('se2').value = '';
            document.getElementById('result').value = '';
            document.getElementById('display').innerText = '';
            document.getElementById('year').value ="";
        }
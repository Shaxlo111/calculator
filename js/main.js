var amal='';
var qiymatA='';
var qiymatB='';

function hisob(x){
    document.getElementById('natija').value=x;
    console.log(x);
}
function tozalash(){
    document.getElementById('natija').value='';
}
function calk(j){
    switch (j){
        case '+': amal='+';
        break;
        case '-': amal='-';
        break;
        case '*': amal='*';
        break;
        default: amal='/';
    }
    qiymatA=document.getElementById('natija').value;
}
function teng(){
    qiymatB=document.getElementById('natija').value;
    var natija='';
    if (amal=='+'){
        natija=parseInt(qiymatA)+parseInt(qiymatB);
    }
    else if(amal=='-'){
        natija=parseInt(qiymatA)-parseInt(qiymatB);
    }
    else if(amal=='*'){
        natija=parseInt(qiymatA)*parseInt(qiymatB);
    }
    else {
        natija=parseInt(qiymatA)/parseInt(qiymatB);
    }
    document.getElementById('natija').value=natija;
}


var ism=[];
var fam=[];
var sharif=[];
function  qosh(){
    inputIsm=document.getElementById('ism').value;
    inputFam=document.getElementById('fam').value;
    inputShar=document.getElementById('shar').value;
    ism.push(inputIsm);
    sharif.push(inputShar);
    fam.push(inputFam);
    var chiz='';
    for (var i=0; i<ism.length; i++){
        if (ism[i]!='' && fam[i]!='' && sharif[i]!='')
        var tr='<tr>' +
            '<td>'+(i+1)+'</td>' +
            '<td>'+ism[i]+'</td>'+
            '<td>'+fam[i]+'</td>'+
            '<td>'+sharif[i]+'</td>' +
            '<tr>';
        chiz+=tr;
    }
    document.getElementById('tBody').innerHTML=chiz;
    document.getElementById('ism').value='';
    document.getElementById('fam').value='';
    document.getElementById('shar').value='';

}

function changeStyle(){
    var cssStyle=document.getElementById('Style').style.backgroundColor='yellow';
}
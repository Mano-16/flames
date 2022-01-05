document.querySelector(".btn").addEventListener("click",myFunc)
function myFunc(){
    var firs=document.getElementById("m").value;
    var las=document.getElementById("f").value;
    var first=firs.toLowerCase();
    var last=las.toLowerCase();
    tcount(first,last);
    result(firs,las);
    
}
function tcount(a,b){
    var c=a.length;
    var d=b.length;
    var t=a;
    var f=b;
    for(i=0;i<c;i++){
        f=f.replace(a[i],"");
    }
    for(j=0;j<d;j++){
        t=t.replace(b[j],"");
    }
    
    
    var value=t.length+f.length;
    calculateWhat(value); 
    
}
function calculateWhat(n){
    var lista="flames"
    if (n>0){
        while(lista.length>1){
            var c=n%(lista.length);
            item=c-1;
            if(item>=0){
                var left=lista.slice(0,item);
                var right=lista.slice(item+1);
                lista=right + left;
            }
            else{
                lista=lista.slice(0,lista.length-1);
            }
        
        }
    }
    final(lista)
}
function result(first,last){
    if(first.length>0 && last.length>0){
        document.querySelector(".result").innerHTML="The relationship between "+first+" and "+last+" will end in... "
    } 
}
function final(a){
    var timeo=setTimeout(fina,1000,a)
}
function fina(a){
    switch (a) {
        case "a":
            document.querySelector(".abc").innerHTML="AFFECTION🥰!";
            document.querySelector(".abc").style.color="#f39c12";
            break;
        case "l":
            document.querySelector(".abc").innerHTML="LOVE💕!";
            document.querySelector(".abc").style.color="red";
            break;
        case "f":
            document.querySelector(".abc").innerHTML="FRIENDS🤝!";
            document.querySelector(".abc").style.color="yellow";
            break;
        case "m":
            document.querySelector(".abc").innerHTML="MARRIAGE💍!";
            document.querySelector(".abc").style.color="green"
            break;
        case "e":
            document.querySelector(".abc").innerHTML="ENEMY👿!";
            document.querySelector(".abc").style.color="#9A0680";
            break;
        case "s":
            document.querySelector(".abc").innerHTML="SISTER💛!";
            document.querySelector(".abc").style.color="green"
            break;
        default:
            document.querySelector(".result").innerHTML="Enter the correct names please"
            document.querySelector(".abc").innerHTML="";
            break;
    }
    
}
function rest(){
    document.querySelector(".abc").innerHTML="";
    document.querySelector(".result").innerHTML="";
}
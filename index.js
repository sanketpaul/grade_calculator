let calculate=()=>{
    let s1=document.getElementById('s1').value
    let s2=document.getElementById('s2').value
    let s3=document.getElementById('s3').value
    let s4=document.getElementById('s4').value

    const sum=parseFloat(s1)+parseFloat(s2)+parseFloat(s3)+parseFloat(s4)
    console.log(sum)

    document.getElementById('demo1').innerHTML=`Your total marks is<b> ${sum}</b>`
    const parcentage=(sum/400)*100;
    document.getElementById('demo2').innerHTML=`Your overall parcentage is <b> ${parcentage}</b>`

    if(parcentage>=90 && parcentage<=100){
        document.getElementById('demo3').innerHTML=`Your Grade is <b>AA</b> 😍😍`
    }
    else if(parcentage>=80 && parcentage<90){
        document.getElementById('demo3').innerHTML=   `Your grade is <b>A+</b> 🥰🥰`
    }
    else if(parcentage>=50 && parcentage<80){
        document.getElementById('demo3').innerHTML=`Your grade is <b>A</b> 😊😊`
    }
    else if(parcentage>=30 && parcentage<50){
        document.getElementById('demo3').innerHTML=`Your grade is <b>B</b> 😐`
    }
    else{
        document.getElementById('demo3').innerHTML=` Please contact with your HOD `
    }

}

function thanksMessage(){
    document.getElementById("bill").style= "height: 600px";
    let x = document.getElementById("fname").value + " " + document.getElementById("lname").value;
    document.getElementById("demo0").innerText="Thank You...here is your order summary and bill:";
    document.getElementById("demo1").innerHTML="<h2>Thank you " + x + " for your order, we will deliver it shortly</h2>";
    document.getElementById("demo2").innerHTML="<h2>Here is your order summary:</h2>";
    const obj = {
        N: 50,
        DM: 60,
        P: 40,
        C: 150,
        PR: 120,
        V: 75,
        PT: 80,
        S: 60,
        I: 40,
        Ca: 200,
        Cu: 20
    };
    let noodles = document.getElementById("N").checked;
    let manturian = document.getElementById("DM").checked;
    let pakoda = document.getElementById("P").checked;
    let chicken = document.getElementById("C").checked;
    let paneer = document.getElementById("PR").checked;
    let veg = document.getElementById("V").checked;
    let punjabi = document.getElementById("PT").checked;
    let dosa = document.getElementById("S").checked;
    let ice = document.getElementById("I").checked;
    let cake = document.getElementById("Ca").checked;
    let curd = document.getElementById("Cu").checked;
    let noodles1 = document.getElementById("Ni").value;
    let manturian1 = document.getElementById("DMi").value;
    let pakoda1 = document.getElementById("Pi").value;
    let chicken1 = document.getElementById("Ci").value;
    let paneer1 = document.getElementById("PRi").value;
    let veg1 = document.getElementById("Vi").value;
    let punjabi1 = document.getElementById("PTi").value;
    let dosa1 = document.getElementById("Si").value;
    let ice1 = document.getElementById("Ii").value;
    let cake1 = document.getElementById("Cai").value;
    let curd1 = document.getElementById("Cui").value;
    var order = `<table border=1 width = 100% style="border: 2px solid black; color: black; font-size: 20px; text-align: center;">
                <tr>
                    <th width = 50%>Item</th>
                    <th width = 25%>Quantity</th>
                    <th width = 25%>Price per 1 nos.</th>
                </tr>`;
    var amount = 0;
    if(noodles == true){
        order += `<tr>
                    <td>Noodles</td>
                    <td> ${noodles1}</td>
                    <td> ${obj[document.getElementById("N").value]}</td>
                    </tr>`;
        amount += Number(noodles1) * obj[document.getElementById("N").value];
    }
    if(manturian == true){
        order += `<tr>
                    <td>Manturian</td>
                    <td> ${manturian1}</td>
                    <td> ${obj[document.getElementById("DM").value]}</td>
                    </tr>`;
        amount += Number(manturian1) * obj[document.getElementById("DM").value];
    }   
    if(pakoda == true){
        order += `<tr>
                    <td>Pakoda</td>
                    <td> ${pakoda1}</td>
                    <td> ${obj[document.getElementById("P").value]}</td>
                    </tr>`;
        amount += Number(pakoda1) * obj[document.getElementById("P").value];
    }
    if(chicken == true){
        order += `<tr>
                    <td>Chicken Tadaka with rice</td>
                    <td> ${chicken1}</td>
                    <td> ${obj[document.getElementById("C").value]}</td>
                    </tr>`;
        amount += Number(chicken1) * obj[document.getElementById("C").value];
    }
    if(paneer == true){
        order += `<tr>
                    <td>Paneer Butter masala and Nan (4 Qty.)</td>
                    <td> ${paneer1}</td>
                    <td> ${obj[document.getElementById("PR").value]}</td>
                    </tr>`;
        amount += Number(paneer1) * obj[document.getElementById("PR").value];
    }
    if(veg == true){
        order += `<tr>
                    <td>Veg Thali</td>
                    <td> ${veg1}</td>
                    <td> ${obj[document.getElementById("V").value]}</td>
                    </tr>`;
        amount += Number(veg1) * obj[document.getElementById("V").value];
    }
    if(punjabi == true){
        order += `<tr>
                    <td>Punjabi Thali</td>
                    <td> ${punjabi1}</td>
                    <td> ${obj[document.getElementById("PT").value]}</td>
                    </tr>`;
        amount += Number(punjabi1) * obj[document.getElementById("PT").value];
    }
    if(dosa == true){
        order += `<tr>
                    <td>Rawa Dosa</td>
                    <td> ${dosa1}</td>
                    <td> ${obj[document.getElementById("S").value]}</td>
                    </tr>`;
        amount += Number(dosa1) * obj[document.getElementById("S").value];
    }
    if(ice == true){
        order += `<tr>
                    <td>Ice Cream</td>
                    <td> ${ice1}</td>
                    <td> ${obj[document.getElementById("I").value]}</td>
                    </tr>`;
        amount += Number(ice1) * obj[document.getElementById("I").value];
    }
    if(cake == true){
        order += `<tr>
                    <td>Chocolate Cake</td>
                    <td> ${cake1}</td>
                    <td> ${obj[document.getElementById("Ca").value]}</td>
                    </tr>`;
        amount += Number(cake1) * obj[document.getElementById("Ca").value];
    }
    if(curd == true){
        order += `<tr>
                    <td>Curd with Sugar</td>
                    <td> ${curd1}</td>
                    <td> ${obj[document.getElementById("Cu").value]}</td>
                    </tr>`;
        amount += Number(curd1) * obj[document.getElementById("Cu").value];
    }
    order += `</table>`;
    document.getElementById("demo3").innerHTML=order;
    document.getElementById("demo4").innerHTML=`<h2>Total amount to be paid is: ${amount}</h2>`;
    return false;
}
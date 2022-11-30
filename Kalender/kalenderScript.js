var date = new Date();

const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
var monthDisplay = month[date.getMonth()]
var yearDisplay = date.getFullYear()

function Bookings() {

    document.getElementsByClassName("bookings")[0].innerHTML = "";

    for (let num = 1; num <= Number(localStorage.getItem("num"));num++) {
        
        let bookDate = new Date(localStorage.getItem(`Date${num}`))
        let msg = `Namn: ${localStorage.getItem(`namn${num}`)}\nEfternamn: ${localStorage.getItem(`efternamn${num}`)}\nTelefonnummer: ${localStorage.getItem(`telefonnummer${num}`)}\nE-postaddress: ${localStorage.getItem(`e-postadress${num}`)}\nBokade timmar: ${localStorage.getItem(`timmar${num}`)}\nDatum: ${parseInt(localStorage.getItem(`DateNumber${num}`)) + 1}-${month[bookDate.getMonth()]}-${bookDate.getFullYear()}\n\n`
        let li = document.createElement("li")
        let a = document.createElement("a")
        li.classList.add("bookings")
        a.setAttribute("href","#")
        a.setAttribute("onclick",`RemoveBooking(${num})`)
        a.innerText = "❌"
        document.getElementsByClassName("bookings")[0].appendChild(li)
        li.innerText = msg
        li.appendChild(a)

        if (localStorage.getItem(`Date${num}`) == new Date(date.getFullYear(), date.getMonth())) {

        document.getElementsByClassName("date")[localStorage.getItem(`DateNumber${num}`)].classList.add("active")
        document.getElementsByClassName("date")[localStorage.getItem(`DateNumber${num}`)].style.pointerEvents = "none"
        }
    }
}

function AddBookings(number) 
{

    if (confirm(`Vill du boka den ${number + 1} ${monthDisplay} ${yearDisplay}?`) === true) 
    {
        var form = window.open("form.html","", "width=700, height=600")
        //test.onbeforeunload = WindowClose();
        var timer = setInterval(function() { if(form.closed) { clearInterval(timer); WindowClose(); } }, 1000);
    }

    function WindowClose() 
    {

        if (localStorage.getItem("closeCheck") == "true") {

        localStorage.setItem("closeCheck",false)
        localStorage.setItem(`Date${localStorage.getItem("num")}`,new Date(date.getFullYear(), date.getMonth()))
        localStorage.setItem(`DateNumber${localStorage.getItem("num")}`,number)
      
        Bookings()
        }

    }

}

function GetDateAndTime(button="")
{
    if (button === "+") 
    {
       if (month[date.getMonth] === month[month.length - 1]) 
       {
            date.setFullYear(date.getFullYear() + 1)
            date.setMonth(0)
            
       }
       else 
       {
            date.setMonth(date.getMonth() + 1) 
       }
       
       RemoveATags()
       AddATags()

    }
    else if (button === "-") 
    {
        if (month[date.getMonth] === month[0]) 
       {
            date.setFullYear(date.getFullYear() - 1)
            date.setMonth(month.length - 1)
            
       }
       else 
       {
            date.setMonth(date.getMonth() - 1) 
       }
       
       RemoveATags()
       AddATags()
    }
    else if (button === "r") 
    {
        date = new Date()
        RemoveATags()
        AddATags()
    }   
    
    monthDisplay = month[date.getMonth()]
    yearDisplay = date.getFullYear()
    AddWeekdays()
    Bookings()

    document.getElementsByClassName("month")[0].children[0].children[2].innerHTML = `${monthDisplay}<br><span style="font-size:18px">${yearDisplay}</span>`
}


function AddATags()
{
    for ( var x = 0; (new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()) > x ;x++) 
    {
        var aTag = document.createElement("a")
        aTag.classList.add("date")
        document.getElementsByClassName("days")[0].children[x].appendChild(aTag)
    }

    for (var y = 0; document.getElementsByClassName("date").length > y; y++)
    {
        document.getElementsByClassName("date")[y].innerText = y + 1 
        document.getElementsByClassName("date")[y].setAttribute("href","#")
        document.getElementsByClassName("date")[y].setAttribute("onclick",`AddBookings(${y})`)
        
    }
}


function RemoveATags() 
{
    while (document.getElementsByClassName("date").length > 0) 
    {
        document.getElementsByClassName("date")[0].remove()
    }
}

function AddWeekdays() 
{
    //hej.slice(3).concat(hej.reverse().slice(4).reverse())

    while(document.getElementsByClassName("weekdays")[0].children.length > 0) 
    {
        document.getElementsByClassName("weekdays")[0].children[0].remove()
    }

    weekdays = ["Su","Mo","Tu","We","Th","Fr","Sa"]

    firstWeekday = new Date(date.getFullYear(),date.getMonth(),1).getDay()

    fixWeekdays = weekdays.slice(firstWeekday).concat(weekdays.reverse().slice(7 - firstWeekday).reverse());
    weekdays.reverse();

    for (x = 0; x < weekdays.length;x++) 
    {
        let li = document.createElement("li")
        document.getElementsByClassName("weekdays")[0].appendChild(li)
        document.getElementsByClassName("weekdays")[0].appendChild(document.createTextNode("\n"))
        li.innerText = fixWeekdays[x]
    }

}

function RemoveBooking(funcNum) 
{

    if(confirm("Är du säker på att du vill ta bort den här bokningen?")) 
    {

    document.getElementsByClassName("bookings").item("").children[funcNum - 1].remove()


    for (x = funcNum; x <= localStorage.getItem("num"); x++) 
    {
        localStorage.setItem(`Date${x}`,localStorage.getItem(`Date${x + 1}`))
        localStorage.setItem(`DateNumber${x}`,localStorage.getItem(`DateNumber${x + 1}`))
        localStorage.setItem(`e-postadress${x}`,localStorage.getItem(`e-postadress${x + 1}`))
        localStorage.setItem(`efternamn${x}`,localStorage.getItem(`efternamn${x + 1}`))
        localStorage.setItem(`namn${x}`,localStorage.getItem(`namn${x + 1}`))
        localStorage.setItem(`telefonnummer${x}`,localStorage.getItem(`telefonnummer${x + 1}`))
        localStorage.setItem(`timmar${x}`,localStorage.getItem(`timmar${x + 1}`))
    } 
    
    localStorage.setItem("num",(parseInt(localStorage.getItem("num")) - 1))

    
RemoveATags()
AddATags()
Bookings()
}

}
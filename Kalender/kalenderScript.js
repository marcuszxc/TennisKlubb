var date = new Date();

const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
var monthDisplay = month[date.getMonth()]
var yearDisplay = date.getFullYear()

function Test() {
    for (let num = 1; num <= Number(localStorage.getItem("num"));num++) {
        
        let msg = `${localStorage.getItem(`namn${num}`)} ${localStorage.getItem(`efternamn${num}`)} ${localStorage.getItem(`telefonnummer${num}`)} ${localStorage.getItem(`e-postadress${num}`)} ${localStorage.getItem(`timmar${num}`)}`
        document.getElementsByClassName("Bokningar")[0].appendChild(document.createElement("li"))
        document.getElementsByClassName("Bokningar")[0].children[document.getElementsByClassName("Bokningar")[0].children.length - 1].innerText = msg
    }
}

function AddBoking(number) 
{

    if (confirm(`Vill du boka den ${number + 1} ${monthDisplay} ${yearDisplay}?`) === true) 
    {
        var test = window.open("form.html","", "width=700, height=600")
        //test.onbeforeunload = WindowClose();
        var timer = setInterval(function() { if(test.closed) { clearInterval(timer); WindowClose(); } }, 1000);
    }

    function WindowClose() 
    {

        let num = localStorage.getItem("num")

        var msg = `${localStorage.getItem(`namn${num}`)} ${localStorage.getItem(`efternamn${num}`)} ${localStorage.getItem(`telefonnummer${num}`)} ${localStorage.getItem(`e-postadress${num}`)} ${localStorage.getItem(`timmar${num}`)}`

        document.getElementsByClassName("Bokningar")[0].appendChild(document.createElement("li"))
        document.getElementsByClassName("Bokningar")[0].children[document.getElementsByClassName("Bokningar")[0].children.length - 1].innerText = msg
        //document.getElementsByClassName("Bokningar")[0].children[document.getElementsByClassName("Bokningar")[0].children.length - 1].innerText = `${number + 1} ${monthDisplay} ${yearDisplay}`
        document.getElementsByClassName("date")[number].classList.add("active")
        document.getElementsByClassName("date")[number].style.pointerEvents = "none"
        
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
        document.getElementsByClassName("date")[y].setAttribute("onclick",`AddBoking(${y})`)
        
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
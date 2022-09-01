let hr = 0
let min = 0
let sec = 0
let count = 0
let timer = false

const start = () =>{
    timer = true
    stopWatch()
}
const stop = () =>{
    timer = false
}
const reset= () =>{
    timer = false
    hr = 0
    min = 0
    sec = 0
    count = 0
    document.getElementById('hr').innerText = "00"
    document.getElementById('min').innerText = "00"
    document.getElementById('sec').innerText = "00"
    document.getElementById('count').innerText = "00"
}

const stopWatch = () =>{
    if(timer == true){
        count += 1
        if(count == 100){
            sec += 1
            count = 0
        }
        if(sec == 60){
            min += 1
            sec = 0
        }
        if(min == 60){
            hr += 1
            min = 0
            sec = 0
        }

        let hrString = hr
        let minString = min
        let secString = sec
        let countString = count
        if(hr<10){
            hrString = "0" + hrString
        }
        if(min<10){
            minString = "0" + minString
        }
        if(sec<10){
            secString = "0" + secString
        }
        if(count<10){
            countString = "0" + countString
        }
        document.getElementById('hr').innerText = hrString
        document.getElementById('min').innerText = minString
        document.getElementById('sec').innerText = secString
        document.getElementById('count').innerText = countString
        setTimeout(stopWatch,10)
    }
}
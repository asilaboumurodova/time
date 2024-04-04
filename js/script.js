
const h = document.querySelector('.h'),
    m = document.querySelector('.m'),
    s = document.querySelector('.s'),
    numMinutes = document.querySelector('.minutes'),
    numHours = document.querySelector('.hours');

function clock() {
    let seconds = new Date().getSeconds(),
        minutes = new Date().getMinutes(),
        hours = new Date().getHours();
    s.style.transform = `rotate(${ seconds * 6 }deg)`
    m.style.transform = `rotate(${ minutes * 6 }deg)`
    h.style.transform = `rotate(${ hours * 30 }deg)`
    minutes < 10 ? numMinutes.innerHTML = "0" + minutes : numMinutes.innerHTML = minutes
    hours < 10 ? numHours.innerHtml = "0" + hours : numHours.innerHTML = hours
    setTimeout(function () {
        clock()
    }, 1000);
}
clock()

const tabsLink = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < tabsLink.length; i++) {
    const element = tabsLink[i];
    element.addEventListener('click', function () {
        for (let j = 0; j < tabsLink.length; j++) {
            const el = tabsLink[j];
            tabsContentItem[j].classList.remove('active')
            el.classList.remove('active')
        }
        tabsContentItem[i].classList.add('active')
        this.classList.add('active')
    })
}

const stopwatchBtn = document.querySelector('.stopwatch__btn'),
    stopwatchHours = document.querySelector('.stopwatch__hours'),
    stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
    stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
    tabsLinkSpan = document.querySelector('.tabsLink__span');

function stopWatch(btn, i) {
    if (btn.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            stopwatchSeconds.innerHTML = i
            if (stopwatchMinutes.innerHTML == 59) {
                stopwatchMinutes.innerHTML = 0
                stopwatchHours.innerHTML++
            } else {
                stopwatchMinutes.innerHTML++
            }
        } else {
            i++
            stopwatchSeconds.innerHTML = i
        }
        setTimeout(() => stopWatch(btn, i), 1000);
    }
}

stopwatchBtn.addEventListener('click', function () {
    if (this.innerHTML === 'start') {
        this.innerHTML = 'stop'
        tabsLinkSpan.classList.add('active')
        let i = 0
        setTimeout(() => stopWatch(this, i), 1000)
    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear'
        tabsLinkSpan.classList.remove('active')
        tabsLinkSpan.classList.add('active_clear')
    } else {
        this.innerHTML = 'start'
        tabsLinkSpan.classList.remove('active_clear')
        stopwatchSeconds.innerHTML = 0
        stopwatchMinutes.innerHTML = 0
        stopwatchHours.innerHTML = 0
        i = 0
    }
})
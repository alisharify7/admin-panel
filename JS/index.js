
// set date in header
let date_now = new Date()
let dt = gregorian_to_jalali(date_now.getFullYear(), date_now.getMonth() + 1, date_now.getDate())
let day = new String(dt[2]).length >= 2 ? dt[2] : "0" + new String(dt[2])
let month = new String(dt[1]).length >= 2 ? dt[1] : "0" + new String(dt[1])
document.querySelector(".persian-date-now").value =`${new String(dt[0])}-${new String(month)}-${new String(day)}`


// set time in header
window.setInterval(
  (e)=>{
    let time_now = new Date()
    let time = `${time_now.getHours()}:${time_now.getSeconds()}`
    document.querySelector(".persian-time-now").textContent=time
  }, 1000
)



// side menu navbar


let btn_close_menu = document.querySelector('.btn-close-menu')
// side bar menu 
btn_close_menu.addEventListener("click", (e)=>{
  btn_close_menu.classList.toggle("closed")
  if(btn_close_menu.children[0].className == "bi bi-arrow-right")
  {
    btn_close_menu.children[0].className = "bi bi-arrow-left"
  }
  else{
    btn_close_menu.children[0].className = "bi bi-arrow-right"
  }
  document.querySelector(".menu-container").classList.toggle("close")
  // document.querySelector(".menu-bottons-aside").classList.add("d-none")
  document.querySelectorAll(".hidden-btn-menu").forEach(each=>{
    each.classList.toggle("d-none")
  })
  document.querySelector(".navak-menu-icon").classList.toggle("d-none")
  document.querySelector(".navak-asie-header-img").classList.toggle("d-none")
  document.querySelector(".left-column").classList.toggle("open")
  document.querySelector(".left-column").classList.toggle("col-md-8")
  document.querySelector(".left-column").classList.toggle("col-lg-10")
})



// in mobile size aside nav menu closed automaticlly
window.addEventListener("DOMContentLoaded", (e)=>{

  window.addEventListener("resize", (e)=>{
    if(window.innerWidth <= 1163){
    if(!document.querySelector(".btn-close-menu").classList.contains("closed"))
    {document.querySelector(".btn-close-menu").click()}
  }
  if(window.innerWidth >= 1163){
    // if size is ok automaticlly open size navbar
    if(document.querySelector(".btn-close-menu").classList.contains("closed"))
    { document.querySelector(".btn-close-menu").click()  }
  }
  })

if(window.innerWidth <= 1163){
    if(!document.querySelector(".btn-close-menu").classList.contains("closed"))
    {
      document.querySelector(".btn-close-menu").click()
    }
}
if(window.innerWidth >= 1163){
// if size is ok automaticlly open size navbar
    if(document.querySelector(".btn-close-menu").classList.contains("closed"))
    {
      document.querySelector(".btn-close-menu").click()
    }
}

})



// charts
let done_projects = document.querySelector("#done-projects-container")
let wait_projects = document.querySelector("#wait-projects-container")
let doing_projects = document.querySelector("#doing-projects-container")

let chart = new Chart(done_projects, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 8, 3, 11, 20, 50],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

let chart_wait = new Chart(wait_projects, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [65, 31, 85, 34, 15, 4],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
        scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

let chart_doing = new Chart(doing_projects, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



// let filter_btn = document.querySelectorAll('.filter-btn');
// let tab_items = document.querySelectorAll('.tab-item');

// for (let i = 0; i < filter_btn.length; i++) {
//     filter_btn[i].addEventListener('click', function () {
//         for (let j = 0; j < filter_btn.length; j++) {
//             filter_btn[j].classList.remove('active');
//         }
//         let select_tab = filter_btn[i].getAttribute('data-tab');
//         filter_btn[i].classList.add('active');
//         for (let t = 0; t < tab_items.length; t++) {
//             document.querySelector('.tab-filter-item-container').style.height =
//                 tab_items[t].scrollHeight + 'px';
//             if (tab_items[t].classList.contains(select_tab)) {
//                 tab_items[t].classList.add('select_tab');
//             } else {
//                 tab_items[t].classList.remove('select_tab');
//             }
//         }
//     });
// }

// for (let th = 0; th < tab_items.length; th++) {
//     document.querySelector('.tab-filter-item-container').style.height =
//         tab_items[th].scrollHeight + 'px';
// }


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  var slider = document.getElementById("myRange");
var output = document.getElementById("Range");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}


var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});


// Select search
$(document).ready(function(e){
	$('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('#search_param').val(param);
	});
});

/*look for any elements with the class "custom-selects":*/
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-selects");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// Sản phẩm bán chạy
$('#carouselrightsell').owlCarousel({
	loop:true,
	margin:0,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:false,
	dots: true,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:false
		},
		600:{
			items:2,
			nav:false
		},
		1000:{
			items:3,
			nav:false,
		},
	}
});


// Flash Deals
$('#flash_deals').owlCarousel({
	loop:true,
	margin:0,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
	dots: false,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:3,
			nav:true
		},
		1000:{
			items:4,
			nav:true,
		},
	}
});

// Ngành Hàng Quan Tâm
$('#carouselmall').owlCarousel({
	loop:true,
	margin:0,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:false,
	dots: false,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:3,
			nav:true
		},
		1000:{
			items:4,
			nav:true,
		},
	}
});

// Nhà Thầu Thi Công 
$('#carouselproperty').owlCarousel({
	loop:true,
	margin:0,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:false,
	dots: false,
	responsiveClass:true,
	responsive:{
		0:{
			items:2,
			nav:true
		},
		600:{
			items:4,
			nav:true
		},
		1000:{
			items:6,
			nav:true,
		},
	}
});

// Tư vấn thiết kế
$('#carouseluser').owlCarousel({
	loop:true,
	margin:0,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:false,
	dots: false,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:2,
			nav:true
		},
		1000:{
			items:3,
			nav:true,
		},
	}
});
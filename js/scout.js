let mainListLi = document.querySelectorAll(".header .links ul.mainlist  li");
let mainListUl = document.querySelector(".header .links ul.mainlist");
let dropdownul1 = document.querySelector(".header .links ul.mainlist .dropdownul1");
let dropdownul2 = document.querySelector(".header .links ul.mainlist .dropdownul2");

mainListLi.forEach(function (ele) {
    ele.onmouseover = function () {
        if (ele.classList.contains("has-children")) {
            ele.children[1].classList.remove("hide");
        }
    }
})

mainListUl.onmouseleave = function () {
    dropdownul2.classList.add("hide");
}

dropdownul2.onmouseleave = function () {
    dropdownul1.classList.add("hide");
    dropdownul2.classList.add("hide");
}
dropdownul1.onmouseleave = function () {
    dropdownul1.classList.add("hide");
    dropdownul2.classList.add("hide");
}
// -------------------Mobile Menu Links----------------------------------
let dDown1 = document.querySelector(".header .mobile-menu .menu-body .mainlist .has-children .dropdownul1");
let dDown2 = document.querySelector(".header .mobile-menu .menu-body .mainlist .has-children .dropdownul2");
let menu1 = document.querySelector(".header .mobile-menu .menu-body .mainlist .has-children.menu1");
let menu2 = document.querySelector(".header .mobile-menu .menu-body .mainlist .has-children.menu2");
let angleDown1 = document.querySelector(".header .mobile-menu .menu-body .mainlist .has-children.menu1 .angle-down1");
let angleDown2 = document.querySelector(".header .mobile-menu .menu-body .mainlist .has-children.menu2 .angle-down2");
let mobileMenu = document.querySelector(".header .mobile-menu");
let closex = document.querySelector(".header .mobile-menu .menu-head .closex");

menu1.onclick = function (event) {
    event.stopPropagation()
    if (angleDown1.classList.contains("fa-angle-down")) {
        dDown1.style.display = "block";
        angleDown1.classList.remove("fa-angle-down");
        angleDown1.classList.add("fa-angle-up");
    } else {
        dDown1.style.display = "none";
        angleDown1.classList.remove("fa-angle-up");
        angleDown1.classList.add("fa-angle-down");
    }
}
menu2.onclick = function (event) {
    event.stopPropagation()
    if (angleDown2.classList.contains("fa-angle-down")) {
        dDown2.style.display = "block";
        angleDown2.classList.remove("fa-angle-down");
        angleDown2.classList.add("fa-angle-up");
    } else {
        dDown2.style.display = "none";
        angleDown2.classList.remove("fa-angle-up");
        angleDown2.classList.add("fa-angle-down");
    }
}
closex.onclick = function () {
    mobileMenu.style.display = "none";
    menubar.classList.remove("transformed");
    page.classList.toggle("toplayer");
}

// --------------------Menu bars-----------------------------------------
let menubar = document.querySelector(".header .menu-bar");
let mainlist = document.querySelector(".header .links .mainlist");
let page = document.querySelector(".page");

menubar.addEventListener("click", function () {
    this.classList.toggle("transformed");
    mobileMenu.style.display = "block";
    page.classList.toggle("toplayer");
    

    // if (!menubar.classList.contains("transformed")) {
    //     mainlist.style.display = "none";
    //     mobileMenu.style.display = "none";
    // } 
});




// ----------------------------Counter Section---------------------------
let nums = document.querySelectorAll(".photo .counterdiv .counter .number");
let counterSection = document.querySelector(".photo");
let started = false // Function started ? No

// window.onscroll = function () {
    //     if (window.scrollY >= counterSection.offsetTop) {
        //         if (!started) {
            //             nums.forEach((num) => startCount(num));
            //         }
            //         started = true;
            //     }
            // }
            
nums.forEach((num) => startCount(num));

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 4000/goal);
};
// ----------------------------How to Section---------------------------

let howtoLi = document.querySelectorAll(".whyus .content .howto ul li");

// howtoLi.forEach(function (ele) {
//     ele.onclick = function () {
//         removeChildrenClass("fa-angle-down", howtoLi, 0);
//         addChildrenClass("fa-angle-right", howtoLi, 0);
//         removeChildrenClass("show", howtoLi, 1);
//         removeClass("clicked", howtoLi);
//         ele.children[0].classList.remove("fa-angle-right");
//         ele.children[0].classList.add("fa-angle-down");
//         ele.children[1].classList.add("show");
//         ele.classList.add("clicked");
//     }
// })

howtoLi.forEach(function (ele) {
    ele.onclick = function () {

        if (ele.children[1].classList.contains("show")) {
            removeChildrenClass("fa-angle-down", howtoLi, 0);
            addChildrenClass("fa-angle-right", howtoLi, 0);
            removeChildrenClass("show", howtoLi, 1);
            removeClass("clicked", howtoLi);
            ele.children[0].classList.add("fa-angle-right");
            ele.children[0].classList.remove("fa-angle-down");
            ele.children[1].classList.remove("show");
            ele.classList.remove("clicked");  
        } else {
            removeChildrenClass("fa-angle-down", howtoLi, 0);
            addChildrenClass("fa-angle-right", howtoLi, 0);
            removeChildrenClass("show", howtoLi, 1);
            removeClass("clicked", howtoLi);
            ele.children[0].classList.remove("fa-angle-right");
            ele.children[0].classList.add("fa-angle-down");
            ele.children[1].classList.add("show");
            ele.classList.add("clicked"); 
        }
    }
})

// ----------------------------whyus Slider Sub-Section---------------------------
let slidImags = document.querySelectorAll(".whyus .content .slider .images img");
let slidBullets = document.querySelectorAll(".whyus .content .slider .bullets ul li");

slidBullets.forEach(function (ele) {
    ele.onclick = function () {
        imgLoop (this.dataset.imgslider);
        removeClass("active", slidBullets);
        ele.classList.add("active");
    }
})

function imgLoop (datasetparm) {
    slidImags.forEach(function (im) {
        if (im.dataset.imgslider == datasetparm) {
            removeClass("active", slidImags);
            im.classList.add("active");
        }
    })
}
// ----------------------------testimonial Slider Sub-Section---------------------------
let clients = document.querySelectorAll(".testimonial .clients .client");
let testimonialBullets = document.querySelectorAll(".testimonial .bullets ul li");

testimonialBullets.forEach(function (ele) {
    ele.onclick = function () {
        secLoop (clients, ele.dataset.clientlider);
        removeClass("active", testimonialBullets);
        ele.classList.add("active");
    }
})

function secLoop (secList, datasetparm) {
    secList.forEach(function (item) {
        if (item.dataset.clientlider == datasetparm) {
            removeClass("active", secList);
            item.classList.add("active");
        }
    })
}




// -------------Functions--------------------------

function removeClass (className, listItems) {
    listItems.forEach(function (item) {
        item.classList.remove(className);
    });
};
function removeChildrenClass (className, listItems, childnum) {
    listItems.forEach(function (item) {
        item.children[childnum].classList.remove(className);
    });
};
function addChildrenClass (className, listItems, childnum) {
    listItems.forEach(function (item) {
        item.children[childnum].classList.add(className);
    });
};
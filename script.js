

$(document).ready(function(){
    $('#carouselExampleControls').carousel({ interval: 2000 }); // Thay đổi số 2000 thành số milliseconds mong muốn
  });
  

function openContactForm() {
    document.getElementById('contactForm').style.display = 'block';
}

function closeContactForm() {
    document.getElementById('contactForm').style.display = 'none';
}

function toggleContactMenu() {
    const contactMenu = document.getElementById('contactMenu');
    if (contactMenu.style.display === 'block') {
        contactMenu.style.display = 'none';
    } else {
        contactMenu.style.display = 'block';
    }
}
function toggleContactMenu() {
    // Code xử lý khi click vào nút
}

$(document).ready(function(){
    $('#carouselExampleControls').carousel({
        interval: 3000
    });
});


function expandButton() {
    document.querySelector('.floating-btn').style.width = '300px';
    document.querySelector('.btn-text').style.display = 'inline';
}

function shrinkButton() {
    document.querySelector('.floating-btn').style.width = '50px';
    document.querySelector('.btn-text').style.display = 'none';
}

function toggleContactMenu() {
    const contactMenu = document.getElementById('contactMenu');
    if (contactMenu.style.display === 'none' || contactMenu.style.display === '') {
        contactMenu.style.display = 'block';
    } else {
        contactMenu.style.display = 'none';
    }
}
// Trong phần JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện click trên nút Menu
    document.getElementById('toggleNav').addEventListener('click', function() {
        // Lấy phần navigation menu
        var navMenu = document.querySelector('.nav-menu');
        // Kiểm tra xem menu có class active không
        var isActive = navMenu.classList.contains('active');
        // Nếu có, loại bỏ class active để ẩn menu
        // Nếu không, thêm class active để hiển thị menu
        if (isActive) {
            navMenu.classList.remove('active');
        } else {
            navMenu.classList.add('active');
        }
    });
});






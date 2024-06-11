document.addEventListener('DOMContentLoaded', function() {
    const properties = [
        {
            image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/441711482_1487771845499866_7109495502870926921_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFFPJ6QBNeDUUBOSlLDV1tBDqRCTYc4D_AOpEJNhzgP8ADscm6EEY5-yZcCR_cgLl00WQChiG0Qd_dfLSfEwwjK&_nc_ohc=eAKONHripM4Q7kNvgE56TyL&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYApRkcNF-NANATsHAvf1v-Xzq6n1I_-xjN2OFkKLGEpVg&oe=666DCA65',
            title: '💎 Căn hộ thông minh cao cấp tại trung tâm Cần Thơ 💎',
            description: '✅Đầy đủ tiện ích: Hồ bơi, gym, yoga, khu nướng BBQ, khu vui chơi trẻ em;...✅Căn 3 PN diện tích 85,85 m2 ✅View triệu đô sông hậu, cầu Cần Thơ, trung tâm quận Ninh Kiều✅Tặng gói nội thất lên đến 75.000.000 cho khách hàng nhanh tay đặt chỗ✅Hệ thống SMART HOME hiện đại siêu tiện lợi và tiết kiệm thời gian☎️ Liên hệ: 0379.874.867 gặp em Thuỵ Đẹp để tham quan nhà mẫu🥰',
            price: '⚜️⚜️Chỉ cần 630 triệu (thanh toán 15%)'
        },
        {   
            image: 'https://via.placeholder.com/300x200',
            title: 'Căn Hộ Hiện Đại',
            description: 'Một căn hộ hiện đại ở trung tâm thành phố với tầm nhìn tuyệt đẹp.',
            price: '$300,000'
        },
        {
            image: 'https://via.placeholder.com/300x200',
            title: 'Nhà Nghỉ Dễ Thương',
            description: 'Một nhà nghỉ dễ thương ở nông thôn, hoàn hảo cho kỳ nghỉ yên tĩnh.',
            price: '$200,000'
        }
    ];

    const propertyList = document.getElementById('property-list');

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'col-md-4 property-card';

        propertyCard.innerHTML = `
            <div class="card">
                <img src="${property.image}" class="card-img-top" alt="${property.title}">
                <div class="card-body property-details">
                    <h5 class="card-title">${property.title}</h5>
                    <p class="card-text">${property.description}</p>
                    <p class="property-price">${property.price}</p>
                </div>
            </div>
        `;

        propertyList.appendChild(propertyCard);
    });
});

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






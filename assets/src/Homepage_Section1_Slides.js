let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.nav-dot');

// hàm show currentSlide
function showSlide(index) {
    // nếu slide hiện tại là 3 chẳng hạn, thì slide 3 chính là display: block, còn 1,2,4 là none (dấu ảnh)
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        // Loại bỏ class 'active' khỏi tất cả các slide để ẩn chúng
        slide.classList.remove('active');
        // Nếu là slide hiện tại, thêm class 'active' để hiển thị
        if (i === index) {
            slide.classList.add('active');
        }
    });

    // update dots, khi một slide mới được hiển thị (chỉ số của slide là index), các chấm tròn sẽ được cập nhật để chỉ rõ slide hiện tại.
    dots.forEach((dot, i) => {
        dot.className = i === index ? 'nav-dot active' : 'nav-dot';
    });

    currentSlideIndex = index;
}

// hàm chuyển ảnh
function autoSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}
// set vòng lặp 3s
let slideInterval = setInterval(autoSlide, 3000);

// Thanh điều hướng các dots
function currentSlide(index) {
    // xóa lặp auto chuyển slides trước khi set vòng lặp mới
    clearInterval(slideInterval); 
    showSlide(index - 1);

    // restart lại vòng lặp
    slideInterval = setInterval(autoSlide, 3000); 
}
// bắt đầu show từ currentSlide
showSlide(currentSlideIndex);

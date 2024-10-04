// Gọi div chứa boxcontainer ra
let mouseSpace = document.getElementsByClassName('European-container__box')[0]; // Lấy phần tử đầu tiên trong danh sách
let box = document.querySelector('.box-container');

// Kiểm tra xem mouseSpace có tồn tại hay không
if (mouseSpace) {
    mouseSpace.addEventListener('mousemove', function (e) {
        let x = e.clientX / 10;
        box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
    });
}

var img = [];
for (var i = 0; i < 5; i++) {
    img[i] = new Image();
    img[i].src = "images/" + i + ".JPG";
    // thay đổi source của ảnh để đổi ảnh
}
var index = 0;
var anh = document.getElementById("anh");
// nút chuyển hình kế tiếp 
// thay đổi index khi nhấn
function next() {
    index++;
    if (index >= img.length) {
        index = 0;
    }
    anh.src = img[index].src;
}
function prev() {
    index--;
    if (index < 0) {
        index = img.length - 1;
    }
    anh.src = img[index].src;
}
// load hình tiếp theo sau 2s
function start() {
    t = window.setInterval(next, 2000)
}
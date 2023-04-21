function kiemtra() {
    // mã sv 
    var msv = document.getElementById("msv");
    if (msv.value.length == 0) {
        alert("Chưa nhập mã số sinh viên")
    }
    // TÊN
    var ten = document.getElementById("name");
    if (ten.value.length == 0) {
        alert("Chưa nhập tên!")
    }
    // email
    var email = document.getElementById("email");
    if (email.value == 0) {
        alert("Vui lòng nhập địa chỉ email"); 
    }
    // gender
    var gender = document.getElementsByName("gender");
    if (!gender[0].checked && !gender[1].checked)
    {
        alert("Vui lòng chọn giới tính");
    }

    // sở thích
    var hobbies = document.getElementsByName("checkbox");
    var count = 0;
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            count++;
        }
    }
    if (count < 1) {
        alert("Phải chọn ít nhất 1 sở thích");
    }
    // quốc tịch 
    var quoctich = document.getElementById("nationality");
    if (quoctich.value == 0)
    {
        alert("Vui lòng chọn quốc tịch ")
    }
}
function hienthi(check) {
    var other_hobbies = document.getElementById("other_hobbies");
    other_hobbies.style.display = check  ? "" : "none";
}
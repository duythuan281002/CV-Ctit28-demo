var menus = [
    {
        id: "gioithieu",
        title: "Giới thiệu"
    },
    {
        id: "kinhnghiem",
        title: "Kinh nghiệm"
    },
    {
        id: "giaoduc",
        title: "Giáo dục"
    },
    {
        id: "sothich",
        title: "Sở thích"
    },
];
    
var gioiThieu = [
    {
        title: "Giới thiệu",
        content: "Hiện tại tôi đang học năm 3 tại trường Đại học Sài gòn. " + 
        " Công việc của tôi cả về lập trình front-end lẫn back-end. Mong muốn được làm việc  "+
        "trong môi trường chuyên nghiệp, đồng nghiệp thân thiện và chế độ phúc lợi tốt."
    },
];

var arrKinhNghiem = [
    {
        title: "Kì 2 - năm 2 (2023)",
        name: "Lập trình Java",
        language: "Java",
        topic: "Quản lý nhân sự",
        content: "Làm đồ án project hướng đối tượng và kết hợp với giao diện Jrame",
        url: ""
    },
    {
        title: "Kì 2- năm 2 (2023)",
        name: "Lập trình Python",
        language: "Python",
        topic: "Game Break Out",
        content: "Xây dựng ứng dụng chơi game",
        url: ""
    },
    {
        title: "Kì 1 - năm 3 (2023)",
        name: "Công nghệ phần mềm",
        language: "Java",
        topic: "Quản lý quán Cafe Thun",
        content: "Phân tích cơ sở dữ liệu, vẽ sơ đồ và xây dựng phần mềm",
        url: ""
    },
    {
        title: "Kì 2 - năm 3 (2024)",
        name: "Phát triển phần mềm mã nguồn mở",
        language: "Python",
        topic: "Game 2 người",
        content: "Xây dựng ứng dụng chơi game 2 người chơi",
        url: ""
    },
];

var arrGiaoDuc = [
    {
        time: "2009 - 2014",
        name: "TH Lê Quý Đôn",
        content: "Lớp 1 - 5"
    },
    {
        time: "2014 - 2018",
        name: "THCS Đinh Tiên Hoàng",
        content: "Lớp 6 - 9"
    },
    {
        time: "2018 - 2021",
        name: "THPT Huỳnh Thúc Kháng",
        content: "Lớp 10 - 12"
    },
    {
        time: "2021 - 2026",
        name: "ĐH Sài Gòn",
        content: "Ngành : Công nghệ Thông tin"
    },
];

function showMenu() {
    html = ""
    for (var i = 0; i < menus.length; i++) {
        html += `<a href="#${menus[i].id}" class="top_menu_link">
            <li class="top_item">${menus[i].title}</li>
        </a>`;
    }
    document.querySelector('.top_menu').innerHTML = html
}

function showGioiThieu() {
    html = ""
    for (var i = 0; i < gioiThieu.length; i++) {
        html += `<div class="right_title">${gioiThieu[i].title}</div>
        <div class="right_text">${gioiThieu[i].content}</div>`;
    }
    document.getElementById('gioithieu').innerHTML = html
}

function showKinhNghiem() {
    html = ""
    for (var i = 0; i < arrKinhNghiem.length; i++) {
        html += `<li class="right_item">
        <div class="right_thgian">${arrKinhNghiem[i].title}</div>
        <div class="right_name">${arrKinhNghiem[i].name}</div>
        <div class="right_text">Sử dụng ngôn ngữ : ${arrKinhNghiem[i].language}</div>
        <div class="right_text">Đề tài : ${arrKinhNghiem[i].topic}</div>
        <div class="right_text">Công việc cụ thể : ${arrKinhNghiem[i].content}
        </div>
        <a href="${arrKinhNghiem[i].url}" class="right_btn1">
            <img src="./img/btnGitHub.svg" alt="">
        </a>
        </li>`;
    }
    document.getElementById('listKinhNghiem').innerHTML = html
}

function showGiaoDuc() {
    html = ""
    for (var i = 0; i < arrGiaoDuc.length; i++) {
        html += `<li class="right_item">
        <div class="right_thgian">${arrGiaoDuc[i].time}</div>
        <div class="right_name">${arrGiaoDuc[i].name}</div>
        <div class="right_text">${arrGiaoDuc[i].content}</div>
        </li>`;
    }
    document.getElementById('listGiaoDuc').innerHTML = html
}















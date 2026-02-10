// 좋아요 버튼
document.addEventListener("click", (e) => {
    if (e.target.closest(".like-btn")) {
        const btn = e.target.closest(".like-btn");
        btn.classList.toggle("active");

        let count = btn.querySelector("span");
        let num = parseInt(count.innerText);
        count.innerText = btn.classList.contains("active") ? num + 1 : num - 1;
    }

    // 카테고리 전환
    if (e.target.matches(".sidebar li")) {
        document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
        e.target.classList.add("active");
        alert(e.target.innerText + " 카테고리로 이동!");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        height: 320,
        selectable: true,
        locale: 'ko',
        dateClick: function(info) {
            alert("선택한 날짜: " + info.dateStr);
            // 👉 여기서 날씨 API 연결 가능
        }
    });

    calendar.render();
});


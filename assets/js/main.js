// File: assets/js/main.js

function filterProjects(category) {
  // 1. Lấy tất cả các Card dự án
  const projects = document.querySelectorAll(".project-item");

  // 2. Lấy tất cả các nút bấm
  const buttons = document.querySelectorAll(".filter-btn");

  // 3. Xử lý Logic ẩn/hiện Card
  projects.forEach((project) => {
    // Lấy category của card đó
    const projectCategory = project.getAttribute("data-category");

    if (category === "all" || projectCategory === category) {
      // Hiện card
      project.style.display = "block";
      // Thêm hiệu ứng fade-in nhẹ cho mượt
      project.style.animation = "fadeIn 0.5s ease";
    } else {
      // Ẩn card
      project.style.display = "none";
    }
  });

  // 4. Xử lý màu nút bấm (Đổi màu nút đang Active)
  buttons.forEach((btn) => {
    // Xóa style active cũ
    btn.classList.remove("bg-sky-500", "text-white", "shadow-sm");
    // Thêm style inactive
    btn.classList.add("text-slate-400", "hover:text-white");

    // Kiểm tra xem nút này có phải nút vừa bấm không
    // (So sánh sự kiện onclick có chứa category không)
    if (btn.getAttribute("onclick").includes(`'${category}'`)) {
      btn.classList.remove("text-slate-400", "hover:text-white");
      btn.classList.add("bg-sky-500", "text-white", "shadow-sm");
    }
  });
}

// Thêm animation CSS vào JS để đỡ phải sửa file CSS gốc
const style = document.createElement("style");
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

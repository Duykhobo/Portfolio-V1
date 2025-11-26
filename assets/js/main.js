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

function handleSendMessage(event) {
  // 1. Chặn hành vi load lại trang mặc định của Form
  event.preventDefault();

  // 2. Lấy các giá trị (Để sau này nếu muốn gửi thật thì dùng)
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // 3. Hiệu ứng Loading (Giả vờ đang gửi)
  const btn = document.getElementById("submitBtn");
  const originalContent = btn.innerHTML; // Lưu lại nội dung nút cũ

  // Đổi nút thành trạng thái đang gửi
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';
  btn.disabled = true; // Khóa nút lại không cho bấm liên tục
  btn.classList.add("opacity-70", "cursor-not-allowed");

  // 4. Giả lập độ trễ mạng (2 giây)
  setTimeout(() => {
    // Sau 2 giây thì báo thành công
    alert(`Thank you, ${name}! Your message has been sent successfully.\nI will contact you at ${email} soon.`);

    // 5. Reset Form về ban đầu
    document.getElementById("contactForm").reset();

    // 6. Trả nút bấm về trạng thái cũ
    btn.innerHTML = originalContent;
    btn.disabled = false;
    btn.classList.remove("opacity-70", "cursor-not-allowed");
  }, 2000); // 2000ms = 2 giây
}

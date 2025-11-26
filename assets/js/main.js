/* =========================================
   1. LOGIC TRANG PROJECTS (LỌC DỰ ÁN)
   ========================================= */
function filterProjects(category) {
  // Lấy tất cả các Card dự án
  const projects = document.querySelectorAll(".project-item");
  // Lấy tất cả các nút bấm
  const buttons = document.querySelectorAll(".filter-btn");

  // Xử lý ẩn/hiện Card
  projects.forEach((project) => {
    const projectCategory = project.getAttribute("data-category");
    if (category === "all" || projectCategory === category) {
      project.style.display = "block";
      project.style.animation = "fadeIn 0.5s ease";
    } else {
      project.style.display = "none";
    }
  });

  // Xử lý Active nút bấm
  buttons.forEach((btn) => {
    btn.classList.remove("bg-sky-500", "text-white", "shadow-sm");
    btn.classList.add("text-slate-400", "hover:text-white");

    // Check nếu nút này được bấm
    if (btn.getAttribute("onclick").includes(`'${category}'`)) {
      btn.classList.remove("text-slate-400", "hover:text-white");
      btn.classList.add("bg-sky-500", "text-white", "shadow-sm");
    }
  });
}

// Thêm animation CSS vào JS
const style = document.createElement("style");
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

/* =========================================
   2. LOGIC TRANG HOME (VẼ BIỂU ĐỒ)
   ========================================= */
document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra xem có cái khung biểu đồ không mới chạy (để tránh lỗi ở các trang khác)
  const chartElement = document.querySelector("#codingChart");

  if (chartElement) {
    var options = {
      series: [
        {
          name: "Hours",
          data: [4, 6, 8, 5, 10, 7, 9], // Dữ liệu giả lập
        },
      ],
      chart: {
        type: "area",
        height: 300,
        toolbar: { show: false },
        fontFamily: "inherit",
        background: "transparent",
      },
      colors: ["#38bdf8"], // Màu Sky Blue
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 90, 100],
        },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: { style: { colors: "#94a3b8" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: "#94a3b8" } },
      },
      grid: {
        borderColor: "#334155",
        strokeDashArray: 4,
      },
      theme: { mode: "dark" },
      tooltip: { theme: "dark" },
    };

    var chart = new ApexCharts(chartElement, options);
    chart.render();
  }
});

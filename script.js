document.addEventListener('DOMContentLoaded', () => {
    
    // --- ฟังก์ชัน 1: ตรวจสอบสถานะร้าน (Open/Closed) ---
    function updateShopStatus() {
        const statusElement = document.getElementById('shop-status');
        const dotElement = statusElement.querySelector('.dot');
        const textElement = statusElement.querySelector('.status-text');

        // เวลาปัจจุบัน
        const now = new Date();
        const currentHour = now.getHours();

        // กำหนดเวลาเปิด-ปิด (08:00 - 19:00)
        const openHour = 8;
        const closeHour = 19;

        // ตรวจสอบเงื่อนไข
        const isOpen = currentHour >= openHour && currentHour < closeHour;

        // ล้าง Class เดิม
        statusElement.classList.remove('loading', 'open', 'closed');

        if (isOpen) {
            statusElement.classList.add('open');
            textElement.textContent = "เปิดทำการ (Open Now)";
        } else {
            statusElement.classList.add('closed');
            textElement.textContent = "ปิดทำการ (Closed)";
        }
    }

    // เรียกทำงานครั้งแรกทันที
    updateShopStatus();

    // เช็คสถานะใหม่ทุกๆ 1 นาที (เผื่อคนเปิดหน้าเว็บค้างไว้)
    setInterval(updateShopStatus, 60000);


    // --- ฟังก์ชัน 2: Smooth Scroll (รองรับ Safari รุ่นเก่า) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
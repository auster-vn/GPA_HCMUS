## 📌 Mô tả bảng thống kê GPA  

Bảng hiển thị thông tin GPA của sinh viên trên hệ thống **HCMUS Portal** với thiết kế trực quan, dễ nhìn và hiện đại. Dữ liệu được lấy tự động từ trang **Tra cứu Kết quả học tập**, sau đó tính toán và hiển thị GPA dựa trên các tiêu chí sau:  

### 🏷 Cấu trúc bảng GPA  

| Tên mục                    | Giá trị hiển thị                                      |
|----------------------------|------------------------------------------------------|
| **GPA**                    | Điểm trung bình hệ **10** dựa trên số tín chỉ       |
| **Tín chỉ tích lũy**       | Tổng số tín chỉ đã học và được tính vào GPA        |
| **Số học phần tính trong GPA** | Tổng số môn học được tính vào GPA                |

### 🔹 Quy tắc tính GPA  
- **Chỉ tính các học phần có tín chỉ** (bỏ qua môn không có tín chỉ).  
- **Không tính các học phần không có điểm** hoặc **điểm dưới 5**.  
- **Không tính các môn không được đưa vào GPA** như **Giáo dục quốc phòng, Anh văn, Thể dục**,...  
- **Học lại sẽ thay thế điểm cũ**, chỉ tính điểm môn học lần cuối.   

---

## 🛠 Hướng dẫn thêm extension vào trình duyệt  
### Cài đặt như một Extension trên Chrome  
1. Tải mã nguồn extension về máy.  
2. Giải nén thư mục chứa mã nguồn.  
3. Mở **Chrome** và truy cập `chrome://extensions/`.  
4. Bật **Developer mode** (chế độ nhà phát triển).  
5. Nhấn **Load unpacked** (Tải tiện ích không nén) và chọn thư mục đã giải nén.  
6. Extension sẽ được thêm vào trình duyệt và có thể sử dụng ngay.  

---

### 📄 Nguồn tham khảo  
> 💜 **Code được lấy cảm hứng từ dự án:**  
> **GitHub:** [GPABookmarklet_Maintanence](https://github.com/DreamyWanderer/GPABookmarklet_Maintanence) 🚀  



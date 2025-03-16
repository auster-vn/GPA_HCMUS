##mm Mô tả bảng thống kê GPA  

Bảng hiển thị thông tin GPA của sinh viên trên hệ thống **HCMUS Portal** với thiết kế trực quan, dễ nhìn và hiện đại. Dữ liệu được lấy tự động từ trang **Tra cứu Kết quả học tập**, sau đó tính toán và hiển thị GPA dựa trên các tiêu chí sau:  

### 🏷 Cấu trúc bảng GPA  

| Tên mục                    | Giá trị hiển thị                                      |
|----------------------------|------------------------------------------------------|
| **GPA**                    | Điểm trung bình hệ **10** dựa trên số tín chỉ       |
| **GPA (hệ 4)**             | Điểm trung bình hệ **4** quy đổi từ điểm hệ **10**  |
| **Tín chỉ tích lũy**       | Tổng số tín chỉ đã học và được tính vào GPA        |
| **Số học phần tính trong GPA** | Tổng số môn học được tính vào GPA                |

### 🔹 Quy tắc tính GPA  
- **Chỉ tính các học phần có tín chỉ** (bỏ qua môn không có tín chỉ).  
- **Không tính các học phần không có điểm** hoặc **điểm dưới 5**.  
- **Không tính các môn không được đưa vào GPA** như **Giáo dục quốc phòng, Anh văn, Thể dục**,...  
- **Học lại sẽ thay thế điểm cũ**, chỉ tính điểm môn học lần cuối.  
- **Chuyển đổi sang hệ số 4** dựa trên thang điểm quy chuẩn.  

---

## 🛠 Hướng dẫn thêm extension vào trình duyệt  
### Cách 1: Thêm bằng DevTools (Dành cho người có kinh nghiệm)  
1. Mở trang **Tra cứu Kết quả học tập** trên trình duyệt.  
2. Nhấn **F12** để mở **DevTools**.  
3. Chuyển sang tab **Console**.  
4. Dán toàn bộ mã **JavaScript** vào và nhấn **Enter**.  
5. GPA sẽ hiển thị ngay trên trang.  

---

### 📄 Nguồn tham khảo  
> 💜 **Code được lấy cảm hứng từ dự án:**  
> **GitHub:** [GPABookmarklet_Maintanence](https://github.com/DreamyWanderer/GPABookmarklet_Maintanence) 🚀  



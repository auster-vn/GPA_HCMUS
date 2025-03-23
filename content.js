(async function gpaExtension() {
    const currentHref = window.location.href;
    const dkhpReg = /.portal([1-9]|)\.hcmus\.edu\.vn\/SinhVien\.aspx\?(.*)pid=211/;
    if (!currentHref.match(dkhpReg)) {
        alert("Vui lòng đi tới trang \"Tra cứu Kết quả học tập\" trước");
        return;
    }

    let data = [], exceptData = [], rows, tab;
    const supplementaryGrade = [
        { score: 9, letter: "A+", fourRounding: 4.0 },
        { score: 8, letter: "A.", fourRounding: 3.5 },
        { score: 7, letter: "B+", fourRounding: 3.0 },
        { score: 6, letter: "B.", fourRounding: 2.5 },
        { score: 5, letter: "C.", fourRounding: 2.0 },
        { score: 4, letter: "D+", fourRounding: 1.5 },
        { score: 3, letter: "D.", fourRounding: 1.0 },
        { score: 0, letter: "F.", fourRounding: 0.0 }
    ];
    const notInGPACourses = [
        "Anh văn", "Anh van", "Giáo dục quốc phòng", "Giao duc quoc phong",
        "Thể dục", "The duc", "Tin học cơ sở", "Tin hoc co so"
    ];

    function initUserCourseData() {
        tab = $("#tbDiemThiGK");
        if (!tab.length) {
            console.error("Không tìm thấy bảng điểm!");
            return;
        }
        rows = tab.find("tbody tr");
        rows.each(function(i) {
            const tds = $(this).find("td");
            let row = {
                id: i,
                semester: $(tds[0]).text().trim().normalize(),
                course: $(tds[1]).text().trim().normalize(),
                credit: parseInt($(tds[2]).text().trim().normalize()) || 0,
                score: parseFloat($(tds[5]).text().trim().normalize()) || 0,
                isAbsent: $(tds[5]).text().trim().normalize() === "Vắng",
                include: true,
                whyExclude: "",
                letter: "",
                fourRounding: 0
            };

            if (!row.credit) {
                row.include = false;
                row.whyExclude = "Học phần không tín chỉ";
            } else if (row.isAbsent || !row.score) {
                row.score = 0;
                row.include = false;
                row.whyExclude = "Chưa hoặc không có điểm";
            } else if (row.score < 5) {
                row.include = false;
                row.whyExclude = "Điểm nhỏ hơn 5, chưa qua môn";
            }

            for (let j = 0; j < notInGPACourses.length; j++) {
                if (row.course.includes(notInGPACourses[j])) {
                    row.include = false;
                    row.whyExclude = "Học phần không tính trong GPA";
                    break;
                }
            }

            for (let j = 0; j < data.length; j++) {
                if (data[j].course === row.course) {
                    data[j].include = false;
                    data[j].whyExclude = "Đã học lại";
                }
            }

            const lowerGrade = supplementaryGrade.find(g => row.score >= g.score);
            const upperGrade = supplementaryGrade.find(g => row.score < g.score);
            if (lowerGrade && upperGrade) {
                const ratio = (row.score - lowerGrade.score) / (upperGrade.score - lowerGrade.score);
                row.letter = lowerGrade.letter;
                row.fourRounding = toFixed(lowerGrade.fourRounding + ratio * (upperGrade.fourRounding - lowerGrade.fourRounding));
            } else if (row.score >= 10) {
                row.letter = "A+";
                row.fourRounding = 4.0;
            }

            data.push(row);
            if (!row.include) exceptData.push(row);
        });
    }

    function calculateAndDisplayGPA() {
        let totalCredits = 0, totalScores = 0, totalFourScores = 0;
        data.forEach(row => {
            if (row.include) {
                totalCredits += row.credit;
                totalScores += row.credit * row.score;
                totalFourScores += row.credit * row.fourRounding;
            }
        });

        const gpa = totalCredits ? totalScores / totalCredits : 0;
        const fourGPA = totalCredits ? totalFourScores / totalCredits : 0;
        const removedCoursesSize = data.filter(row => !row.include).length;

        $("#tbGPA").remove();
        const gpaTable = `
            <style>
                .gpa-container {
                    width: 60%;
                    margin: 20px auto;
                    padding: 15px;
                    border-radius: 12px;
                    background: #f5faff;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    font-family: Arial, sans-serif;
                }
                .gpa-container fieldset {
                    border: 2px solid #007BFF;
                    padding: 10px;
                    border-radius: 10px;
                }
                .gpa-container legend {
                    font-weight: bold;
                    font-size: 18px;
                    color: #007BFF;
                }
                .dkhp-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                .dkhp-table th, .dkhp-table td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: center;
                }
                .dkhp-table th {
                    background: #007BFF;
                    color: white;
                    font-weight: bold;
                }
                .dkhp-table tr:hover {
                    background: #e3f2fd;
                }
            </style>
            <div class="gpa-container">
                <fieldset id="tbGPA">
                    <legend>Thống kê GPA</legend>
                    <table class="dkhp-table">
                        <thead>
                            <tr><th>Tên mục</th><th>Giá trị</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>GPA</td><td>${toFixed(gpa)}</td></tr>
                            <tr><td>Tín chỉ tích lũy</td><td>${totalCredits}</td></tr>
                            <tr><td>Số học phần tính trong GPA</td><td>${data.length - removedCoursesSize} học phần</td></tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>`;
        $("body").prepend(gpaTable);
    }

    function toFixed(num) {
        return Math.round(num * 100) / 100;
    }

    initUserCourseData();
    calculateAndDisplayGPA();
})();


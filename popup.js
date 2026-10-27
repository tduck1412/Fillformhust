const QA_DATA = [
  // --- CÂU MỚI TỪ ẢNH ---
  { q: "Văn bản pháp lý của Chính phủ quy định về chính sách học phí, miễn giảm học phí áp dụng cho năm học 2026-2027 tại ĐHBK Hà Nội là văn bản nào?", a: "Nghị định 238/2025/NĐ-CP ngày 03/09/2025" },

  // --- 42 CÂU HỎI MỚI TRƯỚC ĐÓ ---
  { q: "Sau khi có quyết định công nhận tốt nghiệp, Nhà trường sẽ cấp bằng tốt nghiệp cho sinh viên trong thời hạn bao lâu?", a: "Trong vòng 30 ngày" },
  { q: "Sinh viên thuộc Nhóm 6 trong phân loại ngoại ngữ đầu vào sẽ nhận được quyền lợi gì?", a: "Được miễn học toàn bộ các học phần Tiếng Anh cơ sở (từ FL1131 đến FL1135)" },
  { q: "Sinh viên đã có quyết định buộc thôi học, nếu thi lại và trúng tuyển mới vào trường thì việc công nhận học phần cũ được xử lý ra sao?", a: "Phải học lại toàn bộ chương trình, ngoại trừ học phần Giáo dục quốc phòng - an ninh đã được cấp chứng chỉ" },
  { q: "Để đạt Học bổng KKHT loại Xuất sắc (loại A), sinh viên cần đạt tiêu chuẩn GPA và điểm rèn luyện (ĐRL) học kỳ tối thiểu là bao nhiêu?", a: "GPA ≥ 3,6 và ĐRL ≥ 90" },
  { q: "Chính sách hỗ trợ phần chênh lệch học phí cho sinh viên diện Chế độ chính sách (CĐCS) KHÔNG áp dụng cho khối chương trình nào?", a: "Chương trình thạc sĩ" },
  { q: "Học viên tốt nghiệp đại học ngành phù hợp khi theo học chương trình Thạc sĩ phải học bổ sung tối đa bao nhiêu tín chỉ?", a: "Học bổ sung tối đa 15 tín chỉ" },
  { q: "Nhà trường có công nhận chứng chỉ tiếng Anh thi theo hình thức trực tuyến tại nhà (ví dụ: TOEFL iBT Home Edition) không?", a: "Không công nhận các chứng chỉ tiếng Anh cấp trên cơ sở thi trực tuyến tại nhà" },
  { q: "Sinh viên nộp chậm học phí học kỳ hè quá thời hạn quy định sẽ bị xử lý như thế nào?", a: "Bị hủy kết quả đăng ký học phần trong học kỳ hè đó" },
  { q: "Sinh viên đoạt giải trong các cuộc thi chính thức cấp Quốc gia hoặc Quốc tế được cộng tối đa bao nhiêu điểm rèn luyện ở Mục 5.3?", a: "Cộng 10 điểm" },
  { q: "Trường hợp hai sinh viên có cùng điểm GPA ở cuối danh sách xét học bổng, tiêu chí ưu tiên nào được sử dụng để xếp hạng?", a: "Ưu tiên sinh viên có điểm rèn luyện cao hơn" },
  { q: "Việc xác nhận Giấy vay vốn ngân hàng cho sinh viên được Ban Công tác sinh viên trả kết quả tại địa điểm nào?", a: "Phòng 102 hoặc 103 - Nhà C1" },
  { q: "Kết quả rèn luyện học kỳ đạt từ 80 điểm đến 89 điểm được xếp loại gì?", a: "Loại Tốt" },
  { q: "Sinh viên được xét \"Miễn học\" học phần ngoại ngữ cơ bản sẽ được ghi ký hiệu điểm gì trên hệ thống?", a: "Điểm R" },
  { q: "Trụ sở làm việc của Tổ hỗ trợ triển khai hệ thống iCTSV đặt tại vị trí nào trong trường?", a: "Phòng 102 - Nhà D3-5" },
  { q: "Điều 22 Luật Giáo dục số 43/2019/QH14 nghiêm cấm các hành vi nào trong cơ sở giáo dục?", a: "Xúc phạm nhân phẩm nhà giáo/người học; Xuyên tạc nội dung giáo dục; Gian lận trong học tập/thi; Hút thuốc, uống rượu bia, gây rối trật tự" },
  { q: "Đối với Chương trình đào tạo Kỹ sư chuyên sâu Thiết kế vi mạch, mức học phí/1 TCHP được tính bằng mức học phí của chương trình cử nhân nào?", a: "Cử nhân Kỹ thuật Điện tử - Viễn thông" },
  { q: "Trong buổi bảo vệ Đồ án tốt nghiệp tại hội đồng, nếu có 1 thành viên hội đồng cho điểm dưới 5 thì điểm bảo vệ cuối kỳ của sinh viên được tính như thế nào?", a: "Bị tính là điểm liệt và chỉ được ghi tối đa là 4,9 điểm" },
  { q: "Sinh viên đã hết thời gian học tập tối đa theo quy định nhưng chưa tốt nghiệp do thiếu môn GDQP-AN hoặc GDTC được gia hạn hoàn thiện trong thời gian tối đa bao lâu?", a: "Trong thời hạn tối đa 03 năm kể từ khi hết thời hạn học tập" },
  { q: "Các học phần Tiếng Anh cơ sở (NNCB) có được tính điểm vào GPA và CPA toàn khóa không?", a: "Không tính vào GPA và CPA, chỉ ghi nhận điểm đạt (R) hoặc không đạt" },
  { q: "Quy tắc xếp bậc đối với chứng chỉ TOEIC 4 kỹ năng trong quy định công nhận ngoại ngữ K71 được tính dựa trên tiêu chí nào?", a: "Mức quy đổi được xác định theo kỹ năng có mức quy đổi thấp nhất trong bốn kỹ năng" },
  { q: "Khi tham gia các sự kiện, hội họp trong nhà trường, sinh viên phải có mặt trước giờ khai mạc ít nhất bao nhiêu phút?", a: "Trước 15 phút" },
  { q: "Không gian sinh hoạt chung dành cho sinh viên nội trú Ký túc xá nằm tại tầng mấy của tòa nhà B10?", a: "Tầng 5 - Tòa nhà B10" },
  { q: "Chuẩn ngoại ngữ đầu ra đối với Chương trình đào tạo Tiếng Hàn Khoa học và Công nghệ quy định ra sao?", a: "Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3" },
  { q: "Pháp lệnh của Ủy ban Thường vụ Quốc hội quy định ưu đãi người có công với cách mạng được áp dụng trong xét miễn giảm học phí là văn bản nào?", a: "Pháp lệnh số 02/2020/UBTVQH14 ngày 09/12/2020" },
  { q: "Sinh viên nghỉ học tạm thời do tai nạn hoặc điều trị bệnh dài ngày sẽ KHÔNG tính vào thời gian chậm tiến độ nếu tổng thời gian nghỉ không vượt quá bao nhiêu học kỳ?", a: "02 học kỳ chính" },
  { q: "Điều kiện học tập đối với sinh viên từ năm thứ hai trở đi để đăng ký Chương trình Vay vốn tín dụng ưu đãi STEM là gì?", a: "Kết quả học tập trung bình (GPA) năm học liền trước đạt loại Giỏi trở lên (từ 3,2 trở lên)" },
  { q: "Chứng chỉ IELTS Academic đạt từ 7.0 đến 8.0 được quy đổi tương đương với Bậc mấy theo Phụ lục II Quy định ngoại ngữ K71?", a: "Bậc 5" },
  { q: "Sinh viên học cùng lúc hai chương trình phải đăng ký học chương trình thứ hai muộn nhất trước thời điểm xét tốt nghiệp chương trình thứ nhất là bao lâu?", a: "Muộn nhất 02 năm trước thời điểm xét tốt nghiệp" },
  { q: "Sinh viên có quyền nộp đơn xin tự nguyện thôi học không và sau khi ra quyết định có được tiếp nhận trở lại không?", a: "Được xin thôi học nhưng không được tiếp nhận trở lại" },
  { q: "Học phí đối với các lớp Vừa làm vừa học (VLVH) có sĩ số từ 10 đến 14 sinh viên áp dụng hệ số nhân học phí là bao nhiêu?", a: "Hệ số 1,5" },
  { q: "Hồ sơ đăng ký xét Học bổng Trần Đại Nghĩa bắt buộc phải có giấy tờ xác nhận của cơ quan nào?", a: "Mẫu đơn đăng ký có xác nhận hoàn cảnh khó khăn của Ủy ban nhân dân địa phương nơi gia đình cư trú" },
  { q: "Theo quy tắc quy đổi, chứng chỉ APTIS ESOL trình độ A2 (chỉ thể hiện 1 mức năng lực) được xếp vào bậc cơ sở nào trong Bảng quy đổi?", a: "Bậc 2.1" },
  { q: "Sau khi bảo vệ thành công luận văn Thạc sĩ, học viên phải nộp quyển luận văn tốt nghiệp cho Thư viện Tạ Quang Bửu trong thời hạn bao nhiêu ngày?", a: "Trong thời hạn 20 ngày kể từ ngày bảo vệ thành công" },
  { q: "Sau thời gian nào hàng ngày, sinh viên không được tự ý tụ tập tại các khu vực công cộng thuộc khuôn viên Nhà trường nếu không được phép?", a: "Sau 22h00" },
  { q: "Địa chỉ văn phòng làm việc của Đoàn Thanh niên Đại học Bách khoa Hà Nội nằm tại phòng nào?", a: "Phòng 208 - Tòa nhà C2" },
  { q: "Đối với Chương trình đào tạo chuẩn có chuẩn đầu ra là tiếng Anh, yêu cầu trình độ tiếng Anh tối thiểu khi xét tốt nghiệp là gì?", a: "Có chứng chỉ tiếng Anh quy đổi tương đương từ Bậc 3 trở lên" },
  { q: "Học phí tại Đại học Bách khoa Hà Nội được tính dựa trên đơn vị đo lường nào?", a: "Số tín chỉ học phí (TCHP) của các học phần đăng ký" },
  { q: "Học phần \"Tiếng Pháp PFIEV 1\" (mã FL1801) có khối lượng thời lượng quy định là bao nhiêu?", a: "3(1-4-0-6)" },
  { q: "Tiêu chuẩn xét Học bổng KKHT loại Khá (loại C) yêu cầu mức GPA và ĐRL tối thiểu là bao nhiêu?", a: "GPA ≥ 2,5 và ĐRL ≥ 65" },
  { q: "Theo quy tắc quy đổi từ dải điểm thang 4 sang thang điểm 10 tương đương, điểm CPA từ 2,0 đến cận 2,5 tương ứng với dải điểm thang 10 nào?", a: "5,5 đến cận 7,0" },
  { q: "Mức Học bổng Chính phủ hỗ trợ hàng tháng cho Học viên Thạc sĩ ngành Vi mạch bán dẫn và các ngành Khoa học cơ bản là bao nhiêu?", a: "7.400.000 đồng / tháng" },
  { q: "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân thông thường (ngoài y tế và nghĩa vụ quân sự) cần đáp ứng điều kiện tối thiểu nào?", a: "Đã học ít nhất một học kỳ tại trường" },

  // --- CÁC CÂU GỐC TRƯỚC ĐÓ ---
  { q: "Điểm CPA từ 3,2 đến cận 3,6 khi quy đổi sang dải điểm thang 10 tương đương có kết quả là bao nhiêu?", a: "8,0 đến cận 9,0" },
  { q: "Vị trí của Tiệm giặt là công cộng thuộc Ký túc xá Bách khoa được đặt ở đâu?", a: "Nhà hồng xanh phía sau hội trường B6 (cạnh B7) - sát đường Trần Đại Nghĩa" },
  { q: "Sinh viên có hành vi vi phạm kỷ luật khi thi hộ hoặc nhờ thi hộ sẽ bị trừ bao nhiêu điểm rèn luyện?", a: "Trừ 20 điểm" },
  { q: "Tổ tư vấn tâm lý sinh viên (tiền thân của Tổ tư vấn và hỗ trợ sinh viên SSU) được thành lập vào ngày tháng năm nào?", a: "Ngày 26/03/2019" },
  { q: "Việc nộp chứng chỉ ngoại ngữ quốc tế để đề nghị quy đổi miễn học và công nhận chuẩn đầu ra được sinh viên thực hiện qua kênh nào?", a: "Đăng ký trực tuyến trên hệ thống quản lý đào tạo (eHUST/QLĐT) theo các đợt thông báo" },
  { q: "Mức giá trị của Học bổng KKHT loại Giỏi (loại B) được tính như thế nào?", a: "Bằng 1,2 lần mức học bổng loại Khá" },
  { q: "Quy đổi khối lượng học tập hệ đại học chính quy: 1 TCHT của học phần \"Thí nghiệm / Thực hành thông thường\" bằng bao nhiêu Tín chỉ học phí (TCHP)?", a: "1,5 TCHP" },
  { q: "Địa điểm tiếp nhận hồ sơ Chế độ chính sách và phát Giấy xác nhận ưu đãi giáo dục cho sinh viên là phòng nào?", a: "Phòng 101 - Nhà B8" },
  { q: "Khi đăng ký tốt nghiệp đại học, sinh viên được chọn số tín chỉ tích lũy so với yêu cầu của CTĐT như thế nào?", a: "Chỉ chọn đủ hoặc không nhiều hơn 3 tín chỉ so với yêu cầu của chương trình" },
  { q: "Hệ số học phí áp dụng đối với các lớp học lại tổ chức ngoài kế hoạch theo đề nghị của sinh viên có sĩ số dưới 10 sinh viên là bao nhiêu?", a: "Hệ số 2,0" },
  { q: "Điểm chữ \"W\" xuất hiện trong bảng điểm của sinh viên mang ý nghĩa gì?", a: "Điểm học phần sinh viên đã đăng ký rút thành công trong thời gian quy định" },
  { q: "Theo Quy chế đào tạo 2025, \"Lớp học phần rút gọn\" dành cho sinh viên học lại được mở khi đáp ứng những điều kiện nào?", a: "Học lại ít nhất 02 lần chưa đạt, điểm quá trình từ 2,0 trở lên, sinh viên từ năm thứ 3 trở lên" },
  { q: "Sinh viên đạt danh hiệu \"Sinh viên 5 tốt\" từ cấp Đại học trở lên được cộng bao nhiêu điểm rèn luyện?", a: "Cộng 4 điểm" },
  { q: "Nếu sinh viên nộp đơn đề nghị rút học phần trong khoảng 7 tuần đầu của học kỳ chính và được giải quyết, mức học phí phải đóng là bao nhiêu?", a: "Phải đóng 50% học phí của học phần đó" },
  { q: "Theo hướng dẫn Quản lý tài chính cá nhân trong Sổ tay sinh viên, tỷ lệ 20% thu nhập hàng tháng được khuyến dành cho mục đích nào?", a: "Dành cho tiết kiệm" },
  { q: "Sinh viên không thể dự thi cuối kỳ do bị ốm hoặc tai nạn có hồ sơ hợp lệ được hoãn thi (điểm I) và dự thi bù trong thời hạn tối đa bao lâu?", a: "Trong thời hạn 2 học kỳ chính tiếp theo" },
  { q: "Chứng chỉ tiếng Anh VSTEP trình độ B1 tương ứng với Bậc mấy trong Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam?", a: "Bậc 3" },
  { q: "Kết quả xét duyệt Học bổng KKHT được công bố chậm nhất vào tuần thứ mấy của học kỳ cấp học bổng?", a: "Chậm nhất vào tuần học thứ 10" },
  { q: "Sinh viên bị buộc thôi học do kết quả học tập yếu kém có quyền đề nghị chuyển sang hình thức đào tạo nào của Nhà trường?", a: "Chuyển sang hình thức Vừa làm vừa học (VLVH)" },
  { q: "Học bổng Chính phủ cấp cho người học được Nhà trường thực hiện chi trả theo định kỳ nào?", a: "Chi trả định kỳ theo từng tháng dựa trên số tháng thực học" },
  { q: "Học bổng Trần Đại Nghĩa là học bổng của ĐHBK Hà Nội dành cho đối tượng sinh viên nào?", a: "Sinh viên có hoàn cảnh kinh tế gia đình đặc biệt khó khăn, có ý chí vươn lên trong học tập" },
  { q: "Việc miễn giảm học phí cho sinh viên diện chế độ chính sách được thực hiện căn cứ theo văn bản quy định nào của Chính phủ?", a: "Nghị định 238/2025/NĐ-CP" },
  { q: "Theo Quy chế đào tạo 2025 (sửa đổi), điểm liệt đối với học phần đồ án tốt nghiệp/khóa luận tốt nghiệp cử nhân, đồ án tốt nghiệp kỹ sư là bao nhiêu?", a: "Dưới 5,0" },
  { q: "Sinh viên thuộc diện Cử tuyển nộp và nhận giấy xác nhận được hưởng học bổng chính sách tại đâu và vào thời gian nào?", a: "Tại Phòng 102 - Nhà C1 vào đầu các học kỳ" },
  { q: "Chuẩn ngoại ngữ đầu ra đối với CTĐT Tiếng Anh Khoa học Kỹ thuật và Công nghệ là gì?", a: "Ngoại ngữ 1 đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3" },
  { q: "Chứng chỉ tiếng Pháp TCF quy đổi tương đương Bậc 3 (B1) yêu cầu điểm số TCF nằm trong khoảng nào?", a: "300 - 399 điểm" },
  { q: "Sinh viên không đáp ứng điều kiện phân loại trình độ ngoại ngữ đầu vào sẽ được xếp học như thế nào?", a: "Được xếp học từ học phần đầu tiên của khối Ngoại ngữ cơ bản tương ứng" },
  { q: "Học phần \"FL1131 Tiếng Anh cơ sở 1\" có khối lượng thời lượng là bao nhiêu?", a: "3(3-0-0-6)" },
  { q: "Sinh viên được cấp Học bổng Chính phủ theo Nghị định 179 có được đồng thời hưởng thêm chính sách học bổng khác từ nguồn ngân sách nhà nước không?", a: "Không, chỉ được lựa chọn hưởng 01 chính sách học bổng từ nguồn ngân sách nhà nước" },
  { q: "Theo Thông tư số 40/2026/TT-BGDĐT được trích dẫn trong Sổ tay sinh viên, có bao nhiêu hình thức xử lý kỷ luật đối với sinh viên?", a: "04 hình thức (Khiển trách, Cảnh cáo, Đình chỉ học tập có thời hạn, Buộc thôi học)" },
  { q: "Mức điểm chữ \"P\" được áp dụng cho loại học phần nào trong chương trình đào tạo?", a: "Các học phần chỉ yêu cầu đạt, không tính vào điểm trung bình học tập" },
  { q: "Học phí học phần \"Giáo dục Quốc phòng - An ninh\" được tính toán dựa trên đơn vị nào?", a: "Tính theo số TCHP quy đổi của các học phần GDQP-AN" },
  { q: "Quy định về việc quản lý và sử dụng Thẻ sinh viên khi vào trường như thế nào?", a: "Phải đeo thẻ sinh viên; Tuyệt đối không cho người khác mượn hoặc mượn thẻ người khác; Không được cầm cố thẻ sinh viên" },
  { q: "Trường hợp ngoại lệ nào sinh viên đề nghị rút học phần mà KHÔNG phải đóng học phí?", a: "Đề nghị rút trong tuần đầu tiên của học kỳ thứ 2" },
  { q: "Chuẩn Ngoại ngữ 2 bắt buộc đối với sinh viên ngành Ngôn ngữ Anh hoặc Tiếng Anh KHKT&CN khi xét tốt nghiệp tối thiểu đạt Bậc mấy?", a: "Bậc 3" },
  { q: "Thời gian nghỉ học tạm thời tối đa cho phép đối với lý do cá nhân thông thường là bao nhiêu học kỳ chính?", a: "04 học kỳ chính (và được tính vào thời gian chậm tiến độ)" },
  { q: "Thời hạn Giám đốc Đại học ra quyết định công nhận tốt nghiệp và cấp bằng tốt nghiệp Thạc sĩ cho học viên đủ điều kiện là bao lâu?", a: "Trong thời hạn 02 tháng tính từ thời điểm đáp ứng đủ điều kiện" },
  { q: "Điều kiện về điểm CPA để sinh viên đại học đề nghị xét chuyển vào học Chương trình đào tạo Tài năng sau năm thứ hai là gì?", a: "CPA ≥ 3,2" },
  { q: "Bài thi kiểm tra trình độ tiếng Anh đầu vào (Placement Test) do ĐHBK Hà Nội tổ chức có giá trị sử dụng trong thời gian bao lâu?", a: "Chỉ có giá trị để phân loại trình độ đầu vào và xếp lớp học phần NNCB năm thứ nhất" },
  { q: "Chứng chỉ tiếng Trung HSK 6 kết hợp HSKK cao cấp tương ứng Bậc mấy trong Khung năng lực 6 bậc?", a: "Bậc 6" },
  { q: "Mức phí thực hiện lại 01 chuyên đề tiến sĩ đối với nghiên cứu sinh được quy định cụ thể là bao nhiêu?", a: "2.200.000 đồng / chuyên đề" },
  { q: "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi THPT yêu cầu điểm quy đổi thang 30 tối thiểu là bao nhiêu?", a: "Từ 24/30 trở lên" },
  { q: "Tân sinh viên đạt điểm bài kiểm tra HUST English Placement Test từ 475 đến dưới 545 điểm được xếp vào Nhóm trình độ nào?", a: "Nhóm 4" },
  { q: "Sinh viên thực hiện khai báo thông tin liên lạc và nơi cư trú đầy đủ theo yêu cầu của Đại học được cộng bao nhiêu điểm rèn luyện?", a: "Cộng 4 điểm" },
  { q: "Điều kiện bắt buộc kể từ học kỳ 3 trở đi đối với sinh viên chưa học hoặc chưa được miễn các học phần ngoại ngữ cơ bản (NNCB) để được đăng ký môn khác là gì?", a: "Bắt buộc phải đăng ký học song hành các học phần NNCB tương ứng ở mỗi kỳ" },
  { q: "Địa chỉ Văn phòng Tổ tư vấn và hỗ trợ sinh viên (SSU) chuyên tư vấn tâm lý và hỗ trợ học tập nằm tại phòng nào?", a: "Phòng 101 - Nhà C1" },
  { q: "Chứng chỉ tiếng Nhật JLPT trình độ N2 tương đương với Bậc mấy theo Khung 6 bậc?", a: "Bậc 4" },
  { q: "Sinh viên tham gia đầy đủ Tuần sinh hoạt công dân do Nhà trường tổ chức được cộng bao nhiêu điểm rèn luyện?", a: "Cộng 6 điểm" },
  { q: "Mức học phí áp dụng đối với sinh viên nước ngoài tự chi trả kinh phí học tập được tính bằng bao nhiêu lần so với quy định chuẩn?", a: "1,5 lần" },
  { q: "Quyết định ban hành Quy định về phân loại trình độ đầu vào và chuẩn ngoại ngữ K71 do lãnh đạo nào ký phê duyệt?", a: "Phó Giám đốc GS.TS. Vũ Văn Yêm" },
  { q: "Ứng dụng di động chính thức hỗ trợ sinh viên theo dõi Điểm rèn luyện, cập nhật minh chứng và đăng ký hoạt động ngoại khóa là gì?", a: "App iCTSV" },
  { q: "Ký hiệu \"ĐK\" trong bảng danh mục học phần tiếng Anh cơ bản có ý nghĩa gì?", a: "Sinh viên tự đăng ký học song hành với các học phần của CTĐT tại kỳ tương ứng nếu chưa học hoặc chưa được miễn" },
  { q: "Các phòng Học nhóm dành cho sinh viên tại Thư viện Tạ Quang Bửu nằm từ phòng 501 đến phòng 508 thuộc tầng mấy?", a: "Tầng 5 Thư viện Tạ Quang Bửu" },
  { q: "Đối với học phần từ 2 tín chỉ trở lên, nếu sinh viên bị điểm quá trình là điểm liệt (dưới 3,0 hoặc dưới 5,0 tùy môn) thì điểm kết thúc học phần được tính ra sao?", a: "Điểm học phần là điểm F" },
  { q: "Địa chỉ phòng Mượn giáo trình học tập tại Thư viện Tạ Quang Bửu là phòng nào?", a: "Phòng 111 Thư viện Tạ Quang Bửu" },
  { q: "Quy định về phương tiện giao thông di chuyển vào khuôn viên Trường Bách khoa như thế nào?", a: "Xe đạp, xe máy, ô tô phải giảm tốc độ, quan sát và gửi xe đúng nơi quy định; xe taxi KHÔNG được vào trường" },
  { q: "Nếu trung bình cộng điểm của người hướng dẫn và người phản biện đồ án tốt nghiệp cho dưới 5,0 thì sinh viên sẽ bị xử lý ra sao?", a: "Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng tính là 0 điểm" },
  { q: "Sinh viên đăng ký học vượt quá số tín chỉ chuẩn quy định trong một học kỳ có được giảm đơn giá TCHP không?", a: "Vẫn tính đúng đơn giá TCHP quy định của chương trình đào tạo" },
  { q: "Theo Quy chế đào tạo 2025, điều kiện trùng lặp nội dung chuyên môn tối thiểu giữa hai học phần để được xem là \"học phần tương đương\" là bao nhiêu?", a: "80%" },
  { q: "Chuẩn ngoại ngữ đầu ra xét tốt nghiệp đối với các chương trình chất lượng cao ELITECH giảng dạy bằng tiếng Pháp là gì?", a: "Chứng chỉ tiếng Pháp DELF B2 hoặc TCF tương đương" },
  { q: "Sinh viên đăng ký học lại học phần đã đạt điểm D để cải thiện điểm CPA có phải đóng học phí không?", a: "Phải đóng 100% học phí theo số TCHP đăng ký" },
  { q: "Chứng chỉ tiếng Hàn TOPIK 4 tương ứng với Bậc mấy trong Khung năng lực 6 bậc?", a: "Bậc 4" },
  { q: "Mức Học bổng Chính phủ hỗ trợ hàng tháng đối với Học viên Thạc sĩ thuộc Chương trình đào tạo tài năng là bao nhiêu?", a: "8.400.000 đồng / tháng" },
  { q: "Sinh viên là con đẻ của người hoạt động cách mạng trước ngày 01/01/1945 thuộc đối tượng hưởng chính sách học phí nào?", a: "Miễn 100% học phí" },
  { q: "Chứng chỉ Aptis ESOL (đủ 4 kỹ năng) đạt trình độ B2 được quy đổi tương đương Bậc mấy?", a: "Bậc 4" },
  { q: "Học phí các học phần thuộc hệ Vừa làm vừa học hoặc Sau đại học được thực hiện tại cơ sở liên kết ngoài Đại học được tính bằng bao nhiêu % so với chương trình chuẩn?", a: "Bằng 90% học phí chương trình chuẩn, cộng thêm kinh phí phối hợp đào tạo" },
  { q: "Cơ quan nào chịu trách nhiệm đánh giá khả năng và mức độ ứng dụng thực tế của đề tài ĐATN trong quy trình xét cấp Học bổng \"Gắn kết quê hương\"?", a: "Hội đồng chấm Đồ án tốt nghiệp" },
  { q: "Sinh viên mồ côi cả cha lẫn mẹ thuộc Nhóm 3 khi đăng ký Học bổng Trần Đại Nghĩa được hưởng mức học bổng là bao nhiêu?", a: "100% học phí của các học phần trong chương trình đào tạo tại học kỳ xét" },
  { q: "Sinh viên không hoàn thành chương trình đào tạo Thạc sĩ được quyền đề nghị cấp chứng nhận các học phần đã tích lũy trong thời hạn bao lâu?", a: "Trong thời hạn 5 năm kể từ ngày khóa học kết thúc" },
  { q: "Sinh viên thuộc Nhóm 3 trong đối tượng xét cấp Học bổng Trần Đại Nghĩa là ai?", a: "Sinh viên mồ côi cả cha và mẹ, không có nguồn nuôi dưỡng và không thuộc diện miễn 100% HP do quá 22 tuổi" },
  { q: "Sau khi kết quả đánh giá điểm rèn luyện dự kiến được công bố, sinh viên có thời gian tối thiểu bao nhiêu ngày làm việc để nộp kiến nghị nếu có thắc mắc?", a: "Kết quả dự kiến được công bố ít nhất 05 ngày làm việc trước khi chính thức công nhận để sinh viên kiến nghị" },
  { q: "Tiêu chuẩn về điểm rèn luyện (ĐRL) học kỳ tối thiểu để đạt Học bổng KKHT loại B (Giỏi) là bao nhiêu điểm?", a: "ĐRL ≥ 80 điểm" },
  { q: "Điểm thay đổi quan trọng về cấu trúc học kỳ chính trong năm học từ Quy chế 2023 sang Quy chế 2025 là gì?", a: "Bỏ chia đợt A và B, một năm học bao gồm hai học kỳ chính và một học kỳ hè" },
  { q: "Trường hợp nào sau đây KHÔNG thuộc diện xét cấp Học bổng Trần Đại Nghĩa?", a: "Sinh viên bị kỷ luật từ mức cảnh cáo trở lên hoặc đã nhận học bổng khác trên 10 triệu đồng" },
  { q: "Mức định mức cho vay tối đa theo Chương trình Vay vốn đối với sinh viên có hoàn cảnh khó khăn là bao nhiêu?", a: "4.000.000đ / sinh viên / tháng" },
  { q: "Sinh viên đang chịu hình thức kỷ luật nào tại thời điểm xét học bổng KKHT sẽ KHÔNG được xét cấp học bổng?", a: "Chịu hình thức kỷ luật từ mức Khiển trách trở lên" },
  { q: "Nếu sinh viên học một học phần tiếng Anh cơ sở nhưng không đạt điểm kết thúc (bị điểm F), sinh viên phải xử lý ra sao?", a: "Phải tự đăng ký học lại học phần đó ở các học kỳ tiếp theo" },
  { q: "Trong Bảng đánh giá điểm rèn luyện sinh viên, Tiêu chí 1 \"Chấp hành pháp luật và nội quy, quy chế của nhà trường\" có điểm cộng tối đa là bao nhiêu?", a: "Tối đa 30 điểm" },
  { q: "Sinh viên là con đẻ hoặc con nuôi hợp pháp của Người có công với cách mạng được hưởng mức hỗ trợ miễn giảm học phí là bao nhiêu?", a: "Miễn 100% học phí" },
  { q: "Mức điểm trung bình tích lũy (CPA) tối thiểu sinh viên cần đạt khi xét công nhận tốt nghiệp đại học là bao nhiêu?", a: "CPA ≥ 2,00" },
  { q: "Học phần \"FL1135 Tiếng Anh cơ sở 5\" có khối lượng thời lượng quy định là bao nhiêu?", a: "3(3-0-0-6)" },
  { q: "Chứng chỉ tiếng Anh quốc tế dùng để xét công nhận chuẩn đầu ra phải đảm bảo điều kiện thời hạn như thế nào?", a: "Cấp trong vòng 2 năm tính đến thời điểm xét chuẩn ngoại ngữ đầu ra và còn hiệu lực" },
  { q: "Hành vi nào sau đây bị NGHIÊM CẤM đối với sinh viên trong giờ học trên lớp?", a: "Tự ý ghi âm, ghi hình, chụp ảnh trong giờ học khi chưa được sự đồng ý của giáo viên" },
  { q: "Theo Bảng 2.1 Phụ lục II, chứng chỉ IELTS Academic đạt mức điểm 2.0 được quy đổi tương đương Bậc cơ sở nào?", a: "Không được quy đổi" },
  { q: "Trường hợp sinh viên có đơn xin nghỉ học tạm thời hoặc thôi học được chấp thuận trong 7 tuần đầu của học kỳ chính thì nghĩa vụ học phí là bao nhiêu?", a: "Phải đóng 50% học phí của học kỳ đó" },
  { q: "Cổng thông tin chính thức hỗ trợ hướng nghiệp, tìm kiếm việc làm thêm và thực tập dành cho sinh viên Bách khoa có tên là gì?", a: "Cổng thông tin HustWork (hustwork.hust.edu.vn)" },
  { q: "Sinh viên được phép đăng ký học chương trình đào tạo thứ hai (bằng kép) sớm nhất khi nào?", a: "Khi đã được xếp trình độ năm thứ hai của chương trình thứ nhất" },
  { q: "Trường hợp lớp học phần bị hủy do không đủ sĩ số tối thiểu theo quy định thì số tiền học phí sinh viên đã nộp xử lý ra sao?", a: "Được hoàn trả hoặc trừ vào nghĩa vụ học phí của học kỳ tiếp theo" },
  { q: "Yêu cầu về các kỹ năng đối với chứng chỉ tiếng Anh quốc tế được sử dụng để xét chuẩn ngoại ngữ đầu ra là gì?", a: "Phải đánh giá đầy đủ 4 kỹ năng (Nghe, Nói, Đọc, Viết) và còn hiệu lực trong vòng 2 năm" },
  { q: "Mức học phí đối với các học phần học ở học kỳ hè được tính như thế nào so với học kỳ chính?", a: "Bằng 1,0 lần mức học phí kỳ chính" },
  { q: "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân sẽ bị xét buộc thôi học nếu tổng thời gian nghỉ vượt quá bao nhiêu học kỳ chính?", a: "Nghỉ quá 04 học kỳ chính" },
  { q: "Chứng chỉ Cambridge English Qualifications trình độ B2 First (FCE) đạt từ 160-179 điểm được quy đổi sang Bậc mấy?", a: "Bậc 4" },
  { q: "Quy mô lớp học phần tối thiểu đối với chương trình đào tạo thạc sĩ theo Quy chế 2025 được điều chỉnh thành bao nhiêu học viên?", a: "5 học viên" },
  { q: "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi Đánh giá tư duy (TSA) cần đạt điểm xét tuyển tối thiểu là bao nhiêu?", a: "Từ 60,00/100 trở lên" },
  { q: "Sinh viên là người dân tộc thiểu số rất ít người ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn được hưởng mức hỗ trợ học phí ra sao?", a: "Miễn 100% học phí" },
  { q: "Học phần \"FL1132 Tiếng Anh cơ sở 2\" có thời lượng và số tín chỉ quy định là bao nhiêu?", a: "3(3-0-0-6)" },
  { q: "Sinh viên có cha hoặc mẹ bị tai nạn lao động hưởng trợ cấp thường xuyên được hưởng mức giảm học phí là bao nhiêu?", a: "Giảm 50% học phí" },
  { q: "Sinh viên vi phạm quy chế thi từ mức cảnh cáo trở lên sẽ bị trừ bao nhiêu điểm rèn luyện (ĐRL)?", a: "Trừ 10 điểm" },
  { q: "Sinh viên nộp hồ sơ văn bản giấy đăng ký Học bổng Trần Đại Nghĩa tại đâu?", a: "Phòng C1 - 102 (gặp cô Nghiêm Thị Kim Chi)" },
  { q: "Quy định về chương trình ngoại ngữ cơ bản K71 KHÔNG áp dụng cho đối tượng sinh viên nào?", a: "Sinh viên ngành Ngôn ngữ Anh" },
  { q: "Sinh viên từ K67 đến K70 (Nhóm 2) đăng ký Học bổng Trần Đại Nghĩa cần đạt mức GPA học kỳ 2025.2 tối thiểu là bao nhiêu?", a: "GPA ≥ 2,0" },
  { q: "Sinh viên tự ý chuyển sang ngành học KHÔNG thuộc danh mục ưu tiên của Nghị định 179 sẽ bị xử lý ra sao?", a: "Không tiếp tục được hưởng học bổng và phải hoàn trả kinh phí đã nhận thông qua cơ sở đào tạo" },
  { q: "Đối với chương trình đào tạo Thạc sĩ, lớp học phần có quy mô dưới 5 học viên được xem xét tổ chức dưới hình thức nào?", a: "Mở lớp dưới hình thức đồ án, khóa luận hoặc tiểu luận chuyên đề thay thế giờ lên lớp" },
  { q: "Địa điểm làm thủ tục và nhận Giấy xác nhận ưu đãi giáo dục đào tạo cho sinh viên diện Chế độ chính sách là phòng nào?", a: "Phòng 102 - Nhà C1" },
  { q: "Kênh thanh toán học phí trực tuyến chính thức và an toàn dành cho sinh viên ĐHBK Hà Nội là gì?", a: "Nộp trên Cổng thông tin sinh viên ctt.hust.edu.vn / app eHUST qua tài khoản ngân hàng liên kết" },
  { q: "Khối lượng học tập tối đa được xem xét công nhận và chuyển đổi tín chỉ từ một cơ sở đào tạo khác không được vượt quá bao nhiêu % khối lượng toàn khóa?", a: "Không vượt quá 50%" },
  { q: "Học viên cao học nghỉ học tạm thời vì lý do cá nhân thông thường được phép nghỉ thời gian tối đa là bao nhiêu?", a: "Tối đa 12 tháng (và được tính vào thời gian học tập)" },
  { q: "Sinh viên K71 đăng ký học các lớp tiếng Anh tăng cường/dịch vụ ngoài giờ có phải nộp học phí không?", a: "Phải nộp học phí theo quy định đối với lớp học phần dịch vụ/tăng cường" },
  { q: "Quy định về \"Học phần song hành\" áp dụng cho hai học phần A và B được hiểu như thế nào?", a: "Sinh viên phải theo học học phần A trước hoặc học đồng thời với học phần B" },
  { q: "Mức học phí áp dụng cho các lớp học phần tổ chức theo yêu cầu riêng của 01 sinh viên (lớp đặc biệt) do cấp nào quyết định?", a: "Giám đốc Đại học Bách khoa Hà Nội quyết định" },
  { q: "Sinh viên đang học cùng lúc hai chương trình đào tạo sẽ bị dừng học chương trình thứ hai khi nào?", a: "Khi bị cảnh báo học tập ở chương trình thứ nhất" },
  { q: "Chứng chỉ tiếng Trung HSK 4 kết hợp HSKK trung cấp được Phụ lục VIII xếp vào Bậc mấy theo Khung 6 bậc?", a: "Bậc 3" },
  { q: "Quy mô sức chứa tổng cộng của Ký túc xá Bách khoa hiện nay là bao nhiêu chỗ ở?", a: "4.500 chỗ ở (gồm 8 tòa nhà 4-5 tầng)" },
  { q: "Học phí của các lớp \"Học phần rút gọn\" (cho sinh viên học lại) được tính bằng bao nhiêu so với lớp bình thường?", a: "Bằng 50%" },
  { q: "Trọng số của điểm thi cuối kỳ đối với học phần từ 2 tín chỉ trở lên được quy định nằm trong khoảng nào?", a: "Từ 0,5 đến 0,8" },
  { q: "Giá trị của Học bổng KKHT loại Xuất sắc (loại A) bằng bao nhiêu lần so với loại Khá (loại C)?", a: "Bằng 1,5 lần" },
  { q: "Quy đổi 1 TCHT học phần \"Lý thuyết / Bài tập\" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?", a: "1,0 TCHP" },
  { q: "Theo Quy chế đào tạo, \"Học phần tiên quyết\" của một học phần B được hiểu như thế nào?", a: "Sinh viên phải học xong học phần A và đạt điểm đạt trở lên mới được đăng ký học học phần B" },
  { q: "Mức Học bổng Chính phủ (Nghị định 179/2026/NĐ-CP) hỗ trợ hàng tháng cho sinh viên ngành Kỹ thuật then chốt & Công nghệ chiến lược là bao nhiêu?", a: "5.500.000 đồng / tháng" },
  { q: "Mức điểm rèn luyện (ĐRL) học kỳ 2025.2 tối thiểu đối với sinh viên Nhóm 2 đăng ký Học bổng Trần Đại Nghĩa là bao nhiêu điểm?", a: "ĐRL ≥ 70 điểm" },
  { q: "Số điện thoại đường dây nóng (Hotline) chính thức của Tổ tư vấn và hỗ trợ sinh viên (SSU) là số nào?", a: "024 3869 2942" },
  { q: "Sinh viên có được tự ý hủy lớp học phần ngoại ngữ cơ bản đã đăng ký học song hành trong học kỳ không?", a: "Không được phép hủy, trừ trường hợp xin rút hoặc chủ động rút toàn bộ đăng ký học tập trong học kỳ" },
  { q: "Văn phòng làm việc của Hội sinh viên Đại học Bách khoa Hà Nội đặt tại vị trí nào?", a: "Phòng 106 - Nhà D4" },
  { q: "Kết quả bài thi kiểm tra tiếng Anh đầu khóa (HUST English Placement Test) đối với tân sinh viên K71 được sử dụng để làm gì?", a: "Phân loại trình độ đầu vào, xếp lớp và xét miễn các học phần ngoại ngữ cơ bản" },
  { q: "Văn phòng Quản lý Ký túc xá Bách khoa và Trung tâm Dịch vụ & Hỗ trợ Bách khoa nằm tại đâu?", a: "Tầng 1 - Nhà B9" },
  { q: "Theo Quy chế đào tạo 2025, điểm trung bình toàn khóa (CPA tốt nghiệp) cho chương trình Kỹ sư được tính như thế nào?", a: "Chỉ tính dựa trên các học phần thuộc chương trình đào tạo kỹ sư đăng ký tốt nghiệp" },
  { q: "Quỹ học bổng Khuyến khích học tập (KKHT) được trích từ nguồn nào và chiếm tỷ lệ bao nhiêu?", a: "Trích từ nguồn học phí, bằng 8% học phí của học kỳ lấy điểm xét cấp học bổng" },
  { q: "Ký hiệu điểm chữ \"X\" trong hệ thống quản lý học tập đại diện cho trạng thái nào?", a: "Điểm học phần chưa hoàn thiện do thiếu dữ liệu đánh giá" },
  { q: "Sinh viên có kết quả học tập và rèn luyện của học kỳ trước đó đạt mức Giỏi (GPA ≥ 3.2, ĐRL ≥ 80) được cộng bao nhiêu điểm rèn luyện?", a: "Cộng 4 điểm" },
  { q: "Trường hợp nào sau đây sinh viên KHÔNG được quyền đề nghị phúc tra hoặc khiếu nại điểm?", a: "Bài thi trắc nghiệm trên máy tính" },
  { q: "Điều kiện về ngoại ngữ để sinh viên chương trình Việt - Pháp PFIEV được đăng ký nhận Phụ lục văn bằng kỹ sư của phía Pháp là gì?", a: "Đạt tối thiểu DELF B1 và Chứng chỉ TOEIC quốc tế (Nghe & Đọc) đạt từ 600 điểm trở lên" },
  { q: "Theo Quy chế đào tạo 2025, sinh viên bị hạn chế khối lượng đăng ký học tập khi nào?", a: "Khi bị cảnh báo học tập mức 1" },
  { q: "Bảng quy đổi chứng chỉ ngoại ngữ ban hành kèm Quy định K71 có áp dụng cho sinh viên các khóa cũ (từ K70 trở về trước) không?", a: "Áp dụng cho toàn bộ sinh viên các khóa đối với chứng chỉ cấp từ ngày quy định có hiệu lực; nếu mức mới khác cũ thì áp dụng mức cao hơn" },
  { q: "Học viên thuộc chương trình tích hợp Cử nhân - Thạc sĩ được đăng ký học trước tối đa bao nhiêu tín chỉ thuộc CTĐT thạc sĩ khi còn ở giai đoạn cử nhân?", a: "Tối đa 15 tín chỉ" },
  { q: "Thời gian hưởng Học bổng Chính phủ tối đa cho người học thuộc chương trình đào tạo Cử nhân là bao nhiêu năm?", a: "Không quá 04 năm" },
  { q: "Quy đổi 1 TCHT học phần \"Thực tập tốt nghiệp\" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?", a: "2,5 TCHP" },
  { q: "Sinh viên có hành vi nộp chứng chỉ ngoại ngữ giả mạo để gian lận chuẩn đầu ra sẽ chịu mức xử lý kỷ luật nào?", a: "Bị đình chỉ học tập hoặc buộc thôi học tùy mức độ nghiêm trọng" },
  { q: "Sinh viên không nộp đủ học phí đúng thời hạn quy định sẽ bị xử lý như thế nào?", a: "Bị đình chỉ đăng ký học tập một học kỳ kế tiếp" },
  { q: "Mức điểm đạt đối với các học phần thuộc chương trình đào tạo cử nhân và kỹ sư (ngoại trừ học phần tốt nghiệp) là từ mức điểm chữ nào?", a: "Từ điểm D trở lên" },
  { q: "Thời gian điều chỉnh đăng ký học phần bổ sung vào các lớp học phần đã mở ở đầu học kỳ chính kéo dài trong bao lâu?", a: "Kéo dài trong 2 tuần đầu" },
  { q: "Mức học phí áp dụng đối với sinh viên quốc tế học các chương trình đào tạo bằng tiếng Anh được tính như thế nào?", a: "Bằng 1,5 lần mức học phí quy định tương ứng" },
  { q: "Khung điểm CPA quy đổi sang xếp loại học lực \"Giỏi\" theo Quy chế đào tạo là bao nhiêu?", a: "3,20 đến 3,59" },
  { q: "Thời gian Ban Công tác sinh viên thông báo công khai kế hoạch đăng ký xét Học bổng Trao đổi sinh viên tối thiểu là bao lâu để người học chuẩn bị?", a: "Tối thiểu 02 tuần" },
  { q: "Đối với sinh viên Nhóm 4 (gặp tai nạn, rủi ro đột xuất), Học bổng Trần Đại Nghĩa hỗ trợ các mức tiền mặt cố định là bao nhiêu?", a: "5 triệu đồng và 10 triệu đồng" },
  { q: "Mức học phí học lại học phần đối với Nghiên cứu sinh trình độ Tiến sĩ được quy định cụ thể là bao nhiêu?", a: "850.000 đồng / TCHP" },
  { q: "Chuẩn tiếng Anh đầu ra đối với sinh viên chương trình liên kết đào tạo với Đại học TROY (Hoa Kỳ) khi xét tốt nghiệp là gì?", a: "Chứng chỉ IELTS Academic 6.0 trở lên (hoặc TOEFL iBT tương đương)" },
  { q: "Mức học phí/1 TCHP của Chương trình đào tạo Kỹ sư chuyên sâu Trí tuệ nhân tạo tạo sinh (GenAI) được tính bằng mức học phí của chương trình cử nhân nào?", a: "Chương trình Khoa học dữ liệu và Trí tuệ nhân tạo (IT-E10)" },
  { q: "Thời gian hưởng Học bổng Chính phủ tối đa cho sinh viên thuộc chương trình đào tạo Kỹ sư (từ 150 tín chỉ trở lên) là bao nhiêu năm?", a: "Không quá 05 năm" },
  { q: "Sinh viên học cùng lúc hai chương trình đào tạo (bằng kép) cần lưu ý quy định gì về việc đăng ký tốt nghiệp?", a: "Bắt buộc phải đăng ký tốt nghiệp đồng thời trong cùng một đợt cho cả hai CTĐT" },
  { q: "Sinh viên được điều động vào lực lượng vũ trang nghỉ học tạm thời thì thời gian nghỉ được tính như thế nào?", a: "Không tính vào thời gian học chậm tiến độ" },
  { q: "Sinh viên phải đăng ký tối thiểu bao nhiêu tín chỉ trong học kỳ lấy điểm xét học bổng để không bị loại (trừ HK1 năm thứ nhất)?", a: "Tối thiểu 12 tín chỉ" },
  { q: "Sinh viên nghỉ học tạm thời phải nộp đơn đề nghị tiếp nhận trở lại học chậm nhất vào thời điểm nào?", a: "Chậm nhất 01 tuần trước khi bắt đầu học kỳ mới" },
  { q: "Số đợt xét tốt nghiệp đại học trong một năm theo Quy chế đào tạo 2025 được quy định là bao nhiêu đợt?", a: "5 đợt" },
  { q: "Khái niệm \"Học phần học trước\" khác với \"Học phần tiên quyết\" ở điểm cốt lõi nào?", a: "Sinh viên chỉ cần đăng ký và học xong học phần A (có thể chưa đạt) là đã đủ điều kiện học học phần B" },
  { q: "Mức điểm IELTS Academic đạt từ 8.5 đến 9.0 được Bảng 2.1 quy đổi tương đương Bậc mấy theo Khung 6 bậc?", a: "Bậc 6 (CEFR C2)" },
  { q: "Điều kiện học lực để sinh viên hết năm thứ nhất được xem xét chuyển sang học một chương trình đào tạo khác là gì?", a: "CPA ≥ 2,5 (từ loại khá trở lên) và không bị cảnh báo học tập" }
];

document.getElementById('fill-btn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    args: [QA_DATA],
    func: (qaList) => {
      function normalize(str) {
        if (!str) return "";
        return str
          .toLowerCase()
          .replace(/^(câu\s*\d+\s*[:.-]?\s*)/i, "")
          .replace(/^[a-d]\s*[.)\s:-]\s*/i, "")
          .replace(/\s*\*\s*$/, "")
          .replace(/[“”"']/g, "")
          .replace(/\s+/g, " ")
          .trim();
      }

      function similarity(s1, s2) {
        const a = normalize(s1);
        const b = normalize(s2);
        if (!a || !b) return 0;
        if (a === b) return 1;
        if (a.includes(b) || b.includes(a)) return 0.92;

        const wordsA = a.split(" ");
        const wordsB = new Set(b.split(" "));
        let match = 0;
        wordsA.forEach((w) => {
          if (wordsB.has(w)) match++;
        });
        return match / Math.max(wordsA.length, wordsB.size);
      }

      const items = document.querySelectorAll('div[data-automation-id="questionItem"]');
      
      if (items.length === 0) {
        return { filled: 0, total: 0, msg: "Không tìm thấy câu hỏi MS Forms!" };
      }

      let filledCount = 0;
      let totalQuestions = 0;

      items.forEach((block) => {
        totalQuestions++;
        const titleEl = block.querySelector('span[data-automation-id="questionTitle"], span.text-format-content, div[role="heading"]');
        const options = block.querySelectorAll('div[role="radio"], input[type="radio"]');

        if (!titleEl || options.length === 0) return;

        const qText = titleEl.innerText;
        let bestMatch = null;
        let highestScore = 0;

        for (const item of qaList) {
          const score = similarity(qText, item.q);
          if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
          }
        }

        if (bestMatch && highestScore >= 0.55) {
          let bestOpt = null;
          let bestOptScore = 0;

          options.forEach((opt) => {
            const label = opt.closest('label') || opt.parentElement;
            const optText = label ? label.innerText : (opt.getAttribute('aria-label') || "");
            
            const score = similarity(optText, bestMatch.a);
            if (score > bestOptScore) {
              bestOptScore = score;
              bestOpt = opt;
            }
          });

          if (bestOpt) {
            bestOpt.click();
            block.style.border = "2px solid #22c55e";
            block.style.borderRadius = "8px";
            filledCount++;
          }
        } else {
          block.style.border = "2px dashed #f97316";
          block.style.borderRadius = "8px";
        }
      });

      return { filled: filledCount, total: totalQuestions };
    }
  }, (results) => {
    if (results && results[0] && results[0].result) {
      const res = results[0].result;
      document.getElementById('status').innerText = res.msg || `Đã điền: ${res.filled}/${res.total} câu`;
    } else {
      document.getElementById('status').innerText = "Lỗi khi chạy trên trang này!";
    }
  });
});
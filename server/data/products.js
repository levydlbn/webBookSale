import bcrypt from 'bcryptjs'

const products = [{
        name: "Công thức Grit cho tình yêu",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9445_1.jpg",
        description: "Điều gì làm nên sự kiên trì và đam mê của các đội nhóm? Đó là câu hỏi khởi đầu cho cuộc trò chuyện giữa Gordon và Kathryn và cuốn sách tình yêu Relationship GRIT: A True Story With Lessons To Stay Together, Grow Together, And Thrive Together này. Kathryn Gordon cho rằng mọi chuyện đều nằm ở mối quan hệ, và tất cả những gì ta cần làm là xem xét mối quan hệ của mình, cách ta bên nhau qua bao năm tháng thăng trầm để hiểu được sự bền bỉ của một đội nhóm. Đội nhóm được tạo thành từ những con người, và mối quan hệ giữa họ sẽ xác định kiểu bền bỉ họ có với tư cách là một đội.",
        rating: 5,
        numReviews: 20,
        price: 50,
        countInStock: 40,
        type: {
            type: "Sách kỹ năng",
            category: "làm giàu"
        }

    },
    {
        name: "Combo Think and grow rich - 13 nguyên tắc nghĩ giàu, làm giàu (Tái bản) + Nghĩ giàu làm giàu 365 ngày + Những nguyên tắc thành công (Tái Bản)",
        image: "https://static-shop.waka.vn/resize/340x497x3/image/img.product/0/0/0/7/3793_1.jpg",
        description: "Bộ sách sẽ giúp bạn trở nên giàu có, làm giàu cho cuộc sống của bạn trên tất cả các phương diện của cuộc sống chứ không chỉ về tài chính và vật chất. Đồng thời, sẽ dạy bạn cách củng cố, tăng cường lòng tự tin, vượt qua những khó khăn thách thức thường ngày, sống với đam mê và mục tiêu của mình, nhận ra tất cả những khát vọng của bản thân.",
        rating: 5,
        numReviews: 20,
        price: 348000,
        countInStock: 40,
        type: {
            type: "Sách kỹ năng",
            category: "làm giàu"
        }

    },
    {
        name: "Trọn Bộ Napoelon Hill - Nghĩ giàu - Làm giàu: 5 nền tảng cho thành công + Nguyên tắc vàng của Napoleon + 17 nguyên tắc nghĩ giàu làm giàu + Tư duy tích cực để thành công",
        image: "https://static-shop.waka.vn/resize/340x497x3/image/img.product/0/0/0/7/3720_1.jpg",
        description: "Tác phẩm “5 nền tảng cho thành công” đã tập hợp các bản thảo phát thanh chưa từng được công bố do chính ông thực hiện. Đọc cuốn sách này, độc giả sẽ được trải nghiệm gần như nguyên văn những lời Napoleon đã chia sẻ trực tiếp với thính giả trên sóng radio - phương tiện truyền thông chân thực và phổ biến nhất bấy giờ. Nội dung chia sẻ nhấn mạnh vào “Big Five” - 5 nguyên tắc lớn trong số 17 nguyên tắc thành công Napoleon Hill đã đúc rút. Ông cũng không quên đưa ví dụ về cách mà các nguyên tắc này đã đưa các cá nhân, nổi tiếng có, bình dân có, đến điểm đích thành công. Napoleon kỳ vọng thính giả của mình vào thời điểm phát sóng, cũng như độc giả đọc sách ngày nay, có thể qua những gì ông chia sẻ mà khám phá ra “bí quyết tối quan trọng để đạt được thành tựu cá nhân.",
        rating: 5,
        numReviews: 20,
        price: 376000,
        countInStock: 40,
        type: {
            type: "Sách kỹ năng",
            category: "làm giàu"
        }

    }, {
        name: "Sói già phố Wall - Phần 2 tái bản",
        image: "https://static-shop.waka.vn/resize/340x497x5/image/img.product/0/0/0/1/681_1.jpg",
        description: "Được mọi người gọi với nhiều biệt danh, trong đó, cái tên Sói Già Phố Wall là hợp với Jordan hơn cả - một con sói tối thượng đội lốt cừu non. Ngoại hình và cách hành xử của anh ta trông giống như một đứa trẻ nhưng thực chất, anh ta đâu có trẻ con. Anh ta là một thằng đàn ông ba mươi mốt tuổi nhưng già đời như một lão sáu mươi, sống theo thang tuổi của loài chó - một năm bằng bảy năm tuổi người.Vừa tốt nghiệp đại học, bước vào khởi nghiệp, Jordan Belford đã gặp ngay thất bại đầu đời trên phố Wall, bởi anh ta mới chỉ là “cừu non” giữa bao “sói già” khác vây quanh. Chàng trai có cặp mắt xanh, cái miệng dẻo quẹo, cao chỉ tầm một thước bảy chẳng còn cách nào khác, phải chuyển hướng để kiếm việc. Anh ta tìm đến một công ty bé xíu để thử vận may.",
        rating: 5,
        numReviews: 20,
        price: 126000,
        countInStock: 40,
        type: {
            type: "Sách kỹ năng",
            category: "làm giàu"
        }

    }, {
        name: "Bộ sách Xây dựng thương hiệu cá nhân - phép màu nâng tầm giá trị - Miễn phí giao hàng!",
        image: "https://static-shop.waka.vn/resize/340x497x5/image/img.product/0/0/0/16/8536_1.jpg",
        description: "Bộ sách sẽ giúp bạn trở nên giàu có, làm giàu cho cuộc sống của bạn trên tất cả các phương diện của cuộc sống chứ không chỉ về tài chính và vật chất. Đồng thời, sẽ dạy bạn cách củng cố, tăng cường lòng tự tin, vượt qua những khó khăn thách thức thường ngày, sống với đam mê và mục tiêu của mình, nhận ra tất cả những khát vọng của bản thân.",
        rating: 5,
        numReviews: 20,
        price: 348000,
        countInStock: 40,
        type: {
            type: "Sách kỹ năng",
            category: "Phát triển bản thân"
        }

    }, {
        name: "Bộ Công cụ giúp bạn trở thành nhà quản lý thu phục lòng quân - Miễn phí giao hàng!",
        image: "https://static-shop.waka.vn/resize/340x497x5/image/img.product/0/0/0/16/8533_1.jpg",
        description: "Cứ 100 doanh nghiệp hoặc công ty trên thế giới lâm vào tình cảnh phá sản thì có đến 85% trong số đó do chính sách quản lý của người đứng đầu mà ra. Nhà quản lý chính là người giữ vai trò quan trọng trong sự thành công hay thất bại của một doanh nghiệp. Tuy nhiên những kỹ năng lãnh đạo đó không phải có được chỉ trong một sớm một chiều mà phải trải qua rất nhiều gian nan, thử thách. Sở hữu combo sách kỹ năng thu phục lòng quân cho nhà quản lý chính là cẩm nang không thể thiếu giúp cho những nhà quản lý thông thái có những kiến thức, lời khuyên và công cụ mà họ cần để trở nên xuất sắc trong sự nghiệp của mình.Combo những công cụ giúp bạn trở thành nhà quản lý thu phục lòng quân bao gồm 3 cuốn:",
        rating: 5,
        numReviews: 20,
        price: 289000,
        countInStock: 40,
        type: {
            type: "Sách kỹ năng",
            category: "Phát triển bản thân"
        }

    },
    {
        name: "Bí quyết loại bỏ thói quen trì hoãn",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/7687_1.jpg",
        description: "Nếu câu trả lời là “Có” thì cuốn sách này chính xác là dành cho bạn.“Bí quyết loại bỏ thói quen trì hoãn” là cuốn sách giúp bạn hiểu các nguyên nhân gây ra sự trì hoãn, cách vượt qua nó, tăng năng suất làm việc và đạt được mọi mục tiêu qua các bước thực tiễn:",
        rating: 5,
        numReviews: 20,
        price: 112000,
        countInStock: 30,
        type: {
            type: "Sách kỹ năng",
            category: "Phát triển bản thân"
        }

    },
    {
        name: "EQ Nghệ thuật làm chủ cảm xúc",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/7722_1.jpg",
        description: "Trong “EQ - Nghệ thuật làm chủ cảm xúc”, chúng ta sẽ tìm hiểu về những vấn đề như cách để tận dụng trí tuệ xúc cảm vì lợi ích chung, duy trì và phát triển các kỹ năng của từng cá nhân cũng như trở thành một nhà lãnh đạo thấu hiểu tâm lý của nhân viên. Sau khi đọc xong cuốn sách, bạn sẽ có thể “hiểu rõ hơn về bản thân, mọi người và thế giới xung quanh, đồng thời có thể áp dụng nó để đạt được điều gì đó” “Cuốn sách này gồm ba phần, mỗi phần tập trung vào một trong ba lĩnh vực chính: khả năng ra quyết định, sự nhanh nhạy và các mối quan hệ. Phần đầu tiên sẽ trình bày một cách dễ hiểu và hữu dụng về lý thuyết khoa học não bộ đằng sau EQ, phần hai sẽ điểm qua một chút về môi trường và phần ba sẽ liên quan đến động lực cũng như cách làm mới phương pháp tiếp cận của bạn. Trong mỗi chương, chúng ta cũng sẽ bàn về nguyên lý tôi, chúng ta và tại sao. Trong mỗi chương, bạn sẽ học được cách đi từ tôi đến chúng ta và cuối cùng là tại sao.”",
        rating: 5,
        numReviews: 20,
        price: 104000,
        countInStock: 30,
        type: {
            type: "Sách kỹ năng",
            category: "Phát triển bản thân"
        }

    },
    {
        name: "Bộ sách: Để tâm tĩnh lặng",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9456_1.jpg",
        description: "Bộ sách: Để tâm tĩnh lặng gồm 5 cuốn sách.",
        rating: 5,
        numReviews: 20,
        price: 586000,
        countInStock: 30,
        type: {
            type: "Sách kỹ năng",
            category: "Kỹ năng sống"
        }

    },
    {
        name: "Đừng để mâu thuẫn nhỏ gây hậu quả lớn",
        image: "https://static-shop.waka.vn/resize/340x497x2/image/img.product/0/0/0/18/9390_1.jpg",
        description: "Trong các mối quan hệ, hầu hết mọi người đều muốn tránh khỏi những cãi vã không thực sự cần thiết, dẫu là trong quan hệ vợ/ chồng, con cái, đồng nghiệp, cấp trên, xã giao, bạn bè… Nhưng đồng thời, sự kìm nén cảm xúc, hay cố tình lờ đi, vờ như không biết, sở dĩ “một điều nhịn là chín điều lành” tránh điều tiếng. Tuy nhiên những cuộc trò chuyện như vậy sẽ tạo cho ta cảm giác căng thẳng cực độ, và nếu kéo dài sẽ là sự khó chịu dai dẳng.",
        rating: 5,
        numReviews: 20,
        price: 115000,
        countInStock: 30,
        type: {
            type: "Sách kỹ năng",
            category: "Kỹ năng sống"
        }

    }, {
        name: "Nhấc mông lên đừng ngồi đó mà mơ",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9452_1.jpg",
        description: "Nếu như bạn đang đi tìm muốn cuốn sách đơn thuần là sách self-help hay những cuốn sách làm tăng động lực đơn thuần, có lẽ Nhấc Mông Lên Đừng Ngồi Đó Mà Mơ không hẳn phù hợp với bạn. Cuốn sách này là tập hợp những câu chuyện được tác giả Nguyễn Đặng Quỳnh Anh kể lại bằng một giọng văn trẻ trung, sinh động, đúng theo cách nói của những người trẻ tuổi chúng ta. Và thứ quan trọng hơn nữa là cách kể chuyện đó sẽ làm bạn nghe mê mẩn như cách chị Quỳnh (tên thân mật của tác giả) đang ngồi đối diện và nói chuyện với chúng ta.",
        rating: 5,
        numReviews: 20,
        price: 108000,
        countInStock: 30,
        type: {
            type: "Sách kỹ năng",
            category: "Kỹ năng sống"
        }

    }, {
        name: "Tối giản lối sống - Tối ưu cuộc đời",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9382_1.jpg",
        description: "Đại dịch âm thầm làm cho mọi thứ trở nên sáng tỏ. Trong tai ương, nhiều người mới hiểu ra rằng một nền kinh tế dựa trên tốc độ tăng trưởng cấp số nhân không phải là nền kinh tế khỏe mạnh, mà thực ra lại dễ bị ảnh hưởng hơn cả. Nếu một nền kinh tế sụp đổ chỉ vì mọi người mua nhiều hàng nhu yếu phẩm thì nó không hề lớn mạnh như chúng ta những tưởng.",
        rating: 5,
        numReviews: 20,
        price: 162000,
        countInStock: 30,
        type: {
            type: "Sách kỹ năng",
            category: "Kỹ năng sống"
        }

    },
    {
        name: "Lập chiến lược kinh doanh tối giản",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/17/8888_1.jpg",
        description: "Vào thập niên 1960, Hải quân Hoa Kỳ đề ra nguyên tắc KISS, có nghĩa là “Giữ mọi thứ đơn giản”. Nó là nguyên tắc để các kỹ sư thiết kế ra những con tàu chiến – vì thiết kế càng đơn giản bao nhiêu, kỹ thuật đóng tàu sẽ bớt phức tạp đi bấy nhiêu; kỹ sư trên các tàu chiến và chiến hạm, thay vì phải sửa chữa và bảo dưỡng cầu kỳ như ở trên bãi, sẽ có thể tự sửa chữa mọi trục trặc và hỏng hóc.",
        rating: 5,
        numReviews: 20,
        price: 89000,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Khởi nghiệp"
        }

    }, {
        name: "Khởi nghiệp nhanh mà chắc",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/17/8760_1.jpg",
        description: "Nếu bạn đang tìm cách để có thể quản trị và giảm thiểu những bất lợi trên hành trình khởi nghiệp, cuốn sách này chính là điều bạn cần.",
        rating: 5,
        numReviews: 20,
        price: 106000,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Khởi nghiệp"
        }

    }, {
        name: "Cẩm nang CEO khởi nghiệp",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/16/8659_1.jpg",
        description: "Hình ảnh trước công chúng của một CEO công ty khởi nghiệp có vẻ hào nhoáng – từ những buổi giới thiệu sản phẩm vô cùng kịch tính, những chuyến đi thú vị và những buổi diễn thuyết đầy cảm hứng cho việc dẫn dắt một đội ngũ luôn liên tục phát triển và ngày càng hoàn thiện sứ mệnh của mình. Tuy nhiên, những gì bạn không thể nhìn thấy mới chính là công việc thật sự mà một CEO phải làm mỗi ngày.",
        rating: 4,
        numReviews: 20,
        price: 164000,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Khởi nghiệp"
        }

    }, {
        name: "Tái tạo mô hình kinh doanh hiệu quả",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/7702_1.jpg",
        description: "Đổi mới mô hình kinh doanh là chìa khóa để mở ra sự tăng trưởng mang tính chuyển đổi - nhưng rất ít giám đốc điều hành biết cách áp dụng nó vào doanh nghiệp của họ. “Tái tạo mô hình kinh doanh hiệu quả”, tác giả Mark W.Johnson đưa cho họ cuốn sách có thể giúp họ thực hiện điều đó và cho rằng đổi mới mô hình kinh doanh là con đường được được sử dụng nhiều nhất để phát triển. Uber, Airbnb và các công ty khởi nghiệp khác đã phá vỡ toàn bộ ngành công nghiệp; những công ty đương nhiệm như Blockbuster, Sears,và BlackBerry đã thất thế; và chuyển đổi kỹ thuật số đã trở thành một trong những khẩu hiệu “nóng” nhất của thế giới kinh doanh.",
        rating: 5,
        numReviews: 20,
        price: 129000,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Khởi nghiệp"
        }

    },
    {
        name: "Ai hiểu khách hàng người ấy bán được hàng (Tái bản)",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9239_1.jpg",
        description: "Một số nhân viên bán hàng luôn giới thiệu không biết mệt mỏi cho khách hàng nghe công ty của họ đáng tin cậy như thế nào, sản phẩm của họ chất lượng ra sao, và nếu hợp tác làm ăn với họ thì khách hàng sẽ nhận được những lợi ích vô cùng to lớn… nhưng kết quả bán hàng lại không tốt. Tại sao vậy? Vì những điều họ mang đến không phải là thứ khách hàng muốn, có nghĩa là họ không hiểu khách hàng. Nhân viên bán hàng cần thấu hiểu khách hàng, vì khách hàng đóng vai trò quan trọng nhất trong quá trình tiêu thụ. Không hiểu khách hàng, khách hàng sẽ không có hứng thú mua hàng; không hiểu khách hàng, khách hàng sẽ không mở ví lấy tiền mua hàng; không hiểu khách hàng, đương nhiên sẽ không bán được hàng.",
        rating: 5,
        numReviews: 20,
        price: 96000,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Marketing - Bán hàng"
        }

    }, {
        name: "Giao tiếp chuyên nghiệp để bán hàng thành công (Tái bản)",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9236_1.jpg",
        description: "Cuốn sách này sẽ mang đến cho bạn phương pháp có thể khiến tài ăn nói của bạn tiến bộ nhanh chóng. Cuốn sách chia thành bảy chương, giải đáp tỉ mỉ các khâu trong bán hàng, bao gồm: yếu tố cơ bản trong giao tiếp bán hàng, tài ăn nói để khai thác khách hàng hữu hiệu, kĩ xảo nói chuyện qua điện thoại, kĩ xảo thực chiến khi tiếp cận khách hàng, bồi dưỡng phẩm chất đạo đức, làm thế nào để khách hàng tâm phục khẩu phục nhanh chóng giao dịch thành công, các vấn đề sau bán hàng...",
        rating: 5,
        numReviews: 20,
        price: 165400,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Marketing - Bán hàng"
        }

    }, {
        name: "Ai hiểu khách hàng người ấy bán được hàng (Tái bản)",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9239_1.jpg",
        description: "Một số nhân viên bán hàng luôn giới thiệu không biết mệt mỏi cho khách hàng nghe công ty của họ đáng tin cậy như thế nào, sản phẩm của họ chất lượng ra sao, và nếu hợp tác làm ăn với họ thì khách hàng sẽ nhận được những lợi ích vô cùng to lớn… nhưng kết quả bán hàng lại không tốt. Tại sao vậy? Vì những điều họ mang đến không phải là thứ khách hàng muốn, có nghĩa là họ không hiểu khách hàng. Nhân viên bán hàng cần thấu hiểu khách hàng, vì khách hàng đóng vai trò quan trọng nhất trong quá trình tiêu thụ. Không hiểu khách hàng, khách hàng sẽ không có hứng thú mua hàng; không hiểu khách hàng, khách hàng sẽ không mở ví lấy tiền mua hàng; không hiểu khách hàng, đương nhiên sẽ không bán được hàng.",
        rating: 5,
        numReviews: 20,
        price: 96000,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Marketing - Bán hàng"
        }

    }, {
        name: "Chốt DEAL thành công: Bí quyết trở thành người bán hàng xuất sắc",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/17/8955_1.jpg",
        description: "Sau nhiều năm tự kinh doanh, tác giả Romi Neustadt sẽ chia sẻ với các bạn những gì mà cô đã học, những kinh nghiệm đã trải qua, để giúp bạn tìm hiểu và nhận ra cuộc sống mà bạn thực sự mong muốn thông qua quyển sách Chốt DEAL thành công. Romi Neustadt sẽ hướng dẫn những kỹ năng và chiến lược cần thiết để xây dựng loại hình kinh doanh theo mạng lưới và phát triển nó theo cấp số nhân.",
        rating: 5,
        numReviews: 20,
        price: 106000,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Marketing - Bán hàng"
        }

    },
    {
        name: "Sách lược đầu tư của buffet (Tái bản)",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9241_1.jpg",
        description: "Nội dung “Sách Lược Đầu Tư Của W.Buffett” được đúc kết từ những chiến lược và kinh nghiệm đầu tư của W. Buffett. Bạn sẽ tìm ra những bí quyết đắt giá đằng sau thành công và sự giàu có của ông.",
        rating: 5,
        numReviews: 20,
        price: 89500,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Đầu tư - tài chính"
        }

    }, {
        name: "Đầu tư chất lượng",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9230_1.jpg",
        description: "Cuốn sách này có hơn 20 nghiên cứu tình huống, hầu hết là các công ty tốt, các thuộc tính và mô hình mang lại cho họ lợi thế, nhưng cũng cung cấp các ví dụ về sai lầm – những công ty từng được nghĩ rằng họ là doanh nghiệp tốt nhưng sau đó được chứng minh là không phải vậy. Trong những doanh nghiệp khổng lồ nổi tiếng toàn cầu với những đặc điểm hấp dẫn, chúng tôi đề cập đến Diageo, Hermès, L’Oréal và Unilever; trong những doanh nghiệp đầy sức ảnh hưởng nhưng không có nhận diện thương hiệu toàn cầu, tác giả trình bày về những người đi đầu trong lĩnh vực sản xuất và dịch vụ thang máy, khóa, hệ thống ống nước; nhà sản xuất hóa chất sử dụng trong nông nghiệp, y học và sữa chua; một hãng hàng không giá rẻ và nhà bán lẻ hàng may mặc; hai nhà sản xuất và phân phối kính mắt; một hệ thống thông tin tín dụng lớn và thậm chí là một ngân hàng. Mặt khác, cuốn sách có đề cập đến hai tập đoàn gia đình – Nokia và Tesco – cùng với nhà sản xuất implant nha khoa, một nhà sản xuất thiết bị y tế và một nhà cung cấp dịch vụ khoan dầu.",
        rating: 5,
        numReviews: 20,
        price: 79500,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Đầu tư - tài chính"
        }

    }, {
        name: "Sự kết thúc của thời đại giả kim",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/17/8811_1.jpg",
        description: "Giấy không thể biến thành vàng, và thuật giả kim thời trung cổ đã bị chứng minh đa phần chỉ là trò lừa đảo không hơn không kém. Ấy thế mà suốt một thời gian dài, hệ thống tiền tệ và tài chính của con người đã lấy đó làm nền tảng: biến giấy (tiền) thành vàng.",
        rating: 5,
        numReviews: 20,
        price: 149500,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Đầu tư - tài chính"
        }

    }, {
        name: "Chuyển đổi toàn diện mô hình kinh doanh",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9307_1.jpg",
        description: "Thiết lập mô hình kinh doanh là một chủ đề vô cùng hấp dẫn với nhiều vấn đề quan trọng để mổ xẻ, và một trong số đó là làm sao để chuyển đổi mô hình kinh doanh một cách có hệ thống – từ mô hình hiện tại sang mô hình tương lai để giành (lại) vị thế cạnh tranh trên thị trường. Hầu hết các công ty chỉ mới thay đổi trong phạm vi mô hình cũ chứ chưa đủ can đảm “lột xác”.",
        rating: 5,
        numReviews: 20,
        price: 189500,
        countInStock: 30,
        type: {
            type: "Sách kinh doanh",
            category: "Đầu tư - tài chính"
        }

    }, {
        name: "Bộ Truyện Cổ tích nước ngoài Song Ngữ Việt – Anh (5 Cuốn)",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/8131_1.jpg",
        description: "Truyện cổ không chỉ để ru trẻ con ngủ. Truyện cổ còn là nơi lưu giữ khát vọng và chắp cánh ước mơ cho mỗi dân tộc. Bộ “Truyện cổ tích nước ngoài song ngữ Anh - Việt” thể hiện bằng song ngữ Anh – Việt là nét đặc biệt nhất của bộ truyện. Nhờ đó, các độc giả nhỏ tuổi thân thương chẳng những có thể đắm mình vào thế giới huyền ảo của những phép mầu, mà còn có dịp làm quen một loại tiếng Anh chuẩn mực. Thế giới cổ tích đầy phép mầu được tái hiện qua nét vẽ sắc sảo của các họa sĩ sẽ chắp cánh cho trí tưởng tượng của trẻ bay cao, còn tiếng Anh sẽ là phương tiện để trẻ biến những ước mơ ấy thành hiện thực.",
        rating: 5,
        numReviews: 20,
        price: 90500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Cổ tích - Thần thoại"
        }

    }, {
        name: "Cuộc săn lùng quái vật - Phần 1: Rồng lửa Ferno",
        image: "https://static-shop.waka.vn/resize/340x497x2/image/img.product/0/0/0/15/8035_1.jpg",
        description: "Truyện cổ không chỉ để ru trẻ con ngủ. Truyện cổ còn là nơi lưu giữ khát vọng và chắp cánh ước mơ cho mỗi dân tộc. Bộ “Truyện cổ tích nước ngoài song ngữ Anh - Việt” thể hiện bằng song ngữ Anh – Việt là nét đặc biệt nhất của bộ truyện. Nhờ đó, các độc giả nhỏ tuổi thân thương chẳng những có thể đắm mình vào thế giới huyền ảo của những phép mầu, mà còn có dịp làm quen một loại tiếng Anh chuẩn mực. Thế giới cổ tích đầy phép mầu được tái hiện qua nét vẽ sắc sảo của các họa sĩ sẽ chắp cánh cho trí tưởng tượng của trẻ bay cao, còn tiếng Anh sẽ là phương tiện để trẻ biến những ước mơ ấy thành hiện thực.",
        rating: 5,
        numReviews: 20,
        price: 31500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Cổ tích - Thần thoại"
        }

    }, {
        name: "Tủ sách truyện cổ tích - Cổ tích Brazil: Tình yêu của rừng",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/7998_1.jpg",
        description: "Tủ sách truyện cổ tích giới thiệu những câu chuyện cổ tích nổi tiếng, ý nghĩa và thú vị. Trong loạt truyện này, nhóm tác giả chọn lọc truyện cổ tích của từng quốc gia, khu vực khác nhau trên thế giới. Những câu chuyện ngoài nội dung mang tính nhân văn còn thể hiện truyền thống và bản sắc văn hóa của mỗi dân tộc.",
        rating: 5,
        numReviews: 20,
        price: 18000,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Cổ tích - Thần thoại"
        }

    }, {
        name: "Tủ sách truyện cổ tích - Cổ tích châu Phi: Cái giếng",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/7995_1.jpg",
        description: "Tủ sách truyện cổ tích giới thiệu những câu chuyện cổ tích nổi tiếng, ý nghĩa và thú vị. Trong loạt truyện này, nhóm tác giả chọn lọc truyện cổ tích của từng quốc gia, khu vực khác nhau trên thế giới. Những câu chuyện ngoài nội dung mang tính nhân văn còn thể hiện truyền thống và bản sắc văn hóa của mỗi dân tộc.",
        rating: 5,
        numReviews: 20,
        price: 19500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Cổ tích - Thần thoại"
        }

    },
    {
        name: "Tủ sách truyện tranh chống Covid-19: Hộp cơm rỗng",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/16/8501_1.jpg",
        description: "Trong cuộc sống thường ngày, chúng ta luôn nhìn thấy có nhiều chó mèo lang thang. Trong những ngày tháng đặc biệt vì dịch nạn covid-19, con người không thể quên lãng chúng vì chúng cũng có sinh mạng như con người. Giữa trẻ em và động vật vốn có sẵn cảm giác gần gụi tự nhiên. Khi trẻ em coi những động vật nhỏ bình đẳng về sinh mạng, có thể cùng chúng chung sống và cùng hy vọng thì mới có thể xây dựng được những lý giải sâu sắc về cuộc sống.",
        rating: 5,
        numReviews: 20,
        price: 55000,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Sách tranh"
        }

    },
    {
        name: "Arty Mouse – Những người bạn (Sách viết và xóa được)",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/16/8214_1.jpg",
        description: "Trong cuốn sách thực hành cắt giấy này, Chuột Arty sẽ giới thiệu những hoạt động vui nhộn để con bạn có thể phát triển những kỹ năng vận động tinh và chuẩn bị cho việc tập viết.",
        rating: 5,
        numReviews: 20,
        price: 40500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Sách tranh"
        }

    }, {
        name: "Chú voi Moppet Vui vẻ: Voi Mamut Moppet mừng Giáng sinh",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/8032_1.jpg",
        description: "Với lối viết gieo vần nhịp nhàng, dễ nhớ, cùng hình ảnh minh họa sinh động, bộ sách xoay quanh những câu chuyện gia đình đời thường của chú voi Moppet, sẽ giúp độc giả nhỏ tuổi hiểu rõ thêm ý nghĩa của những điều thông thường trong cuộc sống như đi tắm, đi xem phim, ý nghĩa của trái cây... Đồng thời bộ sách cũng giúp các em nhỏ tạo dựng cuộc sống tinh thần lạc quan, vui vẻ.",
        rating: 5,
        numReviews: 20,
        price: 18000,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Sách tranh"
        }

    }, {
        name: "Tủ sách Câu chuyện Giáng Sinh: Những món quà Giáng sinh",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/8014_1.jpg",
        description: "Tủ sách Câu chuyện Giáng sinh gồm những câu chuyện bình dị về ngày Giáng sinh - ngày lễ của sự quan tâm và chia sẻ - do đó, thông điệp được truyền tải trong từng cuốn sách vô cùng gần gũi và mang tính giáo dục cao. Bộ sách không những giúp các độc giả nhí biết đến bầu không khí ấm áp đầy tình yêu thương của ngày lễ này, mà còn hướng các em đến lối sống lành mạnh, tích cực",
        rating: 5,
        numReviews: 20,
        price: 12500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Sách tranh"
        }

    },
    {
        name: "Giáo dục an toàn giao thông - Hướng dẫn bé thực hành - Dành cho trẻ 4-5 tuổi",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9424_1.jpg",
        description: "“An toàn cho con” là điều mà các bậc phụ huynh luôn cố gắng trang bị cho các con. Ở nhà, trẻ được gia đình chăm sóc, đến trường có thầy cô dạy bảo, khi ra ngoài xã hội, không gì tốt hơn khi các con được trang bị những kĩ năng an toàn để tự phòng tránh hoặc đối phó với nguy hiểm. Tham gia giao thông là một phần không thể thiếu trong cuộc sống hàng ngày. Để đảm bảo an toàn cho bản thân và cho mọi người, trẻ cần phải được trang bị những kiến thức, kỹ năng về an toàn giao thông, văn hóa giao thông, để tham gia giao thông đúng quy định, biết cách ứng phó trước những tình huống bất ngờ xảy ra, tránh được những tai nạn đáng tiếc.",
        rating: 5,
        numReviews: 20,
        price: 55500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Kiến thức - Bách khoa"
        }

    },
    {
        name: "Combo sách Giáo dục an toàn giao thông - Dành cho trẻ 5-6 tuổi (6 cuốn)",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/18/9412_1.jpg",
        description: "Với thông điệp Giao thông an toàn - Học ngàn điều hay, bộ sách Giáo dục an toàn giao thông (dành cho trẻ mẫu giáo) mang đến nhiều bài học thú vị, nhiều kĩ năng bổ ích, sẽ giúp trẻ nhận biết các phương tiện và tín hiệu giao thông, cũng như làm quen và thực hành một số kĩ năng cơ bản khi tham gia giao thông trong cuộc sống hàng ngày.",
        rating: 5,
        numReviews: 20,
        price: 125500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Kiến thức - Bách khoa"
        }

    }, {
        name: "Bé học tiếng anh qua hình ảnh: Đồ chơi",
        image: "https://static-shop.waka.vn/resize/340x497x2/image/img.product/0/0/0/18/9267_1.jpg",
        description: "Với những hình ảnh đẹp mắt và vô cùng ngộ nghĩnh đáng yêu, các bé chắc chắn sẽ rất thích thú khi vừa được ngắm ảnh vừa học được những từ tiếng anh thú vị đầu tiên theo từng chủ đề...",
        rating: 5,
        numReviews: 20,
        price: 46500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Kiến thức - Bách khoa"
        }

    }, {
        name: "Hỏi nhỏ biết to - Cơ thể người",
        image: "https://static-shop.waka.vn/resize/340x497x1/image/img.product/0/0/0/15/7876_1.jpg",
        description: "Với những câu hỏi thú vị về cơ thể người, phần trả lời ngắn ngon, súc tích cùng hình ảnh minh họa sinh động, ngộ nghĩnh, bộ sách Hỏi nhỏ biết to cơ thể người mở ra cho các bạn nhỏ cả một kho tri thức diệu kì và thú vị về cơ thể con người.",
        rating: 5,
        numReviews: 20,
        price: 26500,
        countInStock: 30,
        type: {
            type: "Sách thiếu nhi",
            category: "Kiến thức - Bách khoa"
        }

    },
]

export default products
const cards = [
    "Uống 1 ly nếu bạn từng mặc áo trái.",
    "Tất cả những ai đang đeo kính đều phải uống.",
    "Tất cả các cô gái uống!",
    "Sai lầm tồi tệ nhất mà bạn đã mắc phải trong cuộc đời là gì? Hoặc uống 3 ly",
    "Thách đấu vật tay với người chơi bên phải bạn, người thua phải uống cạn ly của mình.",
    "Uống nếu bạn đã từng nghĩ đến việc bắt đầu đi gym nhưng chưa bao giờ thực hiện.",
    "Uống nếu bạn đã từng chơi trò chơi điện tử suốt cả đêm.",
    "Quay một video bạn hát bài hát yêu thích và đăng lên Facebook của bạn. Hoặc uống 2 ly",
    "Uống nếu bạn không thể nhớ lá bài cuối cùng của mình.",
    "Uống nếu bạn đã xem một chương trình chỉ vì người khác giới thiệu cho bạn.",
    "Người đối diện bạn sẽ được chọn ảnh đại diện Facebook của bạn trong suốt buổi tối.",
    "Đi theo chiều kim đồng hồ, gọi tên các tỉnh ở Việt Nam. Người đầu tiên lặp lại hoặc không nói được tên sẽ phải uống 2 ly.",
    "Gọi cho ai đó và nói rằng bạn yêu họ hoặc uống 3 ly",
    "Chọn 1 bạn khác giới và tỏ tình hoặc uống 3 ly",
    "Uống nếu bạn đã từng cố gắng lý luận với một người yêu cũ độc hại.",
    "Người chơi bên phải bạn được chọn 1 món đồ ăn cho bạn ăn nếu không ăn uống 2 ly.",
    "Mọi người đứng trên một chân, người đầu tiên ngã phải uống.",
    "Kể một câu chuyện cười, nếu không ai cười, bạn phải uống. Nếu họ cười, họ phải uống.",
    "Gọi tên mình bằng ngôi thứ ba trong 2 vòng tiếp theo, uống khi bạn quên.",
    "Người chơi bên phải bạn phải thử nói với giọng Sài Gòn hoặc uống cạn ly của mình.",
    "Bạn có 10 giây để gọi tên 5 loại anime hoặc phải uống 1 ly.",
    "Uống nếu bạn đã từng nói chuyện với một cây cối.",
    "Đi theo chiều kim đồng hồ, gọi tên các cầu thủ Việt Nam bắt đầu từ bạn. Người đầu tiên lặp lại hoặc bỏ sót tên phải uống.",
    "Người chơi có chiếc mũi lớn nhất phải uống.",
    "Thực hiện một cuộc chiến ngón tay cái với người chơi gần nhất, ai thua phải uống.",
    "Người chơi bên phải bạn sẽ cố gắng làm cho người chơi khác cười, nếu không thành công, họ phải uống. Mọi người chơi cười cũng phải uống.",
    "Uống nếu bạn có đôi mắt màu nâu.",
    "Nói năm quốc gia bắt đầu bằng chữ T trong năm giây, nếu không phải uống.",
    "Đổ đầy ly của bạn và bú",
    "Mọi người cùng hát một bài hát và sau đó đồng khởi.",
    "Ai là người trẻ nhất phải uống.",
    "Hỏi xem thích mèo hay chó, ai thích chó phải uống.",
    "Chọn một người chơi uống cùng bạn và số ly bạn chọn (Tối đa 5 ly)",
    "Người chơi nào có pin điện thoại thấp nhất phải uống.",
    "Tát một người chơi mà bạn chọn hoặc uống.",
    "Gọi cho người bạn thích và tỏ tình, nếu không thì uống 2 ly.",
    "Hôn bạn của bạn hoặc uống.",
    "Bạn chọn người chơi có nụ cười đẹp nhất, họ phải uống.",
    "Tất cả chọn 1 người để ép uống.",
    "Tất cả mọi người trừ người chơi bên phải bạn phải uống.",
    "Người đối diện bạn sẽ được chọn ảnh đại diện Facebook của bạn trong suốt buổi tối.",
    "Chọn một người chơi, tất cả mọi người trừ bạn và người chơi đó phải uống.",
    "Chơi nối từ ai theo chiều kim đồng hồ ai thua thì uống bắt đầu bằng Cuộc đời",
    "Đã đến lúc chơi trò xoay chai, ai dính phải uống 2 ly",
    "Ai đã tốt nghiệp đại học thì uống",
    "Uống số ly bằng số anh chị em trong nhà mà bạn có.",
    "Uống nếu bạn đã trở nên tốt hơn sau một cuộc chia tay.",
    "Chọn một người chơi và đoán màu của quần lót họ. Nếu bạn đoán đúng, họ phải uống, nếu không thì bạn phải uống.",
    "Truth or Dare: Chọn Truth thì người bên trái hỏi, Dare thì người bên phải chọn",
    "Cho người ở bên phải bạn một nụ hôn gió hoặc uống.",
    "Mọi người nói màu yêu thích của mình, những người chơi có màu giống nhau phải uống",
    "Người chơi có ít tiền nhất trong ví phải uống. Nếu không muốn cho mọi người thấy hoặc không mang ví, uống 2 shot.",
    "Khi đếm đến ba, tất cả người chơi phải giơ một con số từ một đến năm trên tay, những người chơi đông nhất có cùng số phải uống.",
    "Người chơi có nhiều tiền mặt nhất phải uống.",
    "Ai có tên bắt đầu bằng chữ H thì uống",
    "Ai từng gãy xương thì uống",
    "Mọi người đứng lên, và người đứng cuối cùng phải uống.",
    "Ai có acc clone MXH thì uống",
    "Khen người bên trái 5 câu hoặc uống",
    "Ai ế thì uống",
    "Bao nhiêu người cũ bây nhiêu ly đầy",
    "Ai dùng IPhone thì uống",
    "Ai thấp nhất thì uống",
    "Uống nếu bạn đã từng vừa tắm vừa hát",
    "Đọc họ và tên mọi người sai bao nhiêu người uống bấy nhiêu ly",
    "Chơi oẳn tù tì với 1 người bạn chọn, ai thua thì uống",
    "Những ai có tên nhiều chữ cái nhất thì uống",
    "Uống nếu bạn đã từng bị Cục vàng bắt",
    "Tất cả cùng uống thăm sức khỏe thằng tạo app",
    "Nam hay nữ đông hơn thì bên đấy phải uống",
    "Kể về 1 việc ngu xuẩn bạn làm gần đây, không kể được thì uống",
    "Messi or Ronaldo? Ai chọn Messi thì uống (tao fan a 7)",
    "Uống nếu bạn thích 1 người mà chưa bao giờ nói ra",
    "Uống nếu bạn cảm thấy không hạnh phúc với công việc/học hành hiện tại",
    "Uống nếu bạn từng hỏi Chat GPT xong chửi nó ngu",
    "Đoán giờ phút hiện tại, lệch quá 20 phút thì uống 2 ly",
    "Đăng status Tôi bị ngu lên facebook, bao nhiêu comment bấy nhiêu ly trong 30 phút (trừ các người đang chơi)"
];

function drawCard() {
    if (cards.length === 0) {
        alert("Không còn lá bài nào để rút!");
        return;
    }
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    document.getElementById('cardData').textContent = `${card}`;
    cards.splice(randomIndex, 1);
    document.getElementById('cardModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('cardModal').style.display = 'none';
}
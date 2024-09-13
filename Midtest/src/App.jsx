import { useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";
import Explore from "./components/Explore/Explore";
import Header from "./components/Header/Header";
function App() {
  const data = [
    {
      id: "1",
      movieName: "Weathering With You",
      description:
        "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
      image: "./images/weather.jpg",
      image2: "./images/weather2.jpg",
      episode: "01",
    },
    {
      id: "2",
      movieName: "One Piece",
      description:
        "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
      image: "./images/Onepiece.png",
      image2: "./images/onepiece2.jpg",
      episode: "1018",
    },
    {
      id: "3",
      movieName: "Boruto: Naruto Next Generations",
      description:
        "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki con của Orochimaru.",
      image: "./images/boruto.png",
      image2: "./images/boruto2.jpg",
      episode: "250",
    },
    {
      id: "4",
      movieName: "Spy X Family",
      description:
        "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
      image: "./images/spy.png",
      image2: "./images/spy_carousel.png",
      episode: "07",
    },
    {
      id: "5",
      movieName: "Shingeki no kyojin",
      description:
        "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
      image: "./images/attackontitan.png",
      image2: "./images/attackontitan2.jpg",
      episode: "28",
    },
    {
      id: "6",
      movieName: "Captain Tsubasa",
      description:
        "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
      image: "./images/captsu.png",
      image2: "./images/captsu2.jpg",
      episode: "28",
    },
    {
      id: "7",
      movieName: "Aoashi",
      description:
        "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
      image: "./images/aoashi.png",
      image2: "./images/aoashi2.jpg",
      episode: "28",
    },
  ];

  const [filmData, setFilmData] = useState(data);
  const [crrData, setCrrData] = useState(data[0]);

  let showExplore = null;
  if (crrData) {
    showExplore = <Explore film={crrData} />;
  }
  return (
    <div className="container">
      <Header />
      <div className="title1">Explore</div>
      <div className="question">What are you gonna watch today ?</div>
      {showExplore}
      <div className="title3">New Release</div>
      <div className="listfilm">
        {filmData.map((film) => {
          return (
            <Card
              key={film.id}
              name={film.movieName}
              img={film.image}
              episode={film.episode}
              onClick={() => {
                setCrrData(film);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

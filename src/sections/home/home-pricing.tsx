import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { Markdown } from 'src/components/markdown';
import { MotionViewport } from 'src/components/animate';

import { FloatLine, } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomePricing({ sx, ...other }: StackProps) {
  const data = {
    content: `<h2>🥇Kho game K89Bet vừa giải trí vừa đổi thưởng nhanh</h2>
    <h3>🥈Sòng bài</h3>
        <p>Sòng bài K89Bet, người chơi có thể tìm thấy nhiều trò chơi sòng bài phổ biến như:</p>
        <ul>
        <li>Baccarat</li>
        <li>Poker</li>
        <li>Pok Deng</li>
        <li>Fantan</li>
        <li>Bull Bull</li>
        <li>Andar Bahar</li>
        </ul>
        <p>Mỗi sảnh sòng bài của K89Bet cung cấp các phiên bản game đa dạng, được điều hành bởi người thật đã qua đào tạo, mang đến trải nghiệm chân thực. Hình ảnh và âm thanh của trò chơi đều đạt chất lượng cao, phát trực tiếp từ sòng bài.</p>
        <p>Các game Casino trực tuyến tại K89Bet được đánh giá cao với tỷ lệ trả thưởng hấp dẫn. Ví dụ, khi chơi Baccarat tại sảnh WM, người chơi sẽ nhận được tỷ lệ thưởng như sau:</p>
        <table border="1" cellpadding="5" cellspacing="0">
    <tr>
      <th>Loại cược</th>
      <th>Tỷ lệ trả thưởng</th>
    </tr>
    <tr>
      <td>Player</td>
      <td>1:1</td>
    </tr>
    <tr>
      <td>Banker</td>
      <td>1:0.95</td>
    </tr>
    <tr>
      <td>Hòa</td>
      <td>1:8</td>
    </tr>
    <tr>
      <td>Player đôi/Banker đôi</td>
      <td>1:11</td>
    </tr>
    <tr>
      <td>Bất kỳ một đôi</td>
      <td>1:5</td>
    </tr>
    <tr>
      <td>Hoàn hảo một đôi</td>
      <td>1:25</td>
    </tr>
  </table>
  <h3>🥈Trò chơi (Slots game K89Bet)</h3>

  <p>K89Bet đã đầu tư mạnh mẽ vào mảng Slots game với 32 sảnh đến từ các nhà phát hành danh tiếng như PT, RICH88, RSG, SG, SPRIBE, YB,… Mỗi sảnh trò chơi đều có một danh sách game đa dạng, được cập nhật thường xuyên và thiết kế với giao diện độc đáo. Trong số đó, những tựa game như:</p>
  <ul>
    <li>Hot Triple Sevens</li>
    <li>Greek Gods</li>
    <li>King of Football</li>
    <li>Lantern Wealth</li>
    <li>Jungle Jungle</li>
    <li>Boom Fiesta…</li>
  </ul>
  <p>đều là những lựa chọn hàng đầu của bet thủ.</p>
  <p>Lối chơi đơn giản chỉ với một thao tác ấn quay đã khiến cho Slot game trở nên phổ biến. Khi các biểu tượng giống nhau xuất hiện trên dòng thưởng sau khi vòng quay kết thúc, người chơi sẽ nhận được mức tiền thưởng tương ứng tùy theo giá trị của biểu tượng.</p>
  <h3>🥈Bắn cá</h3>
  <p>Các trò chơi bắn cá trực tuyến tại K89Bet đến từ 15 sảnh chơi nổi tiếng như FUNTA, KA, OG, PS, RSG, YB,… Các game này đều được tối ưu hóa với tốc độ load nhanh, tương thích với nhiều thiết bị. Ngoài ra, giao diện 3D chân thực của game Bắn cá mang đến trải nghiệm sống động cho người chơi.</p>
  <p>Để tối ưu trải nghiệm săn cá, nhiều game được chia thành các phòng chơi khác nhau. Ví dụ, khi tham gia Cai Shen Fishing, người chơi có thể chọn giữa:</p>
  <ul>
    <li>Phòng Tân thủ</li>
    <li>Phòng Chuyên gia</li>
    <li>Phòng Thần tài</li>
  </ul>

  <p>Nhờ những đặc điểm nổi bật này, nhiều tựa game Bắn cá hot như:</p>
  <ul>
    <li>Cai Shen Fishing</li>
    <li>Shade Dragons Fishing</li>
    <li>Hero Fishing</li>
    <li>Dragon Master</li>
    <li>One Shot Fishing…</li>
  </ul>
  <p>đã trở thành lựa chọn hàng đầu cho người chơi.</p>
  <h3>🥈Thể thao</h3>
  <p>K89Bet mang đến 9 sảnh chơi thể thao hấp dẫn như CMD, LUCKY SPORT, IM, 2SING, PANDA,..., cho phép bet thủ tham gia cá cược với đa dạng môn thể thao. Mỗi sảnh đều cung cấp hàng nghìn trận đấu mỗi ngày, với nhiều tỷ lệ kèo phong phú được hiển thị chi tiết.</p>
  <p>Người chơi có thể thỏa sức đặt cược với các loại kèo như kèo chấp, kèo đội ghi bàn đầu tiên, kèo đội thắng, kèo tài xỉu,... Tất cả thông tin và tỷ lệ kèo được trình bày rõ ràng trên bảng tỷ lệ. Đặc biệt, các trận đấu bóng đá luôn thu hút sự quan tâm lớn từ các bet thủ.</p>
  <h3>🥈E-sport</h3>
  <p>E-sport K89Bet nổi bật với hai sảnh E-sport, thu hút sự chú ý nhờ danh sách game đối đầu phong phú từ nhiều giải đấu hấp dẫn. Các trận đấu được yêu thích bởi nhiều bet thủ bao gồm:</p>
  <ul>
    <li>CS:GO</li>
    <li>Dota</li>
    <li>Liên minh huyền thoại</li>
    <li>Overwatch</li>
    <li>PUBG</li>
    <li>Warcraft</li>
  </ul>
  <p>Tỷ lệ kèo và thông tin trận đấu E-sport được cập nhật liên tục trên bảng tỷ lệ, và người chơi còn có thể theo dõi diễn biến trực tiếp của trận đấu thông qua link phát sóng trực tiếp chính thức nhà cái <strong>K89Bet</strong>.</p>
  <h3>🥈Chess (Game bài)</h3>
  <p>Chess K89Bet mang đến nhiều trải nghiệm mới với 12 sảnh chơi, bao gồm các nhà cung cấp như V8 Poker, CQ9, JILI, MG, EVO,... Mỗi sảnh đều cung cấp các phiên bản trò chơi đa dạng và dễ chơi. Các game này còn được chia thành nhiều phòng khác nhau. Chẳng hạn, khi tham gia Thai Hilo tại sảnh KM, người chơi có thể chọn từ các phòng:</p>
  <ul>
    <li>Phòng Phổ thông</li>
    <li>Phòng Tân thủ</li>
    <li>Phòng Cao thủ</li>
    <li>Phòng Bậc thầy</li>
  </ul>
  <p>Những ai yêu thích Chess K89Bet không nên bỏ qua các game nổi bật ở những sảnh như:</p>
  <table border="1" cellpadding="5" cellspacing="0">
    <tr>
      <th>Sảnh</th>
      <th>Các trò chơi nổi bật</th>
    </tr>
    <tr>
      <td>KM</td>
      <td>Baccarat, Tài xỉu, Thai Hilo, Bầu cua, 7 up 7 down, Bài Cào...</td>
    </tr>
    <tr>
      <td>V8</td>
      <td>Fantan, Xì tố, Bài cào, Đấu địa chủ, Xì dách, Nổ kim hoa...</td>
    </tr>
    <tr>
      <td>BBIN</td>
      <td>Andar Bahar, Baccarat, Fighting Bull Bull, Dragon Tiger...</td>
    </tr>
    <tr>
      <td>Rich88</td>
      <td>Xóc đĩa, Baccarat, Pok Deng, Fantan, Xì dách...</td>
    </tr>
  </table>
  <h3>🥈Đá gà/ Đua ngựa</h3>

  <p>Đá gà K89Bet mang đến cho bet thủ những trải nghiệm Đá gà và Đua ngựa qua các sảnh chuyên biệt. Đá gà được phục vụ qua 2 sảnh ODIN và WCC, nơi các trận chọi gà từ các trường gà uy tín được phát trực tiếp để người chơi theo dõi dễ dàng. Các trận đấu này cung cấp 3 ô cửa cược: Hòa, Wala, Meron.</p>
  <p>Với Đua ngựa, sảnh RCB nổi bật với nhiều kiểu cược hơn, mang đến cơ hội thắng lớn với các mức thưởng khác nhau. Các trận đua ngựa, đến từ các trường đấu danh tiếng, cũng được phát trực tiếp, giúp người chơi tiện lợi theo dõi.</p>
  <h3>🥈Xổ số</h3>
  <p>Để đáp ứng nhu cầu cá cược, K89Bet đã mang đến 4 sảnh Xổ số chất lượng là SBA, YB, GW và BBIN. Các sảnh này mang lại nhiều loại hình xổ số trực tuyến mới mẻ, tạo nên trải nghiệm phong phú cho người chơi như:</p>
  <ul>
    <li>Xổ số 3D</li>
    <li>PK10</li>
    <li>Happy 10</li>
    <li>Lucky 28</li>
    <li>Mark Six Bingo</li>
    <li>PK3</li>
    <li>Keno…</li>
  </ul>
  <p>Xổ số tại K89Bet nổi bật với các kiểu chọn số đa dạng và tỷ lệ thưởng cao. Ví dụ, khi chơi Số đề Việt Nam – miền Trung tại sảnh GW, bạn có thể chọn số theo nhiều cách như: 2D, 3D, PL2, PL3,... với tỷ lệ thưởng lên đến 1 ăn 98.</p>
  <p>Liên hệ trực tiếp: <strong><a href="https://k89.app/">https://k89.app/</a></strong></p>
  <h2>🥇Hướng dẫn tải app K89Bet cho Android và iOS</h2>
  <img src="/assets/images/huong-dan-tai-app-k89bet-cho-android-va-ios.webp" alt="Hướng dẫn tải app K89Bet cho Android và iOS"/>
  <p>Việc tải và cài đặt ứng dụng K89Bet sẽ khác nhau tùy theo thiết bị Android hoặc iOS của bạn. Dưới đây là hướng dẫn chi tiết cách tải app K89Bet cho Android và cách tải app K89Bet cho iOS từ trang chủ chính thức K89Bet:</p>
  <h3>🥈Cách tải app K89Bet cho Android</h3>
  <ol>
    <li>Truy cập trang chủ <strong>K89Bet</strong>, chọn <strong>“Tải app”</strong>.</li>
    <li>Chọn “Android download” và nhấp vào “Tải xuống”.</li>
    <li>Khi được yêu cầu cập nhật, hãy xác nhận bằng cách chọn “Cập nhật”.</li>
    <li>Hoàn tất cài đặt và mở ứng dụng để tham gia cá cược ngay lập tức.</li>
  </ol>

  <h3>🥈Cách tải app K89Bet cho iOS</h3>
  <ol>
    <li>Tại trang chủ <strong>K89Bet</strong>, chọn <strong>“Tải app”</strong>.</li>
    <li>Nhấp vào “iOS download” và chọn “Tải xuống”.</li>
    <li>Cho phép cài đặt ứng dụng trên thiết bị của bạn.</li>
    <li>Truy cập “Cài đặt”, chọn ứng dụng vừa tải và xác nhận “Tin cậy”.</li>
    <li>Quay lại màn hình chính và khởi động app để bắt đầu cá cược online.</li>
  </ol>
  <h2>🥇Các chương trình khuyến mãi K89Bet mới nhất</h2>
  <img src="/assets/images/cac-chuong-trinh-khuyen-mai-k89bet-moi-nhat.webp" alt="Các chương trình khuyến mãi K89Bet mới nhất"/>
  <p>K89Bet luôn thu hút người chơi với nhiều chương trình <strong><a href="https://k89.info/khuyen-mai-k89bet">khuyến mãi K89Bet</a></strong> hấp dẫn, không chỉ đa dạng mà còn thú vị như chính kho game của mình. Dưới đây là một số ưu đãi độc quyền dành riêng cho hội viên:</p>
  <h3>🥈Ưu đãi nạp thưởng cho thành viên</h3>
  <ul>
    <li>Nhận thưởng từ 68.000VND đến 28.000.000VND khi nạp tiền K89Bet lần đầu tiên.</li>
    <li>Tặng 50% số tiền nạp lần thứ hai cho các trò Nổ hũ hoặc Bắn cá.</li>
    <li>Thưởng 100% giá trị nạp đầu cho nửa hũ hoặc Bắn cá, tối đa 188.000VND.</li>
    <li>Nhận thêm 5% khi nạp tiền vào mỗi Chủ nhật hàng tuần.</li>
    <li>Mỗi lần nạp tiền sẽ nhận thêm 1% từ chương trình ưu đãi của công ty.</li>
  </ul>
  <h3>🥈Các ưu đãi khác tại K89Bet</h3>
  <ul>
    <li>Hoàn trả từ 0.4% đến 2% cho mỗi đơn cược mà không có giới hạn.</li>
    <li>Nhận thưởng lên đến 558.000VND mỗi ngày khi điểm danh.</li>
    <li>Tham gia Casino K89Bet và có cơ hội nhận thưởng lên đến 8.888.000VND với vé cược may mắn.</li>
    <li>Tặng thưởng lên đến 50.000.000VND cho vé cược Nổ hũ may mắn.</li>
    <li>Hỗ trợ tiền thưởng lên đến 10.000.000VND cho các ván Baccarat thắng thua liên tiếp.</li>
    <li>Đơn cược Baccarat từ 50k trở lên sẽ nhận được bảo hiểm Baccarat tới 20% với mức tối đa 1.888.000VND.</li>
    <li>Với doanh thu cược Thể thao hợp lệ từ 28.000k trở lên, nhận thưởng lên đến 888.000VND.</li>
  </ul>
  <h2>🥇Hướng dẫn đăng ký & đăng nhập K89Bet</h2>
   <img src="/assets/images/huong-dan-dang-ky-dang-nhap-k89bet.webp" alt="Hướng dẫn đăng ký và đăng nhập K89Bet"/>
  <p>Để có thể tham gia cá cược tại K89Bet, bạn cần hoàn thành các bước đăng ký và đăng nhập K89Bet. Dưới đây là hướng dẫn chi tiết để thực hiện các bước này một cách dễ dàng:</p>

  <h3>🥈Hướng dẫn đăng ký tài khoản K89Bet</h3>
  <ol>
    <li>Mở app K89Bet hoặc truy cập trang web <strong>K89Bet com</strong> và nhấn vào "<strong><a href="https://k89.app">Đăng ký</a></strong>".</li>
    <li>Điền tên đăng nhập bằng chữ thường.</li>
    <li>Tạo mật khẩu bao gồm 8 đến 20 ký tự với ít nhất một chữ hoa.</li>
    <li>Nhập số điện thoại chính chủ với bet thủ Việt bắt đầu bằng đầu số +84.</li>
    <li>Nhấn “Đăng ký ngay” và hoàn tất quy trình để kích hoạt tài khoản thành công.</li>
  </ol>

  <h3>🥈Hướng dẫn đăng nhập tài khoản K89Bet</h3>
  <ol>
    <li>Truy cập trang chủ K89Bet hoặc mở ứng dụng và chọn “Đăng nhập”.</li>
    <li>Nhập tên đăng nhập và mật khẩu đã tạo.</li>
    <li>Bấm “Đăng nhập” để vào tài khoản nếu thông tin hợp lệ.</li>
  </ol>
  <h2>🥇Kết luận</h2>
  <p>Bài viết đã cung cấp toàn bộ các thông tin mới nhất về tân binh <strong>K89Bet</strong>, giúp bạn nhận ra đây là một sân chơi tiềm năng dành cho bet thủ thực thụ. Dù bạn là người mới hay cược thủ chuyên nghiệp, K89Bet đều mang đến những trò chơi phù hợp để trải nghiệm. Đừng bỏ lỡ cơ hội tham gia nền tảng cá cược uy tín, an toàn này hãy đăng ký tài khoản ngay hôm nay để không bỏ lỡ bất kỳ cơ hội nào.</p>`
  }

  const renderContentDesktop = (
    <Box >
      <Markdown children={data.content} />
    </Box>
  );



  return (
    <Stack component="section" sx={{ pb: 5, position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        <FloatLine vertical sx={{ top: 0, left: 80 }} />
        <Container>{renderContentDesktop}</Container>
      </MotionViewport>
    </Stack>
  );
}


// ----------------------------------------------------------------------






import CustomNavbarLandingPage from "../../../navbar.jsx";
import useDeviceType from "../../../../utilities/ResizePage.jsx";

const AboutTemplate = () => {
    const deviceType = useDeviceType();
    const arrImage = deviceType === 'Desktop' ? [1,2,3] : [1] ;
    return (
        <>
            <div className="flex flex-col w-full about-container gap-5">
                <CustomNavbarLandingPage/>
                <div className="flex flex-col">
                    {/*<div className="flex gap-4 justify-center animate__animated animate__bounceInDown">*/}
                    {/*    {*/}
                    {/*        arrImage.map(items => (*/}
                    {/*            <>*/}
                    {/*                <img src={"public/About/about-" + items + ".jpg"} alt=""/>*/}
                    {/*            </>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</div>*/}
                    <div className="img-container">
                    </div>
                    <div className="text-center text-sm animate__animated animate__bounceInUp">
                        <p>
                            Tại An Nhung Spa,<br/> chúng tôi chuyên cung cấp dịch vụ chăm sóc và phục hồi chuyên nghiệp cho
                            các sản phẩm đồ hiệu cao cấp. Chúng tôi hiểu rằng túi xách, giày dép, ví da và các phụ kiện
                            thời trang không chỉ là vật dụng mà còn là biểu tượng phong cách, đẳng cấp và những kỷ niệm
                            quý giá của bạn.
                        </p>
                        {/*<p> Với đội ngũ chuyên gia lành nghề và công nghệ hiện đại, chúng tôi cam kết mang đến sự chăm*/}
                        {/*    sóc tốt nhất, từ làm sạch sâu, phục hồi màu sắc, sửa chữa cho đến bảo vệ toàn diện. Mỗi sản*/}
                        {/*    phẩm đều được xử lý một cách tỉ mỉ, giữ trọn vẻ đẹp và giá trị nguyên bản.*/}
                        {/*</p>*/}
                        {/*<p> Hãy trải nghiệm sự an tâm khi giao phó những món đồ yêu quý của bạn cho các chuyên gia tại*/}
                        {/*    An Nhung Spa. Nơi nghệ thuật thủ công hòa quyện cùng sự đổi mới!*/}
                        {/*</p>*/}
                        <p className="mt-5">
                        📞 Liên hệ với chúng tôi để những món đồ hiệu của bạn được chăm sóc một cách tốt
                        nhất!
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutTemplate;

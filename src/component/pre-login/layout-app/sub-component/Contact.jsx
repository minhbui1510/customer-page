import {IoLocationSharp} from "react-icons/io5";
import {FaFacebook, FaYoutube} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {IoMdPhonePortrait} from "react-icons/io";
import CustomNavbarLandingPage from "../../../navbar.jsx";
import {useEffect, useState} from "react";

const Contact = () => {
    const [map, setMap] = useState(<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.8992569017014!2d107.0820085769083!3d20.95656048067478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a59b7a25c00b9%3A0x2dc7e449cec2b328!2zQW4gTmh1bmcgU3BhLSBI4buHIHRo4buRbmcgY2jEg20gc8OzYyAmIHPhu61hIGNo4buvYSDEkeG7kyBoaeG7h3UgKEdpw6B5L3TDumkvIHRo4bqvdCBsxrBuZy92w60uLik!5e0!3m2!1svi!2s!4v1735720881956!5m2!1svi!2s"
                    width={600} height={450}></iframe>);
    const [addressList, setAddressList] = useState([
         {
                branch: 'CS1',
                isChoose: true,
                name: 'Số 68 tổ 4 khu 2 phường Trần Hưng Đạo, Hạ Long , Ha Long, Vietnam',
                map: <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.8992569017014!2d107.0820085769083!3d20.95656048067478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a59b7a25c00b9%3A0x2dc7e449cec2b328!2zQW4gTmh1bmcgU3BhLSBI4buHIHRo4buRbmcgY2jEg20gc8OzYyAmIHPhu61hIGNo4buvYSDEkeG7kyBoaeG7h3UgKEdpw6B5L3TDumkvIHRo4bqvdCBsxrBuZy92w60uLik!5e0!3m2!1svi!2s!4v1735720881956!5m2!1svi!2s"
                    width={600} height={450}></iframe>
            },
            {
                branch: 'CS2',
                isChoose: false,
                name: 'Số 11 đường Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội ',
                map: <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4576298543698!2d105.80189127681821!3d21.014367480631428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5fcc0a8361%3A0x226e96361acd699e!2zMTEgxJAuIFRy4bqnbiBEdXkgSMawbmcsIFRydW5nIEhvw6AsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1736690935462!5m2!1svi!2s"
                     width={600} height={450}></iframe>
            }
    ])
    const info = {
        facebook: {
            name: 'annhung.brandspa',
            link: 'https://www.facebook.com/annhung.brandspa'
        },
        phone: '033 600 0988',
        gmail: 'annhung.brandspa@gmail.com'
    }
    useEffect(() => {
    }, [info]);
    const chooseAddress = (address) => {
        addressList.forEach((item) => item.isChoose = false);
        address.isChoose = true;
        setMap(address.map)
    }
    return (
        <>
            <div className="w-full flex flex-col gap-5">
                <CustomNavbarLandingPage/>
                <div className="contact-container flex-col sm:flex-row gap-9 p-5 lg:p-0">
                    <div className="w-full md:w-6/12 flex flex-col gap-9">
                        <div className="animate__animated animate__bounceInUp">
                            <h2 className="text-2xl font-semibold m-2">Địa chỉ</h2>
                            <div className="box-info">
                                {addressList.map((items) => (
                                    <>
                                        <div className="flex items-center" onClick={() => chooseAddress(items)}>
                                            <IoLocationSharp
                                                className={`text-2xl scale mr-2 ${items.isChoose ? 'choose' : ''}`}/>
                                            <span className={items.isChoose ? 'choose' : ''}> {items.name}</span>
                                        </div>
                                    </>
                                ))}
                            </div>

                        </div>
                        <div className="animate__animated animate__bounceInUp">
                            <h2 className="text-2xl font-semibold m-2">Liên lạc</h2>
                            <div className="box-info flex flex-col gap-3">
                                <a href={info.facebook.link} target="_blank">
                                    <div className="flex items-center cursor-pointer fb">
                                        <FaFacebook
                                            className="text-2xl mr-2"/><span> {info.facebook.name}</span>
                                    </div>
                                </a>
                                <a href={'mailto:' + info.gmail}>
                                    <div className="flex items-center cursor-pointer mail">
                                        <SiGmail className="text-2xl mr-2"/><span> {info.gmail}</span>
                                    </div>
                                </a>
                                <a href={'tel:' + info.phone}>
                                    <div className="flex items-center cursor-pointer">
                                        <IoMdPhonePortrait className="text-2xl mr-2"/><span> {info.phone}</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 animate__animated animate__bounceInUp">
                        {map}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;

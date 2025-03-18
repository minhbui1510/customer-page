import formatVND from "../utilities/currency.jsx";

const products = [
    {
        "id": 1,
        "name": "Vệ sinh giày",
        "price": `${formatVND(99000)} - ${formatVND(139000)}`,
        "description": (
            <>
                <div className="flex flex-col gap-4">
                    <div className="content-items">
                        <span className="content-title">Vệ sinh giày sneaker</span>
                        <div className="menu">
                            <p className="content-name">Thông thường</p>
                            <p className="content-price">{formatVND(99000)}</p>
                        </div>
                        <div className="menu">
                            <p className="content-name">Cao cấp</p>
                            <p className="content-price">{formatVND(139000)}</p>
                        </div>
                    </div>
                    <div className="content-items">
                        <span
                            className="content-title">Vệ sinh giày tây, chất liệu đặc biệt (Da lộn, vải bò, nhung nỉ)</span>
                        <div className="menu">
                            <p className="content-name">Vệ sinh giày tây</p>
                            <p className="content-price">{formatVND(139000)}</p>
                        </div>

                        <div className="menu">
                            <p className="content-name">Vệ sinh giày chất liệu đặc biệt</p>
                            <p className="content-price">{formatVND(139000)}</p>
                        </div>
                    </div>
                    <div className="content-items">
                        <span className="content-title">Vệ sinh dép, cao gót</span>
                        <div className="menu">
                            <p className="content-name">Dép</p>
                            <p className="content-price">{formatVND(88000)}</p>
                        </div>
                        <div className="menu">
                            <p className="content-name">Cao gót</p>
                            <p className="content-price">{formatVND(88000)}</p>
                        </div>
                    </div>

                </div>
            </>
        )
    },
    {
        "id": 2,
        "name": "Vệ sinh túi ví, vali",
        "price": `${formatVND(275000)} - ${formatVND(599000)}`,
        "description": (
            <div className="flex flex-col gap-4">
                <div className="content-items">
                    <span className="content-title">Vệ sinh túi / ví</span>
                    <div className="menu">
                        <p className="content-name">sỉze S</p>
                        <p className="content-price"> {formatVND(275000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">size M</p>
                        <p className="content-price"> {formatVND(320000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">size L</p>
                        <p className="content-price"> {formatVND(399000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">size lớn</p>
                        <p className="content-price"> {formatVND(590000)}</p>
                    </div>
                </div>
                <div className="content-items">
                    <span className="content-title">Vệ sinh vali</span>
                    <div className="menu">
                        <p className="content-name">sỉze S</p>
                        <p className="content-price"> {formatVND(550000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">size M</p>
                        <p className="content-price"> {formatVND(665000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">size L</p>
                        <p className="content-price"> {formatVND(885000)}</p>
                    </div>
                </div>
            </div>

        )
    },
    {
        "id": 3,
        "name": "Xử lý đế ố vàng, phục hồi màu đế",
        "price": `${formatVND(180000)} - ${formatVND(240000)}`,
        "description": (
            <>
                <div className="content-items">
                    <div className="menu">
                        <p className="content-name">Sơn phục hồi tình trạng nhẹ</p>
                        <p className="content-price">{formatVND(180000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Sơn phục hồi tình trạng nặng</p>
                        <p className="content-price">{formatVND(240000)}</p>
                    </div>
                       <div className="menu">
                        <p className="content-name">Sơn phục hồi màu đế</p>
                        <p className="content-price">{formatVND(350000)}</p>
                    </div>
                </div>
            </>
        )
    },
    {
        "id": 4,
        "name": "Dán đế",
        "price": `${formatVND(280000)} - ${formatVND(699000)}`,
        "description": (
            <div className="content-items">
                <div className="menu">
                    <p className="content-name">Dán đế bảo vệ sole giày sneaker</p>
                    <p className="content-price"> {formatVND(499000)}</p>
                </div>
                <div className="menu">
                    <p className="content-name">Dán đế bảo vệ Vibram dép, cao gót</p>
                    <p className="content-price"> {formatVND(280000)}</p>
                </div>
                <div className="menu">
                    <p className="content-name">Dán đế bảo vệ Vibram giày tây</p>
                    <p className="content-price"> {formatVND(400000)}</p>
                </div>
                <div className="menu">
                    <p className="content-name">Dán đế bảo vệ Vbram đúc giày tây</p>
                    <p className="content-price"> {formatVND(400000)}</p>
                </div>
                <div className="menu">
                    <p className="content-name">Dán đế bảo vệ Vibram kèm Sole giày tây</p>
                    <p className="content-price"> {formatVND(499000)}</p>
                </div>
                <div className="menu">
                    <p className="content-name">Dán đế bảo vệ Vibram đúc kèm Sole giày tây</p>
                    <p className="content-price"> {formatVND(499000)}</p>
                </div>
            </div>
        )
    },
    {
        "id": 5,
        "name": "Vệ sinh áo da",
        "price": `${formatVND(599000)} - ${formatVND(799000)}`,
        "description": (
            <>
                <div className="content-items">
                    <div className="menu">
                        <p className="content-name">Vệ sinh áo da basic</p>
                        <p className="content-price">{formatVND(599000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Vệ sinh áo da mix chất liệu</p>
                        <p className="content-price">{formatVND(799000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Vệ sinh dưỡng phục hồi màu</p>
                        <p className="content-price">{formatVND(900000)}</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Vệ sinh dưỡng phục hồi da</p>
                        <p className="content-price">{formatVND(1200000)}</p>
                    </div>
                </div>
            </>
        )
    },
    {
        "id": 6,
        "name": "Dịch vụ khác",
        "price": "Tư vấn riêng",
        "description": (
            <>
                <div className="content-items">
                    <div className="menu">
                        <p className="content-name">Mạ khoá logo</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Phục hồi màu - repaint</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Dán keo</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Khâu vá</p>
                    </div>
                    <div className="menu">
                        <p className="content-name">Custom thay đổi hoạ tiết</p>
                    </div>
                </div>
            </>
        )
    }
]

export default products;
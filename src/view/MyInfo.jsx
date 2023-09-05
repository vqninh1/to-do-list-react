const MyInfo = ({name = 'ninhtito', infor = 'giới tính nam năm nay 22 tuổi', like = ['keyboard', 'mouse', 'laptop']}) => {
    return (
        <div>
            <h1>Tôi tên là {name}</h1>
            <p>Thông tin giới thiệu của tôi: {infor}</p>
            <ul>
                {like.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MyInfo
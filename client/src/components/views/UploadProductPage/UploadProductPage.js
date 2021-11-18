import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd'
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;
const Continent = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" },
]

function UploadProductPage() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [continent, setContinent] = useState(1)
    const [image, setImage] = useState([])

    const titleChangeHandler = (e) => {
        setTitle(e.currentTarget.value);
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.currentTarget.value);
    }

    const priceChangeHandler = (e) => {
        setPrice(e.currentTarget.value);
    }

    const continentChangeHandler = (e) => {
        setContinent(e.currentTarget.value);
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 여행 상품 업로드 </h2>
            </div>
            <Form>

                <FileUpload />
                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={title} />
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={description} />
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={price} />
                <br />
                <br />
                <select onChange={continentChangeHandler} value={continent}>

                    {Continent.map(item => (
                        <option ket={item.key} value={item.key}> {item.value} </option>
                    ))}

                </select>
                <br />
                <br />
                <Button>확인</Button>
            </Form>
        </div>
    )
}

export default UploadProductPage
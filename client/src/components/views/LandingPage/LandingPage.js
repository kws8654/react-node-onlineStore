import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';
import { Icon, Col, Card, Row, Carousel } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';


function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)

    useEffect(() => {

        let body = {
            skip: Skip,
            limit: Limit
        }

        axios.post('/api/product/products', body)
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.productInfo)
                } else {
                    alert("업로드 실패")
                }

            })
    }, [])

    // const loadMoreHandler = () => {


    // }

    const renderCards = Products.map((product, index) => {

        console.log('product', product)

        return (
            <Col lg={6} md={8} xs={24} key={index}>
                <Card cover={<ImageSlider images={product.images} />}>
                    <Meta
                        title={product.title}
                        description={`$${product.price}`} />
                </Card>
            </Col>
        )
    })

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center ' }}>
                <h2>Let's Travel <Icon type="heart" /></h2>
            </div>
            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={loadMoreHandler}>more</button>
            </div>
        </div>
    )
}

export default LandingPage

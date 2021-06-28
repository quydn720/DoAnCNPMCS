import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap'
import axios from 'axios';

function Element__delete(props) {
    const { id } = useParams();
    const [products, setProduct] = useState({});
    useEffect(() => {
        async function fetchData() {
            const requestUrl = `http://localhost:3001/api/san-pham/${id}`;
            const respone = await fetch(requestUrl);
            const responseJson = await respone.json();
            const { data } = responseJson;
            setProduct(data);
            console.log(id)
        }
        fetchData();
    }, [id])
    let history = useHistory();
    function Delete() {
        let request = {
            ma_san_pham: id
        }

        axios({
            method: 'delete',
            url: 'http://localhost:3001/api/san-pham',
            data: request,
            withCredentials: true
        }).then(resp => {
            console.log(resp.data.data)
            if (resp.data.success) {
                alert("Xóa sản phẩm thành công")
                history.push("/Product_page");
            }
        })
    }
    return (
        <div>
            <div className="product-list" >

                <div className="product-container">
                    {products && (
                        <>
                            <div className="card" id={products.ma_san_pham}>
                                <div className="title">{products.ten_san_pham}</div>
                                <br />
                                <div className="img">
                                    <img src={products.file && products.file[0]}></img>
                                </div>
                                <div className="text">{products.gia_tien}$</div>
                                <br />


                            </div>
                            <div className="container2">
                                <div className="title">
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Tên sản phẩm
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.ten_san_pham} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Giá
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.gia_tien} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Tên thương hiệu
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.ten_thuong_hieu} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Xuất xứ
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.xuat_xu} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <div class="button" onClick={Delete} style={{ textAlign: "center" }}>
                                            <button className="btn btn-danger mr-2">Xóa sản phẩm</button>
                                        </div>
                                    </Form.Group>

                                </div>
                            </div>
                        </>

                    )}
                </div>

            </div>
        </div>
    );
}

export default Element__delete;
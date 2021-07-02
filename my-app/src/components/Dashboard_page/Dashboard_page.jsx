import React from 'react';
import Authorization_Header from '../Authorization/Authorization_Header';
import './Dashboard_page.css'
import { Nav } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import Product__board from './Product__board/Product__board';
function Dashboard_page(props) {
    return (
        <div>
            <>
                <Authorization_Header />
                <h2 className="Dashboard_title">Dashboard</h2>
                <Nav variant="pills" defaultActiveKey="/Dashboard/Product__board">
                    <Nav.Item>
                        <Nav.Link href="/Dashboard/Product__board">Total Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Details</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
            <>
                <Switch>
                    <Route
                        path="/Dashboard/Product__board"
                        component={Product__board}
                    ></Route>
                </Switch>
            </>
        </div>
    );
}

export default Dashboard_page;